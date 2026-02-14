import { Link } from "react-router-dom";
import "./PerksSection.css";

export default function PerksSection() {
  return (
    <section className="perks-section">
      <div className="perks-intro">
        <h2>Levels & Perks</h2>
        <p>
          Designed to scale with you. Each level unlocks smarter tools,
          deeper control, and a more inclusive experience for everyone.
        </p>
      </div>

      <div className="perks-grid">
        {/* LEVEL 1 */}
        <div className="perk-card">
          <div className="perk-icon">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <h3>Starter</h3>
          <p>
            Perfect for individuals discovering the platform.
            Clean access, essential features, and intuitive navigation.
          </p>
          <ul>
            <li>Basic service access</li>
            <li>Standard accessibility options</li>
            <li>Email support</li>
          </ul>
          <Link to="/levels/starter" className="perk-btn">
            Explore Starter
          </Link>
        </div>

        {/* LEVEL 2 */}
        <div className="perk-card featured">
          <div className="perk-icon">
            <svg viewBox="0 0 24 24">
              <rect x="4" y="4" width="16" height="16" rx="4" />
            </svg>
          </div>
          <h3>Advanced</h3>
          <p>
            Built for growing users who need more flexibility
            and smarter interactions.
          </p>
          <ul>
            <li>Priority services</li>
            <li>Enhanced accessibility tools</li>
            <li>Smart notifications</li>
          </ul>
          <Link to="/levels/advanced" className="perk-btn">
            Unlock Advanced
          </Link>
        </div>

        {/* LEVEL 3 */}
        <div className="perk-card">
          <div className="perk-icon">
            <svg viewBox="0 0 24 24">
              <path d="M12 2 L22 20 H2 Z" />
            </svg>
          </div>
          <h3>Professional</h3>
          <p>
            Advanced control for professionals managing
            complex workflows and teams.
          </p>
          <ul>
            <li>Custom dashboards</li>
            <li>Advanced accessibility presets</li>
            <li>Analytics & insights</li>
          </ul>
          <Link to="/levels/pro" className="perk-btn">
            Go Professional
          </Link>
        </div>

        {/* LEVEL 4 */}
        <div className="perk-card">
          <div className="perk-icon">
            <svg viewBox="0 0 24 24">
              <path d="M12 2 L15 8 L22 9 L17 14 L18 22 L12 18 L6 22 L7 14 L2 9 L9 8 Z" />
            </svg>
          </div>
          <h3>Enterprise</h3>
          <p>
            A fully inclusive, enterprise grade experience
            with maximum performance and control.
          </p>
          <ul>
            <li>Full accessibility compliance</li>
            <li>Dedicated support</li>
            <li>Unlimited integrations</li>
          </ul>
          <Link to="/levels/enterprise" className="perk-btn">
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
}


