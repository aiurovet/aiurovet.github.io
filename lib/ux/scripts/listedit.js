////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Editable list control
////////////////////////////////////////////////////////////////////////////////

"use strict";

$.fn.listedit = function(options) {
  let _jqItems = null;
  let _jqMoveDn = null;
  let _jqMoveUp = null;
  let _jqRemove = null;

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
    let sel = itemNo == (selectedItemlNo ?? this.selectedItemNo) ? " selected" : "";
    let txt = this.formatItem(itemNo).toHtml();

    return $(`<option class="ui-listedit-item"${sel}>${txt}</option>`);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Enable/disable tool buttons depending on the state of the list
  //////////////////////////////////////////////////////////////////////////////

  this.enableTools = function() {
    let hasMultipleItems = this.items.length > 1;

    _jqMoveDn.enable(hasMultipleItems);
    _jqMoveUp.enable(hasMultipleItems);
    _jqRemove.enable(hasMultipleItems || this.hasDefaultItem);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert an item to string
  //////////////////////////////////////////////////////////////////////////////

  this.findSelectedOptionNo = function() {
    let options = _jqItems.children();

    for (let i = 0, n = options.length; i < n; i++) {
      if (options[i].attributes.selected) {
        return i;
      }
    }

    return null;
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
  }

  //////////////////////////////////////////////////////////////////////////////
  // Initialize properties according to the options passed
  //////////////////////////////////////////////////////////////////////////////

  this.initData = function(options) {
    if ((options === undefined) || (options === null)) {
      this.formatter = null;
      this.insertTitle = null;
      this.modifyTitle = null;
      this.parser = null;
      this.selectedItem = null;
      this.selectedItemNo = null;
      return;
    }

    this.hasDefaultItem = options.hasDefaultItem ?? false;
    this.formatter = options?.formatter;
    this.items = options.items ?? [];
    this.parser = options?.parser;
    this.insertTitle = (options?.insertTitle || "Add").toHtml();
    this.modifyTitle = (options?.modifyTitle || "Modify").toHtml();
    this.removeWarning = (options?.removeWarning || "Are you sure you wish to remove \"{item}\"?").toHtml();

    let selItemNo = this.items.indexOf(options.selectedItem);

    if (selItemNo < 0) {
      selItemNo = options.selectedItemNo ?? 0;
    }

    this.setSelectedItem(selItemNo);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Create jQuery elements and event handlers
  //////////////////////////////////////////////////////////////////////////////

  this.initUI = function(options) {
    this.empty();

    if ((options === undefined) || (options === null)) {
      _jqItems = null;
      _jqMoveDn = null;
      _jqMoveUp = null;
      _jqRemove = null;
      this.editorRows = null;
      return;
    }

    let isEditable = options.editorRows || options.isEditable;
    this.editorRows = isEditable ? options.editorRows ?? 1 : null;
  
    let html = `<select class="ui-listedit-items"></select>`;

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

    let rows = options.rows ?? 1;

    if (rows > 1) {
      this.find("select").attr("size", rows);
    }

    let that = this;
    let children = this.children();

    _jqItems = $(children[isEditable ? 1 : 0])
      .on("change", function (_) {
        that.setSelectedItem(this.selectedIndex);
      })
      .empty();

    for (let i = 0, n = this.items.length; i < n; i++) {
      _jqItems.append(this.createOption(i));
    }

    if (isEditable) {
      var tools = $(children[0]).children();

      $(tools[0]).on("click", function () {that.onClickModify(true);});
      $(tools[2]).on("click", function () {that.onClickModify(false);});
      _jqRemove = $(tools[4]).on("click", function () {that.onClickRemove();})
      _jqMoveUp = $(tools[6]).on("click", function () {that.onClickMove(-1);});
      _jqMoveDn = $(tools[8]).on("click", function () {that.onClickMove(+1);});

      this.enableTools();
    }

    _jqItems.postFocus();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Event handler: when a user clicks the "Modify" tool icon
  //////////////////////////////////////////////////////////////////////////////

  this.onClickModify = function(isInsert) {
    let selItemNo = isInsert ? this.items.length : this.selectedItemNo;
    let selItemText = isInsert ? "" : this.formatItem(selItemNo);
    let jqPopup = $(this.find(".ui-listedit-popup"));
    let that = this;

    let editorHtml = this.editorRows > 1
      ? `<textarea class="ui-listedit-modify" rows="${this.editorRows}">${selItemText.toHtml()}</textarea>`
      : `<input class="ui-listedit-modify" type="text" value="${selItemText.toHtml()}">`;

    jqPopup.dialog({
      content: `
        <div class="ui-dialog-content">
          <div class="ui-dialog-caption">
            <h4>${isInsert ? this.insertTitle : this.modifyTitle}</h4>
            <div class="ui-dialog-filler"></div>
            <div class="ui-dialog-icon close"></div>
          </div>
          <div class="ui-dialog-client">
            ${editorHtml}
          </div>
        </div>
      `,
      handler: function (event) {
        if (event === "before-hide") {
          selItemText = jqPopup.find(".ui-listedit-modify").val().trim();

          if (isInsert) {
            that.parseItem(null, selItemText);
            _jqItems.append(that.createOption(selItemNo));
            that.setSelectedItem(selItemNo, true);
            that.enableTools();
          } else {
            that.parseItem(that.selectedItemNo, selItemText);
            _jqItems.find("option:selected").text(that.formatItem(that.selectedItemNo));
          }
        }
        else if (event === "after-hide") {
          _jqItems.focus();
        }
      }
    });
  }

  //////////////////////////////////////////////////////////////////////////////
  // Event handler: when a user clicks the "MoveDn" or "MoveUp" tool icon
  //////////////////////////////////////////////////////////////////////////////

  this.onClickMove = function(step) {
    var itemCount = this.items.length;

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

    this.items = [
      ...this.items.slice(0, swpItemNo),
      selItem,
      ...this.items.slice(swpItemNo)
    ];

    let options = _jqItems.children();
    let jqSelItem = $(options[selItemNo]);
    let jqSwpItem = $(options[swpItemNo]);

    jqSelItem.remove();
    let jqNewItem = this.createOption(swpItemNo, swpItemNo);

    if (selItemNo < swpItemNo) {
      jqNewItem.insertAfter(jqSwpItem);
    } else {
      jqNewItem.insertBefore(jqSwpItem);
    }

    this.setSelectedItem(swpItemNo);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Event handler: when a user clicks the "Remove" tool icon
  //////////////////////////////////////////////////////////////////////////////

  this.onClickRemove = function() {
    let selItemNo = this.selectedItemNo;
    let selItemText = this.formatItem(selItemNo);
    let jqPopup = $(this.find(".ui-listedit-popup"));
    let that = this;

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
              that.setSelectedItem(0, true);
            } else {
              _jqItems.find("option:selected").remove();
              that.enableTools();
              that.setSelectedItem(selItemNo, true);
            }
          }
          _jqItems.focus();
        }
      });
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

    this.selectedItem = this.items[itemNo];
  }

  //////////////////////////////////////////////////////////////////////////////
  // Set listbox selection
  //////////////////////////////////////////////////////////////////////////////

  this.setSelectedItem = function(itemNo, isFull) {
    let itemCount = this.items.length;
    let selOptNo = null;

    if ((itemNo === undefined) || (itemNo === null) || !Number.isInteger(itemNo)) {
      itemNo = this.findSelectedOptionNo();
      selOptNo = itemNo;
    } else {
      if (itemNo < 0) {
        itemNo = itemCount <= 0 ? -1 : 0;
      }
      else if (itemNo >= itemCount) {
        itemNo = itemCount - 1;
      }
    }

    this.selectedItemNo = itemNo;
    this.selectedItem = itemNo < 0 ? null : this.items[itemNo];

    if (!isFull) {
      return;
    }

    if (itemNo === selOptNo) {
      return;
    }

    selOptNo ??= this.findSelectedOptionNo();
    let options = _jqItems.children();

    if (selOptNo !== null) {
      $(options[selOptNo]).prop("selected", false);
    }
    if (itemNo !== null) {
      let jqOption = $(options[itemNo]);
      jqOption.text(this.formatItem(itemNo));
      jqOption.prop("selected", true);
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Entry point
  //////////////////////////////////////////////////////////////////////////////

  this.init(options);
}

////////////////////////////////////////////////////////////////////////////////