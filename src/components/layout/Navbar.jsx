import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <h1>NOBE</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/bookings">Bookings</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}


