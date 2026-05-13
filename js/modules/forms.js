import { selectedProductName } from './modal.js';

export function submitOrder(){
  const name=document.getElementById('orderName').value.trim();
  const phone=document.getElementById('orderPhone').value.trim();
  const type=document.getElementById('orderType').value;
  const addr=document.getElementById('orderAddress').value.trim();
  if(!name||!phone||!type||!addr){
    if(window.showToast) window.showToast('Mohon lengkapi data yang wajib diisi!');
    return;
  }
  const qty=document.getElementById('orderQty').value||'1';
  const size=document.getElementById('orderSize').value||'-';
  const note=document.getElementById('orderNote').value||'-';
  const product=selectedProductName||'Custom Order';
  const msg=`Halo Wirera Batik%0A%0ASaya ingin memesan:%0AProduk: ${encodeURIComponent(product)}%0ANama: ${encodeURIComponent(name)}%0AJenis: ${encodeURIComponent(type)}%0AUkuran/Warna: ${encodeURIComponent(size)}%0AJumlah: ${encodeURIComponent(qty)}%0AAlamat: ${encodeURIComponent(addr)}%0ACatatan: ${encodeURIComponent(note)}`;
  document.getElementById('orderForm').style.display='none';
  document.getElementById('orderSuccess').style.display='block';
  setTimeout(()=>window.open(`https://wa.me/6285875537231?text=${msg}`,'_blank'),1200);
}

export function submitContact(){
  const name=document.getElementById('contactName').value.trim();
  const email=document.getElementById('contactEmail').value.trim();
  const msg=document.getElementById('contactMessage').value.trim();
  if(!name||!email||!msg){
    if(window.showToast) window.showToast('Mohon isi nama, email, dan pesan!');
    return;
  }
  if(window.showToast) window.showToast('Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.');
  document.getElementById('contactName').value='';
  document.getElementById('contactEmail').value='';
  document.getElementById('contactPhone').value='';
  document.getElementById('contactTopic').value='';
  document.getElementById('contactMessage').value='';
}

export function subscribeNewsletter(){
  const email=document.getElementById('newsletterEmail').value.trim();
  if(!email||!email.includes('@')){
    if(window.showToast) window.showToast('Masukkan email yang valid!');
    return;
  }
  if(window.showToast) window.showToast('Berhasil berlangganan newsletter Batik Sari Nusantara!');
  document.getElementById('newsletterEmail').value='';
}

window.submitOrder = submitOrder;
window.submitContact = submitContact;
window.subscribeNewsletter = subscribeNewsletter;