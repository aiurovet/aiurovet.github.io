////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Main page
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////
// Global variables (singletons)
////////////////////////////////////////////////////////////////////////////////

var Core = null;
var Data = null;
var Json = null;
var Main = null;
var Pref = null;
var Timer = null;

////////////////////////////////////////////////////////////////////////////////
// Application entry point
////////////////////////////////////////////////////////////////////////////////

$(document).ready(() => {
  // Initialize singletons
  //
  Json = new JsonClass();
  Data = (new DataClass()).load();
  Core = new CoreClass();
  Pref = new PrefClass();
  Main = new MainClass();
  Timer = new TimerClass($("#timer"));

  // Initialize the UI
  //
  Main.setUser();
  Main.setScore();
  Main.setDivisors();
  Main.onClickPlay(false);

  if (!Data.hasValidUsers()) {
    Pref.onClickUser();
  }
});

////////////////////////////////////////////////////////////////////////////////
// Set the event handlers
////////////////////////////////////////////////////////////////////////////////

$(window).bind("beforeunload", async () => {
  if (!Pref) {
    return;
  }
  await Pref.onClickExit();
});

$(window).resize(() => {
  if (!Core) {
    return;
  }
  Main.setNumberHeight();
});

////////////////////////////////////////////////////////////////////////////////

class MainClass {
  constructor() {
  }

  //////////////////////////////////////////////////////////////////////////////
  // Game reaction response
  //////////////////////////////////////////////////////////////////////////////

  onClickAnswer(isYes) {
    var game = Data.getSelectedGame();

    if (!game) {
      return;
    }

    var curNumber = game.curNumber;
    var nextNumber = game.setResult(isYes);

    if (!nextNumber) {
      this.onClickPlay(false, `Failed at ${curNumber}`);
      return;
    }

    this.setTimer(true);
    this.setNumber(nextNumber);
    this.setScore();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Go to the menu
  //////////////////////////////////////////////////////////////////////////////

  onClickPlay(isPlay, status) {
    var visibleStyle = "flex";

    if (isPlay || !status) {
      this.setStatus(null);
    }

    if (isPlay) {
      if (!Data.hasValidUsers()) {
        Pref.onClickUser();
        return;
      }
      this.setScore(0);
      this.setNumber();
      Core.setVisible($("#play"), false);
      Core.setVisible($("#number"), true, visibleStyle);
    } else {
      Core.setVisible($("#number"), false);
      Core.setVisible($("#play"), true, visibleStyle);
    }

    this.setNumberHeight();

    var jqButtons = $("#action-no, #action-yes");
    jqButtons.css("opacity", (isPlay ? 1.0 : 0.25));
    jqButtons.css("pointer-events", (isPlay ? "auto" : "none"));

    if (status) {
      this.setStatus(status);
    }

    this.setTimer(isPlay);
  }

  //////////////////////////////////////////////////////////////////////////////

  setDivisors(value) {
    var game = Data.getSelectedGame();

    if (!game) {
      return;
    }

    if (value) {
      game.setDivisors(value);
    }

    Data.save();
    this.setLevel();

    $("#divisor").text(game.toDivisorsString());
  }

  //////////////////////////////////////////////////////////////////////////////

  setLevel(value) {
    var game = Data.getSelectedGame();

    if (!game) {
      return;
    }

    if ((value !== undefined) && (value !== null)) {
      game.setLevel(value);
    }

    Data.save();
    this.setScore();
  }

  //////////////////////////////////////////////////////////////////////////////

  setNumber(value) {
    var game = Data.getSelectedGame();

    if (!game) {
      return;
    }

    var oldLevel = game.level;

    if (!value) {
      value = game.setNextNumber();
    }

    if (game.level != oldLevel) {
      Data.save();
      this.setScore();
    }

    $("#number").text(value);
    this.setNumberHeight();
  }

  //////////////////////////////////////////////////////////////////////////////

  setNumberHeight() {
    var jqNumber = $("#number");
    var maxHeight = $("#action-no").innerHeight();
    var maxWidth = jqNumber.innerWidth();
    var numLen = (jqNumber.text().length || 1);
    var curWidth = ((maxWidth / numLen) * (15. / 12));

    if (curWidth > maxWidth) {
      curWidth = maxWidth;
    }

    if (curWidth > maxHeight) {
      curWidth = maxHeight;
    }

    jqNumber.css("font-size", `${curWidth}px`);
  }

  //////////////////////////////////////////////////////////////////////////////

  setScore(value) {
    var game = Data.getSelectedGame();

    if (!game) {
      return;
    }

    if ((value !== undefined) && (value !== null)) {
      game.curScore = value;
    }

    if (game.setMaxScore(value)) {
      Data.save();
    }

    $("#score").text(`${game.curScore} / ${game.maxScore}`);
  }

  //////////////////////////////////////////////////////////////////////////////

  setStatus(text) {
    $("#status").text(text || "");
  }

  //////////////////////////////////////////////////////////////////////////////

  setTimer(isStart, timeLimit) {
    var game = Data.getSelectedGame();

    if (!game) {
      return;
    }

    if ((timeLimit !== undefined) && (timeLimit !== null)) {
      game.lastTimeLimit = timeLimit;
      Data.save();
    }

    Timer.init(null, game.lastTimeLimit);

    if (isStart) {
      Timer.start(() => {
        this.onClickPlay(false, "Too late!");
      });
    } else {
      Timer.stop();
    }
  }

  //////////////////////////////////////////////////////////////////////////////

  setUser() {
    let user = Data.getSelectedUser();

    if (!user) {
      return;
    }

    $("#user").text(user.userId);
    this.setScore();
    this.setTimer();
  }

  //////////////////////////////////////////////////////////////////////////////
}
