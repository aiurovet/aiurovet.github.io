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
  static defaultGradient = new Gradient("#0080ff", 25, new Direction(Direction.northToSouth), "#ffffff", true);
  static defaultPaddingHorizontal = 0.50; // in ems
  static defaultPaddingVertical = 0.25; // in ems

  //////////////////////////////////////////////////////////////////////////////

  // Background gradient (might reduce to a plain color)
  //
  gradient = null;

  // Array of background images and their alignments (LookImage)
  //
  images = null;

  //////////////////////////////////////////////////////////////////////////////
  // If only one argument passed, and that is an object, initialize parameters
  // with its properties: i.e. constructing from a deserialized saved object
  //////////////////////////////////////////////////////////////////////////////

  constructor(gradient, images, padding) {
    if ((gradient instanceof Object) && ("gradient" in gradient)) {
      let from = gradient;
      this.init(from.gradient, from.images, from.padding)
    } else {
      this.init(gradient, images, padding);
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Initialise properties from the given parameters
  //////////////////////////////////////////////////////////////////////////////

  init(gradient, images, padding) {
    this.gradient = gradient ? new Gradient(gradient) : LookBack.defaultGradient;
    this.images = images ? images : null;

    this.padding = {
      top: padding?.top ?? LookBack.defaultPaddingVertical,
      right: padding?.right ?? LookBack.defaultPaddingHorizontal,
      bottom: padding?.bottom ?? LookBack.defaultPaddingVertical,
      left: padding?.left ?? LookBack.defaultPaddingHorizontal,
    };
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert this object into the one that excludes all irrelevant properties
  //////////////////////////////////////////////////////////////////////////////

  toSerializable() {
    const padding = this.padding;

    return {
      gradient: this.gradient.toSerializable(),
      images: this.images?.map((x) => x.toSerializable()) ?? [],
      padding: {
        top: padding?.top,
        right: padding?.right,
        bottom: padding?.bottom,
        left: padding?.left,
      },
    };
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert this object to the style associative array
  //////////////////////////////////////////////////////////////////////////////

  toStyle() {
    // Initialize full style array

    let style = {
      "background-image": "",
      "background-position": "",
      "background-repeat": "",
      "background-size": "",
    };

    // Loop through all images and add respective styles

    let images = this.images;
    let imageCount = images?.length ?? 0;
    let separator = ",";
    let curSep = "";

    for (let imageNo = 0; imageNo < imageCount; imageNo++) {
      let image = images[imageNo];

      if (!image.url) {
        continue;
      }

      curSep = imageNo > 0 ? separator : "";

      style["background-image"] += curSep + image.url;

      let alignment = image.alignment ?? "";
      let hasRepeatX = alignment.includes(Alignment.repeatX);
      let hasRepeatY = alignment.includes(Alignment.repeatY); 

      style["background-position"] += curSep + (
        (alignment.includes(Alignment.bottom) ? " bottom" : "") +
        (alignment.includes(Alignment.center) ? " center" : "") +
        (alignment.includes(Alignment.left) ? " left" : "") +
        (alignment.includes(Alignment.middle) ? " center" : "") +
        (alignment.includes(Alignment.right) ? " right" : "") +
        (alignment.includes(Alignment.top) ? " top" : "")
      ).trimStart();

      style["background-repeat"] += curSep +
        (hasRepeatX ? (hasRepeatY ? "repeat" : "repeat-x") : hasRepeatY ? "repeat-y" : "no-repeat");

      style["background-size"] += curSep + (
        (alignment.includes(Alignment.stretchX ) ? " 100%" : " auto") +
        (alignment.includes(Alignment.stretchY) ? " 100%" : " auto")
      ).trimStart();
    }

    // Add gradient style

    curSep = imageCount > 0 ? separator : "";

    style["background-image"] += curSep + (this.gradient?.toStyle() ?? "none");
    style["background-position"] += curSep + "0 0";
    style["background-repeat"] += curSep + "no-repeat";
    style["background-size"] += curSep + "auto";

    const padding = this.padding;

    if (padding) {
      style["padding"] = `${padding.top}em ${padding.right}em ${padding.bottom}em ${padding.left}em`;
    }

    return style;
  }

  //////////////////////////////////////////////////////////////////////////////
}