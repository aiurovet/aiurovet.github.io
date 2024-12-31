////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Editable list control
////////////////////////////////////////////////////////////////////////////////

"use strict";

$.fn.listedit = function(options) {
  var _jqItems = null;
  var _jqInsert = null;
  var _jqMoveDn = null;
  var _jqMoveUp = null;
  var _jqRemove = null;

  //////////////////////////////////////////////////////////////////////////////
  // Destructor
  //////////////////////////////////////////////////////////////////////////////

  this.clear = function() {
    this.initData();
    this.initUI();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Create HTML for the listbox based on the item number passed
  //////////////////////////////////////////////////////////////////////////////

  this.createOption = function(itemNo, selectedItemlNo) {
    let sel = itemNo == (selectedItemlNo ?? this.selectedItemNo) ? "selected" : "";
    let txt = this.formatItem(itemNo).toHtml();

    let item = this.items[itemNo];
    let jqItem = $(`<div tabindex="-1" class="ui-listedit-item"${sel}>${txt}</div>`);
    var that = this;

    jqItem
      .on("mousedown", function(event) {
        that.setSelectedItem(null, item, true);
        event.preventDefault();
        event.stopPropagation();
      })
      .on("keydown", function(event) {
        if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
          return;
        }
        let add = 0;
        switch (event.key) {
          case "ArrowLeft":
          case "ArrowUp":
            add = -1;
            break;
          case "ArrowRight":
          case "ArrowDown":
            add = 1;
            break;
          default:
            break;
        }
        if (add === 0) {
          return;
        }
        that.setSelectedItem(that.selectedItemNo + add, null, true);
        event.preventDefault();
        event.stopPropagation();
      });

    return jqItem;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Enable/disable tool buttons depending on the state of the list
  //////////////////////////////////////////////////////////////////////////////

  this.enableTools = function() {
    let itemCount = this.items.length;
    let hasMultipleItems = itemCount > 1;

    if (this.maxItemCount) {
      _jqInsert.enable(itemCount < this.maxItemCount);
    }
    _jqMoveDn.enable(hasMultipleItems);
    _jqMoveUp.enable(hasMultipleItems);
    _jqRemove.enable(hasMultipleItems || this.hasDefaultItem);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert an item to string
  //////////////////////////////////////////////////////////////////////////////

  this.formatItem = function(itemNo) {
    return this.formatter
      ? this.formatter(this.items, itemNo)
      : this.items[itemNo].toString();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Full reset
  //////////////////////////////////////////////////////////////////////////////

  this.getMaxCols = function() {
    let maxCols = 0;

    for (let item of this.items) {
      let curCols = item.length;

      if (maxCols < curCols) {
        maxCols = curCols;
      }
    }

    return maxCols ? (maxCols * 2).toString() : "";
  }

  //////////////////////////////////////////////////////////////////////////////
  // Find the index of an item presented with specific text
  //////////////////////////////////////////////////////////////////////////////

  this.indexOfText = function(text) {
    if ((text === undefined) || (text === null) || text.length <= 0) {
      return -1;
    }

    let itemCount = this.items.length;
    let selectedItem = this.selectedItem;
    let selectedItemNo = this.selectedItemNo;
    this.parseItem(null, text);

    let lastItemNo = this.items.length - 1;
    text = this.formatItem(lastItemNo);

    this.items.length = itemCount;
    this.selectedItem = selectedItem;
    this.selectedItemNo = selectedItemNo;

    for (let i = 0; i < itemCount; i++) {
      if (this.formatItem(i) === text) {
        return i;
      }
    }

    return -1;
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
      this.editorContent = null;
      this.editorHandler = null;
      this.formatter = null;
      this.insertTitle = null;
      this.maxItemCount = null;
      this.modifyTitle = null;
      this.parser = null;
      this.selectedItem = null;
      this.selectedItemNo = null;
      return this;
    }

    this.editorContent = options?.editorContent;
    this.editorHandler = options?.editorHanler;
    this.formatter = options?.formatter;
    this.hasDefaultItem = options.hasDefaultItem ?? false;
    this.items = options.items ?? [];
    this.maxItemCount = options?.maxItemCount;
    this.parser = options?.parser;
    this.insertTitle = (options?.insertTitle || "Add").toHtml();
    this.modifyTitle = (options?.modifyTitle || "Modify").toHtml();
    this.removeWarning = (options?.removeWarning || "Are you sure you wish to remove \"{item}\"?").toHtml();

    let selItemNo = this.items.indexOf(options.selectedItem);

    if (selItemNo < 0) {
      selItemNo = options.selectedItemNo ?? 0;
    }

    this.setSelectedItem(selItemNo);

    return this;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Create jQuery elements and event handlers
  //////////////////////////////////////////////////////////////////////////////

  this.initUI = function(options) {
    this.empty();

    if ((options === undefined) || (options === null)) {
      _jqItems = null;
      _jqInsert = null;
      _jqMoveDn = null;
      _jqMoveUp = null;
      _jqRemove = null;
      this.editorContent = null;
      this.editorHandler = null;
      this.editorRows = null;
      return this;
    }

    let isEditable = options.editorRows || options.isEditable;
    this.editorRows = isEditable ? options.editorRows ?? 1 : null;
  
    let html = `<div class="ui-listedit-items"></div>`;

    if (isEditable) {
      html = `
        <div class="ui-listedit-toolbar">
          <div class="ui-listedit-tool insert"></div>
          <div class="ui-dialog-filler"></div>
          <div class="ui-listedit-tool modify"></div>
          <div class="ui-dialog-filler"></div>
          <div class="ui-listedit-tool remove"></div>
          <div class="ui-dialog-filler"></div>
          <div class="ui-listedit-tool moveup"></div>
          <div class="ui-dialog-filler"></div>
          <div class="ui-listedit-tool movedn"></div>
        </div>
        ${html}
        <div class="ui-dialog ui-listedit-popup" style="display: none;"></div>`;
    }

    this.append(html);

    let children = this.children();
    var that = this;

    _jqItems = $(children[isEditable ? 1 : 0])
      .empty()
      .focus(function() {
        let jqSelItem = _jqItems.find("[selected]");
        if (jqSelItem && jqSelItem[0]) {
          jqSelItem.focus();
        }
      });

    for (let i = 0, n = this.items.length; i < n; i++) {
      _jqItems.append(this.createOption(i));
    }

    _jqItems;

    if (isEditable) {
      let tools = $(children[0]).children();

      _jqInsert = $(tools[0]).on("click", function () {that.onClickModify(true);});
                  $(tools[2]).on("click", function () {that.onClickModify(false);});
      _jqRemove = $(tools[4]).on("click", function () {that.onClickRemove();});
      _jqMoveUp = $(tools[6]).on("click", function () {that.onClickMove(-1);});
      _jqMoveDn = $(tools[8]).on("click", function () {that.onClickMove(+1);});

      this.enableTools();
    }

    _jqItems.find(`.ui-listedit-item:nth(${that.selectedItemNo})`).postFocus();

    return this;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Event handler: when a user clicks the "Modify" tool icon
  //////////////////////////////////////////////////////////////////////////////

  this.onClickModify = function(isInsert) {
    const that = this;
    const jqPopup = $(this.find(".ui-listedit-popup"));

    var [selItemNo, selItemText, editorContent] = this.setContent(jqPopup, isInsert);

    jqPopup.dialog({
      content: editorContent,
      handler: function (event) {
        that.onModify(event, jqPopup, isInsert, selItemNo, selItemText);

        if (that.editorHandler) {
          that.editorHandler(event);
        }
      }
    });
  }

  //////////////////////////////////////////////////////////////////////////////
  // Event handler: when a user clicks the "MoveDn" or "MoveUp" tool icon
  //////////////////////////////////////////////////////////////////////////////

  this.onClickMove = function(step) {
    let itemCount = this.items.length;

    if (itemCount <= 1) {
      return;
    }

    let selItemNo = this.selectedItemNo;
    let swpItemNo = selItemNo + step;

    if (swpItemNo >= itemCount) {
      swpItemNo = 0;
    }
    if (swpItemNo < 0) {
      swpItemNo = itemCount - 1;
    }

    if (selItemNo === swpItemNo) {
      return;
    }

    let selItem = this.items.splice(selItemNo, 1)[0];

    let newItems = [
      ...this.items.slice(0, swpItemNo),
      selItem,
      ...this.items.slice(swpItemNo)
    ];

    for (let curItemNo = 0; curItemNo < itemCount; curItemNo++) {
      this.items[curItemNo] = newItems[curItemNo];
    }

    let options = _jqItems.children();
    let jqSelItem = $(options[selItemNo]);
    let jqSwpItem = $(options[swpItemNo]);

    jqSelItem.detach();

    if (selItemNo < swpItemNo) {
      jqSelItem.insertAfter(jqSwpItem);
    } else {
      jqSelItem.insertBefore(jqSwpItem);
    }

    this.setSelectedItem(swpItemNo);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Event handler: when a user clicks the "Remove" tool icon
  //////////////////////////////////////////////////////////////////////////////

  this.onClickRemove = function() {
    let selItemNo = this.selectedItemNo;
    let selItemText = this.formatItem(selItemNo);
    var jqPopup = $(this.find(".ui-listedit-popup"));
    var that = this;

    if ((this.items.length <= 1) && !this.hasDefaultItem) {
      jqPopup.msgbox({
        title: MsgBoxTitle_Warning,
        buttons: MsgBoxButtons_OK,
        message: `The last player cannot be removed.\n\nYou can only rename that.`,
        handler: function (_) {
          _jqItems.focus();
        }
      });
    } else {
      jqPopup.msgbox({
        theme: MsgBoxTheme_Warning,
        buttons: MsgBoxButtons_YesNo,
        message: `Are you sure you wish to remove\n\n"${selItemText}"?`,
        handler: function (selButtonNo) {
          if (selButtonNo === 0) {
            that.items.splice(selItemNo, 1);
            let itemCount = that.items.length;

            if ((itemCount <= 0) && that.hasDefaultItem) {
              that.parseItem();
              that.setSelectedItem(0, null, true);
            } else {
              _jqItems.find("[selected]").remove();
              that.enableTools();
              that.setSelectedItem(selItemNo, null, true);
            }
          }
          _jqItems.focus();
        }
      });
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Event handler: when a user clicks the "Modify" tool icon
  //////////////////////////////////////////////////////////////////////////////

  this.onModify = function(event, jqOwner, isInsert, selItemNo, selItemText) {
    if (event === "before-show") {
      jqOwner.find(".ui-dialog-caption-text").html(
        (isInsert ? this.insertTitle : this.modifyTitle).toHtml());
      return;
    }
    if (event === "before-hide") {
      selItemText = jqOwner.find(".ui-listedit-modify").val().trim();
      let foundItemNo = this.indexOfText(selItemText);

      if (foundItemNo >= 0) {
        this.setSelectedItem(foundItemNo, null, true);
          return;
      }

      if (selItemText.length <= 0) {
        return;
      }

      if (isInsert) {
        if (!this.parseItem(null, selItemText)) {
          return;
        }
        _jqItems.append(this.createOption(selItemNo));
        this.setSelectedItem(selItemNo, null, true);
        this.enableTools();
      } else {
        if (!this.parseItem(selItemNo, selItemText)) {
          return;
        }
        _jqItems.find("[selected]").text(this.formatItem(selItemNo));
      }

      return;
    }

    if (event === "after-hide") {
      _jqItems.focus();
      return;
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert a string to an item
  //////////////////////////////////////////////////////////////////////////////

  this.parseItem = function(itemNo, text) {
    if ((itemNo === undefined) || (itemNo === null) || (itemNo < 0)) {
      itemNo = this.items.length;
      this.items.push(null);
      this.selectedItemNo = itemNo;
      this.selectedItem = null;
    }

    if (this.parser) {
      this.parser(this.items, itemNo, text);
    } else {
      this.items[itemNo] = text;
    }

    let item = this.items[itemNo];

    if ((item === undefined) || (item === null)) {
      return false;
    }

    this.selectedItem = this.items[itemNo];
    return true;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Event handler: when a user clicks the "Modify" tool icon
  //////////////////////////////////////////////////////////////////////////////

  this.setContent = function(jqOwner, isInsert) {
    let editorContent = this.editorContent;
    const selItemNo = isInsert ? this.items.length : this.selectedItemNo;
    const selItemText = isInsert ? "" : this.formatItem(selItemNo);

    if (editorContent) {
      jqOwner.find(".ui-listedit-modify").val(selItemText);
    } else {
      const selItemHtml = selItemText.toHtml();
      const inputHtml = this.editorRows > 1
        ? `<textarea class="ui-listedit-modify" rows="${this.editorRows}">${selItemHtml}</textarea>`
        : `<input class="ui-listedit-modify" type="text" value="${selItemHtml}">`;

        editorContent = `
        <div class="ui-dialog-content">
          <div class="ui-dialog-caption">
            <h4 class="ui-dialog-caption-text"></h4>
            <div class="ui-dialog-filler"></div>
            <div class="ui-dialog-icon close"></div>
          </div>
          <div class="ui-dialog-client">
            ${inputHtml}
          </div>
        </div>
      `;
    }

    return [selItemNo, selItemText, editorContent];
  }

  //////////////////////////////////////////////////////////////////////////////
  // Set listbox selection
  //////////////////////////////////////////////////////////////////////////////

  this.setSelectedItem = function(itemNo, item, isFull) {
    let itemCount = this.items.length;

    if ((item !== undefined) && (item !== null)) {
      itemNo = this.items.indexOf(item);
    }
    if (itemNo < 0) {
      itemNo = itemCount <= 0 ? -1 : 0;
    }
    else if (itemNo >= itemCount) {
      itemNo = itemCount - 1;
    }

    this.selectedItemNo = itemNo;
    this.selectedItem = itemNo < 0 ? null : this.items[itemNo];

    if (!isFull) {
      return;
    }

    _jqItems.find("[selected]").removeAttr("selected", false);

    if (itemNo !== null) {
      let jqOption = $(_jqItems.children()[itemNo]);
      jqOption.text(this.formatItem(itemNo));
      jqOption.attr("selected", "");
      jqOption.scrollIntoView();
      jqOption.focus();
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Entry point
  //////////////////////////////////////////////////////////////////////////////

  return this.init(options);
}

////////////////////////////////////////////////////////////////////////////////