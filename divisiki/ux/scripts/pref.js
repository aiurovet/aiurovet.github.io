////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

class PrefClass {
  constructor() {
  }

  //////////////////////////////////////////////////////////////////////////////

  onClick(id, handler) {
    Main.onClickPlay(false);

    $("#dialog").dialog({
      content: $(id),
      handler: handler
    });
  }

  //////////////////////////////////////////////////////////////////////////////

  async onClickExit() {
    if (this.onBlurSuperUser() || Data.isChanged) {
      Data.save(false);
    }

    Core.setPopup(false);
  }

  //////////////////////////////////////////////////////////////////////////////

  onClickGame() {
    var user = Data.getSelectedUser();

    if (!user) {
      return;
    }

    var jqControl = $("#pref-game-value");

    jqControl.listedit({
      items: user.getGames(),
      rows: 3,
      editorRows: 3,
      insertTitle: "Add Divisors",
      modifyTitle: "Modify Divisors",
      selectedItemNo: user.getSelectedGameNo(),
      formatter: function(items, itemNo) {
        return itemNo >= 0 ? items[itemNo].toDivisorsString() : "";
      },
      parser: function(items, itemNo, value) {
        let divisors = GameClass.parseDivisors(value);

        if (divisors.length <= 0) {
          divisors = [...GameClass.defaultDivisors];
        }
        if (items[itemNo]) {
          items[itemNo].divisors = divisors;
        } else {
          items[itemNo] = new GameClass(GameClass.minLevel, divisors, 0, GameClass.defaultTimeLimit);
        }
      }
    });

    this.onClick("#pref-game", function (event) {
      if (event === "before-hide") {
        Data.setSelectedGameNo(jqControl.selectedItemNo);
        Data.save();
        Main.setDivisors();
      }
      else if (event === "after-hide") {
        jqControl.empty();
      }
    });
  }

  //////////////////////////////////////////////////////////////////////////////

  onClickHelp() {
    this.onClick("#help");
  }

  //////////////////////////////////////////////////////////////////////////////

  onClickLevel() {
    var game = Data.getSelectedGame();

    if (!game) {
      return;
    }

    var jqControl = $("#pref-level-value");

    /*jqControl.spinner({
      value: game.level,
      min: GameClass.minLevel,
      max: GameClass.maxLevel,
      isWrap: false,
    });*/

    jqControl.listedit({
      hasDefaultItem: true,
      isEditable: true,
      items: GameClass.getAllLevels(),
      rows: 3,
      isEditable: false,
      selectedItem: game.lastTimeLimit,
      formatter: null, // default
      parser: null // no need for non-editable lists
    });

    this.onClick("#pref-level", function (event) {
      if (event === "after-hide") {
        Main.setLevel(parseInt(jqControl.selectedItem));
        jqControl.empty();
      }
    });
  }

  //////////////////////////////////////////////////////////////////////////////

  onClickTimeLimit() {
    var game = Data.getSelectedGame();

    if (!game) {
      return;
    }

    var jqControl = $("#pref-time-limit-value");

    jqControl.listedit({
      hasDefaultItem: true,
      isEditable: true,
      items: GameClass.timeLimits,
      rows: 3,
      isEditable: false,
      selectedItem: game.lastTimeLimit,
      formatter: function(items, itemNo) {
        return itemNo >= 0 ? GameClass.timeLimitToString(items[itemNo]) : "";
      },
      parser: null // no need for non-editable lists
    });

    this.onClick("#pref-time-limit", function (event) {
      if (event === "after-hide") {
        Main.setTimer(false, jqControl.selectedItem);
        jqControl.empty();
      }
    });
  }

  //////////////////////////////////////////////////////////////////////////////

  onClickUser() {
    var jqControl = $("#pref-user-value");

    jqControl.listedit({
      hasDefaultItem: true,
      isEditable: true,
      items: Data.getUsers(),
      rows: 3,
      insertTitle: "Add a Player",
      modifyTitle: "Rename a Player",
      selectedItemNo: Data.getSelectedUserNo(),
      formatter: function(items, itemNo) {
        return itemNo >= 0 ? items[itemNo].userId : "";
      },
      parser: function(items, itemNo, value) {
        value = value?.trim() ?? "";

        if (value.length === 0) {
          if (items.length != 1) {
            return;
          }
          if (items[0] !== null) {
            return;
          }
          value = UserClass.defaultUserId;
        }

        if (items[itemNo]) {
          items[itemNo].userId = value;
        } else {
          items[itemNo] = new UserClass(value);
        }
      }
    });

    this.onClick("#pref-user", function (event) {
      if (event === "before-hide") {
        Data.setSelectedUserNo(jqControl.selectedItemNo);
        Data.save();
        Main.setDivisors();
        Main.setLevel();
        Main.setScore();
        Main.setTimer();
        Main.setUser();
      }
      else if (event === "after-hide") {
        jqControl.empty();
      }
    });
  }

  //////////////////////////////////////////////////////////////////////////////
}
