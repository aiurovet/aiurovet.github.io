////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2023
// All rights reserved under MIT license (see LICENSE file)
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Current page's entry point
////////////////////////////////////////////////////////////////////////////////

$(document).ready(function () {
  initHeader();
});

////////////////////////////////////////////////////////////////////////////////
// Returns top-level URL in both local and remote mode
////////////////////////////////////////////////////////////////////////////////

function getRootUrl(withFile) {
  var url = window.location.href;
  var sep = '/';

  if (/^(file:|[A-Z]:|[\/\\])/i.test(url)) {
    const lastDir = 'aiurovet.github.io';
    const startPos = url.indexOf(lastDir);
    const sepWin = '\\';

    if (url.indexOf(sepWin) >= 0) {
      sep = sepWin;
    }

    url = url.substring(0, startPos + lastDir.length) + sep;
  } else {
    url = sep;
  }

  if (withFile) {
    url += 'index.html';
  }

  return url;
}

////////////////////////////////////////////////////////////////////////////////
// Initialize header: set click handler
////////////////////////////////////////////////////////////////////////////////

function initHeader() {
  const jqHeader = $('.header');

  if (!jqHeader.hasClass('home')) {
    jqHeader.click(onHeaderClick);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Header click handler - redirects to the home page
////////////////////////////////////////////////////////////////////////////////

function onHeaderClick() {
  window.location = getRootUrl(true);
}

////////////////////////////////////////////////////////////////////////////////