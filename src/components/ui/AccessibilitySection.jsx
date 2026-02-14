import "./AccessibilitySection.css";

export default function AccessibilitySection() {
  return (
    <section className="accessibility-section">
      <div className="accessibility-header">
        <h2>Accessibility by Design</h2>
        <p>
          Our platform is built from the ground up to be usable, readable,
          and inclusive for everyone without exceptions.
        </p>
      </div>

      <div className="accessibility-grid">
        {/* Card 1 */}
        <div className="access-card">
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="4" r="2" />
            <path d="M4 22l4-10m12 10l-4-10M6 12h12" />
          </svg>
          <h4>Keyboard Navigation</h4>
          <p>
            Full navigation using keyboard only. No mouse required, ever.
          </p>
        </div>

        {/* Card 2 */}
        <div className="access-card">
          <svg viewBox="0 0 24 24">
            <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <h4>Visual Clarity</h4>
          <p>
            High contrast, readable typography, and scalable UI elements.
          </p>
        </div>

        {/* Card 3 */}
        <div className="access-card">
          <svg viewBox="0 0 24 24">
            <path d="M12 3v18M5 12h14" />
          </svg>
          <h4>Screen Readers</h4>
          <p>
            Semantic structure optimized for screen readers and assistive tools.
          </p>
        </div>

        {/* Card 4 */}
        <div className="access-card">
          <svg viewBox="0 0 24 24">
            <path d="M3 12a9 9 0 1 0 18 0" />
            <path d="M12 3v9l3 3" />
          </svg>
          <h4>Reduced Motion</h4>
          <p>
            Motion-aware UI respecting reduced-motion user preferences.
          </p>
        </div>

        {/* Card 5 */}
        <div className="access-card">
          <svg viewBox="0 0 24 24">
            <rect x="4" y="4" width="16" height="16" rx="3" />
          </svg>
          <h4>Touch Friendly</h4>
          <p>
            Large tap areas and spacing optimized for touch devices.
          </p>
        </div>

        {/* Card 6 */}
        <div className="access-card">
          <svg viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h10M4 18h14" />
          </svg>
          <h4>Clear Content</h4>
          <p>
            Simple language, structured layouts, and predictable behavior.
          </p>
        </div>
      </div>
    </section>
  );
}
