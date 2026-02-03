import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "./MainLayout.css";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="main-container">
        <Outlet />
      </main>
    </>
  );
}
