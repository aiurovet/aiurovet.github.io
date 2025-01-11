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

document.addEventListener("DOMContentLoaded", function() {
  // Initialize singletons
  //
  main ??= new Main();

  // Initialize the UI
  //
  main.initSize();
  main.setUser();
  main.onClickEditQuote();
});

////////////////////////////////////////////////////////////////////////////////
// Set the event handlers
////////////////////////////////////////////////////////////////////////////////

$(window).on("resize", function () {
});

////////////////////////////////////////////////////////////////////////////////

class Main {
  core = new Core();
  data = (new Data()).load();
  pref = new Pref(this.core);

  constructor() {
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

  onCheckEditQuoteFlag(jqCheck) {
    const user = this.data.getSelectedUser();

    if (!user) {
      return;
    }

    const jqEdit = jqCheck.next();
    const isChecked = jqCheck.prop("checked") ? true : false;

    jqEdit.enable(isChecked);

    if (isChecked) {
      jqEdit.postFocus();
    } else {
      jqEdit.val(null);
      $("#edit-phrase").postFocus();
    }
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

  onClickEditQuote() {
    const user = this.data.getSelectedUser();

    if (!user) {
      return;
    }

    const jqPhrase = $("#phrase");
    const that = this;

    that.pref.onClick("#edit-quote", function (event) {
      const jqEditPhrase = $("#edit-phrase");

      if (event === "before-show") {
        that.#applyEditElem($("#edit-header"), user.header);
        that.#applyEditElem($("#edit-phrase"), user.phrase);
        that.#applyEditElem($("#edit-footer"), user.footer);
        $(user.header.text ? "#edit-header" : "#edit-phrase").postFocus();
      } else if (event === "before-hide") {
        that.#acquireEditElem($("#edit-header"), user.header);
        that.#acquireEditElem($("#edit-phrase"), user.phrase);
        that.#acquireEditElem($("#edit-footer"), user.footer);
        that.data.save();
        that.setUser(user);

        var content = jqEditPhrase.val();

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
    fileFormat = Data.adjustFileFormat(fileFormat);

    const proc =
      fileFormat === Data.fileFormatJpg ? htmlToImage.toJpg :
      fileFormat === Data.fileFormatSvg ? htmlToImage.toSvg : htmlToImage.toPng;

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
    const users = this.data.getUsers();

    if (!users || !users.length) {
      return;
    }

    const that = this;
    const userNo = this.data.getSelectedUserNo();

    this.pref.onClickUser(users, userNo, Data.maxUserCount, function(jqList) {
      that.data.setSelectedUserNo(jqList.selectedItemNo);
      that.data.save();
      that.setUser();
    });
  }

  //////////////////////////////////////////////////////////////////////////////

  setUser(user) {
    user ??= this.data.getSelectedUser();

    if (!user) {
      return;
    }

    let jqElem = $("#header");
    let look = user.header;
    let text = look.text;
 
    jqElem.css(look.toStyle());
    jqElem.setVisible(text ? true : false);
    jqElem.text(text);

    jqElem = $("#quote");
    look = user.phrase;
    text = look.text;
    let style = look.toStyle();
    jqElem.css({"background": user.background.color});

    jqElem = $("#phrase");
    jqElem.css(style);
    jqElem.text(text);

    jqElem = $("#footer");
    look = user.footer;
    text = look.text;
 
    jqElem.css(look.toStyle());
    jqElem.setVisible(text ? true : false);
    jqElem.text(text);
  }

  //////////////////////////////////////////////////////////////////////////////

  #acquireEditElem(jqEdit, look) {
    look.text = jqEdit.val();
  }

  //////////////////////////////////////////////////////////////////////////////

  #applyEditElem(jqEdit, look) {
    const text = look.text;
    const hasEdit = text ? true : false;
    const jqCheck = jqEdit.prev();

    jqCheck.prop("checked", hasEdit)
    jqEdit.enable(hasEdit);
    jqEdit.val(text);
  }

  //////////////////////////////////////////////////////////////////////////////
}