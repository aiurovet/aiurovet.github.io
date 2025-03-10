////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2025
// All rights reserved under MIT license (see LICENSE file)
//
// Data for any of 9 alignment positions
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

class AlignData {
  // Current alignment
  //
  alignment = null;

  // Horizontal offset from vertical boundaries, depends on alignment
  //
  offsetX = null;

  // Vertical offset from horizontal boundaries, depends on alignment
  //
  offsetY = null;

  // Horizontal zoom factor (percentage of width)
  //
  stretchX = null;

  // Vertical zoom factor (percentage of height)
  //
  stretchY = null;

  // Arbitrary data in text format (e.g., data URL as Base64 string, text)
  //
  text = null;

  //////////////////////////////////////////////////////////////////////////////
  // If only one argument passed, and that is an object, initialize parameters
  // with its properties: i.e. constructing from a deserialized saved object
  //////////////////////////////////////////////////////////////////////////////

  constructor(alignmentValue, offsetX, offsetY, stretchX, stretchY, text) {
    if (alignmentValue instanceof Object) {
      let from = alignmentValue;
      this.init(from.alignment, from.offsetX, from.offsetY, from.stretchX, from.Alignment, from.text)
    } else {
      this.init(alignmentValue, offsetX, offsetY, stretchX, stretchY, text);
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Initialise properties from the given parameters
  //////////////////////////////////////////////////////////////////////////////

  init(alignmentValue, offsetX, offsetY, stretchX, stretchY, text) {
    this.alignment = new Alignment(alignmentValue ?? Alignment.defaultValue);
    this.offsetX = offsetX ?? 0;
    this.offsetY = offsetY ?? 0;
    this.stretchX = stretchX ?? 1.0;
    this.stretchY = stretchY ?? 1.0;
    this.text = text;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert this object into the one that excludes all irrelevant properties
  //////////////////////////////////////////////////////////////////////////////

  toSerializable() {
    return {
      value: this.value,
      text: this.text,
    };
  }

  //////////////////////////////////////////////////////////////////////////////
}