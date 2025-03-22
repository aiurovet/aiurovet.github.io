////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024-25
// All rights reserved under MIT license (see LICENSE file)
//
// Drop-list helper
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

const AttrSelectedRegex = /(^|[\s]+)selected([\s]+|$)/g;
const HtmlCheckMark = "<div class='checkmark off'></div>";
const OnOffRegex = /(checkmark\s+)(on|off)([\s"'])/;

////////////////////////////////////////////////////////////////////////////////

$.fn.select = function(options) {
  this.clear = function() {
    this.off();
  }

  this.defaultFormatter = function(item, isSelected, attrs) {
    attrs ??= "";

    if (isSelected) {
      attrs += " selected";
    } else {
      attrs.replace(AttrSelectedRegex, "");
    }   

    const isChecked = this.isMultiSelect ? item.isChecked : null;
    const checkFlag = (isChecked === undefined) || (isChecked === null) ? null : (isChecked ? "on" : "off");
    const checkMark = (checkFlag === null) ? "" : HtmlCheckMark.replace(OnOffRegex, `$1${checkFlag}$3`);

    return `<option value="${item.value}" index="${item.itemNo}" ${attrs}>${checkMark}${item.text}</option>`;
  }

  this.init = function(options) {
    let selectedItemNo = options?.selectedItemNo ?? -1;
    const value = options?.value;

    if ((selectedItemNo < 0) && !value) {
      selectedItemNo = 0;
    }

    this.isMultiSelect = options?.isMultiSelect ?? false;
    this.items = options?.items ?? [];
    this.formatter = options?.formatter ?? this.defaultFormatter;

    const onChange = options?.onChange;
    const that = this;

    let html = "";
    let isSelected = null;
    let itemNo = -1;

    for (let item of this.items) {
      ++itemNo;
      this.items[itemNo].itemNo = itemNo;

      isSelected = ((selectedItemNo >= 0) && (itemNo === selectedItemNo)) || (item.value === value);
      html += this.formatter(item, isSelected);
    }

    this.html(html);

    this.on("change", function (event) {
      if (onChange) {
        onChange(event.target.value, that);
      }
    });
  }
  
  //////////////////////////////////////////////////////////////////////////////
  // Entry point
  //////////////////////////////////////////////////////////////////////////////

  return this.init(options);
}

////////////////////////////////////////////////////////////////////////////////