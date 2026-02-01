import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Bookings from "../pages/Bookings";

export default function AppRouter() {
  return (
    <BrowserRouter>
      {/* Header ثابت */}
      <header style={{ padding: "15px", background: "#111", color: "#fff" }}>
        <h2>My App</h2>
      </header>

      {/* المحتوى لي يتبدل */}
      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookings" element={<Bookings />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}




