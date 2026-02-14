import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        NOBE
      </Link>

      <div className="nav-links">
        <Link to="/services">الخدمات</Link>
        <Link to="/login">تسجيل الدخول</Link>
        <Link to="/register">إنشاء حساب</Link>
      </div>
    </nav>
  );
}





