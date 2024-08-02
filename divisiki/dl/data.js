////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Manage application data and preferences
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

class DataClass {
  constructor(that) {
    // Initialize constants
    //
    if (that) {
      return this.init(that.text, that.listNo, that.search, that.isChanged);
    }

    this.appName = "divisiki";
    this.version = "0.1.0";

    this.keyPref = this.appName;

    this.timeLimitTexts  = [ "None", "1m", "45s", "30s", "20s", "15s", "10s", "5s" ];
    this.timeLimitValues = [ 0, 60, 45, 30, 20, 15, 10, 5 ];

    // Initialize the properties
    //
    this.initUsers();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Delete all saved data and initialize
  //////////////////////////////////////////////////////////////////////////////

  drop() {
    delete localStorage[this.keyPref];
    initUsers();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Get time limit index by the current value
  //////////////////////////////////////////////////////////////////////////////

  indexOfTimeLimitValue() {
    var i = this.timeLimitValues.indexOf(this.users.getTimeLimitValue());

    return i < 0 ? 0 : i;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Delete all users and add the default one
  //////////////////////////////////////////////////////////////////////////////

  initUsers() {
    this.users = new UsersClass();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Load preferences from the local storage, parse those and return this obj
  //////////////////////////////////////////////////////////////////////////////

  load() {
    var prefContent = localStorage[this.keyPref];

    if (prefContent) {
      var pref = Json.fromString(prefContent);
      this.users.fromSerializable(pref.users);
    } else {
      this.save(true);
    }

    return this;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Save preferences to the local storage as a JSON string
  //////////////////////////////////////////////////////////////////////////////

  save(canSave) {
    // If no actual save required, return
    //
    if ((canSave !== undefined) && !canSave) {
      return;
    }

    // Collect all properties that are supposed to be saved
    //
    var pref = {
      version: this.version,
      users: this.users.toSerializable()
    };

    // Write to the local storage
    //

    localStorage[this.keyPref] = Json.toString(pref);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Set the current user's level
  //////////////////////////////////////////////////////////////////////////////

  setLevel(number) {
    this.users.setLevel(number.length);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Set the current user's time limit value from the value passed:
  // either exact or within the range (and taking the lower boundary then)
  //////////////////////////////////////////////////////////////////////////////

  setTimeLimitValue(value) {
    var endNo = this.timeLimitValues.length - 1;
    var selNo = 0;

    for (; selNo <= endNo; selNo++) {
      if (value < this.timeLimitValues[selNo]) {
        continue;
      }
      if (selNo >= endNo) {
        break;
      }
      if (value < this.timeLimitValues[selNo + 1]) {
        break;
      }
    }

    this.users.setTimeLimitValue(this.timeLimitValues[selNo]);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Set the current user's time limit value from the display text
  //////////////////////////////////////////////////////////////////////////////

  setTimeLimitValueFromText(text) {
    var selNo = this.timeLimitTexts.indexOf(text);

    if (selNo < 0) {
      selNo = 0;
    }

    this.users.setTimeLimitValue(this.timeLimitValues[selNo]);
  }

  //////////////////////////////////////////////////////////////////////////////
}