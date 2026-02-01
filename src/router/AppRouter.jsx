import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import AuthLayout from "../components/layout/AuthLayout";

import Home from "../pages/Home";
import Bookings from "../pages/Bookings";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Accessibility from "../pages/Accessibility";
import Plans from "../pages/Plans";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bookings", element: <Bookings /> },
      { path: "/profile", element: <Profile /> },
      { path: "/accessibility", element: <Accessibility /> },
      { path: "/plans", element: <Plans /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);

export default router;







