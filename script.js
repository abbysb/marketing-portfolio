const menuButton=document.querySelector('.menu-btn');const links=document.querySelector('.nav-links');menuButton?.addEventListener('click',()=>{const open=links.classList.toggle('open');menuButton.setAttribute('aria-expanded',open)});document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
// Reel library: category filters + play-in-place Instagram embeds
const filterButtons=document.querySelectorAll('.reel-filters button');
filterButtons.forEach(btn=>btn.addEventListener('click',()=>{
  filterButtons.forEach(b=>b.classList.toggle('active',b===btn));
  const f=btn.dataset.filter;
  document.querySelectorAll('.reel-card').forEach(card=>{card.hidden=f!=='all'&&!card.dataset.cat.split(' ').includes(f)});
}));
document.querySelectorAll('.reel-card .reel-tile').forEach(tile=>tile.addEventListener('click',()=>{
  const card=tile.closest('.reel-card');const url=card.dataset.url;
  // Calvary Farms has Instagram embedding turned off, so those open on Instagram instead
  if('external' in card.dataset){window.open(url,'_blank','noopener');return}
  const embed=document.createElement('blockquote');
  embed.className='instagram-media';
  embed.dataset.instgrmPermalink=url;
  embed.dataset.instgrmVersion='14';
  embed.innerHTML=`<a href="${url}" target="_blank" rel="noopener">Watch on Instagram ↗</a>`;
  tile.replaceWith(embed);
  window.instgrm?.Embeds.process();
}));
