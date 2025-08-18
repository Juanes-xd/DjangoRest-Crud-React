import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

export default function PrivateRoute({ children }) {
    const { access } = useAuth();
    if (!access) return <Navigate to="/login" replace />;
    return children;
}
