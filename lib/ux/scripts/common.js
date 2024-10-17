////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Common UX functions
////////////////////////////////////////////////////////////////////////////////

var MinPostActionTimeout = 1;

////////////////////////////////////////////////////////////////////////////////

String.prototype.toHtml = function() {
  if ((this === undefined) || (this === null)) {
    return null;
  }

  let element = document.createElement("span");
  element.innerText = this;

  let result = element.innerHTML;
  delete element;

  return result;
};

////////////////////////////////////////////////////////////////////////////////

$.fn.enable = function(isEnabled) {
  let isDisabled = isEnabled === false;

  this.prop("disabled", isDisabled);
  this.css({
    "opacity": isDisabled ? 0.25 : 1.0,
    "pointer-events": isDisabled ? "none" : "all"
  });
};

////////////////////////////////////////////////////////////////////////////////

$.fn.getChildrenWithUserInput = function(isEnabled) {
  let a = isEnabled ? ":not(:read-only)" : "";

  return this.find(`input${a}, select${a}, textarea${a}, .ui-listedit-item${a}`);
};

////////////////////////////////////////////////////////////////////////////////

postAction = function(handler, timeout) {
  setTimeout(handler, timeout ?? MinPostActionTimeout);
};

////////////////////////////////////////////////////////////////////////////////

$.fn.postFocus = function(timeout) {
  let that = this;

  setTimeout(function() {
    that.focus();
  }, timeout ?? MinPostActionTimeout);
};

////////////////////////////////////////////////////////////////////////////////

$.fn.scrollIntoView = function(options) {
  this[0].scrollIntoView(options ?? {behaviour: "smooth"});
};

////////////////////////////////////////////////////////////////////////////////