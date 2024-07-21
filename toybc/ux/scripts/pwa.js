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
  
  sw.getRegistrations().then((registrations) => {
    for (let registration of registrations) {
        registration.unregister();
    }
  });
 
  sw.register("/toybc/service-worker.js", {scope: "/toybc/"})
    .then((reg) => {
      console.log(`The service worker has been registered: ${reg}`);
    })
    .catch((error) => {
      console.log(error);
    });
}

////////////////////////////////////////////////////////////////////////////////