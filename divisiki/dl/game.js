////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Manage application data and preferences
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

class GameClass {
  // Constants
  //
  static defaultDivisors = [2];
  static defaultTimeLimit = 0;
  static maxAttempts = 100;
  static minLevel = 1;
  static maxLevel = Number.MAX_SAFE_INTEGER.toString().length;
  static minMaxScore = 0;
  static maxMaxScore = Number.MAX_SAFE_INTEGER;
  static timeLimits = {
    0: "No time limit", 120: "02:00", 90: "01:30", 60: "01:00", 45: "00:45",
    30: "00:30", 20: "00:20", 15: "00:15", 10: "00:10", 5: "00:05"
  };

  //////////////////////////////////////////////////////////////////////////////

  // The current number within the level
  //
  curNumber = 0;

  // The current score
  //
  curScore = 0;

  // Array of numbers to check divisbility against (one of to be passed)
  //
  divisors = GameClass.defaultDivisors;

  // The last selected time period (the number of seconds) to solve each primer (0 - unlimited)
  //
  lastTimeLimit = GameClass.defaultTimeLimit;

  // Number of digits in the number being played
  //
  level = GameClass.minLevel;

  // The highest score ever achieved
  //
  maxScore = GameClass.minMaxScore;

  // Array of previously played numbers to avoid repetitions within the session
  //
  #oldNumbers = [];

  //////////////////////////////////////////////////////////////////////////////
  // If only one argument passed, and that is an object, initialize parameters
  // with its properties: i.e. constructing from a deserialized saved object
  //////////////////////////////////////////////////////////////////////////////

  constructor(level, divisors, maxScore, lastTimeLimit) {
    if (level instanceof Object) {
      var from = level;
      this.init(from.level, from.divisors, from.maxScore, from.lastTimeLimit);
    } else {
      this.init(level, divisors, maxScore, lastTimeLimit);
    }
  }

  //////////////////////////////////////////////////////////////////////////////

  getMaxScore(value) {
    if ((value === undefined) || (value === null)) {
      value = this.curScore;
    }

    if (!Number.isInteger(value)) {
      value = parseInt(value);
    }

    return this.maxScore > value ? this.maxScore : value;
  }

  //////////////////////////////////////////////////////////////////////////////

  init(level, divisors, maxScore, lastTimeLimit) {
    if ((level !== undefined) && (level !== null)) {
      this.level = level < GameClass.minLevel ? GameClass.minLevel : level;
    }
    if ((divisors !== undefined) && (divisors !== null) && Array.isArray(divisors)) {
      this.divisors = divisors.length <= 0 ? GameClass.defaultDivisors : divisors;
    }
    if ((lastTimeLimit !== undefined) && (lastTimeLimit !== null)) {
      this.lastTimeLimit = lastTimeLimit <= 0 ? 0 : lastTimeLimit;
    }
    if ((maxScore !== undefined) && (maxScore !== null)) {
      this.maxScore = maxScore <= 0 ? 0 : maxScore;
    }

    this.#oldNumbers = [];

    return this;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Check the current number is divisible by any of the divisors
  //////////////////////////////////////////////////////////////////////////////

  isDivisible() {
    for (var i = 0; i < this.level; i++) {
      var divisor = this.divisors[i];

      if (divisor <= 0) {
        break;
      }
      if ((this.curNumber % divisor) == 0) {
        return true;
      }
    }
    return false;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Check the current number is divisible by any of the divisors and return
  // the next number in case of success or 0 otherwise
  //
  // However, maxScore should be updated explicitly by the caller, as they might
  // want to save the game too
  //////////////////////////////////////////////////////////////////////////////

  setResult(isAnswerYes) {
    var isDivisible = this.isDivisible();
    var isSuccess = ((isAnswerYes && isDivisible) || (!isAnswerYes && !isDivisible));

    if (!isSuccess) {
      this.curScore = 0;
      return 0;
    }

    ++this.curScore;

    return this.setNextNumber();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Return the number of digits in the given number
  //////////////////////////////////////////////////////////////////////////////

  static levelFromNumber(value) {
    if ((value === undefined) || (value === null)) {
      return 1;
    }

    var valueStr = value.toString();

    if (Number.isInteger(value)) {
      return valueStr.length - (value < 0 ? 1 : 0);
    }

    var n = valueStr.length;

    return n <= 0 ? 1 : n;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Set the new list of divisors from the list of string values
  //////////////////////////////////////////////////////////////////////////////

  setDivisors(value) {
    this.divisors = [];

    for (var i = 0, n = value.length; i < n; i++) {
      this.divisors.push(parseInt(value[i]));
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Set the new record the passed value exceeds the previous record
  //////////////////////////////////////////////////////////////////////////////

  setMaxScore(value) {
    var maxScore = this.getMaxScore(value);

    if (this.maxScore < maxScore) {
      this.maxScore = maxScore;
      return true;
    }

    return false;
  }

  //////////////////////////////////////////////////////////////////////////////

  setNextNumber() {
    var curNumber = this.curNumber;

    if (curNumber && !this.#oldNumbers.includes(curNumber)) {
      this.#oldNumbers.push(curNumber);
    }

    var attempts = 0;

    for (curNumber = 0; !curNumber || this.#oldNumbers.includes(curNumber);) {
      if ((++attempts) > GameClass.maxAttempts) {
        if (this.level >= GameClass.maxLevel) {
          return 0;
        }
        attempts = 0;
        ++this.level;
      }

      curNumber = 0;

      for (var i = 0; i < this.level; i++) {
        var digit = Math.floor(Math.random() * 9);

        if ((i == 0) && (digit == 0)) {
          digit = 1;
        }

        curNumber = (curNumber * 10) + digit;
      }
    }

    this.curNumber = curNumber;

    return curNumber;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert a text string like mm:ss into the number of seconds
  //////////////////////////////////////////////////////////////////////////////

  static timeLimitFromName(name) {
    var parts = name.split(":");
    var count = parts.length;

    if (count > 2) {
      return GameClass.defaultTimeLimit;
    }

    var mins = count >= 2 ? parts[0] : "0";
    var secs = count >= 2 ? parts[1] : parts[0];

    if (!Number.isInteger(mins) || !Number.isInteger(secs)) {
      return GameClass.defaultTimeLimit;
    }

    secs = parseInt(secs);
    mins = parseInt(mins) + Math.trunc(secs / 60);

    return timeLimitFromValue((mins * 60)  + (secs % 60));
  }

  //////////////////////////////////////////////////////////////////////////////

  static timeLimitFromValue(value) {
    if (value <= 0) {
      return GameClass.defaultTimeLimit;
    }

    var mins = Math.trunc(value / 60);
    var secs = value % 60;

    if (mins > 99) {
      return GameClass.defaultTimeLimit;
    }

    if (!(value in GameClass.timeLimits)) {
      GameClass.timeLimits[value] =
        (100 + mins).toString().substring(1) + ":" +
        (100 + secs).toString().substring(1);
    }

    return value;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert this object into the one that excludes all irrelevant properties
  //////////////////////////////////////////////////////////////////////////////

  toSerializable() {
    return {
      level: this.level,
      divisors: this.divisors,
      lastTimeLimit: this.lastTimeLimit,
      maxScore: this.maxScore,
    };
  }

  //////////////////////////////////////////////////////////////////////////////
}