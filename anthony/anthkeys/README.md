# Anthkeys

A searchable keyboard shortcuts reference for Windows, macOS, Linux, ChromeOS and popular apps.
Part of [aiurovet.github.io](https://aiurovet.github.io/anthony/anthkeys/anthkeys.html).

## Files

| File | Purpose |
| --- | --- |
| `anthkeys.html` | Page markup, including all shortcut rows |
| `js/anthkeys.js` | UI logic, search, themes, settings, translations (`i18n`) |
| `css/anthkeys.css` | Styling and design styles |
| `sw.js` | Service worker for offline caching |
| `manifest.json` | PWA manifest |
| `icon-192.png`, `icon-512.png` | PWA icons |

## Adding a shortcut

Shortcuts are plain `<tr>` rows in `anthkeys.html`, grouped under `<tr class="category">` headers.

1. Open `anthkeys.html` and find the panel for the platform or app
   (e.g. `<div class="panel" id="apps">` for the Apps tab).
2. Add a row inside the right `<tbody>`:

   ```html
   <tr><td data-i18n="app.gmail-reply">Reply</td><td><kbd>R</kbd></td></tr>
   ```

3. Add the English label in `js/anthkeys.js` inside the `i18n.en` block, using the same key:

   ```js
   'app.gmail-reply': 'Reply',
   ```

   The UI falls back to the English label for every other language until a
   translation is added, so a shortcut always displays correctly.

### `<kbd>` syntax

- Single key: `<kbd>C</kbd>`
- Combination: `<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd>`
- Key sequence (press one after the other): `<kbd>G</kbd> <kbd>I</kbd>`
- Modifier names: `Ctrl`, `Alt`, `Shift`, `Win`, `Cmd`, `Search`, arrows (`←`, `↑`, `↓`, `→`)

## Adding a language

Languages are full `i18n.<code>` objects in `js/anthkeys.js` (currently: ar, cs, da,
de, es, fi, fr, hi, hu, it, ja, ko, nl, no, pl, pt, ru, sv, tr, vi).

1. Copy the `i18n.en` block as a template and replace every value with the translation.
   Keys must match exactly; missing keys fall back to English automatically.
2. Register the language code so the language picker can offer it:

   ```html
   <button class="theme-opt" data-lang="xx">... <span data-i18n="lang.xx">XX</span></button>
   ```

   and add the picker label, e.g. `'lang.xx': 'XX'`, to every `i18n.<code>` block.
3. Add the language to the `<option>`/picker list in `anthkeys.html`.

> Tip: keep the whole `i18n` object valid JSON-style JavaScript and don't break the
> `'lang.auto': 'Device language'` default, which drives `navigator.language`.

## Cache note

After editing `anthkeys.html`, `css/anthkeys.css` or `js/anthkeys.js`, bump the cache
version at the top of `sw.js` and in `anthkeys.html` (the `sw.js?` registration) so
returning users get the update.

## License

MIT. Copyright (C) Alexander Iurovetski 2023-26.
