////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

class Pref {
  core = null;
  selectedUser = null;

  //////////////////////////////////////////////////////////////////////////////

  constructor(core) {
    this.core = core;
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
          items[itemNo].setUserId(value);
        } else {
          items[itemNo] = new User(value);
        }
      },
      editorHandler: function(listedit, event) {
        const user = listedit.selectedItem;
        that.selectedUser = user;

        if (event === "before-show") {
          $("#user-edit").css("background", user.background.color);
          $("#user-edit-header").val(user.header.text);
          $("#user-edit-phrase").val(user.phrase.text);
          $("#user-edit-footer").val(user.footer.text);
        } else if (event === "before-hide") {
          user.header.text = $("#user-edit-header").val();
          user.phrase.text = $("#user-edit-phrase").val();
          user.footer.text = $("#user-edit-footer").val();
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

  onClickLookPicker(jqElem, title) {
    const id = jqElem[0].id;
    const user = this.selectedUser;

    const isBack = (id === "user-edit-modify-back");
    const isFooter = (id === "user-edit-modify-footer");
    const isHeader = (id === "user-edit-modify-header");
    const isPhrase = (id === "user-edit-modify-phrase");

    this.core.setVisible($("#look-picker-font").parent(), !isBack);

    const jqColorFor = isBack ? $("#quote") : isFooter ? $("#footer") : isHeader ? $("#header") : isPhrase ? $("#phrase") : null;
    const lookText = isFooter ? user.footer : isHeader ? user.header : isPhrase ? user.phrase : null;
    const oldColor = jqColorFor.css("background-color");
    const that = this;

    let fontPicker = lookText ? $("#look-picker-font") : null;

    if (fontPicker) {
      fontPicker.selectFont({value: lookText.font.family});
    }

    let alignPicker = lookText ? $("#look-picker-align") : null;

    if (alignPicker) {
      alignPicker.selectAlign({isForImage: false, value: lookText.alignment.value});
    }

    let colorPicker = AColorPicker.createPicker("#look-picker-color", {color: oldColor});

    colorPicker.on("change", (picker, color) => {
      const rgba = AColorPicker.parseColorToRgba(color);
      const a = rgba[3];  
      const x = (1 - a) * 255;
      const rgb = `rgb(${Math.round(x + a * rgba[0])},${Math.round(x + a * rgba[1])},${Math.round(x + a * rgba[2])})`;
      const user = that.selectedUser;
    
      if (isBack) {
        user.background.color = rgb;
      } else if (isFooter) {
        user.footer.color = rgb;
      } else if (isHeader) {
        user.header.color = rgb;
      } else if (isPhrase) {
        user.phrase.color = rgb;
      }
    });

    this.onClick("#pref-look-picker", function(event) {
      if (event === "before-show") {
        $(".ui-dialog-caption.pref.look-picker > .ui-dialog-caption-text").text (title);
      } else if (event === "after-hide") {
        colorPicker?.destroy();
        colorPicker = null;
        fontPicker?.empty();
        fontPicker = null;
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
