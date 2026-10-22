/* ===== FIREPLACE & HEARTH STORE — SHARED COMPONENTS ===== */
'use strict';

/* ─── Monochrome SVG Icons (Lucide-style) ────────────────────────────── */
const ICONS = {
    sun: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
    moon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    menu: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
    x: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    chevronDown: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
    arrowUp: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>',
    arrowRight: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    star: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    check: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    eye: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
    eyeOff: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>',
    flame: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
    facebook: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
    instagram: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
    youtube: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>',
    pinterest: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="9" x2="12" y2="21"/><path d="M8 12a4 4 0 1 1 8 0c0 2.5-1.5 5-4 5a2.5 2.5 0 0 1-2.5-2.5"/><path d="M10.5 16.5L8 21"/></svg>',
    mapPin: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    phone: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    mail: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    clock: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    shield: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    wrench: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    home: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    award: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
    users: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    calendar: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    thermometer: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>',
};

/* Fireplace Hearth Logo SVG */
const LOGO_SVG = `<svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="65" width="70" height="15" rx="3" fill="currentColor" opacity="0.3"/>
    <rect x="20" y="45" width="60" height="22" rx="4" fill="currentColor" opacity="0.2"/>
    <path d="M50 20C46 30 35 40 35 55a15 15 0 0030 0c0-15-11-25-15-35z" fill="var(--clr-primary)" opacity="0.9"/>
    <path d="M50 32c-2.5 6-8 12-8 20a8 8 0 0016 0c0-8-5.5-14-8-20z" fill="var(--clr-secondary)" opacity="0.85"/>
    <path d="M50 42c-1.5 3.5-4.5 7-4.5 11a4.5 4.5 0 009 0c0-4-3-7.5-4.5-11z" fill="#F5D76B"/>
</svg>`;

/* Font Awesome Social Login Icons */
const GOOGLE_SVG = `<i class="fa-brands fa-google" style="font-size:18px;"></i>`;
const APPLE_SVG = `<i class="fa-brands fa-apple" style="font-size:19px;"></i>`;

/* ─── THEME & DIRECTION ─────────────────────────────────── */
(function initThemeDir() {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('hearth_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) html.classList.add('dark');
    if (localStorage.getItem('hearth_dir') === 'rtl') html.setAttribute('dir', 'rtl');
})();

function toggleTheme(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    const html = document.documentElement;
    html.classList.toggle('dark');
    localStorage.setItem('hearth_theme', html.classList.contains('dark') ? 'dark' : 'light');
    document.querySelectorAll('.theme-icon-wrap').forEach(updateThemeIcon);
}

function updateThemeIcon(el) {
    if (!el) return;
    const isDark = document.documentElement.classList.contains('dark');
    el.innerHTML = isDark ? ICONS.sun : ICONS.moon;
}

function toggleDir(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    const html = document.documentElement;
    const isRTL = html.getAttribute('dir') === 'rtl';
    html.setAttribute('dir', isRTL ? 'ltr' : 'rtl');
    localStorage.setItem('hearth_dir', isRTL ? 'ltr' : 'rtl');
    document.querySelectorAll('.dir-label').forEach(el => {
        el.textContent = isRTL ? 'LTR' : 'RTL';
    });
}

/* ─── PASSWORD TOGGLE ────────────────────────────────── */
function togglePasswordVisibility(inputId, btn) {
    const input = document.getElementById(inputId);
    if (!input) return;
    const icon = btn.querySelector('.pw-icon');
    if (input.type === 'password') {
        input.type = 'text';
        if (icon) icon.innerHTML = ICONS.eyeOff;
    } else {
        input.type = 'password';
        if (icon) icon.innerHTML = ICONS.eye;
    }
}

/* ─── NAVBAR INJECTION ───────────────────────────────── */
function injectNav() {
    const el = document.getElementById('main-nav');
    if (!el) return;
    const page = location.pathname.split('/').pop() || 'index.html';
    const links = [
        { href: 'index.html', label: 'Home' },
        { href: 'home2.html', label: 'Home 2' },
        { href: 'products.html', label: 'Products' },
        { href: 'services.html', label: 'Services' },
        { href: 'gallery.html', label: 'Gallery' },
        { href: 'pricing.html', label: 'Pricing' },
        { href: 'contact.html', label: 'Contact' },
    ];

    const isDark = document.documentElement.classList.contains('dark');
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';

    const navLinksHTML = links.map(l => {
        const isActive = page === l.href || (page === '' && l.href === 'index.html');
        return `<a href="${l.href}" class="nav-link ${isActive ? 'active' : ''}">${l.label}</a>`;
    }).join('');

    const mobileLinksHTML = links.map(l => {
        const isActive = page === l.href || (page === '' && l.href === 'index.html');
        return `<a href="${l.href}" class="mob-link ${isActive ? 'active' : ''}">${l.label}</a>`;
    }).join('');

    el.innerHTML = `
    <nav class="navbar" id="navbar">
        <div class="nav-inner">
            <a href="index.html" class="nav-logo" aria-label="Fireplace & Hearth Home">
                <div class="nav-logo-icon">${LOGO_SVG}</div>
                <div class="nav-logo-text">
                    <span class="brand-top">FIREPLACE</span>
                    <span class="brand-bottom">& Hearth</span>
                </div>
            </a>

            <div class="nav-links">
                ${navLinksHTML}
            </div>

            <div class="nav-actions">
                <button onclick="toggleDir(event)" class="nav-icon-btn" title="Toggle Text Direction" aria-label="Toggle text direction">
                    <span class="dir-label" style="font-size:0.65rem;font-weight:700;">${isRTL ? 'RTL' : 'LTR'}</span>
                </button>
                <button onclick="toggleTheme(event)" class="nav-icon-btn" title="Toggle Theme" aria-label="Toggle dark mode">
                    <span class="theme-icon-wrap">${isDark ? ICONS.sun : ICONS.moon}</span>
                </button>
                <a href="contact.html" class="btn btn-secondary btn-sm">Get a Quote</a>
                <a href="login.html" class="btn btn-primary btn-sm">Sign In</a>
                <button class="mobile-menu-btn" onclick="toggleMobileMenu(event)" aria-label="Open menu">
                    <span class="mobile-menu-icon">${ICONS.menu}</span>
                </button>
            </div>
        </div>

        <div class="mobile-backdrop" id="mobile-backdrop" onclick="toggleMobileMenu(event)"></div>

        <div class="mobile-menu" id="mobile-menu">
            ${mobileLinksHTML}
            <div class="mob-actions">
                <a href="contact.html" class="btn btn-secondary w-full">Get a Quote</a>
                <a href="login.html" class="btn btn-primary w-full">Sign In</a>
            </div>
            <div class="mob-toggles">
                <button onclick="toggleDir(event)" class="nav-icon-btn" title="Toggle Direction">
                    <span class="dir-label" style="font-size:0.65rem;font-weight:700;">${isRTL ? 'RTL' : 'LTR'}</span>
                </button>
                <button onclick="toggleTheme(event)" class="nav-icon-btn" title="Toggle Theme">
                    <span class="theme-icon-wrap">${isDark ? ICONS.sun : ICONS.moon}</span>
                </button>
            </div>
        </div>
    </nav>
    <div class="navbar-spacer"></div>`;

    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 20);
    });
}

function toggleMobileMenu(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    const menu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('mobile-backdrop');
    const iconEl = document.querySelector('.mobile-menu-icon');
    if (!menu) return;

    const isOpen = menu.classList.contains('open');
    if (isOpen) {
        menu.classList.remove('open');
        if (backdrop) backdrop.classList.remove('open');
        if (iconEl) iconEl.innerHTML = ICONS.menu;
    } else {
        menu.classList.add('open');
        if (backdrop) backdrop.classList.add('open');
        if (iconEl) iconEl.innerHTML = ICONS.x;
    }
}

document.addEventListener('click', function(e) {
    const menu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('mobile-backdrop');
    const btn = document.querySelector('.mobile-menu-btn');
    if (!menu || !menu.classList.contains('open')) return;
    if (btn && (btn === e.target || btn.contains(e.target))) return;
    if (e.composedPath && e.composedPath().includes(menu)) return;
    if (menu.contains(e.target)) return;
    menu.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    const iconEl = document.querySelector('.mobile-menu-icon');
    if (iconEl) iconEl.innerHTML = ICONS.menu;
});

/* ─── FOOTER INJECTION ───────────────────────────────── */
function injectFooter() {
    const el = document.getElementById('main-footer');
    if (!el) return;

    el.innerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <a href="index.html" class="nav-logo footer-logo" aria-label="Fireplace & Hearth Home" style="margin-bottom:1rem;">
                        <div class="nav-logo-icon">${LOGO_SVG}</div>
                        <div class="nav-logo-text">
                            <span class="brand-top" style="color:var(--clr-light);">FIREPLACE</span>
                            <span class="brand-bottom">& Hearth</span>
                        </div>
                    </a>
                    <p class="footer-brand-text">Premium fireplace installations, exquisite mantels, and expert hearth services. Bringing warmth and elegance to homes since 2005.</p>
                    <div class="footer-social">
                        <a href="#" class="footer-social-link" aria-label="Facebook">${ICONS.facebook}</a>
                        <a href="#" class="footer-social-link" aria-label="Instagram">${ICONS.instagram}</a>
                        <a href="#" class="footer-social-link" aria-label="YouTube">${ICONS.youtube}</a>
                        <a href="#" class="footer-social-link" aria-label="Pinterest">${ICONS.pinterest}</a>
                    </div>
                </div>

                <div class="footer-col">
                    <h4 class="footer-col-title">QUICK LINKS</h4>
                    <div class="footer-links">
                        <a href="index.html">Home</a>
                        <a href="home2.html">Home 2 — Premium</a>
                        <a href="products.html">Our Products</a>
                        <a href="services.html">Installation Services</a>
                        <a href="gallery.html">Project Gallery</a>
                        <a href="pricing.html">Pricing Plans</a>
                        <a href="contact.html">Contact & Consultation</a>
                    </div>
                </div>

                <div class="footer-col">
                    <h4 class="footer-col-title">RESOURCES</h4>
                    <div class="footer-links">
                        <a href="login.html">Client Sign In</a>
                        <a href="signup.html">Create Account</a>
                        <a href="coming-soon.html">Coming Soon</a>
                        <a href="404.html">404 Error Page</a>
                        <a href="coming-soon.html">FAQ</a>
                        <a href="coming-soon.html">Blog</a>
                    </div>
                </div>

                <div class="footer-col footer-col-newsletter">
                    <div class="footer-newsletter-card">
                        <h4 class="footer-newsletter-title">Stay Warm</h4>
                        <p class="footer-newsletter-desc">Get expert tips on fireplace care, seasonal promotions, and new product launches delivered to your inbox.</p>
                        <form onsubmit="event.preventDefault(); alert('Thank you for subscribing to Fireplace & Hearth!'); this.reset();" class="footer-newsletter-form">
                            <input type="email" placeholder="your@email.com" class="footer-newsletter-input" required>
                            <button type="submit" class="footer-newsletter-btn">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <p class="footer-copyright">&copy; ${new Date().getFullYear()} FIREPLACE & HEARTH. All rights reserved.</p>
                <div class="footer-bottom-links">
                    <a href="coming-soon.html">Privacy</a>
                    <a href="coming-soon.html">Terms</a>
                    <a href="coming-soon.html">Cookies</a>
                </div>
            </div>
        </div>
    </footer>`;
}

/* ─── SCROLL TO TOP ────────────────────────────────── */
function injectScrollTop() {
    if (document.body && document.body.classList.contains('auth-page')) return;
    const btn = document.createElement('button');
    btn.className = 'scroll-top-btn';
    btn.setAttribute('aria-label', 'Scroll to top');
    btn.innerHTML = ICONS.arrowUp;
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    });
}

/* ─── SCROLL REVEAL ────────────────────────────────── */
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
}

/* ─── ACCORDION ────────────────────────────────────── */
function initAccordion() {
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const body = item.querySelector('.accordion-body');
            const isOpen = item.classList.contains('open');

            item.closest('.accordion').querySelectorAll('.accordion-item').forEach(i => {
                i.classList.remove('open');
                const b = i.querySelector('.accordion-body');
                if (b) b.style.maxHeight = '0';
            });

            if (!isOpen) {
                item.classList.add('open');
                body.style.maxHeight = body.scrollHeight + 'px';
            }
        });
    });
}

/* ─── PRODUCT TABS ────────────────────────────────────── */
function initProductTabs() {
    const tabs = document.querySelectorAll('.product-tab');
    const items = document.querySelectorAll('.product-grid .product-card');

    function selectCategory(target) {
        tabs.forEach(t => t.classList.toggle('active', t.dataset.category === target));

        if (items.length) {
            let visibleCount = 0;
            let lastVisibleItem = null;

            items.forEach(item => {
                item.classList.remove('is-last-centered');
                if (target === 'all' || !target || item.dataset.category === target) {
                    item.style.display = 'flex';
                    visibleCount++;
                    lastVisibleItem = item;
                } else {
                    item.style.display = 'none';
                }
            });

            if (visibleCount % 3 === 1 && lastVisibleItem) {
                lastVisibleItem.classList.add('is-last-centered');
            }
        }
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            selectCategory(tab.dataset.category);
        });
    });

    const params = new URLSearchParams(window.location.search);
    const catParam = params.get('category') || window.location.hash.replace('#', '');
    if (catParam) {
        const matchingTab = Array.from(tabs).find(t => t.dataset.category === catParam);
        if (matchingTab) {
            selectCategory(catParam);
        } else {
            selectCategory('all');
        }
    } else {
        selectCategory('all');
    }
}

/* ─── COUNTER ANIMATION ────────────────────────────── */
function initCounters() {
    const counters = document.querySelectorAll('.counter-num');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target, 10);
                const suffix = el.dataset.suffix || '';
                const duration = 2200;
                const start = performance.now();

                function animate(now) {
                    const elapsed = now - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    el.textContent = Math.round(target * eased) + suffix;
                    if (progress < 1) requestAnimationFrame(animate);
                }
                requestAnimationFrame(animate);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.4 });

    counters.forEach(c => observer.observe(c));
}

/* ─── GALLERY LIGHTBOX ─────────────────────────────── */
function openLightbox(src, alt) {
    let overlay = document.getElementById('lightbox-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'lightbox-overlay';
        overlay.className = 'lightbox-overlay';
        overlay.innerHTML = `<div class="lightbox-content"><img id="lightbox-img" src="" alt=""><button class="lightbox-close" onclick="closeLightbox()">${ICONS.x}</button></div>`;
        document.body.appendChild(overlay);
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeLightbox();
        });
    }
    const img = document.getElementById('lightbox-img');
    img.src = src;
    img.alt = alt || '';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const overlay = document.getElementById('lightbox-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

/* ─── HERO SLIDER (HOME 2) ─────────────────────────── */
function initHeroSlider() {
    const card = document.getElementById('heroSliderCard');
    if (!card) return;

    const slides = card.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-slider-dot');

    if (!slides.length) return;

    let currentIndex = 0;
    let autoInterval = null;

    function goToSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        currentIndex = index;
        slides.forEach((s, i) => s.classList.toggle('active', i === currentIndex));
        dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
    }

    function nextSlide() { goToSlide(currentIndex + 1); }

    dots.forEach((dot) => {
        dot.addEventListener('click', () => {
            const idx = parseInt(dot.getAttribute('data-slide'), 10);
            goToSlide(idx);
            resetTimer();
        });
    });

    card.addEventListener('click', (e) => {
        if (e.target.closest('a') || e.target.closest('button')) return;
        nextSlide();
        resetTimer();
    });

    function startTimer() {
        if (autoInterval) clearInterval(autoInterval);
        autoInterval = setInterval(nextSlide, 4500);
    }
    function resetTimer() { startTimer(); }

    card.addEventListener('mouseenter', () => { if (autoInterval) clearInterval(autoInterval); });
    card.addEventListener('mouseleave', () => { startTimer(); });

    startTimer();
}

/* ─── AUTH PAGE INIT ─────────────────────────────────── */
function initAuthPage() {
    document.querySelectorAll('.theme-icon-wrap').forEach(updateThemeIcon);
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
    document.querySelectorAll('.dir-label').forEach(el => {
        el.textContent = isRTL ? 'RTL' : 'LTR';
    });
}

/* ─── GALLERY FILTER ─────────────────────────────────── */
function initGalleryFilter() {
    const tabs = document.querySelectorAll('.gallery-tab');
    const items = document.querySelectorAll('.gallery-grid .gallery-item');

    function filterGallery(target) {
        tabs.forEach(t => t.classList.toggle('active', t.dataset.filter === target));
        items.forEach(item => {
            if (target === 'all' || item.dataset.category === target) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterGallery(tab.dataset.filter);
        });
    });

    filterGallery('all');
}

/* ─── MAIN INIT ────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    injectNav();
    injectFooter();
    injectScrollTop();
    initScrollReveal();
    initAccordion();
    initProductTabs();
    initCounters();
    initHeroSlider();
    initGalleryFilter();
    document.querySelectorAll('.theme-icon-wrap').forEach(updateThemeIcon);
});
