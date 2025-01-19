////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Common UX functions
////////////////////////////////////////////////////////////////////////////////

var MinPostActionTimeout = 10;

////////////////////////////////////////////////////////////////////////////////
// Convert a map (an associative array) to string
////////////////////////////////////////////////////////////////////////////////

Object.prototype.toStyleString = function (isFull) {
  if (!this) {
    return null;
  }

  let result = "";

  for (const [key, value] of Object.entries(this)) {
    result += `${key}:${value};`;
  }

  if (result.length <= 0) {
    return null;
  }

  if (!isFull) {
    return result;
  }

  return `style="${result.replaceAll('"', "'")}"`;
};

////////////////////////////////////////////////////////////////////////////////

String.prototype.toHtml = function() {
  if ((this === undefined) || (this === null)) {
    return null;
  }

  if (this.hasMarkup(false)) {
    return this;
  }

  let element = document.createElement("span");
  element.innerText = this;

  let result = element.innerHTML;
  delete element;

  return result;
};

////////////////////////////////////////////////////////////////////////////////

$.fn.enable = function(makeEnabled) {
  const isDisabled = makeEnabled === false;

  if (isDisabled) {
    this.prop("disabled", null);
  } else {
    this.removeProp("disabled");
  }

  this.css({
    "opacity": isDisabled ? 0.25 : 1.0,
    "pointer-events": isDisabled ? "none" : "all"
  });
};

////////////////////////////////////////////////////////////////////////////////

$.fn.getChildrenWithUserInput = function(isEnabled) {
  return this.find("input,select,textarea,.ui-listedit-item").filter(function (i, e) {
    return e.checkVisibility() && (!isEnabled || !e.readOnly);
  });
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

$.fn.setVisible = function(makeVisible, style) {
  const propName = "display";
  const propNameForPrev = "prev-display";
  const defaultValueVisible = "block";
  const valueHidden = "none";

  let oldValue = this.css(propName);
  let isOldVisible = oldValue && (oldValue !== valueHidden);

  if ((makeVisible && isOldVisible) || (!makeVisible && !isOldVisible)) {
    return; // avoid a double-up
  }

  if (makeVisible) {
    let newValue = style ?? this.prop(propNameForPrev);

    if (!newValue || (newValue === valueHidden)) {
      newValue = defaultValueVisible;
    }

    this.css(propName, newValue);
    this.removeProp(propNameForPrev);
  } else {
    this.prop(propNameForPrev, oldValue);
    this.css(propName, valueHidden);
  }
};

////////////////////////////////////////////////////////////////////////////////

function createEmptyDialog(id, className, jqParent) {
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

function onError(e, message) {
  alert(message ?? e.message);

  if (e) {
    throw e;
  }
}

////////////////////////////////////////////////////////////////////////////////

postAction = function(handler, timeout) {
  setTimeout(handler, timeout ?? MinPostActionTimeout);
};

////////////////////////////////////////////////////////////////////////////////