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
          that.#applyBackElem($("#user-edit"), user.background);
          that.#applyTextElem($("#user-edit-phrase"), user.phrase, $(".text-looks"));
          that.#applyTextElem($("#user-edit-header"), user.header);
          that.#applyTextElem($("#user-edit-footer"), user.footer);
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

  onClickLookPicker(clickEvent, title) {
    var elem = clickEvent.target;
    var id = elem.id;
    var user = this.selectedUser;

    var isBack = (id === "user-edit-modify-back");
    var isFooter = (id === "user-edit-modify-footer");
    var isHeader = (id === "user-edit-modify-header");
    var isPhrase = (id === "user-edit-modify-phrase");

    var jqLookFor =
      isBack ? $("#quote, #user-edit") :
      isHeader ? $("#edit-header, #user-edit-header") :
      isPhrase ? $("#edit-phrase, #user-edit-phrase") :
      isFooter ? $("#edit-footer, #user-edit-footer") :
      null;

    var look =
      isBack ? user.background :
      isHeader ? user.header :
      isPhrase ? user.phrase :
      isFooter ? user.footer :
      null;

    var oldColor = jqLookFor.css(isBack ? "background-color" : "color");
    var that = this;

    var alignPicker = $("#look-picker-align");
    alignPicker.selectAlign({isForImage: isBack, value: look.alignment.value, callers: jqLookFor});

    var fontPicker = $("#look-picker-font");
    fontPicker.parent().setVisible(!isBack);

    var ratioSpinner = $("#look-picker-ratio");
    ratioSpinner.setVisible(!isBack);

    ratioSpinner = isBack ? null : ratioSpinner.spinner({
      isReadOnly: true,
      min: 0,
      step: 0.05,
      value: parseInt(parseInt(look.font.sizeRatio ?? "1")),
      width: "3em",
    });

    $(".user-edit-control.effects").setVisible(!isBack);

    fontPicker = isBack ? null : fontPicker.selectFont({value: look.font.family, callers: jqLookFor});

    let rgba = AColorPicker.parseColorToRgba(oldColor)
    rgba[3] ||= 1;

    var colorPicker = AColorPicker.createPicker(
      "#look-picker-color",
      {color: Pref.colorArrayToString(rgba)});

    colorPicker.on("change", function (picker, color) {
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

    var jqElem = $(elem);

    this.onClick("#pref-look-picker", function(dlgEvent) {
      if (dlgEvent === "before-show") {
        $(".ui-dialog-caption.pref.look-picker > .ui-dialog-caption-text").text(title)
      } else if (dlgEvent === "before-hide") {
        if (isBack) {
          that.#applyBackElem($("#user-edit"), look);
        } else if (alignPicker && fontPicker) {
          look.font.family = fontPicker.val();
          look.alignment = new Alignment(alignPicker.val());
          that.#applyTextElem(jqElem.prev(), look);
        }

        that.owner.setUser(true);

        alignPicker?.clear();
        alignPicker = null;
        colorPicker?.destroy();
        colorPicker = null;
        fontPicker?.clear();
        fontPicker = null;
        ratioSpinner?.clear();
        ratioSpinner = null;
      }
    });
  }

  //////////////////////////////////////////////////////////////////////////////

  #applyBackElem(jqBack, look) {
    jqBack.css(look.toStyle());
  }

  //////////////////////////////////////////////////////////////////////////////

  #applyTextElem(jqText, look, jqBack) {
    let style = look.toStyle(); 
    let hasBack = jqBack && (jqBack.length > 0);

    if (hasBack) {
      delete style["font-size"];
    }

    jqText.css(style);
    jqText.text(look.text);

    if (hasBack) {
      jqBack.css("font-size", style["font-size"]);
    }
  }

  //////////////////////////////////////////////////////////////////////////////
}
