import { services } from "../data/services";
import "./ServicesGrid.css";

export default function ServicesGrid() {
  return (
    <section className="services">
      <h2>Popular Services</h2>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
