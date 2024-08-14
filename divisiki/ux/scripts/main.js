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
  Main.setDivisors([3]); // temporarily defaulting to divisbility by 3
  Main.onClickPlay(false);
  //Pref.init(true);
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
    var nextNumber = game.setResult(isYes);

    if (!nextNumber) {
      this.onClickPlay(false, "Stopped by the wrong answer");
      return;
    }

    this.setTimer(true);
    this.setNumber(nextNumber);
    this.setScore();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Go to the menu
  //////////////////////////////////////////////////////////////////////////////

  onClickMenu() {
    Core.setPopup(true);
    Pref.onClickCanEdit();
    Pref.onClickHelp(false);
    Pref.setEditorHeight();
    Pref.resetList();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Go to the menu
  //////////////////////////////////////////////////////////////////////////////

  onClickPlay(isPlay, status) {
    var visibleStyle = "flex";

    if (isPlay) {
      this.setStatus(null);
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

    if (status !== undefined) {
      this.setStatus(status);
    }

    this.setTimer(isPlay);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Click handler to select a user
  //////////////////////////////////////////////////////////////////////////////

  onClickSetUser() {
    Core.setVisible($("#popup-user"), true, "flex");
    Core.setPopup(true);
  }

  //////////////////////////////////////////////////////////////////////////////

  setDivisors(value) {
    var game = Data.getSelectedGame();

    if (value) {
      game.setDivisors(value);
      Data.save();
    }

    $("#divisor").text(game.divisors.join(" or "));
  }

  //////////////////////////////////////////////////////////////////////////////

  setNumber() {
    var game = Data.getSelectedGame();
    var oldLevel = game.level;
    var newNumber = game.setNextNumber();

    if (game.level > oldLevel) {
      Data.save();
      this.setScore();
    }

    $("#number").text(newNumber);
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

  setTimer(isStart) {
    var game = Data.getSelectedGame();
    Timer.init(null, game.lastTimeLimit);

    if (isStart) {
      Timer.start(() => {
        this.onClickPlay(false, "Time limit reached");
      });
    } else {
      Timer.stop();
    }
  }

  //////////////////////////////////////////////////////////////////////////////

  setUser() {
    $("#user").text(Data.getSelectedUser().userId);
  }

  //////////////////////////////////////////////////////////////////////////////
}