////////////////////////////////////////////////////////////////////////////////

$(document).ready(function () {
  $('header').click(onHeaderClick);
  setToHome();
});

////////////////////////////////////////////////////////////////////////////////

function getHomePage() {
  return "index.html";
}

////////////////////////////////////////////////////////////////////////////////

function setToHome() {
  const homePage = getHomePage();

  $('.to-home').each(function (i) {
    const jqElem = $(this);

    if (jqElem) {
      jqElem.attr('href', homePage);
      jqElem.removeAttr('target');
    }
  });
}

////////////////////////////////////////////////////////////////////////////////

function onHeaderClick() {
  document.location = getHomePage();
}

////////////////////////////////////////////////////////////////////////////////