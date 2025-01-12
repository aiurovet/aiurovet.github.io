////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Alignment selection drop-list
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

const _fontFamilies = [
  { value: "sans-serif", text: "Sans Serif (default)", },
  { value: "serif", text: "Serif (default)", },
  { value: "monospace", text: "Monospace (default)" },
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

  this.destroy = function() {
    this.off();
  }

  //////////////////////////////////////////////////////////////////////////////

  this.init = function(options) {
    const callers = options?.callers;
    const value = options?.value;

    this.callers = callers && callers.length ? callers : null;
    this.onChange = callers?.onChange;

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

      if (this.callers) {
        this.callers.css("font-family", newValue);
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