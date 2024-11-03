////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Manage application data and preferences
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

class Game {
  // Constants
  //
  static defaultDivisors = [2];
  static jumpScore = 50;
  static maxAttempts = 100;
  static minLevel = 1;
  static maxLevel = Number.MAX_SAFE_INTEGER.toString().length - 1;
  static mulSign = "×";
  static orSign = " or ";

  //////////////////////////////////////////////////////////////////////////////

  // The current number within the level
  //
  curNumber = 0;

  // The current score
  //
  curScore = 0;

  // Array of numbers to check divisbility against (one of to be passed)
  //
  divisors = Game.defaultDivisors;

  // Number of digits in the number being played
  //
  level = Game.minLevel;

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

  constructor(level, divisors, maxScore) {
    if (level instanceof Object) {
      let from = level;
      this.init(from.level, from.divisors, from.maxScore);
    } else {
      this.init(level, divisors, maxScore);
    }
  }

  //////////////////////////////////////////////////////////////////////////////

  static getAllLevels() {
    let result = [];

    for (let i = Game.minLevel; i <= Game.maxLevel; i++) {
      result.push(i);
    }

    return result;
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

  getRandomInt(minValue, maxValue) {
    minValue ??= this.minNumber;
    maxValue ??= this.maxNumber;

    return minValue + Math.round(Math.random() * (maxValue - minValue));
  }

  //////////////////////////////////////////////////////////////////////////////

  init(level, divisors, maxScore) {
    this.setLevel(level);

    if ((divisors !== undefined) && (divisors !== null) && Array.isArray(divisors)) {
      this.divisors = divisors.length <= 0 ? Game.defaultDivisors : divisors;
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

  isDivisible(curNumber) {
    curNumber ??= this.curNumber;
   
    let divisors = this.divisors;

    for (let i = 0, n = divisors.length; i < n; i++) {
      let divisor = divisors[i];

      if (divisor <= 0) {
        break;
      }

      if ((curNumber % divisor) == 0) {
        return true;
      }
    }

    return false;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Return the number of digits in the given number
  //////////////////////////////////////////////////////////////////////////////

  static levelFromNumber(value) {
    if ((value === undefined) || (value === null)) {
      return 1;
    }

    let valueStr = value.toString();

    if (Number.isInteger(value)) {
      return valueStr.length - (value < 0 ? 1 : 0);
    }

    let n = valueStr.length;

    return n <= 0 ? 1 : n;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Break a string into array of divisors and return that
  //////////////////////////////////////////////////////////////////////////////

  static parseDivisors(value) {
    if ((value === undefined) || (value === null)) {
      return [];
    }
    return value
      .replaceAll(/\s*(∨|v|V|or?)\s*/g, "o")
      .split("o")
      .map(function (divisorStr) {
        var result = 1;

        divisorStr
          .replaceAll(/\s*(×|x|X|\*|a(nd)?)\s*/g, "x")
          .split("x")
          .map(function (divisor) {
            let n = parseInt(divisor);

            if (Number.isInteger(n) && (n >= 2)) {
              result *= parseInt(n);
            }
            return 0;
          });

        return result;
      })
      .filter(divisor => divisor >= 2);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Set the new list of divisors from the list of string values
  //////////////////////////////////////////////////////////////////////////////

  setDivisors(value) {
    this.divisors = [];

    for (let i = 0, n = value.length; i < n; i++) {
      this.divisors.push(parseInt(value[i]));
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Ensure the level matches the smallest divisor
  //////////////////////////////////////////////////////////////////////////////

  setMinLevel() {
    let minDivisor = Number.MAX_SAFE_INTEGER;

    for (let divisor of this.divisors) {
      if (minDivisor > divisor) {
        minDivisor = divisor;
      }
    }

    let minLevel = minDivisor.toString().length;

    if (this.level < minLevel) {
      this.setLevel(minLevel);
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Set level as well as dependent properties
  //////////////////////////////////////////////////////////////////////////////

  setLevel(value) {
    if ((value !== undefined) && (value !== null)) {
      if (value < Game.minLevel) {
        this.level = Game.minLevel;
      } else if (value > Game.maxLevel) {
        this.level = Game.maxLevel;
      } else {
        this.level = value;
      }
    }
    this.minNumber = Math.floor(Math.pow(10, this.level - 1));
    this.maxNumber = Math.floor(Math.pow(10, this.level)) - 1;
    this.maxScore = 0;
    this.curScore = 0;
    this.curNumber = 0;
    this.#oldNumbers = [];
  }

  //////////////////////////////////////////////////////////////////////////////
  // Set the new record the passed value exceeds the previous record
  //////////////////////////////////////////////////////////////////////////////

  setMaxScore(value) {
    let maxScore = this.getMaxScore(value);

    if (this.maxScore < maxScore) {
      this.maxScore = maxScore;
      return true;
    }

    return false;
  }

  //////////////////////////////////////////////////////////////////////////////

  setNextNumber() {
    this.setMinLevel();
    let curNumber = this.curNumber;

    if ((this.curScore >= Game.jumpScore) && (this.level < Game.maxLevel)) {
      this.setLevel(this.level + 1);
    } else if (curNumber && !this.#oldNumbers.includes(curNumber)) {
      this.#oldNumbers.push(curNumber);
    }

    let attempts = 0;
    let lastDivisorNo = this.divisors.length - 1;
    let shouldDivide = this.getRandomInt(0, 1) === 1;

    for (curNumber = 0; !curNumber || this.#oldNumbers.includes(curNumber);) {
      if ((++attempts) > Game.maxAttempts) {
        if (this.level >= Game.maxLevel) {
          return 0;
        }
        attempts = 0;
        this.setLevel(this.level + 1);
      }

      curNumber = this.getRandomInt();

      if (curNumber == 0) {
        continue;
      }

      if (shouldDivide && !this.isDivisible(curNumber)) {
        let divisorNo = lastDivisorNo <= 0 ? lastDivisorNo : this.getRandomInt(0, lastDivisorNo);
        let divisor = this.divisors[divisorNo];
        curNumber = (curNumber < divisor ? divisor : curNumber - (curNumber % divisor));
      }
    }

    this.curNumber = curNumber;

    return curNumber;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Check the current number is divisible by any of the divisors and return
  // the next number in case of success or 0 otherwise
  //
  // However, maxScore should be updated explicitly by the caller, as they might
  // want to save the game too
  //////////////////////////////////////////////////////////////////////////////

  setResult(isAnswerYes) {
    let isDivisible = this.isDivisible();
    let isSuccess = ((isAnswerYes && isDivisible) || (!isAnswerYes && !isDivisible));

    if (!isSuccess) {
      this.curScore = 0;
      return 0;
    }

    ++this.curScore;

    return this.setNextNumber();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert this object into the one that excludes all irrelevant properties
  //////////////////////////////////////////////////////////////////////////////

  toDivisorsString() {
    return this.divisors
      .map((d) => Game.toSimpleDivisors(d))
      .join(Game.orSign);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert this object into the one that excludes all irrelevant properties
  //////////////////////////////////////////////////////////////////////////////

  toSerializable() {
    return {
      level: this.level,
      divisors: this.divisors,
      maxScore: this.maxScore,
    };
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert a numeric value into a string as a multiplication of powers of the
  // prime divisors. Based on one of the replies to a question in
  // https://stackoverflow.com/questions/39899072/how-can-i-find-the-prime-factors-of-an-integer-in-javascript
  //////////////////////////////////////////////////////////////////////////////

  static toSimpleDivisors(value) {
    let divisors = [];
    let divisor = 10;
  
    // First find the 10s

    while (value >= divisor) {
      if ((value % divisor) == 0) {
        divisors.push(divisor);
        value /= divisor;
      } else {
        break;
      }
    }

    divisor = 2;
  
    // Accumulate all prime divisors (with possible repetitions) in order

    while (value >= 2) {
      if ((value % divisor) == 0) {
        divisors.push(divisor);
        value /= divisor;
      } else {
        divisor++;
      }
    }

    let currDiv = 0;
    let prevDiv = 0;
    let result = [];

    for (let i = 0, j = -1, n = divisors.length; i < n; i++, prevDiv = currDiv) {
      currDiv = divisors[i];

      if (currDiv == prevDiv) {
        result[j] *= currDiv;
      } else {
        result.push(currDiv);
        ++j;
      }
    }

    result.sort((x, y) => parseInt(x) - parseInt(y));

    return result.join(Game.mulSign);
  }

  //////////////////////////////////////////////////////////////////////////////
}
