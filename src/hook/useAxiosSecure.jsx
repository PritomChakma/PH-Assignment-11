import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContex } from "../Provider/AuthProvider";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { signOutUser } = useContext(AuthContex);

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      async (error) => {
        console.log(
          "error caught from our very own axios interceptor -->",
          error.response
        );
        if (error.response?.status === 401 || error.response?.status === 403) {
          // Logout the user
          signOutUser();
          // Redirect to the sign-in page
          navigate("/signin");
        }
        return Promise.reject(error); // Ensure the error is still propagated
      }
    );
  }, [signOutUser, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
