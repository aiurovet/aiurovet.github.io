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
  static appName = "quoteir";
  static defaultFileFormat = Data.fileFormatPng;
  static keyPref = Data.appName;
  static maxUserCount = 20;
  static version = "0.1.0";

  //////////////////////////////////////////////////////////////////////////////

  static fileFormatJpeg = "jpeg";
  static fileFormatJpg = "jpg";
  static fileFormatPng = "png";
  static fileFormatSvg = "svg";

  //////////////////////////////////////////////////////////////////////////////

  // Graphics file format to save the quote to (user-insensitive)
  //
  fileFormat = Data.defaultFileFormat;

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

  constructor(version, fileFormat, selectedUserNo, users) {
    if (version instanceof Object) {
      let from = version;
      this.init(from.version, from.fileFormat, from.selectedUserNo, from.users);
    } else {
      this.init(version, fileFormat, selectedUserNo, users);
    }
  }

  //////////////////////////////////////////////////////////////////////////////

  static adjustFileFormat(format) {
    var formatLower = format?.toLowerCase() ?? "";

    switch (formatLower) {
      case Data.fileFormatJpeg:
        return Data.fileFormatJpg;
      case Data.fileFormatJpg:
          case Data.fileFormatSvg:
        return formatLower;
      default:
        return Data.fileFormatPng;
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
  // If only one argument passed, and that is an object, initialize parameters
  // with its properties: i.e. constructing from a deserialized saved object
  //////////////////////////////////////////////////////////////////////////////

  init(version, fileFormat, selectedUserNo, users) {
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

    // Set file format to save images to
    //
    this.fileFormat = Data.adjustFileFormat(fileFormat);

    // Set selected user no to the saved one
    //
    this.setSelectedUserNo(selectedUserNo);
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
    this.init(pref.version, pref.fileFormat, pref.selectedUserNo, pref.users);

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
      fileFormat: this.fileFormat,
      selectedUserNo: this.#selectedUserNo,
      users: serUsers
    };
  }

  //////////////////////////////////////////////////////////////////////////////
}