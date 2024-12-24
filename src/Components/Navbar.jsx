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

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, signOutUser } = useContext(AuthContex);
  const dropdownRef = useRef(null);


  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

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
      .then(() => {
   
      })
      .catch((error) => {
        console.error("Sign out error:", error.message);
      });
  };

  return (
    <div className="navbar bg-base-100 dark:bg-gray-900 dark:text-gray-200">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl dark:text-white">
          Volunteer
        </Link>
      </div>
      <div className="flex-none md:gap-3 items-center">
        <div className="flex gap-3">
          <NavLink to="/" className="dark:text-gray-200">
            Home
          </NavLink>
          <NavLink to="/allVolunteer" className="dark:text-gray-200">
            Volunteer
          </NavLink>
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
                <i className="fa-solid fa-user text-2xl dark:text-white"></i>
              )}
            </div>
          </div>
          {isDropdownOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-800 dark:text-gray-200 rounded-box z-10 mt-3 w-52 px-2 space-y-3 shadow"
            >
              <li>
                <Link to="/addVolunteer">
                  <MdOutlineAddToPhotos className="text-lg" /> Add Volunteer
                  Post
                </Link>
              </li>
              <li>
                <Link to="/myPost">
                  <MdPostAdd className="text-lg" /> My Volunteer Posts
                </Link>
              </li>
              <li>
                <Link to="/myRequest">
                  <MdOutlineManageAccounts className="text-lg" /> Manage My
                  Posts
                </Link>
              </li>
              <li>
                <Link to="/vouleenteerRequest">
                  <RiGitPullRequestLine className="text-lg" /> Volunteer Request
                </Link>
              </li>
              <li>
                <button
                  className="flex items-center gap-2"
                  onClick={handleToggleTheme}
                >
                  <CgDarkMode className="text-lg" />
                  {theme === "light" ? "Dark Mode" : "Light Mode"}
                </button>
              </li>

              <li>
                {user ? (
                  <NavLink to="/signin" onClick={handleSignOut}>
                    <BiLogOut className="text-lg" /> Log Out
                  </NavLink>
                ) : (
                  <NavLink to="/signin">
                    <GrLogin className="text-lg" /> Signin
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
