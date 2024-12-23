////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Manage application data and preferences
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

class Timer {
  // Const: how frequently a timer callback should be invoked
  //
  static frequency = (Timer.millisPerSec / 2);

  // Const: milliseconds in one second
  //
  static millisPerSec = 1000;

  // Maximum number of seconds till the timer expires
  //
  duration = 0;

  // When the timer expires (ends)
  //
  expiresAt = null;

  // Interval id returned by setInterval
  //
  intervalId = null;

  // jQuery object to reflect changes in its inner text
  //
  jqText = null;

  // When the timer started
  //
  startedAt = null;

  //////////////////////////////////////////////////////////////////////////////

  constructor(jqText, duration) {
    this.init(jqText, duration);
  }

  //////////////////////////////////////////////////////////////////////////////

  init(jqText, duration) {
    if ((jqText !== undefined) && (jqText !== null) && (jqText.length > 0)) {
      this.jqText = jqText;
    }
    if ((duration !== undefined) && (duration !== null)) {
      this.duration = duration;
    }
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    this.startedAt = null;
    this.expiresAt = null;

    return this;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Start timer and reflect its changes in a jQuery object by updating its text
  //////////////////////////////////////////////////////////////////////////////

  start(endProc) {
    this.startedAt = Date.now();
    this.expiresAt = this.startedAt + (this.duration * Timer.millisPerSec);
    this.timerProc();

    this.intervalId = setInterval(
      () => {
        this.timerProc(endProc);
      },
      Timer.frequency);

    return this;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Start timer and reflect its changes in a jQuery object by updating its text
  //////////////////////////////////////////////////////////////////////////////

  show(time) {
    if (this.jqText) {
      let delta = this.expiresAt && time
        ? this.expiresAt - time
        : this.duration * Timer.millisPerSec;

        this.jqText.text(TimeLimits.valueToString(delta, false, this.duration));
    }

    return this;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Start timer and reflect its changes in a jQuery object by updating its text
  //////////////////////////////////////////////////////////////////////////////

  stop() {
    this.init().show(this.duration);
    return this;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Timer callback
  //////////////////////////////////////////////////////////////////////////////

  timerProc(endProc) {
    let now = Date.now();

    if ((this.expiresAt !== null) && (now >= this.expiresAt)) {
      this.init();
      now = 0;

      if (endProc) {
        endProc();
      }
    }

    this.show(now);
  }

  //////////////////////////////////////////////////////////////////////////////
}