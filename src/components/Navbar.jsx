// FIXED: react-icons/gi (6,947 KiB) aur react-icons/hi (235 KiB) hataye
// SVG inline use kiya — zero extra bundle size

import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

// GiHotMeal ki jagah simple inline SVG
const HotMealIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8.58-10.22-5.95-12.72-3.45A5.5 5.5 0 0 0 1 15.99v1h15.03v-2z"/>
  </svg>
);

// HiMenu aur HiX ki jagah simple SVG
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Home', 'About', 'Services', 'Menu', 'Testimonials', 'Contact'];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#home" className="navbar-logo">
        <HotMealIcon /> GharKa<span>Khana</span>
      </a>
      <button
        className="navbar-hamburger"
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        aria-controls="navbar-menu"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>
      <ul id="navbar-menu" className={`navbar-links ${open ? 'open' : ''}`}>
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ padding: '8px 22px', fontSize: '0.9rem' }}
          >
            Order Now
          </a>
        </li>
      </ul>
    </nav>
  );
}