export function initAnimations() {
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  },{threshold:0.12});
  
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

  const heroTitle=document.querySelector('.hero-title');
  if(heroTitle){
    heroTitle.style.animation='heroIn 1s ease forwards';
    const style=document.createElement('style');
    style.textContent='@keyframes heroIn{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}';
    document.head.appendChild(style);
  }
}