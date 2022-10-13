import { useAuth } from "../context/Auth";
import { Navigate } from "react-router-dom";
import { PrivateRoute } from "../types/PrivateRouteType";

const ProtectedRoute = ({ children }: PrivateRoute) => {
    const auth = useAuth();
    return auth.user ? children : <Navigate to={'/NotFound'} />;
}
export { ProtectedRoute };