import { Link } from "react-router-dom";
import "./PricingSection.css";

export default function PricingSection() {
  return (
    <section className="pricing-section">
      {/* Header */}
      <div className="pricing-header">
        <h2>Flexible Plans for Every Journey</h2>
        <p>
          Our membership levels are designed to grow with you.  
          Start simple, unlock more power as you go, and enjoy benefits that
          respect accessibility, clarity, and real-world needs.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="pricing-grid">
        {/* Level 1 */}
        <div className="pricing-card">
          <h3>Level 1 · Starter</h3>
          <div className="price">Free</div>

          <ul className="pricing-features">
            <li>✔ Access to core services</li>
            <li>✔ Basic booking & management</li>
            <li>✔ Accessibility-friendly interface</li>
            <li>✔ Email support</li>
          </ul>

          <Link to="/register">
            <button>Get Started</button>
          </Link>
        </div>

        {/* Level 2 */}
        <div className="pricing-card featured">
          <h3>Level 2 · Advanced</h3>
          <div className="price">$9 / month</div>

          <ul className="pricing-features">
            <li>✔ Everything in Starter</li>
            <li>✔ Priority visibility & search boost</li>
            <li>✔ Advanced accessibility options</li>
            <li>✔ Faster support response</li>
            <li>✔ Custom preferences saving</li>
          </ul>

          <Link to="/register">
            <button>Upgrade</button>
          </Link>
        </div>

        {/* Level 3 */}
        <div className="pricing-card">
          <h3>Level 3 · Professional</h3>
          <div className="price">$19 / month</div>

          <ul className="pricing-features">
            <li>✔ Everything in Advanced</li>
            <li>✔ Dedicated support channel</li>
            <li>✔ Advanced analytics & insights</li>
            <li>✔ Early access to new features</li>
            <li>✔ Enhanced accessibility controls</li>
          </ul>

          <Link to="/register">
            <button>Go Pro</button>
          </Link>
        </div>

        {/* Level 4 */}
        <div className="pricing-card">
          <h3>Level 4 · Enterprise</h3>
          <div className="price">Custom</div>

          <ul className="pricing-features">
            <li>✔ Tailored solutions</li>
            <li>✔ Dedicated account manager</li>
            <li>✔ SLA & priority infrastructure</li>
            <li>✔ Full accessibility compliance support</li>
            <li>✔ Custom integrations & branding</li>
          </ul>

          <Link to="/contact">
            <button>Contact Sales</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
