////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2025
// All rights reserved under MIT license (see LICENSE file)
//
// Configuration of any quote element (phrase, footer)
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

class LookText {
  // Constants
  //
  static defaultColor = null;
  static defaultFontFamily = "sans-serif";
  static defaultFontEffects = null;
  static defaultFontSize = 60; // in points
  static defaultPaddingHorizontal = 0.25; // in ems
  static defaultPaddingVertical = 0; // in ems

  // Basic font effects

  static bold = "B";
  static italic = "I";
  static underline = "U";

  //////////////////////////////////////////////////////////////////////////////

  // Alignment of the text
  //
  alignment = null;

  // Text color
  //
  color = null;

  // The font configuration to display text
  //
  font = null;

  // Padding in the quote box in the selected font size units (ems)
  //
  padding = null;

  // Text to display
  //
  text = null;

  //////////////////////////////////////////////////////////////////////////////
  // If only one argument passed, and that is an object, initialize parameters
  // with its properties: i.e. constructing from a deserialized saved object
  //////////////////////////////////////////////////////////////////////////////

  constructor(alignment, color, font, padding, text) {
    if (color instanceof Object) {Default
      let from = alignment;
      this.init(from.alignment, from.color, from.font, from.padding, from.text)
    } else {
      this.init(alignment, color, font, padding, text);
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Initialise properties from the given parameters
  //////////////////////////////////////////////////////////////////////////////

  init(alignment, color, font, padding, text) {
    this.alignment = new Alignment(alignment ?? Alignment.center + Alignment.middle);
    this.color = color ?? LookText.defaultColor;

    this.font = {
      family: font?.family ?? LookText.defaultFontFamily,
      effects: font?.effects ?? LookText.defaultFontEffects,
      size: font?.size ?? (font?.sizeRatio ? null : LookText.defaultFontSize),
      sizeRatio: font?.sizeRatio ?? 1.0 ,
    };

    this.padding = {
      horizontal: padding?.horizontal ?? LookText.defaultPaddingHorizontal,
      vertical: padding?.vertical ?? LookText.defaultPaddingVertical,
    };

    this.text = text ?? "";
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert this object into the one that excludes all irrelevant properties
  //////////////////////////////////////////////////////////////////////////////

  toSerializable() {
    let font = this.font;
    let padding = this.padding;

    return {
      color: this.color,
      font: {
        family: font.family,
        effects: font.effects,
        size: font.size,
        sizeRatio: font.sizeRatio,
      },
      padding: {
        horizontal: padding.horizontal,
        vertical: padding.vertical,
      },
      text: (this.text?.length ?? 0) <= 0 ? null : this.text,
    };
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert this object into the style object
  //////////////////////////////////////////////////////////////////////////////

  toStyle() {
    const font = this.font;
    const effects = this.font?.effects ?? LookText.defaultFontEffects;
    const padding = this.padding;
    let result = {};

    if (this.color) {
      result["color"] = this.color;
    }
    if (font?.family) {
      result["font-family"] = font.family;
    }
    if (effects && effects.includes(LookText.bold)) {
      result["font-weight"] = "bold";
    }
    if (effects && effects.includes(LookText.italic)) {
      result["font-style"] = "italic";
    }
    if (effects && effects.includes(LookText.underline)) {
      result["text-decoration"] = "underline";
    }
    if (font?.size) {
      result["font-size"] = font.size + "pt";
    } else if (font?.sizeRatio) {
      result["font-size"] = font.sizeRatio + "em";
    }
    if (padding?.horizontal) {
      result["padding-left"] = padding.horizontal + "em";
      result["padding-right"] = padding.horizontal + "em";
    }
    if (padding?.vertical) {
      result["padding-top"] = padding.vertical + "em";
      result["padding-bottom"] = padding.vertical + "em";
    }

    return result;
  }

  //////////////////////////////////////////////////////////////////////////////
}