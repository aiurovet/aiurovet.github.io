////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
//
// Manage the application data and preferences
////////////////////////////////////////////////////////////////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////

class DataClass {
  constructor(that) {
    // Initialize constants
    //
    if (that) {
      return this.init(that.text, that.listNo, that.search, that.isChanged);
    }

    this.appName = "tapbc";
    this.version = "0.4.0";

    this.keyPref = this.appName + "_pref";
    this.keyText = this.appName + "_text";

    this.wordSeparator = ",";
    this.listSeparator = "\n";

    this.multipleListSeparatorsRegex = new RegExp("[\\r\\n]{2,}", "g");
    this.paddedWordSeparatorsRegex = new RegExp(`(\\s*${this.wordSeparator}\\s*)+`, "g");
    this.spacesPattern = "\\s+";
    this.spacesRegex = new RegExp(this.spacesPattern, "g");

    // Initialize the properties
    //
    this.maxWordLength = 0;
    this.wordNo = 0;
    this.init("", -1, "", false, false, null);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Delete all saved data
  //////////////////////////////////////////////////////////////////////////////

  drop() {
    delete localStorage[this.keyPref];
    delete localStorage[this.keyText];
    this.text = this._getDefaultText();
    this.listNo = 0;
    this.search = "";
  }

  //////////////////////////////////////////////////////////////////////////////
  // Compare two objects and return true or false
  //////////////////////////////////////////////////////////////////////////////

  equals(that) {
    return (this.isChanged && !that.isChanged) ||
           (!this.isChanged && that.isChanged) ||
           (this.listNo != that.listNo) ||
           (this.search != that.search) ||
           (this.text != that.text);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Find selection from listNo
  //////////////////////////////////////////////////////////////////////////////

  getSelectionFromListNo() {
    if (!this.text || !this.list || (this.list.length <= 0)) {
      return {start: 0, end: 0};
    }

    var findText = this.list.join("\x01").replaceAll("\t", " ");
    findText = RegExp.escape(findText);
    findText = findText.replaceAll(this.spacesRegex, this.spacesPattern).replaceAll("\x01", "\\s*,\\s*");
    var findRegex = new RegExp(findText, "g");

    var match = findRegex.exec(this.text);

    if (!match) {
      return {start: null, end: null};
    }

    return {
      start: findRegex.lastIndex - match[0].length,
      end: findRegex.lastIndex
    };
  }

  //////////////////////////////////////////////////////////////////////////////
  // Explicit initialization, mainly for calls from the UI
  // Returns this object
  //////////////////////////////////////////////////////////////////////////////

  init(text, listNo, search, isChanged, selectionStart) {
    if (text !== undefined) {
      this.text = text ?? this._getDefaultText();
    }
    if (listNo !== undefined) {
      this.listNo = listNo ?? 0;
    }
    if (search !== undefined) {
      this.search = search ?? "";
    }
    if (isChanged !== undefined) {
      this.isChanged = isChanged ? true : false;
    }
    if (selectionStart >= 0) {
      this.listNo = this._getListNoFromSelectionStart(selectionStart);
    }
    if (this.text) {
      this._selectList();
    }
    return this;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Load preferences from the local storage, parse those and return this obj
  //////////////////////////////////////////////////////////////////////////////

  load() {
    var prefContent = localStorage[this.keyPref];
    var textContent = prefContent ? localStorage[this.keyText] : null;
    var origContent = prefContent ? null : localStorage[this.appName];

    this._parse(prefContent, textContent, origContent);

    if (!prefContent) {
      this.save(false, true);
    }

    return this;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Save preferences to the local storage as a JSON string
  //////////////////////////////////////////////////////////////////////////////

  save(isChanged, canSave) {
    // Set isChanged if needed
    //
    if (isChanged !== undefined) {
      this.isChanged = isChanged;
    }

    // If no actual save required, return
    //
    if ((canSave !== undefined) && !canSave) {
      return;
    }

    // Collect all properties that are supposed to be saved
    //
    var pref = {
      version: this.version,
      isChanged: this.isChanged,
      listNo: this.listNo,
      search: this.search,
    };

    // Write to the local storage
    //

    localStorage[this.keyPref] = Json.toString(pref);
    localStorage[this.keyText] = this.text;
  }

  //
  // PRIVATE
  //

  //////////////////////////////////////////////////////////////////////////////
  // Return the pre-built text
  //////////////////////////////////////////////////////////////////////////////

  _getDefaultText() {
    return `
A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z

A a, B b, C c, D d, E e, F f, G g, H h, I i, J j, K k, L l, M m, N n, O o, P p, Q q, R r, S s, T t, U u, V v, W w, X x, Y y, Z z

MUM, DAD, GRANDMA, GRANDPA, SISTER, BROTHER, AUNT, UNCLE, COUSIN

ELLA, JOHN, AMY, PAUL, DIANA, GEORGE, TAYLOR, RINGO

WATER, MILK, JUICE, APPLE, PEAR, GRAPES, PORRIDGE, EGG, MEAT

CAT, CHICKEN, DOG, FISH, HORSE, BIRD, MOUSE

GRASS, TREE, FLOWER, FRUIT, VEGGIE, BERRY

MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY

JANUARY, FEBRUARY, MARCH, APRIL, MAY, JUNE, JULY,
AUGUST, SEPTEMBER, OCTOBER, NOVEMBER, DECEMBER

MUM - 2 FEBRUARY, DAD - 25 MAY,
SISTER - 5 JANUARY, BROTHER - 12 MARCH,
GRANDMA - 17 OCTOBER, GRANDPA - 23 JUNE

0, 1, 2, 3, 4, 5, 6, 7, 8, 9

10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
20 - 29, 30 - 39, 40 - 49, 50 - 59, 60 - 69, 70 - 79, 80 - 89, 90 - 99,
100 - 199, 200 - 299, 300 - 399, 400 - 499, 500 - 599, 600 - 699, 700 - 799, 800 - 899, 900 - 999,
1000 - 1999, 2000 - 2999

1 + 1, 2 + 1, 3 + 1, 4 + 2, 6 + 2, 7 + 2

2 - 1, 3 - 1, 3 - 2, 5 - 3, 6 - 3, 6 - 4
    `;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Find listNo from position in the text
  //////////////////////////////////////////////////////////////////////////////

  _getListNoFromSelectionStart(selectionStart) {
    if (!this.text) {
      return 0;
    }

    var prefix = this._purifyText(this.text.substring(0, selectionStart));

    return prefix.length - prefix.replaceAll(this.listSeparator, "").length;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Parse preferences and text from JSON strings
  //////////////////////////////////////////////////////////////////////////////

  _parse(prefContent, textContent, origContent) {
    // If the content is incompatible, try to load as the original one
    //
    if (!prefContent && this._parseOrig(origContent)) {
      return;
    }

    // Convert content to a JSON object ensuring we get what is expected
    //
    var pref = Json.fromString(prefContent, "version", "listNo", "search");

    // Copy all required preference properties
    //
    this.isChanged = pref?.isChanged ?? false;
    this.listNo = pref?.listNo ?? 0;
    this.search = pref?.search ?? "";

    // Copy the text and select the list
    //
    this.text = (textContent ?? this._getDefaultText()).trim();
    this._selectList();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Parse preferences and text from the original JSON string
  //////////////////////////////////////////////////////////////////////////////

  _parseOrig(pref) {
    // Convert content to the original JSON object ensuring we get what is expected
    //
    var pref = Json.fromString(pref, "KindList", "WordList", "Options");

    if (!pref) {
      return false;
    }

    // Copy all required preference properties
    //
    var opts = pref?.Options;
    this.isChanged = opts?.IsChanged ?? false;
    this.listNo = opts?.ListNo ?? 0;
    this.search = opts?.Search ?? "";

    // Get the original-style list of word lists
    //
    var lists = pref["WordList"];
    
    // If not found, return false to follow the defaults
    //
    if (!lists) {
      return false;
    }
    
    // Assemble the text from the original-style list of word lists
    //
    this.text = "";
    var sep = this.listSeparator + this.listSeparator;

    for (var i = 0, n = lists.length; i < n; i++) {
      var words = lists[i].join(", ").trim();

      if (!words) {
        continue;
      }

      if (this.text) {
        this.text += sep;
      }

      this.text += words;
    }

    // Select the list and return
    //
    this._selectList();

    return true;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Remove all unnecessary spaces, tabs and linebreaks
  //////////////////////////////////////////////////////////////////////////////

  _purifyText(text) {
    // If the text string is null or empty, return empty string
    //
    if (!text) {
      return "";
    }

    // Perform the actual purification
    //
    return text.replaceAll(this.paddedWordSeparatorsRegex, this.wordSeparator)
               .replaceAll(this.multipleListSeparatorsRegex, this.listSeparator)
               .replaceAll("\\t", " ") // don't compress!
               .trimSpaces();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Select the current list by the previously set text and index
  //////////////////////////////////////////////////////////////////////////////

  _selectList() {
    // Split text into a list of word-separated strings
    // 
    var lists = this._purifyText(this.text).split(this.listSeparator);
    var listCount = lists.length;

    // If there is no word-separated string, return the empty list
    // 
    if (listCount <= 0) {
      return [];
    }

    // Adjust the list index just in case
    // 
    if (this.listNo >= listCount) {
      this.listNo = listCount - 1;
    } else if (this.listNo < 0) {
      this.listNo = 0;
    }

    // Get the current list of words as well as set the current word
    // index and the length of the longest word there
    // 
    this.list = lists[this.listNo].split(this.wordSeparator);
    this.wordNo = 0;
    this._setMaxWordLength();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Set the length of the longest word in the current list
  //////////////////////////////////////////////////////////////////////////////

  _setMaxWordLength() {
    var list = this.list;
    var maxLength = 0;

    for (var i = 0, n = list.length; i < n; i++) {
      var curLength = list[i].length;

      if (maxLength < curLength) {
        maxLength = curLength;
      }
    }

    this.maxWordLength = maxLength;
  }

  //////////////////////////////////////////////////////////////////////////////
}