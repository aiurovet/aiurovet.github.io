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
  static defaultColor = "rgb(224, 224, 224)";
  static defaultAlignment = new Alignment(Alignment.stretch);

  //////////////////////////////////////////////////////////////////////////////

  // Background image alignment (not implemented)
  //
  alignment = null;

  // Background color
  //
  color = null;

  // Background image as data URL (not implemented)
  //
  dataUrl = null;

  //////////////////////////////////////////////////////////////////////////////
  // If only one argument passed, and that is an object, initialize parameters
  // with its properties: i.e. constructing from a deserialized saved object
  //////////////////////////////////////////////////////////////////////////////

  constructor(alignment, color, dataUrl) {
    if (alignment instanceof Object) {
      let from = alignment;
      this.init(from.alignment, from.color, from.dataUrl)
    } else {
      this.init(alignment, color, dataUrl);
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Initialise properties from the given parameters
  //////////////////////////////////////////////////////////////////////////////

  init(alignment, color, dataUrl) {
    this.alignment = alignment?.value ? alignment : LookBack.defaultAlignment;
    this.color = color ?? LookBack.defaultColor;
    this.dataUrl = dataUrl ? dataUrl : null;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert this object into the one that excludes all irrelevant properties
  //////////////////////////////////////////////////////////////////////////////

  toSerializable() {
    return {
      alignment: this.alignment.toSerializable(),
      color: this.color,
      dataUrl: this.dataUrl,
    };
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert this object to the style associative array
  //////////////////////////////////////////////////////////////////////////////

  toStyle(isFull) {
    let result = this.alignment.toBackStyle(isFull);

    if (this.color) {
      result["background-color"] = this.color;
    }
    if (this.dataUrl) {
      result["background-image"] = "url(" + this.dataUrl + ")";
    }

    return result;
  }

  //////////////////////////////////////////////////////////////////////////////
}