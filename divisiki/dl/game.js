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
  static minLevel = 0;
  static maxLevel = Number.MAX_SAFE_INTEGER.toString().length;
  static minMaxScore = 0;
  static maxMaxScore = Number.MAX_SAFE_INTEGER;
  static timeLimits = {
    0: "--:--", 120: "02:00", 90: "01:30", 60: "01:00", 45: "00:45",
    30: "00:30", 20: "00:20", 15: "00:15", 10: "00:10", 5: "00:05"
  };

  //////////////////////////////////////////////////////////////////////////////

  // Array of numbers to check divisbility against (one of to be passed)
  //
  divisors = defaultDivisors;

  // The last selected time period (the number of seconds) to solve each primer (0 - unlimited)
  //
  lastTimeLimit = defaultTimeLimit;

  // Number of digits in the number being played
  //
  level = minLevel;

  // The highest score ever achieved
  //
  maxScore = minMaxScore;

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

  init(level, divisors, maxScore, lastTimeLimit) {
    if ((level !== undefined) && (level !== null)) {
      this.level = level;
    }
    if ((divisors !== undefined) && (divisors !== null) && Array.isArray(divisors)) {
      this.divisors = divisors;
    }
    if (lastTimeLimit) {
      this.lastTimeLimit = lastTimeLimconstructorit;
    }
    if (maxScore) {
      this.maxScore = maxScore;
    }

    return this;
  }

  //////////////////////////////////////////////////////////////////////////////

  getMaxScore(value) {
    if ((value === undefined) || (value === null)) {
      return this.maxScore;
    }

    if (!Number.isInteger(value)) {
      value = parseInt(value);
    }

    return this.maxScore > value ? this.maxScore : value;
  }

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

  setMaxScore(value) {
    var maxScore = this.getMaxScore(value);

    if (this.maxScore < maxScore) {
      this.maxScore = maxScore;
      return true;
    }

    return false;
  }

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