



'use strict';



const $ = s => document.querySelector(s);







const ROUTES = [



  { name: 'direct', make: u => u },



  { name: 'jina-html', make: u => 'https://r.jina.ai/' + u, headers: { 'x-return-format': 'html' }, textOnly: true },



  { name: 'cors.eu.org', make: u => 'https://cors.eu.org/' + u },



  { name: 'codetabs', make: u => 'https://api.codetabs.com/v1/proxy?quest=' + encodeURIComponent(u) },



  { name: 'allorigins', make: u => 'https://api.allorigins.win/raw?url=' + encodeURIComponent(u) },



  { name: 'cors.lol', make: u => 'https://api.cors.lol/?url=' + encodeURIComponent(u) },



  { name: 'allorigins-json', make: u => 'https://api.allorigins.win/get?url=' + encodeURIComponent(u), json: true, textOnly: true },



  { name: 'whateverorigin', make: u => 'https://whateverorigin.org/get?url=' + encodeURIComponent(u), json: true, textOnly: true },



  { name: 'internet-archive', make: u => 'https://web.archive.org/web/2026id_/' + u }



];



let preferredRoute = 0;







const cache = new Map();



let totalBytes = 0;



let doneCount = 0;



let totalCount = 0;



let crawlDone = 0;



let crawlKnown = 1;



let pageLabel = '';



let capStart = 0;



const OM_TITLE = document.title;







const CURRENT_VERSION = '11.6';



const DEFAULT_SETTINGS = { crawl: true, maxPages: 10, autoSave: true, timeoutSec: 15, light: false, lang: 'en', accent: '', wall: '', customWall: '', fontSize: 'd', bold: false, hc: false, rm: false, sound: false, notif: false, clock24: false, fontFamily: 'system', fontPixelSize: 16, trans: 55, skipImages: false, skipScripts: false, skipFonts: false, autoTheme: false, autoThemeMode: 'schedule', darkStart: '21:00', darkEnd: '07:00', splashDetail: false, splashAnim: 'pulse' };



let SETTINGS = (function () {



  try { return Object.assign({}, DEFAULT_SETTINGS, JSON.parse(localStorage.getItem('omSettings') || '{}')); }



  catch (e) { return Object.assign({}, DEFAULT_SETTINGS); }



})();







// Startup splash animation with dynamic timing based on changed settings



(function runSplash() {



  window.__splashScriptRan = true;



  try {



    const splash = document.getElementById('splash');



    if (!splash) return;



    if (document.body.classList.contains('rm')) { splash.remove(); return; }



    const fill = document.getElementById('splashFill');



    const pctEl = document.getElementById('splashPct');



    const status = document.getElementById('splashStatus');



    const logo = document.getElementById('splashLogo');



    const showDetail = !!SETTINGS.splashDetail;



    if (showDetail && status) status.style.display = 'block';







    // Apply animation class



    const anim = SETTINGS.splashAnim || 'pulse';



    if (anim !== 'none' && logo) {



      logo.classList.add(anim);



    }







    // Count how many settings differ from defaults → 3s to 5s duration



    let changed = 0;



    for (const k of Object.keys(DEFAULT_SETTINGS)) {



      if (SETTINGS[k] !== DEFAULT_SETTINGS[k]) changed++;



    }



    const durationSec = 3 + Math.min(changed, 10) * 0.2; // 3s to 5s



    const startTime = performance.now();



    const endTime = startTime + durationSec * 1000;







    function tick() {



      const now = performance.now();



      const elapsed = now - startTime;



      const progress = Math.min(1, elapsed / (durationSec * 1000));



      const pct = Math.round(progress * 100);



      



      if (fill) fill.style.width = pct + '%';



      if (pctEl) pctEl.textContent = pct + '%';



      if (showDetail && status) {



        let stepLabel = '';



        for (let i = steps.length - 1; i >= 0; i--) {



          if (pct >= steps[i].pct) {



            stepLabel = steps[i].label;



            break;



          }



        }



        status.textContent = stepLabel;



      }



      



      if (progress < 1) {



        requestAnimationFrame(tick);



      } else {



        splash.classList.add('fading');



        setTimeout(() => { if (splash.parentNode) splash.remove(); }, 650);



      }



    }



    tick();



    setTimeout(() => { if (splash && splash.parentNode) splash.remove(); }, 15000);



  } catch (err) {



    const splashEl = document.getElementById('splash');



    if (splashEl && splashEl.parentNode) splashEl.remove();



  }



})();










function t(k) {



  const L = LANGS[SETTINGS.lang] || LANGS.en;
  let out = L[k] || LANGS.en[k] || k;



  if (arguments.length > 1) {



    const a = Array.from(arguments).slice(1);



    out = out.replace(/\{(\d+)\}/g, (m, i) => a[i] !== undefined ? a[i] : m);



    for (let j = 0; j < a.length; j++) {



      if (a[j] && typeof a[j] === 'object') {



        for (const key in a[j]) {



          out = out.replace(new RegExp('\\{' + key + '\\}', 'g'), a[j][key]);



        }



      }



    }



  }



  return out;



}







function applyI18n() {



  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.getAttribute('data-i18n')); });



  document.querySelectorAll('[data-i18n-title]').forEach(el => { el.title = t(el.getAttribute('data-i18n-title')); });






  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.getAttribute('data-i18n-placeholder')); });



  document.querySelectorAll('[data-i18n-text]').forEach(el => { el.textContent = t(el.getAttribute('data-i18n-text')); });



}







function shadeHex(hex, pct) {



  const m = /^#([0-9a-f]{6})$/i.exec(hex || '');



  if (!m) return '';



  let n = parseInt(m[1], 16);



  const r = Math.round((n >> 16) + ((255 - (n >> 16)) * pct) / 100);



  const g = Math.round(((n >> 8) & 255) + ((255 - ((n >> 8) & 255)) * pct) / 100);



  const b = Math.round((n & 255) + ((255 - (n & 255)) * pct) / 100);



  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);



}



function hexToRgb(hex) {



  const m = /^#([0-9a-f]{6})$/i.exec(hex || '');



  if (!m) return null;



  const n = parseInt(m[1], 16);



  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];



}



function mixHex(a, b, t) {



  const A = hexToRgb(a), B = hexToRgb(b);



  if (!A || !B) return a;



  const r = Math.round(A[0] + (B[0] - A[0]) * t);



  const g = Math.round(A[1] + (B[1] - A[1]) * t);



  const bb = Math.round(A[2] + (B[2] - A[2]) * t);



  return '#' + ((1 << 24) + (r << 16) + (g << 8) + bb).toString(16).slice(1);



}







// ==== Material 3 Expressive HCT color engine (faithful port of material-color-utilities) ====



// --- Color space math ---



function sanitizeHex(hex) { const m = /^#([0-9a-f]{6})$/i.exec(hex||''); return m ? '#'+m[1].toLowerCase() : ''; }



function argbFromHex(hex) { const h = sanitizeHex(hex); return h ? parseInt(h.slice(1),16) : 0xFF000000; }



function hexFromArgb(argb) { const v = argb>>>0; return '#' + ((1<<24)|v).toString(16).slice(1); }



function m3Clamp(v) { return Math.max(0, Math.min(255, v)); }



function m3srgbToLin(c) { const x = c / 255; return x <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4); }



function m3linToSrgb(c) { const x = Math.max(0, Math.min(1, c)); return Math.round((x <= 0.0031308 ? x * 12.92 : 1.055 * Math.pow(x, 1 / 2.4) - 0.055) * 255); }



function m3argbToRgb(argb) { return [(argb >> 16) & 255, (argb >> 8) & 255, argb & 255]; }



function m3rgbToXyzInt(argb) {



  const r = m3srgbToLin((argb >> 16) & 255), g = m3srgbToLin((argb >> 8) & 255), b = m3srgbToLin(argb & 255);



  return [r * 0.4124 + g * 0.3576 + b * 0.1805, r * 0.2126 + g * 0.7152 + b * 0.0722, r * 0.0193 + g * 0.1192 + b * 0.9505];



}



function m3ArgbFromLab(L, a, b) {



  const fy = (L + 16) / 116, fx = fy + a / 500, fz = fy - b / 200;



  const finv = t => t > 0.206893 ? t * t * t : (t - 16 / 116) / 7.787;



  const X = finv(fx) * 0.95047, Y = finv(fy) * 1.0, Z = finv(fz) * 1.08883;



  const lr = X * 3.2406 + Y * -1.5372 + Z * -0.4986;



  const lg = X * -0.9689 + Y * 1.8758 + Z * 0.0415;



  const lb = X * 0.0557 + Y * -0.2040 + Z * 1.0570;



  return (((m3linToSrgb(lr) & 255) << 16) | ((m3linToSrgb(lg) & 255) << 8) | (m3linToSrgb(lb) & 255)) >>> 0;



}



// Convert sRGB -> Lab (D65)



function m3RgbToLab(argb) {



  const xyz = m3rgbToXyzInt(argb);



  const f = t => t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116;



  const fx = f(xyz[0] / 0.95047), fy = f(xyz[1] / 1.0), fz = f(xyz[2] / 1.08883);



  const L = 116 * fy - 16, a = 500 * (fx - fy), b = 200 * (fy - fz);



  return { L, a, b };



}



// L is "Tone", C & h are chroma/hue in the a-b plane (this is the Lab chroma used by M3’s HCT hue/chroma)



function m3HueChromaFromArgb(argb) {



  const lab = m3RgbToLab(argb);



  const C = Math.sqrt(lab.a * lab.a + lab.b * lab.b);



  const H = (Math.atan2(lab.b, lab.a) * 180 / Math.PI + 360) % 360;



  return { H, C, T: lab.L };



}



function m3HctToArgb(H, C, T) {



  const cr = C * Math.cos(H * Math.PI / 180);



  const cb = C * Math.sin(H * Math.PI / 180);



  return m3ArgbFromLab(T, cr, cb);



}



// --- Tonal palette: a given hue+chroma held at many tone levels ---



// Real M3 tunes chroma so every tone hits the same perceived chroma; we approximate by



// keeping chroma for mid tones and letting extreme tones reduce naturally (TMAP).



const M3_PAL_TONES = [0, 4, 6, 10, 12, 17, 20, 22, 24, 30, 35, 40, 50, 60, 70, 80, 87, 90, 92, 94, 95, 96, 98, 100];



function m3TonalPalette(H, C) {



  const map = {};



  M3_PAL_TONES.forEach(tone => {



    // Chroma blows up at extreme tones in Lab; scale it so palette stays in gamut.



    let c = C;



    if (tone < 20) c = C * (tone / 20) * 0.75;



    else if (tone > 90) c = C * ((100 - tone) / 10) * 0.9;



    map[tone] = m3HctToArgb(H, c, tone);



  });



  return map;



}



// --- Scheme generation (roles mapped to tones; both light and dark) ---



const M3_ROLE_TONES_LIGHT = {



  primary: 40, onPrimary: 100, primaryContainer: 90, onPrimaryContainer: 10, inversePrimary: 80,



  secondary: 40, onSecondary: 100, secondaryContainer: 90, onSecondaryContainer: 10,



  tertiary: 40, onTertiary: 100, tertiaryContainer: 90, onTertiaryContainer: 10,



  error: 40, onError: 100, errorContainer: 90, onErrorContainer: 10,



  surface: 98, onSurface: 10, surfaceDim: 87, surfaceBright: 98,



  surfaceContainerLowest: 100, surfaceContainerLow: 96, surfaceContainer: 94,



  surfaceContainerHigh: 92, surfaceContainerHighest: 90,



  onSurfaceVariant: 30, surfaceVariant: 90,



  outline: 50, outlineVariant: 80,



  inverseSurface: 20, inverseOnSurface: 95,



  primaryFixed: 90, onPrimaryFixed: 10, primaryFixedDim: 80, onPrimaryFixedVariant: 30,



  secondaryFixed: 90, onSecondaryFixed: 10, secondaryFixedDim: 80, onSecondaryFixedVariant: 30,



  tertiaryFixed: 90, onTertiaryFixed: 10, tertiaryFixedDim: 80, onTertiaryFixedVariant: 30,



  scrim: 0, shadow: 0



};



const M3_ROLE_TONES_DARK = {



  primary: 80, onPrimary: 20, primaryContainer: 30, onPrimaryContainer: 90, inversePrimary: 40,



  secondary: 80, onSecondary: 20, secondaryContainer: 30, onSecondaryContainer: 90,



  tertiary: 80, onTertiary: 20, tertiaryContainer: 30, onTertiaryContainer: 90,



  error: 80, onError: 20, errorContainer: 30, onErrorContainer: 80,



  surface: 6, onSurface: 90, surfaceDim: 6, surfaceBright: 24,



  surfaceContainerLowest: 4, surfaceContainerLow: 10, surfaceContainer: 12,



  surfaceContainerHigh: 17, surfaceContainerHighest: 22,



  onSurfaceVariant: 80, surfaceVariant: 30,



  outline: 60, outlineVariant: 30,



  inverseSurface: 90, inverseOnSurface: 20,



  primaryFixed: 90, onPrimaryFixed: 10, primaryFixedDim: 80, onPrimaryFixedVariant: 30,



  secondaryFixed: 90, onSecondaryFixed: 10, secondaryFixedDim: 80, onSecondaryFixedVariant: 30,



  tertiaryFixed: 90, onTertiaryFixed: 10, tertiaryFixedDim: 80, onTertiaryFixedVariant: 30,



  scrim: 0, shadow: 0



};



function m3PalTone(pal, tone) {



  // snap to nearest available tone line



  let best = M3_PAL_TONES[0], bd = 1e9;



  M3_PAL_TONES.forEach(t => { const d = Math.abs(t - tone); if (d < bd) { bd = d; best = t; } });



  return pal[best];



}



function m3ThemeFromSource(seedHex) {



  // enforce an effective minimum chroma so grey seeds still feel colorful



  const seed = parseInt(sanitizeHex(seedHex).slice(1), 16);



  const hc = m3HueChromaFromArgb(seed);



  const H = hc.H;



  // Faithful CorePalette chroma constants (source: material-color-utilities).



  // primary keeps the seed chroma (floored at 48); secondary/tertiary/neutral use fixed chroma.



  const primary = m3TonalPalette(H, Math.max(48, Math.min(90, hc.C)));



  const secondary = m3TonalPalette(H, 16);



  const tertiary = m3TonalPalette((H + 60) % 360, 24);



  // Neutral palettes use a near-grey chroma so surfaces stay muted but tinted by the hue



  const neutral = m3TonalPalette(H, 4);



  const neutralV = m3TonalPalette(H, 8);



  // M3 uses a fixed red "error" hue regardless of the seed



  const error = m3TonalPalette(25, 84);



  function scheme(roles) {



    const s = {};



    Object.keys(roles).forEach(role => {



      const tone = roles[role];



      let pal = neutral;



      if (role.indexOf('neutral') === -1) {



        if (role.startsWith('error')) pal = error;



        else if (role.startsWith('primary')) pal = primary;



        else if (role.startsWith('secondary')) pal = secondary;



        else if (role.startsWith('tertiary')) pal = tertiary;



      }



      s[role] = hexFromArgb(m3PalTone(pal, tone));



    });



    return s;



  }



  return { light: scheme(M3_ROLE_TONES_LIGHT), dark: scheme(M3_ROLE_TONES_DARK) };



}



function applyM3Accent() {



  const r = document.body.style;



  const light = document.body.classList.contains('light');



  // Always derive a full Material 3 scheme so the roles stay coherent; fall back to the default blue seed.



  const seed = (SETTINGS.accent && /^#[0-9a-f]{6}$/i.test(SETTINGS.accent)) ? SETTINGS.accent : '#4f8cff';



  const scheme = m3ThemeFromSource(seed);



  const s = light ? scheme.light : scheme.dark;



  r.setProperty('--accent', s.primary);



  r.setProperty('--accent-h', s.primaryFixedDim);



  r.setProperty('--primary', s.primary);



  r.setProperty('--on-primary', s.onPrimary);



  r.setProperty('--primary-container', s.primaryContainer);



  r.setProperty('--on-primary-container', s.onPrimaryContainer);



  r.setProperty('--secondary', s.secondary);



  r.setProperty('--on-secondary', s.onSecondary);



  r.setProperty('--secondary-container', s.secondaryContainer);



  r.setProperty('--on-secondary-container', s.onSecondaryContainer);



  r.setProperty('--tertiary', s.tertiary);



  r.setProperty('--on-tertiary', s.onTertiary);



  r.setProperty('--tertiary-container', s.tertiaryContainer);



  r.setProperty('--on-tertiary-container', s.onTertiaryContainer);



  r.setProperty('--surface', s.surface);



  r.setProperty('--surface-dim', s.surfaceDim);



  r.setProperty('--surface-bright', s.surfaceBright);



  r.setProperty('--surface-container', s.surfaceContainer);



  r.setProperty('--surface-container-low', s.surfaceContainerLow);



  r.setProperty('--surface-container-lowest', s.surfaceContainerLowest);



  r.setProperty('--surface-container-high', s.surfaceContainerHigh);



  r.setProperty('--surface-container-highest', s.surfaceContainerHighest);



  r.setProperty('--on-surface', s.onSurface);



  r.setProperty('--surface-variant', s.surfaceVariant);



  r.setProperty('--on-surface-variant', s.onSurfaceVariant);



  r.setProperty('--outline', s.outline);



  r.setProperty('--outline-variant', s.outlineVariant);



  r.setProperty('--surface-h', s.surfaceContainerHigh);



  r.setProperty('--error', s.error);



  r.setProperty('--error-container', s.errorContainer);



  r.setProperty('--on-error', s.onError);



  r.setProperty('--on-error-container', s.onErrorContainer);



  // Map the legacy UI variables onto the M3 scheme so every element follows it.



  function rgba(hex, a) { const c = hexToRgb(hex); return c ? 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + a + ')' : hex; }



  r.setProperty('--bg', s.surfaceContainerLow);



  r.setProperty('--card', s.surfaceContainer);



  r.setProperty('--input-bg', s.surfaceContainerLowest);



  r.setProperty('--text', s.onSurface);



  r.setProperty('--on-surface', s.onSurface);



  r.setProperty('--dim', s.onSurfaceVariant);



  r.setProperty('--border', s.outlineVariant);



  r.setProperty('--accent-h', light ? s.primaryContainer : s.primaryFixedDim);



  r.setProperty('--hd-bg', rgba(s.surfaceContainerLowest, 0.55));



  r.setProperty('--banner-bg', rgba(s.surfaceContainerHigh, 0.78));



  r.setProperty('--err', s.error);



}



function applyAccent() { if (window.__m3Init !== false) { applyM3Accent(); } }







function applyTheme() { document.body.classList.toggle('light', !!SETTINGS.light); applyAccent(); applyWall(); applyTrans(); }



function timeToMin(s) {



  const parts = String(s || '').split(':');



  const h = +parts[0], m = +parts[1];



  return isFinite(h) && isFinite(m) && h >= 0 && h <= 23 && m >= 0 && m <= 59 ? h * 60 + m : -1;



}



function autoInWindow() {



  const st = timeToMin(SETTINGS.darkStart), en = timeToMin(SETTINGS.darkEnd);



  if (st < 0 || en < 0 || st === en) return false;



  const d = new Date(), now = d.getHours() * 60 + d.getMinutes();



  return st < en ? (now >= st && now < en) : (now >= st || now < en);



}



function sysPrefDark() {

  try { return window.matchMedia('(prefers-color-scheme: dark)').matches; } catch (e) { return null; }

}

function applyAutoTheme() {



  if (!SETTINGS.autoTheme) return;



  const prev = !!SETTINGS.light;



  if (SETTINGS.autoThemeMode === 'system' && sysPrefDark() !== null) {

    SETTINGS.light = !sysPrefDark();

    applyTheme();

    if (prev !== !!SETTINGS.light) persistSettings();

    return;

  }

  SETTINGS.light = !autoInWindow();



  applyTheme();



  if (prev !== !!SETTINGS.light) persistSettings();



}



function applyTrans() {



  const alpha = (SETTINGS.trans == null ? 55 : SETTINGS.trans) / 100;



  const light = !!(SETTINGS.light);



  const panel = 0.04 + alpha * (light ? 0.90 : 0.80);



  // Header colour is derived from the M3 surface-container-lowest so it stays tinted by the scheme.



  const cs = getComputedStyle(document.body);



  const baseHex = (cs.getPropertyValue('--surface-container-lowest') || '').trim() || (light ? '#ffffff' : '#0d1320');



  const c = hexToRgb(baseHex) || (light ? [255, 255, 255] : [13, 18, 30]);



  document.body.style.setProperty('--hd-bg', 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + Math.min(1, Math.max(0, panel)) + ')');



  const bp = Math.min(1, Math.max(0, panel));



  const bHex = (cs.getPropertyValue('--outline-variant') || '').trim() || (light ? '#d8dee9' : '#232c40');



  const b = hexToRgb(bHex) || (light ? [216, 222, 233] : [42, 51, 72]);



  document.body.style.setProperty('--hd-border', 'rgba(' + b[0] + ',' + b[1] + ',' + b[2] + ',' + bp + ')');



  const sc = document.getElementById('scrimLayer');



  if (sc) sc.style.opacity = String(Math.min(0.6, Math.max(0, (alpha - 0.55) * 1.2)));

  try {

    var m3v = {};

    var m3bs = document.body.style;

    for (var m3i = 0; m3i < m3bs.length; m3i++) {

      var m3p = m3bs[m3i];

      if (m3p.indexOf("--") === 0) m3v[m3p] = m3bs.getPropertyValue(m3p);

    }

    localStorage.setItem("omM3Vars", JSON.stringify(m3v));

  } catch (e) {}



}



function applyFont() {



  const ff = SETTINGS.fontFamily || 'system';



  const fs = SETTINGS.fontPixelSize || 16;



  document.body.style.fontFamily = ff === 'system' ? 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif' : ff;



  document.body.style.fontSize = fs + 'px';



}



let selWall = null;



function wallThumb(w) {



  if (!w.id) return '';



  return w.photo ? w.photo : 'data:image/svg+xml,' + encodeURIComponent(w.svg);



}



function renderWallGrid() {



  selWall = (selWall === null ? SETTINGS.wall : selWall);



  const list = WALLS.slice();



  if (SETTINGS.customWall) list.push({ id: 'custom', name: 'Custom' });



  if (!list.some(w => w.id === selWall)) selWall = '';



  const grid = $('#wallGrid');



  grid.innerHTML = '';







  const CAT_LABEL = { forest: t('catForest'), ocean: t('catOcean'), sunset: t('catSunset'), abstract: t('catAbstract') };



  const CAT_ORDER = ['forest', 'ocean', 'sunset', 'abstract'];







  const makeFig = (w) => {



    const b = document.createElement('button');



    b.type = 'button';



    b.title = w.name;



    const sel = w.id === selWall;



    const thumb = w.id === 'custom' ? SETTINGS.customWall : wallThumb(w);



    b.className = 'wallbtn' + (sel ? ' sel' : '');



    b.style.background = (w.id ? 'url("' + (thumb || '').replace(/"/g, '%22') + '") center/cover no-repeat' : 'var(--bg)');



    b.addEventListener('click', () => {



      selWall = w.id;



      SETTINGS.wall = selWall;



      persistSettings();



      applyWall();



      renderWallGrid();



    });



    const fig = document.createElement('div');



    fig.style.cssText = 'display:flex;flex-direction:column;align-items:center;gap:4px';



    const cap = document.createElement('span');



    cap.style.cssText = 'max-width:72px;font-size:10px;line-height:1.2;text-align:center;color:var(--dim);overflow-wrap:break-word';



    cap.textContent = w.name;



    fig.appendChild(b);



    fig.appendChild(cap);



    return fig;



  };







  const makeGroup = (label, items) => {



    const det = document.createElement('details');



    det.style.cssText = 'width:100%;margin-top:8px';



    const sum = document.createElement('summary');



    sum.style.cssText = 'cursor:pointer;font-size:13px;color:var(--text);font-weight:600;padding:6px 8px;border:1px solid var(--border);border-radius:8px;background:var(--card)';



    sum.textContent = label + ' (' + items.length + ')';



    det.appendChild(sum);



    const box = document.createElement('div');



    box.style.cssText = 'display:flex;flex-wrap:wrap;gap:10px;margin-top:10px';



    items.forEach(w => box.appendChild(makeFig(w)));



    det.appendChild(box);



    det.addEventListener('toggle', () => {



      if (det.open) {



        grid.querySelectorAll('details').forEach(o => { if (o !== det) o.removeAttribute('open'); });



      }



    });



    return det;



  };







  const none = list.find(w => !w.id);



  if (none) grid.appendChild(makeFig(none));







  CAT_ORDER.forEach(cat => {



    const group = list.filter(w => w.cat === cat);



    if (group.length) grid.appendChild(makeGroup(CAT_LABEL[cat], group));



  });







  const others = list.filter(w => w.id && (w.id === 'custom'));



  if (others.length) grid.appendChild(makeGroup('Custom', others));



}



function applyWall() {



  let src = null;



  if (SETTINGS.wall === 'custom' && SETTINGS.customWall) src = SETTINGS.customWall;



  else {



    const w = WALLS.find(x => x.id === SETTINGS.wall);



    if (w && w.id) src = wallThumb(w);



  }



  try { if (src) localStorage.setItem('omWallCurrent', src); else localStorage.removeItem('omWallCurrent'); } catch (e) {}



  const b = document.body;



  const layer = document.getElementById('bgLayer');



  if (!layer) return;



  layer.style.backgroundImage = 'none';



  if (src) {



    layer.style.backgroundImage = 'url("' + src.replace(/"/g, '%22') + '")';



    b.style.background = '';



  } else {



    b.style.background = '';



  }



}







function applyDisplay() {



  const b = document.body;



  b.classList.toggle('fs-s', SETTINGS.fontSize === 's');



  b.classList.toggle('fs-l', SETTINGS.fontSize === 'l');



  b.classList.toggle('fs-xl', SETTINGS.fontSize === 'xl');



  b.classList.toggle('btxt', !!SETTINGS.bold);



  b.classList.toggle('hc', !!SETTINGS.hc);



  b.classList.toggle('rm', !!SETTINGS.rm);



}







function chime() {



  try {



    const ctx = new (window.AudioContext || window.webkitAudioContext)();



    const o = ctx.createOscillator();



    const g = ctx.createGain();



    o.connect(g); g.connect(ctx.destination);



    o.type = 'sine';



    o.frequency.setValueAtTime(880, ctx.currentTime);



    o.frequency.setValueAtTime(660, ctx.currentTime + 0.18);



    g.gain.setValueAtTime(0.001, ctx.currentTime);



    g.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.02);



    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);



    o.start(); o.stop(ctx.currentTime + 0.45);



  } catch (e) {}



}







function notifyDone(msg) {



  try {



    if (SETTINGS.notif && 'Notification' in window && Notification.permission === 'granted') {



      new Notification('Offline Site Saver', { body: msg || '' });



    }



  } catch (e) {}



}







applyTheme();



applyWall();



applyAccent();



applyI18n();



applyDisplay();



applyFont();



applyAutoTheme();



(function attachSysThemeWatcher() {

  try {

    if (!window.matchMedia) return;

    const m = window.matchMedia('(prefers-color-scheme: dark)');

    const react = () => { if (SETTINGS.autoTheme && SETTINGS.autoThemeMode === 'system') applyAutoTheme(); };

    if (m.addEventListener) m.addEventListener('change', react);

    else if (m.addListener) m.addListener(react);

  } catch (e) {}

})();



setInterval(() => { if (SETTINGS.autoTheme) applyAutoTheme(); }, 60000);



renderWallGrid();

try {

  var ths = [], thDone = 0, thTotal = 0;

  var tw = document.createElement("canvas");

  tw.width = 480; tw.height = 300;

  var tctx = tw.getContext("2d");

  var finishT = function () { try { localStorage.setItem("omWallThumbs", JSON.stringify(ths)); } catch (e) {} };

  for (var wi4 = 0; wi4 < WALLS.length; wi4++) {

    (function (ww4) {

      if (!ww4.photo || ww4.photo.indexOf("data:image") !== 0) return;

      thTotal++;

      var wim = new Image();

      wim.onload = function () {

        try {

          tctx.drawImage(wim, 0, 0, 480, 300);

          ths.push({ id: ww4.id, n: ww4.name, u: tw.toDataURL("image/jpeg", 0.72) });

        } catch (e) {}

        thDone++;

        if (thDone >= thTotal) finishT();

      };

      wim.onerror = function () { thDone++; if (thDone >= thTotal) finishT(); };

      wim.src = ww4.photo;

    })(WALLS[wi4]);

  }

  setTimeout(finishT, 9000);

} catch (e) {}

try {

  if (window.indexedDB && typeof WALLS !== "undefined") {

    var wOpen = indexedDB.open("omPlayerLib", 2);

    wOpen.onupgradeneeded = function () {

      var wd = wOpen.result;

      if (!wd.objectStoreNames.contains("media")) wd.createObjectStore("media");

      if (!wd.objectStoreNames.contains("walls")) wd.createObjectStore("walls");

    };

    wOpen.onblocked = function () { try { log("Wallpaper sharing is waiting — please close other player tabs, then reopen the app", "warn"); } catch (e) {} };

    wOpen.onerror = function () { try { log("Could not share wallpapers with the player", "err"); } catch (e) {} };

    wOpen.onsuccess = function () {

      var wdb = wOpen.result;

      var wtx = wdb.transaction("walls", "readwrite");

      var wst = wtx.objectStore("walls");

      var wmr = wst.get("wallsMeta");

      wmr.onsuccess = function () {

        if (wmr.result && wmr.result.v === "named") return;

        var clr = wst.clear();

        clr.onsuccess = function () {

          for (var wi2 = 0; wi2 < WALLS.length; wi2++) {

            try {

              var ww = WALLS[wi2];

              if (!ww.photo) continue;

              var wbin2 = atob(String(ww.photo).split(",")[1]);

              var warr2 = new Uint8Array(wbin2.length);

              for (var wi3 = 0; wi3 < wbin2.length; wi3++) warr2[wi3] = wbin2.charCodeAt(wi3);

              wst.put({ k: ww.id, n: ww.name, blob: new Blob([warr2], { type: "image/jpeg" }) }, ww.id);

            } catch (e3) {}

          }

          wst.put({ v: "named" }, "wallsMeta");

          try { log("Wallpapers shared with the player (" + WALLS.length + ")", "ok"); } catch (e4) {}

        };

      };

    };

  }

} catch (e) {}





(function showUpdateBanner() {



  const banner = $('#updateBanner');



  if (!banner) return;



  let lastSeen = null;



  try { lastSeen = localStorage.getItem('omLastSeenVersion'); } catch (e) {}



  if (CURRENT_VERSION && lastSeen !== CURRENT_VERSION) {



    $('#updateBannerVer').textContent = CURRENT_VERSION;



    $('#updateBannerTitle').textContent = t('updatedBanner') + ' v' + CURRENT_VERSION;



    banner.style.display = 'flex';



    banner.hidden = false;



  }



  const dismiss = () => {



    banner.style.display = 'none';



    banner.hidden = true;



    try { localStorage.setItem('omLastSeenVersion', CURRENT_VERSION); } catch (e) {}



  };



  $('#updateBannerClose').addEventListener('click', dismiss);



  $('#updateBannerBtn').addEventListener('click', () => {



    dismiss();



    if ($('#settingsCard').hidden) { $('#settingsCard').hidden = false; document.body.classList.add('set-open'); }



    const aboutGrp = document.querySelector('details.sgroup.info');

    if (aboutGrp) aboutGrp.open = true;

    switchAboutTab('whatsNew');



    requestAnimationFrame(() => { if (aboutGrp) aboutGrp.scrollIntoView({ block: 'start' }); });



  });



})();







(function firstRunTour() {



  let seen = null;



  try { seen = localStorage.getItem('omSeenTour'); } catch (e) {}



  if (seen === '1') return;



  const overlay = document.createElement('div');



  overlay.id = 'tourMask';



  overlay.style.cssText = 'position:fixed;inset:0;z-index:2000;background:rgba(0,0,0,.45);display:none';



  const box = document.createElement('div');



  box.id = 'tourBox';



  box.style.cssText = 'position:fixed;z-index:2001;max-width:320px;padding:14px 16px;background:var(--card);color:var(--text);border:1px solid var(--accent);border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.4);display:none;font-family:inherit';



  const ring = document.createElement('div');



  ring.id = 'tourRing';



  ring.style.cssText = 'position:fixed;z-index:1999;border:2px solid var(--accent);border-radius:12px;box-shadow:0 0 0 3px rgba(79,140,255,.35);pointer-events:none;display:none';



  document.body.appendChild(overlay); document.body.appendChild(box); document.body.appendChild(ring);



  const steps = [



    { title: "Welcome!", text: "Offline Site Saver saves any public web page into one HTML file that works with no internet. Let’s take a quick tour.", open: null },



    { id: 'url', title: 'Paste a link', text: 'Paste any public web address here.', open: null },



    { id: 'go', title: 'Capture', text: 'Click Capture to download the page and everything on it.', open: null },



    { id: 'settingsBtn', title: 'Settings', text: 'Open Settings (gear) to pick wallpapers, theme, language and more.', open: 'settings' },



    { id: 'setLight', title: 'Theme & appearance', text: 'This is the Display & style group — choose light/dark theme, colors and fonts.', open: null },



    { id: 'setLang', title: 'Language', text: 'Switch the whole interface to any of the 13 available languages.', open: null },



    { id: 'histList', title: 'History', text: 'Your past captures are kept here so you can re-download them anytime.', open: 'hist' },



    { title: 'You\'re all set!', text: 'That\'s it. Capture a page and enjoy offline browsing.', open: null, finish: true }



  ];



  let idx = 0;



  function openSettings() {



    const sc = $('#settingsCard');



    if (sc.hidden) $('#settingsBtn').click();



  }



  function getStepEl(st) {



    if (st.open === 'settings') return $('#setLight');



    if (st.open === 'hist') return $('#histList');



    if (st.id) { try { return $('#'.concat(st.id)); } catch (e) { return null; } }



    return null;



  }



  function position() {



    const st = steps[idx];



    const e0 = getStepEl(st);



    const openGroup = cl => {



      const grp = (cl || null) && cl.closest ? cl.closest('details.sgroup') : null;



      if (grp && !grp.hasAttribute('open')) { grp.setAttribute('open', ''); return true; }



      return false;



    };



    const opened = openGroup(e0);



    if (st.open === 'settings' || st.open === 'hist') {



      openSettings();



      setTimeout(() => {



        if (st.open === 'hist') openGroup($('#histList'));



        window.scrollTo(0, 0);



      }, 30);



    }



    box.innerHTML = '<div style="font-weight:700;font-size:15px;margin-bottom:6px">' + t(st.title) + '</div>' +



      '<div style="font-size:13px;line-height:1.55;color:var(--dim)">' + t(st.text) + '</div>' +



      '<div style="display:flex;gap:8px;margin-top:12px;align-items:center">' +



      '<button type="button" id="tbNext" style="padding:8px 16px;font-size:13px">' + (st.finish ? 'Finish' : (idx < steps.length - 1 ? 'Next' : 'Finish')) + '</button>' +



      '<button type="button" id="tbPrev" style="padding:8px 16px;font-size:13px;background:#5a5a66"' + (idx === 0 ? ' disabled' : '') + '>Back</button>' +



      '<button type="button" id="tbClose" style="padding:8px 16px;font-size:13px;background:#5a5a66">Skip</button>' +



      '<span style="flex:1;text-align:right;font-size:12px;color:var(--dim)">' + (idx + 1) + '/' + steps.length + '</span>' +



      '</div>';



    const getEl = () => getStepEl(st);



    const e = getEl();



    box.style.display = 'block';



    const bw = box.offsetWidth;



    const place = () => {



      if (!e) {



        ring.style.display = 'none';



        box.style.display = 'block';



        box.style.left = '50%';



        box.style.top = '50%';



        box.style.transform = 'translate(-50%,-50%)';



        return;



      }



      const b = e.getBoundingClientRect();



      ring.style.display = 'block';



      ring.style.left = (b.left - 8) + 'px'; ring.style.top = (b.top - 8) + 'px';



      ring.style.width = (b.width + 16) + 'px'; ring.style.height = (b.height + 16) + 'px';



      let left = b.left + b.width / 2 - bw / 2;



      left = Math.max(8, Math.min(window.innerWidth - bw - 8, left));



      if (b.top > window.innerHeight - 220) {



        box.style.left = left + 'px'; box.style.top = 'auto';



        box.style.bottom = (window.innerHeight - b.top + 14) + 'px';



        box.style.transform = 'none';



      } else {



        box.style.left = left + 'px'; box.style.top = (b.top + b.height + 14) + 'px';



        box.style.transform = 'none';



      }



    };



    requestAnimationFrame(() => {



      if (e) { window.setTimeout(() => { e.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 60); }



      window.setTimeout(place, 400);



      if (opened) window.setTimeout(place, 700);



    });



  }



  overlay.style.display = 'block';



  box.style.display = 'block';



  position();



  box.addEventListener('click', e => {



    const nn = e.target.id;



    if (nn === 'tbNext') { if (idx < steps.length - 1) { idx++; position(); } else finish(); }



    else if (nn === 'tbPrev') { if (idx > 0) { idx--; position(); } }



    else if (nn === 'tbClose') finish();



  });



  function finish() {



    try { localStorage.setItem('omSeenTour', '1'); } catch (e) {}



    overlay.remove(); box.remove(); ring.remove();



    const sc = $('#settingsCard');



    if (sc && sc.hidden === false) { document.body.classList.remove('set-open'); sc.hidden = true; }



  }



})();







const logEl = $('#log'), statusEl = $('#status'), statText = $('#statText'), fill = $('#fill'), pctVal = $('#pctVal');



function setBarPct(p) { fill.style.width = p + '%'; pctVal.textContent = p + '%'; }







function log(msg, cls) {



  const d = new Date();



  const time = SETTINGS.clock24



    ? d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })



    : d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });



  const span = document.createElement('span');



  span.className = cls || 'info';



  span.textContent = '[' + time + '] ' + msg + '\n';



  logEl.appendChild(span);



  logEl.scrollTop = logEl.scrollHeight;



}







function fmtBytes(n) {



  if (n < 1024) return n + ' B';



  if (n < 1048576) return (n / 1024).toFixed(1) + ' KB';



  return (n / 1048576).toFixed(2) + ' MB';



}







function bump() {



  doneCount++;



  const pageFrac = totalCount ? Math.min(1, doneCount / totalCount) : 1;



  const pct = crawlKnown ? Math.min(100, Math.round((crawlDone + pageFrac) / crawlKnown * 100)) : 0;



  let eta = '';



  const gTot = crawlKnown;



  const gDone = crawlDone + pageFrac;



  if (gTot > gDone) {



    const el = performance.now() - capStart;



    const leftMs = gDone > 0 ? (el / gDone) * (gTot - gDone) : 0;



    if (leftMs > 500) {



      const secs = Math.max(1, Math.round(leftMs / 1000));



      eta = secs < 60 ? ' · ~' + secs + 's left' : ' · ~' + Math.floor(secs / 60) + 'm ' + (secs % 60) + 's left';



    }



  }



  statText.textContent = pageLabel + ' ' + t('statResources') + ' ' + doneCount + ' / ' +



    totalCount + ' — ' + pct + '% overall  (' + fmtBytes(totalBytes) + ')' + eta;



  setBarPct(pct);



  if (pct) document.title = '[' + pct + '%] ' + OM_TITLE;



}







async function proxiedFetch(url, asBlob, wantHtml, skipNames) {



  if (cache.has(url)) return cache.get(url);



  const order = [preferredRoute].concat(ROUTES.map((_, i) => i).filter(i => i !== preferredRoute));



  const errors = [];



  let out;



  for (let attempt = 0; attempt < 2 && out === undefined; attempt++) {



    if (attempt > 0) await new Promise(r => setTimeout(r, 900));



    for (const idx of order) {



      const route = ROUTES[idx];



      if (asBlob && route.textOnly) continue;



      if (skipNames && skipNames.indexOf(route.name) >= 0) continue;



      if (attempt > 0 && idx === 0) continue;



      try {



        const ctrl = new AbortController();



        const timer = setTimeout(() => ctrl.abort(), Math.max(5, SETTINGS.timeoutSec || 15) * 1000);



        let res;



        try {



          res = await fetch(route.make(url), { signal: ctrl.signal, redirect: 'follow', headers: route.headers });



        } finally { clearTimeout(timer); }



        if (!res.ok) throw new Error('HTTP ' + res.status);



        if (asBlob) {



          out = await res.blob();



          if (!out.size) throw new Error('empty response');



          totalBytes += out.size;



        } else {



          out = await res.text();



          totalBytes += out.length;



          if (route.json) {



            try { out = JSON.parse(out).contents || ''; }



            catch (e) { throw new Error('bad json'); }



          }



          if (wantHtml && !/^\s*</.test(out)) throw new Error('response was not html');



        }



        preferredRoute = idx;



        cache.set(url, out);



        return out;



      } catch (e) {



        errors.push((attempt ? 'retry ' : '') + route.name + ': ' + e.message);



        out = undefined;



      }



    }



  }



  throw new Error(errors.join(' | ') || 'no routes available');



}







const EXT_MIME = {



  png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', gif: 'image/gif',



  webp: 'image/webp', svg: 'image/svg+xml', ico: 'image/x-icon', bmp: 'image/bmp',



  avif: 'image/avif', woff: 'font/woff', woff2: 'font/woff2', ttf: 'font/ttf',



  otf: 'font/otf', eot: 'application/vnd.ms-fontobject', mp4: 'video/mp4',



  webm: 'video/webm', mp3: 'audio/mpeg', wav: 'audio/wav', ogg: 'audio/ogg'



};



const CSS_IMG_RE = /\.(png|jpe?g|gif|svg|webp|avif|bmp|tiff?|ico)([?#]|$)/i;



const CSS_FONT_RE = /\.(woff2?|ttf|otf|eot)([?#]|$)/i;



const PX_GIF = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';







function fixMime(url, blobType) {



  const bad = !blobType || blobType === 'text/plain' || blobType === 'application/octet-stream' || blobType === 'binary/octet-stream';



  if (!bad) return blobType;



  let ext = '';



  try { ext = new URL(url).pathname.split('.').pop().toLowerCase(); } catch (e) {}



  if (EXT_MIME[ext]) return EXT_MIME[ext];



  return blobType || 'application/octet-stream';



}







function toDataUrl(blob, url, forcedMime) {



  return new Promise((res, rej) => {



    const r = new FileReader();



    r.onload = () => {



      let out = r.result;



      const m = forcedMime || fixMime(url || '', blob.type);



      if (m && m !== blob.type) {



        const i = out.indexOf(',');



        out = 'data:' + m + ';base64,' + out.slice(i + 1);



      }



      res(out);



    };



    r.onerror = () => rej(new Error('read failed'));



    r.readAsDataURL(blob);



  });



}







function absUrl(base, rel) {



  try { return new URL(rel, base).href; } catch (e) { return null; }



}







function shortName(url) {



  try {



    const u = new URL(url);



    const p = u.pathname.split('/').filter(Boolean).pop() || u.hostname;



    return p.slice(0, 60);



  } catch (e) { return url.slice(0, 60); }



}







const IMPORT_RE = /@import\s+(?:url\(\s*(['"]?)([^'")]+)\1\s*\)|(['"])([^'"]+)\3)\s*[^;]*;/g;



const URL_RE = /url\(\s*("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|[^)'"\s][^)]*)\s*\)/g;







async function inlineCss(cssText, baseUrl, depth, opts) {



  depth = depth || 0;



  if (depth < 4) {



    const jobs = [];



    cssText.replace(IMPORT_RE, (m, q1, u1, q2, u2) => {



      const raw = (u1 || u2 || '').trim();



      const abs = /^data:/i.test(raw) ? null : absUrl(baseUrl, raw);



      jobs.push((async () => {



        if (!abs) return '';



        try {



          const t = await proxiedFetch(abs, false);



          return '\n' + (await inlineCss(t, abs, depth + 1, opts)) + '\n';



        } catch (e) {



          log(shortName(abs) + ' — import failed (' + e.message + ')', 'warn');



          return '';



        }



      })());



      return m;



    });



    if (jobs.length) {



      const results = await Promise.all(jobs);



      let i = 0;



      cssText = cssText.replace(IMPORT_RE, () => results[i++] ?? '');



    }



  }



  const jobs2 = [];



  cssText.replace(URL_RE, (m, tok) => {



    let raw = tok;



    if ((tok[0] === '"' && tok[tok.length - 1] === '"') || (tok[0] === "'" && tok[tok.length - 1] === "'")) {



      raw = tok.slice(1, -1).replace(/\\(.)/g, '$1');



    }



    const trimmed = raw.trim();



    if (/^(data:|about:|#)/i.test(trimmed)) return m;



    const abs = absUrl(baseUrl, trimmed);



    if (opts && opts.images === false && abs && CSS_IMG_RE.test(abs)) return m;



    if (opts && opts.fonts === false && abs && CSS_FONT_RE.test(abs)) return m;



    jobs2.push((async () => {



      if (!abs) return null;



      try {



        const b = await proxiedFetch(abs, true);



        return { token: m, data: await toDataUrl(b, abs) };



      } catch (e) {



        log(shortName(abs) + ' — asset failed (' + e.message + ')', 'warn');



        return null;



      }



    })());



    return m;



  });



  const reps = (await Promise.all(jobs2)).filter(Boolean);



  for (const r of reps) cssText = cssText.split(r.token).join(r.data);



  return cssText;



}







function pickSrcset(ss, base) {



  const parts = ss.split(',').map(s => s.trim()).filter(Boolean);



  if (!parts.length) return null;



  return absUrl(base, parts[parts.length - 1].split(/\s+/)[0]);



}







async function runPool(factories, limit, onDone) {



  let next = 0;



  const worker = async () => {



    while (next < factories.length) {



      const f = factories[next++];



      try { await f(); } catch (e) {}



      if (onDone) onDone();



    }



  };



  await Promise.all(Array.from({ length: Math.min(limit, factories.length) }, worker));



}







async function processDocument(doc, baseUrl, opts, depth) {



  const tasks = [];



  const track = fn => { totalCount++; return async () => { await fn(); }; };







  const binTask = (el, attr, abs) => tasks.push(track(async () => {



    try {



      const b = await proxiedFetch(abs, true);



      el.setAttribute(attr, await toDataUrl(b, abs));



      log(shortName(abs), 'ok');



    } catch (e) {



      el.setAttribute(attr, abs);



      log(shortName(abs) + ' — ' + e.message, 'warn');



    }



  }));







  const txtTask = fn => tasks.push(track(fn));







  doc.querySelectorAll('base').forEach(el => el.remove());



  doc.querySelectorAll('meta[http-equiv="refresh" i], meta[http-equiv="content-security-policy" i]').forEach(el => el.remove());



  doc.querySelectorAll('link[rel="preload" i], link[rel="preconnect" i], link[rel="dns-prefetch" i], link[rel="prefetch" i]').forEach(el => el.remove());







  if (opts.images === false) {



    doc.querySelectorAll('img').forEach(img => {



      img.removeAttribute('srcset');



      img.removeAttribute('sizes');



      img.setAttribute('src', PX_GIF);



    });



    doc.querySelectorAll('video[poster]').forEach(v => v.removeAttribute('poster'));



  } else {



    doc.querySelectorAll('img').forEach(img => {



      const ss = img.getAttribute('srcset');



      if (ss) {



        const best = pickSrcset(ss, baseUrl);



        if (best && !img.getAttribute('src')) img.setAttribute('src', best);



        img.removeAttribute('srcset');



        img.removeAttribute('sizes');



      }



      const src = img.getAttribute('src');



      if (src && !/^data:/i.test(src.trim())) {



        const abs = absUrl(baseUrl, src);



        if (abs) binTask(img, 'src', abs);



      }



    });







    doc.querySelectorAll('picture source[srcset]').forEach(s => s.removeAttribute('srcset'));







    doc.querySelectorAll('video[poster]').forEach(v => {



      const abs = absUrl(baseUrl, v.getAttribute('poster'));



      if (abs) binTask(v, 'poster', abs);



    });



  }







  if (opts.media) {



    doc.querySelectorAll('video[src], audio[src], source[src]').forEach(el => {



      const abs = absUrl(baseUrl, el.getAttribute('src'));



      if (abs && !/^data:/i.test(abs)) binTask(el, 'src', abs);



    });



  }







  doc.querySelectorAll('link[rel~="stylesheet"]').forEach(link => {



    const rawHref = link.getAttribute('href');



    const abs = rawHref ? absUrl(baseUrl, rawHref) : null;



    txtTask(async () => {



      if (!abs) { link.remove(); return; }



      try {



        const t = await proxiedFetch(abs, false);



        const css = await inlineCss(t, abs, 0, opts);



        const st = doc.createElement('style');



        st.textContent = css;



        link.replaceWith(st);



        log(shortName(abs), 'ok');



      } catch (e) {



        link.setAttribute('href', abs);



        log(shortName(abs) + ' — ' + e.message, 'warn');



      }



    });



  });







  if (opts.images === false) {



    doc.querySelectorAll('link[rel~="icon"]').forEach(link => link.remove());



  } else {



    doc.querySelectorAll('link[rel~="icon"]').forEach(link => {



      const rawHref = link.getAttribute('href');



      const abs = rawHref ? absUrl(baseUrl, rawHref) : null;



      if (abs && !/^data:/i.test(abs)) binTask(link, 'href', abs);



    });



  }







  doc.querySelectorAll('style').forEach(st => {



    txtTask(async () => {



      try { st.textContent = await inlineCss(st.textContent, baseUrl, 0, opts); }



      catch (e) { log('inline style — ' + e.message, 'warn'); }



    });



  });







  doc.querySelectorAll('[style]').forEach(el => {



    txtTask(async () => {



      try { el.setAttribute('style', await inlineCss(el.getAttribute('style'), baseUrl, 0, opts)); }



      catch (e) {}



    });



  });







  if (opts.scripts) {



    doc.querySelectorAll('script[src]').forEach(s => {



      const abs = absUrl(baseUrl, s.getAttribute('src'));



      txtTask(async () => {



        if (!abs) return;



        try {



          const t = await proxiedFetch(abs, false);



          const ns = doc.createElement('script');



          const type = s.getAttribute('type');



          if (type) ns.setAttribute('type', type);



          ns.textContent = t;



          s.replaceWith(ns);



          log(shortName(abs), 'ok');



        } catch (e) {



          s.setAttribute('src', abs);



          s.removeAttribute('integrity');



          log(shortName(abs) + ' — ' + e.message, 'warn');



        }



      });



    });



  } else {



    doc.querySelectorAll('script[src]').forEach(s => s.remove());



  }







  doc.querySelectorAll('script:not([src])').forEach(s => {



    const text0 = s.textContent || '';



    if (text0.length < 500 || opts.images === false || !/ytInitialData|ytInitialPlayerResponse|ytimg|ggpht/.test(text0)) return;



    const IMGRE = /https:\/\/[A-Za-z0-9.-]+(?:ytimg|ggpht|googleusercontent)\.com\/[^"'\s\\<>)]+?\.(?:jpg|jpeg|png|webp)[^"'\s\\<>)]*/gi;



    const urls = [];



    let mm;



    while ((mm = IMGRE.exec(text0)) && urls.length < 300) if (!urls.includes(mm[0])) urls.push(mm[0]);



    if (!urls.length) return;



    txtTask(async () => {



      const map = new Map();



      let idx = 0;



      await Promise.all(Array.from({ length: 6 }, async () => {



        while (idx < urls.length) {



          const u = urls[idx++];



          try {



            const b = await proxiedFetch(u, true);



            map.set(u, await toDataUrl(b, u));



          } catch (e) {}



        }



      }));



      if (!map.size) return;



      let t = s.textContent || '';



      map.forEach((data, u) => {



        t = t.split(u).join(data);



        const esc = u.replace(/&/g, '\\u0026');



        if (esc !== u) t = t.split(esc).join(data);



        const amp = u.replace(/&/g, '&amp;');



        if (amp !== u) t = t.split(amp).join(data);



      });



      s.textContent = t;



      log('inlined ' + map.size + ' script-referenced images', 'ok');



    });



  });







  try {



    if (/(^|\.)youtube\.com$/i.test(new URL(baseUrl).hostname)) {



      const yf = doc.createElement('script');



      yf.textContent = YT_FALLBACK_JS;



      doc.body.appendChild(yf);



    }



  } catch (e) {}







  if (opts.frames && depth < 1) {



    doc.querySelectorAll('iframe[src]').forEach(f => {



      const abs = absUrl(baseUrl, f.getAttribute('src'));



      txtTask(async () => {



        if (!abs) return;



        try {



          const t = await proxiedFetch(abs, false);



          const inner = new DOMParser().parseFromString(t, 'text/html');



          await processDocument(inner, abs, Object.assign({}, opts, { frames: false }), depth + 1);



          f.removeAttribute('src');



          f.setAttribute('srcdoc', '<!DOCTYPE html>' + inner.documentElement.outerHTML);



          log(shortName(abs) + ' (iframe)', 'ok');



        } catch (e) {



          f.setAttribute('src', abs);



          log(shortName(abs) + ' — ' + e.message, 'warn');



        }



      });



    });



  }







  doc.querySelectorAll('a[href]').forEach(a => {



    const abs = absUrl(baseUrl, a.getAttribute('href'));



    if (abs) a.setAttribute('href', abs);



  });







  doc.querySelectorAll('[integrity],[crossorigin],[nonce]').forEach(el => {



    el.removeAttribute('integrity');



    el.removeAttribute('crossorigin');



    el.removeAttribute('nonce');



  });







  await runPool(tasks, 6, bump);



}







let lastBlob = null;







const SKIP_EXT = /\.(pdf|zip|rar|7z|tar|gz|tgz|exe|dmg|iso|apk|mp[34]|m4a|webm|avi|mov|png|jpe?g|gif|svg|webp|bmp|ico|css|js|mjs|json|xml|txt|csv|woff2?|ttf|otf|eot)([?#]|$)/i;







function normalizeLink(abs) {



  try {



    const u = new URL(abs);



    if (u.protocol !== 'http:' && u.protocol !== 'https:') return null;



    u.hash = '';



    return u.href;



  } catch (e) { return null; }



}







function buildShell(startUrl, pages) {



  const bundle = {};



  pages.forEach(pg => {



    const s = pg.doc.createElement('script');



    s.textContent = NAV_INJECT + NAV_CLICK + NAV_SUBMIT;



    pg.doc.body.appendChild(s);



    const html = pg.doc.documentElement.outerHTML;



    const k1 = normalizeLink(pg.url);



    bundle[k1] = html;



    if (pg.key && pg.key !== k1) bundle[pg.key] = html;



  });



  const json = JSON.stringify(bundle).replace(/</g, '\\u003c');



  return '<!DOCTYPE html>\n<!-- Captured from ' + startUrl + ' on ' + new Date().toISOString() +



    ' by Offline Site Saver -->\n<html><head><meta charset="utf-8"><title>' + hostBase() +



    ' (offline)</title><style>html,body{margin:0;padding:0;height:100%;overflow:hidden}' +



    '#f{position:fixed;inset:0;width:100%;height:100%;border:0;background:#fff}</style></head><body>' +



    '<iframe id="f" sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-downloads"></iframe>' +



    '<a id="h" href="#" title="Back to start page" style="position:fixed;right:14px;bottom:14px;z-index:9;width:36px;height:36px;border-radius:50%;background:rgba(15,19,28,.6);color:#fff;display:flex;align-items:center;justify-content:center;text-decoration:none;font-size:18px;line-height:1">&#8962;</a>' +



    '<script type="application/json" id="b">' + json + '<\/script>\n<script>\n' +



    ROUTER_JS.replace('__ENTRY__', JSON.stringify(normalizeLink(startUrl))) +



    '\n<\/script></body></html>';



}







async function capture(rawUrl, preHtml) {



  let startUrl = rawUrl.trim();



  if (!/^https?:\/\//i.test(startUrl)) startUrl = 'https://' + startUrl;



  try { startUrl = new URL(startUrl).href; } catch (e) { throw new Error('Invalid URL'); }







  cache.clear();



  if (preHtml) cache.set(startUrl, preHtml);



  totalBytes = 0; doneCount = 0; totalCount = 0; crawlDone = 0; crawlKnown = 1; pageLabel = '';



  capStart = performance.now();



  document.title = OM_TITLE;



  logEl.innerHTML = '';



  logEl.classList.add('on');



  statusEl.hidden = false;



  $('#result').hidden = true;



  setBarPct(0);



  statText.textContent = t('fetchingPage');



  $('#go').disabled = true;







  const cap = SETTINGS.crawl ? Math.min(30, Math.max(1, SETTINGS.maxPages || 10)) : 1;



  const opts = { media: false, frames: false, scripts: !SETTINGS.skipScripts, images: !SETTINGS.skipImages, fonts: !SETTINGS.skipFonts };







  try {



    const pages = [];



    const queue = [startUrl];



    let seenPaths;



    try { const su = new URL(startUrl); seenPaths = new Set([su.origin + su.pathname]); }



    catch (e) { seenPaths = new Set(); }







    log(startUrl, 'info');



    const sn = streamingNotice(startUrl);



    if (sn) {



      const err = new Error(sn);



      err.streaming = true;



      throw err;



    }







    while (queue.length && pages.length < cap) {



      const pageUrl = queue.shift();



      pageLabel = 'Page ' + (pages.length + 1) + ': ' + shortName(pageUrl);



      crawlDone = pages.length;



      crawlKnown = pages.length + 1 + queue.length;



      doneCount = 0; totalCount = 0;



      setBarPct(crawlKnown ? Math.round(crawlDone / crawlKnown * 100) : 0);



      statText.textContent = pageLabel + ' ' + t('statFetching');



      let htmlText;



      try {



        htmlText = await proxiedFetch(pageUrl, false, true);



      } catch (e) {



        log('page failed: ' + shortName(pageUrl) + ' — ' + e.message, 'err');



        continue;



      }



      log('via ' + ROUTES[preferredRoute].name + ' (' + fmtBytes(htmlText.length) + ')', 'info');



      const doc = new DOMParser().parseFromString(htmlText, 'text/html');



      {



        const rootOf = h => { const p = h.split('.'); return p.length < 3 ? h : p.slice(-2).join('.'); };



        const homeRoot = rootOf(new URL(startUrl).hostname);



        doc.querySelectorAll('a[href]').forEach(a => {



          if (pages.length + 1 + queue.length >= cap) return;



          const abs = absUrl(pageUrl, a.getAttribute('href'));



          if (!abs) return;



          const norm = normalizeLink(abs);



          if (!norm || rootOf(new URL(norm).hostname) !== homeRoot) return;



          if (SKIP_EXT.test(norm)) return;



          const nu = new URL(norm);



          const pk = nu.origin + nu.pathname;



          if (seenPaths.has(pk)) return;



          seenPaths.add(pk);



          queue.push(norm);



        });



      }



      crawlKnown = pages.length + 1 + queue.length;



      await processDocument(doc, pageUrl, opts, 0);



      let pageKey = normalizeLink(pageUrl);



      const canon = doc.querySelector('link[rel="canonical"]');



      if (canon) {



        const cNorm = normalizeLink(absUrl(pageUrl, canon.getAttribute('href') || ''));



        if (cNorm) pageKey = cNorm;



      }



      pages.push({ url: pageUrl, key: pageKey, doc });



      crawlDone = pages.length;



      crawlKnown = pages.length + queue.length;



    }







    if (!pages.length) throw new Error('no pages could be captured');







    doneCount = 0; totalCount = 0; pageLabel = '';



    setBarPct(100);







    lastBlob = new Blob([buildShell(startUrl, pages)], { type: 'text/html' });



    statText.textContent = pages.length === 1



      ? t('doneOne')



      : t('doneMany', { n: pages.length });



    $('#size').textContent = fmtBytes(lastBlob.size);



    $('#fileNameInput').value = ((pages[0] && pages[0].doc && pages[0].doc.title) || '').trim().slice(0, 60) || hostBase();



    $('#result').hidden = false;



    log('finished: ' + pages.length + ' page(s) in one file', 'ok');



    if (SETTINGS.autoSave) saveNow();



    else log(t('readyManual'), 'info');



    addHist({ t: ((pages[0] && pages[0].doc && pages[0].doc.title) || hostBase()).trim().slice(0, 80) || hostBase(), u: startUrl, s: fmtBytes(lastBlob.size), d: new Date().toLocaleString() });



    if (SETTINGS.sound) chime();



    notifyDone(statText.textContent);



  } catch (e) {



    if (e && e.streaming) {



      statText.textContent = t('streamingShort');



      markStreaming(startUrl);



      log(e.message, 'warn');



    } else {



      statText.textContent = t('failed') + e.message;



      log(e.message, 'err');



      log('This site may block proxies or require a login.', 'err');



    }



  } finally {



    $('#go').disabled = false;



    document.title = OM_TITLE;



  }



}







function streamingNotice(urlStr) {



  try {



    const su = new URL(urlStr);



    const STREAM = /^([a-z0-9-]+\.)*(youtube\.com|youtu\.be|netflix\.com|hulu\.com|disneyplus\.com|primevideo\.com|max\.com|hbomax\.com|twitch\.tv|vimeo\.com|dailymotion\.com|bilibili\.com|tiktok\.com)$/i;



    if (!STREAM.test(su.hostname)) return null;



    return 'This is a streaming site (' + su.hostname + '). Its videos are built by JavaScript code and can\u2019t be packed into an offline file \u2014 only direct media links (.mp4, .webm, .mp3 \u2026) can be downloaded.';



  } catch (e) { return null; }



}







function decodeEntities(s) {



  return s.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (m, g) => {



    if (g[0] === '#') {



      const n = g[1].toLowerCase() === 'x' ? parseInt(g.slice(2), 16) : parseInt(g.slice(1), 10);



      return n > 31 && n < 65536 ? String.fromCharCode(n) : '';



    }



    const E = { amp:'&', lt:'<', gt:'>', quot:'"', apos:"'", nbsp:' ', copy:'©', reg:'®', hellip:'…', mdash:'—', ndash:'–', rsquo:'’', lsquo:'‘', rdquo:'”', ldquo:'“' };



    return E[g.toLowerCase()] || m;



  });



}







function extractPreview(doc, pageUrl) {



  let title = '';



  const ogT = doc.querySelector('meta[property="og:title"], meta[name="og:title"], meta[name="twitter:title"]');



  if (ogT && ogT.content) title = decodeEntities(ogT.content);



  if (!title && doc.title) title = decodeEntities(doc.title.trim());



  let thumb = '';



  const ogI = doc.querySelector('meta[property="og:image"], meta[property="og:image:url"], meta[name="twitter:image"], meta[name="twitter:image:src"], link[rel="image_src"]');



  if (ogI) thumb = absUrl(pageUrl, ogI.getAttribute('content') || ogI.getAttribute('href') || '') || '';



  if (!thumb) {



    try {



      const u = new URL(pageUrl);



      if (/(^|\.)youtube\.com$/i.test(u.hostname) && u.pathname === '/watch') {



        const v = u.searchParams.get('v');



        if (v) thumb = 'https://i.ytimg.com/vi/' + encodeURIComponent(v) + '/hqdefault.jpg';



      } else if (/(^|\.)youtu\.be$/i.test(u.hostname)) {



        thumb = 'https://i.ytimg.com/vi/' + encodeURIComponent(u.pathname.slice(1)) + '/hqdefault.jpg';



      }



    } catch (e) {}



  }



  return { title: title || pageUrl, thumb };



}







function estimateSize(htmlText, doc) {



  let b = htmlText.length;



  b += doc.querySelectorAll('link[rel~="stylesheet"]').length * 80e3;



  b += doc.querySelectorAll('img[src]').length * 45e3;



  let scriptImgs = 0;



  doc.querySelectorAll('script:not([src])').forEach(s => {



    const t = s.textContent || '';



    if (t.length >= 500 && /ytInitialData|ytimg|ggpht/.test(t)) {



      const r = /https:\/\/[A-Za-z0-9.-]+(?:ytimg|ggpht|googleusercontent)\.com\//g;



      let n = 0, m2;



      while ((m2 = r.exec(t)) && n < 300) n++;



      scriptImgs += n;



    }



  });



  b += scriptImgs * 55e3;



  const extra = SETTINGS.crawl ? Math.min(Math.max(1, SETTINGS.maxPages || 10) - 1, doc.querySelectorAll('a[href]').length) : 0;



  b += extra * Math.max(120e3, (b + htmlText.length) * 0.45);



  return b;



}







function fmtSize(n) {



  if (n >= 1024e6) return '~' + (n / 1024e6).toFixed(2) + ' GB';



  if (n >= 1048576) return '~' + (n / 1048576).toFixed(1) + ' MB';



  return '~' + Math.max(1, Math.round(n / 1024)) + ' KB';



}







let pendingCapture = null;



let pendingMedia = null;



let pendingYt = null;

let batchQueue = null;

let batchCancelled = false;







function ytVideoId(urlStr) {



  try {



    const u = new URL(urlStr);



    if (/(^|\.)youtube\.com$/i.test(u.hostname) && u.pathname === '/watch') return u.searchParams.get('v') || null;



    if (/(^|\.)youtu\.be$/i.test(u.hostname)) return u.pathname.replace(/^\//, '') || null;



  } catch (e) {}



  return null;



}







function extractYtPr(html) {



  const idx = html.indexOf('ytInitialPlayerResponse');



  if (idx < 0) return null;



  const ob = html.indexOf('{', idx);



  if (ob < 0) return null;



  let depth = 0;



  for (let i = ob; i < html.length; i++) {



    const c = html[i];



    if (c === '{') depth++;



    else if (c === '}') {



      depth--;



      if (depth === 0) {



        try { return JSON.parse(html.slice(ob, i + 1)); } catch (e) { return null; }



      }



    }



  }



  return null;



}







function pickYtFormat(formats) {



  if (!Array.isArray(formats) || !formats.length) return null;



  const mp4 = formats.filter(f => f && typeof f.url === 'string' && String(f.mimeType || '').indexOf('video/mp4') === 0);



  const pool = mp4.length ? mp4 : formats.filter(f => f && typeof f.url === 'string' && /^video\/(mp4|webm)\b/i.test(String(f.mimeType || '')));



  const use = pool.length ? pool : formats.filter(f => f && typeof f.url === 'string');



  use.sort((a, b) => ((b.width || 0) - (a.width || 0)) || ((b.bitrate || 0) - (a.bitrate || 0)));



  return use[0] || null;



}







function buildYtPage(vd, fmt, dataUrl, thumbUrl, videoId) {



  const esc = s => String(s || '').replace(/[<>'"&]/g, c => ({ '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '&': '&amp;' }[c]));



  const title = esc(vd.title || 'YouTube video');



  const chan = esc(vd.author || '');



  const label = fmt.qualityLabel || (fmt.height ? fmt.height + 'p' : 'video');



  const thumb = thumbUrl ? '<img src="' + thumbUrl + '" alt="' + title + '" style="max-width:640px;width:100%;border-radius:12px;margin-bottom:18px">' : '';



  return '<!DOCTYPE html>\n<!-- Captured from https://www.youtube.com/watch?v=' + videoId + ' on ' + new Date().toISOString() + ' by Offline Site Saver -->\n<html><head><meta charset="utf-8"><title>' + title + ' (offline)</title><style>body{background:#0f0f0f;color:#e6ebf5;font-family:system-ui,Roboto,Arial,sans-serif;margin:0;padding:24px}video{width:100%;max-width:960px;border-radius:12px;background:#000;display:block}h1{font-size:18px;line-height:1.4;margin:14px 0 6px}p{color:#aaa;margin:0 0 18px;font-size:14px}</style></head><body>' + thumb + '<video controls autoplay playsinline preload="auto" src="' + dataUrl + '"></video><h1>' + title + '</h1><p>' + chan + (label ? ' · ' + label : '') + (fmt.approxDurationMs ? ' · ~' + Math.max(1, Math.round(fmt.approxDurationMs / 60000)) + ' min' : '') + ' · Saved ' + new Date().toLocaleString() + '</p></body></html>';



}







// ============================================================
// Streaming-site detection (hint banner for video sites)
// ============================================================

const YT_STREAMING_HOSTS = ['youtube.com', 'youtu.be'];
const DRM_STREAMING_HOSTS = ['netflix.com', 'hulu.com', 'disneyplus.com', 'primevideo.com', 'max.com', 'hbomax.com', 'paramountplus.com', 'peacocktv.com', 'crunchyroll.com', 'hbo.com', 'appletv.com', 'tv.apple.com', 'discoveryplus.com', 'hotstar.com', 'nowtv.com', 'skygo.com', 'sky.com'];
const VIDEO_STREAMING_HOSTS = ['twitch.tv', 'vimeo.com', 'dailymotion.com', 'bilibili.com', 'tiktok.com', 'facebook.com', 'instagram.com', 'rumble.com', 'brighteon.com'];

function streamingHostMatch(host, list) {
  const h = (host || '').toLowerCase();
  if (!h) return false;
  return list.some(x => h === x || h === 'www.' + x || h.endsWith('.' + x));
}

function streamingKind(u) {
  try {
    const host = new URL((u || '').trim()).hostname;
    if (streamingHostMatch(host, YT_STREAMING_HOSTS)) return 'youtube';
    if (streamingHostMatch(host, DRM_STREAMING_HOSTS)) return 'drm';
    if (streamingHostMatch(host, VIDEO_STREAMING_HOSTS)) return 'video';
  } catch (e) {}
  return null;
}

function streamingReason(kind) {
  if (kind === 'youtube') return 'YouTube — bot and sign-in checks (plus DRM on paid videos) usually block a normal capture. Only the page itself can be saved, not the video stream.';
  if (kind === 'drm') return 'This is a DRM-protected streaming service — its videos cannot be saved by any tool.';
  return 'This site uses a JavaScript video player — a normal capture usually saves the page but not the video stream.';
}

function markStreaming(url) {
  const hint = $('#streamingHint');
  if (hint) { hint.textContent = streamingReason(streamingKind(url) || 'video'); hint.hidden = false; }
}

function updateStreamingUi(q) {
  const kind = streamingKind((q || '').trim());
  const hint = $('#streamingHint');
  if (hint) { hint.hidden = !kind; if (kind) hint.textContent = streamingReason(kind); }
}

const YT_KEYS = { ANDROID: 'AIzaSyA8eiZmM1FaDVjRy-df2KTyQ_Mz_yhr1QI', IOS: 'AIzaSyBX0aRM_aq1J1-6LJDVKeOF0mmAdGlbKw', WEB: 'AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8' };



const YT_CLIENTS = [



  { name: 'android', clientName: 'ANDROID', clientVersion: '19.09.37', key: 'ANDROID', extra: { androidSdkVersion: 30 } },



  { name: 'ios', clientName: 'IOS', clientVersion: '19.29.1', key: 'IOS', extra: { deviceModel: 'iPhone16,2', osVersion: '18.1.0' } },



  { name: 'embed', clientName: 'WEB_EMBEDDED_PLAYER', clientVersion: '1.20250919.01.00', key: 'WEB', extra: {} },



  { name: 'web', clientName: 'WEB', clientVersion: '2.20250919.00.00', key: 'WEB', extra: {} }



];







const YT_COBALT_INSTANCES = [



  'https://cobaltapi.cjs.nz/',



  'https://cobalt-omega.wolfy.love/',



  'https://bergung-api.hoffnungfuerdiezukunft.net/',



  'https://grapefruit.clxxped.lol/',



  'https://apicobalt.mgytr.top/',



  'https://melon.clxxped.lol/',



  'https://cobalt-api.lamps-dev.dev/',



  'https://cobalt-backend.canine.tools/'



];







function extractYtCfg(html) {



  const idx = html.indexOf('ytcfg.set(');



  if (idx < 0) return null;



  const ob = html.indexOf('{', idx);



  if (ob < 0) return null;



  let depth = 0;



  for (let i = ob; i < html.length; i++) {



    const c = html[i];



    if (c === '{') depth++;



    else if (c === '}') {



      depth--;



      if (depth === 0) {



        try { return JSON.parse(html.slice(ob, i + 1)); } catch (e) { return null; }



      }



    }



  }



  return null;



}







async function postYtJson(url, body) {



  const errs = [];



  const orders = [



    { label: 'direct', target: url },



    { label: 'cors.eu.org', target: 'https://cors.eu.org/' + url }



  ];



  for (const o of orders) {



    try {



      const ctrl = new AbortController();



      const timer = setTimeout(() => ctrl.abort(), Math.max(5, SETTINGS.timeoutSec || 15) * 1000);



      let res;



      try {



        res = await fetch(o.target, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body), signal: ctrl.signal, redirect: 'follow' });



      } finally { clearTimeout(timer); }



      if (!res.ok) throw new Error('HTTP ' + res.status);



      const txt = await res.text();



      if (!txt || txt.trim().charAt(0) !== '{') throw new Error('non-json');



      return { txt, via: o.label };



    } catch (e) { errs.push(o.label + ': ' + e.message); }



  }



  throw new Error(errs.join(' | ') || 'no route');



}







async function fetchYtPlayer(videoId) {



  const id = encodeURIComponent(videoId || '');



  const attempts = [];



  const pages = [



    { name: 'watch', url: 'https://www.youtube.com/watch?v=' + id },



    { name: 'watch-verified', url: 'https://www.youtube.com/watch?v=' + id + '&bpctr=9999999999&has_verified=1&gl=US&hl=en' },



    { name: 'pbj', url: 'https://www.youtube.com/watch?v=' + id + '&pbj=1', json: 1 },



    { name: 'mobile', url: 'https://m.youtube.com/watch?v=' + id },



    { name: 'mobile-verified', url: 'https://m.youtube.com/watch?v=' + id + '&bpctr=9999999999&has_verified=1' },



    { name: 'embed', url: 'https://www.youtube.com/embed/' + id + '?autoplay=1' },



    { name: 'embed-verified', url: 'https://www.youtube.com/embed/' + id + '?bpctr=9999999999&has_verified=1&autoplay=1' }



  ];



  for (const p of pages) {



    try {



      let pr = null, html;



      if (p.json) {



        html = await proxiedFetch(p.url, false, false, ['internet-archive']);



        try {



          const arr = JSON.parse(html);



          const items = Array.isArray(arr) ? arr : [arr];



          for (const item of items) {



            if (item && typeof item === 'object') {



              const cand = item.playerResponse || (item.player && item.player.playerResponse);



              if (cand) { pr = cand; break; }



            }



          }



        } catch (e) {}



      } else {



        html = await proxiedFetch(p.url, false, true, ['internet-archive']);



        pr = extractYtPr(html);



      }



      attempts.push({ via: p.name, pr, cfg: (!pr && typeof html === 'string') ? extractYtCfg(html) : null });



    } catch (e) { attempts.push({ via: p.name, err: e.message }); }



  }



  for (const a of attempts) {



    if (a.pr && a.pr.playabilityStatus && a.pr.playabilityStatus.status === 'OK') {



      const f = pickYtFormat((a.pr.streamingData && a.pr.streamingData.formats) || []);



      if (f) return { pr: a.pr, fmt: f, via: a.via };



    }



  }



  for (const inst of YT_COBALT_INSTANCES) {



    const lbl = 'cobalt (' + inst.replace(/^https?:\/\//, '').replace(/\/$/, '') + ')';



    try {



      const ctrl = new AbortController();



      const timer = setTimeout(() => ctrl.abort(), 8000);



      let res;



      try {



        res = await fetch(inst, { method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify({ url: 'https://www.youtube.com/watch?v=' + videoId, videoQuality: '1080', filenameStyle: 'basic', disableMetadata: true }), signal: ctrl.signal, redirect: 'follow' });



      } finally { clearTimeout(timer); }



      if (!res.ok) {



        const je = await res.json().catch(() => null);



        attempts.push({ via: lbl, err: 'HTTP ' + res.status + ((je && je.error && je.error.code) ? ' ' + je.error.code : '') });



        continue;



      }



      const j = await res.json().catch(() => null);



      if (!j || j.status === 'error' || typeof j.url !== 'string' || !j.url) { attempts.push({ via: lbl, err: (j && j.text) || (j && j.error && j.error.code) || 'no stream url' }); continue; }



      const name = (j && j.title) || String((j && j.filename) || '').replace(/\.(mp4|webm|mp3)$/i, '');



      const fmt = { url: j.url, mimeType: 'video/mp4', qualityLabel: ((j && j.videoQuality && j.videoQuality !== '0') || '1080p'), height: 1080, bitrate: 0, itag: 137, cobalt: true };



      const pseudo = { playabilityStatus: { status: 'OK' }, videoDetails: { title: name, author: '' }, streamingData: { formats: [fmt] } };



      attempts.push({ via: lbl, pr: pseudo });



    } catch (e) { attempts.push({ via: lbl, err: (e && e.message) || String(e) }); }



  }



  const cfg = attempts.map(a => a.cfg).filter(Boolean)[0] || null;



  const clients = YT_CLIENTS.slice();



  if (cfg && cfg.INNERTUBE_API_KEY && cfg.INNERTUBE_CONTEXT && cfg.INNERTUBE_CONTEXT.client) {



    const cur = cfg.INNERTUBE_CONTEXT.client;



    clients.splice(2, 0, { name: 'web-live', clientName: 'WEB', clientVersion: cur.clientVersion || '2.20250919.00.00', key: 'WEB', extra: {}, apiKey: cfg.INNERTUBE_API_KEY });



  }



  for (const cl of clients) {



    const body = {



      context: { client: Object.assign({ hl: 'en', clientName: cl.clientName, clientVersion: cl.clientVersion }, cl.extra || {}) },



      videoId: videoId,



      contentCheckOk: true,



      racyCheckOk: true



    };



    const url = 'https://www.youtube.com/youtubei/v1/player?key=' + (cl.apiKey || YT_KEYS[cl.key]);



    try {



      const { txt, via } = await postYtJson(url, body);



      attempts.push({ via: cl.name + ' (' + via + ')', pr: JSON.parse(txt) });



    } catch (e) { attempts.push({ via: cl.name, err: e.message }); }



  }



  let chosen = null, botReason = null;



  for (const a of attempts) {



    if (!a.pr) continue;



    const st = a.pr.playabilityStatus && a.pr.playabilityStatus.status;



    if (st && st !== 'OK') {



      const r = ((a.pr.playabilityStatus && a.pr.playabilityStatus.reason) || ('YouTube: ' + st)) + '';



      if (!botReason && /sign in|not a bot|bot|login|age|required/i.test(r)) botReason = a.via + ': ' + r;



      continue;



    }



    const fmt = pickYtFormat((a.pr.streamingData && a.pr.streamingData.formats) || []);



    if (!fmt) continue;



    chosen = { pr: a.pr, fmt, via: a.via };



    break;



  }



  if (chosen) return chosen;



  const detail = attempts.map(a => a.via + ': ' + (a.pr ? (((a.pr.playabilityStatus && a.pr.playabilityStatus.status) || 'ok') + ((a.pr.playabilityStatus && a.pr.playabilityStatus.reason) ? ' — ' + a.pr.playabilityStatus.reason : '')) : (a.err || ''))).join(' | ');



  if (!botReason) botReason = detail;



  const err = new Error(botReason);



  err.reason = detail;



  throw err;



}







async function prepareYoutube(urlStr) {



  statusEl.hidden = false;



  logEl.classList.add('on');



  logEl.innerHTML = '';



  setBarPct(0);



  $('#logToggle').hidden = false;



  statText.textContent = t('fetchingPreview');



  $('#go').disabled = true;



  $('#result').hidden = true;



  hideConfirm();



  const videoId = ytVideoId(urlStr);



  try {



    log('YouTube: probing ' + (videoId || urlStr) + ' across sources…', 'info');



    const info = await fetchYtPlayer(videoId);



    log('YouTube stream from ' + info.via + ' — ' + (info.fmt.qualityLabel || (info.fmt.height ? info.fmt.height + 'p' : 'video')) + ' mp4', 'info');



    const vd = info.pr.videoDetails || {};



    const fmt = info.fmt;



    $('#ctitle').textContent = vd.title || String(urlStr);



    $('#curl').textContent = urlStr;



    const rules = vd.thumbnail && vd.thumbnail.thumbnails;



    const th = (rules && rules.length ? rules[rules.length - 1].url : null) || ('https://i.ytimg.com/vi/' + encodeURIComponent(videoId || '') + '/hqdefault.jpg');



    const ti = $('#cthumb');



    ti.src = th;



    ti.style.display = '';



    $('#csize').textContent = (fmt.qualityLabel || (fmt.height ? fmt.height + 'p' : 'video')) + ' · mp4';



    pendingYt = { url: urlStr, v: videoId, vd, fmt, thumb: th };



    pendingCapture = null;



    pendingMedia = null;



    $('#cyes').textContent = t('yesSave');



    $('#confirmCard').hidden = false;



    statText.textContent = '';



    log('YouTube ready — ' + (vd.title || '') + ' (' + (fmt.qualityLabel || fmt.height + 'p') + ')', 'info');



    return true;



  } catch (e) {



    const msg = String(e.message || e.reason || e);



    const detail = (e.reason && String(e.reason) !== msg) ? String(e.reason) : null;



    log('YouTube capture in this tab not available — ' + msg, 'err');



    if (detail) log('YouTube attempts: ' + detail, 'warn');



    const segs = (detail || '').split(' | ').filter(s => s.indexOf(': ') > 0);



    const gateRe = /sign in to confirm|not a bot|bot.?check|recaptcha|error\.api\.youtube\.login/i;



    const botSegs = segs.filter(s => gateRe.test(s)).length;



    const allGated = segs.length > 0 && botSegs === segs.length;



    const cobaltGate = /error\.api\.youtube\.login/i.test(detail || '');



    if (allGated || cobaltGate) {



      log('This video is fully locked for anonymous download — even the server-side downloader services get “Sign in required” from YouTube. YouTube now demands a signed-in account for it, so neither this app nor public downloader sites can bypass it. The only remaining way is a desktop downloader (like yt-dlp) run with your own signed-in YouTube session.', 'warn');



      log('Use the “Download with yt-dlp” button in the toolbar (needs the local helper — see that button’s hint).', 'info');



    } else if (gateRe.test(msg)) {



      log('Tip: some sources were refused while others hit network errors — retry once (proxy hiccups resolve); if “Sign in” persists everywhere, YouTube is gating that video.', 'warn');



    }



    statText.textContent = '';



    return false;



  } finally {



    $('#go').disabled = false;



  }



}







async function runYoutubeSave(yt) {



  statText.textContent = t('downloadingMedia');



  $('#go').disabled = true;



  try {



    const blob = await proxiedFetch(yt.fmt.url, true);



    if (blob.size < 1024) throw new Error('empty video response');



    const dataUrl = await toDataUrl(blob, yt.fmt.url, yt.fmt && yt.fmt.mimeType);



    const page = buildYtPage(yt.vd, yt.fmt, dataUrl, yt.thumb, yt.v);



    lastBlob = new Blob([page], { type: 'text/html' });



    $('#size').textContent = fmtBytes(lastBlob.size);



    $('#fileNameInput').value = ((yt.vd && yt.vd.title) || 'youtube').trim().slice(0, 80) + '.offline.html';



    $('#result').hidden = false;



    statText.textContent = t('doneOne') + ' — video ' + fmtBytes(blob.size);



    log('YouTube video packed into one offline file (' + fmtBytes(lastBlob.size) + ')', 'ok');



    if (SETTINGS.autoSave) saveNow();



    else log(t('readyManual'), 'info');



    addHist({ t: ((yt.vd && yt.vd.title) || 'youtube').slice(0, 80), u: yt.url, s: fmtBytes(blob.size), d: new Date().toLocaleString() });



    if (SETTINGS.sound) chime();



    notifyDone(statText.textContent);



  } catch (e) {



    log(e.message, 'err');



    statText.textContent = t('failed') + e.message;



  } finally {



    $('#go').disabled = false;



  }



}







async function previewThenCapture(rawUrl, ignoreDup) {



  let startUrl = rawUrl.trim();



  if (!/^https?:\/\//i.test(startUrl)) startUrl = 'https://' + startUrl;



  try { startUrl = new URL(startUrl).href; } catch (e) { return; }

  if (!ignoreDup) {

    const dup = findDup(startUrl);

    if (dup) { showDupConfirm(startUrl, dup); return; }

  }







  statusEl.hidden = false;



  logEl.classList.add('on');



  logEl.innerHTML = '';



  setBarPct(0);



  $('#logToggle').hidden = false;







  const MEDIA_EXT = /\.(mp4|m4v|webm|mkv|mov|avi|mp3|m4a|flac|wav|ogg)(\?|#|$)/i;



  if (MEDIA_EXT.test(startUrl)) {



    let name = '';



    try { name = decodeURIComponent(new URL(startUrl).pathname.split('/').pop() || ''); } catch (e2) {}



    const em = startUrl.match(/\.([a-z0-9]+)(\?|#|$)/i);



    const ext = em ? em[1].toLowerCase() : '';



    $('#ctitle').textContent = name || 'video';



    $('#curl').textContent = startUrl;



    $('#csize').textContent = ext ? '.' + ext + ' media file' : 'media file';



    const ti = $('#cthumb');



    ti.removeAttribute('src');



    ti.style.display = 'none';



    pendingMedia = { url: startUrl };



    pendingCapture = null;



    $('#cyes').textContent = t('yesSave') + (ext ? ' (.' + ext + ')' : '');



    $('#confirmCard').hidden = false;



    statText.textContent = '';



    return;



  }







  if (ytVideoId(startUrl)) {



    await prepareYoutube(startUrl);



    return;



  }







  const sn = streamingNotice(startUrl);



  if (sn) {



    statText.textContent = t('streamingShort');



    markStreaming(startUrl);



    log(sn, 'warn');



    return;



  }







  statText.textContent = t('fetchingPreview');



  $('#go').disabled = true;



  $('#result').hidden = true;



  hideConfirm();







  try {



    const htmlText = await proxiedFetch(startUrl, false, true);



    log('preview ready (' + fmtBytes(htmlText.length) + ')', 'info');



    const doc = new DOMParser().parseFromString(htmlText, 'text/html');



    const pv = extractPreview(doc, startUrl);



    $('#ctitle').textContent = pv.title;



    $('#curl').textContent = startUrl;



    $('#csize').textContent = fmtSize(estimateSize(htmlText, doc));



    const ti = $('#cthumb');



    if (pv.thumb) { ti.src = pv.thumb; ti.style.display = ''; }



    else { ti.removeAttribute('src'); ti.style.display = 'none'; }



    pendingCapture = { url: startUrl, html: htmlText };



    pendingMedia = null;



    $('#cyes').textContent = t('yesSave');



    $('#confirmCard').hidden = false;



    statText.textContent = '';



  } catch (e) {



    log(e.message, 'err');



    statText.textContent = t('failed') + e.message;



  } finally {



    $('#go').disabled = false;



  }



}







let dupConfirmUrl = null;

function showDupConfirm(url, dup) {

  dupConfirmUrl = url;

  const ti = $('#cthumb');

  if (ti) { ti.removeAttribute('src'); ti.style.display = 'none'; }

  $('#ctitle').textContent = t('dupTitle');

  const urlEl = $('#curl');

  urlEl.style.wordBreak = 'break-all';

  urlEl.textContent = url;

  $('#csize').textContent = (dup.d ? t('dupSavedOn') + ' ' + dup.d + ' — ' : '') + t('dupQuestion');

  $('#cyes').textContent = t('dupAgain');

  $('#confirmCard').hidden = false;

  statText.textContent = '';

}

function hideConfirm() { $('#confirmCard').hidden = true; dupConfirmUrl = null; }







async function downloadMedia(startUrl) {



  statText.textContent = t('downloadingMedia');



  $('#go').disabled = true;



  try {



    const blob = await proxiedFetch(startUrl, true);



    let name = '';



    try { name = decodeURIComponent(new URL(startUrl).pathname.split('/').pop() || ''); } catch (e2) {}



    if (!name) name = 'video';



    const extMap = { 'video/mp4': 'mp4', 'video/webm': 'webm', 'video/quicktime': 'mov', 'video/x-matroska': 'mkv', 'audio/mpeg': 'mp3', 'audio/mp4': 'm4a', 'audio/ogg': 'ogg', 'audio/wav': 'wav', 'audio/x-wav': 'wav', 'audio/flac': 'flac' };



    const ct = (blob.type || '').split(';')[0].toLowerCase();



    if (!/\.[a-z0-9]{2,5}$/i.test(name)) name += extMap[ct] || 'mp4';



    const a = document.createElement('a');



    a.href = URL.createObjectURL(blob);



    a.download = name;



    document.body.appendChild(a);



    a.click();



    a.remove();



    setTimeout(() => URL.revokeObjectURL(a.href), 60000);



    statText.textContent = t('mediaDone') + ' (' + fmtBytes(blob.size) + ')';



    log(t('mediaDone') + ': ' + name + ' (' + fmtBytes(blob.size) + ')', 'ok');



    addHist({ t: name, u: startUrl, s: fmtBytes(blob.size), d: new Date().toLocaleString() });



    if (SETTINGS.sound) chime();



    notifyDone(statText.textContent);



  } catch (e) {



    log(e.message, 'err');



    statText.textContent = t('failed') + e.message;



  } finally {



    $('#go').disabled = false;



  }



}







$('#cyes').addEventListener('click', () => {



  if (dupConfirmUrl) {

    const du = dupConfirmUrl;

    dupConfirmUrl = null;

    hideConfirm();

    previewThenCapture(du, true);

    return;

  }

  if (batchQueue && batchQueue.length) {

    runBatch();

    return;

  }



  const p = pendingCapture;



  const m = pendingMedia;



  const y = pendingYt;



  hideConfirm();



  pendingCapture = null;



  pendingMedia = null;



  pendingYt = null;



  if (m) downloadMedia(m.url);



  else if (y) runYoutubeSave(y);



  else if (p) capture(p.url, p.html);



});



$('#cno').addEventListener('click', () => {



  hideConfirm();



  pendingCapture = null;



  pendingMedia = null;



  pendingYt = null;



  if (batchQueue) { batchQueue = null; batchCancelled = true; log('Batch: cancelled', 'warn'); }



  statText.textContent = t('cancelled');



});







$('#settingsBtn').addEventListener('click', () => {



  $('#setCrawl').checked = SETTINGS.crawl;



  $('#setMax').value = SETTINGS.maxPages;



  $('#setAuto').checked = SETTINGS.autoSave;



  $('#setTo').value = SETTINGS.timeoutSec;



  $('#setLight').checked = SETTINGS.light;



  $('#setAccent').value = /^#[0-9a-f]{6}$/i.test(SETTINGS.accent || '') ? SETTINGS.accent : '#4f8cff';



  renderAccPresets();



  selWall = null;



  renderWallGrid();



  $('#setLang').value = LANGS[SETTINGS.lang] ? SETTINGS.lang : 'en';



  $('#setFs').value = ['s', 'd', 'l', 'xl'].indexOf(SETTINGS.fontSize) >= 0 ? SETTINGS.fontSize : 'd';



  $('#setFont').value = SETTINGS.fontFamily || 'system';



  $('#setFontSize').value = SETTINGS.fontPixelSize || 16;



  $('#fontSizeVal').textContent = (SETTINGS.fontPixelSize || 16) + 'px';



  $('#setTrans').value = (SETTINGS.trans == null ? 55 : SETTINGS.trans);



  $('#transVal').textContent = (SETTINGS.trans == null ? 55 : SETTINGS.trans) + '%';



  $('#setBold').checked = !!SETTINGS.bold;



  $('#setHc').checked = !!SETTINGS.hc;



  $('#setRm').checked = !!SETTINGS.rm;



  $('#setSplashDetail').checked = !!SETTINGS.splashDetail;



  $('#setSplashAnim').value = SETTINGS.splashAnim || 'pulse';



  $('#setSound').checked = !!SETTINGS.sound;



  $('#setNotif').checked = !!SETTINGS.notif;



  $('#setClock').checked = !!SETTINGS.clock24;



  $('#setSkipImg').checked = !!SETTINGS.skipImages;



  $('#setSkipJs').checked = !!SETTINGS.skipScripts;



  $('#setSkipFont').checked = !!SETTINGS.skipFonts;



  $('#setAutoTheme').value = SETTINGS.autoTheme ? (SETTINGS.autoThemeMode === 'system' ? 'system' : 'on') : 'off';

  $('#setDarkFrom').disabled = !!(SETTINGS.autoTheme && SETTINGS.autoThemeMode === 'system');

  $('#setDarkUntil').disabled = !!(SETTINGS.autoTheme && SETTINGS.autoThemeMode === 'system');



  $('#setDarkFrom').value = SETTINGS.darkStart || '21:00';



  $('#setDarkUntil').value = SETTINGS.darkEnd || '07:00';



  $('#setLight').disabled = !!SETTINGS.autoTheme;



  $('#settingsCard').hidden = false;



  document.querySelectorAll('#settingsCard details.sgroup').forEach(d => d.removeAttribute('open'));



  document.body.classList.add('set-open');



  window.scrollTo(0, 0);



  $('#setSearch').value = '';



  // Clear any search highlights



  document.querySelectorAll('#settingsCard mark.search-highlight').forEach(m => m.replaceWith(m.textContent));



  document.querySelectorAll('#settingsCard .sgroup').forEach(g => g.style.display = '');



});



function persistSettings() {



  try { localStorage.setItem('omSettings', JSON.stringify(SETTINGS)); } catch (e) {}



}



function setS(key, val) { SETTINGS[key] = val; persistSettings(); }



$('#setCrawl').addEventListener('change', e => setS('crawl', e.target.checked));



$('#setMax').addEventListener('change', e => setS('maxPages', Math.min(30, Math.max(1, parseInt(e.target.value, 10) || 10))));



$('#setAuto').addEventListener('change', e => setS('autoSave', e.target.checked));



$('#setTo').addEventListener('change', e => setS('timeoutSec', Math.min(60, Math.max(5, parseInt(e.target.value, 10) || 15))));



$('#setLight').addEventListener('change', e => { if (SETTINGS.autoTheme) { e.target.checked = !!SETTINGS.light; return; } setS('light', e.target.checked); applyTheme(); });



$('#setSkipImg').addEventListener('change', e => setS('skipImages', e.target.checked));



$('#setSkipJs').addEventListener('change', e => setS('skipScripts', e.target.checked));



$('#setSkipFont').addEventListener('change', e => setS('skipFonts', e.target.checked));



$('#setAutoTheme').addEventListener('change', e => {

  const v = e.target.value;

  setS('autoTheme', v !== 'off');

  setS('autoThemeMode', v === 'system' ? 'system' : 'schedule');

  $('#setLight').disabled = v !== 'off';

  $('#setDarkFrom').disabled = v === 'system';

  $('#setDarkUntil').disabled = v === 'system';

  if (v !== 'off') applyAutoTheme(); else applyTheme();

});



$('#setDarkFrom').addEventListener('change', e => { setS('darkStart', e.target.value || '21:00'); if (SETTINGS.autoTheme) applyAutoTheme(); });



$('#setDarkUntil').addEventListener('change', e => { setS('darkEnd', e.target.value || '07:00'); if (SETTINGS.autoTheme) applyAutoTheme(); });



$('#setTrans').addEventListener('input', e => {



  const v = parseInt(e.target.value, 10) || 0;



  SETTINGS.trans = v;



  $('#transVal').textContent = v + '%';



  persistSettings();



  applyTrans();



});



$('#setAccent').addEventListener('input', () => {



  if (/^#[0-9a-f]{6}$/i.test($('#setAccent').value)) setS('accent', $('#setAccent').value.toLowerCase());



  applyAccent();



  renderAccPresets();



});



const ACCPRESETS = ['#4f8cff', '#7c5cff', '#e05cff', '#ff5c8a', '#ff8a3d', '#ffc44d', '#3ecf8e', '#22c1c4', '#8a5fdc', '#c2185b', '#e91e63', '#ff5722', '#ffb300', '#43a047', '#00bcd4', '#5c6bc0', '#ab47bc', '#78909c', '#d32f2f', '#607d8b'];



function renderAccPresets() {



  const box = $('#accPresets');



  if (!box) return;



  box.innerHTML = '';



  const cur = SETTINGS.accent && /^#[0-9a-f]{6}$/i.test(SETTINGS.accent) ? SETTINGS.accent.toLowerCase() : '';



  ACCPRESETS.forEach(col => {



    const s = document.createElement('button');



    s.type = 'button';



    s.style.cssText = 'width:26px;height:26px;border-radius:8px;cursor:pointer;padding:0;background:' + col + ';border:2px solid ' + (cur === col ? 'var(--text)' : 'transparent') + ';transition:transform .08s';



    s.addEventListener('click', () => {



      setS('accent', col);



      $('#setAccent').value = col;



      applyAccent();



      renderAccPresets();



    });



    box.appendChild(s);



  });



}



renderAccPresets();



$('#setLang').addEventListener('change', e => { if (LANGS[e.target.value]) setS('lang', e.target.value); applyI18n(); });



$('#setFs').addEventListener('change', e => {



  const fv = e.target.value;



  setS('fontSize', ['s', 'd', 'l', 'xl'].indexOf(fv) >= 0 ? fv : 'd');



  applyDisplay();



});



$('#setBold').addEventListener('change', e => { setS('bold', e.target.checked); applyDisplay(); });



$('#setHc').addEventListener('change', e => { setS('hc', e.target.checked); applyDisplay(); });



$('#setRm').addEventListener('change', e => { setS('rm', e.target.checked); applyDisplay(); });



$('#setSplashDetail').addEventListener('change', e => { setS('splashDetail', e.target.checked); });



$('#setSplashAnim').addEventListener('change', e => { setS('splashAnim', e.target.value); });



$('#setSound').addEventListener('change', e => { setS('sound', e.target.checked); if (e.target.checked) chime(); });



$('#setNotif').addEventListener('change', e => {



  setS('notif', e.target.checked);



  if (e.target.checked && 'Notification' in window && Notification.permission === 'default') Notification.requestPermission();



});



$('#setClock').addEventListener('change', e => setS('clock24', e.target.checked));







// Settings accordion: close other groups when one opens



document.querySelectorAll('#settingsCard details.sgroup.gset').forEach(d => {



  d.addEventListener('toggle', () => {



    if (d.open) document.querySelectorAll('#settingsCard details.sgroup.gset').forEach(o => { if (o !== d) o.removeAttribute('open'); });



    if (d.open) {



      const info = document.querySelector('#settingsCard details.sgroup.info');
      if (info) info.removeAttribute('open');



    }



  });



});



document.querySelectorAll('#settingsCard details.sgroup.info').forEach(d => {



  d.addEventListener('toggle', () => {



    if (d.open) document.querySelectorAll('#settingsCard details.sgroup.gset').forEach(o => { o.removeAttribute('open'); });



  });



});







function useCustomImage(file) {



  if (!file || file.type.indexOf('image/') !== 0) { log('That is not an image file.', 'err'); return; }



  const r = new FileReader();



  r.onload = () => {



    const im = new Image();



    im.onload = () => {



      const M = 1280, s = Math.min(1, M / Math.max(im.width, im.height));



      const cv = document.createElement('canvas');



      cv.width = Math.round(im.width * s);



      cv.height = Math.round(im.height * s);



      cv.getContext('2d').drawImage(im, 0, 0, cv.width, cv.height);



      try { setS('customWall', cv.toDataURL('image/jpeg', 0.82)); } catch (err) { log('Could not process that image.', 'err'); return; }



      setS('wall', 'custom');



      selWall = null;



      applyWall();



      renderWallGrid();



    };



    im.src = r.result;



  };



  r.readAsDataURL(file);



}



$('#setWallFile').addEventListener('click', () => $('#setWallInput').click());



$('#setWallInput').addEventListener('change', e => { useCustomImage(e.target.files[0]); e.target.value = ''; });



['dragover', 'drop'].forEach(ev => document.addEventListener(ev, e => e.preventDefault()));



document.addEventListener('drop', e => {



  try {



    const dt = e.dataTransfer;



    let fs = [];



    if (dt && dt.items && dt.items.length) {



      for (let i = 0; i < dt.items.length; i++) {



        const f = dt.items[i].getAsFile();



        if (f) fs.push(f);



      }



    } else if (dt && dt.files) fs = Array.from(dt.files);



    const img = fs.find(f => /^image\//.test(f.type));



    if (!img) { if (fs.length) log('Drop an image file to use it as a background.', 'warn'); return; }



    if ($('#settingsCard').hidden) { $('#settingsCard').hidden = false; document.body.classList.add('set-open'); window.scrollTo(0, 0); }



    useCustomImage(img);



  } catch (err) {



    log('Drop error: ' + err.message, 'err');



  }



});



function collapseGroups() {



  document.querySelectorAll('#settingsCard details.sgroup.gset').forEach(d => { d.open = false; });



}



function closeSettings() {



  $('#settingsCard').hidden = true;



  document.body.classList.remove('set-open');



}



$('#setBack').addEventListener('click', () => { collapseGroups(); closeSettings(); });



$('#setAccentReset').addEventListener('click', () => {



  SETTINGS.accent = '';



  persistSettings();



  applyAccent();



  $('#setAccent').value = '#4f8cff';



  renderAccPresets();



});







function getHist() { try { return JSON.parse(localStorage.getItem('omHistory') || '[]'); } catch (e) { return []; } }

function getSeen() { try { return JSON.parse(localStorage.getItem('omSeen') || '{}'); } catch (e) { return {}; } }

function normUrl(u) {

  try { const x = new URL(u); x.hash = ''; return x.origin + x.pathname.replace(/\/+$/, '') + x.search; }

  catch (e) { return String(u); }

}

function markSeen(e) {

  try {

    const seen = getSeen();

    seen[normUrl(e.u)] = { d: e.d, t: e.t };

    const ks = Object.keys(seen);

    while (ks.length > 200) delete seen[ks.shift()];

    localStorage.setItem('omSeen', JSON.stringify(seen));

  } catch (x) {}

}

function findDup(u) {

  const n = normUrl(u);

  try { const seen = getSeen(); if (seen[n]) return seen[n]; } catch (e) {}

  const h = getHist();

  for (let i = 0; i < h.length; i++) { if (normUrl(h[i].u) === n) return { d: h[i].d, t: h[i].t }; }

  return null;

}



function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }



function renderHist() {



  const ul = $('#histList');



  if (!ul) return;



  const h = getHist();



  ul.innerHTML = h.length



    ? h.map((x, i) => '<li><a href="#" data-hi="' + i + '">' + esc(x.t) + '</a> — <span style="color:var(--dim)">' + esc(x.s) + ' · ' + esc(x.d) + '</span></li>').join('')



    : '<li style="color:var(--dim)">Nothing saved yet.</li>';



}



function addHist(e) {



  const h = getHist();



  h.unshift(e);



  while (h.length > 20) h.pop();



  try { localStorage.setItem('omHistory', JSON.stringify(h)); } catch (x) {}



  markSeen(e);



  renderHist();



}



$('#histList').addEventListener('click', ev => {



  const a = ev.target.closest('a[data-hi]');



  if (!a) return;



  ev.preventDefault();



  const it = getHist()[+a.getAttribute('data-hi')];



  if (it && it.u) { $('#url').value = it.u; window.scrollTo({ top: 0 }); }



});



$('#histClear').addEventListener('click', () => { try { localStorage.removeItem('omHistory'); } catch (e) {} renderHist(); });



$('#histExport').addEventListener('click', () => {



  try {



    const blob = new Blob([JSON.stringify(getHist(), null, 2)], { type: 'application/json' });



    const a = document.createElement('a');



    a.href = URL.createObjectURL(blob);



    a.download = 'offline-saver-history-' + new Date().toISOString().slice(0, 10) + '.json';



    document.body.appendChild(a);



    a.click();



    a.remove();



    setTimeout(() => URL.revokeObjectURL(a.href), 60000);



  } catch (e) { log('Export failed: ' + e.message, 'err'); }



});



$('#histImport').addEventListener('click', () => $('#histImportInput').click());



$('#histImportInput').addEventListener('change', e => {



  const f = e.target.files[0];



  if (!f) return;



  const r = new FileReader();



  r.onload = () => {



    try {



      const arr = JSON.parse(r.result);



      if (!Array.isArray(arr)) throw new Error('not a list');



      const clean = arr.filter(x => x && typeof x.u === 'string').map(x => ({ t: String(x.t || ''), u: x.u, s: String(x.s || ''), d: String(x.d || '') }));



      const h = getHist();



      const seen = new Set(h.map(x => x.u));



      clean.forEach(x => { if (!seen.has(x.u)) { h.push(x); seen.add(x.u); } });



      while (h.length > 20) h.pop();



      try { localStorage.setItem('omHistory', JSON.stringify(h)); } catch (x) {}



      renderHist();



      log('Imported ' + clean.length + ' capture' + (clean.length === 1 ? '' : 's') + ' into history.', 'ok');



    } catch (err) { log('Import failed: ' + err.message, 'err'); }



  };



  r.readAsText(f);



  e.target.value = '';



});




// ============================================================
// Statistics dashboard (v5.8)
// ============================================================

function parseSize(str) {

  if (typeof str === 'number') return str;

  const m = String(str).trim().match(/^([\d.,]+)\s*(B|KB|MB|GB|TB)$/i);

  if (!m) return NaN;

  const n = parseFloat(m[1].replace(',', '.'));

  if (isNaN(n)) return NaN;

  const mult = { B: 1, KB: 1024, MB: 1048576, GB: 1073741824, TB: 1099511627776 }[m[2].toUpperCase()];

  return n * mult;

}

const STATS_MEDIA_RE = /\.(mp4|m4v|webm|mkv|mov|avi|mp3|m4a|flac|wav|ogg)(\?|#|$)/i;

function statsRow(label, val) {

  return '<tr><td style="padding:5px 8px 5px 0;color:var(--dim)">' + label + '</td><td style="padding:5px 0;text-align:right;font-weight:600">' + esc(val) + '</td></tr>';

}

function renderStats() {

  const box = $('#statsBox');

  if (!box) return;

  const h = getHist();

  if (!h.length) {

    box.innerHTML = '<p class="sub" style="margin:6px 0">No captures yet — stats will appear after your first capture.</p>';

    box.hidden = false;

    return;

  }

  let totalB = 0, unknown = 0, media = 0, pages = 0;

  const biggest = [];

  const months = {};

  h.forEach(x => {

    const b = parseSize(x.s);

    if (isNaN(b)) unknown++; else totalB += b;

    if (STATS_MEDIA_RE.test(String(x.u || ''))) media++; else pages++;

    const dt = new Date(String(x.d || ''));

    if (!isNaN(dt)) { const k = dt.getFullYear() + '-' + String(dt.getMonth() + 1).padStart(2, '0'); months[k] = (months[k] || 0) + 1; }

    if (!isNaN(b)) biggest.push({ t: x.t, s: x.s, b: b });

  });

  biggest.sort((x, y) => y.b - x.b);

  let html = '<table style="width:100%;border-collapse:collapse;font-size:13px;margin:6px 0">';

  html += statsRow('Saved captures', String(h.length));

  html += statsRow('Total storage', fmtBytes(totalB) + (unknown ? ' (+' + unknown + ' unknown size)' : ''));

  html += statsRow('Pages / media files', pages + ' / ' + media);

  html += statsRow('Average size', fmtBytes(totalB / Math.max(1, h.length - unknown)));

  html += '</table>';

  const keys = Object.keys(months).sort().slice(-12);

  if (keys.length) {

    const max = Math.max.apply(null, keys.map(k => months[k]));

    html += '<p style="margin:10px 0 4px;font-weight:600;font-size:13px">Captures per month</p><div style="display:flex;flex-direction:column;gap:4px">';

    keys.forEach(k => {

      const w = Math.max(4, Math.round((months[k] / max) * 100));

      html += '<div style="display:flex;align-items:center;gap:8px;font-size:12px"><span style="min-width:52px;color:var(--dim)">' + esc(k) + '</span><span style="flex:1;background:var(--surface-container);border-radius:6px;overflow:hidden"><span style="display:block;height:14px;width:' + w + '%;background:var(--accent)"></span></span><span style="min-width:20px;text-align:right;color:var(--dim)">' + months[k] + '</span></div>';

    });

    html += '</div>';

  }

  if (biggest.length) {

    html += '<p style="margin:10px 0 4px;font-weight:600;font-size:13px">Biggest captures</p><ol style="margin:4px 0 0;padding-left:22px;font-size:13px;line-height:1.8">';

    biggest.slice(0, 5).forEach(x => { html += '<li>' + esc(String(x.t || 'untitled').slice(0, 60)) + ' — ' + esc(x.s) + '</li>'; });

    html += '</ol>';

  }

  box.innerHTML = html;

  box.hidden = false;

}

$('#histStats').addEventListener('click', () => {

  if (!$('#statsBox').hidden) { $('#statsBox').hidden = true; $('#histStats').textContent = 'Show stats'; return; }

  renderStats();

  $('#histStats').textContent = 'Hide stats';

});

// ============================================================
// Offline player (v5.8) — builds a self-contained playlist page
// ============================================================

const PLAYER_EXT_TYPE = { mp4: 'video/mp4', m4v: 'video/mp4', webm: 'video/webm', mkv: 'video/x-matroska', mov: 'video/quicktime', mp3: 'audio/mpeg', m4a: 'audio/mp4', flac: 'audio/flac', wav: 'audio/wav', ogg: 'audio/ogg' };

function playerTrack(f) {

  let ext = (f.name.split('.').pop() || '').toLowerCase();

  let kind = PLAYER_EXT_TYPE[ext];

  if (!kind) kind = (f.type || '').split(';')[0];

  return { n: f.name.replace(/\.[a-z0-9]+$/i, ''), t: kind || 'video/mp4', e: f.name, s: f.size };

}

async function makePlayerTracks(files, embed) {

  let total = 0;

  const tracks = [];

  for (let i = 0; i < files.length; i++) {

    const f = files[i];

    const tr = playerTrack(f);

    if (embed) {

      total += f.size;

      if (total > 400 * 1048576) throw new Error('embedded media would be over ' + fmtBytes(400 * 1048576) + ' — build a linked player instead for large files');

      log('Embedding ' + (i + 1) + '/' + files.length + ' — ' + f.name + ' (' + fmtBytes(f.size) + ')', 'info');

      tr.u = await new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(r.result); r.onerror = () => rej(new Error('could not read ' + f.name)); r.readAsDataURL(f); });

    }

    tracks.push(tr);

  }

  return tracks;

}

function playerFmtBytes(b) {

  return b < 1024 ? (b + ' B') : (b < 1048576 ? (b / 1024).toFixed(1) + ' KB' : (b / 1048576).toFixed(2) + ' MB');

}

function buildPlayerHtml(tracks, embed, tour, library, portable) {

  const j = JSON.stringify(tracks).replace(/</g, '\\u003c');

  const chip = tour ? '<span style="background:var(--accent);color:#fff;border-radius:12px;padding:2px 10px;font-size:12px;vertical-align:middle;margin-left:8px">Sample</span>' : '';

  const note = embed

    ? ('All ' + tracks.length + ' track(s) are embedded in this page — fully offline, no media files needed.')

    : ('Keep this page next to your media files — they play from the same folder.');

  const tourPanel = tour ? (

    '<div id="tour" style="position:fixed;right:16px;bottom:16px;max-width:330px;background:var(--card);border:1px solid var(--accent);border-radius:12px;padding:12px 14px;box-shadow:0 8px 24px rgba(0,0,0,.35);z-index:50">'

    + '<p style="margin:0 0 6px;font-weight:600;font-size:13px">Quick tour</p>'

    + '<ol style="margin:0;padding-left:18px;font-size:12px;line-height:1.7;color:var(--dim)">'

    + '<li>The playlist is below — click any title to play it in the box above.</li>'

    + '<li>The bar under the player has volume, speed, shuffle, repeat, A–B loop and a sleep timer.</li>'

    + '<li>Space = pause, Left and Right arrows = skip tracks, F = fullscreen.</li>'

    + '<li>The gear opens Settings, Help and About. "/" jumps to search.</li>'

    + '<li>Open this file on any PC — everything it needs is inside.</li>'

    + '</ol>'

    + '<button id="tourOk" type="button" style="margin-top:8px;width:100%;padding:8px;background:var(--accent);color:var(--onaccent);border:0;border-radius:8px;font-size:13px;cursor:pointer">Got it</button>'

    + '</div>') : '';

  const ver = CURRENT_VERSION;
  const LIBJ = library ? 'true' : 'false';

  const LJ = (library && !portable) ? 'true' : 'false';
  const GENJ = JSON.stringify(buildPlayerHtml.toString()).replace(/<\//g, '<\\/');

  let tot = 0;

  for (let ti = 0; ti < tracks.length; ti++) tot += (tracks[ti].s || 0);

  const totSize = fmtBytes(tot);

  const bdate = new Date().toLocaleDateString();

  const PWNS = [["11.6", "Universal 8-second resume retry"], ["11.5", "Retrying resume for large files"], ["11.4", "Listening stats always visible"], ["11.3", "Wheel volume, listening stats, shortcut sheet"], ["11.2", "Up next queue + per-track speed"], ["11.1", "Gentle sleep fade-out"], ["11.0", "Player tab icon"], ["10.9", "Render-time duplicate filter"], ["10.8", "Track list panel for readability"], ["10.7", "Text chips + smarter duplicate detection"], ["10.6", "Library storage guards"], ["10.5", "Bookmarks, screenshots, folder import, portable copy"], ["10.4", "Persistent library storage"], ["10.3", "Auto theme follows your system"], ["10.2", "Type filter and name/size/newest sorting"], ["10.1", "The app name appears next to each What’s New point"], ["10.0", "What’s New panels are named per app"], ["9.9", "Removed the startup sound"], ["9.8", "The app plays the chime for the player"], ["9.7", "Chime synced to the ink splat"], ["9.6", "Startup chime fixed and slightly louder"], ["9.5", "Players keep watch for updates and refresh themselves"], ["9.4", "Startup chime plays with the splash"], ["9.3", "Auto-update is back — safe in-place refresh"], ["9.2", "Glowing white music note in the splash"], ["9.1", "Full-screen ink splash — every particle its own color"], ["9.0", "Auto-update removed — library players are now permanent standalone files"], ["8.5", "The full Material You palette is applied"], ["8.4", "Accent matches the app"], ["8.1", "Wallpaper previews work without the database"], ["8.0", "Match the app reads the app\u2019s current background directly"], ["7.7", "Backgrounds from the app and a What\u2019s New panel in the player"], ["7.6", "The update toast appears only once per version"], ["7.5", "Shuffle visibly reorders the playlist"], ["7.4", "About counts update live from the library"], ["7.3", "Shuffle applies to Next and Prev, with toasts"], ["7.2", "Refresh-to-update hot-swap"], ["7.1", "Modern file picker for Add tracks"], ["7.0", "Drag and drop adding"], ["6.9", "Library startup fix"], ["6.8", "Library mode with browser storage"]];

  const pwnJ = JSON.stringify(PWNS);

  return `<!DOCTYPE html>

<html lang="en" data-pv="${ver}" data-lib="${LIBJ}"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Offline Player</title>

<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%234f8cff'/%3E%3Ctext x='32' y='47' font-size='42' text-anchor='middle' fill='white' font-family='Arial'%3E%E2%99%AA%3C/text%3E%3C/svg%3E">

<style>

:root{--bg:#0b0f17;--card:#121826;--border:#232c40;--text:#e6ebf5;--dim:#8b95ab;--accent:#4f8cff;--onaccent:#fff;--chipBg:rgba(11,15,23,.5)}

body.light{--bg:#eef1f7;--card:#ffffff;--border:#d5dbe6;--text:#1a2433;--dim:#5b6675;--chipBg:rgba(238,241,247,.6)}

*{box-sizing:border-box}

body{margin:0;padding:26px 16px 60px;background:var(--bg);color:var(--text);font-family:system-ui,"Segoe UI",Roboto,sans-serif;transition:background .25s,color .25s}

.wrap{max-width:820px;margin:0 auto}

.topline{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap}

h1{font-size:22px;margin:0}

.gear{padding:9px 14px;border-radius:10px;border:1px solid var(--border);background:var(--card);color:var(--text);font-size:13px;cursor:pointer;font-weight:600}

.sub{color:var(--dim);font-size:13px;margin:4px 0 12px;background:var(--chipBg);padding:5px 10px;border-radius:8px;display:inline-block}

.np{display:flex;align-items:baseline;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-bottom:8px;background:var(--chipBg);padding:6px 12px;border-radius:10px}

#npTitle{font-weight:700;font-size:16px;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}

#npTime{color:var(--dim);font-size:13px;font-variant-numeric:tabular-nums}

#viz{width:100%;height:36px;display:block;margin-bottom:10px;border-radius:8px;background:var(--card)}

body.noviz #viz{display:none}

.player{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:12px;margin-bottom:12px}

.stage{position:relative}

.stage:fullscreen{background:#000;display:flex;flex-direction:column;justify-content:center}

.stage:fullscreen video,.stage:fullscreen audio{max-height:calc(100vh - 64px);width:100%}

.stage:fullscreen .nav{position:absolute;left:0;right:0;bottom:0;margin:0;background:rgba(0,0,0,.55);padding:8px;transition:opacity .25s}

.stage:fullscreen.hidebar .nav{opacity:0;pointer-events:none}

video::-webkit-media-controls-fullscreen-button,audio::-webkit-media-controls-fullscreen-button{display:none!important}

video,audio{display:block;width:100%;max-height:380px;border-radius:8px;background:#000}

.nav{display:flex;gap:6px;margin-top:10px;flex-wrap:wrap;align-items:center}

.nav button,.nav select{padding:8px 10px;background:var(--accent);color:var(--onaccent);border:0;border-radius:8px;font-size:13px;cursor:pointer}

.nav button.sec,.nav select{background:var(--bg);color:var(--text);border:1px solid var(--border)}

.nav input[type=range]{flex:1;min-width:70px;max-width:120px;accent-color:var(--accent)}

.nav .on{background:var(--accent);color:var(--onaccent);border-color:var(--accent)}

.tools{display:flex;gap:8px;margin:2px 0 8px;flex-wrap:wrap;align-items:center}

.tools input{flex:1;min-width:150px;padding:8px 10px;background:var(--card);color:var(--text);border:1px solid var(--border);border-radius:8px;font-size:13px}

.tools select{padding:8px;background:var(--card);color:var(--text);border:1px solid var(--border);border-radius:8px;font-size:13px}

.list{border-top:1px solid var(--border);background:var(--chipBg);border-radius:12px;padding:8px 10px;margin-top:6px}

.ghead{padding:10px 6px 6px;font-weight:700;font-size:13px;color:var(--dim)}

.track{display:flex;align-items:center;gap:8px;padding:9px 8px 12px;border-bottom:1px solid var(--border);cursor:pointer;border-radius:8px;position:relative}

.track:hover{background:rgba(127,127,127,.12)}

.track.on{box-shadow:inset 0 0 0 1px var(--accent)}

.track .num{min-width:20px;color:var(--dim);font-variant-numeric:tabular-nums}

.track .nm{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}

.track .pbar{position:absolute;left:36px;right:96px;bottom:4px;height:3px;background:var(--border);border-radius:2px;overflow:hidden}

.track .pbar span{display:block;height:100%;background:var(--accent);width:0}

.track .star{background:none;border:0;color:var(--dim);font-size:15px;cursor:pointer;padding:2px 4px}

.track .star.on{color:var(--accent)}

.track .sz{color:var(--dim);font-size:12px;flex:none}

.modal{position:fixed;inset:0;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;padding:16px;z-index:60}
.modal[hidden]{display:none}

.mcard{background:var(--bg);border:1px solid var(--border);border-radius:12px;max-width:560px;width:100%;max-height:84vh;overflow:auto;padding:14px}

.mtabs{display:flex;gap:6px;margin-bottom:10px}

.mtabs button{flex:1;padding:9px;border-radius:8px;border:1px solid var(--border);background:var(--card);color:var(--text);font-size:13px;cursor:pointer;font-weight:600}

.mtabs button.on{background:var(--accent);color:var(--onaccent);border-color:var(--accent)}

.srow{display:flex;align-items:center;gap:10px;margin:9px 0;font-size:13px;flex-wrap:wrap}

.srow label{flex:1;min-width:150px}

.sw{width:26px;height:26px;border-radius:50%;border:2px solid var(--border);cursor:pointer;padding:0}

h4{margin:12px 0 6px;font-size:14px}

.hlp{font-size:13px;line-height:1.8;color:var(--dim)}

kbd{background:var(--card);border:1px solid var(--border);border-radius:4px;padding:1px 6px;font-family:monospace;font-size:12px}

.btn{padding:8px 14px;border-radius:8px;border:0;background:var(--accent);color:var(--onaccent);font-size:13px;cursor:pointer}

#tour{position:fixed;right:16px;bottom:16px;max-width:330px;background:var(--card);border:1px solid var(--accent);border-radius:12px;padding:12px 14px;box-shadow:0 8px 24px rgba(0,0,0,.35);z-index:50}
body.dropping{outline:3px dashed var(--accent);outline-offset:-14px}
#toast{transition:opacity .3s}

</style></head>

<body>

<script>

(function () {

  function doSwap() {

    try {

      if (document.documentElement.getAttribute("data-lib") !== "true") return;

      var sv = parseFloat(localStorage.getItem("omPlayerShellVersion") || "0");

      var myV = parseFloat(document.documentElement.getAttribute("data-pv") || "0");

      if (!sv || !myV || sv <= myV) return;

      var shell = localStorage.getItem("omPlayerShell");

      if (!shell) return;

      document.open();

      document.write(shell);

      document.close();

    } catch (e) {}

  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", doSwap);

  else doSwap();

  setInterval(doSwap, 15000);

  document.addEventListener("visibilitychange", function () { if (!document.hidden) doSwap(); });

  window.addEventListener("focus", doSwap);

})();

${'</scr' + 'ipt>'}

<div id="inkSplash" style="position:fixed;inset:0;z-index:9999;overflow:hidden;background:var(--bg)">

  <div style="filter:blur(14px) contrast(20);position:absolute;inset:0" id="inkField">

      <div id="inkDrop" style="position:absolute;left:calc(50% - 20px);top:-44px;width:40px;height:40px;background:#ff4d5e;border-radius:50% 50% 50% 50% / 60% 60% 40% 40%;transition:top .4s cubic-bezier(.55,0,1,.45), border-radius .2s .35s"></div>

      <div id="inkCore" style="position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);width:0px;height:0px;background:#4f8cff;border-radius:50%;transition:width .5s cubic-bezier(.2,.8,.3,1), height .5s cubic-bezier(.2,.8,.3,1)"></div>

      <div class="ink-t" style="position:absolute;left:calc(50% - 2px);top:calc(50% - 2px);width:0;height:0;background:#ffb31f;border-radius:50%;transition:all 2.2s cubic-bezier(.15,.75,.25,1) .45s"></div>

      <div class="ink-t" style="position:absolute;left:calc(50% - 2px);top:calc(50% - 2px);width:0;height:0;background:#ff8a3d;border-radius:50%;transition:all 2.0s cubic-bezier(.2,.7,.3,1) .55s"></div>

      <div class="ink-t" style="position:absolute;left:calc(50% - 2px);top:calc(50% - 2px);width:0;height:0;background:#ffe23d;border-radius:50%;transition:all 1.8s cubic-bezier(.25,.65,.35,1) .65s"></div>

      <div class="ink-t" style="position:absolute;left:calc(50% - 2px);top:calc(50% - 2px);width:0;height:0;background:#3ddc84;border-radius:50%;transition:all 1.6s cubic-bezier(.3,.6,.4,1) .75s"></div>

      <div class="ink-t" style="position:absolute;left:calc(50% - 2px);top:calc(50% - 2px);width:0;height:0;background:#00d4a0;border-radius:50%;transition:all 1.4s cubic-bezier(.35,.55,.45,1) .85s"></div>

      <div class="ink-t" style="position:absolute;left:calc(50% - 2px);top:calc(50% - 2px);width:0;height:0;background:#00c2ff;border-radius:50%;transition:all 1.2s cubic-bezier(.4,.5,.5,1) .95s"></div>

      <div class="ink-s" style="position:absolute;left:calc(50% - 2px);top:calc(50% - 2px);width:0;height:0;background:#6c5ce7;border-radius:50%;transition:all 1.8s cubic-bezier(.2,.6,.3,1) 1.1s"></div>

      <div class="ink-s" style="position:absolute;left:calc(50% - 2px);top:calc(50% - 2px);width:0;height:0;background:#9b59ff;border-radius:50%;transition:all 1.6s cubic-bezier(.25,.55,.35,1) 1.2s"></div>

      <div class="ink-s" style="position:absolute;left:calc(50% - 2px);top:calc(50% - 2px);width:0;height:0;background:#c86bfa;border-radius:50%;transition:all 1.4s cubic-bezier(.3,.5,.4,1) 1.3s"></div>

      <div class="ink-s" style="position:absolute;left:calc(50% - 2px);top:calc(50% - 2px);width:0;height:0;background:#ff6bd6;border-radius:50%;transition:all 1.2s cubic-bezier(.35,.45,.45,1) 1.4s"></div>

      <div class="ink-s" style="position:absolute;left:calc(50% - 2px);top:calc(50% - 2px);width:0;height:0;background:#ff4fa0;border-radius:50%;transition:all 1.0s cubic-bezier(.4,.4,.5,1) 1.5s"></div>

      <div class="ink-s" style="position:absolute;left:calc(50% - 2px);top:calc(50% - 2px);width:0;height:0;background:#ff8fa3;border-radius:50%;transition:all 1.0s cubic-bezier(.45,.4,.5,1) 1.6s"></div>

      <div class="ink-s" style="position:absolute;left:calc(50% - 2px);top:calc(50% - 2px);width:0;height:0;background:#5eead4;border-radius:50%;transition:all 0.9s cubic-bezier(.5,.35,.5,1) 1.7s"></div>

      <div class="ink-s" style="position:absolute;left:calc(50% - 2px);top:calc(50% - 2px);width:0;height:0;background:#a3e635;border-radius:50%;transition:all 0.9s cubic-bezier(.55,.3,.5,1) 1.8s"></div>

    </div>

    <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:2;pointer-events:none">

      <span style="font-size:160px;color:#fff;opacity:0;transition:opacity .6s 1.6s, transform .6s 1.6s;font-weight:700;transform:scale(.5);text-shadow:0 0 28px rgba(0,0,0,.6), 0 6px 30px rgba(0,0,0,.5), 0 0 90px rgba(255,255,255,.35)" id="splashNote">&#9835;</span>

    </div>

    <div style="position:absolute;top:18px;left:0;right:0;text-align:center;font-size:12px;color:var(--dim);z-index:2;pointer-events:none;letter-spacing:3px;text-transform:uppercase">Offline Player</div>

</div>

${'</scr' + 'ipt>'}
<script>

(function () {

  var sp = document.getElementById('inkSplash');

  if (!sp) return;

  var drop = document.getElementById('inkDrop');

  var core = document.getElementById('inkCore');

  var t = sp.querySelectorAll('.ink-t');

  var s2 = sp.querySelectorAll('.ink-s');

  var cw = window.innerWidth || 800, ch = window.innerHeight || 600;

  var mn = Math.min(cw, ch);

  var cx = cw / 2, cy = ch / 2;

  setTimeout(function () {

    if (drop) drop.style.top = (cy - 20) + 'px';

  }, 200);

  setTimeout(function () {

    if (drop) drop.style.borderRadius = '50%';

    if (core) { core.style.width = '40px'; core.style.height = '40px'; }

    if (drop) drop.style.opacity = '0';

  }, 600);

  setTimeout(function () {

    var fr = [[-0.18, -0.10, 0.18], [0.12, -0.18, 0.15], [-0.26, 0.06, 0.13], [0.22, 0.10, 0.12], [-0.08, 0.20, 0.11], [0.28, -0.04, 0.10]];

    t.forEach(function (d, i2) {

      var g = fr[i2];

      if (!g) return;

      var w = g[2] * mn;

      d.style.left = (cx + g[0] * cw - w / 2) + 'px';

      d.style.top = (cy + g[1] * ch - w / 2) + 'px';

      d.style.width = w + 'px';

      d.style.height = w + 'px';

    });

  }, 800);

  setTimeout(function () {

    var fr2 = [[-0.42, -0.30, 0.05], [0.35, -0.26, 0.045], [-0.45, 0.18, 0.04], [0.40, 0.28, 0.05], [-0.10, 0.38, 0.038], [0.12, -0.40, 0.035], [0.46, 0.10, 0.03], [-0.30, 0.34, 0.028]];

    s2.forEach(function (d, i2) {

      var g = fr2[i2];

      if (!g) return;

      var w = Math.max(g[2] * mn, 12);

      d.style.left = (cx + g[0] * cw - w / 2) + 'px';

      d.style.top = (cy + g[1] * ch - w / 2) + 'px';

      d.style.width = w + 'px';

      d.style.height = w + 'px';

    });

    var n = document.getElementById('splashNote');

    if (n) { n.style.opacity = '1'; n.style.transform = 'scale(1)'; }

  }, 1400);

  setTimeout(function () {

    sp.style.transition = 'opacity .7s';

    sp.style.opacity = '0';

    setTimeout(function () { if (sp.parentNode) sp.remove(); }, 800);

}, 4200);

})();

${'</scr' + 'ipt>'}
${tourPanel}

<div class="wrap">

  <div class="topline"><h1>Offline Player${chip}</h1><button id="gear" class="gear" type="button">⚙ Settings</button></div>

  <p class="sub">${note} Built ${bdate}.</p>
  <p id="libwarn" class="sub" hidden style="color:#e6a23c">Library storage is unavailable in this context — this page will still play its built-in tracks.</p>
  <div id="toast" hidden style="position:fixed;left:50%;bottom:22px;transform:translateX(-50%);background:var(--accent);color:var(--onaccent);padding:10px 18px;border-radius:10px;font-size:13px;z-index:70;box-shadow:0 6px 18px rgba(0,0,0,.35)"></div>

  <div class="np"><div id="npTitle">—</div><div id="npTime">0:00 / 0:00</div></div>

  <canvas id="viz" width="600" height="36"></canvas>

  <div class="player"><div class="stage" id="stage"><div id="mediaBox"></div>

    <div class="nav">

      <button id="prev" class="sec" type="button">◀ Prev</button>

      <button id="play" class="sec" type="button">▶ Play / Pause</button>

      <button id="next" class="sec" type="button">Next ▶</button>

      <button id="mute" class="sec" type="button">🔊</button>

      <input id="vol" type="range" min="0" max="100" value="100">

      <select id="speed" class="sec"><option value="0.5">0.5×</option><option value="0.75">0.75×</option><option value="1" selected>1×</option><option value="1.25">1.25×</option><option value="1.5">1.5×</option><option value="1.75">1.75×</option><option value="2">2×</option></select>

      <button id="shuf" class="sec" type="button" title="Shuffle (S)">🔀</button>

      <button id="rep" class="sec" type="button" title="Repeat (R)">🔁 all</button>

      <button id="ab" class="sec" type="button" title="A–B loop">A–B</button>

      <select id="sleep" class="sec"><option value="0">Sleep: off</option><option value="15">Sleep: 15 min</option><option value="30">Sleep: 30 min</option><option value="60">Sleep: 60 min</option></select>

      <button id="shot" class="sec" type="button" hidden>📸 Shot</button>

      <button id="mark" class="sec" type="button" title="Bookmarks">🔖</button>

      <button id="qnext" class="sec" type="button" title="Up next">⏭</button>

      <button id="subs" class="sec" type="button" hidden>Subtitles…</button>

      <button id="fs" class="sec" type="button">⛶ Fullscreen</button>

      <select id="quality" class="sec" hidden></select>

    </div>

  </div></div>

  <div class="tools">

    <input id="search" placeholder="Filter tracks…  ( / )">

    <select id="typef"><option value="all">All types</option><option value="audio">Music only</option><option value="video">Video only</option></select>

    <select id="sort"><option value="builtin">Built-in order</option><option value="added">Newest first</option><option value="name">Name A–Z</option><option value="size">Largest first</option><option value="played">Most played</option><option value="fav">Favorites first</option></select>

    <button id="add" class="btn" type="button" hidden>Add tracks…</button><button id="addd" class="btn" type="button" hidden>📁 Folder</button><input id="addf" accept="audio/*,video/*,.mp3,.m4a,.flac,.wav,.ogg,.mp4,.m4v,.webm,.mkv,.mov" multiple style="position:absolute;left:-9999px;top:0;width:1px;height:1px;opacity:0"><button id="pexp" class="btn" type="button" hidden>⬇ Portable copy</button>
    <span id="cnt" class="sub" style="margin:0"></span>

  </div>

  <div class="list" id="list"></div>

  <p class="sub" style="margin-top:14px;font-size:12px">Everything stays on this device. The gear opens Settings, Help and About.</p>

</div>

<div id="modal" class="modal" hidden>

  <div class="mcard">

    <div class="mtabs"><button data-tab="set" class="on" type="button">Settings</button><button data-tab="help" type="button">Help</button><button data-tab="about" type="button">About</button><button data-tab="wn" type="button">What’s New</button><button id="mclose" type="button" style="flex:0 0 44px">✕</button></div>

    <div id="p-set">

      <h4>Playback</h4>

      <div class="srow"><label>Autoplay next track</label><input type="checkbox" id="s-auto"></div>

      <div class="srow"><label>Remember positions</label><input type="checkbox" id="s-resume"></div>

      <div class="srow"><label>Preload next audio track (gapless)</label><input type="checkbox" id="s-gap"></div>

      <div class="srow"><label>Default speed</label><select id="s-speed"><option value="0.5">0.5×</option><option value="0.75">0.75×</option><option value="1">1×</option><option value="1.25">1.25×</option><option value="1.5">1.5×</option><option value="2">2×</option></select></div>

      <h4>Appearance</h4>

      <div class="srow"><label>Theme</label><select id="s-theme"><option value="dark">Dark</option><option value="light">Light</option><option value="auto">Auto (system)</option></select></div>

      <div class="srow"><label>Accent matches the app</label><input type="checkbox" id="s-accm"></div>

      <div class="srow"><label>Accent color</label><input type="color" id="s-accent"> <span id="swatches"></span></div>

      <div class="srow"><label>Audio visualizer</label><input type="checkbox" id="s-viz"></div>

      <h4>Background</h4>

      <div class="srow"><label>Mode</label><select id="s-bgm"><option value="app">Match the app</option><option value="none">Plain (no wallpaper)</option><option value="id">Choose from wallpapers</option><option value="custom">Custom image</option></select></div>

      <div id="wallgrid2" style="display:flex;flex-wrap:wrap;gap:8px;margin:4px 0 10px"></div>

      <div class="srow"><button id="custombg" class="btn" type="button" hidden>Custom image…</button><input id="custombgf" accept="image/*,.jpg,.jpeg,.png,.webp,.gif" style="position:absolute;left:-9999px;top:0;width:1px;height:1px;opacity:0"></div>

      <h4>Sound</h4>

      <div class="srow"><label>Bass</label><input type="range" id="s-bass" min="-12" max="12" step="1"> <span id="v-bass" class="sub" style="margin:0">0 dB</span></div>

      <div class="srow"><label>Treble</label><input type="range" id="s-tre" min="-12" max="12" step="1"> <span id="v-tre" class="sub" style="margin:0">0 dB</span></div>

      <h4>Backup</h4>

      <div class="srow"><button id="exp" class="btn" type="button">Export state…</button><button id="imp" class="btn" type="button" style="background:var(--card);color:var(--text);border:1px solid var(--border)">Import state…</button><button id="snap" class="btn" type="button" hidden>Export shareable copy…</button><button id="saveshell" class="btn" type="button" hidden>Save updated player file…</button><input type="file" id="impf" accept=".json,application/json" hidden><span id="impmsg" class="sub" style="margin:0"></span></div>

      <h4>Listening</h4>

      <div id="pstats" class="hlp"></div>

    </div>

    <div id="p-help" hidden>

      <h4>Keyboard</h4>

      <div class="hlp"><kbd>Space</kbd> play / pause · <kbd>←</kbd> <kbd>→</kbd> previous / next track · <kbd>↑</kbd> <kbd>↓</kbd> volume<br><kbd>M</kbd> mute · <kbd>F</kbd> fullscreen · <kbd>+</kbd> / <kbd>-</kbd> speed · <kbd>S</kbd> shuffle · <kbd>R</kbd> repeat · <kbd>/</kbd> search · <kbd>H</kbd> tour · <kbd>Esc</kbd> close</div>

      <h4>How it works</h4>

      <div class="hlp">• Click a track to play it. The thin line under a title shows how far you got.<br>• Favorites (☆) and play counts are remembered between visits.<br>• Positions are remembered — reopen and continue where you left off.<br>• If a title has several versions (e.g. 720p and 1080p files), a Quality picker appears under the player.<br>• Subtitles: play a video, click Subtitles… and choose a .srt file.<br>• You can also drag audio/video files straight onto the player window to add them.<br>• To add or remove tracks, rebuild the player in Offline Site Saver (Settings → Capture history → Offline player).</div>

    </div>

    <div id="p-wn" hidden>

      <div id="pwnlist" class="hlp"></div>

    </div>

    <div id="p-about" hidden>

      <h4>About Offline Player</h4>

      <div class="hlp">Version ${ver} · built by <strong>Offline Site Saver</strong>.<br><span id="abstats">${tracks.length} track(s) · ${totSize} total</span> · ${embed ? "media embedded in this page" : "media linked from the same folder"}.<br>Runs entirely offline — nothing you play or do here leaves this device.<br>Settings, favorites and positions are stored on this device only.</div>

    </div>

  </div>

</div>

<input type="file" id="srtf" accept=".srt" hidden>

<div id="bmpanel" hidden style="position:fixed;right:14px;top:64px;z-index:60;background:var(--card);border:1px solid var(--border);border-radius:12px;padding:12px;width:280px;max-width:92vw;box-shadow:0 8px 24px rgba(0,0,0,.35)">

  <div style="display:flex;gap:6px;align-items:center;margin-bottom:6px"><strong style="font-size:13px">Bookmarks</strong><button id="bmadd" class="btn" type="button" style="margin-left:auto">＋ Add here</button><button id="bmclose" class="sec" type="button">✕</button></div>

  <div id="bmitems" style="max-height:240px;overflow:auto"></div>

</div>

<div id="qpanel" hidden style="position:fixed;right:14px;top:64px;z-index:60;background:var(--card);border:1px solid var(--border);border-radius:12px;padding:12px;width:300px;max-width:92vw;box-shadow:0 8px 24px rgba(0,0,0,.35)">

  <div style="display:flex;gap:6px;align-items:center;margin-bottom:6px"><strong style="font-size:13px">Up next</strong><button id="qclose" class="sec" type="button" style="margin-left:auto">✕</button></div>

  <div id="qitems" style="max-height:260px;overflow:auto"></div>

</div>

<div id="volToast" hidden style="position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);background:var(--chipBg);color:var(--text);padding:10px 18px;border-radius:10px;z-index:65;font-size:14px;pointer-events:none"></div>

<div id="keysPanel" hidden style="position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:80;background:var(--card);border:1px solid var(--border);border-radius:12px;padding:14px;width:340px;max-width:92vw;box-shadow:0 8px 30px rgba(0,0,0,.45)">

  <div style="display:flex;align-items:center;margin-bottom:8px"><strong style="font-size:13px">Keyboard shortcuts</strong><button id="keysclose" class="sec" type="button" style="margin-left:auto">✕</button></div>

  <div class="hlp" style="line-height:2.1"><kbd>/</kbd> search · <kbd>Space</kbd> play/pause · <kbd>←</kbd> <kbd>→</kbd> prev/next track · <kbd>↑</kbd> <kbd>↓</kbd> volume · <kbd>M</kbd> mute · <kbd>F</kbd> fullscreen · <kbd>+</kbd>/<kbd>-</kbd> speed · <kbd>S</kbd> shuffle · <kbd>R</kbd> repeat · <kbd>H</kbd> tour · <kbd>?</kbd> this panel · <kbd>Esc</kbd> close</div>

</div>

<script>

var T = ${j};
var LIBMODE = ${LIBJ};
var LIBLOAD = ${LJ};
var GEN = ${GENJ};
var PV = "${ver}";

var S = {autoplayNext:true, resume:true, speed:1, volume:100, theme:"dark", accent:"#4f8cff", viz:true, gapless:false, bass:0, treble:0, bgMode:"app", wallId:"", accentMode:"app"};

var ST = {pos:{}, dur:{}, fav:{}, cnt:{}, bm:{}, sp:{}, lt:0, lp:{}};

var tourEl = null;

try {

  var SV = JSON.parse(localStorage.getItem("omPlayer.v1") || "{}");

  var sk2;

  if (SV.s) for (sk2 in SV.s) S[sk2] = SV.s[sk2];

  if (SV.p) ST.pos = SV.p;

  if (SV.d) ST.dur = SV.d;

  if (SV.f) ST.fav = SV.f;

  if (SV.c) ST.cnt = SV.c;

  if (SV.b) ST.bm = SV.b;

  if (SV.e) ST.sp = SV.e;

  if (SV.l) ST.lt = SV.l;

  if (SV.w) ST.lp = SV.w;

} catch (e) {}

function persist() { try { localStorage.setItem("omPlayer.v1", JSON.stringify({ s: S, p: ST.pos, d: ST.dur, f: ST.fav, c: ST.cnt, b: ST.bm, e: ST.sp, l: ST.lt, w: ST.lp })); } catch (e) {} }

function tkey(i) { return T[i].k || (T[i].n + "|" + T[i].s); }

function spFor(i) { var k7 = tkey(i); return (ST.sp && ST.sp[k7]) ? ST.sp[k7] : (Number(S.speed) || 1); }

function fmt(b) { return b < 1024 ? b + " B" : b < 1048576 ? (b / 1024).toFixed(1) + " KB" : (b / 1048576).toFixed(2) + " MB"; }
function totalSize() { var t = 0; for (var i = 0; i < T.length; i++) t += T[i].s || 0; return t; }

function fmtT(s) { if (!isFinite(s) || s < 0) s = 0; s = Math.floor(s); var h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), x = s % 60; return (h ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (x < 10 ? "0" : "") + x; }

function isVid(i) { return T[i].t.indexOf("video") === 0; }

var cur = -1, el = null, pend = null, wantTime = -1, curUrl = null;

var shuffle = false, repeat = 1;

var aA = null, aB = null, abSt = 0;

var sleepAt = 0;

var fade9 = null, fadeBase = 1;

var lastTU = -1;

var actx = null, bassF = null, trebleF = null, analyser = null, vizArr = null;

function ensureAudio() {

  if (actx) return;

  var AC = window.AudioContext || window.webkitAudioContext;

  if (!AC) return;

  try {

    actx = new AC();

    bassF = actx.createBiquadFilter(); bassF.type = "lowshelf"; bassF.frequency.value = 200; bassF.gain.value = Number(S.bass) || 0;

    trebleF = actx.createBiquadFilter(); trebleF.type = "highshelf"; trebleF.frequency.value = 3000; trebleF.gain.value = Number(S.treble) || 0;

    analyser = actx.createAnalyser(); analyser.fftSize = 128; vizArr = new Uint8Array(analyser.frequencyBinCount);

    bassF.connect(trebleF); trebleF.connect(analyser); analyser.connect(actx.destination);

    if (actx.state === "suspended") actx.resume();

  } catch (e) { actx = null; }

}

var curAcc = "#4f8cff";

var mqDark = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

function autoDark() { return mqDark ? !!mqDark.matches : true; }

if (mqDark) { var onMQ = function () { if (S.theme === "auto") applyTheme(); }; if (mqDark.addEventListener) mqDark.addEventListener("change", onMQ); else if (mqDark.addListener) mqDark.addListener(onMQ); }

function applyTheme() {

  if (S.accentMode === "app") {

    try {

      var mv = JSON.parse(localStorage.getItem("omM3Vars") || "null");

      if (mv) { for (var mk in mv) document.body.style.setProperty(mk, mv[mk]); }

    } catch (e) {}

  } else {

    try { document.body.style.setProperty("--accent", S.accent); } catch (e) {}

  }

  var acc = curAcc && S.accentMode === "app" ? curAcc : S.accent;

  if (S.accentMode === "app") {

    try {

      var osa = JSON.parse(localStorage.getItem("omSettings") || "{}");

      if (osa.accent) acc = osa.accent;

    } catch (e) {}

  }

  if (!acc) acc = "#4f8cff";

  curAcc = acc;

  document.documentElement.style.setProperty("--accent", acc);

  document.body.className = S.theme === "light" ? "light" : (S.theme === "auto" ? (autoDark() ? "dark" : "light") : "dark");

  document.body.classList.toggle("noviz", !S.viz);



}

function applyEq() { if (bassF) bassF.gain.value = Number(S.bass) || 0; if (trebleF) trebleF.gain.value = Number(S.treble) || 0; }

function normName(x) { return x.toLowerCase().replace(/(480p|576p|720p|1080p|1440p|2160p|4k|8k|uhd|fhd|hdrip|webrip|webdl|web-dl|bluray|blu-ray|x264|x265|h264|h265|hevc|dvdrip)/g, "").replace(/[^a-z0-9]+/g, ""); }

var QG = {};

for (var qi = 0; qi < T.length; qi++) { var qk = normName(T[qi].n); if (!QG[qk]) QG[qk] = []; QG[qk].push(qi); }

function versionsOf(i) { var g = QG[normName(T[i].n)]; return g && g.length > 1 ? g : null; }

var listEl = document.getElementById("list"), npT = document.getElementById("npTitle"), npTi = document.getElementById("npTime"), cntEl = document.getElementById("cnt");

function hi() { var rs = listEl.querySelectorAll(".track"); for (var i = 0; i < rs.length; i++) rs[i].classList.toggle("on", +rs[i].getAttribute("data-i") === cur); }

function prPct(i) { var d = ST.dur[tkey(i)], p = ST.pos[tkey(i)]; if (!d || !p) return 0; return Math.max(0, Math.min(100, Math.round(p / d * 100))); }

function rowHtml(i) {

  return '<div class="track" data-i="' + i + '"><span class="num">' + (i + 1) + '</span><span class="nm">' + T[i].n + '</span><span class="pbar"><span style="width:' + prPct(i) + '%"></span></span><button class="star' + (ST.fav[tkey(i)] ? " on" : "") + '" data-star="' + i + '" type="button">' + (ST.fav[tkey(i)] ? "★" : "☆") + '</button>' + (LIBMODE ? '<button class="rm" data-rm="' + i + '" type="button" title="Remove from library">✕</button>' : '') + '<span class="sz">' + fmt(T[i].s) + '</span></div>';

}

function renderList() {

  var q = (document.getElementById("search").value || "").toLowerCase();

  var idxs = [];

  for (var i = 0; i < T.length; i++) if (!q || T[i].n.toLowerCase().indexOf(q) >= 0) idxs.push(i);

  var seen8 = {};

  var u9 = [];

  for (var i9 = 0; i9 < idxs.length; i9++) { var kk9 = T[idxs[i9]].n + "|" + T[idxs[i9]].s; if (seen8[kk9]) continue; seen8[kk9] = 1; u9.push(idxs[i9]); }

  idxs = u9;

  var tf = document.getElementById("typef").value;

  if (tf !== "all") { var f2 = [];

    for (var i2 = 0; i2 < idxs.length; i2++) { var v3 = isVid(idxs[i2]);

      if ((tf === "video" && v3) || (tf === "audio" && !v3)) f2.push(idxs[i2]);

    }

    idxs = f2;

  }

  var so = document.getElementById("sort").value;

  if (so === "name") idxs.sort(function (a, b) { var na = T[a].n.toLowerCase(), nb = T[b].n.toLowerCase(); return na < nb ? -1 : na > nb ? 1 : 0; });

  else if (so === "size") idxs.sort(function (a, b) { return (T[b].s || 0) - (T[a].s || 0); });

  else if (so === "added") idxs.sort(function (a, b) { return b - a; });

  if (so === "played") idxs.sort(function (a, b) { return (ST.cnt[tkey(b)] || 0) - (ST.cnt[tkey(a)] || 0); });

  else if (so === "fav") idxs.sort(function (a, b) { return (ST.fav[tkey(b)] ? 1 : 0) - (ST.fav[tkey(a)] ? 1 : 0); });

  if (shuffle && idxs.length > 1) { for (var si = idxs.length - 1; si > 0; si--) { var sj = Math.floor(Math.random() * (si + 1)); var sw = idxs[si]; idxs[si] = idxs[sj]; idxs[sj] = sw; } }

  var vids = [], mus = [];

  for (var j2 = 0; j2 < idxs.length; j2++) (isVid(idxs[j2]) ? vids : mus).push(idxs[j2]);

  function sec(t, arr) { return arr.length ? '<div class="ghead">' + t + " (" + arr.length + ')</div>' + arr.map(rowHtml).join("") : ""; }

  listEl.innerHTML = sec("Video", vids) + sec("Music", mus);

  if (!listEl.innerHTML) listEl.innerHTML = '<div class="ghead">No tracks match.</div>';

  cntEl.textContent = T.length + " tracks · " + fmt(totalSize());

  hi();

}

function renderBm() {

  var box = document.getElementById("bmitems");

  if (!box || cur < 0) { if (box) box.innerHTML = ""; return; }

  var k5 = tkey(cur);

  var arr = ST.bm[k5] || [];

  var h2 = "";

  if (!arr.length) h2 = '<div style="color:var(--dim);font-size:12px;padding:6px 0">No bookmarks for this track yet.</div>';

  for (var bi3 = 0; bi3 < arr.length; bi3++) h2 += '<div style="display:flex;gap:6px;align-items:center;padding:6px 2px;border-bottom:1px solid var(--border)"><button class="sec bjump" data-t="' + arr[bi3].t + '" type="button" style="flex:0 0 auto">▶ ' + fmtT(arr[bi3].t) + '</button><span style="flex:1;font-size:12px;overflow:hidden">' + (arr[bi3].n || "") + '</span><button class="sec bdel" data-i="' + bi3 + '" type="button" style="flex:0 0 auto">✕</button></div>';

  box.innerHTML = h2;

}

function qrow(ix, movable) {

  return '<div style="display:flex;gap:6px;align-items:center;padding:5px 2px;border-bottom:1px solid var(--border)"><button class="sec qjump" data-i="' + ix + '" type="button" style="flex:1;min-width:0;text-align:left;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">▶ ' + T[ix].n + '</button>' + (movable ? '<button class="sec qup" data-i="' + ix + '" type="button" style="flex:0 0 auto">↑</button><button class="sec qdn" data-i="' + ix + '" type="button" style="flex:0 0 auto">↓</button>' : '') + '</div>';

}

function renderQ() {

  var box = document.getElementById("qitems");

  if (!box) return;

  var h4 = "";

  if (cur < 0) h4 = '<div style="color:var(--dim);font-size:12px;padding:6px 0">Play something to see the queue.</div>';

  else if (repeat === 2) h4 = '<div style="color:var(--dim);font-size:12px;padding:6px 0">Looping this track.</div>';

  else if (!S.autoplayNext) h4 = '<div style="color:var(--dim);font-size:12px;padding:6px 0">Autoplay next is off.</div>';

  else if (shuffle) {

    var picked = {}, n3 = 0, guard = 0;

    while (n3 < 5 && n3 < T.length - 1 && guard < 60) { guard++; var r5 = Math.floor(Math.random() * T.length); if (r5 === cur || picked[r5]) continue; picked[r5] = 1; n3++; h4 += qrow(r5, false); }

    if (!h4) h4 = '<div style="color:var(--dim);font-size:12px;padding:6px 0">Add more tracks to shuffle.</div>';

  } else {

    var i5 = (cur + 1) % T.length, n4 = 0;

    while (n4 < 8 && i5 !== cur) { h4 += qrow(i5, true); n4++; i5 = (i5 + 1) % T.length; }

  }

  box.innerHTML = h4;

}

function renderStatsP() {

  var box = document.getElementById("pstats");

  if (!box) return;

  var wk = 0;

  var now9 = Date.now();

  for (var k9 in ST.lp) if (now9 - ST.lp[k9] < 7 * 86400000) wk++;

  var best = null, bc = 0;

  for (var k10 in ST.cnt) if (ST.cnt[k10] > bc) { bc = ST.cnt[k10]; best = k10; }

  var artists = {}, topA = null, taC = 0;

  for (var i10 = 0; i10 < T.length; i10++) { var c10 = ST.cnt[tkey(i10)] || 0; if (!c10) continue; var nm = T[i10].n; var a10 = nm.indexOf(" - ") > 0 ? nm.split(" - ")[0] : nm; artists[a10] = (artists[a10] || 0) + c10; }

  for (var a11 in artists) if (artists[a11] > taC) { taC = artists[a11]; topA = a11; }

  var h6 = '<div style="line-height:1.9"><strong>' + fmtT(ST.lt || 0) + '</strong> listened in total<br><strong>' + wk + '</strong> track(s) played in the last 7 days';

  if (best) h6 += '<br>Most played: <strong>' + best.split("|")[0] + '</strong> (' + bc + '\u00d7)';

  if (topA) h6 += '<br>Top artist: <strong>' + topA + '</strong>';

  box.innerHTML = h6 + '</div>';

}

function updNp() { npT.textContent = cur >= 0 ? T[cur].n : "—"; npTi.textContent = fmtT(el ? el.currentTime : 0) + " / " + fmtT(el && el.duration ? el.duration : 0); }

function updQuality() {

  var q = document.getElementById("quality"), vs = cur >= 0 ? versionsOf(cur) : null;

  if (!vs) { q.hidden = true; q.innerHTML = ""; return; }

  var h = "";

  for (var i = 0; i < vs.length; i++) h += '<option value="' + vs[i] + '"' + (vs[i] === cur ? " selected" : "") + ">" + T[vs[i]].n + " · " + fmt(T[vs[i]].s) + '</option>';

  q.innerHTML = h; q.hidden = false;

}

var srtCues = null, srtBox = null;

function onTime() {

  updNp();

  if (!el) return;

  var d10 = el.currentTime - lastTU;

  if (d10 > 0 && d10 <= 2) ST.lt = (ST.lt || 0) + d10;

  lastTU = el.currentTime;

  var k = tkey(cur);

  if (!ST.pos[k] || Math.abs(el.currentTime - ST.pos[k]) > 3) { ST.pos[k] = el.currentTime; if (isFinite(el.duration) && el.duration) ST.dur[k] = el.duration; persist(); }

  var rs = listEl.querySelectorAll(".track");

  for (var i = 0; i < rs.length; i++) if (+rs[i].getAttribute("data-i") === cur) { var pb = rs[i].querySelector(".pbar span"); if (pb && el.duration) pb.style.width = Math.min(100, el.currentTime / el.duration * 100) + "%"; }

  if (aA !== null && aB !== null && el.currentTime >= aB) { try { el.currentTime = aA; } catch (e) {} }

  if (srtCues && srtBox) { var c2 = null; for (var ci = 0; ci < srtCues.length; ci++) if (el.currentTime >= srtCues[ci].a && el.currentTime <= srtCues[ci].b) { c2 = srtCues[ci]; break; } srtBox.textContent = c2 ? c2.x : ""; }

  if (sleepAt && !fade9 && Date.now() >= sleepAt - 60000) {

    fadeBase = el ? el.volume : 1;

    fade9 = setInterval(function () {

      if (!el) { clearInterval(fade9); fade9 = null; return; }

      if (!sleepAt) { clearInterval(fade9); fade9 = null; el.volume = fadeBase; return; }

      var left = sleepAt - Date.now();

      if (left <= 0) { clearInterval(fade9); fade9 = null; sleepAt = 0; el.pause(); el.volume = fadeBase; return; }

      el.volume = Math.max(0.001, fadeBase * (left / 60000));

    }, 500);

  }

}

function revealBar() { var st = document.getElementById("stage"); if (hideT) { clearTimeout(hideT); hideT = null; } if (st) st.classList.remove("hidebar"); }

function scheduleHide() { var st = document.getElementById("stage"); if (!st || !(document.fullscreenElement === st || document.webkitFullscreenElement === st)) return; if (el && el.paused) { revealBar(); return; } if (hideT) clearTimeout(hideT); hideT = setTimeout(function () { st.classList.add("hidebar"); }, 2600); }

var stageFsPending = false, stageFsAt = 0;

function enterStage() { var st = document.getElementById("stage"); if (!st) return; try { var p = st.requestFullscreen(); if (p && p["catch"]) p["catch"](function () {}); } catch (e) {} }

function toggleFs() { var st = document.getElementById("stage"); if (document.fullscreenElement || document.webkitFullscreenElement) { if (document.exitFullscreen) document.exitFullscreen(); } else if (st) { if (st.requestFullscreen) st.requestFullscreen(); else if (st.webkitRequestFullscreen) st.webkitRequestFullscreen(); } }

function rerouteFs() {

  var fe = document.fullscreenElement || document.webkitFullscreenElement;

  if (fe && fe.tagName === "VIDEO") {

    stageFsPending = true; stageFsAt = Date.now(); window.__omWasPlaying = el && !el.paused;

    if (document.exitFullscreen) { var p = document.exitFullscreen(); if (p && p["catch"]) p["catch"](function () {}); }

    scheduleHide(); return;

  }

  if (stageFsPending && !fe && Date.now() - stageFsAt < 1200) {

    stageFsPending = false; var wp = window.__omWasPlaying;

    setTimeout(function () { enterStage(); if (wp) setTimeout(resumeIfPaused, 600); }, 80);

    scheduleHide(); return;

  }

  scheduleHide();

}

document.addEventListener("fullscreenchange", rerouteFs);

document.addEventListener("webkitfullscreenchange", rerouteFs);

function resumeIfPaused() { if (el && el.paused) { try { var rp = el.play(); if (rp && rp["catch"]) rp["catch"](function () {}); } catch (e) {} } }

setInterval(function () { if (stageFsPending && !document.fullscreenElement && !document.webkitFullscreenElement && Date.now() - stageFsAt > 500) { stageFsPending = false; resumeIfPaused(); } }, 400);

function play(i) {

  if (!T.length) return;

  if (pend) { clearTimeout(pend); pend = null; }

  cur = ((i % T.length) + T.length) % T.length;

  var t = T[cur];

  if (el) { el.pause(); el.remove(); }

  el = document.createElement(isVid(cur) ? "video" : "audio");

  el.controls = true;

  el.volume = S.volume / 100;

  el.defaultPlaybackRate = spFor(cur);

  el.playbackRate = spFor(cur);

  document.getElementById("s-speed").value = String(spFor(cur));

  if (t.blob) { if (curUrl) { URL.revokeObjectURL(curUrl); } curUrl = URL.createObjectURL(t.blob); el.src = curUrl; } else { el.src = t.u || t.e; }

  ensureAudio();

  if (actx) { try { var sn = actx.createMediaElementSource(el); sn.connect(bassF); } catch (e) {} }

  el.addEventListener("pause", revealBar);

  el.addEventListener("play", function () { scheduleHide(); });

  el.addEventListener("timeupdate", onTime);

  var seekN = 0, seekT0 = 0;

  function tryResume() {

    if (!S.resume || wantTime >= 0) return;

    if (seekT0 && Date.now() - seekT0 > 8000) return;

    if (seekN >= 12) return;

    var k2 = tkey(cur);

    if (!(ST.pos[k2] > 5)) return;

    if (isFinite(el.duration) && el.duration - ST.pos[k2] <= 10) { seekN = 99; return; }

    var first = seekN === 0;

    seekN++;

    if (!seekT0) seekT0 = Date.now();

    try { el.currentTime = ST.pos[k2]; if (first) showToast("Continuing from " + fmtT(ST.pos[k2])); } catch (e2) {}

    setTimeout(function () { if (el && el.currentTime < ST.pos[k2] - 2) { try { el.currentTime = ST.pos[k2]; } catch (e3) {} } }, 600);

  }

  el.addEventListener("loadedmetadata", function () {

    if (wantTime > 0) { try { el.currentTime = wantTime; } catch (e) {} wantTime = -1; seekN = 99; return; }

    seekN = 0; seekT0 = 0;

    tryResume();

  });

  el.addEventListener("canplay", function () {

    if (!S.resume || wantTime >= 0) return;

    var k3 = tkey(cur);

    if (ST.pos[k3] > 5 && el.currentTime < 1 && (!isFinite(el.duration) || el.duration - ST.pos[k3] > 10)) tryResume();

  });

  el.addEventListener("ended", function () {

    var k = tkey(cur);

    delete ST.pos[k]; persist();

    if (!S.autoplayNext) { updNp(); return; }

    var nx;

    if (repeat === 2) nx = cur;

    else if (shuffle) { nx = Math.floor(Math.random() * T.length); if (T.length > 1 && nx === cur) nx = (nx + 1) % T.length; }

    else nx = cur + 1;

    pend = setTimeout(function () { play(nx); }, 2500);

  });

  document.getElementById("mediaBox").innerHTML = "";

  document.getElementById("mediaBox").appendChild(el);

  ST.cnt[tkey(cur)] = (ST.cnt[tkey(cur)] || 0) + 1;

  ST.lp[tkey(cur)] = Date.now();

  lastTU = -1;

  persist();

  hi(); updNp(); updQuality();

  var pp = el.play(); if (pp && pp.catch) pp.catch(function () {});

  if ("mediaSession" in navigator) { try { navigator.mediaSession.metadata = new MediaMetadata({ title: t.n, album: "Offline Player" }); } catch (e) {} }

  if (S.gapless && !isVid(cur)) { var nx2 = (cur + 1) % T.length; if (nx2 !== cur && !isVid(nx2)) { var pre = document.createElement("audio"); pre.preload = "auto"; pre.style.display = "none"; pre.src = T[nx2].u || T[nx2].e; document.body.appendChild(pre); } }

  document.getElementById("subs").hidden = !isVid(cur);

  document.getElementById("shot").hidden = !isVid(cur);

  renderBm();

  renderQ();

  renderStatsP();

  if (srtBox) { srtBox.remove(); srtBox = null; } srtCues = null;

}

document.getElementById("play").addEventListener("click", function () { if (!el) { if (T.length) play(0); return; } if (el.paused) el.play(); else el.pause(); });

document.getElementById("prev").addEventListener("click", function () { if (shuffle && T.length > 1) { var r2 = Math.floor(Math.random() * T.length); if (r2 === cur) r2 = (r2 + 1) % T.length; play(r2); } else play(cur - 1); });

document.getElementById("next").addEventListener("click", function () { if (shuffle && T.length > 1) { var r = Math.floor(Math.random() * T.length); if (r === cur) r = (r + 1) % T.length; play(r); } else play(cur + 1); });

document.getElementById("mute").addEventListener("click", function () { if (!el) return; el.muted = !el.muted; this.textContent = el.muted ? "🔇" : "🔊"; });

document.getElementById("vol").addEventListener("input", function () { S.volume = +this.value; if (el) { el.volume = S.volume / 100; el.muted = false; } document.getElementById("mute").textContent = "🔊"; persist(); });

document.getElementById("speed").addEventListener("change", function () { S.speed = +this.value; if (el) el.playbackRate = S.speed; persist(); });

document.getElementById("shuf").addEventListener("click", function () { shuffle = !shuffle; this.classList.toggle("on", shuffle); showToast(shuffle ? "Shuffle on — playlist reordered" : "Shuffle off — original order"); renderList(); });

document.getElementById("rep").addEventListener("click", function () { repeat = (repeat + 1) % 3; this.textContent = repeat === 0 ? "🔁 off" : repeat === 1 ? "🔁 all" : "🔁 one"; this.classList.toggle("on", repeat !== 0); showToast(repeat === 0 ? "Repeat: off" : repeat === 1 ? "Repeat: all tracks" : "Repeat: this track"); });

document.getElementById("ab").addEventListener("click", function () {

  if (!el) return;

  if (abSt === 0) { aA = el.currentTime; aB = null; abSt = 1; this.textContent = "A " + fmtT(aA) + " · set B"; this.classList.add("on"); }

  else if (abSt === 1) { aB = el.currentTime > aA ? el.currentTime : aA + 5; abSt = 2; this.textContent = "A–B looping"; }

  else { aA = aB = null; abSt = 0; this.textContent = "A–B"; this.classList.remove("on"); }

});

document.getElementById("sleep").addEventListener("change", function () { sleepAt = +this.value ? Date.now() + (+this.value) * 60000 : 0; });

document.getElementById("quality").addEventListener("change", function () { var i = +this.value; if (i === cur) return; wantTime = el ? el.currentTime : -1; play(i); });

document.getElementById("subs").addEventListener("click", function () { document.getElementById("srtf").click(); });

document.getElementById("shot").addEventListener("click", function () {

  if (!el || !isVid(cur) || !el.videoWidth) { showToast("Open a video first"); return; }

  try {

    var cv2 = document.createElement("canvas");

    cv2.width = el.videoWidth; cv2.height = el.videoHeight;

    cv2.getContext("2d").drawImage(el, 0, 0);

    var a5 = document.createElement("a");

    a5.href = cv2.toDataURL("image/png");

    a5.download = (T[cur].n || "shot") + "-" + fmtT(el.currentTime).replace(/:/g, "-") + ".png";

    document.body.appendChild(a5); a5.click(); a5.remove();

    showToast("Screenshot saved");

  } catch (e6) { showToast("Screenshot blocked for this video — try an embedded player"); }

});

document.getElementById("mark").addEventListener("click", function () {

  var p2 = document.getElementById("bmpanel");

  p2.hidden = !p2.hidden;

  renderBm();

});

document.getElementById("bmclose").addEventListener("click", function () { document.getElementById("bmpanel").hidden = true; });

document.getElementById("bmadd").addEventListener("click", function () {

  if (!el || cur < 0) return;

  var k3 = tkey(cur);

  if (!ST.bm[k3]) ST.bm[k3] = [];

  var tt = Math.floor(el.currentTime);

  ST.bm[k3].push({ t: tt, n: "At " + fmtT(tt) });

  ST.bm[k3].sort(function (a, b) { return a.t - b.t; });

  persist();

  renderBm();

  showToast("Bookmark added at " + fmtT(tt));

});

document.getElementById("bmitems").addEventListener("click", function (e) {

  var j3 = e.target.closest(".bjump");

  if (j3) { var tt2 = +j3.getAttribute("data-t"); if (el) { try { el.currentTime = tt2; } catch (e4) {} if (el.paused) el.play(); } return; }

  var d3 = e.target.closest(".bdel");

  if (d3) { var k4 = tkey(cur); if (ST.bm[k4]) { ST.bm[k4].splice(+d3.getAttribute("data-i"), 1); persist(); renderBm(); } }

});

document.getElementById("qnext").addEventListener("click", function () { var p6 = document.getElementById("qpanel"); p6.hidden = !p6.hidden; renderQ(); });

document.getElementById("qclose").addEventListener("click", function () { document.getElementById("qpanel").hidden = true; });

document.getElementById("keysclose").addEventListener("click", function () { document.getElementById("keysPanel").hidden = true; });

document.getElementById("qitems").addEventListener("click", function (e) {

  var j6 = e.target.closest(".qjump");

  if (j6) { play(+j6.getAttribute("data-i")); return; }

  var u6 = e.target.closest(".qup");

  var d6 = e.target.closest(".qdn");

  if (u6 || d6) {

    var ix6 = +(u6 || d6).getAttribute("data-i");

    var sw6 = u6 ? ix6 - 1 : ix6 + 1;

    if (sw6 < 0 || sw6 >= T.length || ix6 === cur || sw6 === cur) return;

    var tmp6 = T[ix6]; T[ix6] = T[sw6]; T[sw6] = tmp6;

    renderList(); renderQ();

  }

});

document.getElementById("addd").addEventListener("click", function () {

  if (!window.showDirectoryPicker) { showToast("Folder import needs Chrome"); return; }

  window.showDirectoryPicker().then(function (dir) {

    var files = [];

    function walk(entry, depth) {

      if (depth > 3) return Promise.resolve();

      if (entry.kind === "file") return entry.getFile().then(function (f) { var ext = (f.name.split(".").pop() || "").toLowerCase(); if (LIBTYPE[ext]) files.push(f); });

      var p9 = [];

      var it2 = entry.values();

      function step2() { return it2.next().then(function (r9) { if (r9.done) return Promise.all(p9); p9.push(walk(r9.value, depth + 1)); return step2(); }); }

      return step2();

    }

    walk(dir, 0).then(function () { if (files.length) __libAdd(files); else showToast("No audio/video files found in that folder"); }).catch(function () {});

  }).catch(function () {});

});

document.getElementById("pexp").addEventListener("click", function () {

  if (!T.length) { showToast("Nothing to export — add tracks first"); return; }

  showToast("Packing tracks—this can take a moment");

  var out9 = [];

  var done9 = 0, total9 = T.length;

  function step9() {

    done9++;

    if (done9 < total9) { showToast("Packing " + done9 + "/" + total9 + "…"); return; }

    var mk9 = new Function("fmtBytes", "CURRENT_VERSION", "return (" + GEN + ")")(fmt, PV);

    var html9 = mk9(out9, false, false, true, true);

    var a9 = document.createElement("a");

    a9.href = URL.createObjectURL(new Blob([html9], { type: "text/html" }));

    a9.download = "offline-player-portable.html";

    document.body.appendChild(a9); a9.click(); a9.remove();

    setTimeout(function () { URL.revokeObjectURL(a9.href); }, 60000);

    showToast("Portable player saved — everything is inside this one file");

  }

  for (var i9 = 0; i9 < T.length; i9++) (function (t9, ix9) {

    if (t9.u) { out9[ix9] = { n: t9.n, t: t9.t, s: t9.s, k: t9.k, u: t9.u }; step9(); return; }

    var r9b = new FileReader();

    r9b.onload = function () { out9[ix9] = { n: t9.n, t: t9.t, s: t9.s, k: t9.k, u: r9b.result }; step9(); };

    r9b.onerror = function () { out9[ix9] = { n: t9.n, t: t9.t, s: t9.s, k: t9.k, u: "" }; step9(); };

    r9b.readAsDataURL(t9.blob);

  })(T[i9], i9);

});

document.getElementById("addd").hidden = !LIBMODE;

document.getElementById("pexp").hidden = !LIBMODE;

try { renderStatsP(); } catch (e12) {}

(function () {

  var mb9 = document.getElementById("mediaBox");

  if (!mb9) return;

  mb9.addEventListener("wheel", function (e) {

    if (!el || cur < 0) return;

    e.preventDefault();

    var d11 = e.deltaY < 0 ? 5 : -5;

    S.volume = Math.max(0, Math.min(100, S.volume + d11));

    el.volume = S.volume / 100;

    if (el.muted) { el.muted = false; document.getElementById("mute").textContent = "🔊"; }

    persist();

    var vt9 = document.getElementById("volToast");

    vt9.textContent = "🔊 Volume " + S.volume + "%";

    vt9.hidden = false;

    clearTimeout(vt9._t11);

    vt9._t11 = setTimeout(function () { vt9.hidden = true; }, 900);

  }, { passive: false });

})();

document.getElementById("srtf").addEventListener("change", function () {

  var f = this.files[0]; this.value = ""; if (!f || !el) return;

  var r = new FileReader();

  r.onload = function () {

    var txt = String(r.result).replace(/\\r\\n/g, "\\n").replace(/\\r/g, "\\n");

    var blocks = txt.split("\\n\\n"), cues = [];

    for (var i = 0; i < blocks.length; i++) {

      var lines = blocks[i].split("\\n").filter(function (x) { return x.trim() !== ""; });

      var tl = -1;

      for (var j3 = 0; j3 < lines.length; j3++) if (lines[j3].indexOf("-->") >= 0) { tl = j3; break; }

      if (tl < 1) continue;

      var mm = lines[tl].match(/(\\d+):(\\d+):(\\d+)[,.](\\d+)\\s*-->\\s*(\\d+):(\\d+):(\\d+)[,.](\\d+)/);

      if (!mm) continue;

      cues.push({ a: (+mm[1]) * 3600 + (+mm[2]) * 60 + (+mm[3]) + (+mm[4]) / 1000, b: (+mm[5]) * 3600 + (+mm[6]) * 60 + (+mm[7]) + (+mm[8]) / 1000, x: lines.slice(tl + 1).join("\\n") });

    }

    srtCues = cues.length ? cues : null;

    if (srtCues && !srtBox) { srtBox = document.createElement("div"); srtBox.style.cssText = "position:absolute;left:0;right:0;bottom:54px;text-align:center;color:#fff;font-size:15px;text-shadow:0 1px 3px #000;pointer-events:none;padding:0 12px"; document.getElementById("stage").appendChild(srtBox); }

    if (!srtCues && srtBox) { srtBox.remove(); srtBox = null; }

  };

  r.readAsText(f);

});

var hideT = null;

document.getElementById("fs").addEventListener("click", function () { toggleFs(); });

document.addEventListener("mousemove", function () { if (document.fullscreenElement || document.webkitFullscreenElement) scheduleHide(); });

document.addEventListener("click", function () { if (document.fullscreenElement || document.webkitFullscreenElement) scheduleHide(); });

listEl.addEventListener("click", function (e) {

  if (LIBMODE) { var rb = e.target.closest("[data-rm]"); if (rb) { var ri = +rb.getAttribute("data-rm"); if (!window.confirm("Remove '" + T[ri].n + "' from the library?")) return; idbDel(tkey(ri)); T.splice(ri, 1); if (ri === cur) { if (el) { el.pause(); el.remove(); } el = null; cur = -1; updNp(); } else if (ri < cur) cur--; renderList(); return; } }

  var sb = e.target.closest("[data-star]");

  if (sb) { var ki = tkey(+sb.getAttribute("data-star")); if (ST.fav[ki]) delete ST.fav[ki]; else ST.fav[ki] = true; persist(); renderList(); return; }

  var r2 = e.target.closest(".track");

  if (r2) play(+r2.getAttribute("data-i"));

});

document.getElementById("search").addEventListener("input", renderList);

document.getElementById("sort").addEventListener("change", renderList);

document.getElementById("typef").addEventListener("change", renderList);

var modal = document.getElementById("modal");

document.getElementById("gear").addEventListener("click", function () { modal.hidden = !modal.hidden; var as = document.getElementById("abstats"); if (as && !modal.hidden) as.textContent = T.length + " track(s) · " + fmt(totalSize()) + " total"; if (!modal.hidden) renderStatsP(); });

document.getElementById("mclose").addEventListener("click", function () { modal.hidden = true; });

var mtabs = document.querySelectorAll(".mtabs button[data-tab]");

for (var mi = 0; mi < mtabs.length; mi++) mtabs[mi].addEventListener("click", function () {

  for (var k3 = 0; k3 < mtabs.length; k3++) mtabs[k3].classList.toggle("on", mtabs[k3] === this);

  document.getElementById("p-set").hidden = this.getAttribute("data-tab") !== "set";

  document.getElementById("p-help").hidden = this.getAttribute("data-tab") !== "help";

  document.getElementById("p-about").hidden = this.getAttribute("data-tab") !== "about";

  document.getElementById("p-wn").hidden = this.getAttribute("data-tab") !== "wn";

  if (this.getAttribute("data-tab") === "wn") renderPwn();

});

var SWC = ["#4f8cff", "#e91e63", "#8e24aa", "#00897b", "#f4511e", "#43a047"];

var swEl = document.getElementById("swatches");

for (var si = 0; si < SWC.length; si++) { var b2 = document.createElement("button"); b2.type = "button"; b2.className = "sw"; b2.style.background = SWC[si]; (function (col) { b2.addEventListener("click", function () { S.accent = col; S.accentMode = "own"; document.getElementById("s-accent").value = col; if (document.getElementById("s-accm")) document.getElementById("s-accm").checked = false; applyTheme(); persist(); }); })(SWC[si]); swEl.appendChild(b2); }

var WALLS = {};

var THS = {};

try { var tarr = JSON.parse(localStorage.getItem("omWallThumbs") || "[]"); for (var ti = 0; ti < tarr.length; ti++) THS[tarr[ti].id] = { n: tarr[ti].n, url: tarr[ti].u }; } catch (e) {}

function applyBg() {

  try {

    var url = "";

    if (S.bgMode === "custom" && S.customBg) url = S.customBg;

    else if (S.bgMode === "id" && S.wallId) { if (THS[S.wallId]) url = THS[S.wallId].url; else if (WALLS[S.wallId]) url = WALLS[S.wallId].url; }

    else if (S.bgMode === "app") {

      var os = {};

      try { os = JSON.parse(localStorage.getItem("omSettings") || "{}"); } catch (e) {}

      if (os.customWall) url = os.customWall;

      if (!url) { var wc2 = localStorage.getItem("omWallCurrent"); if (wc2) url = wc2; }

      if (!url && os.wall && WALLS[os.wall]) url = WALLS[os.wall].url;

    }

    document.body.style.backgroundImage = url ? "url('" + url + "')" : "";

    document.body.style.backgroundSize = "cover";

    document.body.style.backgroundPosition = "center";

    document.body.style.backgroundAttachment = "fixed";

  } catch (e) {}

}

function buildWallGrid2() {

  var g = document.getElementById("wallgrid2");

  if (!g) return;

  g.innerHTML = "";

  var noneWrap = document.createElement("div");

  noneWrap.style.textAlign = "center";

  var none = document.createElement("button");

  none.type = "button"; none.className = "sw"; none.style.background = "var(--card)";

  none.style.width = "64px"; none.style.height = "40px"; none.style.borderRadius = "6px";

  none.title = "No wallpaper";

  none.addEventListener("click", function () { S.bgMode = "none"; document.getElementById("s-bgm").value = "none"; applyBg(); persist(); buildWallGrid2(); });

  noneWrap.appendChild(none);

  var noneLbl = document.createElement("div");

  noneLbl.style.cssText = "font-size:10px;color:var(--dim);margin-top:2px;max-width:64px;overflow:hidden";

  noneLbl.textContent = "None";

  noneWrap.appendChild(noneLbl);

  g.appendChild(noneWrap);

  if (!Object.keys(THS).length && !Object.keys(WALLS).length) {

    var note = document.createElement("div");

    note.style.cssText = "font-size:12px;color:var(--dim);margin:6px 0";

    note.textContent = "No wallpapers yet — open Offline Site Saver once (with this browser), then come back.";

    g.appendChild(note);

  }

  var wsrc = Object.keys(THS).length ? THS : WALLS;

  for (var k in wsrc) {

    (function (kk) {

      var wrap = document.createElement("div");

      wrap.style.textAlign = "center";

      var b = document.createElement("button");

      b.type = "button";

      b.style.cssText = "width:64px;height:40px;border-radius:6px;border:2px solid " + (S.bgMode === "id" && S.wallId === kk ? "var(--accent)" : "var(--border)") + ";background-size:cover;background-position:center;cursor:pointer;padding:0";

      b.style.backgroundImage = "url('" + WALLS[kk].url + "')";

      b.title = WALLS[kk].n || kk;

      b.addEventListener("click", function () { S.bgMode = "id"; S.wallId = kk; document.getElementById("s-bgm").value = "id"; applyBg(); persist(); buildWallGrid2(); });

      wrap.appendChild(b);

      var lbl = document.createElement("div");

      lbl.style.cssText = "font-size:10px;color:var(--dim);margin-top:2px;max-width:64px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap";

      lbl.textContent = WALLS[kk].n || kk;

      wrap.appendChild(lbl);

      g.appendChild(wrap);

    })(k);

  }

}

function renderWallGrid2Sel() { buildWallGrid2(); }

var PWN = ${pwnJ};

function renderPwn() {

  var h = "";

  for (var i = 0; i < PWN.length; i++) {

    var cur2 = PWN[i][0] === PV ? ' <span style="background:var(--accent);color:var(--onaccent);border-radius:8px;padding:1px 8px;font-size:11px">Current</span>' : '';

    h += '<div style="margin:0 0 10px"><strong>v' + PWN[i][0] + '</strong>' + cur2 + '<br>Offline Player — ' + PWN[i][1] + '</div>';

  }

  document.getElementById("pwnlist").innerHTML = h;

}

function syncSettingsUi() {

  document.getElementById("s-auto").checked = !!S.autoplayNext;

  document.getElementById("s-resume").checked = !!S.resume;

  document.getElementById("s-gap").checked = !!S.gapless;

  document.getElementById("s-viz").checked = !!S.viz;

  document.getElementById("s-speed").value = String(S.speed);

  document.getElementById("s-theme").value = S.theme;

  document.getElementById("s-accent").value = S.accent;

  if (document.getElementById("s-accm")) { document.getElementById("s-accm").checked = S.accentMode === "app"; document.getElementById("s-accent").disabled = S.accentMode === "app"; }

  document.getElementById("s-bass").value = S.bass;

  document.getElementById("s-tre").value = S.treble;

  document.getElementById("v-bass").textContent = S.bass + " dB";

  document.getElementById("v-tre").textContent = S.treble + " dB";

}

document.getElementById("s-auto").addEventListener("change", function () { S.autoplayNext = this.checked; persist(); });

document.getElementById("s-resume").addEventListener("change", function () { S.resume = this.checked; persist(); });

document.getElementById("s-gap").addEventListener("change", function () { S.gapless = this.checked; persist(); });

document.getElementById("s-viz").addEventListener("change", function () { S.viz = this.checked; applyTheme(); persist(); });

document.getElementById("s-speed").addEventListener("change", function () { S.speed = +this.value; if (el && cur >= 0) { var k8 = tkey(cur); if (!ST.sp) ST.sp = {}; ST.sp[k8] = S.speed; } if (el) el.playbackRate = S.speed; persist(); });

document.getElementById("s-theme").addEventListener("change", function () { S.theme = this.value; applyTheme(); persist(); });

document.getElementById("s-accent").addEventListener("input", function () { S.accent = this.value; S.accentMode = "own"; if (document.getElementById("s-accm")) document.getElementById("s-accm").checked = false; applyTheme(); persist(); });

document.getElementById("s-bass").addEventListener("input", function () { S.bass = +this.value; document.getElementById("v-bass").textContent = S.bass + " dB"; applyEq(); persist(); });

document.getElementById("s-tre").addEventListener("input", function () { S.treble = +this.value; document.getElementById("v-tre").textContent = S.treble + " dB"; applyEq(); persist(); });

document.getElementById("exp").addEventListener("click", function () {

  var blob = new Blob([JSON.stringify({ v: 1, s: S, p: ST.pos, d: ST.dur, f: ST.fav, c: ST.cnt, exported: new Date().toISOString() }, null, 2)], { type: "application/json" });

  var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "offline-player-state.json";

  document.body.appendChild(a); a.click(); a.remove();

  setTimeout(function () { URL.revokeObjectURL(a.href); }, 60000);

});

document.getElementById("imp").addEventListener("click", function () { document.getElementById("impf").click(); });

document.getElementById("impf").addEventListener("change", function () {

  var f = this.files[0]; this.value = ""; if (!f) return;

  var r2 = new FileReader();

  r2.onload = function () {

    try {

      var d2 = JSON.parse(String(r2.result));

      if (d2.s) for (var k4 in d2.s) S[k4] = d2.s[k4];

      if (d2.p) ST.pos = d2.p;

      if (d2.d) ST.dur = d2.d;

      if (d2.f) ST.fav = d2.f;

      if (d2.c) ST.cnt = d2.c;

      persist(); applyTheme(); applyEq(); syncSettingsUi(); renderList();

      document.getElementById("impmsg").textContent = "Imported ✓";

    } catch (e) { document.getElementById("impmsg").textContent = "Import failed"; }

  };

  r2.readAsText(f);

});

document.addEventListener("keydown", function (e) {

  var tg = e.target.tagName;

  if (tg === "INPUT" || tg === "SELECT" || tg === "TEXTAREA") { if (e.key === "Escape") e.target.blur(); return; }

  if (e.key === "/") { e.preventDefault(); document.getElementById("search").focus(); return; }

  if (e.key === "Escape") { if (!modal.hidden) { modal.hidden = true; return; } }

  if (e.key === "h" || e.key === "H") { if (tourEl) tourEl.style.display = (tourEl.style.display === "none" ? "block" : "none"); return; }

  if (e.code === "Space") { e.preventDefault(); if (!el) { if (T.length) play(0); return; } if (el.paused) el.play(); else el.pause(); return; }

  if (e.key === "ArrowRight") { play(cur + 1); return; }

  if (e.key === "ArrowLeft") { play(cur - 1); return; }

  if (e.key === "ArrowUp") { e.preventDefault(); S.volume = Math.min(100, S.volume + 5); document.getElementById("vol").value = S.volume; if (el) el.volume = S.volume / 100; return; }

  if (e.key === "ArrowDown") { e.preventDefault(); S.volume = Math.max(0, S.volume - 5); document.getElementById("vol").value = S.volume; if (el) el.volume = S.volume / 100; return; }

  if (e.key === "m" || e.key === "M") { if (el) { el.muted = !el.muted; document.getElementById("mute").textContent = el.muted ? "🔇" : "🔊"; } return; }

  if (e.key === "f" || e.key === "F") { toggleFs(); return; }

  if (e.key === "+" || e.key === "=") { stepSpeed(1); return; }

  if (e.key === "-" || e.key === "_") { stepSpeed(-1); return; }

  if (e.key === "s" || e.key === "S") { document.getElementById("shuf").click(); return; }

  if (e.key === "r" || e.key === "R") { document.getElementById("rep").click(); return; }

  if (e.key === "?") { var kp9 = document.getElementById("keysPanel"); kp9.hidden = !kp9.hidden; return; }

});

function stepSpeed(d) { var arr = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2], i = arr.indexOf(Number(S.speed) || 1); i = Math.max(0, Math.min(arr.length - 1, i + d)); S.speed = arr[i]; document.getElementById("speed").value = String(S.speed); if (el) el.playbackRate = S.speed; persist(); }

if ("mediaSession" in navigator) { try { navigator.mediaSession.setActionHandler("play", function () { if (el) el.play(); }); navigator.mediaSession.setActionHandler("pause", function () { if (el) el.pause(); }); navigator.mediaSession.setActionHandler("previoustrack", function () { play(cur - 1); }); navigator.mediaSession.setActionHandler("nexttrack", function () { play(cur + 1); }); } catch (e) {} }

var vcv = document.getElementById("viz"), vctx = vcv.getContext("2d");

function drawViz() {

  requestAnimationFrame(drawViz);

  if (!S.viz) return;

  if (!analyser || !el || el.paused) { vctx.clearRect(0, 0, vcv.width, vcv.height); return; }

  analyser.getByteFrequencyData(vizArr);

  vctx.clearRect(0, 0, vcv.width, vcv.height);

  var bw = vcv.width / vizArr.length;

  for (var i = 0; i < vizArr.length; i++) { var h4 = vizArr[i] / 255 * vcv.height; vctx.fillStyle = curAcc; vctx.fillRect(i * bw + 1, vcv.height - h4, bw - 2, h4); }

}

var idb = null;

function idbOpen(cb) { if (!window.indexedDB) { libFail(); return; } var rq = indexedDB.open("omPlayerLib", 2); rq.onupgradeneeded = function () { var d0 = rq.result; if (!d0.objectStoreNames.contains("media")) d0.createObjectStore("media"); if (!d0.objectStoreNames.contains("walls")) d0.createObjectStore("walls"); }; rq.onsuccess = function () { idb = rq.result; cb(); }; rq.onerror = function () { idb = null; libFail(); }; }

function idbAll(cb) { try { var tx = idb.transaction("media", "readonly"); var rq = tx.objectStore("media").getAll(); rq.onsuccess = function () { cb(rq.result || []); }; rq.onerror = function () { cb([]); }; } catch (e) { cb([]); } }

function idbPut(rec, k) { try { var tx = idb.transaction("media", "readwrite"); var rq3 = tx.objectStore("media").put(rec, k); rq3.onerror = function () { try { showToast("Could not save '" + rec.n + "' " + EM + " check free disk space"); } catch (e7) {} }; } catch (e8) { try { showToast("Could not save " + rec.n); } catch (e9) {} } }

function idbDel(k) { try { var tx = idb.transaction("media", "readwrite"); tx.objectStore("media")["delete"](k); } catch (e) {} }

function libFail() { var b = document.getElementById("libwarn"); if (b) b.hidden = false; }

var LIBTYPE = { mp4: "video/mp4", m4v: "video/mp4", webm: "video/webm", mkv: "video/x-matroska", mov: "video/quicktime", mp3: "audio/mpeg", m4a: "audio/mp4", flac: "audio/flac", wav: "audio/wav", ogg: "audio/ogg" };

function __libAdd(files) {

  if (!idb) { libFail(); return 0; }

  var added = 0;

  for (var i = 0; i < files.length; i++) {

    var f = files[i];

    var ext = (f.name.split(".").pop() || "").toLowerCase();

    var t2 = LIBTYPE[ext] || (f.type || "").split(";")[0] || "video/mp4";

    var k = f.name + "|" + f.size;

    var nk8 = f.name.replace(/\.[a-z0-9]+$/i, "") + "|" + f.size;

    var dup = false;

    for (var j5 = 0; j5 < T.length; j5++) if ((T[j5].n + "|" + T[j5].s) === nk8 || tkey(j5) === k) { dup = true; break; }

    if (dup) continue;

    var rec = { n: f.name.replace(/\.[a-z0-9]+$/i, ""), t: t2, s: f.size, k: k, blob: f };

    idbPut(rec, k);

    T.push({ n: rec.n, t: t2, s: f.size, k: k, blob: f });

    added++;

  }

  renderList(); updNp();

  if (added) showToast("Added " + added + " track" + (added > 1 ? "s" : ""));

  return added;

}

document.getElementById("add").addEventListener("click", function () {

  var fallback = function () { document.getElementById("addf").click(); };

  if (LIBMODE && window.showOpenFilePicker) {

    try {

      window.showOpenFilePicker({ multiple: true, types: [{ description: "Audio and video", accept: { "audio/*": [".mp3", ".m4a", ".flac", ".wav", ".ogg"], "video/*": [".mp4", ".m4v", ".webm", ".mkv", ".mov"] } }] }).then(function (handles) {

        var fl = [], pending = handles.length;

        if (!pending) return;

        for (var i = 0; i < handles.length; i++) {

          (function (h) { h.getFile().then(function (f) { fl.push(f); pending--; if (!pending) __libAdd(fl); }); })(handles[i]);

        }

      }).catch(fallback);

      return;

    } catch (e) { fallback(); return; }

  }

  fallback();

});

document.getElementById("addf").addEventListener("change", function () { var fl = Array.prototype.slice.call(this.files || []); this.value = ""; if (fl.length) __libAdd(fl); });

function showToast(msg) { var t = document.getElementById("toast"); if (!t) return; t.textContent = msg; t.hidden = false; t.style.opacity = "1"; clearTimeout(showToast.t); showToast.t = setTimeout(function () { t.style.opacity = "0"; }, 2200); }

document.addEventListener("dragover", function (e) { e.preventDefault(); if (!LIBMODE) return; document.body.classList.add("dropping"); });

document.addEventListener("dragleave", function (e) { if (!e.relatedTarget) document.body.classList.remove("dropping"); });

document.addEventListener("drop", function (e) {

  e.preventDefault(); document.body.classList.remove("dropping"); if (!LIBMODE) return;

  var fl = Array.prototype.slice.call(e.dataTransfer.files || []).filter(function (f) { return /\.(mp4|m4v|webm|mkv|mov|avi|mp3|m4a|flac|wav|ogg)$/i.test(f.name); });

  if (!fl.length) { showToast("Drop audio or video files to add them"); return; }

  var n = __libAdd(fl); showToast(n ? "Added " + n + " track(s)" : "Those tracks are already in the library");

});

document.getElementById("snap").addEventListener("click", function () {

  if (!T.length) { window.alert("The library is empty — add tracks first."); return; }

  var tot = 0; for (var i = 0; i < T.length; i++) tot += T[i].s || 0;

  if (tot > 300 * 1048576 && !window.confirm("The library is " + fmt(tot) + " — the shareable copy will be larger. Continue?")) return;

  var done = 0, outT = [];

  for (var i2 = 0; i2 < T.length; i2++) {

    (function (t) {

      var r = new FileReader();

      r.onload = function () { outT.push({ n: t.n, t: t.t, u: String(r.result), s: t.s }); done++; if (done === T.length) finishSnap(); };

      r.onerror = function () { done++; if (done === T.length) finishSnap(); };

      r.readAsDataURL(t.blob);

    })(T[i2]);

  }

  function finishSnap() {

    try {

      var mk = new Function("fmtBytes", "CURRENT_VERSION", "return (" + GEN + ")")(fmt, PV);

      var html = mk(outT, true, false);

      var a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([html], { type: "text/html" })); a.download = "offline-player-share.html";

      document.body.appendChild(a); a.click(); a.remove();

      setTimeout(function () { URL.revokeObjectURL(a.href); }, 60000);

    } catch (e) { window.alert("Export failed: " + e.message); }

  }

});

if (LIBMODE) {

  document.getElementById("add").hidden = false;

  document.getElementById("snap").hidden = false;

  document.getElementById("saveshell").hidden = false;

  document.getElementById("custombg").hidden = false;

  document.getElementById("saveshell").addEventListener("click", function () {

    var shell = localStorage.getItem("omPlayerShell");

    if (!shell) { window.alert("No newer player shell is stored yet — open Offline Site Saver once, then come back."); return; }

    var a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([shell], { type: "text/html" })); a.download = "offline-player-library.html";

    document.body.appendChild(a); a.click(); a.remove();

    setTimeout(function () { URL.revokeObjectURL(a.href); }, 60000);

  });

  try {

    var seenV = localStorage.getItem("omPlayerUpdateSeen");

    if (seenV !== PV) { showToast("Player updated to version " + PV + " — your library is intact"); localStorage.setItem("omPlayerUpdateSeen", PV); }

  } catch (e) {}

  try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch (e5) {}

  if (LIBLOAD) {

    idbOpen(function () {

      idbAll(function (recs) {

        var seen7 = {};

        for (var li2 = 0; li2 < recs.length; li2++) {

          var kk7 = recs[li2].n + "|" + recs[li2].s;

          if (seen7[kk7]) continue;

          seen7[kk7] = 1;

          T.push({ n: recs[li2].n, t: recs[li2].t, s: recs[li2].s, k: recs[li2].k || kk7, blob: recs[li2].blob });

        }

        renderList(); updNp();

      });

    });

  }

}

document.getElementById("s-accm").addEventListener("change", function () {

  S.accentMode = this.checked ? "app" : "own";

  document.getElementById("s-accent").disabled = this.checked;

  applyTheme(); persist();

});

document.getElementById("s-bgm").addEventListener("change", function () { S.bgMode = this.value; applyBg(); persist(); });

function readImageScaled(file, cb) {

  var r = new FileReader();

  r.onload = function () {

    var im = new Image();

    im.onload = function () {

      try {

        var maxW = 1920, maxH = 1080, sc = Math.min(1, maxW / im.width, maxH / im.height);

        var c2 = document.createElement("canvas");

        c2.width = Math.max(1, Math.round(im.width * sc));

        c2.height = Math.max(1, Math.round(im.height * sc));

        c2.getContext("2d").drawImage(im, 0, 0, c2.width, c2.height);

        cb(c2.toDataURL("image/jpeg", 0.85));

      } catch (e) { cb(String(r.result)); }

    };

    im.onerror = function () { cb(String(r.result)); };

    im.src = String(r.result);

  };

  r.readAsDataURL(file);

}

function setCustomBg(dataUrl) {

  S.customBg = dataUrl;

  S.bgMode = "custom";

  document.getElementById("s-bgm").value = "custom";

  applyBg(); persist();

  showToast("Custom background applied");

}

document.getElementById("custombg").addEventListener("click", function () {

  var fallback = function () { document.getElementById("custombgf").click(); };

  if (window.showOpenFilePicker) {

    try {

      window.showOpenFilePicker({ multiple: false, types: [{ description: "Image", accept: { "image/*": [".jpg", ".jpeg", ".png", ".webp", ".gif"] } }] }).then(function (handles) {

        if (!handles.length) return;

        handles[0].getFile().then(function (f) { readImageScaled(f, setCustomBg); });

      }).catch(fallback);

      return;

    } catch (e) { fallback(); return; }

  }

  fallback();

});

document.getElementById("custombgf").addEventListener("change", function () {

  var f = this.files[0]; this.value = ""; if (f) readImageScaled(f, setCustomBg);

});

try {

  var wOpen2 = indexedDB.open("omPlayerLib", 2);

  wOpen2.onupgradeneeded = function () {

    var d0 = wOpen2.result;

    if (!d0.objectStoreNames.contains("media")) d0.createObjectStore("media");

    if (!d0.objectStoreNames.contains("walls")) d0.createObjectStore("walls");

  };

  wOpen2.onsuccess = function () {

    var wtx2 = wOpen2.result.transaction("walls", "readonly");

    var wrq2 = wtx2.objectStore("walls").getAll();

    wrq2.onsuccess = function () {

      (wrq2.result || []).forEach(function (rec) { if (rec.k === "wallsMeta" || !rec.blob) return; WALLS[rec.k] = { n: rec.n || rec.k, url: URL.createObjectURL(rec.blob) }; });

      buildWallGrid2(); applyBg();

    };

    wrq2.onerror = function () { buildWallGrid2(); applyBg(); };

  };

  wOpen2.onerror = function () { buildWallGrid2(); applyBg(); };

} catch (e) { buildWallGrid2(); applyBg(); }

applyTheme(); syncSettingsUi(); renderList(); drawViz();

tourEl = document.getElementById("tour");

if (tourEl) document.getElementById("tourOk").addEventListener("click", function () { tourEl.style.display = "none"; });

${"<"}${"/scr"}${"ipt>"}

</body></html>`;

}



try {

  localStorage.setItem("omPlayerShell", buildPlayerHtml([], false, false, true));

  localStorage.setItem("omPlayerShellVersion", CURRENT_VERSION);

} catch (e) {}



function buildLibraryPlayer() {

  try {

    log('Building library player…', 'info');

    const html = buildPlayerHtml([], false, false, true);

    const blob = new Blob([html], { type: 'text/html' });

    const a = document.createElement('a');

    a.href = URL.createObjectURL(blob);

    a.download = 'offline-player-library.html';

    document.body.appendChild(a);

    a.click();

    a.remove();

    setTimeout(() => URL.revokeObjectURL(a.href), 60000);

    log('Library player saved — open it, then use Add tracks to fill your collection. The library lives in this browser and survives app updates.', 'ok');

    statText.textContent = 'Library player saved';

  } catch (e) { log('Library player failed — ' + String(e.message || e), 'err'); }

}

$('#playerBuild').addEventListener('click', () => { if ($('#playerMode').value === 'library') { buildLibraryPlayer(); } else { $('#playerMediaInput').click(); } });

$('#playerMode').addEventListener('change', () => {

  $('#playerNote').textContent = playerNoteText();

});

function playerNoteText() {

  if ($('#playerMode').value === 'embed') return 'Embeds the chosen audio/video files inside one HTML page — bigger file, but plays anywhere with nothing else needed.';

  if ($('#playerMode').value === 'library') return 'A living player page: add or remove tracks inside the player itself. Tracks are stored safely in this browser and survive app updates — one player file forever.';

  return 'The player page references your files by name — small page, but keep it in the same folder as the media files (MKV may not play in every browser).';

}

$('#playerMediaInput').addEventListener('change', async e => {

  const files = Array.from(e.target.files || []);

  e.target.value = '';

  if (!files.length) return;

  const embed = $('#playerMode').value === 'embed';

  try {

    log('Building offline player…', 'info');

    statusEl.hidden = false;

    logEl.classList.add('on');

    $('#logToggle').hidden = false;

    const tracks = await makePlayerTracks(files, embed);

    if (!tracks.length) { log('No audio/video files were selected — nothing to build', 'warn'); return; }

    const html = buildPlayerHtml(tracks, embed);

    const blob = new Blob([html], { type: 'text/html' });

    const a = document.createElement('a');

    a.href = URL.createObjectURL(blob);

    a.download = 'offline-player-' + new Date().toISOString().slice(0, 10) + '.html';

    document.body.appendChild(a);

    a.click();

    a.remove();

    setTimeout(() => URL.revokeObjectURL(a.href), 60000);

    log('Offline player ready — ' + tracks.length + ' track(s), ' + fmtBytes(html.length) + (embed ? ' (embedded)' : ' (linked — keep files next to it)'), 'ok');

    statText.textContent = 'Offline player saved';

  } catch (x) {

    log('Player failed — ' + String(x.message || x), 'err');

  }

});

// ============================================================

// ============================================================
// Sample player preview (v5.9) — demo tracks + interface tour

const PLAYER_DEMO_VIDEO_TYPE = 'video/webm';

const PLAYER_DEMO_VIDEO_BYTES = 164756;

const PLAYER_DEMO_VIDEO = 'data:video/webm;base64,' +
    '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';
// ============================================================

function makeDemoToneWav() {

  const sr = 8000, secs = 5, n = sr * secs;

  const buf = new ArrayBuffer(44 + n * 2);

  const v = new DataView(buf);

  const ws = (o, str) => { for (let i = 0; i < str.length; i++) v.setUint8(o + i, str.charCodeAt(i)); };

  ws(0, 'RIFF'); v.setUint32(4, 36 + n * 2, true); ws(8, 'WAVE');

  ws(12, 'fmt '); v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true);

  v.setUint32(24, sr, true); v.setUint32(28, sr * 2, true); v.setUint16(32, 2, true); v.setUint16(34, 16, true);

  ws(36, 'data'); v.setUint32(40, n * 2, true);

  let o = 44;

  for (let i = 0; i < n; i++, o += 2) {

    const t = i / sr;

    const a = Math.min(1, t / 0.4) * Math.min(1, (secs - t) / 0.4);

    const s = a * 0.32 * (Math.sin(6.2832 * 523.25 * t) + 0.6 * Math.sin(6.2832 * 659.25 * t) + 0.5 * Math.sin(6.2832 * 783.99 * t)) / 1.5;

    v.setInt16(o, Math.max(-32767, Math.min(32767, Math.round(s * 32767))), true);

  }

  const u8 = new Uint8Array(buf);

  let bin = '';

  for (let i = 0; i < u8.length; i += 0x8000) bin += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000));

  return { uri: 'data:audio/wav;base64,' + btoa(bin), bytes: u8.length };

}

function makeDemoVideoWebm() {

  return new Promise(resolve => {

    let settled = false;

    let rec = null, osc = null, actx = null;

    const settle = val => { if (settled) return; settled = true; resolve(val); };

    const cleanup = () => { try { if (osc) osc.stop(); } catch (e) {} try { if (actx && actx.state !== 'closed') actx.close(); } catch (e) {} };

    try {

      const c = document.createElement('canvas');

      c.width = 320; c.height = 180;

      const ctx = c.getContext('2d');

      if (!c.captureStream || typeof MediaRecorder === 'undefined') { settle(null); return; }

      try {

        const AC = window.AudioContext || window.webkitAudioContext;

        if (AC) {

          actx = new AC();

          const dest = actx.createMediaStreamDestination();

          osc = actx.createOscillator();

          const gain = actx.createGain();

          gain.gain.value = 0.05;

          osc.type = 'triangle';

          osc.frequency.value = 440;

          osc.connect(gain); gain.connect(dest); osc.start();

          var destStream = dest.stream;

        }

      } catch (e) { actx = null; osc = null; }

      const stream = c.captureStream(15);

      if (destStream) { const ats = destStream.getAudioTracks(); for (let i = 0; i < ats.length; i++) stream.addTrack(ats[i]); }

      const mime = ['video/webm;codecs=vp8,opus', 'video/webm'].filter(m => { try { return MediaRecorder.isTypeSupported(m); } catch (e) { return false; } })[0];

      if (!mime) { cleanup(); settle(null); return; }

      rec = new MediaRecorder(stream, { mimeType: mime });

      const chunks = [];

      rec.ondataavailable = e => { if (e.data && e.data.size) chunks.push(e.data); };

      rec.onstop = () => {

        cleanup();

        if (settled) return;

        settled = true;

        try {

          const blob = new Blob(chunks, { type: mime });

          if (!blob.size) { resolve(null); return; }

          const r = new FileReader();

          r.onload = () => resolve({ uri: String(r.result), bytes: blob.size });

          r.onerror = () => resolve(null);

          r.readAsDataURL(blob);

        } catch (e) { resolve(null); }

      };

      rec.onerror = () => { try { if (rec && rec.state !== 'inactive') rec.stop(); } catch (e) {} cleanup(); settle(null); };

      setTimeout(() => { if (!settled) { try { if (rec.state !== 'inactive') rec.stop(); } catch (e) {} cleanup(); settle(null); } }, 15000);

      rec.start(250);

      const t0 = performance.now();

      const draw = () => {

        if (settled) return;

        const t = (performance.now() - t0) / 1000;

        const h1 = 220 + (t * 40) % 120;

        const g = ctx.createLinearGradient(0, 0, 320, 180);

        g.addColorStop(0, 'hsl(' + h1 + ',70%,45%)');

        g.addColorStop(1, 'hsl(' + ((h1 + 80) % 360) + ',70%,30%)');

        ctx.fillStyle = g;

        ctx.fillRect(0, 0, 320, 180);

        ctx.fillStyle = '#fff';

        ctx.font = 'bold 17px system-ui';

        ctx.textAlign = 'center';

        ctx.fillText('Offline Player ' + '\u2014' + ' demo', 160, 74);

        ctx.font = '12px system-ui';

        ctx.fillText('demo clip ' + t.toFixed(1) + ' s', 160, 96);

        const x = 20 + ((t * 120) % 280);

        ctx.beginPath();

        ctx.arc(x, 142, 11, 0, 6.2832);

        ctx.fillStyle = 'rgba(255,255,255,.85)';

        ctx.fill();

        if (t >= 5) { if (rec.state !== 'inactive') { try { rec.stop(); } catch (e) {} } return; }

        requestAnimationFrame(draw);

      };

      requestAnimationFrame(draw);

    } catch (e) { cleanup(); settle(null); }

  });

}

async function openSamplePlayer(forceDownload) {

  log('Building sample player…', 'info');

  statusEl.hidden = false;

  logEl.classList.add('on');

  $('#logToggle').hidden = false;

  const tracks = [];

  try {

    const tone = makeDemoToneWav();

    tracks.push({ n: 'Sample tone (demo audio)', t: 'audio/wav', u: tone.uri, s: tone.bytes });

  } catch (e) { log('Sample audio failed: ' + String(e.message || e), 'err'); }

  try {

    if (PLAYER_DEMO_VIDEO) {

      tracks.push({ n: 'Sample clip (demo video)', t: PLAYER_DEMO_VIDEO_TYPE, u: PLAYER_DEMO_VIDEO, s: PLAYER_DEMO_VIDEO_BYTES });

      log('Using the built-in demo clip (' + playerFmtBytes(PLAYER_DEMO_VIDEO_BYTES) + ')', 'info');

    } else {

      const vid = await makeDemoVideoWebm();

      if (vid) tracks.push({ n: 'Sample clip (demo video)', t: 'video/webm', u: vid.uri, s: vid.bytes });

      else log('Your browser could not record a demo video - showing the audio sample only', 'warn');

    }

  } catch (e) { log('Demo video skipped - ' + String(e.message || e), 'warn'); }

  if (!tracks.length) { log('No sample media could be generated', 'err'); return; }

  const html = buildPlayerHtml(tracks, true, true);

  const blob = new Blob([html], { type: 'text/html' });

  const url = URL.createObjectURL(blob);

  const w = forceDownload ? null : window.open(url, '_blank');

  if (w) {

    setTimeout(() => URL.revokeObjectURL(url), 120000);

    log('Sample player opened in a new tab - a quick tour pops up in the corner. Close the tab when you are done.', 'ok');

    statText.textContent = 'Sample player ready';

  } else {

    const a = document.createElement('a');

    a.href = url;

    a.download = 'offline-player-sample.html';

    document.body.appendChild(a);

    a.click();

    a.remove();

    setTimeout(() => URL.revokeObjectURL(url), 120000);

    log('Pop-up was blocked - downloaded offline-player-sample.html instead; open it to take the tour', 'warn');

  }

}

$('#playerSample').addEventListener('click', () => openSamplePlayer());
// Settings backup — export / import (v5.8)
// ============================================================

function exportSettingsNow() {

  try {

    const blob = new Blob([JSON.stringify({ v: CURRENT_VERSION, exported: new Date().toISOString(), settings: Object.assign({}, SETTINGS) }, null, 2)], { type: 'application/json' });

    const a = document.createElement('a');

    a.href = URL.createObjectURL(blob);

    a.download = 'offline-saver-settings-' + new Date().toISOString().slice(0, 10) + '.json';

    document.body.appendChild(a);

    a.click();

    a.remove();

    setTimeout(() => URL.revokeObjectURL(a.href), 60000);

    log('Settings exported — you can import this file on any other PC', 'ok');

  } catch (e) { log('Export failed: ' + e.message, 'err'); }

}

function importSettingsText(txt, noReload) {

  let data;

  try { data = JSON.parse(String(txt)); } catch (e) { return 'bad json'; }

  const raw = data && typeof data === 'object' && data.settings && typeof data.settings === 'object' ? data.settings : (typeof data === 'object' && !Array.isArray(data) ? data : null);

  if (!raw) return 'wrong shape';

  const merged = Object.assign({}, DEFAULT_SETTINGS);

  for (const k of Object.keys(DEFAULT_SETTINGS)) {

    if (k in raw && typeof raw[k] === typeof DEFAULT_SETTINGS[k]) merged[k] = raw[k];

  }

  try { localStorage.setItem('omSettings', JSON.stringify(merged)); } catch (e) { return 'storage error'; }

  if (!noReload) setTimeout(() => location.reload(), 600);

  return 'ok';

}

$('#settingsExport').addEventListener('click', exportSettingsNow);

$('#settingsImport').addEventListener('click', () => $('#settingsImportInput').click());

$('#settingsImportInput').addEventListener('change', e => {

  const f = e.target.files[0];

  e.target.value = '';

  if (!f) return;

  const r = new FileReader();

  r.onload = () => {

    const st = importSettingsText(String(r.result));

    if (st === 'ok') { log('Settings imported — reloading', 'ok'); }

    else log('Could not import settings (' + st + ')', 'err');

  };

  r.readAsText(f);

});




renderHist();







const SUGGEST = {



  box: $('#suggestBox'),



  list: [],



  cur: -1,



  seq: 0,



};



function suggestHist(q) {



  const t = q.toLowerCase();



  const seen = new Set();



  const out = [];



  for (const h of getHist()) {



    const u = h.u || '';



    if (seen.has(u)) continue;



    if (u.toLowerCase().indexOf(t) >= 0 || (h.t || '').toLowerCase().indexOf(t) >= 0) {



      seen.add(u);



      out.push({ kind: 'hist', title: h.t || u, url: u });



      if (out.length >= 6) break;



    }



  }



  return out;



}



function suggestRender() {



  const b = SUGGEST.box;



  if (!b) return;



  if (!SUGGEST.list.length) { b.hidden = true; b.innerHTML = ''; return; }



  b.innerHTML = '';



  let lastKind = '';



  SUGGEST.list.forEach((it, i) => {



    if (it.kind !== lastKind) {



      lastKind = it.kind;



      const lab = document.createElement('div');



      lab.className = 'sug-label';



      lab.textContent = it.kind === 'hist' ? 'Previous captures' : 'Search suggestions';



      b.appendChild(lab);



    }



    const btn = document.createElement('button');



    btn.type = 'button';



    btn.className = 'sug' + (i === SUGGEST.cur ? ' active' : '');



    btn.setAttribute('role', 'option');



    const t = document.createElement('span');



    t.className = 'sug-title';



    t.textContent = it.kind === 'hist' ? (it.title || it.url) : it.url;



    const u = document.createElement('span');



    u.className = 'sug-url';



    u.textContent = it.url;



    btn.appendChild(t);



    if (it.kind === 'hist') btn.appendChild(u);



    btn.addEventListener('mousedown', ev => { ev.preventDefault(); suggestPick(i); });



    btn.addEventListener('mouseover', () => { SUGGEST.cur = i; suggestRender(); });



    b.appendChild(btn);



  });



  b.hidden = false;



}



function suggestPick(i) {



  const it = SUGGEST.list[i];



  if (!it) return;



  const urlBox = $('#url');



  if (it.kind === 'hist') {



    urlBox.value = it.url;



  } else {



    urlBox.value = 'https://www.google.com/search?q=' + encodeURIComponent(it.url);



  }



  SUGGEST.list = [];



  suggestRender();



  urlBox.focus();



}



let _sugTimer = null;



function suggestRun(q) {



  SUGGEST.cur = -1;



  if (!q.trim()) { SUGGEST.list = []; suggestRender(); return; }



  const hist = suggestHist(q);



  SUGGEST.list = hist.slice();



  const need = 8 - hist.length;



  if (need > 0) {



    const n = ++SUGGEST.seq;



    try {



      fetch('https://duckduckgo.com/ac/?q=' + encodeURIComponent(q), { signal: AbortSignal.timeout(4000) })



        .then(r => r.json())



        .then(data => {



          if (n !== SUGGEST.seq) return;



          const arr = Array.isArray(data) && data[1] ? data[1] : (Array.isArray(data) ? data[0] : null);



          if (!arr || !Array.isArray(arr)) return;



          const extra = [];



          for (const s of arr) {



            if (extra.length >= need) break;



            if (SUGGEST.list.some(x => x.url.toLowerCase() === String(s).toLowerCase())) continue;



            extra.push({ kind: 'live', title: s, url: String(s) });



          }



          SUGGEST.list = hist.concat(extra);



          suggestRender();



        })



        .catch(() => {});



    } catch (e) {}



  }



  suggestRender();



}



$('#url').addEventListener('input', () => {



  const q = $('#url').value;



  updateStreamingUi(q);



  clearTimeout(_sugTimer);



  _sugTimer = setTimeout(() => suggestRun(q), 260);



});






$('#url').addEventListener('focus', () => {



  const q = $('#url').value;



  if (q.trim()) suggestRun(q);



});



$('#url').addEventListener('keydown', e => {



  if (!SUGGEST.list.length) return;



  if (e.key === 'ArrowDown') { e.preventDefault(); SUGGEST.cur = Math.min(SUGGEST.list.length - 1, SUGGEST.cur + 1); suggestRender(); }



  else if (e.key === 'ArrowUp') { e.preventDefault(); SUGGEST.cur = Math.max(-1, SUGGEST.cur - 1); suggestRender(); }



  else if (e.key === 'Enter') { if (SUGGEST.cur >= 0) { e.preventDefault(); suggestPick(SUGGEST.cur); } }



  else if (e.key === 'Escape') { SUGGEST.list = []; suggestRender(); }



});



$('#url').addEventListener('blur', () => {



  setTimeout(() => { SUGGEST.list = []; suggestRender(); }, 120);



});







$('#form').addEventListener('submit', e => {



  e.preventDefault();



  const v = $('#url').value;



  if (!v.trim()) return;



  const lines = v.split('\n').map(s => s.trim()).filter(Boolean);



  if (lines.length > 1) startBatchConfirm(lines);

  else previewThenCapture(v);



});







// ============================================================
// Batch capture — multiple URLs pasted one per line
// ============================================================

function startBatchConfirm(urls) {

  const MEDIA_EXT = /\.(mp4|m4v|webm|mkv|mov|avi|mp3|m4a|flac|wav|ogg)(\?|#|$)/i;

  const valid = [];
  const skipped = [];

  for (const raw of urls) {
    let u = raw;
    if (!/^https?:\/\//i.test(u)) u = 'https://' + u;
    try { u = new URL(u).href; } catch (e) { skipped.push(raw); continue; }
    if (streamingKind(u)) { skipped.push(u); continue; }
    if (MEDIA_EXT.test(u)) { skipped.push(u); continue; }
    if (ytVideoId(u)) { skipped.push(u); continue; }
    if (valid.indexOf(u) === -1) valid.push(u);
  }

  if (!valid.length) {
    statText.textContent = 'No capturable page URLs found';
    log('Batch: every URL was a streaming/video link — those need individual capture', 'warn');
    return;
  }

  batchQueue = valid;
  batchCancelled = false;

  const th = $('#cthumb'); if (th) th.style.display = '';
  const yes = $('#cyes'); if (yes) yes.style.display = '';
  $('#ctitle').textContent = 'Capture ' + valid.length + ' page' + (valid.length > 1 ? 's' : '') + ' for offline use?';
  const urlEl = $('#curl');
  urlEl.style.wordBreak = 'break-all';
  urlEl.textContent = valid.slice(0, 5).join('\n') + (valid.length > 5 ? '\n… and ' + (valid.length - 5) + ' more' : '');
  const dupCount = valid.reduce((n, u) => n + (findDup(u) ? 1 : 0), 0);

  $('#csize').textContent = (skipped.length ? skipped.length + ' skipped (streaming / video)' : '') + (dupCount ? (skipped.length ? ' · ' : '') + dupCount + ' already in history' : '');

  if (dupCount) log('Batch: ' + dupCount + ' of ' + valid.length + ' URL(s) were already captured before', 'warn');
  $('#cyes').textContent = 'Capture all (' + valid.length + ')';
  $('#confirmCard').hidden = false;
  statText.textContent = '';

  if (skipped.length) log('Batch: skipped ' + skipped.length + ' URL(s) — streaming and video links need individual capture', 'warn');
  log('Batch: ' + valid.length + ' page URL(s) ready — press "Capture all" to start', 'info');

}

async function runBatch() {

  if (!batchQueue || !batchQueue.length) return;

  const urls = batchQueue;
  const total = urls.length;
  let ok = 0, fail = 0;
  const failures = [];

  hideConfirm();
  statusEl.hidden = false;
  logEl.classList.add('on');
  $('#logToggle').hidden = false;
  $('#go').disabled = true;

  log('Batch: starting ' + total + ' capture' + (total > 1 ? 's' : ''), 'info');

  for (let i = 0; i < total; i++) {

    if (batchCancelled) {
      log('Batch: cancelled after ' + i + ' of ' + total, 'warn');
      break;
    }

    const url = urls[i];
    let host = '';
    try { host = new URL(url).hostname; } catch (e) { host = url; }

    statText.textContent = 'Batch ' + (i + 1) + ' / ' + total + ' — ' + host;
    log('Batch ' + (i + 1) + '/' + total + ': ' + host, 'info');
    setBarPct(Math.round((i / total) * 100));

    try {
      await capture(url);
      if (lastBlob) saveNow();
      ok++;
    } catch (e) {
      fail++;
      failures.push({ url, err: String(e.message || e) });
      log('Batch ' + (i + 1) + ' failed — ' + String(e.message || e), 'err');
    }

  }

  setBarPct(100);
  $('#go').disabled = false;
  batchQueue = null;

  const summary = 'Batch done: ' + ok + ' saved' + (fail ? ', ' + fail + ' failed' : '') + ' of ' + total;
  statText.textContent = summary;
  log('Batch complete — ' + ok + '/' + total + ' saved' + (fail ? ' (' + fail + ' failed)' : ''), fail ? 'warn' : 'ok');

  if (failures.length) {
    for (const f of failures) log('  Failed: ' + f.url + ' — ' + f.err, 'err');
  }

}





function hostBase() {



  try {



    const h = new URL($('#url').value.startsWith('http') ? $('#url').value : 'https://' + $('#url').value).hostname;



    return h.replace(/[^\w.-]/g, '') || 'captured';



  } catch (e) { return 'captured'; }



}







function saveNow() {



  if (!lastBlob) return;



  const a = document.createElement('a');



  a.href = URL.createObjectURL(lastBlob);



  a.download = ($('#fileNameInput').value.trim() || hostBase()) + '.offline.html';



  document.body.appendChild(a);



  a.click();



  a.remove();



  setTimeout(() => URL.revokeObjectURL(a.href), 60000);



}







$('#download').addEventListener('click', saveNow);







$('#logToggle').addEventListener('click', () => {



  const log = $('#logWrap');



  const btn = $('#logToggle');



  if (log.classList.contains('log-collapsed')) {



    log.classList.remove('log-collapsed');



    log.classList.add('log-expanded');



    btn.textContent = '−';



  } else {



    log.classList.remove('log-expanded');



    log.classList.add('log-collapsed');



    btn.textContent = '+';



  }



});



$('#logWrap').classList.add('log-expanded');







$('#setFont').addEventListener('change', e => {



  SETTINGS.fontFamily = e.target.value;



  persistSettings();



  applyFont();



});







$('#setFontSize').addEventListener('input', e => {



  const size = parseInt(e.target.value, 10);



  SETTINGS.fontPixelSize = size;



  $('#fontSizeVal').textContent = size + 'px';



  persistSettings();



  applyFont();



});







// About section tabs



function switchAboutTab(tab) {



  document.querySelectorAll('.about-tab').forEach(btn => {



    btn.classList.toggle('active', btn.dataset.tab === tab);



    btn.style.background = btn.dataset.tab === tab ? 'var(--primary)' : 'var(--card)';



    btn.style.color = btn.dataset.tab === tab ? 'var(--on-primary)' : 'var(--text)';



    btn.style.border = btn.dataset.tab === tab ? '0' : '1px solid var(--border)';



  });



  document.querySelectorAll('.about-panel').forEach(panel => {



    panel.hidden = panel.id !== 'aboutPanel' + tab.charAt(0).toUpperCase() + tab.slice(1);



  });



  // Update what's new content dynamically



  if (tab === 'whatsNew' && typeof WHATSNEW !== 'undefined') {



    const versionKey = 'v' + CURRENT_VERSION.replace('.', '');



    const content = WHATSNEW[versionKey];



    if (content) {



      content = content.replace(/<li>/g, '<li>Offline Site Saver — ');



      document.getElementById('whatsNewCurrent').innerHTML = content;



    }



  }



}







$('#aboutTabAbout').addEventListener('click', () => switchAboutTab('about'));



$('#aboutTabWhatsNew').addEventListener('click', () => switchAboutTab('whatsNew'));



$('#aboutTabHelp').addEventListener('click', () => switchAboutTab('help'));







const WHATSNEW = {

  v49: '<h4 style="margin:0 0 8px">v4.9</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Keyboard shortcuts reviewed — removed shortcuts that conflict with browser commands (Ctrl/Cmd+S save page, Ctrl/Cmd+R refresh, Ctrl/Cmd+Shift+S save as)</li><li>Kept safe shortcuts: Ctrl/Cmd+N new capture, Ctrl/Cmd+Shift+C clear URL bar, F11 fullscreen</li></ul>',

  v52: '<h4 style="margin:0 0 8px">v5.2</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Settings always opens collapsed — every category starts closed when you open Settings, no matter what was open last time</li></ul>',

  v53: '<h4 style="margin:0 0 8px">v5.3</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Keyboard shortcuts cheat sheet — press Ctrl/Cmd + / or click "View all shortcuts" in Help to see all shortcuts at a glance</li><li>Settings always opens collapsed — every category starts closed when you open Settings</li></ul>',

  v54: '<h4 style="margin:0 0 8px">v5.4</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Fixed cheat sheet showing over startup animation — it now stays hidden until you open it</li></ul>',

  v55: '<h4 style="margin:0 0 8px">v5.5</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Keyboard shortcuts reviewed — changed Toggle theme to Ctrl/Cmd + T and Open Settings to Ctrl/Cmd + S</li></ul>',

  v56: '<h4 style="margin:0 0 8px">v5.6</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Keyboard shortcuts reviewed — Toggle theme changed to Ctrl/Cmd + Shift + H</li></ul>',

  v57: '<h4 style="margin:0 0 8px">v5.7</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Duplicate detection — capturing a URL that was already saved now warns you first, showing the date it was saved on, with a “Capture again” option</li><li>Auto-theme system mode — the new “Follow system dark / light” option switches the theme instantly to match the device’s dark or light preference</li></ul>',

  v58: '<h4 style="margin:0 0 8px">v5.8</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Offline player — build a self-contained playlist page for the audio and video you saved; small files are embedded, so the player works anywhere with no extra files, with prev/next, autoplay and keyboard controls</li><li>Statistics dashboard — total storage, pages vs media files, average size, a captures-per-month chart and your biggest captures, shown right above your history</li><li>Settings backup — export all your settings to a JSON file and import them on any other PC</li></ul>',

  v59: '<h4 style="margin:0 0 8px">v5.9</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Sample player preview — the new button beside Build player opens a demo of the player interface with generated sample media and a quick tour, so you can see exactly what your playlist will look like without any of your own files</li></ul>',

  v60: '<h4 style="margin:0 0 8px">v6.0</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Real sample video built in — the Preview button now includes an actual recorded demo clip baked into the app itself, so every browser shows a genuine playing video in the tour — no recording step, no internet needed</li></ul>',

  v61: '<h4 style="margin:0 0 8px">v6.1</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Player fullscreen fixed — the control bar (Prev / Play / Next / Fullscreen) now stays visible while fullscreen, and audio tracks get proper fullscreen controls too</li><li>Pause between tracks — when a video or audio finishes, the player now waits a couple of seconds before starting the next one</li></ul>',

  v62: '<h4 style="margin:0 0 8px">v6.2</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Fullscreen polish — the control bar now auto-hides in fullscreen after a couple of seconds and reappears when you move the mouse (it stays visible while paused)</li><li>Fullscreen continues — when a track finishes and the next one starts, fullscreen is kept — and the video’s own fullscreen button now behaves exactly like the player’s Fullscreen button and the F key</li></ul>',

  v63: '<h4 style="margin:0 0 8px">v6.3</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Fullscreen moved to the player controls — the separate Fullscreen button is gone; fullscreen now lives in the video player’s own controls, right next to the sound icon and the three-dot menu (the F key still toggles it, and the auto-hiding playback bar still appears in fullscreen)</li></ul>',

  v64: '<h4 style="margin:0 0 8px">v6.4</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Fixed fullscreen bounce — entering fullscreen from the video controls no longer exits straight away; the player now hands fullscreen over to the stage properly, so you stay in fullscreen with the playback bar</li></ul>',

  v65: '<h4 style="margin:0 0 8px">v6.5</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Fixed playback stopping in fullscreen — browsers pause a video when it is pulled out of its own fullscreen, so the player now hides that problematic native fullscreen icon and brings back the player’s own Fullscreen button in the control bar — one clean transition, playback never stops, and the F key works as before</li><li>Safety net — if a fullscreen hand-over ever pauses playback, the player resumes it automatically</li></ul>',

  v66: '<h4 style="margin:0 0 8px">v6.6</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>The Offline Player grows up — a Settings panel (playback, appearance and sound), Help and About tabs, resume positions, shuffle and repeat, a search box, favorites and play counts, playback speed, a volume slider, a quality switcher for multi-version files, an A–B loop, a sleep timer, .srt subtitles, an audio visualizer, an equalizer, media-key support and state export/import</li></ul>',

  v67: '<h4 style="margin:0 0 8px">v6.7</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Fixed the player opening with the Settings panel stuck open — a CSS rule was overriding the hidden state; the panel now stays closed until you open it with the gear, and the close (✕) button and Esc close it properly</li></ul>',

  v68: '<h4 style="margin:0 0 8px">v6.8</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Library player — a new player mode that is a living page: add or remove tracks inside the player itself, stored safely in this browser — no rebuilding needed, and the library survives app updates</li><li>Shareable copies — the library player can export a self-contained snapshot of the current collection anytime</li></ul>',

  v69: '<h4 style="margin:0 0 8px">v6.9</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Fixed the library player breaking at startup — a missing counter variable crashed the track list, which made Add tracks appear to do nothing; adding now works reliably, and tracks you tried to add before were already saved and will appear</li></ul>',

  v70: '<h4 style="margin:0 0 8px">v7.0</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Library adding made bulletproof — the hidden file input is now rendered off-screen instead of display-none (some Chrome versions refuse pickers on fully hidden inputs), and you can now simply <strong>drag and drop</strong> audio or video files onto the player window to add them, with a confirmation toast</li></ul>',

  v71: '<h4 style="margin:0 0 8px">v7.1</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Add tracks picker hardened — the button now uses Chrome’s modern file-picker API first (with the classic picker as automatic fallback), which fixes the picker refusing to open on some Chrome setups</li></ul>',

  v72: '<h4 style="margin:0 0 8px">v7.2</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Refresh-to-update — the app now stores its latest player shell in the browser, so opening your library player (or refreshing it) automatically hot-swaps to the newest player code — your library, positions and settings stay untouched. A Save updated player file button (player Settings → Backup) makes the new version permanent on disk</li></ul>',

  v73: '<h4 style="margin:0 0 8px">v7.3</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Shuffle improved — shuffle now also applies when you press Next or Prev, and both shuffle and repeat show a clear confirmation toast when toggled</li></ul>',

  v74: '<h4 style="margin:0 0 8px">v7.4</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Fixed the About panel showing ’0 tracks’ in library players — the counts were baked in at build time; they now update live from your actual library</li></ul>',

  v75: '<h4 style="margin:0 0 8px">v7.5</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Shuffle is now visible — turning shuffle on visibly reorders the playlist itself (and it keeps randomizing playback); turning it off restores the original order</li></ul>',

  v76: '<h4 style="margin:0 0 8px">v7.6</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Fixed the update toast repeating on every refresh — the ’Player updated’ notice now appears only once per version</li></ul>',

  v77: '<h4 style="margin:0 0 8px">v7.7</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>The Offline Player gets the full treatment — a What’s New panel inside the player, and the same wallpapers as this app (they are shared through the browser, so player pages stay small)</li></ul>',

  v78: '<h4 style="margin:0 0 8px">v7.8</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Wallpapers in the player polished — no dark overlay over the wallpaper, and the wallpaper picker now shows every background with its name</li></ul>',

  v79: '<h4 style="margin:0 0 8px">v7.9</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Wallpaper sharing made visible — the app reports in its log when wallpapers are shared (and waits with a clear message if old player tabs block it), and an empty player wallpaper picker now explains that the app must be opened once</li></ul>',

  v80: '<h4 style="margin:0 0 8px">v8.0</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Match the app works everywhere — the app now publishes its current background directly, so the player’s ’Match the app’ option works even when the wallpaper database is empty or blocked</li></ul>',

  v81: '<h4 style="margin:0 0 8px">v8.1</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Wallpaper picker works without the database — the app now publishes small previews of all wallpapers (with names) through local storage, so the player’s wallpaper grid works on every browser</li></ul>',

  v82: '<h4 style="margin:0 0 8px">v8.2</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Fixed the wallpaper grid error — a housekeeping record in the wallpaper storage was mistaken for a wallpaper and crashed the previews; it is now skipped</li></ul>',

  v83: '<h4 style="margin:0 0 8px">v8.3</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Custom background image — the player’s Background section now has a Custom image button: pick any picture (it is auto-resized) and it becomes the player’s wallpaper, remembered between visits</li></ul>',

  v84: '<h4 style="margin:0 0 8px">v8.4</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Accent colors match the app — the player now uses the same accent color as Offline Site Saver by default (with a Match the app switch and the color picker as override)</li></ul>',

  v85: '<h4 style="margin:0 0 8px">v8.5</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Full Material You palette in the player — the app now publishes its entire derived Material 3 color scheme (surfaces, containers, text tones — everything) and the player applies the identical palette</li></ul>',

  v86: '<h4 style="margin:0 0 8px">v8.6</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Liquid fill startup — the library player now opens with an animated liquid-fill splash — an accent-colored wave rises inside a rounded card, then flips to reveal the playlist</li></ul>',

  v87: '<h4 style="margin:0 0 8px">v8.7</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Ink drop splash — the library player now opens with a single accent-colored drop that hits the center and diffuses outward in organic tendrils (like ink in water), filling the card before the playlist fades in</li></ul>',

  v88: '<h4 style="margin:0 0 8px">v8.8</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Improved ink drop splash — a drop falls from above, hits the center with a satisfying splat, then 12 organic tendrils and 8 satellite droplets diffuse outward with staggered timing before the playlist fades in</li></ul>',

  v89: '<h4 style="margin:0 0 8px">v8.9</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Fixed the srcdoc syntax error — the player update mechanism now uses a clean blob URL instead of srcdoc, eliminating all HTML escaping issues</li></ul>',

  v116: '<h4 style="margin:0 0 8px">v11.6 — Current</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Resume now keeps retrying for up to 8 seconds for every video and music track — no matter how large the file is</li></ul>',

  v115: '<h4 style="margin:0 0 8px">v11.5</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Resume is now persistent — the player retries the position seek for large files where the browser ignores the first attempt</li></ul>',

  v114: '<h4 style="margin:0 0 8px">v11.4</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>The Listening section now fills in as soon as you open Settings, even before playing anything</li></ul>',

  v113: '<h4 style="margin:0 0 8px">v11.3</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Mouse wheel volume over the player, listening statistics in Settings, and a shortcut cheat sheet (press ?)</li></ul>',

  v112: '<h4 style="margin:0 0 8px">v11.2</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Up next queue — see and reorder what plays next, and per-track speed memory — each track remembers its own playback speed</li></ul>',

  v111: '<h4 style="margin:0 0 8px">v11.1</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>The sleep timer now fades the volume out gently over the last minute instead of cutting off</li></ul>',

  v110: '<h4 style="margin:0 0 8px">v11.0</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>The player tab now shows its own icon — a music note on the player blue</li></ul>',

  v109: '<h4 style="margin:0 0 8px">v10.9</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Final duplicate guard — the track list now filters duplicates at render time, so a mid-load refresh can never show a track twice</li></ul>',

  v108: '<h4 style="margin:0 0 8px">v10.8</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>The track list now sits on a soft translucent panel too — every row readable over any wallpaper</li></ul>',

  v107: '<h4 style="margin:0 0 8px">v10.7</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Text over wallpapers now sits on soft translucent chips, and duplicate detection got smarter (name + size, ignoring file extension)</li></ul>',

  v106: '<h4 style="margin:0 0 8px">v10.6</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Library storage guards — duplicates are removed automatically when the library loads, and failed track saves now warn instead of failing silently</li></ul>',

  v105: '<h4 style="margin:0 0 8px">v10.5</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Bookmarks in long tracks, video screenshots, folder import, and a portable player copy with everything packed inside</li></ul>',

  v104: '<h4 style="margin:0 0 8px">v10.4</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>The player now asks the browser to keep your library storage permanent — protection against data being cleared on browser close</li></ul>',

  v103: '<h4 style="margin:0 0 8px">v10.3</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Auto theme for the player — pick Auto (system) and the player follows your device’s light/dark setting, switching live</li></ul>',

  v102: '<h4 style="margin:0 0 8px">v10.2</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Library filters — show only music or only video, and sort by name, size, or newest first</li></ul>',

  v101: '<h4 style="margin:0 0 8px">v10.1</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>The app name now appears next to each What’s New point</li></ul>',

  v100: '<h4 style="margin:0 0 8px">v10.0</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>The What’s New panels now say which app they belong to — Offline Site Saver in the app, Offline Player in the player</li></ul>',

  v99: '<h4 style="margin:0 0 8px">v9.9</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Removed the startup sound — the splash is silent again</li></ul>',

  v98: '<h4 style="margin:0 0 8px">v9.8</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>The app now plays the startup chime on behalf of the player — when a player starts up (or auto-updates), the open app tab plays the chime for it, no click needed in the player</li></ul>',

  v97: '<h4 style="margin:0 0 8px">v9.7</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>The chime is now synced to the ink splat — it lands exactly when the drop hits. Browsers still decide when audio may start; the splat beat is used whenever possible</li></ul>',

  v96: '<h4 style="margin:0 0 8px">v9.6</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Fixed the startup chime — it was silently cancelled by the browser resuming audio asynchronously; it now reliably plays at startup or on your first click</li></ul>',

  v95: '<h4 style="margin:0 0 8px">v9.5</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Library players now check for updates continuously — an open player refreshes itself within seconds of the app being updated, no reload needed</li></ul>',

  v94: '<h4 style="margin:0 0 8px">v9.4</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Startup sound — a soft water-drop chime plays with the ink splash (browsers may hold it until your first click)</li></ul>',

  v93: '<h4 style="margin:0 0 8px">v9.3</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Auto-update is back — library players quietly refresh themselves to the newest version when the app has been updated (no more errors: it swaps in place, no srcdoc, no blob URLs)</li></ul>',

  v92: '<h4 style="margin:0 0 8px">v9.2</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>The music note in the splash is now big, white and glowing — much easier to see</li></ul>',

  v91: '<h4 style="margin:0 0 8px">v9.1</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>The ink splash now fills the whole screen — and every particle drops in its own color</li></ul>',

  v90: '<h4 style="margin:0 0 8px">v9.0</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Removed the auto-update system entirely — library player pages no longer check for newer shells or navigate away; they are permanent standalone files that just work</li></ul>',

  v47: '<h4 style="margin:0 0 8px">v4.7</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>The startup splash now fades out smoothly when it finishes, instead of vanishing instantly</li></ul>',

  v46: '<h4 style="margin:0 0 8px">v4.6</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Fixed the What\'s New button on the update banner — it now opens the About section, switches to the What\'s New page and scrolls it into view, instead of just opening Settings</li></ul>',

  v45: '<h4 style="margin:0 0 8px">v4.5</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Streaming-site hint — paste a YouTube, Netflix, Twitch, TikTok or similar link and the app explains right away whether the video can be captured and why (DRM protection, bot and sign-in checks, or a JavaScript player)</li><li>YouTube saving now falls back through several public download services automatically, so videos one route refuses often still pack successfully</li><li>Clearer message when a video is fully locked behind a YouTube sign-in — the log now names exactly what blocked it and what the remaining options are</li><li>Repaired broken startup code that could stop the app from loading at all</li><li>Fixed the What\'s New tab wiping out the previous-versions list when opened</li></ul>',



  v44: '<h4 style="margin:0 0 8px">v4.4</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Startup splash animation with progress bar</li><li>Settings search with highlighting</li><li>Settings accordion - one group open at a time</li><li>About panel with tabs (About / What\'s New / Help)</li><li>Startup animation styles: Pulse / Spin / Bounce / None</li></ul>',



  v43: '<h4 style="margin:0 0 8px">v4.3</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Version bump to 4.3</li></ul>',



  v42: '<h4 style="margin:0 0 8px">v4.2</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Fixed "What’s New" button to open the What’s New tab in Settings</li><li>Fixed What’s New tab content not displaying due to tab ID case mismatch</li></ul>',



  v41: '<h4 style="margin:0 0 8px">v4.1</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Version bump to 4.1</li></ul>',



  v40: '<h4 style="margin:0 0 8px">v4.0</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Settings search — quickly find any option by typing in the search box at the top of Settings</li><li>Startup splash animation with progress bar showing initialization steps (theme, wallpaper, accent, language, display, font)</li><li>Progress bar matches your accent color; optional percentage display and step labels</li><li>Reduce motion respected throughout (OS preference and app setting)</li><li>Settings panel reorganized: Help & Instructions now live inside About this app as tabs</li></ul>',



  v39: '<h4 style="margin:0 0 8px">v3.9</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>YouTube saving now probes several sources automatically — the watch page, the embed page and YouTube\u2019s own player API via the Android, iOS and Web clients — and picks the first one that returns a real stream</li><li>If YouTube blocks a video, the log names the exact source and reason, with a tip on what to try</li></ul>',



  v38: '<h4 style="margin:0 0 8px">v3.8</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>YouTube videos can now be downloaded: paste a watch link (youtube.com/watch?v= or youtu.be) and Offline Site Saver fetches the page, grabs the video and packs it — title, thumbnail and player — into a single offline HTML file you can play with no internet connection</li><li>Stuff that can\u2019t be packed (age-gated or member-only videos) still falls back to the streaming-site notice</li></ul>',



  v37: '<h4 style="margin:0 0 8px">v3.7</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Choose what to skip while capturing — images, scripts or web fonts — for much smaller offline files</li><li>Export or import your capture history as a JSON file, and uploads merge in without duplicating</li><li>Progress now shows a total percentage across all pages — on the bar, in the status line and in the browser tab — with an estimated time left</li><li>Auto-schedule the theme — dark at night, light by day, with your own start/end times</li></ul>',



  v36: '<h4 style="margin:0 0 8px">v3.6</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Renamed to Offline Site Saver</li><li>The URL box now shows suggestions as you type — your previous captures appear first, then live web-search suggestions appear below them (press \u25b2/\u25bc to move, Enter to pick, Esc to close)</li><li>Header text is easier to read on busy backgrounds, even at 0% transparency</li></ul>',



  v35: '<h4 style="margin:0 0 8px">v3.5</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>The downloading progress bar is back to a plain, simple fill that just shows progress — no animation, exactly as it originally was</li><li>Quick accent presets: the colour swatches next to the picker still offer 20 one-tap colours</li></ul>',



  v34: '<h4 style="margin:0 0 8px">v3.4</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>New cleaner indeterminate progress animation while a site is downloading — a glossy primary\u2192tertiary segment glides smoothly across the bar (shown during both the preview and the main capture)</li><li>More quick accent presets: the colour swatches next to the picker grew from 8 to 20 one-tap colours</li><li>Respects your reduced-motion preference (the animation slows on devices that ask for less motion)</li></ul>',



  v33: '<h4 style="margin:0 0 8px">v3.3</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>While a site is downloading, the progress bar now shows an animated Google-style squiggle (moving diagonal stripes in your accent colour) — and reverts to a solid bar when it finishes</li><li>Enabled during both the preview step and the main capture, so you always see it working</li><li>Respects your reduced-motion preference (the animation slows on devices that ask for less motion)</li></ul>',



  v32: '<h4 style="margin:0 0 8px">v3.2</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Material 3 color engine now matches the official spec (material-color-utilities) — secondary, tertiary and neutral palettes use the faithful fixed chroma (16 / 24 / 4\u00b78), so every scheme looks authentic across accents</li><li>The full scheme is now always active — even the default look is a genuine Material 3 theme derived from the seed</li><li>Components follow the correct M3 roles: buttons use primary + on-primary, cards use the surface-container tone, progress and log use the lowest container, and the heading/progress gradients use primary \u2192 tertiary</li><li>The header now tints from the scheme\u2019s surface container (instead of a fixed colour) while keeping the transparency slider</li></ul>',



  v31: '<h4 style="margin:0 0 8px">v3.1</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Full Material 3 "expressive" theme now drives the whole page — header, cards, inputs, text, borders and buttons all follow the accent color and light/dark theme, computed live by a faithful HCT color engine</li><li>Changing the accent color now visibly restyles the entire interface instantly, in both light and dark mode</li><li>Surfaces, containers, text and outline tones all rederive from your accent seed for a cohesive look</li><li>Status and error colors now come from the Material error palette</li></ul>',



  v30: '<h4 style="margin:0 0 8px">v3.0</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Accent color now applies in dark mode too — the primary card and panels pick up the accent tint in both themes</li></ul>',



  v29: '<h4 style="margin:0 0 8px">v2.9</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Material 3 "expressive" redesign — accent-colored dynamic surfaces, tonal state overlays (hover/press), and rounded shapes</li><li>8 quick accent color swatches next to the color picker for one-tap accent switching</li></ul>',



  v28: '<h4 style="margin:0 0 8px">v2.8</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Header panel border now fades with the Transparency slider — no more thin white line around the title panel in light theme</li></ul>',



  v27: '<h4 style="margin:0 0 8px">v2.7</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>New Transparency slider under Display & style — one control for header/panel opacity and wallpaper darkening (0% gives a clean liquid-glass look)</li><li>Update banner text is now easier to read in light theme</li></ul>',



  v26: '<h4 style="margin:0 0 8px">v2.6</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Version list now flags the current release as "Current (v2.6)"</li></ul>',



  v25: '<h4 style="margin:0 0 8px">v2.5</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>What\u2019s New button on the update banner now closes the banner when opened</li></ul>',



  v24: '<h4 style="margin:0 0 8px">v2.4</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>35 landscape wallpapers (replaced old ones) with names under each thumbnail</li><li>Wallpapers grouped into categories (Forest / Ocean & Lake / Sunsets & Sky / Abstract & Colorful) as collapsible dropdowns that auto-close</li><li>Settings groups now auto-collapse too — only one open at a time</li><li>"Updated" banner on first launch after an update, with a What\u2019s New button</li><li>Transparent update banner, and fixed invisible What\u2019s New / Help button text in light theme</li><li>Clarified static-page and DRM limitations in Help</li></ul>',



  v23: '<h4 style="margin:0 0 8px">v2.3</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Moved How it works into Help & Instructions</li><li>Log toggle only shows after first capture</li></ul>',



  v22: '<h4 style="margin:0 0 8px">v2.2</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Font family & size settings</li><li>Log area shrink/expand toggle</li><li>What\u2019s New & Help sections</li></ul>',



  v21: '<h4 style="margin:0 0 8px">v2.1</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Background wallpapers (6 presets + custom image)</li><li>Settings apply instantly — no Done button</li><li>Theme-aware wallpaper scrim</li></ul>',



  v20: '<h4 style="margin:0 0 8px">v2.0</h4><ul style="margin:0;padding-left:20px;line-height:1.6"><li>Android-style full-screen settings panel</li><li>7 languages (en/de/es/fr/pt/tr/zh)</li><li>Capture history with re-capture</li><li>Completion sound & desktop notifications</li><li>24-hour clock toggle</li></ul>'



};







$('#whatsNewOld').addEventListener('change', e => {



  const box = $('#whatsNewOldContent');



  const key = e.target.value;



  if (key && WHATSNEW[key]) { box.innerHTML = WHATSNEW[key].replace(/<li>/g, '<li>Offline Site Saver — '); box.hidden = false; }



  else { box.hidden = true; }



});







// Keyboard shortcuts



(function setupKeyboardShortcuts() {



  const shortcuts = {



    // Capture: Ctrl/Cmd + Enter



    'ctrl+enter': () => {



      const v = $('#url').value;



      if (v.trim()) previewThenCapture(v);



    },



    'meta+enter': () => {



      const v = $('#url').value;



      if (v.trim()) previewThenCapture(v);



    },



    // Focus URL bar: Ctrl/Cmd + L



    'ctrl+l': () => { $('#url').focus(); $('#url').select(); },



    'meta+l': () => { $('#url').focus(); $('#url').select(); },



    // Open Settings: Ctrl/Cmd + ,



    'ctrl+s': () => {



      if ($('#settingsCard').hidden) {



        $('#settingsBtn').click();



      } else {



        closeSettings();



      }



    },



    'meta+s': () => {



      if ($('#settingsCard').hidden) {



        $('#settingsBtn').click();



      } else {



        closeSettings();



      }



    },



    // Escape: Close settings, hide confirm, clear suggestions



    'escape': () => {



      if (batchQueue) { batchCancelled = true; batchQueue = null; hideConfirm(); log('Batch: cancelled', 'warn'); return; }



      if (!$('#settingsCard').hidden) closeSettings();



      hideConfirm();



      SUGGEST.list = []; suggestRender();



    },



    // Toggle theme: Ctrl/Cmd + Shift + T



    'ctrl+shift+h': () => {



      setS('light', !SETTINGS.light);



      applyTheme();



    },



    'meta+shift+h': () => {



      setS('light', !SETTINGS.light);



      applyTheme();



    },



    // Focus URL bar: /



    '/': (e) => {



      if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'SELECT') {



        e.preventDefault();



        $('#url').focus();



        $('#url').select();



      }



    },



    // New capture: Ctrl/Cmd + N — clear URL bar and focus it



    'ctrl+n': () => {

      $('#url').value = '';

      $('#url').focus();

      $('#url').select();

    },



    'meta+n': () => {

      $('#url').value = '';

      $('#url').focus();

      $('#url').select();

    },



    // Clear URL bar: Ctrl/Cmd + Shift + C



    'ctrl+shift+c': () => {

      $('#url').value = '';

      $('#url').focus();

    },



    'meta+shift+c': () => {

      $('#url').value = '';

      $('#url').focus();

    },



    // Toggle fullscreen: F11



    f11: () => {

      if (!document.fullscreenElement) {

        document.documentElement.requestFullscreen();

      } else {

        document.exitFullscreen();

      }

    },



    // Show help: ?



    '?': (e) => {



      if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'SELECT') {



        e.preventDefault();



        if ($('#settingsCard').hidden) {



          $('#settingsBtn').click();



        }



        setTimeout(() => switchAboutTab('help'), 100);



      }



    },



    // Cheat sheet: Ctrl/Cmd + /



    'ctrl+slash': (e) => {



      if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'SELECT') {



        e.preventDefault();



        showCheatCard();



      }



    },



    'meta+slash': (e) => {



      if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'SELECT') {



        e.preventDefault();



        showCheatCard();



      }



    }
  };










function showCheatCard() {



  $('#cheatCard').hidden = false;
  $('#cheatCard').style.display = 'flex';



  $('#cheatCard').focus();



}



function hideCheatCard() {



  $('#cheatCard').hidden = true;
  $('#cheatCard').style.display = 'none';



}



$('#cheatClose').addEventListener('click', () => { hideCheatCard(); });

$('#cheatBtn').addEventListener('click', () => { showCheatCard(); });



  document.addEventListener('keydown', (e) => {



    // Don’t trigger shortcuts when typing in input fields (except for specific ones)



    const tag = e.target.tagName;



    const isInput = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';



    



    // Build the key combination string



    const parts = [];



    if (e.ctrlKey) parts.push('ctrl');



    if (e.metaKey) parts.push('meta');



    if (e.shiftKey) parts.push('shift');



    if (e.altKey) parts.push('alt');



    parts.push(e.key.toLowerCase());



    const combo = parts.join('+');



    



    // Check for exact match first



    if (shortcuts[combo]) {



      // Allow certain shortcuts even in input fields



      const allowInInput = ['ctrl+enter', 'meta+enter', 'escape', '/', '?', 'ctrl+/', 'meta+/', 'ctrl+n', 'meta+n', 'ctrl+shift+c', 'meta+shift+c', 'f11'];



      if (!isInput || allowInInput.includes(combo)) {



        e.preventDefault();



        shortcuts[combo](e);



        return;



      }



    }



    



    // Also check without shift for single keys



    if (!e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey) {



      const singleKey = e.key.toLowerCase();



      if (shortcuts[singleKey] && !isInput) {



        e.preventDefault();



        shortcuts[singleKey](e);



      }



    }



  });







})();

