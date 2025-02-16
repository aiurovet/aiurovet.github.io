////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2025
// All rights reserved under MIT license (see LICENSE file)
//
// Configuration of any quote element (phrase, footer)
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

class LookBack {
  // Constants
  //
  static defaultGradient = new Gradient("#0080ff", 10, new Direction(Direction.northToSouth), "#ffffff");
  static defaultAlignment = new Alignment(Alignment.center + Alignment.middle + Alignment.fitHorz + Alignment.fitVert);

  //////////////////////////////////////////////////////////////////////////////

  // Background image alignment (not implemented)
  //
  alignment = null;

  // Background gradient (might reduce to a plain color)
  //
  gradient = null;

  // Background image URL (not implemented)
  //
  imageUrl = null;

  // Full custom styling overriding the rest
  //
  userDefined = null;

  //////////////////////////////////////////////////////////////////////////////
  // If only one argument passed, and that is an object, initialize parameters
  // with its properties: i.e. constructing from a deserialized saved object
  //////////////////////////////////////////////////////////////////////////////

  constructor(gradient, imageUrl, alignment, userDefined) {
    if ((gradient instanceof Object) && gradient.gradient) {
      let from = gradient;
      this.init(from.gradient, from.imageUrl, from.alignment, from.userDefined)
    } else {
      this.init(gradient, imageUrl, alignment, userDefined);
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Initialise properties from the given parameters
  //////////////////////////////////////////////////////////////////////////////

  init(gradient, imageUrl, alignment, userDefined) {
    this.gradient = gradient ? new Gradient(gradient) : LookBack.defaultGradient;
    this.imageUrl = imageUrl ? imageUrl : null;
    this.alignment = alignment ? new Alignment(alignment) : LookBack.defaultAlignment;
    this.userDefined = userDefined ?? "";
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert this object into the one that excludes all irrelevant properties
  //////////////////////////////////////////////////////////////////////////////

  toSerializable() {
    return {
      gradient: this.gradient.toSerializable(),
      imageUrl: this.imageUrl,
      alignment: this.alignment.toSerializable(),
      userDefined: this.userDefined,
    };
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert this object to the style associative array
  //////////////////////////////////////////////////////////////////////////////

  toStyle() {
    return this.userDefined ||
      this.alignment.toBackStyle(this.gradient.toStyle(), this.imageUrl);
  }

  //////////////////////////////////////////////////////////////////////////////
}