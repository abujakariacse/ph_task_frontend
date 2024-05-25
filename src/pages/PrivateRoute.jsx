import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  // Add your logic to check if the user is authenticated
  // For example, you might check for a token in localStorage or a context value
  return !!localStorage.getItem("authToken");
};

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
