import { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContex } from "../Provider/AuthProvider.jsx";

const Login = () => {
  const navigate = useNavigate();
  const { user, loginUser, googleLogin } = useContext(AuthContex);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Login user
    loginUser(email, password)
      .then((result) => {
        form.reset(); // Reset form after successful login
        navigate("/"); // Redirect after login
        toast.success("Login successfully");
      })
      .catch((error) => {
        toast.error("Login failed. Please try again.");
        console.error("ERROR", error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        navigate("/"); // Redirect after Google login
        toast.success("Login successfully with Google");
      })
      .catch((error) => {
        toast.error("Google Login failed. Please try again.");
        console.error("ERROR", error.message);
      });
  };

  return (
    <div>
      <div
        className="min-h-screen  flex items-center justify-center"
        style={{
          // backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="border-2 backdrop-blur-sm rounded-lg shadow-md p-8 max-w-sm w-full">
          <h3 className=" font-bold text-center text-xl mb-2">
            Signin Your Account
          </h3>
          <p className="text-center mb-3">
            Welcome back! Please login to continue.
          </p>
          <form onSubmit={handleLogin}>
            <div>
              <label className="label ">
                <span className="block  text-sm font-bold mb-2">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                className=" placeholder-gray-400 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500 border-2"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="blocktext-sm font-bold mb-2">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter a Password"
                className=" placeholder-gray-400 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500 border-2"
                required
              />
            </div>

            <div className="mt-5">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full">
                Login
              </button>
            </div>
          </form>
          <p className="text-center font-bold my-3 text-white">
            Don't have an account? Please{" "}
            <Link to="/registration" className="text-green-500">
              Register
            </Link>
          </p>
          <div>
            <button
              onClick={handleGoogleLogin}
              className="btn w-full text-white font-bold bg-[#EF4C53]"
            >
              <i className="fa-brands fa-google  text-xl"></i> Login With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
