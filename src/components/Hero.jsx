import "./Hero.css";
import heroImage from "../assets/services/hero.jpg";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay">
        <h1>All Services In One Place</h1>
        <p>Book trusted professionals easily</p>

        <button onClick={() => navigate("/bookings")}>
          Book Now
        </button>
      </div>
    </section>
  );
}
