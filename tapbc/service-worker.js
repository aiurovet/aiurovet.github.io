////////////////////////////////////////////////////////////////////////////////
// Customized from https://tiiny.host/blog/how-convert-static-site-pwa/
////////////////////////////////////////////////////////////////////////////////

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("tapbc").then((cache) => {
      return cache.addAll([
        "/tapbc",
        "/tapbc/index.html?v=0.4.2",
        "/tapbc/ux/images/exit.svg?v=0.4.2",
        "/tapbc/ux/images/last.svg?v=0.4.2",
        "/tapbc/ux/images/menu.svg?v=0.4.2",
        "/tapbc/ux/images/next.svg?v=0.4.2",
        "/tapbc/ux/images/tapbc.svg?v=0.4.2",
        "/tapbc/dl/data.js?v=0.4.2",
        "/tapbc/dl/extn.js?v=0.4.2",
        "/tapbc/dl/json.js?v=0.4.2",
        "/tapbc/lib/scripts/jquery.slim.min.js?v=0.4.2",
        "/tapbc/ux/scripts/clip.js?v=0.4.2",
        "/tapbc/ux/scripts/core.js?v=0.4.2",
        "/tapbc/ux/scripts/main.js?v=0.4.2",
        "/tapbc/ux/scripts/pref.js?v=0.4.2",
        "/tapbc/ux/styles/info.css?v=0.4.2",
        "/tapbc/ux/styles/main.css?v=0.4.2",
        "/tapbc/ux/styles/pref.css?v=0.4.2",
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