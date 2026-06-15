// Shared site behaviors
document.querySelectorAll('.reveal').forEach((el,i)=>{
  setTimeout(()=>el.classList.add('in'), 80 + i*120);
});
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav ul');
navToggle && navToggle.addEventListener('click', () => navList.classList.toggle('open'));
navList && navList.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navList.classList.remove('open')));
