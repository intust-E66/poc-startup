// ══════════════════════════════════════════════════════════════
// POCKit — Shared Navigation Component
// ══════════════════════════════════════════════════════════════

export function createNav(activePage = '') {
    const pages = [
        { id: 'home', label: '🏠 Home', href: '/' },
        { id: 'playbook', label: '📖 Playbook', href: '/playbook.html' },
        { id: 'cases', label: '📚 Cases', href: '/cases.html' },
        { id: 'test30', label: '🎯 30-Sec', href: '/30sec-test.html' },
        { id: 'fakedoor', label: '🚪 Fake Door', href: '/fake-door.html' },
        { id: 'workshop', label: '📝 Workshop', href: '/workshop.html' },
        { id: 'dashboard', label: '📊 Dashboard', href: '/dashboard.html' },
        { id: 'slides', label: '🎞️ Slides', href: '/slides.html' },
    ];

    const nav = document.createElement('nav');
    nav.className = 'nav';
    nav.innerHTML = `
    <a href="/" class="nav__logo">POCKit <span>Startup Toolkit</span></a>
    <button class="nav__toggle" id="navToggle" aria-label="Toggle navigation">☰</button>
    <ul class="nav__links" id="navLinks">
      ${pages.map(p => `
        <li><a href="${p.href}" class="nav__link ${p.id === activePage ? 'active' : ''}">${p.label}</a></li>
      `).join('')}
    </ul>
  `;

    document.body.prepend(nav);

    // Mobile toggle
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    toggle?.addEventListener('click', () => links.classList.toggle('open'));

    // Close on link click (mobile)
    links?.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => links.classList.remove('open'));
    });
}

export function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerHTML = `
    <div class="container">
      <div class="footer__name">คุณอินทัร ประชากิจกุล (Intust)</div>
      <div class="footer__role">KU Startup Alumni | Official Mentor at CSII | Real Estate & Startup Investor</div>
      <div class="footer__links">
        <a href="https://www.linkedin.com/in/intust-p/" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://www.facebook.com/Jekky.POMAHOB/" target="_blank" rel="noopener">Facebook</a>
        <a href="https://www.instagram.com/jekjhp/" target="_blank" rel="noopener">Instagram</a>
      </div>
    </div>
  `;
    document.body.appendChild(footer);
}
