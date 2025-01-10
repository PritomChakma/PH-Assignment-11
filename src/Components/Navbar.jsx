import React, { useContext, useEffect, useRef, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { CgDarkMode } from "react-icons/cg";
import { GrLogin } from "react-icons/gr";
import {
  MdOutlineAddToPhotos,
  MdOutlineManageAccounts,
  MdPostAdd,
} from "react-icons/md";
import { RiGitPullRequestLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { AuthContex } from "../Provider/AuthProvider";
import logo from "../assets/Logo-removebg-preview.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, signOutUser } = useContext(AuthContex);
  const dropdownRef = useRef(null);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSignOut = () => {
    signOutUser()
      .then(() => {})
      .catch((error) => {
        console.error("Sign out error:", error.message);
      });
  };

  return (
    <div className="navbar bg-gray-800 text-white h-20 sticky top-0 z-10">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl flex items-center">
          <img className="h-5 w-5 md:h-10 md:w-10" src={logo} alt="Logo" />
          <p className="md:text-2xl">Voluntero</p>
        </Link>
      </div>
      <div className="flex-none md:gap-3 items-center">
        <div className="flex gap-1 md:gap-3">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/allVolunteer">Volunteer</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>

        <div className="dropdown dropdown-end relative" ref={dropdownRef}>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
            onClick={toggleDropdown}
          >
            <div className="w-10 rounded-full">
              {user ? (
                <img
                  referrerPolicy="no-referrer"
                  src={
                    user?.photoURL ||
                    "https://www.example.com/default-avatar.jpg"
                  }
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border-2"
                  style={{ borderColor: "#EF4C53" }}
                />
              ) : (
                <i className="fa-solid fa-user text-2xl text-white"></i>
              )}
            </div>
          </div>
          {isDropdownOpen && (
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content bg-gray-800 text-white rounded-lg shadow-lg z-10 mt-3 w-60 px-4 py-3 space-y-2`}
            >
              <li className="rounded-md">
                <NavLink
                  to="/addVolunteer"
                  className="flex items-center gap-3 px-2 py-2 text-white hover:bg-gray-700"
                >
                  <MdOutlineAddToPhotos className="text-lg text-red-400" />
                  Add Volunteer Post
                </NavLink>
              </li>
              <li className="rounded-md">
                <NavLink
                  to="/myPost"
                  className="flex items-center gap-3 px-2 py-2 text-white hover:bg-gray-700"
                >
                  <MdPostAdd className="text-lg text-yellow-400" />
                  My Volunteer Posts
                </NavLink>
              </li>
              <li className="rounded-md">
                <NavLink
                  to="/myRequest"
                  className="flex items-center gap-3 px-2 py-2 text-white hover:bg-gray-700"
                >
                  <MdOutlineManageAccounts className="text-lg text-blue-400" />
                  Manage My Posts
                </NavLink>
              </li>
              <li className="rounded-md">
                <NavLink
                  to="/vouleenteerRequest"
                  className="flex items-center gap-3 px-2 py-2 text-white hover:bg-gray-700"
                >
                  <RiGitPullRequestLine className="text-lg text-green-400" />
                  Volunteer Request
                </NavLink>
              </li>
              <li className="rounded-md">
                <button
                  className="flex items-center gap-3 px-2 py-2 text-white hover:bg-gray-700"
                  onClick={handleToggleTheme}
                >
                  <CgDarkMode className="text-lg text-white" />
                  {theme === "light" ? "Dark Mode" : "Light Mode"}
                </button>
              </li>
              <li className="rounded-md">
                {user ? (
                  <NavLink
                    to="/signin"
                    onClick={handleSignOut}
                    className="flex items-center gap-3 px-2 py-2 text-white hover:bg-gray-700"
                  >
                    <BiLogOut className="text-lg text-red-400" />
                    Log Out
                  </NavLink>
                ) : (
                  <NavLink
                    to="/signin"
                    className="flex items-center gap-3 px-2 py-2 text-white hover:bg-gray-700"
                  >
                    <GrLogin className="text-lg text-green-400" />
                    Sign In
                  </NavLink>
                )}
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
