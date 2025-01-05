////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Font picker dialog
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

const _fontFamilies = [
  "sans-serif", "serif", "monospace",
  "Akaya Kanadaka", "Berkshire Swash", "Charm", "Courgette", "Henny Penny",
  "KaushanScript", "Lobster", "Merienda", "Merriweather", "Noto Serif",
  "Oswald", "Playfair Display", "Righteous", "Roboto", "Snowburst One",
  "Ubuntu", "Varela Round",
];

////////////////////////////////////////////////////////////////////////////////

$.fn.fontPicker = function(options) {
  //////////////////////////////////////////////////////////////////////////////
  // Full reset
  //////////////////////////////////////////////////////////////////////////////

  this.init = function(options) {
    const value = options?.value;

    let items = "";

    for (let f of _fontFamilies) {
      items += `<option value="${f}" ${f === value ? "selected" : ""} style="font-family:${f}">${f}</option>`;
    }

    this.html(items);

    if (value) {
      this.css("font-family", value);
    }

    const that = this;

    this.on("change", function (event) {
      const newValue = event.target.value;
      that.css("font-family", newValue);

      const handler = options?.onChange;

      if (handler) {
        handler(newValue);
      }
    });
  }
  
  //////////////////////////////////////////////////////////////////////////////
  // Entry point
  //////////////////////////////////////////////////////////////////////////////

  return this.init(options);
}

////////////////////////////////////////////////////////////////////////////////