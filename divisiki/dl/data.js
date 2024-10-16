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
  static maxUserCount = 20;
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
      let from = version;
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
      let n = users.length;
      if (n > DataClass.maxUserCount) {
        n = DataClass.maxUserCount;
      }
      for (let i = 0; i < n; i++) {
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
    return this.getSelectedUser()?.getSelectedGame();
  }

  //////////////////////////////////////////////////////////////////////////////

  getSelectedUser() {
    return this.#selectedUserNo < 0 ? null : this.#users[this.#selectedUserNo];
  }

  //////////////////////////////////////////////////////////////////////////////

  getSelectedUserNo() {
    return this.#selectedUserNo;
  }

  //////////////////////////////////////////////////////////////////////////////

  getUsers() {
    return this.#users;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Returns true if there are 2 or more users, or one user with non-default id
  //////////////////////////////////////////////////////////////////////////////

  hasValidUsers() {
    let users = this.#users;
    let count = users?.length ?? 0;

    return (count > 1) || (count > 0 && users[0].userId != UserClass.defaultUserId);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Load preferences from the local storage, parse those and return this obj
  //////////////////////////////////////////////////////////////////////////////

  load() {
    let prefContent = localStorage[DataClass.keyPref];

    if (!prefContent) {
      this.save(true);
      return this;
    }

    let pref = Json.fromString(prefContent);
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
    let pref = this.toSerializable();
    localStorage[DataClass.keyPref] = Json.toString(pref);
  }

  //////////////////////////////////////////////////////////////////////////////

  setSelectedGameNo(value) {
    this.getSelectedUser()?.setSelectedGameNo(value);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Set the index of the user to be considered as the current one
  // Return true if the selected index equals the value passed
  //////////////////////////////////////////////////////////////////////////////

  setSelectedUserNo(value) {
    let count = this.#users.length;
    this.#selectedUserNo = count <= 0 ? -1 : !value || (value < 0) ? 0 : value % count;

    return this.#selectedUserNo === value;
  }

  //////////////////////////////////////////////////////////////////////////////

  toSerializable() {
    let users = [];

    let n = this.#users.length;

    if (n > DataClass.maxUserCount) {
      n = DataClass.maxUserCount;
    }

    for (let i = 0; i < n; i++) {
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