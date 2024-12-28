////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2025
// All rights reserved under MIT license (see LICENSE file)
//
// Configuration of any quote element (phrase, footer)
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

class Look {
  // Constants
  //
  static defaultFontFamily = "sans-serif";
  static defaultFontSizePt = 60; // in points

  //////////////////////////////////////////////////////////////////////////////

  // Text color
  //
  color = "black";

  // The font configuration to display text
  //
  font = {
    family: Look.defaultFontFamily,
    isBold: false,
    isItalic: false,
    isUnderline: false,
    sizePt: Look.defaultFontSizePt,
    sizeRatio: 1.0,
  };

  // Padding in the quote box in the selected font size units (ems)
  //
  padding = {
    horizontal: 0.25,
    vertical: 0.0
  };

  //////////////////////////////////////////////////////////////////////////////
  // If only one argument passed, and that is an object, initialize parameters
  // with its properties: i.e. constructing from a deserialized saved object
  //////////////////////////////////////////////////////////////////////////////

  constructor(color, font, padding) {
    this.init(color, font, padding);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Initialise properties from the given parameters
  //////////////////////////////////////////////////////////////////////////////

  init(color, font, padding) {
    this.color = color;

    if ((font !== undefined) && (font !== null)) {
      this.font.family = font.family;
      this.font.isBold = font.isBold;
      this.font.isItalic = font.isItalic;
      this.font.isUnderline = font.isUnderline;
    }

    if ((padding !== undefined) && (padding !== null)) {
      this.padding = padding;
    }
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
        isBold: font.isBold,
        isItalic: font.isItalic,
        isUnderline: font.isUnderline
      },
      padding: {
        horizontal: padding.horizontal,
        vertical: padding.vertical,
      }
    };
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert this object into the style string
  //////////////////////////////////////////////////////////////////////////////

  toStyle(isFull) {
    let font = this.font;
    let padding = this.padding;
    let result = "";

    if (this.color) {
      result += `color: ${this.color};`;
    }
    if (font?.family) {
      result += `font-family: ${font.family};`;
    }
    if (font?.isBold) {
      result += `font-weight: bold;`;
    }
    if (font?.isItalic) {
      result += `font-style: italic;`;
    }
    if (font?.isUnderline) {
      result += `text-decoration: underline;`;
    }
    if (font?.sizePt) {
      result += `font-size: ${font.sizePt}pt;`;
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