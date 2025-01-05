////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2025
// All rights reserved under MIT license (see LICENSE file)
//
// Configuration of any quote element (phrase, footer)
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

class Alignment {
  // Constants
  //
  static bottom = "B";
  static center = "C";
  static justify = "J";
  static left = "L";
  static middle = "M";
  static right = "R";
  static stretch = "S";
  static top = "T";

  //////////////////////////////////////////////////////////////////////////////

  // Current alignment
  //
  value = null;

  //////////////////////////////////////////////////////////////////////////////
  // If only one argument passed, and that is an object, initialize parameters
  // with its properties: i.e. constructing from a deserialized saved object
  //////////////////////////////////////////////////////////////////////////////

  constructor(value) {
    if (value instanceof Object) {
      let from = value;
      this.init(from.value)
    } else {
      this.init(value);
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Initialise properties from the given parameters
  //////////////////////////////////////////////////////////////////////////////

  init(value) {
    this.value = value;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert this object into the background style associative array
  //////////////////////////////////////////////////////////////////////////////

  toBackStyle() {
    let result = {};
    const value = this.value;

    // Presence check

    if ((value === undefined) || (value === null) || (value.length <= 0)) {
      return result;
    }

    if (value.includes(Alignment.stretch)) {
      result["background-size"] = "contain";
    } else {
      result["background-position"] = (
        (value.includes(Alignment.bottom) ? " bottom" : "") +
        (value.includes(Alignment.center) ? " center" : "") +
        (value.includes(Alignment.left) ? " left" : "") +
        (value.includes(Alignment.middle) ? " middle" : "") +
        (value.includes(Alignment.right) ? " right" : "") +
        (value.includes(Alignment.top) ? " top" : "")
      ).substring(1);
    }

    return result;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert this object into the background style string
  //////////////////////////////////////////////////////////////////////////////

  toTextStyle() {
    const value = this.value;
    const result = {};

    // Presence check

    if ((value === undefined) || (value === null) || (value.length <= 0)) {
      return result;
    }

    // Horizontal alignment

    result["text-align"] =
      value.includes(Alignment.center) ? "center" :
      value.includes(Alignment.justify) ? "justify" :
      value.includes(Alignment.left) ? "left" :
      value.includes(Alignment.right) ? "right" :
      null;

    // Vertical alignment

    result["vertical-align"] =
      value.includes(Alignment.bottom) ? "bottom" :
      value.includes(Alignment.middle) ? "middle" :
      value.includes(Alignment.top) ? "top" :
      null;

    return result;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert this object into the one that excludes all irrelevant properties
  //////////////////////////////////////////////////////////////////////////////

  toSerializable() {
    return this.value;
  }

  //////////////////////////////////////////////////////////////////////////////
}