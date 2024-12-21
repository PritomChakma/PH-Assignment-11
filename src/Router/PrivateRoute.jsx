import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContex } from "../Provider/AuthProvider";
// import LoadingSpinner from "../components/LoadingSpinner";
// import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContex);

  if (loading) {
    return (
      <div className="flex justify-center items-center text-center min-h-screen">
        <span className="loading loading-bars loading-lg "></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/signin"></Navigate>;
};
export default PrivateRoute;
