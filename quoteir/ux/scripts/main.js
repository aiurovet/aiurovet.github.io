////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Main page
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////
// Global variables (singletons)
////////////////////////////////////////////////////////////////////////////////

var main = null;

////////////////////////////////////////////////////////////////////////////////
// Application entry point
////////////////////////////////////////////////////////////////////////////////

$(document).ready(() => {
  // Initialize singletons
  //
  main ??= new Main();

  // Initialize the UI
  //
  main.initSize();
  main.setUser();
  main.onClickEdit();
});

////////////////////////////////////////////////////////////////////////////////
// Set the event handlers
////////////////////////////////////////////////////////////////////////////////

$(window).resize(function () {
});

////////////////////////////////////////////////////////////////////////////////

class Main {
  static defaultFileFormat = Main.fileFormatPng;
  static fileFormatJpeg = "jpeg";
  static fileFormatJpg = "jpg";
  static fileFormatPng = "png";
  static fileFormatSvg = "svg";

  core = new Core();
  data = (new Data()).load();
  pref = new Pref();

  constructor() {
  }

  //////////////////////////////////////////////////////////////////////////////

  static adjustFileFormat(format) {
    var formatLower = format?.toLowerCase() ?? "";

    switch (formatLower) {
      case Main.fileFormatJpeg:
        return Main.fileFormatJpg;
      case Main.fileFormatJpg:
          case Main.fileFormatSvg:
        return formatLower;
      default:
        return Main.fileFormatPng;
    }
  }

  //////////////////////////////////////////////////////////////////////////////

  initSize() {
    const jqQuote = $("#quote");

    $("#menu-size").spinner({
      isReadOnly: true,
      min: 1,
      step: 1,
      value: parseInt(Math.round(parseFloat(jqQuote.css("font-size")) * 3 / 4)),
      onChange: function (spinner) {
        jqQuote.css("font-size", `${spinner.value}pt`);
      },
      width: "3em",
    });
  }

  //////////////////////////////////////////////////////////////////////////////

  onClickAny() {
    alert("TBA");
  }
 
  //////////////////////////////////////////////////////////////////////////////

  onClickCopy() {
    createEmptyDialog().msgbox({
      title: MsgBoxTitle_Information,
      buttons: MsgBoxButtons_OK,
      message: "Configuration has been copied to the clipboard",
      handler: null
    });
  }

  //////////////////////////////////////////////////////////////////////////////

  onClickEdit() {
    const jqPhrase = $("#phrase");
    const that = this;

    that.pref.onClick("#edit-phrase", function (event) {
      const jqEdit = $("#edit-phrase-value");

      if (event === "before-show") {
        jqEdit.text(jqPhrase.text());
      }
      else if (event === "after-show") {
        jqEdit.focus();
      }
      else if (event === "before-hide") {
        var content = jqEdit.val();

        if (!content.hasMarkup()) {
          content = `<p>${content.toHtml().replaceAll("<br>", "</p><p>")}</p>`;
        }

        jqPhrase.html(content);
      }
    });
  }

  //////////////////////////////////////////////////////////////////////////////

  onClickHelp(anchor, focusAfterSelector) {
    this.pref.onClick("#help", function (event) {
      if (event === "after-show") {
        let jqElem = anchor ? $(`#${anchor}`) : null;

        if (jqElem && jqElem.length) {
          jqElem.scrollIntoView();
        }
      } else if (event === "after-hide") {
        if (focusAfterSelector) {
          $(focusAfterSelector).focus();
        }
      }
    });
  }

  //////////////////////////////////////////////////////////////////////////////
  // Customised Example 2 at
  // https://www.tutorialspoint.com/how-to-print-a-page-using-jquery
  //////////////////////////////////////////////////////////////////////////////
  
  onClickHelpPrint() {
    var newWnd = window.open("", "print-window");
    var newDoc = newWnd.document;

    newDoc.open();

    newDoc.write(`
      <html>
        <head>
          <style>
            .para-help {
              margin: 1rem 0 0 0;
            }
            .ui-dialog-caption {
              display: flex;
              flex-direction: row;
            }
            .ui-dialog-icon, #help-print {
              display: none !important;
            }
          </style>
        </head>
        <body onload="window.print();">
          ${$(".ui-dialog-content.help").html()}
          </body>
        </html>`);

    newDoc.close();

    postAction(function() {
      newWnd.close();
    });
  }

  //////////////////////////////////////////////////////////////////////////////

  onClickSave(fileFormat) {
    fileFormat = Main.adjustFileFormat(fileFormat);

    const proc =
      fileFormat === Main.fileFormatJpg ? htmlToImage.toJpg :
      fileFormat === Main.fileFormatSvg ? htmlToImage.toSvg : htmlToImage.toPng;
    
    // html2canvas(elem, options).then((canvas) => {   
    //   const dataUrl = canvas.toDataURL();

    proc($("#quote")[0]).then(function (dataUrl) {
      const dt = new Date().toLocalDate().getDateParts();
      const link = document.createElement("a");

      link.href = dataUrl;
      link.download = `quote_${dt.year}-${dt.month}-${dt.day}_${dt.hours}-${dt.minutes}-${dt.seconds}.${fileFormat}`;

      link.click();
    });
  }

  //////////////////////////////////////////////////////////////////////////////

  onClickUser() {
    let users = this.data.getUsers();

    if (!users || !users.length) {
      return;
    }

    var that = this;

    this.pref.onClickUser(
      users, this.data.getSelectedUserNo(), Data.maxUserCount, function(jqList) {
        that.data.setSelectedUserNo(jqList.selectedItemNo);
        that.data.save();
        that.setUser();
      });
  }

  //////////////////////////////////////////////////////////////////////////////

  setUser() {
    let user = this.data.getSelectedUser();

    if (!user) {
      return;
    }

    //$("#user").text(user.userId);
 
    let jqFooter = $("#footer");
    let isVisible = user.userId && user.userId != User.defaultUserId;
 
    this.core.setVisible(jqFooter, isVisible);
    jqFooter.text(isVisible ? user.userId : null);
  }

  //////////////////////////////////////////////////////////////////////////////
}