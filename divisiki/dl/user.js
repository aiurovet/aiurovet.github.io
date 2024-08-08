////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Manage application data and preferences
////////////////////////////////////////////////////////////////////////////////

"use strict";

import {GameClass} from "./game.js";

////////////////////////////////////////////////////////////////////////////////

class UserClass {
  // Constants
  //
  static defaultUserId = "Anonymous";

  //////////////////////////////////////////////////////////////////////////////

  // User id (unique free text)
  //
  userId = this.defaultUserId;

  // List of game stats
  //
  #games = [new GameClass()];

  // An index of a selected game in the list of games
  //
  #selectedGameNo = 0;

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

  init(userId, selectedGameNo, games) {
    this.userId = userId ?? defaultUserId;

    if ((games === undefined) || (games === null) || !Array.isArray(games) || (games.length == 0)) {
      this.#games = [new GameClass()];
      selectedGameNo = 0;
    } else if (games[0] instanceof GameClass) {
      this.#games = games;
    } else {
      this.#games = [];
      for (var i = 0, n = games.length; i < n; i++) {
        this.#games.push(new GameClass(games[i]));
      }
    }

    this.setSelectedGameNo(selectedGameNo);

    return this;
  }

  //////////////////////////////////////////////////////////////////////////////

  getSelectedGame() {
    return this.#games[this.#selectedGameNo];
  }

  //////////////////////////////////////////////////////////////////////////////

  setSelectedGameNo(value) {
    var count = this.#games.length;
    this.#selectedGameNo = !value || (value < 0) ? 0 : value % count;
  }

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