export default function TestimonialCard({ name, location, rating, text }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-stars">{'⭐'.repeat(rating)}</div>
      <p className="testimonial-text">"{text}"</p>
      <div className="testimonial-author">
        <div className="testimonial-avatar">{name[0]}</div>
        <div>
          <p className="testimonial-name">{name}</p>
          <p className="testimonial-location">{location}</p>
        </div>
      </div>
    </div>
  );
}