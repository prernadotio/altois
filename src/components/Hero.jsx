// FIXED: react-icons/fi (175 KiB) aur react-icons/md (2,536 KiB) hataye
// Inline SVGs se replace kiya — poori library load nahi hogi

import '../styles/Hero.css';

const HERO_IMG = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=480&q=30&fm=webp';

// FiShoppingCart
const CartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>
);

// FiArrowRight
const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

// MdOutlineRestaurant — fork & knife
const RestaurantIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
  </svg>
);

export default function Hero() {
  return (
    <section className="hero" id="home">
      <img
        className="hero-bg-img"
        src={HERO_IMG}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        loading="eager"
        decoding="sync"
        width="480"
        height="320"
      />
      <div className="container">
        <div className="hero-content">
          <span className="hero-badge">
            <RestaurantIcon /> Mumbai's Favourite Home Kitchen
          </span>
          <h1>
            Real <em>Home-Cooked</em><br />Food, Delivered Fresh
          </h1>
          <p>
            From our kitchen to your doorstep — authentic flavours made with love,
            using fresh local ingredients every single day.
          </p>
          <div className="hero-cta">
            <a href="#menu" className="btn btn-primary">
              <CartIcon /> Order Now
            </a>
            <a href="#about" className="btn btn-outline hero-outline-btn">
              Learn More <ArrowIcon />
            </a>
          </div>
          <div className="hero-stats">
            {[
              ['500+', 'Happy Customers'],
              ['15+',  'Menu Items'],
              ['40min','Avg Delivery'],
              ['4.9★', 'Rating'],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="hero-stat-num">{num}</div>
                <div className="hero-stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}