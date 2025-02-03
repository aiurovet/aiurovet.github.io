////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Common color functions
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
class Colors {
  static prefixHex = "#";

  static prefixHsl = "hsl";

  static prefixRgb = "rgb";

  static regexBlanks = /\s+/g;

  static regexData = /^[^\(\)]+\((.*)\)$/;

  static valueSeparator = ",";

  static valueSubPattern = "$1";

  //////////////////////////////////////////////////////////////////////////////

  static hslToRgb(color) {
    let colorEx = Colors.normalize(color);

    if (!colorEx || !colorEx.startsWith(Colors.prefixHsl)) {
      return colorEx;
    }

    let values = colorEx.replace(Colors.regexData, Colors.valueSubPattern).split(Colors.valueSeparator);
    let count = values.length;

    const h = count <= 0 ? -1 : parseInt(values[0]);
    const s = count <= 1 ? -1 : parseInt(values[1]) / 100.0;
    const L = count <= 2 ? -1 : parseInt(values[2]) / 100.0;
    const a = count <= 3 ? null : parseFloat(values[3]);

    if ((h < 0) || (h > 360) || (s < 0) || (s > 100) || (L < 0) || (L > 100) || ((a !== null) && ((a < 0) || (a > 1)))) {
      return null;
    }

    let c = (1 - Math.abs(2 * L - 1)) * s;
    let x = c * (1 - ((Math.abs(h / 60) % 2) - 1));
    let m = L - (c / 2);

    let rgb = h <  60 ? [c, x, 0] :
              h < 120 ? [x, c, 0] :
              h < 180 ? [0, c, x] :
              h < 240 ? [0, x, c] :
              h < 300 ? [x, 0, c] : [c, 0, x];

    let r = Math.round((rgb[0] + m) * 255);
    let g = Math.round((rgb[1] + m) * 255);
    let b = Math.round((rgb[2] + m) * 255);

    return a === null ? `rgb(${r},${g},${b})` : `rgba(${r},${g},${b},${a})`;
  }

  //////////////////////////////////////////////////////////////////////////////

  static normalize(color) {
    return color?.trim().toLowerCase().replace(Colors.regexBlanks, "");
  }

  //////////////////////////////////////////////////////////////////////////////

  static rgbToHex(color) {
    let colorEx = Colors.normalize(color);

    if (!colorEx || !colorEx.startsWith(Colors.prefixRgb)) {
      return colorEx;
    }

    let values = colorEx.replace(Colors.regexData, Colors.valueSubPattern).split(Colors.valueSeparator);
    let count = values.length;

    let r = count <= 0 ? -1 : parseInt(values[0]);
    let g = count <= 1 ? -1 : parseInt(values[1]);
    let b = count <= 2 ? -1 : parseInt(values[2]);
    let a = count <= 3 ? null : parseFloat(values[3]);

    if ((r < 0) || (r > 255) || (g < 0) || (g > 255) || (b < 0) || (b > 255) || ((a !== null) && ((a < 0) || (a > 1)))) {
      return null;
    }

    return Colors.prefixHex + 
      (r < 0x010 ? "0" : "") + r.toString(0x10) +
      (g < 0x010 ? "0" : "") + g.toString(0x10) +
      (b < 0x010 ? "0" : "") + b.toString(0x10) +
      (a === null ? "" : Math.round(a * 255).toString(0x10));
  }

  //////////////////////////////////////////////////////////////////////////////

  static toHex(color) {
    let colorEx = Colors.normalize(color);

    if (colorEx.startsWith(Colors.prefixHex)) {
      return color;
    }

    colorEx = Colors.hslToRgb(colorEx);

    return colorEx.startsWith(Colors.prefixRgb)
      ? Colors.rgbToHex(colorEx)
      : colorEx;
  }
}

////////////////////////////////////////////////////////////////////////////////