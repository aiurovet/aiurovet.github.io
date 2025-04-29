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
  static defaultColorMain = "rgb(0, 0, 0)";
  static defaultColorSide = "rgb(64, 64, 64)";
  static defaultFontSize = "60pt";
  static defaultFontSizeRatio = 0.80;
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

  // The image file format
  //
  fileFormat = Data.defaultFileFormat;

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
    if ((userId instanceof Object) && ("userId" in userId)) {
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
    const hasVividUserId = userId && (userId != User.defaultUserId);

    this.userId = hasVividUserId ? userId : User.defaultUserId;
    this.background = new LookBack(background);

    let text = header ? header.text : LookText.defaultHeaderText;

    this.header = header
      ? new LookText(header)
      : new LookText(null, User.defaultColorSide, {sizeRatio: User.defaultFontSizeRatio, effects: LookText.italic}, null, text ?? User.defaultHeaderText);

    this.phrase = phrase
      ? new LookText(phrase)
      : new LookText(null, User.defaultColorMain, {size: User.defaultFontSize}, null, User.defaultPhraseText);

    text = !footer && (userId && (userId != User.defaultUserId) ? userId : text)
      ? LookText.defaultFooterText
      : null;

    text = footer ? footer.text : hasVividUserId ? userId : User.defaultFooterText;

    this.footer = footer
      ? new LookText(footer)
      : new LookText(null, User.defaultColorSide, {sizeRatio: User.defaultFontSizeRatio, effects: LookText.italic}, null, text);

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
      fileFormat: this.fileFormat,
      background: this.background?.toSerializable(),
      header: this.header?.toSerializable(),
      phrase: this.phrase?.toSerializable(),
      footer: this.footer?.toSerializable(),
    };
  }

  //////////////////////////////////////////////////////////////////////////////
}