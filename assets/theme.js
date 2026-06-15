// Köse Research Group — site-wide HERO / PAGE THEME switcher.
// Two genuinely different designs that reskin the WHOLE page:
//   "classic" — warm light editorial (Instrument Serif on paper)   [friendly default]
//   "live"    — dark technical, animated Ising-solver hero (Geist + JetBrains Mono)
// Choice persists in localStorage and applies across every page.
//
// This file is loaded SYNCHRONOUSLY in <head> so the data-theme attribute is set
// before first paint (no flash). The on-page switcher is injected on DOMContentLoaded.
(function () {
  var KEY = 'kose-theme';

  var stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) {}

  var mq = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  var reducedMotion = !!(mq && mq.matches);
  var lowPower =
    (navigator.deviceMemory && navigator.deviceMemory <= 2) ||
    (navigator.connection && navigator.connection.saveData) || false;

  // Classic is the friendly default for everyone, and especially the right call
  // for reduced-motion / low-power visitors (no canvas animation).
  var theme = (stored === 'live' || stored === 'classic') ? stored : 'classic';

  var root = document.documentElement;
  root.setAttribute('data-theme', theme);

  function apply(t, persist) {
    t = (t === 'live') ? 'live' : 'classic';
    root.setAttribute('data-theme', t);
    if (persist !== false) { try { localStorage.setItem(KEY, t); } catch (e) {} }
    syncSwitch();
    root.dispatchEvent(new CustomEvent('themechange', { detail: { theme: t } }));
  }

  var api = {
    get: function () { return root.getAttribute('data-theme') || 'classic'; },
    set: function (t) { apply(t, true); },
    toggle: function () { apply(this.get() === 'live' ? 'classic' : 'live', true); },
    reducedMotion: reducedMotion,
    lowPower: lowPower
  };
  window.KoseTheme = api;

  // ---- on-page switcher --------------------------------------------------
  var switchEl = null;
  function syncSwitch() {
    if (!switchEl) return;
    var t = api.get();
    switchEl.setAttribute('data-active', t);
    switchEl.querySelectorAll('[data-theme-set]').forEach(function (b) {
      var on = b.getAttribute('data-theme-set') === t;
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      b.classList.toggle('on', on);
    });
  }

  function buildSwitch() {
    if (document.querySelector('.theme-switch')) return;
    var el = document.createElement('div');
    el.className = 'theme-switch';
    el.setAttribute('role', 'group');
    el.setAttribute('aria-label', 'Site appearance');
    el.innerHTML =
      '<span class="ts-eye">Mode</span>' +
      '<div class="ts-seg">' +
        '<button type="button" data-theme-set="classic"><i class="ts-dot ts-classic"></i>Classic</button>' +
        '<button type="button" data-theme-set="live"><i class="ts-dot ts-live"></i>Live</button>' +
      '</div>';
    el.addEventListener('click', function (e) {
      var b = e.target.closest('[data-theme-set]');
      if (b) api.set(b.getAttribute('data-theme-set'));
    });
    document.body.appendChild(el);
    switchEl = el;
    syncSwitch();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildSwitch);
  } else {
    buildSwitch();
  }
})();
