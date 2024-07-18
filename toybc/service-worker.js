////////////////////////////////////////////////////////////////////////////////
// Customized from https://tiiny.host/blog/how-convert-static-site-pwa/
////////////////////////////////////////////////////////////////////////////////

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("my-cache").then((cache) => {
      return cache.addAll([
        "/toybc",
        "/toybc/index.html",
        "/toybc/ux/images/toybc.svg",
        "/toybc/dl/data.js",
        "/toybc/dl/json.js",
        "/toybc/lib/scripts/jquery.slim.min.js",
        "/toybc/ux/scripts/clip.js",
        "/toybc/ux/scripts/core.js",
        "/toybc/ux/scripts/main.js",
        "/toybc/ux/scripts/pref.js",
        "/toybc/ux/styles/main.css",
        "/toybc/ux/styles/pref.css"
      ]);
    })
  );
});

////////////////////////////////////////////////////////////////////////////////

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

////////////////////////////////////////////////////////////////////////////////