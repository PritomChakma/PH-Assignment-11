import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
const SignIn = () => {
  const navigate = useNavigate();
  const { loginUser, googleLogin } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    // console.log(user);

    // login user
    loginUser(email, password)
      .then((result) => {
        // console.log(result.user);
        e.target.reset();
        navigate("/");
        toast.success("Login successfully");
      })
      .catch((error) => {
        toast.error("Login failed. Please try again.");
        // console.log("ERROR", error.message);
      });
  };

  const handdleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        // console.log(result.user);
        e.target.reset();
        navigate("/");
        toast.success("Login successfully");
      })
      .catch((error) => {
        toast.success("Google Login successfully");
        // console.log("ERROR", error.message);
      });
  };

  return (
    <div>
      <div
        className="min-h-screen bg-gray-900 flex items-center justify-center"
        style={{
          backgroundImage: `url(${banner})`, // Replace with the actual image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="border-2 backdrop-blur-sm rounded-lg shadow-md p-8 max-w-sm w-full">
          <h3 className="text-white font-bold text-center text-xl mb-5">
            Login Form
          </h3>
          <form onSubmit={handleLogin}>
            <div className="">
              <label className="label ">
                <span className="block text-gray-300 text-sm font-bold mb-2">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                className="bg-gray-900 text-gray-200 placeholder-gray-400 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div className="">
              <label className="label ">
                <span className="block text-gray-300 text-sm font-bold mb-2">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter a Password"
                className="bg-gray-900 text-gray-200 placeholder-gray-400 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div className=" mt-5 ">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full">
                Login
              </button>
            </div>
          </form>
          <p className="text-center font-bold my-3 text-white">
            You Dont have Account? Please
            <Link className="text-green-500" to="/registration">
              Register
            </Link>
          </p>
          <div>
            <button onClick={handdleGoogleLogin} className="btn w-full">
              <i className="fa-brands fa-google text-xl text-blue-600"></i>
              Login With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
