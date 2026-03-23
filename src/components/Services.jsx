import data from '../data/data.json';
import ServiceCard from './ServiceCard';
import '../styles/Services.css';

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">Why Choose Us?</h2>
        <p className="section-subtitle">Everything we do is built around one promise — real food, real fast.</p>
        <div className="services-grid">
          {data.services.map(s => <ServiceCard key={s.id} {...s} />)}
        </div>
      </div>
    </section>
  );
}