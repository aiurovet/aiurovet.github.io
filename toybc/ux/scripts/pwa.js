////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// PWA-related functions
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////
// Initialization
////////////////////////////////////////////////////////////////////////////////

function initPwa() {
  var sw = navigator?.serviceWorker;

  if (!sw) {
    return;
  }
  
  sw.register("/toybc/service-worker.js", {scope: "/toybc/"})
    .then((reg) => {
      console.log(`The service worker has been registered: ${reg}`);

      /*reg.onupdatefound = () => {
        var iw = reg.installing;

        iw.onstatechange = () => {
          if ((iw.state === "installed")) {
            if (sw.controller) {
              location.reload();
              console.log("The newer version is available.");
            } else {
              console.log("The latest version has been installed.");
            }
          }
        };
    }*/})
    .catch((error) => {
    });
}

////////////////////////////////////////////////////////////////////////////////