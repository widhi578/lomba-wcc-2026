export function initFilter() {
  const filterTabs = document.getElementById('filterTabs');
  if(filterTabs) {
    filterTabs.addEventListener('click',e=>{
      const btn=e.target.closest('.filter-btn');
      if(!btn)return;
      document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const f=btn.dataset.filter;
      document.querySelectorAll('.product-card').forEach(card=>{
        const show=f==='all'||card.dataset.category===f;
        card.classList.toggle('hidden',!show);
      });
    });
  }
}