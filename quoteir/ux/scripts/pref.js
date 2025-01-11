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

  static colorArrayToString(array) {
    return "#" +
      array[0].toString(16).padStart(2, "0") +
      array[1].toString(16).padStart(2, "0") +
      array[2].toString(16).padStart(2, "0")
    ;
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
          $("#user-edit-header").css("color", user.header.color).text(user.header.text);
          $("#user-edit-phrase").css("color", user.phrase.color).text(user.phrase.text);
          $("#user-edit-footer").css("color", user.footer.color).text(user.footer.text);
        } else if (event === "after-show") {
          $("#user-edit-footer, #user-edit-header, #user-edit-phrase").outerWidth($("#user-edit").outerWidth());
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

    $("#look-picker-font").parent().setVisible(!isBack);

    const jqColorFor = isBack ? $("#user-edit") : isFooter ? $("#user-edit-footer") : isHeader ? $("#user-edit-header") : isPhrase ? $("#user-edit-phrase") : null;
    const look = isHeader ? user.header : isPhrase ? user.phrase : isFooter ? user.footer : null;
    const lookText = look?.text;
    const oldColor = jqColorFor.css(isBack ? "background-color" : "color");
    const that = this;

    let fontPicker = lookText ? $("#look-picker-font") : null;

    if (fontPicker) {
      fontPicker.selectFont({value: look.font.family});
    }

    let alignPicker = $("#look-picker-align");

    if (look) {
      alignPicker.selectAlign({isForImage: false, value: look.alignment.value});
    } else {
      alignPicker.parent().hide(); 
    }

    let rgba = AColorPicker.parseColorToRgba(oldColor)
    rgba[3] ||= 1;

    let colorPicker = AColorPicker.createPicker(
      "#look-picker-color",
      {color: Pref.colorArrayToString(rgba)});

    colorPicker.on("change", (picker, color) => {
      rgba = AColorPicker.parseColorToRgba(color);
      const a = rgba[3];  
      const x = (1 - a) * 255;
      const rgb = `rgb(${Math.round(x + a * rgba[0])},${Math.round(x + a * rgba[1])},${Math.round(x + a * rgba[2])})`;
      const user = that.selectedUser;
    
      if (isBack) {
        user.background.color = rgb;
        $(".edit-quote, #user-edit").css("background-color", user.background.color);
      } else if (isFooter) {
        user.footer.color = rgb;    
        $("#edit-footer, #user-edit-footer").css("color", user.footer.color);
      } else if (isHeader) {
        user.header.color = rgb;
        $("#edit-header, #user-edit-header").css("color", user.header.color);
      } else if (isPhrase) {
        user.phrase.color = rgb;
        $("#edit-phrase, #user-edit-phrase").css("color", user.phrase.color);
      } 
    });

    this.onClick("#pref-look-picker", function(event) {
      if (event === "before-show") {
        $(".ui-dialog-caption.pref.look-picker > .ui-dialog-caption-text").text(title)
      } else if (event === "before-hide") {
        if (lookText) {
          look.font.family = $("#look-picker-font").val();
          look.alignment = new Alignment($("#look-picker-align").val());
          jqElem.prev().css("font-family", look.font.family);
        }
      } else if (event === "after-hide") {
        colorPicker?.destroy();
        colorPicker = null;
        fontPicker?.empty();
        fontPicker = null;
      }
    });
  }

  //////////////////////////////////////////////////////////////////////////////
}
