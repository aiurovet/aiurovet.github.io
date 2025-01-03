////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Manage application data and preferences
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

class User {
  // Constants
  //
  static defaultFontSizeRatio = 0.60;
  static defaultHeaderText = "";
  static defaultUserId = "No profile";

  //////////////////////////////////////////////////////////////////////////////

  // User id (unique free text)
  //
  userId = User.defaultUserId;

  // The background style
  //
  background = new LookBack();

  // The footer style
  //
  footer = new LookText();

  // The header style
  //
  header = new LookText();

  // The phrase style
  //
  phrase = new LookText();

  //////////////////////////////////////////////////////////////////////////////
  // If only one argument passed, and that is an object, initialize parameters
  // with its properties: i.e. constructing from a deserialized saved object
  //////////////////////////////////////////////////////////////////////////////

  constructor(userId, background, header, phrase, footer) {
    if (userId instanceof Object) {
      let from = userId;
      this.init(from.userId, from.background, from.header, from.phrase, from.footer)
    } else {
      this.init(userId, background, header, phrase, footer);
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Initialise properties from the given parameters
  //////////////////////////////////////////////////////////////////////////////

  init(userId, background, header, phrase, footer) {
    this.userId = userId ?? User.defaultUserId;
    this.background = background ?? new LookBack();
    this.header = header ?? new LookText(null, {size: 0, sizeRatio: 0});
    this.phrase = phrase ?? new LookText();
    this.footer = footer ?? new LookText(null, {sizeRatio: User.defaultFontSizeRatio});
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert this object into the one that excludes all irrelevant properties
  //////////////////////////////////////////////////////////////////////////////

  toSerializable() {
    return {
      userId: this.userId,
      background: this.background?.toSerializable(),
      header: this.header?.toSerializable(),
      phrase: this.phrase?.toSerializable(),
      footer: this.footer?.toSerializable(),
    };
  }

  //////////////////////////////////////////////////////////////////////////////
}