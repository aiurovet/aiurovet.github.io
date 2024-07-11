////////////////////////////////////////////////////////////////////////////////
// Copyright (C) Alexander Iurovetski 2024
// All rights reserved under MIT license (see LICENSE file)
////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// Load the data and preferences from a user-defined file
////////////////////////////////////////////////////////////////////////////////

async function loadFrom() {
  try {
    return await navigator.clipboard.readText();
  } catch(e) {
    alert(e.message);
    throw e;
  }
}

///////////////////////////////////////////////////////////////////////////////
// Save the data and preferences to the user-defined file
////////////////////////////////////////////////////////////////////////////////

async function saveTo() {
  try {
    await navigator.clipboard.writeText(JSON.stringify(Data));
  } catch (e) {
    alert(e.message);
    throw e;
  }
}

////////////////////////////////////////////////////////////////////////////////