////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

class Pref {
  constructor() {
  }

  //////////////////////////////////////////////////////////////////////////////

  onClick(id, handler) {
    let dialogId = `dialog-${id.replace("#", "")}`;

    createEmptyDialog(dialogId).dialog({
      content: $(id),
      handler: handler
    });
  }

  //////////////////////////////////////////////////////////////////////////////

  onClickDivisors(user, beforeHide) {
    var jqControl = $("#pref-divisors-value").listedit({
      hasDefaultItem: true,
      items: user.getGames(),
      maxItemCount: User.maxGameCount,
      rows: 3,
      editorRows: 3,
      insertTitle: "Add Divisors",
      modifyTitle: "Modify Divisors",
      selectedItemNo: user.getSelectedGameNo(),
      formatter: function(items, itemNo) {
        return itemNo >= 0 ? items[itemNo].toDivisorsString() : "";
      },
      parser: function(items, itemNo, value) {
        let divisors = Game.parseDivisors(value);

        if (items[itemNo]) {
          if (divisors.length <= 0) {
            return;
          }
          items[itemNo].init(Game.minLevel, divisors, 0);
        } else {
          if (items.length <= 0) {
            divisors = Game.defaultDivisors;
          }
          items[itemNo] = new Game(Game.minLevel, divisors, 0);
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

  onClickLevel(game, beforeHide) {
    var jqControl = $("#pref-level-value").listedit({
      isEditable: true,
      items: Game.getAllLevels(),
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

  onClickUser(users, selectedUserNo, maxUserCount, beforeHide) {
    var jqControl = $("#pref-user-value").listedit({
      hasDefaultItem: true,
      isEditable: true,
      items: users,
      maxItemCount: maxUserCount,
      rows: 3,
      insertTitle: "Add a Profile",
      modifyTitle: "Rename a Profile",
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
          value = User.defaultUserId;
        }

        if (items[itemNo]) {
          items[itemNo].userId = value;
        } else {
          items[itemNo] = new User(value);
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
