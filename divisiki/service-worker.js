////////////////////////////////////////////////////////////////////////////////
// Customized from https://tiiny.host/blog/how-convert-static-site-pwa/
////////////////////////////////////////////////////////////////////////////////

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("divisiki").then((cache) => {
      return cache.addAll([
        "/_dl/extensions.js?v=0.3.0",
        "/_ux/images/close.svg?v=0.3.0",
        "/_ux/scripts/common.js?v=0.3.0",
        "/_ux/scripts/dialog.js?v=0.3.0",
        "/_ux/scripts/listedit.js?v=0.3.0",
        "/_ux/scripts/msgbox.js?v=0.3.0",
        "/_ux/scripts/spinner.js?v=0.3.0",
        "/_ux/styles/dialog.css?v=0.3.0",
        "/_ux/styles/help.css?v=0.3.0",
        "/_ux/styles/listedit.css?v=0.3.0",
        "/_ux/styles/msgbox.css?v=0.3.0",
        "/_ux/styles/spinner.css?v=0.3.0",
        "/divisiki",
        "/divisiki/index.html?v=0.3.0",
        "/divisiki/ux/images/divisiki.svg?v=0.3.0",
        "/divisiki/ux/images/exit.svg?v=0.3.0",
        "/divisiki/ux/images/menu.svg?v=0.3.0",
        "/divisiki/ux/images/no.svg?v=0.3.0",
        "/divisiki/ux/images/play.svg?v=0.3.0",
        "/divisiki/ux/images/pref.svg?v=0.3.0",
        "/divisiki/ux/images/yes.svg?v=0.3.0",
        "/divisiki/dl/data.js?v=0.3.0",
        "/divisiki/dl/game.js?v=0.3.0",
        "/divisiki/dl/json.js?v=0.3.0",
        "/divisiki/dl/user.js?v=0.3.0",
        "/divisiki/lib/scripts/jquery-3.7.1.slim.min.js",
        "/divisiki/ux/scripts/core.js?v=0.3.0",
        "/divisiki/ux/scripts/main.js?v=0.3.0",
        "/divisiki/ux/scripts/pref.js?v=0.3.0",
        "/divisiki/ux/scripts/timer.js?v=0.3.0",
        "/divisiki/ux/styles/info.css?v=0.3.0",
        "/divisiki/ux/styles/main.css?v=0.3.0",
        "/divisiki/ux/styles/pref.css?v=0.3.0",
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