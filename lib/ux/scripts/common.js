////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Common UX functions
////////////////////////////////////////////////////////////////////////////////

var MinPostActionTimeout = 10;

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

createEmptyDialog = function(id, className, jqParent) {
  let hasId = id !== undefined && id !== null && id.length > 0;
  let isSelector = hasId && id.startsWith("#");
  let selector = hasId ? isSelector ? id : `#${id}` : null;
  let jqDialog = hasId ? $(selector) : null;

  if (isSelector) {
    id = id.substring(1);
  }

  if (!jqDialog || !jqDialog.length) {
    if (hasId) {
      id = ` id="${id}"`;
    }

    if ((className === undefined) || (className === null)) {
      className = "ui-dialog";
    }

    if (className.trim().length > 0) {
      className = ` class="${className}"`;
    }

    jqDialog = $(`<div${id}${className}></div>`);
  }

  return jqDialog.appendTo(jqParent ?? $("body"));
}

////////////////////////////////////////////////////////////////////////////////

postAction = function(handler, timeout) {
  setTimeout(handler, timeout ?? MinPostActionTimeout);
};

////////////////////////////////////////////////////////////////////////////////

$.fn.postFocus = function(timeout) {
  var that = this;

  setTimeout(function() {
    that.focus();
  }, timeout ?? MinPostActionTimeout);
};

////////////////////////////////////////////////////////////////////////////////

$.fn.scrollIntoView = function(options) {
  this[0].scrollIntoView(options ?? {behaviour: "smooth"});
};

////////////////////////////////////////////////////////////////////////////////