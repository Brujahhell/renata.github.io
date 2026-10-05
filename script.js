// ===== CONFIGURAÇÃO RÁPIDA =====
// Troque pelo WhatsApp real, com DDI + DDD e somente números.
const WHATSAPP_NUMBER = "5500000000000";
const message = encodeURIComponent("Olá, Renata! Vim pelo seu site e gostaria de saber mais sobre os atendimentos.");
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
document.getElementById("whatsappBtn").href = whatsappUrl;
document.getElementById("floatingWhatsApp").href = whatsappUrl;
const menu=document.querySelector('.menu'),nav=document.querySelector('.topbar nav');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');nav.style.display=open?'flex':'';if(open){nav.style.position='absolute';nav.style.top='68px';nav.style.left='0';nav.style.right='0';nav.style.flexDirection='column';nav.style.padding='20px 5%';nav.style.background='rgba(16,11,19,.98)';nav.style.borderBottom='1px solid rgba(255,255,255,.11)'}});
