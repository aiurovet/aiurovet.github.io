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
  static defaultFooterText = "Author";
  static defaultHeaderText = "";
  static defaultPhraseText = "Insert your phrase here";
  static defaultUserId = "Default";

  //////////////////////////////////////////////////////////////////////////////

  // User id (unique free text)
  //
  userId = null;

  // The background style
  //
  background = null;

  // The footer style
  //
  footer = null;

  // The header style
  //
  header = null;

  // The phrase style
  //
  phrase = null;

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
    this.background = new LookBack(background);

    this.header = header
      ? new LookText(header)
      : new LookText(null, null, {size: 0, sizeRatio: 0});

    this.phrase = new LookText(phrase); 
    this.phrase.text ||= User.defaultPhraseText;

    this.footer = footer
      ? new LookText(footer)
      : new LookText(null, null, {sizeRatio: User.defaultFontSizeRatio}, null, this.userId);

    let text = this.footer.text;

    if (!text || (text === User.defaultUserId)) {
      text = User.defaultFooterText;
    }

    if ((text === User.defaultFooterText) && userId && (userId != User.defaultUserId)) {
      text = userId;
    }

    this.footer.text = text;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Assigne new user id
  //////////////////////////////////////////////////////////////////////////////

  setUserId(value) {
    this.userId = value ?? User.defaultUserId;
    this.footer.text = value && (value !== User.defaultUserId) ? value : "";
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