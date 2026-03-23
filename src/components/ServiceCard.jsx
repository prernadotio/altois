export default function ServiceCard({ icon, title, desc }) {
  return (
    <div className="service-card">
      <span className="service-icon">{icon}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}