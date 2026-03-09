// ─────────────────────────────────────────────────────────────────────────────
// STYLE 04 — NRI · MINIMAL BUSINESS TECH
// Pure white · warm off-white · single blue accent · Inter · extreme restraint
// ─────────────────────────────────────────────────────────────────────────────

const headerHTML = `
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">

<style>
  :root {
    --nri-h:       60px;
    --nri-white:   #ffffff;
    --nri-bg:      #fafafa;
    --nri-ink:     #111111;
    --nri-mid:     #6b7280;
    --nri-rule:    #e5e7eb;
    --nri-blue:    #2563eb;
    --nri-blue-bg: #eff6ff;
    --nri-ff:      'Inter', -apple-system, sans-serif;
    --nri-trans:   0.18s ease;
  }

  .nri-header, .nri-header *,
  .nri-mobile-nav, .nri-mobile-nav * {
    font-family: var(--nri-ff);
    box-sizing: border-box;
  }

  .nri-header {
    position: fixed;
    top: 0; left: 0; right: 0;
    height: var(--nri-h);
    z-index: 9999;
    background: rgba(255,255,255,0);
    border-bottom: 1px solid transparent;
    transition: background var(--nri-trans), border-color var(--nri-trans);
  }

  .nri-header.is-scrolled,
  .nri-header.menu-open {
    background: rgba(255,255,255,0.95);
    border-bottom-color: var(--nri-rule);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }

  .nri-header-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 48px;
  }

  /* Logo */
  .nri-logo {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 9px;
    flex-shrink: 0;
  }

  .nri-logo-mark {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 3px;
    color: var(--nri-ink);
    text-transform: uppercase;
    position: relative;
    padding-bottom: 2px;
  }

  .nri-logo-mark::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0;
    width: 100%; height: 2px;
    background: var(--nri-blue);
    border-radius: 1px;
  }

  .nri-logo-dot {
    width: 5px; height: 5px;
    border-radius: 50%;
    background: var(--nri-blue);
    flex-shrink: 0;
    margin-bottom: 1px;
  }

  /* Nav */
  .nri-nav {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
  }

  .nri-nav-item { position: relative; }

  .nri-nav-link {
    text-decoration: none;
    font-size: 13.5px;
    font-weight: 400;
    color: var(--nri-mid);
    padding: 6px 12px;
    border-radius: 6px;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    transition: color var(--nri-trans), background var(--nri-trans);
    white-space: nowrap;
  }

  .nri-nav-link:hover { color: var(--nri-ink); background: var(--nri-bg); }

  .nri-nav-chevron {
    width: 8px; height: 8px;
    opacity: 0.4;
    transition: transform var(--nri-trans);
    flex-shrink: 0;
  }

  .nri-nav-item:hover .nri-nav-chevron { transform: rotate(180deg); opacity: 0.7; }

  /* Dropdown */
  .nri-dropdown {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    min-width: 210px;
    background: var(--nri-white);
    border: 1px solid var(--nri-rule);
    border-radius: 10px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04);
    padding: 8px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(4px);
    pointer-events: none;
    transition: opacity var(--nri-trans), transform var(--nri-trans), visibility var(--nri-trans);
  }

  .nri-dropdown::before {
    content: '';
    position: absolute;
    bottom: 100%; left: 0; right: 0;
    height: 14px;
  }

  .nri-nav-item:hover .nri-dropdown {
    opacity: 1; visibility: visible;
    transform: translateY(0);
    pointer-events: auto;
  }

  .nri-dd-item {
    display: block;
    font-size: 13px;
    font-weight: 400;
    color: var(--nri-mid);
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 6px;
    transition: color var(--nri-trans), background var(--nri-trans);
  }

  .nri-dd-item:hover { color: var(--nri-ink); background: var(--nri-bg); }

  /* Right */
  .nri-header-right {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }

  .nri-cta {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: var(--nri-ink);
    color: var(--nri-white);
    text-decoration: none;
    font-size: 13.5px;
    font-weight: 500;
    padding: 8px 18px;
    border-radius: 7px;
    transition: background var(--nri-trans), transform var(--nri-trans);
    white-space: nowrap;
    flex-shrink: 0;
    letter-spacing: -0.1px;
  }

  .nri-cta:hover { background: #222; transform: translateY(-1px); }

  /* Hamburger */
  .nri-ham {
    display: none;
    background: var(--nri-white);
    border: 1px solid var(--nri-rule);
    border-radius: 8px;
    width: 38px; height: 38px;
    align-items: center; justify-content: center;
    cursor: pointer;
    margin-left: auto;
    flex-shrink: 0;
    transition: background var(--nri-trans), border-color var(--nri-trans);
  }

  .nri-ham:hover { background: var(--nri-bg); border-color: #d1d5db; }
  .nri-ham svg { width: 16px; height: 16px; color: var(--nri-ink); }

  .nri-ham-line { transition: transform 0.25s ease, opacity 0.25s ease; transform-origin: center; }
  .nri-ham.open .nri-ham-top    { transform: translateY(3.5px) rotate(45deg); }
  .nri-ham.open .nri-ham-mid    { opacity: 0; }
  .nri-ham.open .nri-ham-bottom { transform: translateY(-3.5px) rotate(-45deg); }

  /* Mobile nav */
  .nri-mobile-nav {
    position: fixed;
    top: calc(var(--nri-h) + 8px);
    left: 12px; right: 12px;
    background: var(--nri-white);
    border: 1px solid var(--nri-rule);
    border-radius: 12px;
    box-shadow: 0 16px 48px rgba(0,0,0,0.09);
    padding: 12px;
    z-index: 9998;
    max-height: calc(100vh - var(--nri-h) - 24px);
    overflow-y: auto;
    visibility: hidden;
    opacity: 0;
    transform: translateY(-6px) scale(0.99);
    pointer-events: none;
    transition: opacity var(--nri-trans), transform var(--nri-trans), visibility var(--nri-trans);
  }

  @media (min-width: 1025px) { .nri-mobile-nav { display: none !important; } }

  .nri-mobile-nav.open {
    visibility: visible;
    opacity: 1;
    transform: translateY(0) scale(1);
    pointer-events: auto;
  }

  .nri-mobile-nav > a,
  .nri-mobile-nav > div > .nri-mobile-drop-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px 12px;
    font-size: 14px;
    font-weight: 400;
    color: var(--nri-ink);
    text-decoration: none;
    border: none;
    background: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background var(--nri-trans);
    font-family: var(--nri-ff);
    box-sizing: border-box;
  }

  .nri-mobile-nav > a:hover,
  .nri-mobile-drop-btn:hover { background: var(--nri-bg); }

  .nri-mobile-drop-icon {
    width: 18px; height: 18px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; opacity: 0.4;
    transition: transform var(--nri-trans), opacity var(--nri-trans);
  }

  .nri-mobile-drop-btn.open .nri-mobile-drop-icon { transform: rotate(180deg); opacity: 0.7; }
  .nri-mobile-drop-icon svg { width: 12px; height: 12px; }

  .nri-mobile-drop-content {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.3s ease;
  }

  .nri-mobile-drop-content.open { max-height: 600px; }

  .nri-mobile-drop-content a {
    display: block;
    padding: 9px 12px;
    font-size: 13.5px;
    font-weight: 400;
    color: var(--nri-mid);
    text-decoration: none;
    border-radius: 7px;
    transition: background var(--nri-trans), color var(--nri-trans);
    box-sizing: border-box;
  }

  .nri-mobile-drop-content a:hover { background: var(--nri-bg); color: var(--nri-ink); }

  .nri-mobile-rule { height: 1px; background: var(--nri-rule); margin: 8px 4px; }

  .nri-mobile-nav .nri-cta {
    display: flex !important;
    justify-content: center;
    width: 100%;
    margin-top: 8px;
    padding: 11px 18px !important;
    font-size: 14px !important;
    border-radius: 8px;
    box-sizing: border-box;
  }

  @media (max-width: 1024px) {
    .nri-nav           { display: none; }
    .nri-header-right  { display: none; }
    .nri-ham           { display: flex; }
  }
</style>

<header class="nri-header" id="nri-header">
  <div class="nri-header-inner">

    <a href="index.html" class="nri-logo">
      <span class="nri-logo-mark">NRI</span>
      <span class="nri-logo-dot"></span>
    </a>

    <nav class="nri-nav">
      <a href="index.html" class="nri-nav-link">Home</a>

      <div class="nri-nav-item">
        <a href="#" class="nri-nav-link">
          Services
          <svg class="nri-nav-chevron" viewBox="0 0 8 8" fill="none" stroke="currentColor" stroke-width="1.8">
            <polyline points="1,3 4,6 7,3"/>
          </svg>
        </a>
        <div class="nri-dropdown">
          <a href="#" class="nri-dd-item">Technical Documentation</a>
          <a href="#" class="nri-dd-item">Software Development</a>
          <a href="#" class="nri-dd-item">UX Consulting</a>
        </div>
      </div>

      <a href="process.html" class="nri-nav-link">Process</a>
      <a href="about.html" class="nri-nav-link">About</a>
    </nav>

    <div class="nri-header-right">
      <a href="contact.html" class="nri-cta">Get in touch</a>
    </div>

    <button class="nri-ham" id="nri-ham" aria-label="Toggle menu">
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round">
        <line class="nri-ham-line nri-ham-top"    x1="2" y1="4.5"  x2="14" y2="4.5"/>
        <line class="nri-ham-line nri-ham-mid"    x1="2" y1="8"    x2="14" y2="8"/>
        <line class="nri-ham-line nri-ham-bottom" x1="2" y1="11.5" x2="14" y2="11.5"/>
      </svg>
    </button>

  </div>
</header>

<nav class="nri-mobile-nav" id="nri-mobile-nav">
  <a href="index.html">Home</a>
  <div>
    <button class="nri-mobile-drop-btn" data-nri-drop>
      <span>Services</span>
      <span class="nri-mobile-drop-icon">
        <svg viewBox="0 0 8 8" fill="none" stroke="currentColor" stroke-width="1.8">
          <polyline points="1,3 4,6 7,3"/>
        </svg>
      </span>
    </button>
    <div class="nri-mobile-drop-content">
      <a href="#">Technical Documentation</a>
      <a href="#">Software Development</a>
      <a href="#">UX Consulting</a>
    </div>
  </div>
  <a href="process.html">Process</a>
  <a href="about.html">About</a>
  <div class="nri-mobile-rule"></div>
  <a href="#contact" class="nri-cta">Get in touch</a>
</nav>
`;

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────────────────────
const footerHTML = `
<style>
  .nri-footer {
    background: var(--nri-white);
    border-top: 1px solid var(--nri-rule);
    font-family: var(--nri-ff);
    color: var(--nri-ink);
  }

  .nri-footer-main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 64px 40px 48px;
    display: grid;
    grid-template-columns: 1.8fr 1fr 1fr;
    gap: 56px;
  }

  .nri-footer-logo {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    margin-bottom: 14px;
  }

  .nri-footer-logo-mark {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 3px;
    color: var(--nri-ink);
    text-transform: uppercase;
    position: relative;
    padding-bottom: 2px;
  }

  .nri-footer-logo-mark::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0;
    width: 100%; height: 2px;
    background: var(--nri-blue);
    border-radius: 1px;
  }

  .nri-footer-logo-dot {
    width: 4px; height: 4px;
    border-radius: 50%;
    background: var(--nri-blue);
    flex-shrink: 0;
    margin-bottom: 1px;
  }

  .nri-footer-brand p {
    font-size: 13px;
    font-weight: 300;
    color: var(--nri-mid);
    line-height: 1.7;
    max-width: 280px;
    margin-bottom: 20px;
  }

  .nri-footer-col h4 {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: var(--nri-ink);
    margin-bottom: 16px;
  }

  .nri-footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 10px; }

  .nri-footer-col a {
    font-size: 13px;
    font-weight: 300;
    color: var(--nri-mid);
    text-decoration: none;
    transition: color var(--nri-trans);
  }

  .nri-footer-col a:hover { color: var(--nri-ink); }

  .nri-footer-bottom {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 40px 28px;
    border-top: 1px solid var(--nri-rule);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }

  .nri-footer-copy { font-size: 12px; font-weight: 300; color: #9ca3af; }

  .nri-footer-legal { display: flex; gap: 24px; }

  .nri-footer-legal a {
    font-size: 12px; font-weight: 300; color: #9ca3af; text-decoration: none;
    transition: color var(--nri-trans);
  }
  .nri-footer-legal a:hover { color: var(--nri-mid); }

  .nri-footer-social { display: flex; gap: 6px; }

  .nri-footer-social a {
    width: 32px; height: 32px;
    border-radius: 7px;
    border: 1px solid var(--nri-rule);
    display: flex; align-items: center; justify-content: center;
    font-size: 12px;
    font-family: var(--nri-ff);
    color: var(--nri-mid);
    text-decoration: none;
    transition: background var(--nri-trans), border-color var(--nri-trans), color var(--nri-trans);
  }

  .nri-footer-social a:hover {
    background: var(--nri-bg);
    border-color: #d1d5db;
    color: var(--nri-ink);
  }

  @media (max-width: 1024px) {
    .nri-footer-main { grid-template-columns: 1fr 1fr; gap: 40px; }
    .nri-footer-brand { grid-column: 1 / -1; }
  }

  @media (max-width: 640px) {
    .nri-footer-main { grid-template-columns: 1fr; padding: 40px 24px 32px; }
    .nri-footer-bottom { flex-direction: column; align-items: flex-start; padding: 18px 24px 28px; }
    .nri-footer-legal { flex-wrap: wrap; gap: 14px; }
  }
</style>

<footer class="nri-footer">
  <div class="nri-footer-main">

    <div class="nri-footer-brand">
      <a href="index.html" class="nri-footer-logo">
        <span class="nri-footer-logo-mark">NRI</span>
        <span class="nri-footer-logo-dot"></span>
      </a>
      <p>Helping companies fix developer onboarding and internal tooling.</p>
    </div>

    <div class="nri-footer-col">
      <h4>Services</h4>
      <ul>
        <li><a href="#">Technical Docs</a></li>
        <li><a href="#">Software Development</a></li>
        <li><a href="#">UX Consulting</a></li>
        <li><a href="#">Developer Enablement</a></li>
      </ul>
    </div>

    <div class="nri-footer-col">
      <h4>Company</h4>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="process.html">Process</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>

  </div>

  <div class="nri-footer-bottom">
    <span class="nri-footer-copy">© 2026 NRI. All rights reserved.</span>
    <div class="nri-footer-legal">
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
      <a href="#">Cookies</a>
    </div>
    <div class="nri-footer-social">
      <a href="#" aria-label="LinkedIn">in</a>
      <a href="#" aria-label="X">𝕏</a>
      <a href="#" aria-label="Email">✉</a>
    </div>
  </div>
</footer>
`;

// ─────────────────────────────────────────────────────────────────────────────
// INJECT + INIT
// ─────────────────────────────────────────────────────────────────────────────
function nriInit() {
  const hp = document.getElementById('header-placeholder');
  const fp = document.getElementById('footer-placeholder');
  if (hp) hp.innerHTML = headerHTML;
  if (fp) fp.innerHTML = footerHTML;

  const header = document.getElementById('nri-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('is-scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  const ham       = document.getElementById('nri-ham');
  const mobileNav = document.getElementById('nri-mobile-nav');

  function closeMobile() {
    ham?.classList.remove('open');
    mobileNav?.classList.remove('open');
    header?.classList.remove('menu-open');
  }

  if (ham && mobileNav) {
    ham.addEventListener('click', () => {
      ham.classList.toggle('open');
      mobileNav.classList.toggle('open');
      header?.classList.toggle('menu-open');
    });

    document.addEventListener('click', e => {
      if (mobileNav.classList.contains('open') &&
          !mobileNav.contains(e.target) &&
          !ham.contains(e.target)) closeMobile();
    });

    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobile));
  }

  document.querySelectorAll('[data-nri-drop]').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      document.querySelectorAll('[data-nri-drop]').forEach(other => {
        if (other !== btn) {
          other.classList.remove('open');
          other.nextElementSibling?.classList.remove('open');
        }
      });
      btn.classList.toggle('open');
      content?.classList.toggle('open');
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', nriInit);
} else {
  nriInit();
}