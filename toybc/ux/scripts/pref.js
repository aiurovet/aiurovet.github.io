////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// Initialize preferences UI
////////////////////////////////////////////////////////////////////////////////

function initPref(jsonData) {
  initData(jsonData);

  for (var i = 0; i < KindCount; i++) {
    $(`#kind${i}`).val(Data.KindList[i]);
    $(`#list${i}`).val(Data.WordList[i].join(", "));
  }

  if (CanExport) {
    $("#aways").prop("checked", Data.Options.IsExportAlways);
  } else {
    setVisible($(".pref.toolbar > *:not(#superuser)"), false);
  }

  setListNo(Data.Options.ListNo ?? 0);
  onClickAlways(false);
}

///////////////////////////////////////////////////////////////////////////////
// Load the data and preferences from the application storage
////////////////////////////////////////////////////////////////////////////////

function loadPref() {
  var content = localStorage[AppName];

  if (content) {
    Data = JSON.parse(localStorage[AppName]);
  } else {
    savePref();
  }
}

////////////////////////////////////////////////////////////////////////////////

function onBlurEdit(listNo) {
  setListNo(listNo, true);
}

///////////////////////////////////////////////////////////////////////////////
// Aquire the superuser value from the UI
////////////////////////////////////////////////////////////////////////////////

function onBlurSuperUser() {
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

  var oldValue = Data.Options[optKey].toLowerCase();

  if (newValue) {
    if (oldValue.startsWith(newValue)) {
      return false;
    }
  } else if (!oldValue) {
    return false;
  }

  Data.Options[optKey] = newValue;
  Data.Options.IsChanged = true;

  return true;
}

////////////////////////////////////////////////////////////////////////////////

function onClickAlways(isFromUI) {
  var jqAlways = $("#always"); 
  
  if (isFromUI) {
    Data.Options.IsExportAlways = jqAlways.prop("checked");
    Data.Options.IsChanged = true;
    savePref();
  } else {
    jqAlways.prop("checked", Data.Options.IsExportAlways)
  }

  var jqExport = $("#export");

  if (Data.Options.IsExportAlways) {
    jqExport.removeClass("underline");
  } else {
    jqExport.addClass("underline");
  }
}

////////////////////////////////////////////////////////////////////////////////

async function onClickExit() {
  if (onBlurSuperUser() || Data.Options.IsChanged) {
    Data.Options.IsChanged = false;
    await savePrefEx();
  }

  setModal(false);
}

////////////////////////////////////////////////////////////////////////////////

async function onClickExport() {
  savePref();
  await saveTo();
  alert("\nThe preferences were copied to the clipboard.\n\nYou can paste those wherever you like and save.");
}

////////////////////////////////////////////////////////////////////////////////

async function onClickImport() {
  var content = await loadFrom();

  if (!content) {
    return;
  }

  initPref(content);
  savePref();
}

////////////////////////////////////////////////////////////////////////////////

function onClickHelp(isOn) {
  setVisible($("#pref"), !isOn)
  setVisible($("#tutor"), isOn)
}

////////////////////////////////////////////////////////////////////////////////

function onFocusEdit(listNo) {
  $($("[name='kind']")[listNo]).prop("checked", true);
  setListNo(listNo);
}

////////////////////////////////////////////////////////////////////////////////

function onFocusRadio(listNo) {
  $(`#kind${listNo}`).focus();
  setListNo(listNo);
}

///////////////////////////////////////////////////////////////////////////////
// Save the data and preferences to the application storage
////////////////////////////////////////////////////////////////////////////////

function savePref() {
  localStorage[AppName] = JSON.stringify(Data);
}

///////////////////////////////////////////////////////////////////////////////
// Save the data and preferences to the application storage
////////////////////////////////////////////////////////////////////////////////

async function savePrefEx() {
  Data.Options.IsChanged = false;
  savePref();

  if (CanExport && Data.Options.IsExportAlways) {
    await saveTo();
  }
}

////////////////////////////////////////////////////////////////////////////////