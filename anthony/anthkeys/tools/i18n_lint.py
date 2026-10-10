#!/usr/bin/env python3
"""i18n lint for Anthkeys.

Fails (exit 1) when the app surface references translation keys that are not
available in every supported language, or when What's New translations drift
from the English entries.

Checks
  R1  every key used on the surface resolves in ALL supported languages via
      i18n[lang] or I18N_RECENT[lang]:
        - data-i18n / data-i18n-placeholder / data-i18n-title in anthkeys.html
        - data-i18n / data-i18n-placeholder literals and tx()/t() calls in
          anthkeys.js
      English is exempt for HTML-sourced keys (their English text is the HTML
      itself), but tx()/t() keys must resolve in en too or the raw key shows.
  R2  surface keys with no translation in any language (dead keys). Keys that
      predate the lint are flagged as warnings (ALLOW_DEAD) instead.
  R3  hidden dictionary keys that exist in some languages but not all
      (partial keys -- warning only: not user-visible)
  R4  every What's New entry in anthkeys.html is translated in every WN
      language with the same bullet count as the English entry
      (English text lives in the HTML itself)
  R5  stale What's New translations (versions no longer in the HTML)

Usage:  python3 tools/i18n_lint.py [--quiet]
Exit:   0 when clean, 1 when any error is found.
"""

import argparse
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HTML = os.path.join(ROOT, 'anthkeys.html')
JS = os.path.join(ROOT, 'js', 'anthkeys.js')
RECENT = os.path.join(ROOT, 'js', 'i18n-recent.js')
WN = os.path.join(ROOT, 'js', 'i18n-wn.js')

# Keys intentionally English-only (none today). A key listed here is exempt
# from R1 (but still reported by R2 if it exists nowhere).
ALLOW_EN_ONLY = set()

# Pre-existing gaps (present before the lint existed): HTML-sourced keys with
# no translation in ANY language -- English text in the HTML is the only source.
# Reported as warnings so the tool gates NEW regressions without blocking legacy
# debt; translate these in all languages to make them pass as real translations.
ALLOW_DEAD = set([
    'action.activities-overview',
    'action.file-search',
    'action.maximize-window',
    'action.minimize-window',
    'action.screenshot-clipboard',
    'action.system-monitor',
    'action.terminal-launcher',
    'action.workspace-switch',
])

QUOTES = '\'"`'


# --------------------------------------------------------------------------
# string/comment-aware source scanning (string values may contain braces)
# --------------------------------------------------------------------------

def compute_spans(s):
    """Sorted (start, end) spans of every string literal and comment in s."""
    spans = []
    i, n = 0, len(s)
    while i < n:
        c = s[i]
        if c == '/' and i + 1 < n and s[i + 1] == '/':
            j = s.find('\n', i)
            spans.append((i, n if j < 0 else j))
            i = spans[-1][1]
        elif c == '/' and i + 1 < n and s[i + 1] == '*':
            j = s.find('*/', i + 2)
            spans.append((i, n if j < 0 else j + 2))
            i = spans[-1][1]
        elif c in QUOTES:
            st = i
            i += 1
            while i < n:
                if s[i] == '\\':
                    i += 2
                    continue
                if s[i] == c:
                    i += 1
                    break
                i += 1
            spans.append((st, i))
        else:
            i += 1
    return spans


class Scanner:
    """Brace/bracket matching that skips strings and comments in O(n)."""

    def __init__(self, s):
        self.s = s
        self.n = len(s)
        self.spans = compute_spans(s)
        self.skip = [0] * len(s)
        for a, b in self.spans:
            for k in range(a, b):
                self.skip[k] = b

    def in_span(self, pos):
        return 0 <= pos < self.n and self.skip[pos] != 0

    def _match(self, start, open_ch, close_ch):
        i, n, depth = start, self.n, 0
        s, skip = self.s, self.skip
        while i < n:
            j = skip[i]
            if j:
                i = j
                continue
            c = s[i]
            if c == open_ch:
                depth += 1
            elif c == close_ch:
                depth -= 1
                if depth == 0:
                    return i
            i += 1
        return -1

    def match_brace(self, start):
        return self._match(start, '{', '}')

    def match_bracket(self, start):
        return self._match(start, '[', ']')


def keys_of_object_body(body):
    """Keys of a JS object body: quoted strings whose next non-space char is ':'."""
    keys = set()
    for a, b in compute_spans(body):
        if body[a] not in QUOTES:
            continue  # comment or template
        j = b
        while j < len(body) and body[j] in ' \t\r\n':
            j += 1
        if j < len(body) and body[j] == ':':
            keys.add(body[a + 1:b - 1].replace("\\'", "'").replace('\\"', '"'))
    return keys


def parse_lang_object(src, marker, prefix):
    """Parse a language dictionary -> {lang: {key: value}}.

    Handles both shapes used in this codebase:
      const i18n = { en: {...}, ... }         (nested object, marker required)
      i18n.ar = { ... } ; i18n.cs = { ... }   (assignments, prefix required)
    """
    out = {}
    sc = Scanner(src)
    mi = src.find(marker)
    if mi >= 0:
        b = src.find('{', mi)
        if b >= 0:
            e = sc.match_brace(b)
            if e >= 0:
                region = src[b + 1:e]
                rsc = Scanner(region)
                for m in re.finditer(r'^ {2}([a-z]{2})\s*:\s*\{', region, re.M):
                    if rsc.in_span(m.start()):
                        continue
                    end = rsc.match_brace(m.end() - 1)
                    if end < 0:
                        continue
                    out.setdefault(m.group(1), set()).update(
                        keys_of_object_body(region[m.end():end]))
    pat = re.compile(r'^%s\.([a-z]{2})\s*=\s*\{' % re.escape(prefix), re.M)
    for m in pat.finditer(src):
        end = sc.match_brace(m.end() - 1)
        if end < 0:
            continue
        out.setdefault(m.group(1), set()).update(
            keys_of_object_body(src[m.end():end]))
    return out


def parse_wn(src):
    """Parse `I18N_WN.xx = { 'v1.2': ['bullet', ...] }` -> {lang: {ver: n_bullets}}."""
    out = {}
    sc = Scanner(src)
    for m in re.finditer(r'^I18N_WN\.([a-z]{2})\s*=\s*\{', src, re.M):
        lang = m.group(1)
        end = sc.match_brace(m.end() - 1)
        if end < 0:
            continue
        body = src[m.end():end]
        bsc = Scanner(body)
        for vm in re.finditer(r"^\s*'(v\d+\.\d+)'\s*:\s*\[", body, re.M):
            arr_end = bsc.match_bracket(vm.end() - 1)
            if arr_end < 0:
                continue
            arr_body = body[vm.end():arr_end]
            spans = [x for x in compute_spans(arr_body) if arr_body[x[0]] in QUOTES]
            out.setdefault(lang, {})[vm.group(1)] = len(spans)
    return out


# --------------------------------------------------------------------------
# surface keys
# --------------------------------------------------------------------------

def clean_keys(keys):
    out = set()
    for k in keys:
        if any(ch in k for ch in '+\'"$'):
            continue  # dynamic concatenation, not a literal key
        out.add(k)
    return out


def surface_keys(html, js):
    used = {}
    for k in clean_keys(re.findall(r'data-i18n(?:-placeholder|-title)?="([^"]+)"', html)):
        used.setdefault(k, set()).add('anthkeys.html')
    for k in clean_keys(re.findall(r"data-i18n(?:-placeholder)?='([^']+)'", js)):
        used.setdefault(k, set()).add('anthkeys.js:markup')
    for fn in ('tx', 't'):
        for k in clean_keys(re.findall(r'\b%s\(\s*\'([^\']+)\'\s*\)' % fn, js)):
            used.setdefault(k, set()).add('anthkeys.js:%s()' % fn)
    return used


# --------------------------------------------------------------------------
# What's New (English lives in the HTML)
# --------------------------------------------------------------------------

def html_wn_entries(html):
    """[(version, english_bullet_count)] in HTML order, deduped by version."""
    starts = [m.start() for m in re.finditer(r'<div class="wn-entry">', html)]
    entries = {}
    order = []
    for i, s in enumerate(starts):
        e = starts[i + 1] if i + 1 < len(starts) else len(html)
        chunk = html[s:e]
        vm = re.search(r'<div class="wn-ver">v(\d+\.\d+)\s', chunk)
        if not vm:
            continue
        ver = 'v' + vm.group(1)
        if ver in entries:
            continue
        ul = re.search(r'<ul>([\s\S]*?)</ul>', chunk)
        count = 0
        if ul:
            inner = re.sub(r'<ol>[\s\S]*?</ol>', '', ul.group(1))
            count = len(re.findall(r'<li[ >]', inner))
        entries[ver] = count
        order.append(ver)
    return entries, order


# --------------------------------------------------------------------------
# main
# --------------------------------------------------------------------------

def main():
    ap = argparse.ArgumentParser(description='Anthkeys i18n lint')
    ap.add_argument('--quiet', action='store_true', help='only print problems')
    args = ap.parse_args()

    html = open(HTML, encoding='utf-8').read()
    js = open(JS, encoding='utf-8').read()
    recent = open(RECENT, encoding='utf-8').read()
    wn_src = open(WN, encoding='utf-8').read()

    main_d = parse_lang_object(js, 'const i18n = {', 'i18n')
    recent_d = parse_lang_object(recent, 'const I18N_RECENT = {', 'I18N_RECENT')
    wn_d = parse_wn(wn_src)
    langs = sorted(set(main_d) | set(recent_d))
    wn_langs = sorted(wn_d)

    errors, warnings = [], []

    def err(check, msg):
        errors.append('[%s] %s' % (check, msg))

    def warn(check, msg):
        warnings.append('[%s] %s' % (check, msg))

    used = surface_keys(html, js)
    have = {lang: (main_d.get(lang, set()) | recent_d.get(lang, set()))
            for lang in langs}

    if not args.quiet:
        print('== Anthkeys i18n lint ==')
        print('dicts     : main=%d langs, recent=%d langs, wn=%d langs'
              % (len(main_d), len(recent_d), len(wn_langs)))
        print('languages : %s' % ', '.join(langs))
        print('surface   : %d keys (html data-i18n + js data-i18n/tx/t)'
              % len(used))

    # R1 / R2 -- surface coverage.
    # English convention: action/tab/header labels are HTML-sourced (the en
    # block omits them on purpose), so `en` coverage is only required for keys
    # resolved via tx()/t() (otherwise the raw key string would show).
    non_en = [lang for lang in langs if lang != 'en']
    r1 = r2 = r2w = 0
    for key in sorted(used):
        srcs = used[key]
        html_sourced = 'anthkeys.html' in srcs
        via_js_fn = any(':tx()' in s or ':t()' in s for s in srcs)
        in_en = 'en' in langs and key in have.get('en', set())
        miss_non_en = [lang for lang in non_en if key not in have.get(lang, set())]
        all_20_missing = len(miss_non_en) == len(non_en)
        if miss_non_en:
            if all_20_missing:
                # no language translates it
                if key in ALLOW_DEAD and html_sourced and not via_js_fn:
                    r2w += 1
                    warn('R2', 'legacy gap: %r has no translation in any language '
                         '(English text in HTML only)' % key)
                    continue
                r2 += 1
                err('R2', 'key %r exists in NO language dictionary (used by %s)'
                    % (key, ', '.join(sorted(srcs))))
                continue
            if key in ALLOW_EN_ONLY:
                continue
            r1 += 1
            err('R1', 'key %r missing in: %s (used by %s)'
                % (key, ', '.join(miss_non_en), ', '.join(sorted(srcs))))
        elif not in_en and via_js_fn and not html_sourced:
            r1 += 1
            err('R1', 'key %r missing in en but used via tx()/t() '
                '(raw key would show for English users, used by %s)'
                % (key, ', '.join(sorted(srcs))))
    if not args.quiet:
        print('R1/R2     : %d errors (%d untranslated, %d dead), '
              '%d legacy-gap warnings'
              % (r1 + r2, r1, r2, r2w))

    # R3 -- hidden partial keys (warning only)
    all_keys = set()
    for s in list(main_d.values()) + list(recent_d.values()):
        all_keys |= s
    r3 = 0
    for key in sorted(all_keys - set(used)):
        missing = [lang for lang in langs if key not in have.get(lang, set())]
        if missing and len(missing) < len(langs):
            r3 += 1
            warn('R3', 'partial key %r missing in: %s' % (key, ', '.join(missing)))
    if not args.quiet:
        print('R3        : %d hidden partial keys' % r3)

    # R4 / R5 -- What's New
    html_entries, order = html_wn_entries(html)
    r4 = r5 = 0
    for ver in order:
        count = html_entries[ver]
        for lang in wn_langs:
            if ver not in wn_d[lang]:
                r4 += 1
                err('R4', 'WN v%s not translated in %r (English has %d bullet%s)'
                    % (ver, lang, count, '' if count == 1 else 's'))
            elif wn_d[lang][ver] != count:
                r4 += 1
                err('R4', 'WN v%s in %r has %d bullet%s, English has %d'
                    % (ver, lang, wn_d[lang][ver],
                       '' if wn_d[lang][ver] == 1 else 's', count))
    for lang in wn_langs:
        for ver in sorted(wn_d[lang]):
            if ver not in html_entries:
                r5 += 1
                warn('R5', 'stale WN v%s in %r (no HTML entry)' % (ver, lang))
    if not args.quiet:
        print('R4/R5     : wn errors=%d, stale=%d (html versions: %s)'
              % (r4, r5, ', '.join(order[:6])
                 + ('...' if len(order) > 6 else '')))

    if not args.quiet:
        print('')
    for w in warnings:
        print('WARN  ' + w)
    for e in errors:
        print('FAIL  ' + e)
    if not args.quiet:
        print('')
    print('RESULT: %s (%d errors, %d warnings)'
          % ('PASS' if not errors else 'FAIL', len(errors), len(warnings)))
    return 0 if not errors else 1


if __name__ == '__main__':
    sys.exit(main())