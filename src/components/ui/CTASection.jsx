import { Link } from "react-router-dom";
import "./CTASection.css";

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">
          A Platform That Grows With You
        </h2>

        <p className="cta-description">
          NOBE is built to be flexible, inclusive, and future-ready.
          Whether you are an individual, a business, or a service provider,
          everything adapts to your needs — not the opposite.
        </p>

        <div className="cta-actions">
          <Link to="/register" className="cta-primary">
            Create Free Account
          </Link>

          <Link to="/services" className="cta-secondary">
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}

 
