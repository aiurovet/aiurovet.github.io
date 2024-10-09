////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Editable list control
////////////////////////////////////////////////////////////////////////////////

"use strict";

$.fn.editlist = function(options) {
  let _jqCheck = null;
  let _jqItems = null;
  let _jqLabel = null;
  let _jqRename = null;

  //////////////////////////////////////////////////////////////////////////////
  // Constants
  //////////////////////////////////////////////////////////////////////////////

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

  this.getMaxCols = function() {
    var maxCols = 0;

    for (let item of this.items) {
      var curCols = item.length;

      if (maxCols < curCols) {
        maxCols = curCols;
      }
    }

    return maxCols ? (maxCols * 2).toString() : "";
  }

  //////////////////////////////////////////////////////////////////////////////
  // Full reset
  //////////////////////////////////////////////////////////////////////////////

  this.init = function(options) {
    this.initData(options);
    this.initUI(options);
    this.onCheck();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Initialize properties according to the options passed
  //////////////////////////////////////////////////////////////////////////////

  this.initData = function(options) {
    if ((options === undefined) || (options === null)) {
      this.itemSeparator = null;
      this.itemSeparatorEx = null;
      this.selectedItem = null;
      this.selectedItemNo = null;
      return;
    }

    this.itemSeparator = options.itemSeparator ?? ",";

    if (this.itemSeparator.endsWith(" ")) {
      this.itemSeparatorEx = this.itemSeparator;
    } else {
      this.itemSeparatorEx = this.itemSeparator + " ";
    }

    this.items = options.items ?? [];

    if ((options.selectedItem !== undefined) && (options.selectedItem !== null)) {
      this.selectedItem = this.items[this.selectedItemNo];
      this.selectedItemNo = this.items.indexOf(this.selectedItem);

      if (this.selectedItemNo < 0) {
        this.selectedItemNo = 0;
      }
    } else {
      this.selectedItemNo = options.selectedItemNo ?? 0;
    }

    this.selectedItemNo = options.selectedItemNo ?? 0;
    var lastItemNo = this.items.length - 1;

    if (this.selectedItemNo > lastItemNo) {
      this.selectedItemNo = lastItemNo > 0 ? 0 : lastItemNo;
    } else if (this.selectedItemNo < 0) {
      this.selectedItemNo = 0;
    }

    this.selectedItem = this.selectedItemNo < 0 ? null : this.items[this.selectedItemNo];
  }

  //////////////////////////////////////////////////////////////////////////////
  // Create jQuery elements and event handlers
  //////////////////////////////////////////////////////////////////////////////

  this.initUI = function(options) {
    this.empty();

    if ((options === undefined) || (options === null)) {
      _jqCheck = null;
      _jqItems = null;
      _jqLabel = null;
      _jqRename = null;
      this.isRenameSeparate = false;
      return;
    }

    this.isRenameSeparate = options.isRenameSeparate;

    var readonly = options.isEditable ? "" : "readonly";
    var cols = options.rows ?? this.getMaxCols();
    var rows = options.rows ?? 5;
    var itemsAsStr = (options.items ?? []).join(this.itemSeparatorEx);

    this.append($(`
      <div class="ui-editlist-top">
        <label class="ui-editlist-label"><input class="ui-editlist-check" type="checkbox"/></label>
        ${this.isRenameSeparate ? `
          <div class="ui-dialog-filler"></div>
          <label class="ui-editlist-rename-label"></label>
          ` : ""}
      </div>
      <textarea class="ui-editlist-items" cols="${cols}" rows="${rows}" ${readonly}>${itemsAsStr}</textarea>
      <div class="ui-dialog ui-editlist-popup" style="display: none;"></div>
    `));

    var children = this.children();
    var childrenOfTop = $(children[0]).children();

    _jqLabel = $(childrenOfTop[0])
      .on("click", function () {that.onCheck(true);});

    var that = this;

    _jqCheck = $(_jqLabel.children()[0])
      .on("click", function () {that.onCheck();});

    _jqItems = $(children[1])
      .on("blur", function () {that.setSelectedItem(false);})
      .on("click", function () {that.onClickItems();});

    _jqRename = this.isRenameSeparate ? $(childrenOfTop[2]) : null;

    if (_jqRename) {
      _jqRename
        .on("click", function () {that.onClickRename(false);});
    }

    if (this.items.length <= 0) {
      postAction(function () {
        _jqCheck.prop("checked", true);
        that.onCheck();
      });
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Event handler: when a user clicked the "Revise" checkbox
  //////////////////////////////////////////////////////////////////////////////

  this.onCheck = function(isFlip) {
    var isChecked = _jqCheck.prop("checked");

    if (isFlip) {
      isChecked = !isChecked
      _jqCheck.prop("checked", isChecked);
    }

    _jqItems.prop("readonly", !isChecked);
    _jqRename.css("display", isChecked ? "none" : "inline-block");

    if (isChecked) {
      _jqItems.focus();
      _jqRename.val(null);
    } else {
      this.onClickItems();
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Event handler: when a user clicked the text area
  //////////////////////////////////////////////////////////////////////////////

  this.onClickItems = function() {
    if (_jqItems.is(":focus") && _jqCheck.prop("checked")) {
      return;
    }

    this.setSelectedItem(true);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Event handler: when a user clicks the "Rename" label
  //////////////////////////////////////////////////////////////////////////////

  this.onClickRename = function() {
    let selStart = _jqItems[0].selectionStart;
    let selEnd = _jqItems[0].selectionEnd;
    let fullText = _jqItems.val();
    let selText = fullText.substring(selStart, selEnd);
    let that = this;

    let jqPopup = $(this.find(".ui-editlist-popup"));

    jqPopup.dialog({
      content: `
        <div class="ui-dialog-content">
          <div class="ui-dialog-caption">
            <h4>Rename</h4>
            <div class="ui-dialog-filler"></div>
            <div class="ui-dialog-icon close"></div>
          </div>
          <div class="ui-dialog-client">
            <input class="ui-editlist-rename" type="text" value="${selText}">
          </div>
        </div>
      `,
      handler: function (event) {
        if (event === "before-hide") {
          var replText = jqPopup.find(".ui-editlist-rename").val();
          _jqItems.val(fullText.substring(0, selStart) + replText + fullText.substring(selEnd));
          _jqItems[0].selectionEnd = selStart + replText.length;
          that.setSelectedItem(true);
        }
        else if (event === "after-hide") {
          _jqItems.focus();
        }
      }
    });
  }

  //////////////////////////////////////////////////////////////////////////////
  // Find start and end of the item under given position
  //////////////////////////////////////////////////////////////////////////////

  this.setSelectedItem = function(isFocusRequired) {
    let text = _jqItems.val();
    let position = _jqItems[0].selectionStart;

    text = text.trimEnd();

    var length = text.length;
    var itemSep = this.itemSeparator;
    var endPos = position > length ? length : text.indexOf(itemSep, position);

    if (endPos < 0) {
      endPos = length;
    }

    var itemsBefore = text.substring(0, endPos);
    var startPos = itemsBefore.lastIndexOf(itemSep) + 1;

    var lastItemBefore = itemsBefore.substring(startPos);

    var offset = lastItemBefore.length - lastItemBefore.trimStart().length;
    startPos += offset;

    this.selectedItem = lastItemBefore.substring(offset);
    this.selectedItemNo = itemsBefore.length - itemsBefore.replaceAll(itemSep, "").length;
    this.items = text.split(this.itemSeparator).map((x) => x.trim());

    var element = _jqItems[0];
    element.selectionStart = startPos;
    element.selectionEnd = endPos;

    if (isFocusRequired) {
      _jqItems.focus();
    }

    _jqRename.val(this.selectedItem);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Entry point
  //////////////////////////////////////////////////////////////////////////////

  this.init(options);
}

////////////////////////////////////////////////////////////////////////////////