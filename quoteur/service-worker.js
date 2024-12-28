////////////////////////////////////////////////////////////////////////////////
// Customized from https://tiiny.host/blog/how-convert-static-site-pwa/
////////////////////////////////////////////////////////////////////////////////

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("quoteur").then((cache) => {
      return cache.addAll([
        "/quoteur",
        "/quoteur/index.html?v=0.1.0",
        "/quoteur/ux/images/quoteur.svg?v=0.1.0",
        "/quoteur/ux/images/exit.svg?v=0.1.0",
        "/quoteur/ux/images/no.svg?v=0.1.0",
        "/quoteur/ux/images/play.svg?v=0.1.0",
        "/quoteur/ux/images/pref.svg?v=0.1.0",
        "/quoteur/ux/images/yes.svg?v=0.1.0",
        "/quoteur/dl/data.js?v=0.1.0",
        "/quoteur/dl/look.js?v=0.1.0",
        "/quoteur/dl/user.js?v=0.1.0",
        "/quoteur/ux/scripts/core.js?v=0.1.0",
        "/quoteur/ux/scripts/main.js?v=0.1.0",
        "/quoteur/ux/scripts/pref.js?v=0.1.0",
        "/quoteur/ux/styles/info.css?v=0.1.0",
        "/quoteur/ux/styles/main.css?v=0.1.0",
        "/quoteur/ux/styles/pref.css?v=0.1.0",
        "/lib/dl/extensions.js?v=0.1.0",
        "/lib/dl/json.js?v=0.1.0",
        "/lib/import/scripts/html-to-image-1.11.11.min.js",
        "/lib/import/scripts/jquery-3.7.1.slim.min.js",
        "/lib/ux/images/close.svg?v=0.1.0",
        "/lib/ux/scripts/common.js?v=0.1.0",
        "/lib/ux/scripts/dialog.js?v=0.1.0",
        "/lib/ux/scripts/listedit.js?v=0.1.0",
        "/lib/ux/scripts/msgbox.js?v=0.1.0",
        "/lib/ux/scripts/spinner.js?v=0.1.0",
        "/lib/ux/styles/dialog.css?v=0.1.0",
        "/lib/ux/styles/help.css?v=0.1.0",
        "/lib/ux/styles/listedit.css?v=0.1.0",
        "/lib/ux/styles/msgbox.css?v=0.1.0",
        "/ux/styles/fonts.css?v=0.1.0",
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