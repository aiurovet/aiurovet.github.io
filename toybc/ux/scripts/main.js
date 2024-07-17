////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Main page
////////////////////////////////////////////////////////////////////////////////

'use strict';

////////////////////////////////////////////////////////////////////////////////
// Global variables (singlwtons)
////////////////////////////////////////////////////////////////////////////////

var Clip = null;
var Core = null;
var Json = null;
var Data = null;
var Main = null;
var Pref = null;

////////////////////////////////////////////////////////////////////////////////
// Application enrty point
////////////////////////////////////////////////////////////////////////////////

$(document).ready(() => {
  // Initialize global variables
  //
  Clip = new ClipClass();
  Core = new CoreClass();
  Json = new JsonClass();
  Data = (new DataClass()).load();
  Main = new MainClass();
  Pref = new PrefClass();

  // Initialize the UI
  //
  Core.setWordNo(Data.wordNo);
  Data.load();
  Pref.init(true);
});


////////////////////////////////////////////////////////////////////////////////
// Set the event handlers
////////////////////////////////////////////////////////////////////////////////

$(window).bind("beforeunload", async () => {
  await Pref.onClickExit();
});

$(window).resize(() => {
  Main.setEditorHeight();
  Core.setWordNo(Data.wordNo);
});

////////////////////////////////////////////////////////////////////////////////

class MainClass {
  constructor() {
  }

  //////////////////////////////////////////////////////////////////////////////
  // Get the dynamic max height of the editor element
  //////////////////////////////////////////////////////////////////////////////

  setEditorHeight() {
    var jqSuper = $("#superuser");
    var offset = jqSuper.offset().top + jqSuper.outerHeight();
    var height = `calc(100% - 0rem - ${offset}px)`;

    Core.getEditor().css("height", height);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Go to the first word
  //////////////////////////////////////////////////////////////////////////////

  onClickFirstWord() {
    setWordNo(0);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Go to the last word
  //////////////////////////////////////////////////////////////////////////////

  onClickLastWord() {
    setWordNo(-1);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Go to the menu
  //////////////////////////////////////////////////////////////////////////////

  onClickMenu() {
    Core.setPopup(true);
    Pref.onClickHelp(false);
    this.setEditorHeight();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Go to the next word
  //////////////////////////////////////////////////////////////////////////////

  onClickNextWord() {
    Core.setWordNo(Data.wordNo + 1);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Go to the previous word
  //////////////////////////////////////////////////////////////////////////////

  onClickPrevWord() {
    Core.setWordNo(Data.wordNo - 1);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Search selected word depending on options (all, images only, nothing)
  //////////////////////////////////////////////////////////////////////////////

  onClickWord() {
    var mode = Data.search?.trim();

    if (!mode) {
      return;
    }

    var word = $("#main-word").text().toLowerCase();

    try {
      search.search(word);
    } catch (e) {
      var encoded = encodeURIComponent(word);
      window.open(`https://www.google.com/search?q=${encoded}`);
    }
  }

  //////////////////////////////////////////////////////////////////////////////
}