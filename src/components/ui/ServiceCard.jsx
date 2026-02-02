import "./ServiceCard.css";

export default function ServiceCard({ icon, title, location, date, status, color }) {
  return (
    <div className="service-card" style={{ borderLeft: `4px solid ${color}` }}>
      <div className="service-icon">{icon}</div>

      <div className="service-content">
        <h3>{title}</h3>
        <p>📍 {location}</p>
        <p>📅 {date}</p>
      </div>

      <span className={`status ${status}`}>{status}</span>
    </div>
  );
}
