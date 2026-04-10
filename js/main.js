// ── Year ──────────────────────────────────────────────
    document.getElementById('year').textContent = new Date().getFullYear();

    // ── Mobile sidebar toggle ─────────────────────────────
    const sidebar = document.getElementById('sidebar');
    document.getElementById('mobileToggle').addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
    document.addEventListener('click', e => {
      if (window.innerWidth <= 768 && !sidebar.contains(e.target) && e.target.id !== 'mobileToggle') {
        sidebar.classList.remove('open');
      }
    });

    // ── Collapse panels ───────────────────────────────────
    function togglePanel(id) {
      document.getElementById(id).classList.toggle('open');
    }

    // ── Scroll spy for nav active state ──────────────────
    const sections = document.querySelectorAll('section.section');
    const navLinks = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(l => l.classList.remove('active'));
          const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(s => observer.observe(s));

    // Catch the bottom of the page for the last section (Misc)
    window.addEventListener('scroll', () => {
      if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight - 2) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector('.nav-link[href="#misc"]');
        if (active) active.classList.add('active');
      }
    });

    // ── Scroll fade-in ────────────────────────────────────
    const fadeEls = document.querySelectorAll('.fade-in, .timeline-item');
    const fadeObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          fadeObs.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -60px 0px' });

    fadeEls.forEach(el => fadeObs.observe(el));

    // ── Smooth nav click + close mobile sidebar ───────────
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) sidebar.classList.remove('open');
      });
    });
