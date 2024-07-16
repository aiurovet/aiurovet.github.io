////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Clipboard management
////////////////////////////////////////////////////////////////////////////////

'use strict';

////////////////////////////////////////////////////////////////////////////////

class ClipClass {
  constructor() {
    // Initialize properties
    //
    this.isAvailable = navigator.clipboard?.writeText ? true : false;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Read text from clipboard
  //////////////////////////////////////////////////////////////////////////////

  async read() {
    try {
      if (this.isAvailable) {
        return await navigator.clipboard.readText();
      }
    } catch (e) {
      Core.onError(e);
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Write text to clipboard
  //////////////////////////////////////////////////////////////////////////////

  async write(text) {
    try {
      if (this.isAvailable) {
        await navigator.clipboard.writeText(text);
      }
    } catch(e) {
      Core.onError(e);
    }
  }

  //////////////////////////////////////////////////////////////////////////////
}