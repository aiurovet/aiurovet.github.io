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

$(document).ready(function() {
  // Initialize singletons
  //
  main ??= new Main();

  // Initialize the UI
  //
  main.initSize();
  main.setUser(false);
  main.onClickEditCard();
});

////////////////////////////////////////////////////////////////////////////////
// Set the event handlers
////////////////////////////////////////////////////////////////////////////////

$(window).on("resize", function () {
});

////////////////////////////////////////////////////////////////////////////////

class Main {
  data = (new Data()).load();
  pref = new Pref(this);

  #jqSpinner = null;

  constructor() {
  }

  static breakTextAndAssign(jqSource, jqTarget, checkMarkup) {
    var content = jqSource.val();

    if (!checkMarkup || !content.hasMarkup()) {
      content = `<p>${content.toHtml().replaceAll("<br>", "</p><p>")}</p>`;
    }

    jqTarget.html(content);
  }

  //////////////////////////////////////////////////////////////////////////////

  static colorArrayToString(array) {
    return "#" +
      array[0].toString(16).padStart(2, "0") +
      array[1].toString(16).padStart(2, "0") +
      array[2].toString(16).padStart(2, "0")
    ;
  }

  static getSelectedBackFile() {
    const jqFile = $("#edit-back-file");
    const files = jqFile.length <= 0 ? null : jqFile[0].files;

    return files && (files.length > 0) ? files[0] : null;
  }

  //////////////////////////////////////////////////////////////////////////////

  initSize() {
    let user = this.data.getSelectedUser();

    if (!user) {
      return;
    }

    const jqElems = $("#card, #phrase");
    const that = this;

    this.#jqSpinner = $("#menu-size").spinner({
      isReadOnly: true,
      min: 1,
      step: 1,
      value: parseInt(user.phrase.font.size ?? User.defaultFontSize),
      onChange: function (spinner) {
        let user = that.data.getSelectedUser();

        if (!user) {
          return;
        }

        let value = `${spinner.value}pt`;
        jqElems.css("font-size", value);
        user.phrase.font.size = value;
        that.data.save();
      },
      width: "3em",
    });
  }
 
  //////////////////////////////////////////////////////////////////////////////

  onClickBrowse_BackFile() {
    $("#edit-back-file").click();
  }
 
  //////////////////////////////////////////////////////////////////////////////

  onClickChange_BackFile() {
    const jqTarget = $("#edit-back-url");
    const file = Main.getSelectedBackFile();

    if (file) {
      jqTarget.val(file.name);
    }
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

  onClickEditCard(tabNo) {
    const user = this.data.getSelectedUser();

    if (!user) {
      return null;
    }

    const jqAlignBack = $("#edit-back-align").selectAlign({
      isForImage: true,
      value: user.background.alignment.value,
      callers: $("#card")
    });

    const jqDirection = $("#edit-from-direction").selectDirection({
      value: Direction.northToSouth,
      callers: $("#card")
    });

    const jqFromRatio = $("#edit-from-ratio").spinner({
      isWrap: false,
      min: 0,
      max: 100,
      step: 1,
      value: 67,
      formatter: function(value) {
        return `${value}%`;
      }
    });

    $("#edit-back-color").val(Colors.toHex(user.background.color) );

    const jqTabCtrl = $("#edit-card-tabctrl").tabctrl({
      selectedItemNo: tabNo ?? 0, // default matter: phrase
    });

    const that = this;

/*
Background
    Style
        Color
        From (%)
        Direction (North-South, West-East, NorthWest-SouthEast, SouthWest-NorthEast, Radial)
        To Color
    Content
        URL
        Align
*/

    this.pref.onClick("#edit-card", function (event) {
      const jqEditHeader = $("#edit-header");
      const jqEditPhrase = $("#edit-phrase");
      const jqEditFooter = $("#edit-footer");

      if (event === "before-show") {
        that.#applyEditTextElem(jqEditHeader, user.header);
        that.#applyEditTextElem(jqEditPhrase, user.phrase, true);
        that.#applyEditTextElem(jqEditFooter, user.footer);

        return;
      }
      if (event === "after-show") {
        jqTabCtrl.setBounds();
        return;
      }
      if (event === "before-hide") {
        that.#acquireEditTextElem(jqEditHeader, user.header);
        that.#acquireEditTextElem(jqEditPhrase, user.phrase);
        that.#acquireEditTextElem(jqEditFooter, user.footer);

        that.setUser(true, user);

        Main.breakTextAndAssign(jqEditHeader, $("#header"));
        Main.breakTextAndAssign(jqEditPhrase, $("#phrase"));
        Main.breakTextAndAssign(jqEditFooter, $("#footer"));

        return;
      }
      if (event === "after-hide") {
        jqAlignBack?.clear();
        jqDirection?.clear();
        jqFromRatio?.clear();
        jqTabCtrl?.clear();
        return;
      }
    });

    return null;
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
/*
  onClickLookPicker(clickEvent, title) {
    let user = this.data.getSelectedUser();

    if (!user) {
      return;
    }

    var elem = clickEvent.target;
    var jqElem = $(elem);
    var id = elem.id || jqElem.parent()[0].id;

    var isBack = (id === "card");
    var isFooter = (id === "footer");
    var isHeader = (id === "header");
    var isPhrase = (id === "phrase");

    var jqLookFor =
      isBack ? $("#card") :
      isHeader ? $("#header") :
      isPhrase ? $("#phrase") :
      isFooter ? $("#footer") :
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
      {color: Main.colorArrayToString(rgba)});

    colorPicker.on("change", function (picker, color) {
      rgba = AColorPicker.parseColorToRgba(color);
      const a = rgba[3];  
      const x = (1 - a) * 255;
      const rgb = `rgb(${Math.round(x + a * rgba[0])},${Math.round(x + a * rgba[1])},${Math.round(x + a * rgba[2])})`;
      
      look.color = rgb;
      jqLookFor.css(isBack ? "background-color" : "color", rgb);
    });

    this.pref.onClick("#look-picker", function(dlgEvent) {
      if (dlgEvent === "before-show") {
        $(".ui-dialog-caption.pref.look-picker > .ui-dialog-caption-text").text(title)
      } else if (dlgEvent === "before-hide") {
        if (isBack) {
          that.#applyLookBackElem($("#card"), look);
        } else if (alignPicker && fontPicker) {
          look.font.family = fontPicker.val();
          look.alignment = new Alignment(alignPicker.val());
          that.#applyLookTextElem(jqElem.prev(), look);
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
*/
  //////////////////////////////////////////////////////////////////////////////

  onClickSave(fileFormat) {
    fileFormat = Data.adjustFileFormat(fileFormat);

    const proc =
      fileFormat === Data.fileFormatJpg ? htmlToImage.toJpg :
      fileFormat === Data.fileFormatSvg ? htmlToImage.toSvg : htmlToImage.toPng;

    proc($("#caes")[0]).then(function (dataUrl) {
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
      that.setUser(true);
    });
  }

  //////////////////////////////////////////////////////////////////////////////

  setUser(canSave, user) {
    user ??= this.data.getSelectedUser();

    if (!user) {
      return;
    }

    if (canSave) {
      this.data.save();
    }

    let jqElem = $("#header");
    let look = user.header;
    let text = look.text;
 
    jqElem.css(look.toStyle());
    jqElem.setVisible(text ? true : false);
    jqElem.text(text);

    jqElem = $("#footer");
    look = user.footer;
    text = look.text;
 
    jqElem.css(look.toStyle());
    jqElem.setVisible(text ? true : false);
    jqElem.text(text);

    look = user.phrase;
    let fontSize = look.font.size;

    $("#card").css({
      "background": user.background.color,
      "font-size": fontSize,
    });

    text = look.text;
    let style = look.toStyle();
    style["font-size"] = fontSize;
    style["margin-top"] =  user.header.text ? "0.6em" : "";
    style["margin-bottom"] = user.footer.text ? "0.75em" : "";

    jqElem = $("#phrase");
    jqElem.css(style);
    jqElem.text(text);

    this.#jqSpinner?.setValue(parseInt(fontSize));
  }

  //////////////////////////////////////////////////////////////////////////////

  #acquireEditTextElem(jqEdit, look) {
    look.text = jqEdit.val();
  }

  //////////////////////////////////////////////////////////////////////////////

  #applyEditTextElem(jqEdit, look, hasEdit) {
    const text = look.text;

    if ((hasEdit === undefined) || (hasEdit === null)) {
      hasEdit = text ? true : false;
    }

    jqEdit.val(text);
  }

  //////////////////////////////////////////////////////////////////////////////

  #applyLookBackElem(jqBack, look) {
    jqBack.css(look.toStyle());
  }

  //////////////////////////////////////////////////////////////////////////////

  #applyLookTextElem(jqText, look, jqBack) {
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