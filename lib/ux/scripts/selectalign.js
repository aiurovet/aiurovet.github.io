////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Alignment selection drop-list
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

const _itemsForImage = [
  { value: Alignment.stretch, text: "Stretch" },

  { value: Alignment.left + Alignment.top, text: "Left-Top" },
  { value: Alignment.left + Alignment.middle, text: "Left-Middle" },
  { value: Alignment.left + Alignment.bottom, text: "Left-Bottom" },

  { value: Alignment.center + Alignment.top, text: "Center-Top" },
  { value: Alignment.center + Alignment.middle, text: "Center-Middle" },
  { value: Alignment.center + Alignment.bottom, text: "Center-Bottom" },

  { value: Alignment.right + Alignment.top, text: "Right-Top" },
  { value: Alignment.right + Alignment.middle, text: "Right-Middle" },
  { value: Alignment.right + Alignment.bottom, text: "Right-Bottom" },
];

const _itemsForText = [
  { value: Alignment.left, text: "Left" },
  { value: Alignment.center, text: "Center" },
  { value: Alignment.right, text: "Right" },
  { value: Alignment.justify, text: "Justify" },
];

////////////////////////////////////////////////////////////////////////////////

$.fn.selectAlign = function(options) {
  this.destroy = function() {
    this.off();
  }

  this.init = function(options) {
    const callers = options?.callers;
    const isForImage = options?.isForImage ?? false;
    const data = isForImage ? _itemsForImage : _itemsForText;
    const styleName = isForImage ? "background-position" : "text-align";
    const value = options?.value ?? "";

    this.callers = callers && callers.length ? callers : null;
    this.onChange = callers?.onChange;

    let items = "";

    for (let d of data) {
      let v = d.value;
      let isSel = (isForImage && (v === value)) || (!isForImage && value.includes(v));
      items += `<option value="${v}" ${isSel ? "selected" : ""}>${d.text}</option>`;
    }

    this.html(items);

    this.on("change", function (event) {
      let newValue = event.target.value;

      if (this.callers) {
        this.callers.css(styleName, newValue);
      }
   
      if (this.onChange) {
        this.onChange(newValue);
      }
    });
  }
  
  //////////////////////////////////////////////////////////////////////////////
  // Entry point
  //////////////////////////////////////////////////////////////////////////////

  return this.init(options);
}

////////////////////////////////////////////////////////////////////////////////