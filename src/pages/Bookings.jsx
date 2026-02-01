import "./Bookings.css";

export default function Bookings() {
  return (
    <div className="bookings">
      <h1>My Bookings</h1>

      <div className="card confirmed">
        <h3>Haircut</h3>
        <p>📍 Algiers</p>
        <p>📅 12 Feb 2026</p>
        <span>Confirmed</span>
      </div>

      <div className="card pending">
        <h3>Massage</h3>
        <p>📍 Oran</p>
        <p>📅 20 Feb 2026</p>
        <span>Pending</span>
      </div>
    </div>
  );
}
