// ============================================
//   RODYHER VILORIA — Portfolio Script
// ============================================

// ===== NAV SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ===== REVEAL ON SCROLL =====
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
reveals.forEach(r => revealObserver.observe(r));

// ===== SKILL BARS ANIMATION =====
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        const w = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => { bar.style.width = w; }, 100);
      });
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.skill-group').forEach(g => skillObserver.observe(g));

// ===== VIDEO: preview on hover for cards =====
document.querySelectorAll('.caso-video-wrap video').forEach(video => {
  const card = video.closest('.caso-card');
  card.addEventListener('mouseenter', () => video.play().catch(() => {}));
  card.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });
});

// ===== VIDEO MODAL =====
const videoModal    = document.getElementById('videoModal');
const videoPlayer   = document.getElementById('videoModalPlayer');
const videoModalClose = document.getElementById('videoModalClose');

function openVideoModal(src) {
  videoPlayer.src = src;
  videoPlayer.play().catch(() => {});
  videoModal.classList.add('visible');
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  videoModal.classList.remove('visible');
  videoPlayer.pause();
  setTimeout(() => { videoPlayer.src = ''; }, 350);
  document.body.style.overflow = '';
}

document.querySelectorAll('.caso-card').forEach(card => {
  card.addEventListener('click', () => {
    const src = card.getAttribute('data-video');
    if (src) openVideoModal(src);
  });
});
videoModalClose.addEventListener('click', closeVideoModal);
videoModal.addEventListener('click', e => { if (e.target === videoModal) closeVideoModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeVideoModal(); });

// ===== HAMBURGER (animated → X) =====
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu   = document.getElementById('mobileMenu');
let menuOpen = false;

function toggleMobileMenu() {
  menuOpen = !menuOpen;
  hamburgerBtn.classList.toggle('is-active', menuOpen);
  mobileMenu.classList.toggle('open', menuOpen);
  document.body.style.overflow = menuOpen ? 'hidden' : '';
}

function closeMobileMenu() {
  menuOpen = false;
  hamburgerBtn.classList.remove('is-active');
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.mobile-menu a').forEach(a => {
  a.addEventListener('click', closeMobileMenu);
});

// ===== LANGUAGE TOGGLE =====
let currentLang = 'es';

function setLang(lang) {
  currentLang = lang;

  // Update all elements with data-es / data-en attributes
  document.querySelectorAll('[data-es]').forEach(el => {
    const text = el.getAttribute('data-' + lang);
    if (text !== null) el.innerHTML = text;
  });

  // Update input/textarea placeholders
  document.querySelectorAll('[data-placeholder-es]').forEach(el => {
    el.placeholder = el.getAttribute('data-placeholder-' + lang) || '';
  });

  // Update select option text
  document.querySelectorAll('select option[data-es]').forEach(opt => {
    const text = opt.getAttribute('data-' + lang);
    if (text) opt.text = text;
  });

  // Update lang button states + globe icon
  const btnEs = document.getElementById('langBtnEs');
  const btnEn = document.getElementById('langBtnEn');
  if (lang === 'es') {
    btnEs.classList.add('active');
    btnEn.classList.remove('active');
    btnEs.innerHTML = '<span class="lang-globe">🌐</span> ES';
    btnEn.innerHTML = 'EN';
  } else {
    btnEn.classList.add('active');
    btnEs.classList.remove('active');
    btnEn.innerHTML = '<span class="lang-globe">🌐</span> EN';
    btnEs.innerHTML = 'ES';
  }

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Update form status message if it's currently shown
  const statusEl = document.getElementById('formStatus');
  if (statusEl && statusEl.dataset.state) {
    updateFormStatus(statusEl.dataset.state, lang);
  }
}

// ===== WEB3FORMS API =====
const contactForm   = document.getElementById('contactForm');
const formSubmitBtn = document.getElementById('formSubmitBtn');
const formStatus    = document.getElementById('formStatus');
const formSuccess   = document.getElementById('formSuccess');

function updateFormStatus(state, lang) {
  formStatus.dataset.state = state;
  if (state === 'sending') {
    formStatus.style.color = 'var(--text-muted)';
    formStatus.textContent = lang === 'es' ? 'Enviando mensaje...' : 'Sending message...';
  } else if (state === 'error') {
    formStatus.style.color = '#f87171';
    formStatus.textContent = lang === 'es'
      ? 'Hubo un error al enviar. Por favor intenta de nuevo.'
      : 'There was an error sending. Please try again.';
  }
}

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // UI: loading state
    formSubmitBtn.disabled = true;
    formSubmitBtn.innerHTML = currentLang === 'es' ? 'Enviando...' : 'Sending...';
    formStatus.style.display = 'block';
    updateFormStatus('sending', currentLang);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Success
        contactForm.style.display = 'none';
        formStatus.style.display = 'none';
        formSuccess.style.display = 'block';
        const successSpan = formSuccess.querySelector('span');
        if (successSpan) {
          successSpan.textContent = currentLang === 'es'
            ? '¡Mensaje enviado! Te respondo en menos de 24 horas.'
            : 'Message sent! I\'ll get back to you in less than 24 hours.';
        }
      } else {
        // API returned failure
        updateFormStatus('error', currentLang);
        formSubmitBtn.disabled = false;
        formSubmitBtn.innerHTML = currentLang === 'es' ? 'Enviar mensaje →' : 'Send message →';
      }
    } catch (err) {
      // Network error
      updateFormStatus('error', currentLang);
      formSubmitBtn.disabled = false;
      formSubmitBtn.innerHTML = currentLang === 'es' ? 'Enviar mensaje →' : 'Send message →';
    }
  });
}

// ===== HERO PARALLAX =====
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  const grid = document.querySelector('.hero-grid');
  if (grid) grid.style.transform = `translateY(${y * 0.3}px)`;
}, { passive: true });