////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Manage application data and preferences
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

import {UserClass} from "./user.js";

////////////////////////////////////////////////////////////////////////////////

class UsersClass {
  // Selected game
  //
  active = null;

  // Selected index in the list of users
  //
  #activeNo = 0;

  // List of users (always has at least one element)
  //
  #list = [new UserClass()];

  //////////////////////////////////////////////////////////////////////////////

  constructor(list, activeNo) {
    if ((list !== undefined) && (list !== null) && Array.isArray(list)) {
      if ((list.length > 0) && (list[0] instanceof UserClass)) {
        this.#list = list;
      }
    }

    this.setActiveNo(activeNo);
  }

  //////////////////////////////////////////////////////////////////////////////

  acceptActive() {
    this.#list[this.#activeNo] = this.active;
  }

  //////////////////////////////////////////////////////////////////////////////

  static fromSerializable(from) {
    var fromList = from.list;
    var list = [];

    for (var i = 0, n = fromList.length; i < n; i++) {
      list.push(UserClass.fromSerializable(fromList[i]));
    }

    return new UsersClass(list, from.activeNo);
  }

  //////////////////////////////////////////////////////////////////////////////

  setActiveNo(value) {
    var count = this.#list.length;
    var actNo = !value || (value < 0) ? 0 : value % count;

    this.active = this.#list[actNo];
    this.#activeNo = actNo;
  }

  //////////////////////////////////////////////////////////////////////////////

  setActiveGameNo(value) {
    this.active.setActiveGameNo(value);
  }

  //////////////////////////////////////////////////////////////////////////////

  toSerializable() {
    var list = [];

    for (var i = 0, n = this.#list.length; i < n; i++) {
      list[i] = this.#list[i].toSerializable();
    }

    return {
      activeNo: this.#activeNo,
      list: list
    };
  }

  //////////////////////////////////////////////////////////////////////////////
}