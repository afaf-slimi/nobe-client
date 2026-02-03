import ServiceCard from "../components/ui/ServiceCard";
import doctor from "../assets/services/doctor.jpg";
import event from "../assets/services/event.jpg";
import express from "../assets/services/express.jpg";
import gym from "../assets/services/gym.jpg";
import haircut from "../assets/services/haircut.jpg";
import home from "../assets/services/home.jpg";
import hotel from "../assets/services/hotel.jpg";
import mechanic from "../assets/services/mechanic.jpg";
import training from "../assets/services/training.jpg";
import transport from "../assets/services/transport.jpg";
import vet from "../assets/services/vet.jpg";
import "./Services.css";

export default function Services() {
  return (
    <section className="page">
      <h1>Our Premium Services</h1>

      <div className="services-grid">
        <ServiceCard title="Doctor" image={doctor} />
        <ServiceCard title="Events" image={event} />
        <ServiceCard title="Express Delivery" image={express} />
        <ServiceCard title="Gym Coach" image={gym} />
        <ServiceCard title="Haircut" image={haircut} />
        <ServiceCard title="Home Services" image={home} />
        <ServiceCard title="Hotel Booking" image={hotel} />
        <ServiceCard title="Mechanic" image={mechanic} />
        <ServiceCard title="Training" image={training} />
        <ServiceCard title="Transport" image={transport} />
        <ServiceCard title="Veterinary" image={vet} />
      </div>
    </section>
  );
}

