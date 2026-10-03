const CACHE = 'anthkeys-v52.9';
const CFG_CACHE = 'anthkeys-notify-cfg';
const CFG_URL = 'notify-cfg.json';
const TIP_TAG = 'anthkeys-daily-tip';
const UPDATE_TAG = 'anthkeys-update-check';
const URLS = ['anthkeys.html', '404.html', 'manifest.json', 'js/mqtt.min.js', 'js/qrcode.js', 'js/i18n-recent.js', 'js/i18n-wn.js', 'icon-192.png', 'icon-512.png', 'icon-maskable-192.png', 'icon-maskable-512.png', 'apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(URLS))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE && k !== CFG_CACHE).map(k => caches.delete(k))))
      // A new worker only shows up after a visit, but the old cfg still knows
      // which build the user was on, so use that window to announce the change.
      .then(() => checkUpdateInBackground())
      .catch(() => null)
  );
  self.clients.claim();
});

function todayKey() {
  const d = new Date();
  return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
}

function readCfg() {
  return caches.open(CFG_CACHE)
    .then(c => c.match(CFG_URL))
    .then(r => (r ? r.json() : null))
    .catch(() => null);
}

function writeCfg(cfg) {
  return caches.open(CFG_CACHE)
    .then(c => c.put(CFG_URL, new Response(JSON.stringify(cfg), { headers: { 'Content-Type': 'application/json' } })))
    .catch(() => null);
}

// Merge instead of replacing, so fields written by a newer page build
// (version, notified, update strings) survive a partial NOTIFY_SCHEDULE.
function patchCfg(patch) {
  return readCfg()
    .then(cur => writeCfg(Object.assign({}, cur || {}, patch)));
}

// ---- Version comparison, mirroring verCmp() in the page ----
function verCmp(a, b) {
  const pa = String(a || '').split('.').map(x => parseInt(x, 10) || 0);
  const pb = String(b || '').split('.').map(x => parseInt(x, 10) || 0);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const d = (pa[i] || 0) - (pb[i] || 0);
    if (d) return d < 0 ? -1 : 1;
  }
  return 0;
}

// Read the version the deployed page is advertising, straight off the network.
// cache:'no-store' matters: our own precache still holds the page the user
// last loaded, which is exactly the version we are trying to beat.
function latestPublishedVersion() {
  return fetch('anthkeys.html', { cache: 'no-store' })
    .then(r => (r && r.ok) ? r.text() : null)
    .then(html => {
      if (!html) return null;
      const m = html.match(/js\/anthkeys\.js\?v=(\d+(?:\.\d+){0,2})/);
      return m ? m[1] : null;
    })
    .catch(() => null);
}

function notifyUpdateAvailable(cfg, latest) {
  const body = (cfg.updateBody || 'Anthkeys v{ver} is ready. Open it to update.').replace('{ver}', latest);
  const opts = {
    body: body,
    icon: 'icon-192.png',
    badge: 'icon-192.png',
    tag: 'update-' + latest,
    renotify: false,
    data: { url: 'anthkeys.html' }
  };
  if (cfg.dark) opts.theme = 'dark';
  return self.registration.showNotification(cfg.updateTitle || 'Update available', opts);
}

// Runs from periodicsync / activate / an explicit page request, so the user
// hears about a new version without having to open the app.
//
// manual=true comes from the "Check for updates now" button, which now lives
// in About and must work whether or not notifications are switched on. It
// compares versions and reports what it found, but never raises a notification:
// the answer is already on screen, and permission may not even exist.
function checkUpdateInBackground(manual) {
  return readCfg().then(cfg => {
    if (!cfg) return { state: 'no-config' };
    if (cfg.updates === false && !manual) return { state: 'disabled' };
    if (!cfg.version) return { state: 'unknown-version' };
    return latestPublishedVersion().then(latest => {
      if (!latest) return { state: 'offline', running: cfg.version };
      if (verCmp(latest, cfg.version) <= 0) return { state: 'current', latest: latest, running: cfg.version };
      if (cfg.notified === latest) return { state: 'already-notified', latest: latest, running: cfg.version };
      if (manual) return { state: 'available', latest: latest, running: cfg.version };
      return notifyUpdateAvailable(cfg, latest)
        .then(() => patchCfg({ notified: latest }))
        .then(() => ({ state: 'notified', latest: latest, running: cfg.version }))
        .catch(() => ({ state: 'denied', latest: latest, running: cfg.version }));
    });
  }).catch(() => ({ state: 'error' }));
}

function showDailyTip() {
  return readCfg().then(cfg => {
    if (!cfg || !cfg.tip) return null;
    const day = todayKey();
    if (cfg.lastDay === day) return null;
    const opts = {
      body: cfg.tip,
      icon: 'icon-192.png',
      badge: 'icon-192.png',
      tag: 'daily-tip-' + day,
      renotify: false,
      data: { url: 'anthkeys.html' }
    };
    if (cfg.dark) opts.theme = 'dark';
    return self.registration.showNotification(cfg.title || 'Anthkeys', opts)
      .then(() => writeCfg(Object.assign({}, cfg, { lastDay: day })));
  }).catch(() => null);
}

self.addEventListener('message', e => {
  const data = e.data || {};
  if (data.type === 'SKIP_WAITING') {
    self.skipWaiting();
    return;
  }
  if (data.type === 'REPORT_VERSION') {
    // Sent on every load so the worker always knows which build the user is
    // actually running, even when the daily-tip schedule is switched off.
    e.waitUntil(patchCfg({
      version: data.version || '',
      updates: data.updates !== false,
      updateTitle: data.updateTitle || '',
      updateBody: data.updateBody || '',
      vapidPublicKey: data.vapidPublicKey || '',
      pushSubscribeUrl: data.pushSubscribeUrl || '',
      dark: !!data.dark
    }).then(() => {
      // A build just changed under us: let the next background run decide.
      if (data.version) return patchCfg({ notified: '' });
    }));
    return;
  }
  if (data.type === 'CHECK_UPDATE_NOW') {
    const port = e.ports && e.ports[0];
    e.waitUntil(checkUpdateInBackground(!!data.manual).then(res => {
      if (port) {
        try { port.postMessage(res); } catch (err) { }
      }
    }));
    return;
  }
  if (data.type === 'NOTIFY_SCHEDULE') {
    e.waitUntil(patchCfg({
      time: data.time || '',
      lastDay: data.lastDay || '',
      tip: data.tip || '',
      title: data.title || 'Anthkeys',
      dark: !!data.dark
    }));
  }
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  const target = (e.notification.data && e.notification.data.url) || 'anthkeys.html';
  const file = target.split('/').pop() || target;
  e.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      for (const client of list) {
        if ('focus' in client && client.url.indexOf(file) !== -1) return client.focus();
      }
      return self.clients.openWindow(target);
    })
  );
});

// Chrome/Edge only, installed PWA only, and the browser picks the time.
self.addEventListener('periodicsync', e => {
  if (e.tag === TIP_TAG) {
    e.waitUntil(showDailyTip());
    return;
  }
  if (e.tag === UPDATE_TAG) {
    e.waitUntil(checkUpdateInBackground());
  }
});

// One-shot Background Sync: the browser hands this to us as soon as the
// network is back, which covers the gap between periodic timers on browsers
// that throttle them heavily.
self.addEventListener('sync', e => {
  if (e.tag === UPDATE_TAG) {
    e.waitUntil(checkUpdateInBackground());
  }
});

// ---- Web Push (dormant until a backend is configured) ----
// The VAPID public key is not secret and may live in the page; the private
// key never does. Until AK_PUSH_SUBSCRIBE_URL is filled in on the page, no
// subscription is ever created and these handlers stay dormant.
self.addEventListener('push', e => {
  let payload = {};
  try {
    payload = e.data ? e.data.json() : {};
  } catch (err) {
    payload = { body: e.data ? e.data.text() : '' };
  }
  if (payload.silent) return;
  const title = payload.title || 'Anthkeys';
  const opts = {
    body: payload.body || '',
    icon: 'icon-192.png',
    badge: 'icon-192.png',
    tag: payload.tag || 'push-' + Date.now(),
    renotify: false,
    data: { url: payload.url || 'anthkeys.html' }
  };
  e.waitUntil(self.registration.showNotification(title, opts));
});

// A push service can rotate or drop a subscription; re-subscribe in place so
// alerts keep arriving without the user having to reopen the app.
function b64ToUint8Array(base64) {
  if (self.urlBase64ToUint8Array) return self.urlBase64ToUint8Array(base64);
  const padding = '='.repeat((4 - (base64.length % 4)) % 4);
  const raw = atob((base64 + padding).replace(/-/g, '+').replace(/_/g, '/'));
  const out = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) out[i] = raw.charCodeAt(i);
  return out;
}

self.addEventListener('pushsubscriptionchange', e => {
  const reg = self.registration;
  e.waitUntil(
    readCfg().then(cfg => {
      if (!cfg || !cfg.pushSubscribeUrl) return null;
      if (!reg.pushManager) return null;
      return reg.pushManager.getSubscription()
        .then(sub => sub || reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: b64ToUint8Array(cfg.vapidPublicKey)
        }))
        .then(sub => fetch(cfg.pushSubscribeUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ subscription: sub.toJSON() })
        }));
    }).catch(() => null)
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  // Only ever cache GET. Cache.put rejects other methods outright, and
  // intercepting them would break any POST the page or MQTT ever makes.
  if (req.method !== 'GET') return;
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then(res => {
          if (res && res.ok) {
            const clone = res.clone();
            caches.open(CACHE).then(c => c.put(req, clone));
          }
          return res;
        })
        .catch(() =>
          caches.match(req).then(r => r || caches.match('anthkeys.html')).then(r => r || caches.match('404.html'))
        )
    );
    return;
  }
  e.respondWith(
    caches.match(req).then(r => {
      if (r) return r;
      return fetch(req).then(res => {
        if (res && res.ok && res.type === 'basic') {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(req, clone));
        }
        return res;
      }).catch(() => {
        if (req.mode === 'navigate') return caches.match('404.html');
      });
    })
  );
});

