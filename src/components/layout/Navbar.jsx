import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/bookings">Bookings</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
}

export default Navbar;


