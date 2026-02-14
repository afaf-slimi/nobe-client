import ServiceCard from "./ServiceCard";
import "./ServicesSection.css";

import doctor from "../../assets/services/doctor.jpg";
import gym from "../../assets/services/gym.jpg";
import hotel from "../../assets/services/hotel.jpg";
import mechanic from "../../assets/services/mechanic.jpg";
import vet from "../../assets/services/vet.jpg";

export default function ServicesSection() {
  return (
    <section className="services-section">
      <h2>خدماتنا</h2>

      <div className="services-grid">
        <ServiceCard image={doctor} title="طبيب" />
        <ServiceCard image={gym} title="قاعة رياضية" />
        <ServiceCard image={hotel} title="فندق" />
        <ServiceCard image={mechanic} title="ميكانيكي" />
        <ServiceCard image={vet} title="بيطري" />
      </div>
    </section>
  );
}
