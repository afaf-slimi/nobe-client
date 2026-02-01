import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "./MainLayout.css";

export default function MainLayout() {
  return (
    <div className="layout">
      <Navbar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

