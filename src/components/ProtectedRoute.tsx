import { useAuth } from "../context/Auth";
import { Navigate } from "react-router-dom";
interface PrivateRoute {
    children: React.ReactNode;
}

const ProtectedRoute = ({ children }: PrivateRoute) => {
    console.log(children)
    const auth = useAuth();
    return auth.user ? children : <Navigate to={'/NotFound'} />;
}
export { ProtectedRoute };