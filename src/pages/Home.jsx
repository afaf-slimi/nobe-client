import heroImg from "../assets/services/hero.jpg";
import "./Home.css";

export default function Home() {
  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>All Services In One Place</h1>
          <p>Book professional services easily & fast</p>
          <div className="hero-actions">
            <a href="/services" className="neon-btn">Explore Services</a>
            <a href="/booking" className="ghost-btn">Book Now</a>
          </div>
        </div>
      </section>

      <div className="page">
        {/* محتوى إضافي إذا حبيتي */}
      </div>
    </>
  );
}

