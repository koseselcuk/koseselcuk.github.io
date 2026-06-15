// Köse Research Group — LIVE hero: Coupled Spin Network (Ising graph), vanilla JS.
// Nodes = spins (±1). Edges = couplings J (warm = ferromagnetic, cool = antiferromagnetic).
// Glauber/Metropolis dynamics relax the network toward a low-energy state; frustrated
// edges flicker. Ported from concepts/hero-spinnet.jsx, made responsive + lifecycle-aware.
//
// Runs ONLY while data-theme="live". Pauses when the hero is offscreen or the tab is
// hidden. For reduced-motion / low-power visitors it relaxes to a quiet state and draws
// a single static frame (no animation loop).
(function () {
  var canvas = document.getElementById('heroLiveCanvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');

  var ACC = [244, 185, 66], FERRO = [244, 185, 66], ANTI = [95, 210, 230];

  var W = 0, H = 0, DPR = 1;
  var nodes = [], edges = [], adj = [];
  var temp = 2.4, dir = -1;
  var raf = null, last = 0, built = false;

  var elEnergy = document.getElementById('lvEnergy');
  var elFrust = document.getElementById('lvFrustrated');
  var elNodes = document.getElementById('lvNodes');

  var reduced = (window.KoseTheme && window.KoseTheme.reducedMotion) ||
                (window.KoseTheme && window.KoseTheme.lowPower);

  function size() {
    var r = canvas.getBoundingClientRect();
    W = Math.max(320, r.width);
    H = Math.max(360, r.height);
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(W * DPR);
    canvas.height = Math.round(H * DPR);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }

  function build() {
    size();
    // Bias nodes to the right so the left-side overlay text stays clear.
    var left = Math.max(40, W * 0.30);
    var N = W < 720 ? 30 : 46;
    nodes = [];
    for (var i = 0; i < N; i++) {
      var best = null, bd = -1;
      for (var t = 0; t < 12; t++) {
        var c = { x: left + Math.random() * (W - left - 40), y: 70 + Math.random() * (H - 150) };
        var d = 1e9;
        for (var k = 0; k < nodes.length; k++) {
          var dx = nodes[k].x - c.x, dy = nodes[k].y - c.y;
          d = Math.min(d, dx * dx + dy * dy);
        }
        if (d > bd) { bd = d; best = c; }
      }
      best.s = Math.random() < 0.5 ? -1 : 1;
      best.disp = best.s; best.pulse = 0;
      best.vx = (Math.random() - 0.5) * 0.12;
      best.vy = (Math.random() - 0.5) * 0.12;
      nodes.push(best);
    }
    var reach = W < 720 ? 165 : 185;
    edges = [];
    for (var a = 0; a < N; a++) for (var b = a + 1; b < N; b++) {
      var ex = nodes[a].x - nodes[b].x, ey = nodes[a].y - nodes[b].y, ed = Math.hypot(ex, ey);
      if (ed < reach) edges.push({ a: a, b: b, J: Math.random() < 0.62 ? 1 : -1, d: ed, flow: Math.random() * 100 });
    }
    adj = nodes.map(function () { return []; });
    edges.forEach(function (e, ei) { adj[e.a].push(ei); adj[e.b].push(ei); });
    if (elNodes) elNodes.textContent = String(N);
    built = true;
  }

  function energy() { var E = 0; for (var i = 0; i < edges.length; i++) { var e = edges[i]; E += -e.J * nodes[e.a].s * nodes[e.b].s; } return E; }
  function frustrated() { var f = 0; for (var i = 0; i < edges.length; i++) { var e = edges[i]; if (e.J * nodes[e.a].s * nodes[e.b].s < 0) f++; } return f; }

  function relax(dt) {
    temp += dir * dt * 0.55;
    if (temp < 0.85) { temp = 0.85; dir = 1; }
    if (temp > 2.6) { temp = 2.6; dir = -1; }
    var N = nodes.length;
    for (var k = 0; k < 10; k++) {
      var i = (Math.random() * N) | 0, h = 0;
      for (var m = 0; m < adj[i].length; m++) { var e = edges[adj[i][m]]; var o = e.a === i ? e.b : e.a; h += e.J * nodes[o].s; }
      var dE = 2 * nodes[i].s * h;
      if (dE <= 0 || Math.random() < Math.exp(-dE / temp)) { nodes[i].s = -nodes[i].s; nodes[i].pulse = 1; }
    }
  }

  function draw(dt, now) {
    ctx.clearRect(0, 0, W, H);
    var i, e;
    // drift
    for (i = 0; i < nodes.length; i++) {
      var n = nodes[i]; n.x += n.vx; n.y += n.vy;
      if (n.x < Math.max(40, W * 0.30) - 4 || n.x > W - 50) n.vx *= -1;
      if (n.y < 60 || n.y > H - 70) n.vy *= -1;
    }
    // edges
    for (i = 0; i < edges.length; i++) {
      e = edges[i];
      var A = nodes[e.a], B = nodes[e.b];
      var sat = e.J * A.s * B.s;
      var col = e.J > 0 ? FERRO : ANTI;
      e.flow += dt * (e.J > 0 ? 34 : -26);
      ctx.strokeStyle = 'rgba(' + col[0] + ',' + col[1] + ',' + col[2] + ',' + (sat > 0 ? 0.30 : 0.10) + ')';
      ctx.lineWidth = sat > 0 ? 1.4 : 1;
      ctx.beginPath(); ctx.moveTo(A.x, A.y); ctx.lineTo(B.x, B.y); ctx.stroke();
      if (sat > 0) {
        var tt = (e.flow % 100) / 100;
        var px = A.x + (B.x - A.x) * tt, py = A.y + (B.y - A.y) * tt;
        ctx.beginPath(); ctx.arc(px, py, 1.8, 0, 6.2832);
        ctx.fillStyle = 'rgba(' + col[0] + ',' + col[1] + ',' + col[2] + ',.8)'; ctx.fill();
      } else {
        ctx.save(); ctx.setLineDash([4, 5]); ctx.lineDashOffset = -e.flow;
        ctx.strokeStyle = 'rgba(' + col[0] + ',' + col[1] + ',' + col[2] + ',' + (0.18 + 0.14 * Math.sin(now / 180 + e.flow)) + ')';
        ctx.beginPath(); ctx.moveTo(A.x, A.y); ctx.lineTo(B.x, B.y); ctx.stroke(); ctx.restore();
      }
    }
    // nodes
    for (i = 0; i < nodes.length; i++) {
      var nd = nodes[i];
      nd.disp += (nd.s - nd.disp) * Math.min(dt * 7, 1);
      nd.pulse = Math.max(0, nd.pulse - dt * 2.4);
      var up = nd.disp > 0, f = (nd.disp + 1) / 2;
      var r = 6.5 + 2.2 * Math.abs(nd.disp) + nd.pulse * 4;
      if (up) {
        var g = ctx.createRadialGradient(nd.x, nd.y, 0, nd.x, nd.y, r * 3.2);
        g.addColorStop(0, 'rgba(' + ACC[0] + ',' + ACC[1] + ',' + ACC[2] + ',' + (0.32 * f) + ')');
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(nd.x, nd.y, r * 3.2, 0, 6.2832); ctx.fill();
      }
      ctx.beginPath(); ctx.arc(nd.x, nd.y, r, 0, 6.2832);
      if (up) { ctx.fillStyle = 'rgb(' + ACC[0] + ',' + ACC[1] + ',' + ACC[2] + ')'; ctx.fill(); }
      else { ctx.fillStyle = '#1b2630'; ctx.fill(); ctx.lineWidth = 1.6; ctx.strokeStyle = 'rgba(120,190,210,.7)'; ctx.stroke(); }
      ctx.strokeStyle = up ? 'rgba(20,18,8,.9)' : 'rgba(150,215,235,.9)';
      ctx.lineWidth = 1.6; ctx.beginPath();
      var ay = up ? -1 : 1; ctx.moveTo(nd.x, nd.y + ay * r * 0.5); ctx.lineTo(nd.x, nd.y - ay * r * 0.5); ctx.stroke();
    }
    if (elEnergy) elEnergy.textContent = '\u2212' + (Math.abs(energy()) / Math.max(1, edges.length)).toFixed(3);
    if (elFrust) elFrust.textContent = String(frustrated());
  }

  function frame(now) {
    var dt = Math.min((now - last) / 1000, 0.05); last = now;
    relax(dt);
    draw(dt, now);
    raf = requestAnimationFrame(frame);
  }

  function staticFrame() {
    // relax hard to a quiet state, then draw one frame
    for (var s = 0; s < 600; s++) { temp = 1.0; relax(0.05); }
    draw(0.016, performance.now());
  }

  // ---- lifecycle ---------------------------------------------------------
  var visible = true, onLive = false;

  function running() { return raf !== null; }
  function start() {
    if (running() || reduced) return;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  }
  function stop() { if (raf !== null) { cancelAnimationFrame(raf); raf = null; } }

  function evaluate() {
    onLive = (document.documentElement.getAttribute('data-theme') === 'live');
    if (!onLive) { stop(); return; }
    if (!built) build();
    if (reduced) { staticFrame(); return; }
    if (visible) start(); else stop();
  }

  // Resize: rebuild graph (debounced) only while live.
  var rt = null;
  window.addEventListener('resize', function () {
    if (document.documentElement.getAttribute('data-theme') !== 'live') return;
    clearTimeout(rt);
    rt = setTimeout(function () { build(); if (reduced) staticFrame(); }, 220);
  });

  document.addEventListener('visibilitychange', function () {
    visible = !document.hidden;
    if (onLive && !reduced) { visible ? start() : stop(); }
  });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting && !document.hidden;
      if (onLive && !reduced) { visible ? start() : stop(); }
    }, { threshold: 0.01 });
    io.observe(canvas);
  }

  document.documentElement.addEventListener('themechange', evaluate);

  // initial
  evaluate();
})();
