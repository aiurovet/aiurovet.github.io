////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Returns max char width assuming the font is fixed width (monospace)
////////////////////////////////////////////////////////////////////////////////

function getMaxCharWidth() {
  var jqFull = $(window);
  var maxWidth = jqFull.width();
  var maxCharWidth = Math.floor(maxWidth / MaxTextLen);
  var maxCharHeight = parseInt(jqFull.height() * 0.40);

  return maxCharWidth <= maxCharHeight ? maxCharWidth : maxCharHeight;
}

////////////////////////////////////////////////////////////////////////////////
// Set the number of words in the current list as well as the maximum word len
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////

function setListNo(listNo, isFromUI) {
  var oldDataStr = JSON.stringify(Data);

  ListNo = listNo;

  if (isFromUI) {
    Data.KindList[ListNo] = $(`#kind${ListNo}`).val();
    Data.WordList[ListNo] = $(`#wlst${ListNo}`).val().split(/\s*,\s*/);
    Data.Options.ListNo = ListNo;
    Data.Options.IsExportAlways = $("#always").prop("checked");
  }

  var newDataStr = JSON.stringify(Data);
  Data.Options.IsChanged = newDataStr !== oldDataStr;

  if (Data.Options.IsChanged) {
    savePref();
  }

  var curWordList = Data.WordList[ListNo];

  WordCount = curWordList.length;
  MaxTextLen = 0;

  for (var i = 0; i < WordCount; i++) {
    var curTextLen = curWordList[i].length;

    if (MaxTextLen < curTextLen) {
      MaxTextLen = curTextLen;
    }
  }

  $(".kinr").prop("checked", false);
  $(`.kinr[value='${ListNo}']`).prop("checked", true);

  setWordNo(0);
}

////////////////////////////////////////////////////////////////////////////////
// Switch views from main to preferences and back
////////////////////////////////////////////////////////////////////////////////

function setPopup(isVisible) {
  setVisible($(".popup-container"), isVisible);
}

////////////////////////////////////////////////////////////////////////////////
// Change visibility status
////////////////////////////////////////////////////////////////////////////////

function setVisible(jqElem, isVisible, style) {
  jqElem.css("display", isVisible ? style ?? "block" : "none");
}

////////////////////////////////////////////////////////////////////////////////
// Calculates max char width, sets font size and text
////////////////////////////////////////////////////////////////////////////////

function setWord(text) {
  var maxCharWidth = getMaxCharWidth();

  if (maxCharWidth > 0) {
    $(".main-word").css("font-size", `${maxCharWidth}px`);
  }

  $("#main-word").text(text);
}

////////////////////////////////////////////////////////////////////////////////
// Sets the word from the list by its number
////////////////////////////////////////////////////////////////////////////////

function setWordNo(wordNo) {
  if (WordCount <= 0) {
    return;
  }

  if (wordNo < 0) {
    wordNo = WordCount - 1;
  }

  if (wordNo >= WordCount) {
    wordNo = 0;
  }

  WordNo = wordNo;

  setWord(Data.WordList[ListNo][WordNo]);
}

////////////////////////////////////////////////////////////////////////////////
