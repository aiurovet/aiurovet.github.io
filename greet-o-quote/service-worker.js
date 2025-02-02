////////////////////////////////////////////////////////////////////////////////
// Customized from https://tiiny.host/blog/how-convert-static-site-pwa/
////////////////////////////////////////////////////////////////////////////////

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("greet-o-quote").then((cache) => {
      return cache.addAll([
        "/greet-o-quote",
        "/greet-o-quote/index.html?v=0.1.0",
        "/greet-o-quote/ux/images/greet-o-quote.svg?v=0.1.0",
        "/greet-o-quote/ux/images/exit.svg?v=0.1.0",
        "/greet-o-quote/ux/images/no.svg?v=0.1.0",
        "/greet-o-quote/ux/images/play.svg?v=0.1.0",
        "/greet-o-quote/ux/images/pref.svg?v=0.1.0",
        "/greet-o-quote/ux/images/yes.svg?v=0.1.0",
        "/greet-o-quote/dl/alignment.js?v=0.1.0",
        "/greet-o-quote/dl/data.js?v=0.1.0",
        "/greet-o-quote/dl/user.js?v=0.1.0",
        "/greet-o-quote/ux/scripts/main.js?v=0.1.0",
        "/greet-o-quote/ux/scripts/pref.js?v=0.1.0",
        "/greet-o-quote/ux/styles/info.css?v=0.1.0",
        "/greet-o-quote/ux/styles/main.css?v=0.1.0",
        "/greet-o-quote/ux/styles/pref.css?v=0.1.0",
        "/lib/dl/extensions.js?v=0.1.0",
        "/lib/dl/json.js?v=0.1.0",
        "/lib/import/styles/acolorpicker-5.3.2.min.css",
        "/lib/import/scripts/acolorpicker-5.3.2.min.js",
        "/lib/import/scripts/html-to-image-1.11.11.min.js",
        "/lib/import/scripts/jquery-3.7.1.slim.min.js",
        "/lib/ux/images/close.svg?v=0.1.0",
        "/lib/ux/scripts/common.js?v=0.1.0",
        "/lib/ux/scripts/dialog.js?v=0.1.0",
        "/lib/ux/scripts/lookback.js?v=0.1.0",
        "/lib/ux/scripts/looktext.js?v=0.1.0",
        "/lib/ux/scripts/listedit.js?v=0.1.0",
        "/lib/ux/scripts/msgbox.js?v=0.1.0",
        "/lib/ux/scripts/selectalign.js?v=0.1.0",
        "/lib/ux/scripts/selectfont.js?v=0.1.0",
        "/lib/ux/scripts/spinner.js?v=0.1.0",
        "/lib/ux/scripts/tabctrl.js?v=0.1.0",
        "/lib/ux/styles/dialog.css?v=0.1.0",
        "/lib/ux/styles/help.css?v=0.1.0",
        "/lib/ux/styles/listedit.css?v=0.1.0",
        "/lib/ux/styles/msgbox.css?v=0.1.0",
        "/lib/ux/styles/tabctrl.css?v=0.1.0",
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