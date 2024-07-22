////////////////////////////////////////////////////////////////////////////////
// Customized from https://tiiny.host/blog/how-convert-static-site-pwa/
////////////////////////////////////////////////////////////////////////////////

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("toybc").then((cache) => {
      return cache.addAll([
        "/toybc",
        "/toybc/index.html",
        "/toybc/ux/images/toybc.svg",
        "/toybc/dl/data.js",
        "/toybc/dl/extn.js",
        "/toybc/dl/json.js",
        "/toybc/lib/scripts/jquery.slim.min.js",
        "/toybc/ux/scripts/clip.js",
        "/toybc/ux/scripts/core.js",
        "/toybc/ux/scripts/main.js",
        "/toybc/ux/scripts/pref.js",
        "/toybc/ux/styles/main.css",
        "/toybc/ux/styles/pref.css",
        "/toybc/ux/styles/version.css"
      ]);
    })
  );
});

////////////////////////////////////////////////////////////////////////////////
// Fetching content
////////////////////////////////////////////////////////////////////////////////

self.addEventListener("fetch", (event) => {
  var request = event.request;

  event.respondWith(
    caches.match(request).then((response) => {
      if (response !== undefined) {
        if (response) {
          return response;
        }
      }
      return fetch(request);
    })
  );
});

////////////////////////////////////////////////////////////////////////////////