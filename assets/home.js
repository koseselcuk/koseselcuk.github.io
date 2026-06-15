// Homepage interactions: ticker, group rendering, news, sponsors, connections diagram

(function(){
  const S = window.SITE;

  // ---- Ticker ----
  const tickerRow = document.getElementById('tickerRow');
  if(tickerRow){
    const pool = S.news.slice(0,6);
    const html = pool.map(n => `<span class="ticker-item"><span class="d">${n.d}</span><span class="t">${n.t}</span></span>`).join('');
    tickerRow.innerHTML = html + html; // duplicate for seamless loop
  }

  // ---- Group ----
  const gc = document.getElementById('groupContent');
  if(gc){
    const phdHTML = S.phd.map(p => `
      <div class="person">
        <div class="avatar${p.ph ? ' has-photo' : ''}">${p.ph ? `<img class="ph" src="${p.ph}" alt="${p.n}"/>` : p.i}<img class="flag" src="https://flagcdn.com/w40/${p.fl}.png" alt="${p.fln}"/></div>
        <h4>${p.n}</h4>
        <div class="role">${p.r}</div>
        <div class="focus">${p.f}</div>
      </div>`).join('');
    const ugHTML = S.ug.map(u => `
      <div class="ug-row">
        <img src="https://flagcdn.com/w40/${u.fl}.png" alt="${u.fln}"/>
        <div class="col"><div class="nm">${u.n}</div><div class="nt">Undergraduate Researcher</div></div>
      </div>`).join('');
    const galleryHTML = (S.gallery||[]).map(g => `
      <figure>
        <div class="ph"><img src="${g.src}" alt="${g.cap}, ${g.d}" loading="lazy"/></div>
        <figcaption><span class="cap">${g.cap}</span><span class="when">${g.d}</span></figcaption>
      </figure>`).join('');
    gc.innerHTML = `
      <div class="group-sub">Doctoral Researchers</div>
      <div class="people">${phdHTML}</div>
      <div class="group-sub">Undergraduate Researchers</div>
      <div class="ug">${ugHTML}</div>
      ${galleryHTML ? `<div class="group-sub">Life in the group</div><div class="gallery">${galleryHTML}</div>` : ''}
    `;
  }

  // ---- News list (uses .row-list pattern)
  const newsList = document.getElementById('newsList');
  if(newsList){
    newsList.innerHTML = S.news.map(n => `
      <li class="item">
        <div class="k">${n.d}</div>
        <div class="nm" style="font-size:17px; line-height:1.55">${n.t}</div>
      </li>`).join('');
  }

  // ---- Sponsors grid
  const sg = document.getElementById('sponsorsGrid');
  if(sg){
    sg.innerHTML = S.sponsors.map(s => `<div class="sponsor"><div class="name">${s.n}</div><div class="kind">${s.k}</div></div>`).join('');
  }

  // ---- Connections diagram
  const svg = document.getElementById('connDiag');
  if(svg){
    const nodes = S.thrusts;
    const edgesG = svg.querySelector('#edges');
    const nodesG = svg.querySelector('#nodes');

    const edgeSet = new Set();
    nodes.forEach(a => {
      const det = S.thrustDetail[a.id];
      det.edges.forEach(e => {
        const key = [a.id, e.to].sort().join('-');
        edgeSet.add(key);
      });
    });
    const edges = [...edgeSet].map(k => {
      const [a,b] = k.split('-');
      return { a, b, key:k };
    });

    const byId = id => nodes.find(n=>n.id===id);
    edges.forEach(e => {
      const A = byId(e.a), B = byId(e.b);
      const line = document.createElementNS('http://www.w3.org/2000/svg','line');
      line.setAttribute('x1', A.x); line.setAttribute('y1', A.y);
      line.setAttribute('x2', B.x); line.setAttribute('y2', B.y);
      line.setAttribute('class','edge');
      line.setAttribute('data-edge', e.key);
      edgesG.appendChild(line);
    });

    nodes.forEach(n => {
      const g = document.createElementNS('http://www.w3.org/2000/svg','g');
      g.setAttribute('class','node');
      g.setAttribute('data-id', n.id);
      g.style.cursor = 'pointer';

      const c = document.createElementNS('http://www.w3.org/2000/svg','circle');
      c.setAttribute('cx', n.x); c.setAttribute('cy', n.y); c.setAttribute('r', 42);
      c.setAttribute('class','node-circle');

      const txt = document.createElementNS('http://www.w3.org/2000/svg','text');
      txt.setAttribute('x', n.x); txt.setAttribute('y', n.y);
      txt.setAttribute('text-anchor','middle');
      txt.setAttribute('dominant-baseline','central');
      txt.setAttribute('class','node-label');
      const parts = n.label.split(' ');
      if(parts.length > 1){
        const mid = Math.ceil(parts.length/2);
        const ln1 = parts.slice(0,mid).join(' ');
        const ln2 = parts.slice(mid).join(' ');
        txt.innerHTML = `<tspan x="${n.x}" dy="-.4em">${ln1}</tspan><tspan x="${n.x}" dy="1.1em">${ln2}</tspan>`;
      } else {
        txt.textContent = n.label;
      }

      g.appendChild(c); g.appendChild(txt);
      nodesG.appendChild(g);

      g.addEventListener('mouseenter', ()=> activate(n.id));
      g.addEventListener('click', ()=> activate(n.id));
      g.addEventListener('focus', ()=> activate(n.id));
    });

    const ddTitle = document.getElementById('ddTitle');
    const ddDesc  = document.getElementById('ddDesc');
    const ddList  = document.getElementById('ddList');

    function activate(id){
      svg.querySelectorAll('.node-circle').forEach(c => c.classList.remove('active'));
      svg.querySelectorAll('.edge').forEach(e => e.classList.remove('lit'));
      const g = svg.querySelector(`.node[data-id="${id}"] .node-circle`);
      g.classList.add('active');
      const det = S.thrustDetail[id];
      det.edges.forEach(e => {
        const key = [id, e.to].sort().join('-');
        const line = svg.querySelector(`.edge[data-edge="${key}"]`);
        if(line) line.classList.add('lit');
      });
      ddTitle.innerHTML = `${det.title} <i>×</i> the rest`;
      ddDesc.textContent = det.desc;
      ddList.innerHTML = det.edges.map(e => `
        <li><span class="t">${S.thrustLabels[e.to]} — ${e.proj}</span><span class="v">${e.ven}</span></li>
      `).join('');
    }

    activate('super');
  }
})();
