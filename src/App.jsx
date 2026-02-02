import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookingDetails from "./pages/BookingDetails";
import Login from "./pages/Login";
import Bookings from "./pages/Bookings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking/:id" element={<BookingDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </BrowserRouter>
  );
}
