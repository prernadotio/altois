import { FiShoppingCart, FiArrowRight } from 'react-icons/fi';
import { MdOutlineRestaurant } from 'react-icons/md';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
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
            <a href="#about" className="btn btn-outline"
              style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.45)', display:'flex', alignItems:'center', gap:'6px' }}>
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