////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
////////////////////////////////////////////////////////////////////////////////

'use strict';

////////////////////////////////////////////////////////////////////////////////

class PrefClass {
  constructor() {
    // Constants
    //
    this.superUserSeparatorRegex = new RegExp("[\\s=]+");
    this.searchOffRegex = new RegExp("^(no|off)", "i");

    // Properties
    //
    this.isTextChanged = false;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Initialize preferences
  //////////////////////////////////////////////////////////////////////////////

  init(isFromUI) {
    if (isFromUI) {
      Core.getEditor().val(Data.text);

      if (!Clip.isAvailable) {
        Core.setVisible($(".toolbar-link > *:not(#superuser)"), false);
      }
    }

    this.resetList();
  }

  //////////////////////////////////////////////////////////////////////////////

  onBlurEdit() {
    this.resetList(true);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Aquire the superuser value from the UI
  //////////////////////////////////////////////////////////////////////////////

  onBlurSuperUser() {
    var jqSuperUser = $("#superuser");

    var values = jqSuperUser.val()
      .trim()
      .toLowerCase()
      .split(this.superUserSeparatorRegex, 2);

    jqSuperUser.val(null);

    var valueCount = values.length;

    if (valueCount <= 0) {
      return false;
    }

    var isSearch = false;
    var newValue = valueCount <= 1 ? "" : values[1].trim().toLowerCase();

    var optKey = values[0];

    switch (optKey) {
      case "search":
        isSearch = true;
        newValue = this.searchOffRegex.test(newValue) ? "" : "a";
        break;
      case "reset":
        localStorage.clear();
        location.reload();
        return true;
      default:
        return false;
      }

    var oldValue = Data[optKey].toLowerCase();

    if (newValue) {
      if (oldValue.startsWith(newValue)) {
        return false;
      }
    } else if (!oldValue) {
      return false;
    }

    Data[optKey] = newValue;
    Data.isChanged = true;

    if (isSearch) {
      this.setCursorForSearch();
    }

    return true;
  }

  //////////////////////////////////////////////////////////////////////////////

  async onClickCopy() {
    Data.save();

    var jqEditor = Core.getEditor();
    var text = jqEditor.val();

    var editor = jqEditor[0];
    var selStart = editor.selectionStart;
    var selEnd = editor.selectionEnd;

    if (selStart != selEnd) {
      text = text.substring(selStart, selEnd);
    }

    await Clip.write(text);
    jqEditor.focus();

    alert("\nThe words were copied to the clipboard.\n\nYou can paste those wherever you like and save.");
  }

  //////////////////////////////////////////////////////////////////////////////

  async onClickExit() {
    if (this.onBlurSuperUser() || Data.isChanged) {
      await this.saveData();
    }

    Core.setPopup(false);
  }

  //////////////////////////////////////////////////////////////////////////////

  async onClickPaste() {
    var content = await Clip.read();

    if (!content) {
      return;
    }

    var jqEditor = Core.getEditor();
    var editor = jqEditor[0];
    var before = Data.text.substring(0, editor.selectionStart);
    var after = Data.text.substring(editor.selectionEnd);

    Data.text = before + content + after;
    this.isTextChanged = content.length > 0;

    Data.init();
    Data.save();
    this.init(true);
    jqEditor.focus();

    alert("\nThe words were successfully pasted from the clipboard.");
  }

  //////////////////////////////////////////////////////////////////////////////

  onClickHelp(isOn) {
    var visibleDisplayStyle = "flex";
    Core.setVisible($("#popup-pref"), !isOn, visibleDisplayStyle);
    Core.setVisible($("#popup-help"), isOn, visibleDisplayStyle);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Perform edit action
  //////////////////////////////////////////////////////////////////////////////

  onEditAction(action) {
    Core.setFocusToEditor();
    document.execCommand(action, false, null);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Select another list and adjust all related data
  //////////////////////////////////////////////////////////////////////////////

  resetList(isFromUi) {
    var oldData = new DataClass(Data);
    var selectionStart = undefined;

    if (isFromUi) {
      var jqEditor = Core.getEditor();
      Data.text = jqEditor.val();
      this.isTextChanged = Data.text != oldData.text;
      selectionStart = jqEditor[0].selectionStart;
    }

    Data.init(undefined, undefined, undefined, isFromUi, selectionStart);

    if (!Data.equals(oldData)) {
      Data.save();
    }

    Core.setWordNo(0);
    this.setCursorForSearch();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Save the data and preferences to the application storage
  //////////////////////////////////////////////////////////////////////////////

  async saveData() {
    Data.save(false);

    if (this.isTextChanged) {
      await Clip.write(Data.text);
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Set the type of the cursor to show above the current word
  //////////////////////////////////////////////////////////////////////////////

  setCursorForSearch() {
    var isDefault = true;

    switch (Data.search.toLowerCase()) {
      case "a":
      case "i":
        isDefault = false;
        break;
      default:
        break;
    }

    $("#main-word").css("cursor", isDefault ? "default" : "pointer");
  }

  //////////////////////////////////////////////////////////////////////////////
}