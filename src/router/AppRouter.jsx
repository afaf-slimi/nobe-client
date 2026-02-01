import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Bookings from "../pages/Bookings";
import Login from "../pages/Login";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "bookings", element: <Bookings /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

export default AppRouter;




