////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Dialog control
////////////////////////////////////////////////////////////////////////////////

"use strict";

$.fn.dialog = function(options) {
  let _jqContent = null;
  let _jqOldParent = null;

  //////////////////////////////////////////////////////////////////////////////
  // Full reset
  //////////////////////////////////////////////////////////////////////////////

  this.close = function() {
    this.show(false);

    if (_jqContent) {
      _jqContent.detach().appendTo(_jqOldParent);
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Full reset
  //////////////////////////////////////////////////////////////////////////////

  this.init = function(options) {
    this.initData(options);
    this.initUI();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Initialize properties according to the options passed
  //////////////////////////////////////////////////////////////////////////////

  this.initData = function(options) {
    this.options = options;
    this.display = this.options ? (this.css("flex-direction") ? "flex" : "block") : null;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Create jQuery elements and event handlers
  //////////////////////////////////////////////////////////////////////////////

  this.initUI = function() {
    this.empty();

    var content = this.options?.content ?? "";

    if (typeof content == "string") {
      this.append(content);
      _jqOldParent = null;
    } else {
      _jqOldParent = content;
      _jqContent = _jqOldParent.find(".ui-dialog-content");
      _jqContent.detach().appendTo(this);
    }

    var that = this;
    var jqClose = this.find(".ui-dialog-icon.close");
    
    if (jqClose.length > 0) {
      jqClose.on("click", function () {
        that.close(false);
      })
    }

    this.show(true);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Show or hide dialog
  //////////////////////////////////////////////////////////////////////////////

  this.show = function(isShow) {
    var handler = this.options?.handler;

    if (handler) {
      handler(isShow ? "before-show" : "before-hide");
    }

    this.css("display", isShow ? this.display : "none");

    if (handler) {
      handler(isShow ? "after-show" : "after-hide");
    }

    if (!isShow) {
      return;
    }

    let jqInputs = this.find("[tabindex='0']");

    if (!jqInputs || (jqInputs.length <= 0)) {
      jqInputs = this.find("input:not(:read-only), select:not(:read-only), textarea:not(:read-only)");

      if (!jqInputs || (jqInputs.length <= 0)) {
        return;
      }
    }

    let jqInput = $(jqInputs[0]);

    if (jqInput.select) {
      jqInput.select();
    } else {
      jqInput.focus();
    }
  }
  
  //////////////////////////////////////////////////////////////////////////////
  // Entry point
  //////////////////////////////////////////////////////////////////////////////

  this.init(options);
}

////////////////////////////////////////////////////////////////////////////////