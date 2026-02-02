import "./Hero.css";
import heroImg from "../assets/services/hero.jpg";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-overlay">
        <h1>Book Trusted Services Easily</h1>
        <p>Doctors, gyms, hotels & more — all in one place</p>
        <a href="/services" className="hero-btn">
          Explore Services
        </a>
      </div>
    </section>
  );
}
