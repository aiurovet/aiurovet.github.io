////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024-25
// All rights reserved under MIT license (see LICENSE file)
//
// Direction selection drop-list
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

const _items = [
  { value: Direction.radial, text: "Radial" },
  { value: Direction.northToSouth, text: "North to South" },
  { value: Direction.westToEast, text: "West to East" },
  { value: Direction.northWestToSouthEast, text: "North-West to South-East" },
  { value: Direction.southWestToNorthEast, text: "South-West to North-East" },
];

////////////////////////////////////////////////////////////////////////////////

$.fn.selectDirection = function(options) {
  if (options) {
    options.items = _items;
  }

  return this.select(options);
}

////////////////////////////////////////////////////////////////////////////////