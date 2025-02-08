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
    const value = options?.value ?? "";

    this.callers = callers && callers.length ? callers : null;
    this.items = options?.items ?? [];
    this.onChange = callers?.onChange;

    let items = "";

    for (let item of this.items) {
      let curValue = item.value;
      items += `<option value="${curValue}" ${curValue === value ? "selected" : ""}>${item.text}</option>`;
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