////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2025
// All rights reserved under MIT license (see LICENSE file)
//
// Configuration of any quote element (phrase, footer)
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

class Direction {
  // Constants
  //
  static northToSouth = "NS";
  static westToEast = "WE";
  static northWestToSouthEast = "NWSE";
  static southWestToNorthEast = "SWNE";
  static radial = "R";

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

  toStyle(fromColor, toColor, fromRatio) {
    let result = {};
    const value = this.value;

    // Check the presence

    if ((value === undefined) || (value === null) || (value.length <= 0)) {
      return result;
    }

    // Normalize ratio

    let fromRatioPc = parseFloat(fromRatio);

    if (fromRatioPc <= 1) {
      fromRatioPc *= 100;
    }

    fromColor = `${fromRatioPc}%`;

    // Calculate style

    if (value.includes(Direction.radial)) {
      result["background"] = `radial-gradient(${fromColor}, ${toColor})`;
    } else {
      const angle =
        value === Direction.westToEast ? 90 :
        value === Direction.northWestToSouthEast ? 135 :
        value === Direction.southWestToNorthEast ? 45 : 180

      result["background"] = `linear-gradient(${angle}deg, ${fromColor}, ${toColor})`;
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