////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Alignment selection drop-list
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

const _itemsForSize = [
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

  { value: Alignment.left + Alignment.top, text: "Left-Top" },
  { value: Alignment.left + Alignment.middle, text: "Left-Middle" },
  { value: Alignment.left + Alignment.bottom, text: "Left-Bottom" },

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
  this.indexOf = function(items, value) {
    for (let itemNo = 0, itemCount = items.length; ; itemNo++) {
      if (itemNo >= itemCount) {
        return -1;
      }

      let itemValue = items[itemNo].value;

      for (let charNo = 0, charCount = value.length; ; charNo++) {
        if (charNo >= charCount) {
          return itemNo;
        }
        if (itemValue.indexOf(value[charNo]) < 0) {
          break;
        }
      }
    }
  }

  if (!options) {
    return this.select();
  }

  options.items = options.isForSize ? _itemsForSize :
                  options.isForSpot ? _itemsForSpot : _itemsForText;

  let selectedItemNo = this.indexOf(options.items, options.value);

  if (selectedItemNo < 0) {
    selectedItemNo = this.indexOf(options.items, Alignment.center + Alignment.middle);
  }

  options.selectedItemNo = selectedItemNo;

  return this.select(options);
}

////////////////////////////////////////////////////////////////////////////////