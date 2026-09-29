const CACHE = 'anthkeys-v52.2';
const CFG_CACHE = 'anthkeys-notify-cfg';
const CFG_URL = 'notify-cfg.json';
const URLS = ['anthkeys.html', '404.html', 'manifest.json', 'js/mqtt.min.js', 'js/qrcode.js', 'js/i18n-recent.js', 'js/i18n-wn.js', 'icon-192.png', 'icon-512.png', 'icon-maskable-192.png', 'icon-maskable-512.png', 'apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(URLS))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE && k !== CFG_CACHE).map(k => caches.delete(k))))
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
  if (data.type === 'NOTIFY_SCHEDULE') {
    e.waitUntil(writeCfg({
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

// Chrome only, installed PWA only, and the browser picks the time.
self.addEventListener('periodicsync', e => {
  if (e.tag !== 'anthkeys-daily-tip') return;
  e.waitUntil(showDailyTip());
});

self.addEventListener('fetch', e => {
  const req = e.request;
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

