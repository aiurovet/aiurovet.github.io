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

  static defaultValue = Alignment.center + Alignment.middle;

  //////////////////////////////////////////////////////////////////////////////

  // Current alignment
  //
  value = Alignment.defaultValue;

  //////////////////////////////////////////////////////////////////////////////
  // If only one argument passed, and that is an object, initialize parameters
  // with its properties: i.e. constructing from a deserialized saved object
  //////////////////////////////////////////////////////////////////////////////

  constructor(value) {
    if (value instanceof Object) {
      let from = color;
      this.init(from.value)
    } else {
      this.init(value);
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Initialise properties from the given parameters
  //////////////////////////////////////////////////////////////////////////////

  init(value) {
    this.value = value ?? Alignment.defaultValue;
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

    if (value.contains(Alignment.justify) || value.contains(Alignment.stretch)) {
      result["background-size"] = "contain";
    } else {
      result["background-position"] = (
        (value.contains(Alignment.bottom) ? " bottom" : "") +
        (value.contains(Alignment.center) ? " center" : "") +
        (value.contains(Alignment.left) ? " left" : "") +
        (value.contains(Alignment.middle) ? " middle" : "") +
        (value.contains(Alignment.right) ? " right" : "") +
        (value.contains(Alignment.top) ? " top" : "")
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
      (value.contains(Alignment.center) ? "center" : "") +
      (value.contains(Alignment.justify) || value.contains(Alignment.stretch) ? "justify" : "") +
      (value.contains(Alignment.left) ? "left" : "") +
      (value.contains(Alignment.left) ? "right" : "");

    // Vertical alignment

    result["vertical-align"] =
      (value.contains(Alignment.bottom) ? "bottom" : "") +
      (value.contains(Alignment.middle) ? "middle" : "") +
      (value.contains(Alignment.top) ? "top" : "");

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