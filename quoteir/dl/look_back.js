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
  static defaultColor = "white";

  //////////////////////////////////////////////////////////////////////////////

  // Background color
  //
  color = LookBack.defaultColor;

  // Background image alignment (not implemented)
  //
  imageAlignment = new Alignment(Alignment.stretch);

  // Background image as data URL (not implemented)
  //
  imageDataUrl = null;

  //////////////////////////////////////////////////////////////////////////////
  // If only one argument passed, and that is an object, initialize parameters
  // with its properties: i.e. constructing from a deserialized saved object
  //////////////////////////////////////////////////////////////////////////////

  constructor(color, imageAlignment, imageDataUrl) {
    if (color instanceof Object) {
      let from = color;
      this.init(from.color, from.imageAlignment, from.imageDataUrl)
    } else {
      this.init(color, imageAlignment, imageDataUrl);
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Initialise properties from the given parameters
  //////////////////////////////////////////////////////////////////////////////

  init(color, imageAlignment, imageDataUrl) {
    this.color = color ?? LookBack.defaultColor;
    this.imageAlignment = imageAlignment ?? new Alignment();
    this.imageDataUrl = imageDataUrl ?? "";
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert this object into the one that excludes all irrelevant properties
  //////////////////////////////////////////////////////////////////////////////

  toSerializable() {
    return {
      color: this.color,
      imageAlignment: this.imageAlignment.toSerializable(),
      imageDataUrl: this.imageDataUrl,
    };
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert this object into the style string
  //////////////////////////////////////////////////////////////////////////////

  toStyle(isFull) {
    let result = "";

    if (this.color) {
      result += `background-color: ${this.color};`;
    }
    if (this.imageDataUrl) {
      result += `background-image: url('${this.imageDataUrl}');`;
    }
    if (this.imageAlignment) {
      result += this.imageAlignment.toBackStyle(isFull);
    }

    return isFull ? `style="${result}"` : result;
  }

  //////////////////////////////////////////////////////////////////////////////
}