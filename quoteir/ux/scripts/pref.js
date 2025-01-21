////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

class Pref {
  owner = null;
  selectedUser = null;

  //////////////////////////////////////////////////////////////////////////////

  constructor(owner) {
    this.owner = owner;
  }

  //////////////////////////////////////////////////////////////////////////////

  onClick(id, handler) {
    const dialogId = `dialog-${id.replace("#", "")}`;
    const jqElem = createEmptyDialog(dialogId);

    jqElem.dialog({
      content: $(id),
      handler: handler
    });
  }

  //////////////////////////////////////////////////////////////////////////////

  onClickUser(users, selectedUserNo, maxUserCount, beforeHide) {
    this.selectedUser = users[selectedUserNo];

    var jqControl = $("#pref-user-value").listedit({
      hasDefaultItem: true,
      isEditable: true,
      items: users,
      maxItemCount: maxUserCount,
      rows: 3,      
      insertTitle: "Add Profile",
      modifyTitle: "Edit Profile",
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
          items[itemNo].setUserId(value);
        } else {
          items[itemNo] = new User(value);
        }
      }
    });

    this.onClick("#pref-user", function (event) {
      if (event === "before-hide") {
        beforeHide(jqControl);
      } else if (event === "after-hide") {
        jqControl.empty();
      }
    });
  }

  //////////////////////////////////////////////////////////////////////////////
}
