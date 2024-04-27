import React from "react";

const Navbar = (props) => {
  return (
    <div className="relative w-full ">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8 bg-yellow-400 rounded-full">
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
              <a
                href="#"
                className="inline-flex items-center text-m font-semibold text-gray-800 hover:text-gray-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex items-center text-m font-semibold text-gray-800 hover:text-gray-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex items-center text-m font-semibold text-gray-800 hover:text-gray-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden space-x-2 lg:block">
          <button
            type="button"
            className="rounded-full border-none bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/20 "
          >
            Sign In
          </button>
          <button
            type="button"
            className="rounded-full border-none bg-black  px-3 py-2 text-sm font-semibold hover:bg-black/20 hover:text-black text-white shadow-sm "
          >
            Log In
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
