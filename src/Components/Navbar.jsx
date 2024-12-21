import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContex } from "../Provider/AuthProvider";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, signOutUser } = useContext(AuthContex);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
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
        // console.log("Sign out successfully")
      })
      .catch((error) => {
        // console.log("ERROR", error.message)
      });
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            Volunteer
          </Link>
        </div>
        <div className="flex-none md:gap-3 items-center">
          <div className="flex gap-3">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/allVolunteer">All-Volunteer</NavLink>
          </div>

          <div className="dropdown dropdown-end relative" ref={dropdownRef}>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
              onClick={toggleDropdown} // Toggle dropdown on click
            >
              <div className="w-10 rounded-full ">
                {user ? (
                  <img
                    referrerPolicy="no-referrer"
                    src={
                      user?.photoURL ||
                      "https://www.example.com/default-avatar.jpg"
                    } // Fallback default image
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full border-2"
                    style={{ borderColor: "#EF4C53" }} // Custom border color
                  />
                ) : (
                  <i className="fa-solid fa-user text-2xl"></i>
                )}
              </div>
            </div>
            {isDropdownOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/addVolunteer">Add Volunteer</Link>
                </li>
                <li>
                  <Link to="my"> My Posts </Link>
                </li>
                <li>
                  {user ? (
                    <NavLink
                      to="/signin"
                      onClick={handleSignOut}
                      className="btn btn-sm btn-error"
                    >
                      Log Out
                    </NavLink>
                  ) : (
                    <NavLink to="/signin" className="btn btn-sm btn-primary">
                      Signin
                    </NavLink>
                  )}
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
