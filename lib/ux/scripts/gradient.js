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

  // True when to-color is used
  //
  isToColorUsed = null;

  // End color of the gradient
  //
  toColor = null;

  //////////////////////////////////////////////////////////////////////////////
  // If only one argument passed, and that is an object, initialize parameters
  // with its properties: i.e. constructing from a deserialized saved object
  //////////////////////////////////////////////////////////////////////////////

  constructor(fromColor, fromRatio, direction, toColor, isToColorUsed) {
    if (fromColor instanceof Object) {
      let from = fromColor;
      this.init(from.fromColor, from.fromRatio, from.direction, from.toColor, from.isToColorUsed)
    } else {
      this.init(fromColor, fromRatio, direction, toColor, isToColorUsed);
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Initialise properties from the given parameters
  //////////////////////////////////////////////////////////////////////////////

  init(fromColor, fromRatio, direction, toColor, isToColorUsed) {
    this.fromColor = fromColor;
    this.fromRatio = fromRatio;
    this.direction = new Direction(direction);
    this.toColor = toColor;

    this.initIsToColorUsed(isToColorUsed);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Initialise isToColorUsed property
  //////////////////////////////////////////////////////////////////////////////

  initIsToColorUsed(isToColorUsed) {
    if ((isToColorUsed === undefined) || (isToColorUsed === null)) {
      this.isToColorUsed = (this.fromColor === this.toColor) || (this.fromRatio >= 100) ? true : false;
    }
    
    return this.isToColorUsed;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert this object into the one that excludes all irrelevant properties
  //////////////////////////////////////////////////////////////////////////////

  toSerializable() {
    return {
      fromColor: this.fromColor,
      fromRatio: this.fromRatio,
      direction: this.direction.toSerializable(),
      toColor: this.toColor,
      isToColorUsed: this.isToColorUsed
    };
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert this object into the background style associative array
  //////////////////////////////////////////////////////////////////////////////

  toStyle() {
    let result;

    // Normalize ratio

    let fromRatioPc = parseFloat(this.fromRatio);
    const isSolidColor = !this.isToColorUsed || (this.fromColor === this.toColor) || (fromRatioPc >= 100) ? true : false;
    const fromColor = isSolidColor ? this.fromColor : `${this.fromColor} ${fromRatioPc}%`;

    if (isSolidColor) {
      result = fromColor;
    } else {
      const direction = this.direction.value;

      // Calculate style

      if (direction === Direction.radial) {
        result = `radial-gradient(${fromColor}, ${this.toColor})`;
      } else {
        const angle =
          direction === Direction.westToEast ? 90 :
          direction === Direction.northWestToSouthEast ? 135 :
          direction === Direction.southWestToNorthEast ? 45 : 180;

        result = `linear-gradient(${angle}deg, ${fromColor}, ${this.toColor})`;
      }
    }

    return {background: result};
  }

  //////////////////////////////////////////////////////////////////////////////
}