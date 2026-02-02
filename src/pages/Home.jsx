import "./home.css";

// imports الصور
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

const services = [
  { title: "Doctor", img: doctor },
  { title: "Events", img: event },
  { title: "Express", img: express },
  { title: "Gym", img: gym },
  { title: "Haircut", img: haircut },
  { title: "Home Services", img: home },
  { title: "Hotel", img: hotel },
  { title: "Mechanic", img: mechanic },
  { title: "Training", img: training },
  { title: "Transport", img: transport },
  { title: "Veterinary", img: vet },
];

export default function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <div
        className="hero"
        style={{ backgroundImage: `url(${home})` }}
      >
        <div className="hero-overlay">
          <h1>All Services In One Place</h1>
          <p>Book trusted professionals easily</p>
          <button>Book Now</button>
        </div>
      </div>

      {/* SERVICES */}
      <section className="services">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
          </div>
        ))}
      </section>
    </div>
  );
}

