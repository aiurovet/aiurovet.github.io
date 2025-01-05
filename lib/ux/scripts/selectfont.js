////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Alignment selection drop-list
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

const _fontFamilies = [
  { value: "sans-serif", text: "Default Sans Serif", },
  { value: "serif", text: "Default Serif", },
  { value: "monospace", text: "Default Monospace" },
  { value: "Akaya Kanadaka", },
  { value: "Berkshire Swash", },
  { value: "Charm", },
  { value: "Courgette", },
  { value: "Henny Penny", },
  { value: "KaushanScript", text: "Kaushan Script" },
  { value: "Lobster", },
  { value: "Merienda", },
  { value: "Merriweather", },
  { value: "Noto Serif", },
  { value: "Oswald", },
  { value: "Playfair Display", },
  { value: "Righteous", },
  { value: "Roboto", },
  { value: "Snowburst One", },
  { value: "Ubuntu", },
  { value: "Varela Round", },
];

////////////////////////////////////////////////////////////////////////////////

$.fn.selectFont = function(options) {
  //////////////////////////////////////////////////////////////////////////////
  // Full reset
  //////////////////////////////////////////////////////////////////////////////

  this.init = function(options) {
    const value = options?.value;

    let items = "";

    for (let f of _fontFamilies) {
      let v = f.value;
      items += `<option value="${v}" ${v === value ? "selected" : ""} style="font-family:${v};">${f.text ?? v}</option>`;
    }

    this.html(items);

    if (value) {
      this.css("font-family", value);
    }

    const that = this;

    this.on("change", function (event) {
      const newValue = event.target.value;
      that.css("font-family", newValue);

      const onChange = options?.onChange;

      if (onChange) {
        onChange(newValue);
      }
    });
  }
  
  //////////////////////////////////////////////////////////////////////////////
  // Entry point
  //////////////////////////////////////////////////////////////////////////////

  return this.init(options);
}

////////////////////////////////////////////////////////////////////////////////