/* ===== PORTFOLIO INTERACTIVE FEATURES ===== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initScrollReveal();
  initParticles();
  initActiveNav();
  initCarousels();
  initEmailFallback();
});

/* ---------- THEME TOGGLE ---------- */
function initTheme() {
  const toggle = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');
  const saved = localStorage.getItem('portfolio-theme');

  if (saved === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    icon.innerHTML = '<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
  }

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    if (current === 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
      icon.innerHTML = '<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
      localStorage.setItem('portfolio-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      icon.innerHTML = '<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/></svg>';
      localStorage.setItem('portfolio-theme', 'dark');
    }
    // Reinit particles with new colors
    initParticles();
  });
}

/* ---------- NAVIGATION ---------- */
function initNavigation() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // Navbar background on scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.borderBottomColor = 'rgba(0, 212, 255, 0.1)';
    } else {
      navbar.style.borderBottomColor = '';
    }
  });
}

/* ---------- ACTIVE NAV LINK ---------- */
function initActiveNav() {
  const sections = document.querySelectorAll('.section, .hero');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    { rootMargin: '-40% 0px -60% 0px' }
  );

  sections.forEach(section => observer.observe(section));
}

/* ---------- SCROLL REVEAL ---------- */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  reveals.forEach(el => observer.observe(el));
}

/* ---------- CANVAS PARTICLES ---------- */
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let animationId;
  if (canvas._animId) {
    cancelAnimationFrame(canvas._animId);
  }

  function resize() {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  const particleColor = isDark ? 'rgba(0, 212, 255, ' : 'rgba(2, 132, 199, ';
  const lineColor = isDark ? 'rgba(0, 212, 255, ' : 'rgba(2, 132, 199, ';

  const particles = [];
  const count = Math.min(60, Math.floor((canvas.width * canvas.height) / 15000));

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const alpha = (1 - dist / 150) * 0.15;
          ctx.strokeStyle = lineColor + alpha + ')';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw + move particles
    particles.forEach(p => {
      ctx.fillStyle = particleColor + p.opacity + ')';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    });

    canvas._animId = requestAnimationFrame(draw);
  }

  draw();
}

/* ---------- IMAGE CAROUSELS ---------- */
function initCarousels() {
  document.querySelectorAll('.project-carousel').forEach(carousel => {
    const images = carousel.querySelectorAll('.carousel-img');
    const dots = carousel.querySelectorAll('.dot');
    const btnPrev = carousel.querySelector('[data-dir="prev"]');
    const btnNext = carousel.querySelector('[data-dir="next"]');
    let current = 0;

    function show(idx) {
      images.forEach(img => img.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      current = (idx + images.length) % images.length;
      images[current].classList.add('active');
      if (dots[current]) dots[current].classList.add('active');
    }

    if (btnPrev) btnPrev.addEventListener('click', () => show(current - 1));
    if (btnNext) btnNext.addEventListener('click', () => show(current + 1));
    dots.forEach((dot, i) => dot.addEventListener('click', () => show(i)));

    // Auto-advance every 5 seconds
    setInterval(() => show(current + 1), 5000);
  });
}

/* ---------- EMAIL FALLBACK ---------- */
function initEmailFallback() {
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

  // Create notification element
  const toast = document.createElement('div');
  toast.className = 'email-toast';
  toast.innerText = 'Email address copied to clipboard!';
  document.body.appendChild(toast);

  emailLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const email = link.getAttribute('href').replace('mailto:', '');

      // Copy to clipboard
      navigator.clipboard.writeText(email).then(() => {
        // Show toast
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
      });

      // We still let the default mailto: action happen, 
      // but the copy works as a fallback/enhancement.
    });
  });
}

/* ---------- SMOOTH SCROLL POLYFILL ---------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
