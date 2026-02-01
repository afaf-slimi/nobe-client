import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Bookings from "../pages/Bookings";
import Login from "../pages/Login";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}







