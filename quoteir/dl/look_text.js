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
  static defaultColor = "black";
  static defaultFontFamily = "sans-serif";
  static defaultFontEffects = "";
  static defaultFontSize = 60; // in points
  static defaultPaddingHorizontal = 0.25; // in ems
  static defaultPaddingVertical = 0; // in ems

  // Basic font effects

  static bold = "B";
  static italic = "I";
  static underline = "U";

  //////////////////////////////////////////////////////////////////////////////

  // Text color
  //
  color = LookText.defaultColor;

  // The font configuration to display text
  //
  font = {
    family: LookText.defaultFontFamily,
    effects: LookText.defaultFontEffects,
    size: LookText.defaultFontSize,
    sizeRatio: 1.0,
  };

  // Padding in the quote box in the selected font size units (ems)
  //
  padding = {
    horizontal: LookText.defaultPaddingHorizontal,
    vertical: LookText.defaultPaddingVertical
  };

  // Text to display
  //
  text = "";

  //////////////////////////////////////////////////////////////////////////////
  // If only one argument passed, and that is an object, initialize parameters
  // with its properties: i.e. constructing from a deserialized saved object
  //////////////////////////////////////////////////////////////////////////////

  constructor(color, font, padding, text) {
    this.init(color, font, padding, text);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Initialise properties from the given parameters
  //////////////////////////////////////////////////////////////////////////////

  init(color, font, padding, text) {
    this.color = color ?? LookText.defaultColor;

    this.font.family = font?.family ?? LookText.defaultFontFamily;
    this.font.effects = font?.effects ?? LookText.defaultFontEffects;
    this.font.size = font?.size ?? (font?.sizeRatio ? null : LookText.defaultFontSize);
    this.font.sizeRatio = font?.sizeRatio ?? 1.0;

    this.padding.horizontal = padding?.horizontal ?? LookText.defaultPaddingHorizontal;
    this.padding.vertical = padding?.vertical ?? LookText.defaultPaddingVertical;

    this.text = text ?? "";
  }

  //////////////////////////////////////////////////////////////////////////////
  // Check the text look is active (drawn on screen)
  //////////////////////////////////////////////////////////////////////////////

  isActive() {
    return (this.font.size > 0) || (this.font.sizeRatio > 0) ? true : false;
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
  // Convert this object into the style string
  //////////////////////////////////////////////////////////////////////////////

  toStyle(isFull) {
    const font = this.font;
    const effects = this.font?.effects ?? LookText.defaultFontEffects;
    const padding = this.padding;
    let result = "";

    if (this.color) {
      result += `color: ${this.color};`;
    }
    if (font?.family) {
      result += `font-family: ${font.family};`;
    }
    if (effects.contains(LookText.bold)) {
      result += `font-weight: bold;`;
    }
    if (effects.contains(LookText.italic)) {
      result += `font-style: italic;`;
    }
    if (effects.contains(LookText.underline)) {
      result += `text-decoration: underline;`;
    }
    if (font?.size) {
      result += `font-size: ${font.size}pt;`;
    } else if (font.sizeRatio) {
      result += `font-size: ${font.sizeRatio}em;`;
    }
    if (padding?.horizontal) {
      result += `padding-left: ${padding.horizontal}em;`;
      result += `padding-right: ${padding.horizontal}em;`;
    }
    if (padding?.vertical) {
      result += `padding-top: ${padding.vertical}em;`;
      result += `padding-bottom: ${padding.vertical}em;`;
    }

    return isFull ? `style="${result}"` : result;
  }

  //////////////////////////////////////////////////////////////////////////////
}