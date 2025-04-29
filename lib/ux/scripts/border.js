////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2025
// All rights reserved under MIT license (see LICENSE file)
//
// Configuration of the element border
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

class Border {
  // Defaults
  //
  static defaultColor = Colors.defaultColor;
  static defaultStyle = Border.styleSolid;
  static defaultWidth = 1;

  // Const: sides
  //
  static sideBottom = "Bottom";
  static sideLeft = "Left";
  static sideRight = "Right";
  static sideTop = "Top";

  // Const: styles
  //
  static styleDashed = "Dashed";
  static styleDotted = "Dotted";
  static styleDouble = "Double";
  static styleGroove = "Groove";
  static styleInset = "Inset";
  static styleOutset = "Outset";
  static styleNone = "None";
  static styleRidge = "Ridge";
  static styleSolid = "Solid";

  // CSS-related parameters
  //
  color = null;
  radius = null;
  sides = null;
  style = null;
  width = null;

  //////////////////////////////////////////////////////////////////////////////
  // If only one argument passed, and that is an object, initialize parameters
  // with its properties: i.e. constructing from a deserialized saved object
  //////////////////////////////////////////////////////////////////////////////

  constructor(sides, style, color, width, radius) {
    if ((sides instanceof Object) && ("sides" in sides)) {
      let from = sides;
      this.init(from.sides, from.style, from.color, from.width, from.radius)
    } else {
      this.init(sides, style, color, width, radius)
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert this object into the one that excludes all irrelevant properties
  //////////////////////////////////////////////////////////////////////////////

  getSideFlags() {
    const sides = this.sides;

    const result = [
      sides.includes(Border.sideTop),
      sides.includes(Border.sideRight),
      sides.includes(Border.sideBottom),
      sides.includes(Border.sideLeft),
    ];

    result[4] = result[0] || result[2];
    result[5] = result[1] || result[3];

    return result;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Initialise properties from the given parameters
  //////////////////////////////////////////////////////////////////////////////

  init(sides, style, color, width, radius) {
    this.sides = sides?.trim() ?? "";
    this.style = style || Border.styleNone;
    this.color = color || Colors.defaultColor;

    const [_1, _2, _3, _4, hasHorz, hasVert] = this.getSideFlags();

    this.radius = (hasHorz && hasVert) ? (radius ?? 0) : 0;
    this.width = (hasHorz || hasVert) ? (width ?? 0) : 0;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert this object into the one that excludes all irrelevant properties
  //////////////////////////////////////////////////////////////////////////////

  toDisplayName() {
    let result = "";

    const [hasTop, hasRight, hasBottom, hasLeft, _1, _2] = this.getSideFlags();

    if (hasLeft && hasTop && hasRight && hasBottom) {
      result += "-Full";
    } else {
      if (hasLeft) {
        result += `-${Border.sideLeft}`;
      }
      if (hasTop) {
        result += `-${Border.sideTop}`;
      }
      if (hasRight) {
        result += `-${Border.sideRight}`;
      }
      if (hasBottom) {
        result += `-${Border.sideBottom}`;
      }
    }
    if (((hasTop || hasBottom) && (hasLeft || hasRight))) {
      result += "-Rounded";
    }

    let style = this.style;

    if (style && (style != Border.styleNone)) {
      result += "-" + style;
    }

    result = result.substring(1);

    if (!result) {
      result = Border.styleNone;
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert this object into the one that excludes all irrelevant properties
  //////////////////////////////////////////////////////////////////////////////

  toSerializable() {
    return {
      sides: this.sides,
      style: this.style,
      color: this.color,
      width: this.width,
      radius: this.radius
    };
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert this object into the background style associative array
  //////////////////////////////////////////////////////////////////////////////

  toStyle() {
    let result = "";

    const [hasTop, hasRight, hasBottom, hasLeft, hasHorz, hasVert] = this.getSideFlags();

    let cssValue = `${this.width}px ${this.style} ${this.color}`;

    if (hasTop && hasRight && hasBottom && hasLeft) {
      result["border"] = `${this.width}px ${this.style} ${this.color}`;
    } else {
      if (hasTop) {
        result["border-top"] = `${this.width}px ${this.style} ${this.color}`;
      } 
      if (hasRight) {
        result["border-right"] = `${this.width}px ${this.style} ${this.color}`;
      }
      if (hasBottom) {
        result["border-bottom"] = `${this.width}px ${this.style} ${this.color}`;
      }
      if (hasLeft) {
        result["border-left"] = `${this.width}px ${this.style} ${this.color}`;
      }
    }

    if (this.radius > 0) {
      cssValue = `${this.radius}px`;

      if (hasTop && hasRight && hasBottom && hasLeft) {
        result["border-radius"] = cssValue;
      } else if (hasTop && hasLeft) {
        result["border-top-left-radius"] = cssValue;
      } else if (hasTop && hasRight) {
        result["border-top-right-radius"] = cssValue;
      } else if (hasBottom && hasLeft) {
        result["border-bottom-left-radius"] = cssValue;
      } else if (hasBottom && hasRight) {
        result["border-bottom-right-radius"] = cssValue;
      }
    }

    // Normalize ratio

    let fromRatioPc = parseFloat(this.fromRatio);
    const isSolidColor = !this.isToColorUsed || (this.fromColor === this.toColor) || (fromRatioPc >= 100) ? true : false;
    const fromColor = isSolidColor ? this.fromColor : `${this.fromColor} ${fromRatioPc}%`;

    if (isSolidColor) {
      result = `linear-gradient(0deg, ${fromColor}, ${fromColor})`;
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

    return result;
  }

  //////////////////////////////////////////////////////////////////////////////
}