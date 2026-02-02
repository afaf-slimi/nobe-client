import "./Home.css";
import { services } from "../data/services";
import ServiceCard from "../components/ui/ServiceCard";

export default function Home() {
  return (
    <div className="home">
      <h1>All Services</h1>

      <div className="services-grid">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}

