import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import '../styles/Footer.css';

const socialLinks = [
  { icon: <FaFacebookF />,  href: '#' },
  { icon: <FaInstagram />,  href: '#' },
  { icon: <FaTwitter />,    href: '#' },
  { icon: <FaYoutube />,    href: '#' },
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
              {socialLinks.map(({ icon, href }, i) => (
                <a key={i} href={href} className="social-link">{icon}</a>
              ))}
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {['Home','About','Services','Menu','Testimonials','Contact'].map(l => (
                <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>We Serve</h4>
            <ul>
              {['Daily Tiffin','Corporate Meals','Bulk Orders','Weekend Special','Catering'].map(s => (
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