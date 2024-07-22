////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

const MainToolFontRatio = 0.50;
const MaxCharHeightRatio = 0.60;
const MinMainToolFontSize = 32;

////////////////////////////////////////////////////////////////////////////////

class CoreClass {
  constructor() {
  }

  //////////////////////////////////////////////////////////////////////////////
  // Get wordlists editor's jQuery element with or without an extra selector
  //////////////////////////////////////////////////////////////////////////////

  getEditor(extraSelector) {
    var fullSelector = "#lists";

    if (extraSelector) {
      fullSelector = `${fullSelector}:${extraSelector}`
    }

    return $(fullSelector);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Standard error handler
  //////////////////////////////////////////////////////////////////////////////

  onError(e, message) {
    alert(message ?? e.message);

    if (e) {
      throw e;
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Set focus to the editor element
  //////////////////////////////////////////////////////////////////////////////

  setEditorSelection(start, end) {
    var editor = this.getEditor()[0];

    if ((start !== undefined) && (start !== null)) {
      editor.selectionStart = start;
    }

    if ((end !== undefined) && (end !== null)) {
      editor.selectionEnd = end;
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Set focus to the editor element
  //////////////////////////////////////////////////////////////////////////////

  setFocusToEditor() {
    this.getEditor().focus();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Switch views from main to preferences and back
  //////////////////////////////////////////////////////////////////////////////

  setPopup(isVisible) {
    $("#canedit").prop("checked", false);
    this.setVisible($(".popup-container"), isVisible);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Change visibility status
  //////////////////////////////////////////////////////////////////////////////

  setVisible(jqElem, isVisible, style) {
    jqElem.css("display", isVisible ? style ?? "block" : "none");
  }

  //////////////////////////////////////////////////////////////////////////////
  // Calculates max char width, sets font size and text
  //////////////////////////////////////////////////////////////////////////////

  setWord(text) {
    var maxCharWidth = this._getMaxCharWidth();

    if (maxCharWidth > 0) {
      var mainToolFontSize = $(".main-tool:first").width();
      var maxMainToolFontSize = maxCharWidth * MainToolFontRatio;

      if (mainToolFontSize > maxMainToolFontSize) {
        mainToolFontSize = maxMainToolFontSize;
      }

      if (mainToolFontSize < MinMainToolFontSize) {
        mainToolFontSize = MinMainToolFontSize;
      }

      $(".main-tool").css("font-size", `${mainToolFontSize}px`);
      $(".main-word").css("font-size", `${maxCharWidth}px`);
    }

    $("#main-word").text(text);

    var selection = Data.getSelectionFromListNo();
    var editor = this.getEditor()[0];

    editor.selectionStart = selection.start;
    editor.selectionEnd = selection.end;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Sets the word from the list by its number
  //////////////////////////////////////////////////////////////////////////////

  setWordNo(wordNo) {
    var wordCount = Data.list.length;

    if (wordCount <= 0) {
      Data.wordNo = 0;
      this.setWord("");
      return;
    }

    if (wordNo < 0) {
      wordNo = wordCount - 1;
    }

    if (wordNo >= wordCount) {
      wordNo = 0;
    }

    Data.wordNo = wordNo;

    this.setWord(Data.list[Data.wordNo]);
  }

  //
  // PRIVATE
  //

  //////////////////////////////////////////////////////////////////////////////
  // Returns max char width assuming the font is fixed width (monospace)
  //////////////////////////////////////////////////////////////////////////////

  _getMaxCharWidth() {
    var jqFull = $(window);
    var maxWidth = jqFull.width();
    var maxHeight = jqFull.height();
    var maxCharWidth = Math.floor(maxWidth / Data.maxWordLength);
    var maxCharHeight = maxHeight * MaxCharHeightRatio;

    return maxCharWidth <= maxCharHeight ? maxCharWidth : maxCharHeight;
  }

  //////////////////////////////////////////////////////////////////////////////
}