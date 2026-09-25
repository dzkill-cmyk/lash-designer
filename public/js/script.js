document.getElementById('year').textContent = new Date().getFullYear();

// header scroll state
const header = document.getElementById('header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 12);
document.addEventListener('scroll', onScroll); onScroll();

// mobile menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// reveal on scroll
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: .15 });
  reveals.forEach(el => io.observe(el));
} else {
  reveals.forEach(el => el.classList.add('in'));
}

// contact form: tenta back-end real e sempre oferece fallback via WhatsApp
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    nome: form.nome.value.trim(),
    telefone: form.telefone.value.trim(),
    servico: form.servico.value,
    mensagem: form.mensagem.value.trim(),
    data: new Date().toISOString()
  };
  if (!data.nome || !data.telefone) {
    formMsg.textContent = 'Preencha nome e WhatsApp para continuar.';
    formMsg.style.color = '#e3a9a9';
    return;
  }
  try {
    await fetch('/api/contato', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  } catch (err) {
    // sem back-end conectado neste preview — segue só pelo WhatsApp
  }
  const texto = encodeURIComponent(
    `Oi Mirelly! Meu nome é ${data.nome}. Tenho interesse em: ${data.servico}. ${data.mensagem ? 'Mensagem: ' + data.mensagem : ''}`
  );
  formMsg.textContent = 'Mensagem pronta! Abrindo o WhatsApp para confirmar com a Mirelly...';
  formMsg.style.color = '#c9a24b';
  window.open(`https://wa.me/5519997487604?text=${texto}`, '_blank');
  form.reset();
});