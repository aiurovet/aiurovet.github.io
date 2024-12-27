////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2025
// All rights reserved under MIT license (see LICENSE file)
//
// Part of the quote (phrase, footer)
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

class Part {
  // The font family used to display text
  //
  fontFamily = "";

  // The font size used to display text (pixels)
  //
  fontSize = 0.0;

  // The actual text
  //
  text = "";

  // Height of each quote element in the selected font size units (ems)
  //
  height = {phrase: 0.0, footer: 0.0};

  // Horizontal padding in the selected font size units (ems)
  //
  padding = {horizontal: 0.0, vertical: 0.0};

  //////////////////////////////////////////////////////////////////////////////
  // If only one argument passed, and that is an object, initialize parameters
  // with its properties: i.e. constructing from a deserialized saved object
  //////////////////////////////////////////////////////////////////////////////

  constructor(userId, footer) {
    if (userId instanceof Object) {
      let from = userId;
      this.init(from.userId, from.footer)
    } else {
      this.init(userId, footer);
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Initialise properties from the given parameters
  //////////////////////////////////////////////////////////////////////////////

  init(userId, footer) {
    this.userId = userId ?? User.defaultUserId;

    if ((footer === undefined) || (footer === null)) {
      if (this.userId === User.defaultUserId) {
        this.footer = User.defaultFooter;
      } else {
        this.footer = this.userId;
      }
    } else {
      this.footer = footer;
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert this object into the one that excludes all irrelevant properties
  //////////////////////////////////////////////////////////////////////////////

  toSerializable() {
    return {
      userId: this.userId,
      footer: this.footer
    };
  }

  //////////////////////////////////////////////////////////////////////////////
}