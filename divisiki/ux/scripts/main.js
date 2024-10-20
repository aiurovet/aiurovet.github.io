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
    Main.onClickUser();
  }
});

////////////////////////////////////////////////////////////////////////////////
// Set the event handlers
////////////////////////////////////////////////////////////////////////////////

$(window).resize(function () {
  Main.setNumberHeight();
});

////////////////////////////////////////////////////////////////////////////////

class MainClass {
  static numberWidthToBodyWidthRatio = 0.85;

  constructor() {
  }

  //////////////////////////////////////////////////////////////////////////////
  // Game reaction response
  //////////////////////////////////////////////////////////////////////////////

  onClickAnswer(isYes) {
    let game = Data.getSelectedGame();

    if (!game) {
      return;
    }

    let curNumber = game.curNumber;
    let nextNumber = game.setResult(isYes);

    if (!nextNumber) {
      this.onClickPlay(false, `${curNumber}`);
      return;
    }

    this.setTimer(true);
    this.setNumber(nextNumber);
    this.setScore();
  }

  //////////////////////////////////////////////////////////////////////////////

  onClickDivisors() {
    let user = Data.getSelectedUser();

    if (!user) {
      return;
    }

    var that = this;

    this.onClickPlay(false);

    Pref.onClickDivisors(user, function(jqList) {
      Data.setSelectedGameNo(jqList.selectedItemNo);
      Data.save();
      that.setDivisors();
      that.setLevel();
    });
  }

  //////////////////////////////////////////////////////////////////////////////

  onClickLevel() {
    var game = Data.getSelectedGame();

    if (!game) {
      return;
    }

    var that = this;

    this.onClickPlay(false);

    Pref.onClickLevel(game, function(jqList) {
      let newLevel = parseInt(jqList.selectedItem);

      if (newLevel !== game.level) {
        that.setLevel(newLevel);
      }
    });
  }

  //////////////////////////////////////////////////////////////////////////////
  // Go to the menu
  //////////////////////////////////////////////////////////////////////////////

  onClickPlay(isPlay, status) {
    let visibleStyle = "flex";

    if (isPlay || !status) {
      this.setStatus(null);
    }

    if (isPlay) {
      if (!Data.hasValidUsers()) {
        this.onClickUser();
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

    let jqButtons = $("#action-no, #action-yes");
    jqButtons.css("opacity", (isPlay ? 1.0 : 0.25));
    jqButtons.css("pointer-events", (isPlay ? "auto" : "none"));

    if (status) {
      this.setStatus(status);
    }

    this.setTimer(isPlay);
  }

  //////////////////////////////////////////////////////////////////////////////

  onClickTimeLimit() {
    var game = Data.getSelectedGame();

    if (!game) {
      return;
    }

    var that = this;

    this.onClickPlay(false);

    Pref.onClickTimeLimit(game, function(jqList) {
      let newTimeLimit = jqList.selectedItem;

      if (newTimeLimit != game.lastTimeLimit) {
        game.maxScore = 0;
        that.setScore(0);
      }

      that.setTimer(false, newTimeLimit);
    });
  }

  //////////////////////////////////////////////////////////////////////////////

  onClickUser() {
    let users = Data.getUsers();

    if (!users || !users.length) {
      return;
    }

    var that = this;

    this.onClickPlay(false);

    Pref.onClickUser(
      users, Data.getSelectedUserNo(), DataClass.maxUserCount, function(jqList) {
        Data.setSelectedUserNo(jqList.selectedItemNo);
        Data.save();
        that.setDivisors();
        that.setLevel();
        that.setTimer();
        that.setUser();
      });
  }

  //////////////////////////////////////////////////////////////////////////////

  setDivisors(value) {
    let game = Data.getSelectedGame();

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
    let game = Data.getSelectedGame();

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
    let game = Data.getSelectedGame();

    if (!game) {
      return;
    }

    let oldLevel = game.level;

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
    let jqNumber = $("#number");
    let maxHeight = $("#action-no").innerHeight();
    let maxWidth = $("body").innerWidth() * MainClass.numberWidthToBodyWidthRatio;
    let numLen = (jqNumber.text().length || 1);
    let curWidth = ((maxWidth / numLen) * (15. / 12));

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
    let game = Data.getSelectedGame();

    if (!game) {
      return;
    }

    if ((value !== undefined) && (value !== null)) {
      game.curScore = value;
    }

    if (game.setMaxScore(value)) {
      Data.save();
    }

    $("#score").html(`
      C:<span class="score-value cur">${game.curScore}</span>
      B:<span class="score-value max">${game.maxScore}</span>
      L:<span class="score-value level">${game.level}</span>
    `);
  }

  //////////////////////////////////////////////////////////////////////////////

  setStatus(text) {
    $("#status").text(text || "");
  }

  //////////////////////////////////////////////////////////////////////////////

  setTimer(isStart, timeLimit) {
    let game = Data.getSelectedGame();

    if (!game) {
      return;
    }

    if ((timeLimit !== undefined) && (timeLimit !== null)) {
      game.lastTimeLimit = timeLimit;
      Data.save();
    }

    Timer.init(null, game.lastTimeLimit);

    if (isStart) {
      var that = this;

      Timer.start(() => {
        that.onClickPlay(false, "Too late!");
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
