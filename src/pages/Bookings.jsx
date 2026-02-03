export default function Bookings() {
  return (
    <div className="page">
      <div className="glass-card" style={{ maxWidth: 480, margin: "auto" }}>
        <h2>Book a Service</h2>

        <input className="neon-input" placeholder="Your Name" />
        <input className="neon-input" placeholder="Phone Number" />
        <input className="neon-input" placeholder="Service Type" />
        <input className="neon-input" type="date" />

        <button className="neon-btn">Confirm Booking</button>
      </div>
    </div>
  );
}

