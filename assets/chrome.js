// Injects shared nav + footer chrome onto sub-pages.
// Pages should have <div data-chrome="nav" data-base="../"></div> and <div data-chrome="footer" data-base="../"></div>
(function(){
  function chrome(base, cur){
    return {
      nav: `
<header class="nav">
  <div class="wrap row">
    <a href="${base}index.html" class="brand">Selçuk <i>Köse</i></a>
    <button class="nav-toggle" aria-label="menu">Menu</button>
    <ul>
      <li><a href="${base}index.html#research" class="${cur==='research'?'cur':''}">Research</a></li>
      <li><a href="${base}publications.html" class="${cur==='publications'?'cur':''}">Publications</a></li>
      <li><a href="${base}index.html#teaching" class="${cur==='teaching'?'cur':''}">Teaching</a></li>
      <li><a href="${base}index.html#group" class="${cur==='group'?'cur':''}">Group</a></li>
      <li><a href="${base}join.html" class="${cur==='join'?'cur':''}">Join</a></li>
      <li><a href="${base}press.html" class="${cur==='press'?'cur':''}">Talks</a></li>
      <li><a href="${base}index.html#bio">Bio · CV</a></li>
    </ul>
  </div>
</header>`,
      footer: `
<footer>
  <div class="wrap">
    <div class="foot-grid">
      <div class="brand-blk">
        <div class="b">Selçuk <i>Köse</i></div>
        <p>Department of Electrical and Computer Engineering, Hajim School of Engineering and Applied Sciences, University of Rochester.</p>
      </div>
      <div>
        <h5>Contact</h5>
        <ul>
          <li><a class="link" href="mailto:selcuk.kose@rochester.edu">selcuk.kose@rochester.edu</a></li>
          <li>518 Computer Studies Building <span style="color:var(--muted)">(Chair Office)</span></li>
          <li>422 Computer Studies Building <span style="color:var(--muted)">(Faculty Office)</span></li>
          <li>500 Joseph C. Wilson Blvd</li>
          <li>Rochester, NY 14627</li>
          <li>(585) 275-1420</li>
        </ul>
      </div>
      <div>
        <h5>Elsewhere</h5>
        <ul>
          <li><a class="link" href="https://scholar.google.com/citations?user=mcHzKYYAAAAJ" target="_blank" rel="noopener">Google Scholar</a></li>
          <li><a class="link" href="https://dblp.org/pid/89/3319.html" target="_blank" rel="noopener">DBLP</a></li>
          <li><a class="link" href="https://orcid.org/0000-0001-8095-6691" target="_blank" rel="noopener">ORCID</a></li>
          <li><a class="link" href="https://www.linkedin.com/in/selcukkose/" target="_blank" rel="noopener">LinkedIn</a></li>
          <li><a class="link" href="${base}assets/selcuk_kose_cv.pdf" target="_blank" rel="noopener">CV (PDF)</a></li>
        </ul>
      </div>
    </div>
    <div class="colophon">
      <span>© 2026 · Köse Research Group · University of Rochester</span>
      <span>Updated May 2026</span>
    </div>
  </div>
</footer>`
    };
  }

  const cur = document.documentElement.getAttribute('data-page') || '';
  document.querySelectorAll('[data-chrome]').forEach(el => {
    const which = el.getAttribute('data-chrome');
    const base = el.getAttribute('data-base') || '';
    const c = chrome(base, cur);
    el.outerHTML = c[which] || '';
  });

  // Re-bind nav toggle after injection
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav ul');
  navToggle && navToggle.addEventListener('click', () => navList.classList.toggle('open'));
  navList && navList.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navList.classList.remove('open')));

  // Reveal
  document.querySelectorAll('.reveal').forEach((el,i)=>{
    setTimeout(()=>el.classList.add('in'), 80 + i*120);
  });
})();
