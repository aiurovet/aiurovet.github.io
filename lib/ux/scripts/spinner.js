////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Spinner control
////////////////////////////////////////////////////////////////////////////////

"use strict";

$.fn.spinner = function(options) {
  let _jqNext = null;
  let _jqPrev = null;
  let _jqValue = null;

  //////////////////////////////////////////////////////////////////////////////
  // Constants
  //////////////////////////////////////////////////////////////////////////////

  this.defaultDelayTime = 300;
  this.defaultRepeatTime = 50;

  //////////////////////////////////////////////////////////////////////////////
  // Destructor
  //////////////////////////////////////////////////////////////////////////////

  this.clear = function() {
    this.initData();
    this.initUI();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Full reset
  //////////////////////////////////////////////////////////////////////////////

  this.init = function(options) {
    this.initData(options);
    this.initUI(options);
    this.update();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Initialize properties according to the options passed
  //////////////////////////////////////////////////////////////////////////////

  this.initData = function(options) {
    this.values = options?.values ?? null;
    this.formatter = options?.formatter;

    this.isList = this.values !== null && Array.isArray(this.values);
    this.isWrap = options?.isWrap ?? false;
  
    if (this.isList) {
      this.decimals = 0;
      this.min = 0;
      this.max = this.values.length - 1;
      this.step = 1;
      this.value = options?.value ?? null;

      if (this.value === null) {
        this.index = this.min;
      } else {
        this.index = this.values.indexOf(this.value);

        if (this.index > this.max) {
          this.index = this.max;
        }
        if (this.index < this.min) {
          this.index = this.min;
        }
      }

      this.value = this.values[this.index];
    } else {
      this.index = null;
      this.decimals = options?.decimals ?? 0;
      this.min = options?.min ?? null;
      this.max = options?.max ?? null;
      this.step = options?.step ?? Math.pow(10, -this.decimals);
      this.values = null;
      this.value = options?.value ?? this.min ?? 0;

      if ((this.max !== null) && (this.value > this.max)) {
        this.value = this.max;
      }
      if ((this.min !== null) && (this.value < this.min)) {
        this.value = this.min;
      }
    }
  
    this.isWrap = options?.isWrap !== false;

    this.delayTime = options?.delayTime ?? this.defaultDelayTime;
    this.repeatTime = options?.repeatTime ?? this.defaultRepeatTime;
  
    this.delayTimerId = null;
    this.repeatTimerId = null;
  
    this.isInteger = Number.isInteger(this.min) && Number.isInteger(this.max) && Number.isInteger(this.step);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Create jQuery elements and event handlers
  //////////////////////////////////////////////////////////////////////////////

  this.initUI = function(options) {
    this.empty();

    if ((options === undefined) || (options === null)) {
      _jqNext = null;
      _jqPrev = null;
      _jqValue = null;
      return;
    }

    let less = this.isList ? "prev" : "less";
    let more = this.isList ? "next" : "more";
    let readonly = this.isList ? "readonly" : "";
    let width = options?.width ?? "auto";

    this.append($(`
      <div class="ui-spinner-${less}"></div>
      <input class="ui-spinner-value" style="font-size: inherit; width: ${width};" ${readonly} type="text">
      <div class="ui-spinner-${more}"></div>
    `));
  
    let children = this.children();
    _jqNext = children.eq(2);
    _jqPrev = children.eq(0);
    _jqValue = children.eq(1);
  
    let that = this;
  
    _jqPrev
      .on("mousedown", function() {that.onClickPrev(true);})
      .on("mouseup", function() {that.onClickPrev(false);});
  
    _jqValue
      .on("blur", function() {that.onBlur();});
  
    _jqNext
      .on("mousedown", function() {that.onClickNext(true);})
      .on("mouseup", function() {that.onClickNext(false);});
  }

  //////////////////////////////////////////////////////////////////////////////
  // Event handler: when a user changed the value and left the input box
  //////////////////////////////////////////////////////////////////////////////

  this.onBlur = function() {
    let text = this.isList ? _jqValue.text() : _jqValue.val();
    this.value = text ? (this.isInteger ? parseInt(text) : parseFloat(text)) : 0;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Event handler: when a user clicked the "increase" element
  //////////////////////////////////////////////////////////////////////////////

  this.onClickNext = function(isDown) {
    if (isDown) {
      this.start(this.step);
    } else {
      this.stop();
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Event handler: when a user clicked the "decrease" element
  //////////////////////////////////////////////////////////////////////////////

  this.onClickPrev = function(isDown) {
    if (isDown) {
      this.start(-this.step);
    } else {
      this.stop();
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Stop the existing timer (if present) for the long-click delay and repeats,
  // and start the new one
  //////////////////////////////////////////////////////////////////////////////

  this.start = function(step) {
    this.stop();
    this.update(step);

    let that = this;

    this.delayTimerId = setTimeout(function () {
      that.repeatTimerId = setInterval(function () {
        that.update(step);
      }, that.defaultRepeatTime);
    }, this.defaultDelayTime);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Stop the existing timers for the long-click delay and repeats
  //////////////////////////////////////////////////////////////////////////////

  this.stop = function() {
    if (this.repeatTimerId) {
      clearInterval(this.repeatTimerId);
      this.repeatTimerId = null;
    }
    if (this.delayTimerId) {
      clearTimeout(this.delayTimerId);
      this.delayTimerId = null;
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Change the value according to the step, then change the text and update UI
  //////////////////////////////////////////////////////////////////////////////

  this.update = function(step) {
    let newData = (this.isList ? this.index : (this.value ?? 0)) + (step ?? 0);

    if ((this.max !== null) && (newData > this.max)) {
      newData = this.isWrap ? this.min : this.max;
    }

    if ((this.min !== null) && (newData < this.min)) {
      newData = this.isWrap ? this.max : this.min;
    }

    if (this.isList) {
      this.index = newData;
      this.value = this.values[newData];
    } else {
      this.value = newData;
    }

    let text;

    if (this.formatter) {
      text = this.formatter(this.value);
    } else if (this.isList) {
      text = this.value;
    } else {
      text = Number(newData).toFixed(this.decimals)
    }

    _jqValue.val(text);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Entry point
  //////////////////////////////////////////////////////////////////////////////

  this.init(options);
}

////////////////////////////////////////////////////////////////////////////////