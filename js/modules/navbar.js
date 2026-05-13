export function toggleMenu(){
  const m=document.getElementById('mobileMenu');
  m.classList.toggle('open');
}
export function closeMenu(){
  document.getElementById('mobileMenu').classList.remove('open');
}
window.toggleMenu = toggleMenu;
window.closeMenu = closeMenu;

export function initNavbar() {
  window.addEventListener('scroll',()=>{
    const nb=document.getElementById('navbar');
    if(nb) nb.classList.toggle('scrolled',window.scrollY>50);
    const bt=document.getElementById('backTop');
    if (bt) bt.classList.toggle('visible',window.scrollY>400);
  });
}