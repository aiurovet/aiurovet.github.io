////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Alignment selection drop-list
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

const _itemsForImage = [
  { value: Alignment.stretch, text: "Stretch" },

  { value: Alignment.left + Alignment.top, text: "Left-Top" },
  { value: Alignment.left + Alignment.middle, text: "Left-Middle" },
  { value: Alignment.left + Alignment.bottom, text: "Left-Bottom" },

  { value: Alignment.center + Alignment.top, text: "Center-Top" },
  { value: Alignment.center + Alignment.middle, text: "Center-Middle" },
  { value: Alignment.center + Alignment.bottom, text: "Center-Bottom" },

  { value: Alignment.right + Alignment.top, text: "Right-Top" },
  { value: Alignment.right + Alignment.middle, text: "Right-Middle" },
  { value: Alignment.right + Alignment.bottom, text: "Right-Bottom" },
];

const _itemsForText = [
  { value: Alignment.left, text: "Left" },
  { value: Alignment.center, text: "Center" },
  { value: Alignment.right, text: "Right" },
  { value: Alignment.justify, text: "Justify" },
];

////////////////////////////////////////////////////////////////////////////////

$.fn.selectAlign = function(options) {
  if (options) {
    options.items = options.isForImage ? _itemsForImage : _itemsForText;
  }

  return this.select(options);
}

////////////////////////////////////////////////////////////////////////////////