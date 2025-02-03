////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024-25
// All rights reserved under MIT license (see LICENSE file)
//
// Tab control
////////////////////////////////////////////////////////////////////////////////

"use strict";

$.fn.tabctrl = function(options) {
  var _jqItemCaptions = null;
  var _jqItemContents = null;

  //////////////////////////////////////////////////////////////////////////////
  // Destructor
  //////////////////////////////////////////////////////////////////////////////

  this.clear = function() {
    this.initData();
    this.initUI();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Full reset
  //////////////////////////////////////////////////////////////////////////////

  this.init = function(options) {
    this.initData(options);
    return this.initUI(options);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Initialize properties according to the options passed
  //////////////////////////////////////////////////////////////////////////////

  this.initData = function(options) {
    if ((options === undefined) || (options === null)) {
      this.selectedItemNo = null;
      return this;
    }

    this.selectedItemNo = options?.selectedItemNo ?? 0;

    return this;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Create jQuery elements and event handlers
  //////////////////////////////////////////////////////////////////////////////

  this.initUI = function(options) {
    if ((options === undefined) || (options === null)) {
      _jqItemCaptions.off();
      _jqItemCaptions = null;
      _jqItemContents = null;

      return this;
    }

    const jqChildren = this.children();
    _jqItemCaptions = $(jqChildren[0]).children();

    const that = this;

    _jqItemCaptions.each(function (index) {
      $(this).on("click", function() {
        that.setSelectedItem(index);
      });
    });

    _jqItemContents = $(jqChildren[1]).children();

    this.setSelectedItem();

    return this;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Set the control biggest width and height based on the biggest content elem
  //////////////////////////////////////////////////////////////////////////////

  this.setBounds = function() {
    var maxHeight = 0;
    var maxWidth = 0;

    _jqItemContents.each(function () {
      const jqThis = $(this);
      const curHeight = jqThis.height();
      const curWidth = jqThis.width();

      if (curHeight > maxHeight) {
        maxHeight = curHeight;
      }

      if (curWidth > maxWidth) {
        maxWidth = curWidth;
      }
    });

    _jqItemContents.each(function () {
      const jqThis = $(this);
      jqThis.height(maxHeight);
      jqThis.width(maxWidth);
    });
  }

  //////////////////////////////////////////////////////////////////////////////
  // Set listbox selection
  //////////////////////////////////////////////////////////////////////////////

  this.setSelectedItem = function(itemNo) {
    itemNo ??= this.selectedItemNo ?? 0;
    this.selectedItemNo = itemNo;

    _jqItemCaptions.parent().find("[selected]").removeAttr("selected", false);
    $(_jqItemCaptions[itemNo]).attr("selected", "");

    _jqItemContents.each(function (index) {
      $(this).setVisible(index === itemNo);
    });

    if (!getFocus()) {
      _jqItemContents.getFirstFocusableChild(true)?.focus();
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Entry point
  //////////////////////////////////////////////////////////////////////////////

  return this.init(options);
}

////////////////////////////////////////////////////////////////////////////////