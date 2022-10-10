import { useAuth } from "../context/Auth";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: any) => {
    const auth = useAuth();
    return auth.user ? children : <Navigate to={'/NotFound'} />;
}
export { ProtectedRoute };