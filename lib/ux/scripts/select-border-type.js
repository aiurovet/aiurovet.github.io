////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Alignment selection drop-list
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

const _borderTypes = [
  { value: BorderType.full, text: "Full" },
  { value: BorderType.top, text: "Top" },
  { value: BorderType.left, text: "Left" },
  { value: BorderType.bottom, text: "Bottom" },
  { value: BorderType.right, text: "Right" },
  { value: BorderType.topLeft, text: "Top-Left" },
  { value: BorderType.topRight, text: "Top-Right" },
  { value: BorderType.bottomLeft, text: "Bottom-Left" },
  { value: BorderType.bottomRight, text: "Bottom-Right" },
  { value: BorderType.none, text: "None" },
];

////////////////////////////////////////////////////////////////////////////////

$.fn.selectBorderType = function(options) {
  if (options) {
    options.isBlend = true;
    options.items = _borderTypes;
  }

  return this.select(options);
}

////////////////////////////////////////////////////////////////////////////////