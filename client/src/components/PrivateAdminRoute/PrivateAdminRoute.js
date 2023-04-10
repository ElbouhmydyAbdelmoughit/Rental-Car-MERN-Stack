import { Navigate, Outlet } from "react-router-dom";
import Authorisation from "../Authorisation/Authorisation";

const PrivateAdminRoute = () => {
  return Authorisation().role === "admin" ? <Outlet /> : <Navigate to="*" />;
};

export default PrivateAdminRoute;
