// src/components/Navbar.js

import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-20 flex justify-center p-4 bg-[rgba(255,255,255,0.1)] backdrop-blur-lg rounded-lg border border-gray-300 border-opacity-30">
      <div className="flex space-x-8 items-center">
        <div className="space-x-4">
          <a href="#home" className="text-white hover:text-gray-300 transition">
            Home
          </a>
          <a
            href="#about"
            className="text-white hover:text-gray-300 transition"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-white hover:text-gray-300 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
