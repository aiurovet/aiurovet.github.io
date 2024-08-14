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
  static isFastRandom = true;
  static jumpScore = 50;
  static maxAttempts = 100;
  static minLevel = 1;
  static maxLevel = Number.MAX_SAFE_INTEGER.toString().length;
  static timeLimits = [0, 10, 15, 20, 30, 45, 60, 90, 120];

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

  // The highest number for the given level
  //
  maxNumber = 0;

  // The highest score ever achieved
  //
  maxScore = 0;

  // The lowest number for the given level
  //
  minNumber = 0;

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
    this.setLevel(level);

    if ((divisors !== undefined) && (divisors !== null) && Array.isArray(divisors)) {
      this.divisors = divisors.length <= 0 ? GameClass.defaultDivisors : divisors;
    }
    if ((lastTimeLimit !== undefined) && (lastTimeLimit !== null)) {
      this.lastTimeLimit = GameClass.timeLimitFromValue(lastTimeLimit);
    }
    if ((maxScore !== undefined) && (maxScore !== null)) {
      this.maxScore = maxScore <= 0 ? 0 : maxScore;
    }

    this.#oldNumbers = [];

    return this;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Check whether the current number divides by at least one of the divisors
  //////////////////////////////////////////////////////////////////////////////

  isDivisible() {
    var divisors = this.divisors;

    for (var i = 0, n = divisors.length; i < n; i++) {
      var divisor = divisors[i];

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
  // Set level as well as dependent properties
  //////////////////////////////////////////////////////////////////////////////

  setLevel(value) {
    if ((value !== undefined) && (value !== null)) {
      if (value < GameClass.minLevel) {
        this.level = GameClass.minLevel;
      } else if (value > GameClass.maxLevel) {
        this.level = GameClass.maxLevel;
      } else {
        this.level = value;
      }
    }
    this.minNumber = Math.floor(Math.pow(10, this.level - 1));
    this.maxNumber = Math.floor(Math.pow(10, this.level)) - 1;
    this.maxScore = 0;
    this.curScore = 0;
    this.#oldNumbers = [];
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

    if ((this.curScore >= GameClass.jumpScore) && (this.level < GameClass.maxLevel)) {
      this.setLevel(this.level + 1);
    } else if (curNumber && !this.#oldNumbers.includes(curNumber)) {
      this.#oldNumbers.push(curNumber);
    }

    var attempts = 0;

    for (curNumber = 0; !curNumber || this.#oldNumbers.includes(curNumber);) {
      if ((++attempts) > GameClass.maxAttempts) {
        if (this.level >= GameClass.maxLevel) {
          return 0;
        }
        attempts = 0;
        this.setLevel(this.level + 1);
      }

      if (GameClass.isFastRandom) {
        var range = this.maxNumber - this.minNumber + 1;
        curNumber = this.minNumber + Math.floor(Math.random() * range);
        continue;
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

  static secondsToString(value, fullDuration) {
    var seconds = Math.floor(value / TimerClass.millisPerSec);

    if (seconds < 0) {
      seconds = 0;
    }
  
    var secs = (seconds % 60);
    var mins = Math.floor(seconds / 60);

    if ((mins == 0) && (secs == 0) && !fullDuration) {
      return "No time limit";
    }

    if (mins > 99) {
      mins = 99;
    }

    mins = (mins < 10 ? "0" : "") + mins.toString();
    secs = (secs < 10 ? "0" : "") + secs.toString();

    return `${mins}:${secs}`;
  }

  //////////////////////////////////////////////////////////////////////////////

  static timeLimitFromValue(value) {
    if (value <= 0) {
      return GameClass.defaultTimeLimit;
    }

    var mins = Math.trunc(value / 60);

    if (mins > 99) {
      return GameClass.defaultTimeLimit;
    }

    var secs = value % 60;
    value = mins * 60 + secs;

    if (GameClass.timeLimits.indexOf(value) < 0) {
      GameClass.timeLimits.push(value);
      GameClass.timeLimits.sort();
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