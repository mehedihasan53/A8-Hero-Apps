import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto">
        {/* Left Section */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-purple-600 font-medium underline" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/apps"
                  className={({ isActive }) =>
                    isActive ? "text-purple-600 font-medium underline" : ""
                  }
                >
                  Apps
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/installation"
                  className={({ isActive }) =>
                    isActive ? "text-purple-600 font-medium underline" : ""
                  }
                >
                  Installation
                </NavLink>
              </li>
            </ul>
          </div>

          <NavLink to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-8 h-8" />
            <span className="text-lg font-semibold text-purple-600">
              HERO.IO
            </span>
          </NavLink>
        </div>

        {/* Center Section */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[15px]">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-600 font-medium underline"
                    : "text-black"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-600 font-medium underline"
                    : "text-black"
                }
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-600 font-medium underline"
                    : "text-black"
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="navbar-end">
          <a
            href="https://github.com/mehedihasan53"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600"
          >
            <FaGithub className="mr-2 text-lg" />
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
