////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2023
// All rights reserved under MIT license (see LICENSE file)
////////////////////////////////////////////////////////////////////////////////

$(document).ready(function () {
  setToHome();
});

////////////////////////////////////////////////////////////////////////////////

function getHomePage() {
  return "index.html";
}

////////////////////////////////////////////////////////////////////////////////

function getIsHomeClass() {
  return "is-home";
}

////////////////////////////////////////////////////////////////////////////////

function onHeaderClick() {
  document.location = getHomePage();
}

////////////////////////////////////////////////////////////////////////////////

function setToHome() {
  const jqHeader = $('header');

  if (!jqHeader.hasClass(getIsHomeClass())) {
    jqHeader.click(onHeaderClick);
  }
}

////////////////////////////////////////////////////////////////////////////////