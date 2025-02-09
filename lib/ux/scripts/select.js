////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024-25
// All rights reserved under MIT license (see LICENSE file)
//
// Drop-list helper
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

$.fn.select = function(options) {
  this.clear = function() {
    this.off();
  }

  this.init = function(options) {
    const callers = options?.callers;
    const selectedItemNo = options?.selectedItemNo ?? -1;
    const value = options?.value ?? "";

    this.callers = callers && callers.length ? callers : null;
    this.items = options?.items ?? [];
    this.onChange = callers?.onChange;

    let items = "";
    let itemNo = -1;

    for (let item of this.items) {
      ++itemNo;
      let curValue = item.value;
      let isSelected = selectedItemNo >= 0 ? itemNo === selectedItemNo : (curValue === value);
      items += `<option value="${curValue}" ${isSelected ? "selected" : ""}>${item.text}</option>`;
    }

    this.html(items);

    this.on("change", function (event) {
      if (this.onChange) {
        this.onChange(event.target.value);
      }
    });
  }
  
  //////////////////////////////////////////////////////////////////////////////
  // Entry point
  //////////////////////////////////////////////////////////////////////////////

  return this.init(options);
}

////////////////////////////////////////////////////////////////////////////////