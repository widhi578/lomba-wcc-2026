export let selectedProductName='';

export function openBooking(name,price){
  selectedProductName=name||'';
  const modal=document.getElementById('bookingModal');
  const txt=document.getElementById('selectedProductText');
  if(name){
    txt.innerHTML=`<strong>${name}</strong> — <em>${price}</em>`;
  } else {
    txt.innerHTML='Pilih produk dari katalog atau isi custom order';
  }
  document.getElementById('orderForm').style.display='block';
  document.getElementById('orderSuccess').style.display='none';
  modal.classList.add('open');
  document.body.style.overflow='hidden';
}

export function closeBooking(){
  document.getElementById('bookingModal').classList.remove('open');
  document.body.style.overflow='';
}

window.openBooking = openBooking;
window.closeBooking = closeBooking;

export function initModal() {
  const modal = document.getElementById('bookingModal');
  if(modal) {
    modal.addEventListener('click',e=>{
      if(e.target===modal) closeBooking();
    });
  }
}