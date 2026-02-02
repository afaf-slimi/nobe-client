import "./ServiceCard.css";

export default function ServiceCard({ title, image }) {
  return (
    <div className="service-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}
