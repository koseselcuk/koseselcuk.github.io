// Populates the per-thrust publication list from data.js
(function(){
  const container = document.querySelector('.pubs[data-thrust]');
  if(!container || !window.SITE) return;
  const id = container.getAttribute('data-thrust');
  const pubs = window.SITE.publications
    .filter(p => p.thrusts.includes(id))
    .sort((a,b) => b.y - a.y)
    .slice(0, 8);
  container.innerHTML = pubs.map(p => `
    <a class="pub" href="../publications.html">
      <div class="yr">${p.y}</div>
      <div class="ttl">${p.t}<span class="au">${p.a}</span></div>
      <div class="ven">${p.v}</div>
    </a>`).join('');
})();
