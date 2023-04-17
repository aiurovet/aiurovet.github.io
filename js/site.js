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

function getToHomeClass() {
  return "to-home";
}

////////////////////////////////////////////////////////////////////////////////

function setToHome() {
  const homePage = getHomePage();
  const toHomeClass = getToHomeClass();

  $(`.${toHomeClass}`).each(function (i) {
    const jqElem = $(this);

    if (jqElem) {
      jqElem.attr('href', homePage);
      jqElem.removeAttr('target');
    }
  });

  const jqHeader = $('header');

  if (!jqHeader.hasClass(toHomeClass)) {
    jqHeader.addClass(toHomeClass);
  }
}

////////////////////////////////////////////////////////////////////////////////