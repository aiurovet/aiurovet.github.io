////////////////////////////////////////////////////////////////////////////////
// Customized from https://tiiny.host/blog/how-convert-static-site-pwa/
////////////////////////////////////////////////////////////////////////////////

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("tapbc").then((cache) => {
      return cache.addAll([
        "/tapbc",
        "/tapbc/index.html",
        "/tapbc/ux/images/exit.svg",
        "/tapbc/ux/images/last.svg",
        "/tapbc/ux/images/menu.svg",
        "/tapbc/ux/images/next.svg",
        "/tapbc/ux/images/tapbc.svg",
        "/tapbc/dl/data.js",
        "/tapbc/dl/extn.js",
        "/tapbc/dl/json.js",
        "/tapbc/lib/scripts/jquery.slim.min.js",
        "/tapbc/ux/scripts/clip.js",
        "/tapbc/ux/scripts/core.js",
        "/tapbc/ux/scripts/main.js",
        "/tapbc/ux/scripts/pref.js",
        "/tapbc/ux/styles/main.css",
        "/tapbc/ux/styles/pref.css",
        "/tapbc/ux/styles/version.css"
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