// FIXED: react-icons/fa (1,398 KiB) hataya — inline SVGs se replace kiya

import '../styles/Footer.css';

// Inline SVG social icons — bilkul wahi look, zero bundle cost
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);
const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M21.582 7.186a2.506 2.506 0 0 0-1.768-1.768C18.254 5 12 5 12 5s-6.254 0-7.814.418a2.506 2.506 0 0 0-1.768 1.768C2 8.746 2 12 2 12s0 3.254.418 4.814a2.506 2.506 0 0 0 1.768 1.768C5.746 19 12 19 12 19s6.254 0 7.814-.418a2.506 2.506 0 0 0 1.768-1.768C22 15.254 22 12 22 12s0-3.254-.418-4.814zM10 15V9l5.196 3L10 15z"/>
  </svg>
);

const socialLinks = [
  { icon: <FacebookIcon />,  href: '#', label: 'Follow us on Facebook' },
  { icon: <InstagramIcon />, href: '#', label: 'Follow us on Instagram' },
  { icon: <TwitterIcon />,   href: '#', label: 'Follow us on Twitter' },
  { icon: <YoutubeIcon />,   href: '#', label: 'Subscribe on YouTube' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-name">GharKa<span>Khana</span></div>
            <p>Authentic home-cooked food delivered to your doorstep. Made fresh daily with love.</p>
            <div className="footer-social">
              {socialLinks.map(({ icon, href, label }) => (
                <a key={label} href={href} className="social-link" aria-label={label}>
                  {icon}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {['Home', 'About', 'Services', 'Menu', 'Testimonials', 'Contact'].map(l => (
                <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>We Serve</h4>
            <ul>
              {['Daily Tiffin', 'Corporate Meals', 'Bulk Orders', 'Weekend Special', 'Catering'].map(s => (
                <li key={s}><a href="#contact">{s}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} GharKaKhana. Made with ❤️ in Mumbai.
        </div>
      </div>
    </footer>
  );
}