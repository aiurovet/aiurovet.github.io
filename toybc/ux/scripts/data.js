////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
////////////////////////////////////////////////////////////////////////////////

var Data = {
  KindList: [
    "Alphabet: Caps",
    "Alphabet: Caps and Lows",
    "Family",
    "Names",
    "Drinks and Food",
    "Animals",
    "Plants",
    "Days of week",
    "Months",
    "Birthdays",
    "Digits",
    "Numbers",
    "Addition",
    "Subtraction",
    "",
    ""
  ],
  WordList: [
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    ["A a", "B b", "C c", "D d", "E e", "F f", "G g", "H h", "I i", "J j", "K k", "L l", "M m", "N n", "O o", "P p", "Q q", "R r", "S s", "T t", "U u", "V v", "W w", "X x", "Y y", "Z z"],
    ["MUM", "DAD", "GRANDMA", "GRANDPA", "SISTER", "BROTHER", "AUNT", "UNCLE", "COUSIN"],
    ["ELLA", "JOHN", "AMY", "PAUL", "DIANA", "GEORGE", "LISA", "RINGO"],
    ["WATER", "MILK", "JUICE", "APPLE", "PEAR", "GRAPES", "PORRIDGE", "EGG", "MEAT"],
    ["CAT", "CHICKEN", "DOG", "FISH", "HORSE", "BIRD", "MOUSE"],
    ["GRASS", "TREE", "FLOWER", "FRUIT", "VEGGIE", "BERRY"],
    ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"],
    ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"],
    ["MUM - 2 FEBRUARY", "DAD - 25 MAY", "GRANDMA - 17 OCTOBER", "GRANDPA - 23 JUNE", "SISTER - 5 JANUARY", "BROTHER - 12 MARCH"],
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    [
      "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
      "20 - 29", "30 - 39", "40 - 49", "50 - 59", "60 - 69", "70 - 79", "80 - 89", "90 - 99",
      "100 - 199", "200 - 299", "300 - 399", "400 - 499", "500 - 599", "600 - 699", "700 - 799", "800 - 899", "900 - 999",
      "1000 - 1999", "2000 - 2999"
    ],
    ["1 + 1", "2 + 1", "3 + 1", "4 + 2", "6 + 2", "7 + 2" ],
    ["2 - 1", "3 - 1", "3 - 2", "5 - 3", "6 - 3", "6 - 4" ],
    [""],
    [""]
  ],
  Options: {
    IsChanged: false,
    IsExportAlways: false,
    ListNo: 0,
    Search: "I" // "A...": all, "I...": images, any other: disable
  }
};

////////////////////////////////////////////////////////////////////////////////

var AppName = "toybc";
var KindCount = 0;
var ListNo = 0;
var MaxTextLen = 0;
var WordCount = 0;
var WordNo = 0;

////////////////////////////////////////////////////////////////////////////////
// Initialize data structures
////////////////////////////////////////////////////////////////////////////////

function initData(content) {
  if (content) {
    parse(content);
  }

  if (ListNo >= KindCount) {
    ListNo = KindCount - 1;
  }

  if (ListNo < 0) {
    ListNo = 0;
  }

  KindCount = Data.KindList.length;
  ListNo = Data.Options.ListNo;
  MaxTextLen = 0;
  WordCount = 0;
  WordNo = 0;
}

////////////////////////////////////////////////////////////////////////////////
// Initialize data structures
////////////////////////////////////////////////////////////////////////////////

function parse(text) {
  try {
    var parsed = JSON.parse(text);

    if (parsed.KindList && parsed.WordList) {
      Data = parsed;
      return;
    }
    throw new Error();
  } catch (e) {
    alert(`Failed to parse data!\n\n${e.message}`);
    throw e;
  }
}

////////////////////////////////////////////////////////////////////////////////