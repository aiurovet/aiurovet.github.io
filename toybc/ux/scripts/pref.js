////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
////////////////////////////////////////////////////////////////////////////////

'use strict';

////////////////////////////////////////////////////////////////////////////////

class PrefClass {
  constructor() {
  }

  //////////////////////////////////////////////////////////////////////////////
  // Get wordlists editor's jQuery element
  //////////////////////////////////////////////////////////////////////////////

  getEditor() {
    return $("#lists");
  }

  //////////////////////////////////////////////////////////////////////////////
  // Initialize preferences
  //////////////////////////////////////////////////////////////////////////////

  init(isFromUI) {
    if (isFromUI) {
      this.getEditor().val(Data.text);

      if (!Clip.isAvailable) {
        Core.setVisible($(".toolbar-pref > *:not(#superuser)"), false);
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

    var values = jqSuperUser.val().trim().toLowerCase().split(/\s+/, 2);
    jqSuperUser.val(null);

    var valueCount = values.length;

    if (valueCount <= 0) {
      return false;
    }

    var newValue = valueCount <= 1 ? "" : values[1].trim();
    newValue = newValue ? newValue[0].toLowerCase() : newValue;

    var optKey = null;

    switch (values[0]) {
      case "search":
        optKey = "Search";
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

    return true;
  }

  //////////////////////////////////////////////////////////////////////////////

  async onClickCopy() {
    Data.save();

    var jqEditor = this.getEditor();
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

    var jqEditor = this.getEditor();
    var editor = jqEditor[0];
    var before = Data.text.substring(0, editor.selectionStart);
    var after = Data.text.substring(editor.selectionEnd);

    Data.text = before + content + after;

    Data.init();
    Data.save();
    this.init(true);
    jqEditor.focus();

    alert("\nThe words were successfully pasted from the clipboard.");
  }

  //////////////////////////////////////////////////////////////////////////////

  onClickHelp(isOn) {
    Core.setVisible($("#popup-pref"), !isOn)
    Core.setVisible($("#popup-help"), isOn)
  }

  //////////////////////////////////////////////////////////////////////////////
  // Perform edit action
  //////////////////////////////////////////////////////////////////////////////

  onEditAction(action) {
    this.setFocusToEditor();
    document.execCommand(action, false, null);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Select another list and adjust all related data
  //////////////////////////////////////////////////////////////////////////////

  resetList(isFromUi) {
    var oldData = new DataClass(Data);
    var selectionStart = undefined;

    if (isFromUi) {
      var jqEditor = this.getEditor();
      Data.text = jqEditor.val();
      selectionStart = jqEditor[0].selectionStart;
    }

    Data.init(undefined, undefined, undefined, isFromUi, selectionStart);

    if (!Data.equals(oldData)) {
      Data.save();
    }

    Core.setWordNo(0);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Save the data and preferences to the application storage
  //////////////////////////////////////////////////////////////////////////////

  async saveData() {
    Data.save(false);
    await Clip.write(Data.text);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Set focus to the editor element
  //////////////////////////////////////////////////////////////////////////////

  setFocusToEditor() {
    this.getEditor().focus();
  }

  //////////////////////////////////////////////////////////////////////////////
}