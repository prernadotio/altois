import data from '../data/data.json';
import TestimonialCard from './TestimonialCard';
import '../styles/Testimonials.css';

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-subtitle">Real reviews from real foodies across Mumbai.</p>
        <div className="testimonials-grid">
          {data.testimonials.map(t => <TestimonialCard key={t.id} {...t} />)}
        </div>
      </div>
    </section>
  );
}