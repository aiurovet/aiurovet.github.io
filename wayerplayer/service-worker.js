////////////////////////////////////////////////////////////////////////////////
// Customized from https://tiiny.host/blog/how-convert-static-site-pwa/
////////////////////////////////////////////////////////////////////////////////

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("wayerplayer").then((cache) => {
      return cache.addAll([
        "/wayerplayer",
        "/wayerplayer/index.html?v=0.1.0",
        "/wayerplayer/ux/images/wayerplayer.svg?v=0.1.0",
        "/wayerplayer/dl/data.js?v=0.1.0",
        "/wayerplayer/ux/scripts/main.js?v=0.1.0",
        "/wayerplayer/ux/scripts/pref.js?v=0.1.0",
        "/wayerplayer/ux/styles/main.css?v=0.1.0",
        "/wayerplayer/ux/styles/pref.css?v=0.1.0",
        "/lib/dl/extensions.js?v=0.1.0",
        "/lib/dl/json.js?v=0.1.0",
        "/lib/import/scripts/jquery-3.7.1.slim.min.js",
        "/lib/ux/images/close.svg?v=0.1.0",
        "/lib/ux/scripts/common.js?v=0.1.0",
        "/lib/ux/scripts/dialog.js?v=0.1.0",
        "/lib/ux/scripts/listedit.js?v=0.1.0",
        "/lib/ux/scripts/msgbox.js?v=0.1.0",
        "/lib/ux/styles/dialog.css?v=0.1.0",
        "/lib/ux/styles/help.css?v=0.1.0",
        "/lib/ux/styles/listedit.css?v=0.1.0",
        "/lib/ux/styles/msgbox.css?v=0.1.0",
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