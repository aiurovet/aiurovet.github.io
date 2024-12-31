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

  onClickUser(users, selectedUserNo, maxUserCount, beforeHide) {
    const that = this;

    var jqControl = $("#pref-user-value").listedit({
      editorContent: $("#pref-user-edit"),
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

  onModifyUser(owner, event, isInsert, selItemNo, selItemText) {
    var dlg = null;

    if (!event) {
      AColorPicker.from("#user-edit-color").on("change", (picker, color) => {
        $(".main-col.quote").css("background-color", color);
      });
      dlg = createEmptyDialog("dialog-pref-user-edit", "ui-listedit-popup", owner).dialog({
        content: $("#pref-user-edit"),
        handler: function(owner, event, isInsert, selItemNo, selItemText) {
          owner.onModifyDefault(owner, event, isInsert, selItemNo, selItemText);
        }
      });
      return;
    }
    
    dlg.onModifyDefault(isInsert, jqPopup, selItemNo, selItemText, event);
    
    if (event === "before-show") {
      $("#user-edit-title").text(`${isInsert ? "Add" : "Edit"} Profile`);
    } else if (event === "before-hide") {
      $("#footer").text($("#user-edit-value").val().toHtml());
    }
  }

  //////////////////////////////////////////////////////////////////////////////
}
