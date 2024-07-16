////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Class to manage basic JSON operations
////////////////////////////////////////////////////////////////////////////////

'use strict';

////////////////////////////////////////////////////////////////////////////////

class JsonClass {
  constructor() {
    // Initialize constants
    //
    this.isValidRegex = new RegExp("^\\s*\\[.*\\]\\s*$|^\\s*\\{.*\\}\\s*$");

    // Initialize properties
    //
    this.lastError = null;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Deserializer, returns parsed object or null
  //
  // If extra arguments passed, will those as keys to check.
  // If at least one of those is not present, will return null
  //////////////////////////////////////////////////////////////////////////////

  fromString(content /* , keys_that_should_be_present[] */) {
    // If the content is empty, return null
    //
    if (!content) {
      return null;
    }

    // If the content doesn't start/end with braces or square brackets, return null
    //
    if (!(this.isValidRegex.test(content))) {
      return null;
    }

    try {
      // Parse the content
      //
      var data = JSON.parse(content);

      // If no more arguments passed, return the parsed JSON
      //
      var argc = arguments.length;

      if (argc <= 1) {
        return data;
      }

      // Loop through the rest of arguments if at least one of
      // those is not found as a key, return null
      //
      for (var i = 1; i < argc; i++) {
        if (!(arguments[i] in data)) {
          return null;
        }
      }

      // Success
      //
      return data;
    } catch (e) {
      // Keep the actual exception just in case and return null silently
      //
      this.lastError = e;
      return null;
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Serializer, with extra arguments meaning keys to exclude
  //////////////////////////////////////////////////////////////////////////////

  toString(data /* , keys_that_should_be_skipped[] */) {
    // When the data is null or undefined, return null
    //
    if ((data === undefined) || (data === null)) {
      return null;
    }

    // When no extra argument passed, serialize the data and return
    //
    if (arguments.length <= 1) {
      return JSON.stringify(data);
    }

    // When extra argument(s) passed, serialize the data skipping
    // extra arguments as keys, and return
    //
    var args = Array.from(arguments);

    return JSON.stringify(data, (key, value) =>
      args.indexOf(key) <= 0 ? value : undefined
    );
  }

  //////////////////////////////////////////////////////////////////////////////
}