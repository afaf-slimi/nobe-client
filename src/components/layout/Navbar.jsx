import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>NOBE</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/bookings">Bookings</Link>
      </div>
    </nav>
  );
}


