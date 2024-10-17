////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Message Box
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////
// Constants: sets of buttons
////////////////////////////////////////////////////////////////////////////////

var MsgBoxButtons_OK = ["OK"];
var MsgBoxButtons_OKCancel = ["OK", "Cancel"];
var MsgBoxButtons_YesNo = ["Yes", "No"];
var MsgBoxButtons_YesNoCancel = ["Yes", "No", "Cancel"];

////////////////////////////////////////////////////////////////////////////////
// Constants: color themes
////////////////////////////////////////////////////////////////////////////////

var MsgBoxTheme_Error = "err";
var MsgBoxTheme_Information = "inf";
var MsgBoxTheme_Warning = "wrn";

////////////////////////////////////////////////////////////////////////////////
// Constants: sets of titles
////////////////////////////////////////////////////////////////////////////////

var MsgBoxTitle_Error = "Error";
var MsgBoxTitle_Information = "Information";
var MsgBoxTitle_Warning = "Warning";

////////////////////////////////////////////////////////////////////////////////

$.fn.msgbox = function(options) {

  //////////////////////////////////////////////////////////////////////////////
  // Full reset
  //////////////////////////////////////////////////////////////////////////////

  this.init = function(options) {
    if ((options === undefined) || (options === null)) {
      this.selectedNo = null;
      this.title = null;
      return;
    }

    this.buttons = options?.buttons ?? MsgBoxButtons_OK;
    this.handler = options?.handler;
    this.message = options?.message ?? "";
    this.theme = options?.theme ?? MsgBoxTheme_Information;

    this.selectedNo = this.buttons.length - 1;

    this.title = options?.title ??
        (this.theme == MsgBoxTheme_Error ? MsgBoxTitle_Error :
         this.theme == MsgBoxTheme_Warning ? MsgBoxTitle_Warning :
         MsgBoxTitle_Information);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Activate the dialog
  //////////////////////////////////////////////////////////////////////////////

  this.show = function() {
    var that = this;

    let buttons = "";
    let filler = `\n<div class="ui-dialog-filler"></div>`;

    for (let button of this.buttons) {
      buttons += filler;
      buttons += `\n<div class="ui-msgbox-button ${this.theme}">${button.toHtml()}</div>`;
    }

    buttons += filler;

    this.dialog({
      content: `
        <div class="ui-dialog-content msgbox ${this.theme}">
          <div class="ui-dialog-caption msgbox ${this.theme}">
            <h4>${that.title.toHtml()}</h4>
            <div class="ui-dialog-filler"></div>
            <div class="ui-dialog-icon close msgbox ${this.theme}"></div>
          </div>
          <div class="ui-dialog-client msgbox message ${this.theme}">
            <span class="ui-msgbox-message ${this.theme}">${that.message.toHtml()}</span>
          </div>
          <div class="ui-dialog-client msgbox buttons ${this.theme}">
            ${buttons}
          </div>
        </div>
      `,
      handler: function (event) {
        if (event === "before-show") {
          that.find(".ui-msgbox-button").each(function (index) {
            $(this).on("click", function() {
              that.selectedNo = index;
              that.close();
            });
          });
        }
        else if (event === "after-hide") {
          if (that.handler) {
            that.handler(that.selectedNo);
          }
        }
      }
    });
  }

  //////////////////////////////////////////////////////////////////////////////
  // Entry point
  //////////////////////////////////////////////////////////////////////////////

  this.init(options);
  this.show();
}

////////////////////////////////////////////////////////////////////////////////