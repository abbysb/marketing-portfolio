const menuButton=document.querySelector('.menu-btn');const links=document.querySelector('.nav-links');menuButton?.addEventListener('click',()=>{const open=links.classList.toggle('open');menuButton.setAttribute('aria-expanded',open)});document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
// Reel library: category filters
const filterButtons=document.querySelectorAll('.reel-filters button');
filterButtons.forEach(btn=>btn.addEventListener('click',()=>{
  filterButtons.forEach(b=>b.classList.toggle('active',b===btn));
  const f=btn.dataset.filter;
  document.querySelectorAll('.reel-card').forEach(card=>{card.hidden=f!=='all'&&!card.dataset.cat.split(' ').includes(f)});
}));
