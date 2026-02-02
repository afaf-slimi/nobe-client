import "./Services.css";

import doctor from "../assets/services/doctor.jpg";
import event from "../assets/services/event.jpg";
import haircut from "../assets/services/haircut.jpg";
import transport from "../assets/services/transport.jpg";
import gym from "../assets/services/gym.jpg";
import hotel from "../assets/services/hotel.jpg";

const services = [
  { title: "Doctor", img: doctor },
  { title: "Events", img: event },
  { title: "Haircut", img: haircut },
  { title: "Transport", img: transport },
  { title: "Gym", img: gym },
  { title: "Hotel", img: hotel },
];

export default function Services() {
  return (
    <section className="services">
      <h2>Popular Services</h2>
      <p className="subtitle">
        Choose a service and book instantly
      </p>

      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <img src={s.img} alt={s.title} />
            <div className="service-content">
              <h3>{s.title}</h3>
              <button>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
