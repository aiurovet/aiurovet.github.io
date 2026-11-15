# Offline Site Maker

A single-file, offline-first web app that saves websites to your device and plays your media anywhere — with no accounts, no servers, and no tracking.

**Open it:** [`Offline site maker.html`](Offline%20site%20maker.html) — one file, runs entirely in your browser.

## What it does

### Site Saver
- Capture any web page into a self-contained HTML file you can keep forever
- Capture history with re-capture, storage statistics, and full-text-friendly organization
- Material You (M3) theming, 7 languages, auto light/dark mode, wallpaper library shared with the player

### Offline Player (built from the app)
- Build a **library player** whose tracks are stored safely in your browser — one player file, survives app updates
- Build **snapshot players** with media embedded (plays anywhere) or linked (small file)
- Features: shuffle/repeat, up-next queue with reorder, per-track speed memory, bookmarks, video screenshots, A–B loop, sleep timer with gentle fade-out, subtitles, equalizer, visualizer, mouse wheel volume, listening statistics, keyboard shortcuts (press `?`), wallpapers, auto light/dark theme
- **Portable copy** — pack your whole library into one file for USB sticks or sharing
- Resume playback: positions are remembered and retried until they land, for files of any size

## Privacy

Everything runs client-side. Captured pages and media never leave your device. Note: some captures that a browser would normally block (CORS) are routed through public third-party CORS proxies — those requests involve the target site's content passing through the proxy service.

## Project layout

| Path | What it is |
|---|---|
| `Offline site maker.html` | The built, single-file app — **this is the one you open** |
| `multifile/` | Source files (scripts, styles, translations, wallpapers) used to generate the single-file build |

## Browser support

Built and tested on Google Chrome. Uses modern APIs (File System Access, IndexedDB, Web Audio, Picture-in-Picture-free media controls), so other Chromium browsers (Edge, Brave, Opera) should mostly work; Firefox is not supported.
