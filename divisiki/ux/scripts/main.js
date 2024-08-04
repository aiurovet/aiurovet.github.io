////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Main page
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////
// Global variables (singlwtons)
////////////////////////////////////////////////////////////////////////////////

var Core = null;
var Json = null;
var Data = null;
var Main = null;
var Pref = null;

////////////////////////////////////////////////////////////////////////////////
// Application entry point
////////////////////////////////////////////////////////////////////////////////

$(document).ready(() => {
  // Initialize global variables
  //
  Core = new CoreClass();
  Data = new DataClass();
  Json = new JsonClass();
  Main = new MainClass();
  Pref = new PrefClass();

  // Initialize the UI
  //
  Data.load();
  this.setNumber(2);
  this.setDivBy(2);
  this.setScore(0);
  //Pref.init(true);
});


////////////////////////////////////////////////////////////////////////////////
// Set the event handlers
////////////////////////////////////////////////////////////////////////////////

$(window).bind("beforeunload", async () => {
  if (!Pref) {
    return;
  }
  await Pref.onClickExit();
});

$(window).resize(() => {
  if (!Core) {
    return;
  }
  thissetNumberHeight();
});

////////////////////////////////////////////////////////////////////////////////

class MainClass {
  constructor() {
  }

  //////////////////////////////////////////////////////////////////////////////
  // Go to the menu
  //////////////////////////////////////////////////////////////////////////////

  onClickMenu() {
    Core.setPopup(true);
    Pref.onClickCanEdit();
    Pref.onClickHelp(false);
    Pref.setEditorHeight();
    Pref.resetList();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Reaction: a number is NOT divisible by given number(s)
  //////////////////////////////////////////////////////////////////////////////

  onClickNo() {
  }

  //////////////////////////////////////////////////////////////////////////////
  // Click handler to select a user
  //////////////////////////////////////////////////////////////////////////////

  onClickSetUser() {
    Core.setVisible($("#popup-user"), true, "flex");
    Core.setPopup(true);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Click handler to select a user
  //////////////////////////////////////////////////////////////////////////////

  onClickSetUserConfirm(isOK) {
    Core.setPopup(false);
    Core.setVisible($("#popup-user"), false);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Reaction: a number is divisible by given number(s)
  //////////////////////////////////////////////////////////////////////////////

  onClickYes() {
  }

  //////////////////////////////////////////////////////////////////////////////

  setDivBy(value) {
    $("#divby").text(value);
    Data.save();
  }

  //////////////////////////////////////////////////////////////////////////////

  setNumber(value) {
    $("#number").text(value);
    Data.save();
    this.setNumberHeight();
  }

  //////////////////////////////////////////////////////////////////////////////

  setNumberHeight() {
    var jqNumber = $("#number"); 
    var maxHeight = $("#action-no").innerHeight();
    var maxWidth = jqNumber.innerWidth();
    var numLen = (jqNumber.text().length || 1);
    var curWidth = ((maxWidth / numLen) * (15. / 12));

    if (curWidth > maxWidth) {
      curWidth = maxWidth;
    }

    if (curWidth > maxHeight) {
      curWidth = maxHeight;
    }

    jqNumber.css("font-size", `${curWidth}px`);
  }

  //////////////////////////////////////////////////////////////////////////////

  setScore(value) {
    $("#user").text(Data.users.getId());
    $("#score").text(value);
    Data.save();
  }

  //////////////////////////////////////////////////////////////////////////////
}