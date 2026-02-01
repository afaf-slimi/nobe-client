import { useEffect, useState } from "react";
import { getBookings } from "../services/bookingService";
import "./Bookings.css";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBookings()
      .then(data => setBookings(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="bookings">
      <h2>My Bookings</h2>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul>
          {bookings.map(b => (
            <li key={b.id}>
              {b.date} — {b.service}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

