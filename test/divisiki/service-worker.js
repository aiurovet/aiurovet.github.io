////////////////////////////////////////////////////////////////////////////////
// Customized from https://tiiny.host/blog/how-convert-static-site-pwa/
////////////////////////////////////////////////////////////////////////////////

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("divisiki").then((cache) => {
      return cache.addAll([
        "/test/divisiki",
        "/test/divisiki/index.html?v=0.8.1",
        "/test/divisiki/ux/images/divisiki.svg?v=0.8.1",
        "/test/divisiki/ux/images/exit.svg?v=0.8.1",
        "/test/divisiki/ux/images/menu.svg?v=0.8.1",
        "/test/divisiki/ux/images/no.svg?v=0.8.1",
        "/test/divisiki/ux/images/play.svg?v=0.8.1",
        "/test/divisiki/ux/images/pref.svg?v=0.8.1",
        "/test/divisiki/ux/images/yes.svg?v=0.8.1",
        "/test/divisiki/dl/data.js?v=0.8.1",
        "/test/divisiki/dl/game.js?v=0.8.1",
        "/test/divisiki/dl/time_limit_type.js?v=0.8.1",
        "/test/divisiki/dl/time_limits.js?v=0.8.1",
        "/test/divisiki/dl/user.js?v=0.8.1",
        "/test/divisiki/ux/scripts/core.js?v=0.8.1",
        "/test/divisiki/ux/scripts/main.js?v=0.8.1",
        "/test/divisiki/ux/scripts/pref.js?v=0.8.1",
        "/test/divisiki/ux/scripts/timer.js?v=0.8.1",
        "/test/divisiki/ux/styles/info.css?v=0.8.1",
        "/test/divisiki/ux/styles/main.css?v=0.8.1",
        "/test/divisiki/ux/styles/pref.css?v=0.8.1",
        "/lib/dl/extensions.js?v=0.8.1",
        "/lib/dl/json.js?v=0.8.1",
        "/lib/import/scripts/jquery-3.7.1.slim.min.js",
        "/lib/ux/images/close.svg?v=0.8.1",
        "/lib/ux/scripts/common.js?v=0.8.1",
        "/lib/ux/scripts/dialog.js?v=0.8.1",
        "/lib/ux/scripts/listedit.js?v=0.8.1",
        "/lib/ux/scripts/msgbox.js?v=0.8.1",
        "/lib/ux/styles/dialog.css?v=0.8.1",
        "/lib/ux/styles/help.css?v=0.8.1",
        "/lib/ux/styles/listedit.css?v=0.8.1",
        "/lib/ux/styles/msgbox.css?v=0.8.1",
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