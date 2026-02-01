import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Bookings from "./pages/Bookings";

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bookings" element={<Bookings />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

