////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2025
// All rights reserved under MIT license (see LICENSE file)
//
// Configuration of any quote element (phrase, footer)
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

class Gradient {
  // Direction of the gradient
  //
  direction = null;

  // Start color of the gradient
  //
  fromColor = null;

  // Start color percentage
  //
  fromRatio = null;

  // End color of the gradient
  //
  toColor = null;

  //////////////////////////////////////////////////////////////////////////////
  // If only one argument passed, and that is an object, initialize parameters
  // with its properties: i.e. constructing from a deserialized saved object
  //////////////////////////////////////////////////////////////////////////////

  constructor(direction, fromColor, fromRatio, toColor) {
    if (direction instanceof Object) {
      let from = direction;
      this.init(from.direction, from.fromColor, from.fromRatio, from.toColor)
    } else {
      this.init(direction, fromColor, fromRatio, toColor);
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Initialise properties from the given parameters
  //////////////////////////////////////////////////////////////////////////////

  init(direction, fromColor, fromRatio, toColor) {
    this.direction = direction;
    this.fromColor = fromColor;
    this.fromRatio = fromRatio;
    this.toColor = toColor;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert this object into the one that excludes all irrelevant properties
  //////////////////////////////////////////////////////////////////////////////

  toSerializable() {
    return {
      direction: this.direction.toSerializable(),
      fromColor: this.fromColor,
      fromRatio: this.fromRatio,
      toColor: this.toColor,
    };
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert this object into the background style associative array
  //////////////////////////////////////////////////////////////////////////////

  toStyle() {
    let result = {};
    const value = this.value;

    // Check the presence

    if ((value === undefined) || (value === null) || (value.length <= 0)) {
      return result;
    }

    // Normalize ratio

    let fromRatioPc = parseFloat(this.fromRatio);

    if (fromRatioPc <= 1) {
      fromRatioPc *= 100;
    }

    const direction = this.direction;
    const fromColor = $this.fromColor + fromRatioPc < 100 ? ` ${fromRatioPc}%` : "";

    // Calculate style

    if (direction === Direction.radial) {
      result["background"] = `radial-gradient(${fromColor}, ${this.toColor})`;
    } else {
      const angle =
        direction === Direction.westToEast ? 90 :
        direction === Direction.northWestToSouthEast ? 135 :
        direction === Direction.southWestToNorthEast ? 45 : 180

      result["background"] = `linear-gradient(${angle}deg, ${fromColor}, ${this.toColor})`;
    }

    return result;
  }

  //////////////////////////////////////////////////////////////////////////////
}