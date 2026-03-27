import { FiShoppingCart, FiArrowRight } from 'react-icons/fi';
import { MdOutlineRestaurant } from 'react-icons/md';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/*
        CRITICAL LCP FIX:
        Browser cannot preload CSS background-image — it only discovers it
        after parsing CSS, which is too late. LCP was hitting the navbar logo
        instead of the food image.

        Solution: real <img> tag with fetchpriority="high" + loading="eager"
        so browser fetches it immediately in the HTML parse phase.
        The image is absolutely positioned to fill the section — UI is identical.
      */}
      <img
        className="hero-bg-img"
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=60&fm=webp"
        alt=""
        aria-hidden="true"
        fetchpriority="high"
        loading="eager"
        decoding="sync"
        width="900"
        height="600"
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
            <a
              href="#about"
              className="btn btn-outline hero-outline-btn"
            >
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