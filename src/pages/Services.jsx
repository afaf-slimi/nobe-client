import "./Services.css";
import ServiceCard from "../components/ui/ServiceCard";

import doctor from "../assets/services/doctor.jpg";
import haircut from "../assets/services/haircut.jpg";
import gym from "../assets/services/gym.jpg";
import mechanic from "../assets/services/mechanic.jpg";
import hotel from "../assets/services/hotel.jpg";
import transport from "../assets/services/transport.jpg";
import training from "../assets/services/training.jpg";
import vet from "../assets/services/vet.jpg";
import event from "../assets/services/event.jpg";
import express from "../assets/services/express.jpg";
import home from "../assets/services/home.jpg";

export default function Services() {
  return (
    <section className="services-page">
      <h1 className="services-title">Our Premium Services</h1>

      <div className="services-grid">
        <ServiceCard title="Doctor" image={doctor} />
        <ServiceCard title="Haircut" image={haircut} />
        <ServiceCard title="Gym Coach" image={gym} />
        <ServiceCard title="Mechanic" image={mechanic} />
        <ServiceCard title="Hotel Booking" image={hotel} />
        <ServiceCard title="Transport" image={transport} />
        <ServiceCard title="Training" image={training} />
        <ServiceCard title="Veterinary" image={vet} />
        <ServiceCard title="Events" image={event} />
        <ServiceCard title="Express Delivery" image={express} />
        <ServiceCard title="Home Services" image={home} />
      </div>
    </section>
  );
}


