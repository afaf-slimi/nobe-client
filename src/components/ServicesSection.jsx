import services from "../data/services";
import ServiceCard from "./ServiceCard";
import "./Services.css";

export default function ServicesSection() {
  return (
    <section className="services">
      <h2>Popular Services</h2>

      <div className="services-grid">
        {services.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </div>
    </section>
  );
}

