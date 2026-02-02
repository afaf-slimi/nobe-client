import "./Services.css";
import { services } from "../data/services";

export default function Services() {
  return (
    <section className="services-section">
      <h2>All Services In One Place</h2>
      <p>Book trusted professionals easily</p>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <img src={service.image} alt={service.title} />
            <div className="service-overlay">
              <h3>{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
