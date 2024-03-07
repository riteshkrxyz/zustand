import { Children } from "react";
import { useAuthStore } from "../store/authStore.ts";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? children : <Navigate to={"/login"} />;
};

export default PrivateRoutes;
