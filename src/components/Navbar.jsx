import { useState, useEffect } from 'react';
import { GiHotMeal } from 'react-icons/gi';
import { HiMenu, HiX } from 'react-icons/hi';
import '../styles/Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Home','About','Services','Menu','Testimonials','Contact'];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#home" className="navbar-logo">
        <GiHotMeal /> GharKa<span>Khana</span>
      </a>
      {/* Fix: aria-label + aria-expanded for accessibility */}
      <button
        className="navbar-hamburger"
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        aria-controls="navbar-menu"
      >
        {open ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>
      <ul
        id="navbar-menu"
        className={`navbar-links ${open ? 'open' : ''}`}
      >
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="btn btn-primary"
            style={{padding:'8px 22px',fontSize:'0.9rem'}}
          >
            Order Now
          </a>
        </li>
      </ul>
    </nav>
  );
}