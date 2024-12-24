import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Theme = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");
  if (selectedTheme === "dark") {
    setDarkMode();
  }

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        className="theme-controller"
        onChange={toggleTheme}
        defaultChecked={selectedTheme === "dark"}
      />

      {/* Sun icon for Light Mode */}
      <FaSun className="swap-off h-8 w-8 text-yellow-500" />

      {/* Moon icon for Dark Mode */}
      <FaMoon className="swap-on h-8 w-8 text-blue-500" />
    </label>
  );
};

export default Theme;
