import { Outlet } from "react-router-dom";
import "./MainLayout.css";

export default function MainLayout() {
  return (
    <>
      <header className="navbar">
        <h2>NOBE</h2>
        <nav>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/login">Login</a>
        </nav>
      </header>

      <main className="page-container">
        <Outlet />
      </main>
    </>
  );
}



