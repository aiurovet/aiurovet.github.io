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
  static none = "-";
  static noResize = "N";
  static repeatX = "X";
  static repeatY = "Y";
  static right = "R";
  static stretchX = "H";
  static stretchY = "V";
  static top = "T";

  static repeat = Alignment.repeatX + Alignment.repeatY;
  static stretch = Alignment.stretchX + Alignment.stretchY;

  static defaultValue = Alignment.center + Alignment.middle + Alignment.stretch;

  //////////////////////////////////////////////////////////////////////////////

  // Current alignment
  //
  value = null;

  //////////////////////////////////////////////////////////////////////////////
  // If only one argument passed, and that is an object, initialize parameters
  // with its properties: i.e. constructing from a deserialized saved object
  //////////////////////////////////////////////////////////////////////////////

  constructor(value) {
    if ((value instanceof Object) && ("value" in value)) {
      let from = value;
      this.init(from.value)
    } else {
      this.init(value);
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Check two Alignmnent combined values are the same.
  // If Alignment object(s) are passed, then get their values where relevant
  //////////////////////////////////////////////////////////////////////////////

  static areEqual(v1, v2) {
    if ((v1 === undefined) || (v1 === null)) {
      return (v2 === undefined) || (v2 === null) ? true : false;
    }

    if (value in v1) {
      v1 = v1.value;
    }

    if (value in v2) {
      v2 = v2.value;
    }

    let n1 = v1.length;
    let n2 = v2.length;

    if (n1 === 0) {
      return (n2 === 0) ? true : false;
    }

    for (let i = 0; i < n1; i++) {
      if (v2.indexOf(v1[i]) < 0) {
        return false;
      }
    }

    return true;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Check two objects have the same value
  // or this value is the same as the one passed as the argument
  //////////////////////////////////////////////////////////////////////////////

  equals(v2) {
    return this.value.consistsOf(v2);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Initialise properties from the given parameters
  //////////////////////////////////////////////////////////////////////////////

  init(value) {
    this.value = value ?? Alignment.defaultValue;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert this object into the one that excludes all irrelevant properties
  //////////////////////////////////////////////////////////////////////////////

  toSerializable() {
    return this.value;
  }

  //////////////////////////////////////////////////////////////////////////////
}