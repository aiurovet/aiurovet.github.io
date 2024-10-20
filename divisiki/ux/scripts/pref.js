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
    let dialogId = `dialog-${id.replace("#", "")}`;
    let jqDialog = $(`#${dialogId}`);

    if (!jqDialog || !jqDialog.length) {
      jqDialog = $(`
        <div id="${dialogId}" class="ui-dialog"></div>
      `);
    }

    jqDialog
      .appendTo($("body"))
      .dialog({
        content: $(id),
        handler: handler
      });
  }

  //////////////////////////////////////////////////////////////////////////////

  onClickDivisors(user, beforeHide) {
    var jqControl = $("#pref-divisors-value");

    jqControl.listedit({
      hasDefaultItem: true,
      items: user.getGames(),
      maxItemCount: UserClass.maxGameCount,
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

        if (items[itemNo]) {
          if (divisors.length <= 0) {
            return;
          }
          items[itemNo].init(GameClass.minLevel, divisors, 0, GameClass.defaultTimeLimit);
        } else {
          if (items.length <= 0) {
            divisors = GameClass.defaultDivisors;
          }
          items[itemNo] = new GameClass(GameClass.minLevel, divisors, 0, GameClass.defaultTimeLimit);
        }
      }
    });

    this.onClick("#pref-divisors", function (event) {
      if (event === "before-hide") {
        beforeHide(jqControl);
      }
      else if (event === "after-hide") {
        jqControl.empty();
      }
    });
  }

  //////////////////////////////////////////////////////////////////////////////

  onClickHelp(anchor, focusAfterSelector) {
    this.onClick("#help", function (event) {
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

  onClickLevel(game, beforeHide) {
    var jqControl = $("#pref-level-value");

    jqControl.listedit({
      isEditable: true,
      items: GameClass.getAllLevels(),
      rows: 2,
      isEditable: false,
      selectedItem: game.level,
      formatter: null, // default
      parser: null // no need for non-editable lists
    });

    this.onClick("#pref-level", function (event) {
      if (event === "before-hide") {
        beforeHide(jqControl);
      } else if (event === "after-hide") {
        jqControl.empty();
      }
    });
  }

  //////////////////////////////////////////////////////////////////////////////

  onClickTimeLimit(game, beforeHide) {
    var jqControl = $("#pref-time-limit-value");

    jqControl.listedit({
      isEditable: true,
      items: GameClass.timeLimits,
      rows: 4,
      isEditable: false,
      selectedItem: game.lastTimeLimit,
      formatter: function(items, itemNo) {
        return itemNo >= 0 ? GameClass.timeLimitToString(items[itemNo], true) : "";
      },
      parser: null // no need for non-editable lists
    });

    this.onClick("#pref-time-limit", function (event) {
      if (event === "before-hide") {
        beforeHide(jqControl);
      } else if (event === "after-hide") {
        jqControl.empty();
      }
    });
  }

  //////////////////////////////////////////////////////////////////////////////

  onClickUser(users, selectedUserNo, maxUserCount, beforeHide) {
    var jqControl = $("#pref-user-value");

    jqControl.listedit({
      hasDefaultItem: true,
      isEditable: true,
      items: users,
      maxItemCount: maxUserCount,
      rows: 3,
      insertTitle: "Add a Player",
      modifyTitle: "Rename a Player",
      selectedItemNo: selectedUserNo,
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
        beforeHide(jqControl);
      }
      else if (event === "after-hide") {
        jqControl.empty();
      }
    });
  }

  //////////////////////////////////////////////////////////////////////////////
}
