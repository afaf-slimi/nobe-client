import { useState } from "react";
import "./Home.css";

const MODES = {
  user: {
    title: "Book services instantly",
    desc: "Find and book trusted services in seconds, with accessibility and zero friction.",
    cta: "Start Booking",
    glow: "glow-user",
  },
  provider: {
    title: "Manage your bookings smarter",
    desc: "Grow your business, manage clients, and automate reservations effortlessly.",
    cta: "Become a Provider",
    glow: "glow-provider",
  },
  company: {
    title: "Scale bookings for your organization",
    desc: "A powerful booking infrastructure built for teams, enterprises, and institutions.",
    cta: "Contact Sales",
    glow: "glow-company",
  },
};

export default function Home() {
  const [mode, setMode] = useState("user");
  const data = MODES[mode];

  return (
    <section className="hero-wrapper">
      <div className={`hero-frame ${data.glow}`}>
        <div className="hero">
          <div className="mode-switch">
            <button onClick={() => setMode("user")}>👤 User</button>
            <button onClick={() => setMode("provider")}>🧑‍🔧 Provider</button>
            <button onClick={() => setMode("company")}>🏢 Company</button>
          </div>

          <h1>
            Smart <span className="booking-word">Booking</span> Platform
          </h1>

          <h3 className="dynamic-title">{data.title}</h3>

          <p>{data.desc}</p>

          <button className="primary-btn">{data.cta}</button>
        </div>
      </div>
    </section>
  );
}

