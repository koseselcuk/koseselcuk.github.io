// Publications page: filtering + bibtex expand
(function(){
  const S = window.SITE;
  const list = document.getElementById('pubList');
  const count = document.getElementById('resultCount');
  const state = { thrust:'all', year:'all', kind:'all' };

  function bibtex(p){
    const key = (p.a.split(',')[0].split('.').pop().trim().toLowerCase().replace(/[^a-z]/g,'') || 'paper') + p.y;
    const type = p.k === 'journal' ? 'article' : 'inproceedings';
    return `@${type}{${key},
  title   = {${p.t}},
  author  = {${p.a.replace(/, /g,' and ')}},
  year    = {${p.y}},
  ${p.k === 'journal' ? 'journal' : 'booktitle'} = {${p.v}}
}`;
  }

  function render(){
    const filt = S.publications.filter(p => {
      if(state.thrust !== 'all' && !p.thrusts.includes(state.thrust)) return false;
      if(state.year !== 'all'){
        if(state.year === '2022'){ if(p.y > 2022) return false; }
        else if(String(p.y) !== state.year) return false;
      }
      if(state.kind !== 'all' && p.k !== state.kind) return false;
      return true;
    }).sort((a,b)=> b.y - a.y);

    count.textContent = `${filt.length} of ${S.publications.length} shown · complete bibliography`;

    if(filt.length === 0){
      list.innerHTML = `<div class="pubs-empty">No publications match this filter combination. Try widening one.</div>`;
      return;
    }

    list.innerHTML = filt.map((p, i) => {
      const thrChips = p.thrusts.map(t => `<span class="ch">${S.thrustLabels[t]}</span>`).join('');
      return `
        <div class="pub-row" data-i="${i}">
          <div class="yr">${p.y}</div>
          <div class="ttl">${p.t}
            <span class="au">${p.a}</span>
            <span class="thr">${thrChips}</span>
          </div>
          <div class="ven">${p.v}</div>
          <pre class="bibtex" data-bib="${i}">${bibtex(p)}<button class="copy-btn">Copy</button></pre>
        </div>`;
    }).join('');

    list.querySelectorAll('.pub-row').forEach(row => {
      row.addEventListener('click', e => {
        if(e.target.closest('.copy-btn')) return;
        row.classList.toggle('open');
      });
    });
    list.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const pre = btn.closest('.bibtex');
        const text = pre.firstChild.textContent;
        navigator.clipboard && navigator.clipboard.writeText(text);
        const orig = btn.textContent;
        btn.textContent = 'Copied ✓';
        setTimeout(()=> btn.textContent = orig, 1200);
      });
    });
  }

  document.querySelectorAll('.fchip').forEach(c => {
    c.addEventListener('click', () => {
      const f = c.getAttribute('data-filter');
      const v = c.getAttribute('data-val');
      document.querySelectorAll(`.fchip[data-filter="${f}"]`).forEach(x => x.classList.remove('active'));
      c.classList.add('active');
      state[f] = v;
      render();
    });
  });

  render();
})();
