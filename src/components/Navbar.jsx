import React from "react";
import { Link, NavLink } from "react-router-dom";
import SignIn from "./SignIn";

const Navbar = (props) => {
  return (
    <div className="relative w-full ">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8 rounded-full">
        <div className="inline-flex items-center space-x-2">
          <span>
            <div className="w-18 h-12 overflow-hidden rounded-full">
              <img
                className="object-cover  w-full h-full"
                src={props.navimage}
                alt="Logo"
              />
            </div>
          </span>
        </div>
        <div className="hidden grow  lg:block">
          <ul className="ml-20 inline-flex space-x-8">
            <li>
              <NavLink
                to="/Home"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-gray-600" : "text-gray-800"
                  }text-gray-800 inline-flex items-center text-m font-semibold hover:text-gray-600`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-gray-600" : "text-gray-800"
                  }text-gray-800 inline-flex items-center text-m font-semibold hover:text-gray-600`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-gray-600" : "text-gray-800"
                  } text-gray-800 inline-flex items-center text-m font-semibold hover:text-gray-600`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden space-x-2 lg:block">
          <Link
            to="/SignIn"
            className={` text-black hover:text-black inline-flex items-center text-m font-semibold`}
          >
            <button
              type="button"
              className="rounded-full border-none bg-transparent px-3 py-2 text-sm font-semibold hover:bg-black/20 "
            >
              sign in
            </button>
          </Link>

          <button
            type="button"
            className="rounded-full border-none bg-black  px-3 py-2 text-sm font-semibold hover:bg-black/20 hover:text-black text-white shadow-sm "
          >
            <Link
              to="/LogIn"
              className={` text-white hover:text-white inline-flex items-center text-m font-semibold`}
            >
              Log in
            </Link>
          </button>
        </div>

        <div class="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-6 w-6 cursor-pointer"
          >
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
