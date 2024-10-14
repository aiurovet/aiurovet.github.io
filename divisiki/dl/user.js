////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Manage application data and preferences
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

class UserClass {
  // Constants
  //
  static defaultUserId = "Anonymous";
  static maxGameCount = 50;

  //////////////////////////////////////////////////////////////////////////////

  // User id (unique free text)
  //
  userId = UserClass.defaultUserId;

  // List of game stats
  //
  #games = [new GameClass()];

  // An index of a selected game in the list of games
  //
  #selectedGameNo = 0;

  //////////////////////////////////////////////////////////////////////////////
  // If only one argument passed, and that is an object, initialize parameters
  // with its properties: i.e. constructing from a deserialized saved object
  //////////////////////////////////////////////////////////////////////////////

  constructor(userId, selectedGameNo, games) {
    if (userId instanceof Object) {
      var from = userId;
      this.init(from.userId, from.selectedGameNo, from.games)
    } else {
      this.init(userId, selectedGameNo, games);
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Get full array of games
  //////////////////////////////////////////////////////////////////////////////

  getGames() {
    return this.#games;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Get the game object that is used as the current one
  //////////////////////////////////////////////////////////////////////////////

  getSelectedGame() {
    return this.#games[this.#selectedGameNo];
  }

  //////////////////////////////////////////////////////////////////////////////
  // Get the index of a game object that is used as the current one
  //////////////////////////////////////////////////////////////////////////////

  getSelectedGameNo() {
    return this.#selectedGameNo;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Initialise properties from the given parameters
  //////////////////////////////////////////////////////////////////////////////

  init(userId, selectedGameNo, games) {
    this.userId = userId ?? UserClass.defaultUserId;

    if ((games === undefined) || (games === null) || !Array.isArray(games) || (games.length == 0)) {
      this.#games = [new GameClass()];
      selectedGameNo = 0;
    } else if (games[0] instanceof GameClass) {
      this.#games = games;
    } else {
      this.#games = [];
      let n = games.length;
      if (n > UserClass.maxGameCount) {
        n = UserClass.maxGameCount;
      }
      for (let i = 0; i < n; i++) {
        this.#games.push(new GameClass(games[i]));
      }
    }

    this.setSelectedGameNo(selectedGameNo);

    return this;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Set the index of the game to be considered as the current one
  // Returns true if the selected no equals the value passed
  //////////////////////////////////////////////////////////////////////////////

  setSelectedGameNo(value) {
    var count = this.#games.length;
    this.#selectedGameNo = !value || (value < 0) ? 0 : value % count;

    return this.#selectedGameNo === value;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Find the game object by the list of divisors and select that
  // Return true if the selected index equals the value passed
  // Useful when loading saved data
  //////////////////////////////////////////////////////////////////////////////

  setSelectedGameNoByDivisors(divisors) {
    var divisorCount = divisors.length;
    var games = this.#games;
    var gameCount = games.length;
    var gameNo = 0;

    for (var gameNo = 0; gameNo < gameCount; gameNo++) {
      var gameDivisors = games[gameNo].divisors;

      for (var divisorNo = 0; ; divisorNo++) {
        if (divisorNo >= divisorCount) {
          return this.setSelectedGameNo(gameNo);
        }

        var divisor = divisors[divisorNo];

        if ((divisor > 1) && (gameDivisors.indexOf(divisor) < 0)) {
          break;
        }
      }
    }

    return false;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert this object into the one that excludes all irrelevant properties
  //////////////////////////////////////////////////////////////////////////////

  toSerializable() {
    var games = [];

    for (var i = 0, n = this.#games.length; i < n; i++) {
      games[i] = this.#games[i].toSerializable();
    }

    return {
      userId: this.userId,
      selectedGameNo: this.#selectedGameNo,
      games: games
    };
  }

  //////////////////////////////////////////////////////////////////////////////
}