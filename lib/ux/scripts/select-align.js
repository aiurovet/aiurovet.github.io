////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Alignment selection drop-list
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

const _itemsForImageSize = [
  { value: Alignment.noResize, text: "No resize" },

  { value: Alignment.stretch, text: "Stretch" },
  { value: Alignment.stretchX, text: "Stretch Across" },
  { value: Alignment.stretchY, text: "Stretch Down" },

  { value: Alignment.repeat, text: "Repeat" },
  { value: Alignment.repeatX, text: "Repeat Across" },
  { value: Alignment.repeatY, text: "Repeat Down" },
];

const _itemsForImageSpot = [
  { value: Alignment.none, text: "None" },

  { value: Alignment.top + Alignment.left, text: "Top-Left" },
  { value: Alignment.top + Alignment.center, text: "Top-Center" },
  { value: Alignment.top + Alignment.right, text: "Top-Right" },

  { value: Alignment.middle + Alignment.left, text: "Middle-Left" },
  { value: Alignment.middle + Alignment.center, text: "Middle-Center" },
  { value: Alignment.middle + Alignment.right, text: "Middle-Right" },

  { value: Alignment.bottom + Alignment.left, text: "Bottom-Left" },
  { value: Alignment.bottom + Alignment.center, text: "Bottom-Center" },
  { value: Alignment.bottom + Alignment.right, text: "Bottom-Right" },
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
    options.isBlend = true;
    options.items = options.isForSize ? _itemsForImageSize :
                    options.isForSpot ? _itemsForImageSpot : _itemsForText;
  }

  return this.select(options);
}

////////////////////////////////////////////////////////////////////////////////