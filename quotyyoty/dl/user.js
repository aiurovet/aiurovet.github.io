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
  static defaultFooter = "";
  static defaultUserId = "No name";
  static maxGameCount = 20;

  //////////////////////////////////////////////////////////////////////////////

  // User id (unique free text)
  //
  userId = User.defaultUserId;

  // Flag indicating the footer is used
  //
  footer = User.defaultFooter;

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