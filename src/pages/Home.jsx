// src/pages/Home.jsx
import "./Home.css";

import hero from "../assets/services/hero.jpg";

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
  { title: "Doctor", image: doctor },
  { title: "Events", image: event },
  { title: "Express Delivery", image: express },
  { title: "Gym", image: gym },
  { title: "Haircut", image: haircut },
  { title: "Home Services", image: home },
  { title: "Hotel", image: hotel },
  { title: "Mechanic", image: mechanic },
  { title: "Training", image: training },
  { title: "Transport", image: transport },
  { title: "Veterinary", image: vet },
];

export default function Home() {
  return (
    <div className="home-page">
      {/* HERO */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="hero-badge">Trusted Services</span>
            <h1>All Services In One Place</h1>
            <p>
              Find, compare and book trusted professionals anytime, anywhere.
            </p>
            <div className="hero-actions">
              <button className="btn-primary">Book Now</button>
              <button className="btn-outline">Explore Services</button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section">
        <div className="section-header">
          <h2>Popular Services</h2>
          <p>Choose what you need and book instantly</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>

              <div className="service-body">
                <h3>{service.title}</h3>
                <button className="btn-secondary">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


