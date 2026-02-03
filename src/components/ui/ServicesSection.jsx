import "./ServicesSection.css";
import ServiceCard from "./ServiceCard";

import doctor from "../../assets/services/doctor.jpg";
import event from "../../assets/services/event.jpg";
import express from "../../assets/services/express.jpg";
import gym from "../../assets/services/gym.jpg";
import haircut from "../../assets/services/haircut.jpg";
import home from "../../assets/services/home.jpg";
import hotel from "../../assets/services/hotel.jpg";
import mechanic from "../../assets/services/mechanic.jpg";
import training from "../../assets/services/training.jpg";
import transport from "../../assets/services/transport.jpg";
import vet from "../../assets/services/vet.jpg";

const services = [
  { title: "Doctor", image: doctor },
  { title: "Gym", image: gym },
  { title: "Haircut", image: haircut },
  { title: "Mechanic", image: mechanic },
  { title: "Hotel", image: hotel },
  { title: "Home Services", image: home },
  { title: "Events", image: event },
  { title: "Veterinary", image: vet },
  { title: "Training", image: training },
  { title: "Transport", image: transport },
  { title: "Express", image: express },
];

export default function ServicesSection() {
  return (
    <section className="services-section">
      <h2>Popular Services</h2>

      <div className="services-grid">
        {services.map((service, i) => (
          <ServiceCard key={i} {...service} />
        ))}
      </div>
    </section>
  );
}
