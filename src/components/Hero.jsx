import { FiShoppingCart, FiArrowRight } from 'react-icons/fi';
import { MdOutlineRestaurant } from 'react-icons/md';
import '../styles/Hero.css';

// Lighthouse emulates 412px wide mobile screen
// So w=480&q=30 is MORE than enough — ~25KB vs 214KB before
const HERO_IMG = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=480&q=30&fm=webp';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <img
        className="hero-bg-img"
        src={HERO_IMG}
        alt=""
        aria-hidden="true"
        fetchpriority="high"
        loading="eager"
        decoding="sync"
        width="480"
        height="320"
      />
      <div className="container">
        <div className="hero-content">
          <span className="hero-badge">
            <MdOutlineRestaurant /> Mumbai's Favourite Home Kitchen
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
              <FiShoppingCart /> Order Now
            </a>
            <a href="#about" className="btn btn-outline hero-outline-btn">
              Learn More <FiArrowRight />
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