import data from '../data/data.json';
import MenuItem from './MenuItem';
import '../styles/Menu.css';

export default function Menu() {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <h2 className="section-title">Today's Menu</h2>
        <p className="section-subtitle">Freshly prepared every morning — order by noon for same-day delivery.</p>
        <div className="menu-grid">
          {data.menu.map(item => <MenuItem key={item.id} {...item} />)}
        </div>
        <div style={{textAlign:'center',marginTop:'40px'}}>
          <a href="#contact" className="btn btn-primary">View Full Menu & Order</a>
        </div>
      </div>
    </section>
  );
}