import { Outlet } from "react-router-dom";
import "./AuthLayout.css";

export default function AuthLayout() {
  return (
    <div className="auth-bg">
      <div className="auth-card">
        <Outlet />
      </div>
    </div>
  );
}

