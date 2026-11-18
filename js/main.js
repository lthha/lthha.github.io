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

    // ── Highlight the nav link for the current page ──────
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) link.classList.add('active');
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
