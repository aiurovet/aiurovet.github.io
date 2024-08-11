////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Manage application data and preferences
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

class DataClass {
  // Constants
  //
  static appName = "divisiki";
  static keyPref = DataClass.appName;
  static version = "0.1.0";

  //////////////////////////////////////////////////////////////////////////////

  // List of users with game stats
  //
  #users = [new UserClass()];

  // An index of a selected user in the list of users
  //
  #selectedUserNo = 0;

  //////////////////////////////////////////////////////////////////////////////
  // If only one argument passed, and that is an object, initialize parameters
  // with its properties: i.e. constructing from a deserialized saved object
  //////////////////////////////////////////////////////////////////////////////

  constructor(version, selectedUserNo, users) {
    if (version instanceof Object) {
      var from = version;
      this.init(from.version, from.selectedUserNo, from.users);
    } else {
      this.init(version, selectedUserNo, users);
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // If only one argument passed, and that is an object, initialize parameters
  // with its properties: i.e. constructing from a deserialized saved object
  //////////////////////////////////////////////////////////////////////////////

  init(version, selectedUserNo, users) {
    if ((version !== undefined) && (version !== null) && (version.length > 0)) {
      this.version = version;
    }

    if ((users === undefined) || (users === null) || !Array.isArray(users) || (users.length == 0)) {
      this.#users = [new UserClass()];
      selectedUserNo = 0;
    } else if (users[0] instanceof UserClass) {
      this.#users = users;
    } else {
      this.#users = [];
      for (var i = 0, n = users.length; i < n; i++) {
        this.#users.push(new UserClass(users[i]));
      }
    }

    this.setSelectedUserNo(selectedUserNo);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Delete all saved data and initialize
  //////////////////////////////////////////////////////////////////////////////

  drop() {
    delete localStorage[DataClass.keyPref];
    this.init();
    this.save();
  }

  //////////////////////////////////////////////////////////////////////////////

  getSelectedGame() {
    return this.getSelectedUser().getSelectedGame();
  }

  //////////////////////////////////////////////////////////////////////////////

  getSelectedUser() {
    return this.#users[this.#selectedUserNo];
  }

  //////////////////////////////////////////////////////////////////////////////
  // Load preferences from the local storage, parse those and return this obj
  //////////////////////////////////////////////////////////////////////////////

  load() {
    var prefContent = localStorage[DataClass.keyPref];

    if (!prefContent) {
      this.save(true);
      return this;
    }

    var pref = Json.fromString(prefContent);
    // Check the saved version here if needed
    this.init(pref.version, pref.selectedUserNo, pref.users);

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

    // Write to the local storage
    //
    var pref = this.toSerializable();
    localStorage[DataClass.keyPref] = Json.toString(pref);
  }

  //////////////////////////////////////////////////////////////////////////////

  setSelectedGameNo(value) {
    this.getSelectedUser().setSelectedGameNo(value);
  }

  //////////////////////////////////////////////////////////////////////////////

  setSelectedUserNo(value) {
    var count = this.#users.length;
    this.#selectedUserNo = !value || (value < 0) ? 0 : value % count;
  }

  //////////////////////////////////////////////////////////////////////////////

  toSerializable() {
    var users = [];

    for (var i = 0, n = this.#users.length; i < n; i++) {
      users[i] = this.#users[i].toSerializable();
    }

    return {
      version: DataClass.version,
      selectedUserNo: this.#selectedUserNo,
      users: users
    };
  }

  //////////////////////////////////////////////////////////////////////////////
}