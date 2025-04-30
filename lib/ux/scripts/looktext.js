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
  static defaultPaddingHorizontal = 0; // in ems
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
    if ((alignment instanceof Object) && ("alignment" in alignment)) {
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
    this.alignment = new Alignment(alignment ?? (Alignment.center + Alignment.middle));
    this.color = color ?? LookText.defaultColor;

    this.font = {
      family: font?.family ?? LookText.defaultFontFamily,
      effects: font?.effects ?? LookText.defaultFontEffects,
      size: font?.size ?? (font?.sizeRatio ? null : LookText.defaultFontSize),
      sizeRatio: font?.sizeRatio ?? 1.0,
    };

    this.padding = {
      top: padding?.top ?? LookText.defaultPaddingVertical,
      right: padding?.right ?? LookText.defaultPaddingHorizontal,
      bottom: padding?.bottom ?? LookText.defaultPaddingVertical,
      left: padding?.left ?? LookText.defaultPaddingHorizontal,
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
      alignment: this.alignment.toSerializable(),
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
    const style = {};
    const alignment = this.alignment?.value;

    if (alignment) {
      style["text-align"] =
        alignment.includes(Alignment.center) ? "center" :
        alignment.includes(Alignment.justify) ? "justify" :
        alignment.includes(Alignment.left) ? "left" :
        alignment.includes(Alignment.right) ? "right" :
        null;

      style["vertical-align"] =
        alignment.includes(Alignment.bottom) ? "bottom" :
        alignment.includes(Alignment.middle) ? "middle" :
        alignment.includes(Alignment.top) ? "top" :
        null;
    }

    if (this.color) {
      style["color"] = this.color;
    }

    const font = this.font;

    if (font?.family) {
      style["font-family"] = font.family;
    }
    if (font?.size) {
      style["font-size"] = font.size;
    } else if (font?.sizeRatio) {
      style["font-size"] = font.sizeRatio + "em";
    }

    const effects = this.font?.effects ?? LookText.defaultFontEffects;

    if (effects) {
      if (effects.includes(LookText.bold)) {
        style["font-weight"] = "bold";
      }
      if (effects.includes(LookText.italic)) {
        style["font-style"] = "italic";
      }
      if (effects.includes(LookText.underline)) {
        style["text-decoration"] = "underline";
      }
    }

    const padding = this.padding;

    if (padding) {
        style["padding"] = `${padding.top}em ${padding.right}em ${padding.bottom}em ${padding.left}em`;
    }

    return style;
  }

  //////////////////////////////////////////////////////////////////////////////
}