////////////////////////////////////////////////////////////////////////////////
// Customized from https://tiiny.host/blog/how-convert-static-site-pwa/
////////////////////////////////////////////////////////////////////////////////

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("divisiki").then((cache) => {
      return cache.addAll([
        "/divisiki",
        "/divisiki/index.html",
        "/divisiki/ux/images/menu.svg",
        "/divisiki/ux/images/no.svg",
        "/divisiki/ux/images/yes.svg",
        "/divisiki/ux/images/divisiki.svg",
        "/divisiki/dl/data.js",
        "/divisiki/dl/json.js",
        "/divisiki/dl/users.js",
        "/divisiki/lib/scripts/jquery.slim.min.js",
        "/divisiki/ux/scripts/core.js",
        "/divisiki/ux/scripts/main.js",
        "/divisiki/ux/scripts/pref.js",
        "/divisiki/ux/styles/info.css",
        "/divisiki/ux/styles/main.css",
        "/divisiki/ux/styles/pref.css",
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