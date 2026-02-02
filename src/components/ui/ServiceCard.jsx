import "./ServiceCard.css";
import { useNavigate } from "react-router-dom";

export default function ServiceCard({ service }) {
  const navigate = useNavigate();

  return (
    <div
      className="service-card"
      style={{ borderColor: service.color }}
      onClick={() => navigate(service.path)}
    >
      <img src={service.image} alt={service.title} />
      <h3>{service.title}</h3>
    </div>
  );
}
