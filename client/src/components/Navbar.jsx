import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white py-4 px-6">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          Morris Life Sciences
        </Link>
        <ul className="text-white flex space-x-6">
          <li>
            <Link to="/" className="text-white hover:text-ellipsis">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/medicines" className="text-white hover:text-gray-300">
              Medicines
            </Link>
          </li>
          <li>
            <Link to="/admin" className="text-white hover:text-gray-300">
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
