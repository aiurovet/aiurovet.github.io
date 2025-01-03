////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Manage application data and preferences
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

class Data {
  // Constants
  //
  static appName = "divisiki";
  static keyPref = Data.appName;
  static maxUserCount = 20;
  static version = "0.2.0";

  //////////////////////////////////////////////////////////////////////////////

  // List of users with game stats
  //
  #timeLimits = new TimeLimits();

  // List of users with game stats
  //
  #users = [new User()];

  // An index of a selected user in the list of users
  //
  #selectedUserNo = 0;

  //////////////////////////////////////////////////////////////////////////////
  // If only one argument passed, and that is an object, initialize parameters
  // with its properties: i.e. constructing from a deserialized saved object
  //////////////////////////////////////////////////////////////////////////////

  constructor(version, selectedTimeLimitValues, selectedTimeLimitType, selectedUserNo, users) {
    if (version instanceof Object) {
      let from = version;
      this.init(from.version, from.selectedTimeLimitValues, from.selectedTimeLimitType, from.selectedUserNo, from.users);
    } else {
      this.init(version, selectedTimeLimitValues, selectedTimeLimitType, selectedUserNo, users);
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Delete all saved data and initialize
  //////////////////////////////////////////////////////////////////////////////

  drop() {
    delete localStorage[Data.keyPref];
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

  getTimeLimits() {
    return this.#timeLimits;
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

    return (count > 1) || (count > 0 && users[0].userId != User.defaultUserId);
  }

  //////////////////////////////////////////////////////////////////////////////
  // If only one argument passed, and that is an object, initialize parameters
  // with its properties: i.e. constructing from a deserialized saved object
  //////////////////////////////////////////////////////////////////////////////

  init(version, selectedTimeLimitValues, selectedTimeLimitType, selectedUserNo, users) {
    // Initialize version
    //
    if ((version !== undefined) && (version !== null) && (version.length > 0)) {
      this.version = version;
    }

    // Create users
    //
    if ((users === undefined) || (users === null) || !Array.isArray(users) || (users.length == 0)) {
      this.#users = [new User()];
      selectedUserNo = 0;
    } else if (users[0] instanceof User) {
      this.#users = users;
    } else {
      this.#users = [];
      let n = users.length;
      if (n > Data.maxUserCount) {
        n = Data.maxUserCount;
      }
      for (let i = 0; i < n; i++) {
        this.#users.push(new User(users[i]));
      }
    }

    // Set selected user no to the saved one
    //
    this.setSelectedUserNo(selectedUserNo);

    // If the game-agnostic latest time limit type and values are not defined,
    // get those the older way: take from selected user's selected game
    //
    if ((selectedTimeLimitType === undefined) || (selectedTimeLimitType === null) ||
        (selectedTimeLimitValues === undefined) || (selectedTimeLimitValues === null) || (selectedTimeLimitValues.length <= 0)) {
      let lastTimeLimit = 0;

      if ((users !== undefined) && (users !== null)) {
        let selectedUser = users[this.#selectedUserNo];
        let selectedGameNo = selectedUser?.selectedGameNo ?? 0;
        lastTimeLimit = selectedUser?.games[selectedGameNo]?.lastTimeLimit ?? 0;
      }

      selectedTimeLimitType = TimeLimitType.perMove;
      selectedTimeLimitValues = TimeLimits.createValues(lastTimeLimit, 0);
    }

    // Create time limits
    //
    this.#timeLimits = new TimeLimits(selectedTimeLimitValues, selectedTimeLimitType);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Load preferences from the local storage, parse those and return this obj
  //////////////////////////////////////////////////////////////////////////////

  load() {
    let prefContent = localStorage[Data.keyPref];

    if (!prefContent) {
      this.save(true);
      return this;
    }

    let pref = Json.fromString(prefContent);
    // Check the saved version here if needed
    this.init(pref.version, pref.selectedTimeLimitValues, pref.selectedTimeLimitType, pref.selectedUserNo, pref.users);

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
    localStorage[Data.keyPref] = Json.toString(pref);
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
    let serUsers = [];
    let users = this.#users;

    let count = users.length;

    if (count > Data.maxUserCount) {
      count = Data.maxUserCount;
    }

    for (let i = 0; i < count; i++) {
      serUsers.push(users[i].toSerializable());
    }

    return {
      version: Data.version,
      selectedTimeLimitType: this.#timeLimits.getSelectedType(),
      selectedTimeLimitValues: this.#timeLimits.getSelectedValues(),
      selectedUserNo: this.#selectedUserNo,
      users: serUsers
    };
  }

  //////////////////////////////////////////////////////////////////////////////
}