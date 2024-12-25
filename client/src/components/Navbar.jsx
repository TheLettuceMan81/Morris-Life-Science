import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"; // Replace with the correct path to your logo file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white py-4 px-6">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Morris Life Sciences Logo"
            className="h-10 rounded-md w-28"
          />
        </Link>

        {/* Hamburger Menu Icon */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex space-y-4 md:space-y-0 md:space-x-6 absolute md:static bg-blue-600 md:bg-transparent w-full md:w-auto text-center top-16 left-0 md:top-auto md:left-auto`}
        >
          <li>
            <Link
              to="/"
              className="block md:inline text-white hover:text-gray-300 py-2 md:py-0"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block md:inline text-white hover:text-gray-300 py-2 md:py-0"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/medicines"
              className="block md:inline text-white hover:text-gray-300 py-2 md:py-0"
              onClick={() => setIsMenuOpen(false)}
            >
              Medicines
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="block md:inline text-white hover:text-gray-300 py-2 md:py-0"
              onClick={() => setIsMenuOpen(false)}
            >
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
