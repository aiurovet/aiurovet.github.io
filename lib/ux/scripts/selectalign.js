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

  if (options) {
    options.items = options.isForImage ? _itemsForImage : _itemsForText;
    options.selectedItemNo = this.indexOf(options.items, options.value);
  }

  return this.select(options);
}

////////////////////////////////////////////////////////////////////////////////