////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Manage application data and preferences
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

class TimeLimits {
  // Constant: all possible values for all types
  //
  static #allValues = TimeLimits.createValues(
    /* Per move: */ [0, 60, 45, 30, 15, 10, 5, 3,],
    /* Per game: */ [0, 900, 600, 300, 240, 180, 120, 60,]
  );

  //////////////////////////////////////////////////////////////////////////////

  // If true, the time limit is NOT reset after every move
  //
  #selectedType = TimeLimits.typePerMove;

  // The last selected time limit (the number of seconds) for each type
  //
  #selectedValues = TimeLimits.createValues(0, 0);

  //////////////////////////////////////////////////////////////////////////////
  // If only one argument passed, and that is an object, initialize parameters
  // with its properties: i.e. constructing from a deserialized saved object
  //////////////////////////////////////////////////////////////////////////////

  constructor(selectedValues, selectedType) {
    if (selectedValues instanceof TimeLimits) {
      let timeLimits = selectedValues;
      this.init(timeLimits.getSelectedValues(), timeLimits.getSelectedType());
    } else {
      this.init(selectedValues, selectedType);
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Create an associative array of values for each type
  //////////////////////////////////////////////////////////////////////////////

  static createValues(perMove, perGame) {
    var result = {};

    result[TimeLimitType.perMove] = perMove;
    result[TimeLimitType.perGame] = perGame;

    return result;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Get an array of all values for all time limit types
  //////////////////////////////////////////////////////////////////////////////

  getAllValues() {
    return TimeLimits.#allValues;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Get an array of all values for the noted time limit type
  //////////////////////////////////////////////////////////////////////////////

  getAllValuesOfType(type) {
    return TimeLimits.#allValues[(type === undefined) || (type === null) ? this.#selectedType : type];
  }

  //////////////////////////////////////////////////////////////////////////////
  // Get the value depending on time limit type
  //////////////////////////////////////////////////////////////////////////////

  getSelectedValue(type) {
    return this.#selectedValues[(type === undefined) || (type === null) ? this.#selectedType : type];
  }

  //////////////////////////////////////////////////////////////////////////////
  // Get all selected values
  //////////////////////////////////////////////////////////////////////////////

  getSelectedValues() {
    return this.#selectedValues;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Get the type of time limit
  //////////////////////////////////////////////////////////////////////////////

  getSelectedType() {
    return this.#selectedType;
  }

  //////////////////////////////////////////////////////////////////////////////
  // The initializer
  //////////////////////////////////////////////////////////////////////////////

  init(values, type) {
    if ((type !== undefined) && (type !== null)) {
      this.#selectedType = type;
    }
    if ((values !== undefined) && (values !== null)) {
      this.#selectedValues[TimeLimitType.perGame] = values[TimeLimitType.perGame] ?? 0;
      this.#selectedValues[TimeLimitType.perMove] = values[TimeLimitType.perMove] ?? 0;
    }

    return this;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Set selected type
  //////////////////////////////////////////////////////////////////////////////

  setSelectedType(type) {
    if ((type === undefined) || (type === null)) {
      return;
    }

    this.#selectedType = type === TimeLimitType.perGame
      ? type
      : TimeLimitType.perMove;

    return this.#selectedType;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Set optionally selected type, then set the value for the selected type
  //////////////////////////////////////////////////////////////////////////////

  setSelectedValue(value, type) {
    if ((type === undefined) || (type === null)) {
      type = this.#selectedType;
    } else {
      this.#selectedType = type;
    }

    this.#selectedValues[type] = value ?? TimeLimitType.perMove;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert the number of seconds into a text string like mm:ss
  //////////////////////////////////////////////////////////////////////////////

  static valueToString(value, isPref, fullDuration) {
    let seconds = fullDuration ? Math.floor(value / Timer.millisPerSec) : value;

    if (seconds < 0) {
      seconds = 0;
    }
  
    let secs = (seconds % 60);
    let mins = Math.floor(seconds / 60);

    if ((mins == 0) && (secs == 0) && !fullDuration) {
      return isPref ? "None" : "Untimed";
    }

    if (mins > 99) {
      mins = 99;
    }

    mins = (mins < 10 ? "0" : "") + mins.toString();
    secs = (secs < 10 ? "0" : "") + secs.toString();

    return `${mins}:${secs}`;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Convert this object into the one that excludes all irrelevant properties
  //////////////////////////////////////////////////////////////////////////////

  toSerializable() {
    return {
      selectedValues: this.#selectedValues,
    };
  }

  //////////////////////////////////////////////////////////////////////////////
}