import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Bookings from "./pages/Bookings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Bookings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
