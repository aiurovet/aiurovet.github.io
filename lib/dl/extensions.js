////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Extensions for various classes
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

var HasMarkupFullRegExp = /^\s*<.*>\s*$/s;
var HasMarkupPartRegExp = /^\s*<.*>\s*$|<\/|\/>|/s;
var RegExpEscapeRegExp = new RegExp("[.*+?^${}()\\|\\[\\]\\\\]", "g");
var TrimSpacesRegExp = new RegExp("^[ ]+|[ ]+$", "g");

////////////////////////////////////////////////////////////////////////////////
// Get parts of date/time as strings or numbers
////////////////////////////////////////////////////////////////////////////////

Date.prototype.getDateParts = function (asNumeric) {
  var year = this.getFullYear();
  var month = this.getMonth() + 1;
  var day = this.getDate();
  var hours = this.getHours();
  var minutes = this.getMinutes();
  var seconds = this.getSeconds();
  var milliseconds = this.getMilliseconds();

  return {
    year: asNumeric ? year : year.toString(),
    month: asNumeric ? month : ((month < 10 ? "0" : "") + month.toString()),
    day: asNumeric ? day : ((day < 10 ? "0" : "") + day.toString()),
    hours: asNumeric ? hours : ((hours < 10 ? "0" : "") + hours.toString()),
    minutes: asNumeric ? minutes : ((minutes < 10 ? "0" : "") + minutes.toString()),
    seconds: asNumeric ? seconds : ((seconds < 10 ? "0" : "") + seconds.toString()),
    milliseconds: asNumeric ? milliseconds : (((milliseconds < 10 ? "00" : milliseconds < 100 ? "0" : "") + milliseconds.toString())),
  };
};

////////////////////////////////////////////////////////////////////////////////
// Convert universal date/time to the local one
////////////////////////////////////////////////////////////////////////////////

Date.prototype.toLocalDate = function () {
  return new Date(this.getTime());
};

////////////////////////////////////////////////////////////////////////////////
// Escape RegExp-special characters in a string
////////////////////////////////////////////////////////////////////////////////

RegExp.escape = (input) => {
  return input ? input.replaceAll(RegExpEscapeRegExp, "\\$&") : input;
};

////////////////////////////////////////////////////////////////////////////////
// Check (the entire or some part of) text contains markup
////////////////////////////////////////////////////////////////////////////////

String.prototype.hasMarkup = function (checkEntire) {
  if (!this) {
    return false;
  }

  return checkEntire
    ? HasMarkupFullRegExp.test(this)
    : HasMarkupPartRegExp.test(this);
};

////////////////////////////////////////////////////////////////////////////////
// Trim space characters only
////////////////////////////////////////////////////////////////////////////////

String.prototype.trimSpaces = function () {
  return this ? this.replaceAll(TrimSpacesRegExp, "") : this;
};

////////////////////////////////////////////////////////////////////////////////