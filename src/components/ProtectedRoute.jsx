import { Navigate } from "react-router-dom";
import { auth } from "../services/firebase";

export default function ProtectedRoute({ children }) {
  if (!auth.currentUser) return <Navigate to="/login" replace />;
  return children;
}
