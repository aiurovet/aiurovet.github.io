const CACHE = 'anthkeys-v53.2';
const CFG_CACHE = 'anthkeys-notify-cfg';
const CFG_URL = 'notify-cfg.json';
const URLS = ['anthkeys.html', '404.html', 'manifest.json', 'js/mqtt.min.js', 'js/qrcode.js', 'js/i18n-recent.js', 'js/i18n-wn.js', 'icon-192.png', 'icon-512.png', 'icon-maskable-192.png', 'icon-maskable-512.png', 'apple-touch-icon.png'];

self.addEventListener('install', e => {
  // Take over as soon as the new worker is ready so the refreshed asset cache
  // (which includes the freshly fetched anthkeys.html) is the one serving the
  // very next navigation. Without this, a PWA keeps its old cache until the
  // previous worker is discarded, which can delay fixes for multiple loads.
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(URLS))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE && k !== CFG_CACHE).map(k => caches.delete(k))))
      .catch(() => null)
  );
  self.clients.claim();
});

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
// (version, dark mode) survive a partial write.
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

// Compares the running build with the published one. Nothing is ever pushed to
// the user: updates arrive silently through the service worker, and this only
// answers the "Check for updates now" button in About.
function checkUpdateInBackground(manual) {
  return readCfg().then(cfg => {
    if (!cfg) return { state: 'no-config' };
    if (!cfg.version) return { state: 'unknown-version' };
    return latestPublishedVersion().then(latest => {
      if (!latest) return { state: 'offline', running: cfg.version };
      if (verCmp(latest, cfg.version) <= 0) return { state: 'current', latest: latest, running: cfg.version };
      return { state: 'available', latest: latest, running: cfg.version };
    });
  }).catch(() => ({ state: 'error' }));
}

self.addEventListener('message', e => {
  const data = e.data || {};
  if (data.type === 'SKIP_WAITING') {
    self.skipWaiting();
    return;
  }
  if (data.type === 'REPORT_VERSION') {
    // Sent on every load so the worker always knows which build the user is
    // actually running.
    e.waitUntil(patchCfg({
      version: data.version || '',
      dark: !!data.dark
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

