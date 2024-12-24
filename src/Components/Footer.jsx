import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-gray-300 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Voluntero</h2>
              <p className="text-sm">
                Volunteering is an important and honorable way to help others.
                It can be a great way to make a difference in the world
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
              <ul className="space-y-2">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/addVolunteer">Add Volunteer Post</NavLink>
                </li>
                <li>
                  <NavLink to="/myPost">My Volunteer Posts</NavLink>
                </li>
                <li>
                  <NavLink to="/myRequest">Manage My Posts</NavLink>
                </li>
                <li>
                  <NavLink to="/vouleenteerRequest">Volunteer Request</NavLink>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Subscribe</h2>
              <p className="text-sm mb-4">
                Stay updated with the latest volunteer opportunities, community news, and inspiring stories. Subscribe to our newsletter today
              </p>
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-md bg-gray-800 text-gray-300 border-2"
                />
                <button className="bg-[#EF4C53] text-white px-4 py-2 rounded-md btn">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://www.facebook.com/pritom.chakma.716/"
              className="text-gray-400 text-xl"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://x.com/" className="text-gray-400 text-xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://github.com/PritomChakma"
              className="text-gray-400 text-xl"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.youtube.com/"
              className="text-gray-400 text-xl"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>&copy; 2024 GameReviewsHub. All Rights Reserved</p>
            <p>Designed with by Pritom</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
