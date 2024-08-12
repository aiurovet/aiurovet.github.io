////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Manage application data and preferences
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

class TimerClass {
  // Const: milliseconds in one second
  //
  static millisPerSec = 1000;

  // Const: how frequently a timer callback should be invoked
  //
  static frequency = (TimerClass.millisPerSec / 2);

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

  start() {
    this.startedAt = Date.now();
    this.expiresAt = this.startedAt + (this.duration * TimerClass.millisPerSec);

    this.intervalId = setInterval(
      () => {
        var now = Date.now();

        if (now >= this.expiresAt) {
          this.init();
          now = 0;
        }

        this.show(now);
      },
      TimerClass.frequency);

    return this;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Start timer and reflect its changes in a jQuery object by updating its text
  //////////////////////////////////////////////////////////////////////////////

  show(time) {
    if (this.jqText) {
      var delta = time ? this.expiresAt - time : 0;
      this.jqText.text(GameClass.timeLimitToString(delta));
    }

    return this;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Start timer and reflect its changes in a jQuery object by updating its text
  //////////////////////////////////////////////////////////////////////////////

  stop() {
    this.init().show();
    return this;
  }

  //////////////////////////////////////////////////////////////////////////////
}