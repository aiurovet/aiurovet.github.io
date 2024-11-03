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

var main = null;

////////////////////////////////////////////////////////////////////////////////
// Application entry point
////////////////////////////////////////////////////////////////////////////////

$(document).ready(() => {
  // Initialize singletons
  //
  main ??= new Main();

  // Initialize the UI
  //
  main.setUser();
  main.setScore();
  main.setDivisors();
  main.onClickPlay(false);

  if (!main.data.hasValidUsers()) {
    main.onClickUser();
  }
});

////////////////////////////////////////////////////////////////////////////////
// Set the event handlers
////////////////////////////////////////////////////////////////////////////////

$(window).resize(function () {
  main.setNumberHeight();
});

////////////////////////////////////////////////////////////////////////////////

class Main {
  static numberWidthToBodyWidthRatio = 0.85;
  static statusStopped = "Stopped";

  core = new Core();
  data = (new Data()).load();
  pref = new Pref();
  timer = new Timer($("#timer"));

  constructor() {
  }

  //////////////////////////////////////////////////////////////////////////////
  // Reaction on the time limit change
  //////////////////////////////////////////////////////////////////////////////

  onChangeTimeLimitType() {
    let timeLimits = this.data.getTimeLimits();

    let type = timeLimits.setSelectedType($("#pref-time-limit-type-per-game").prop("checked")
      ? TimeLimitType.perGame
      : TimeLimitType.perMove);

    this.pref.resetTimeLimits(timeLimits);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Game reaction response
  //////////////////////////////////////////////////////////////////////////////

  onClickAnswer(isYes) {
    let data = this.data;
    let game = data.getSelectedGame();
    let timeLimits = data.getTimeLimits();

    if (!game) {
      return;
    }

    let curNumber = game.curNumber;
    let nextNumber = game.setResult(isYes);

    if (!nextNumber) {
      this.onClickPlay(false, `${curNumber}`);
      return;
    }

    if (timeLimits.getSelectedType() === TimeLimitType.perMove) {
      this.setTimer(true);
    }

    this.setNumber(nextNumber);
    this.setScore();
  }

  //////////////////////////////////////////////////////////////////////////////

  onClickDivisors() {
    let user = this.data.getSelectedUser();

    if (!user) {
      return;
    }

    var that = this;

    this.onClickPlay(false);

    this.pref.onClickDivisors(user, function(jqList) {
      that.data.setSelectedGameNo(jqList.selectedItemNo);
      that.data.save();
      that.setDivisors();
      that.setLevel();
    });
  }

  //////////////////////////////////////////////////////////////////////////////

  onClickHelp(anchor, focusAfterSelector) {
    this.pref.onClick("#help", function (event) {
      if (event === "after-show") {
        let jqElem = anchor ? $(`#${anchor}`) : null;

        if (jqElem && jqElem.length) {
          jqElem.scrollIntoView();
        }
      } else if (event === "after-hide") {
        if (focusAfterSelector) {
          $(focusAfterSelector).focus();
        }
      }
    });
  }

  //////////////////////////////////////////////////////////////////////////////
  // Customised Example 2 at
  // https://www.tutorialspoint.com/how-to-print-a-page-using-jquery
  //////////////////////////////////////////////////////////////////////////////
  
  onClickHelpPrint() {
    var newWnd = window.open("", "print-window");
    var newDoc = newWnd.document;

    newDoc.open();

    newDoc.write(`
      <html>
        <head>
          <style>
            .para-help {
              margin: 1rem 0 0 0;
            }
            .ui-dialog-icon, #help-print {
              display: none !important;
            }
          </style>
        </head>
        <body onload="window.print();">
          ${$(".ui-dialog-content.help").html()}
          </body>
        </html>`);

    newDoc.close();

    postAction(function() {
      newWnd.close();
    });
  }

  //////////////////////////////////////////////////////////////////////////////

  onClickLevel() {
    var game = this.data.getSelectedGame();

    if (!game) {
      return;
    }

    var that = this;

    this.onClickPlay(false);

    this.pref.onClickLevel(game, function(jqList) {
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
      if (!this.data.hasValidUsers()) {
        this.onClickUser();
        return;
      }
      this.setScore(0);
      this.setNumber();
      this.core.setVisible($("#play"), false);
      this.core.setVisible($("#number"), true, visibleStyle);
    } else {
      this.core.setVisible($("#number"), false);
      this.core.setVisible($("#play"), true, visibleStyle);
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
    var game = this.data.getSelectedGame();

    if (!game) {
      return;
    }

    var timeLimits = this.data.getTimeLimits();
    var oldSelectedType = timeLimits.getSelectedType();
    var oldSelectedValue = timeLimits.getSelectedValue(oldSelectedType);
    var that = this;

    this.onClickPlay(false);

    this.pref.onClickTimeLimit(timeLimits, oldSelectedType, function(jqList) {
      let newTimeLimitType = $("#pref-time-limit-type-per-game").prop("checked") ? TimeLimitType.perGame : TimeLimitType.perMove;
      let newTimeLimitValue = jqList.selectedItem;

      if ((newTimeLimitType != oldSelectedType) || (newTimeLimitValue != oldSelectedValue)) {
        game.maxScore = 0;
        that.setScore(0);
      }

      that.setTimer(false, newTimeLimitValue, newTimeLimitType);
    });
  }

  //////////////////////////////////////////////////////////////////////////////

  onClickUser() {
    let users = this.data.getUsers();

    if (!users || !users.length) {
      return;
    }

    var that = this;

    this.onClickPlay(false);

    this.pref.onClickUser(
      users, this.data.getSelectedUserNo(), Data.maxUserCount, function(jqList) {
        that.data.setSelectedUserNo(jqList.selectedItemNo);
        that.data.save();
        that.setDivisors();
        that.setLevel();
        that.setTimer();
        that.setUser();
      });
  }

  //////////////////////////////////////////////////////////////////////////////

  setDivisors(value) {
    let game = this.data.getSelectedGame();

    if (!game) {
      return;
    }

    if (value) {
      game.setDivisors(value);
    }

    this.data.save();
    this.setLevel();

    $("#divisor").text(game.toDivisorsString());
  }

  //////////////////////////////////////////////////////////////////////////////

  setLevel(value) {
    let game = this.data.getSelectedGame();

    if (!game) {
      return;
    }

    if ((value !== undefined) && (value !== null)) {
      game.setLevel(value);
    }

    this.data.save();
    this.setScore();
  }

  //////////////////////////////////////////////////////////////////////////////

  setNumber(value) {
    let game = this.data.getSelectedGame();

    if (!game) {
      return;
    }

    let oldLevel = game.level;

    if (!value) {
      value = game.setNextNumber();
    }

    if (game.level != oldLevel) {
      this.data.save();
      this.setScore();
    }

    $("#number").text(value);
    this.setNumberHeight();
  }

  //////////////////////////////////////////////////////////////////////////////

  setNumberHeight() {
    let jqNumber = $("#number");
    let maxHeight = $("#action-no").innerHeight();
    let maxWidth = $("body").innerWidth() * Main.numberWidthToBodyWidthRatio;
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
    let game = this.data.getSelectedGame();

    if (!game) {
      return;
    }

    if ((value !== undefined) && (value !== null)) {
      game.curScore = value;
    }

    if (game.setMaxScore(value)) {
      this.data.save();
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

  setTimer(isStart, timeLimitValue, timeLimitType) {
    let game = this.data.getSelectedGame();

    if (!game) {
      return;
    }

    let timeLimits = this.data.getTimeLimits();

    if ((timeLimitValue !== undefined) && (timeLimitValue !== null)) {
      timeLimits.setSelectedValue(timeLimitValue, timeLimitType);
      this.data.save();
    }

    this.timer.init(null, timeLimits.getSelectedValue());

    if (isStart) {
      var that = this;

      this.timer.start(function () {
        that.onClickPlay(false, Main.statusStopped);
      });
    } else {
      this.timer.stop();
    }
  }

  //////////////////////////////////////////////////////////////////////////////

  setUser() {
    let user = this.data.getSelectedUser();

    if (!user) {
      return;
    }

    $("#user").text(user.userId);
    this.setScore();
    this.setTimer();
  }

  //////////////////////////////////////////////////////////////////////////////
}
