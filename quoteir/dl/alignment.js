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
  static left = "L";
  static middle = "M";
  static right = "R";
  static stretch = "S";
  static top = "T";

  static defaultValue = "";

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
  // Convert this object into the background style string
  //////////////////////////////////////////////////////////////////////////////

  toBackStyle(isFull) {
    let result = "";
    const value = this.value;

    if ((value === undefined) || (value === null) || (value.length <= 0)) {
      return result;
    }

    if (value.contains(Alignment.stretch)) {
      result += `background-size: contain;`;
    } else {
      result += "background-position:" +
        (value.contains(Alignment.bottom) ? " bottom" : "") +
        (value.contains(Alignment.center) ? " center" : "") +
        (value.contains(Alignment.left) ? " left" : "") +
        (value.contains(Alignment.middle) ? " middle" : "") +
        (value.contains(Alignment.right) ? " right" : "") +
        (value.contains(Alignment.top) ? " top" : "");
  }

    return isFull ? `style="${result}"` : result;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert this object into the background style string
  //////////////////////////////////////////////////////////////////////////////

  toTextStyle(isFull) {
    const value = this.value;
    let result = "";

    if ((value === undefined) || (value === null) || (value.length <= 0) || value.contains(Alignment.stretch)) {
      return result;
    }

    if (value.contains(Alignment.left)) {
      result += "text-align: left;";
    } else if (value.contains(Alignment.right)) {
      result += "text-align: right;";
    } else if (value.contains(Alignment.top)) {
      result += "vertical-align: top;";
    } else if (value.contains(Alignment.bottom)) {
      result += "vertical-align: bottom;";
    }

    return isFull ? `style="${result}"` : result;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert this object into the one that excludes all irrelevant properties
  //////////////////////////////////////////////////////////////////////////////

  toSerializable() {
    return this.value;
  }

  //////////////////////////////////////////////////////////////////////////////
}