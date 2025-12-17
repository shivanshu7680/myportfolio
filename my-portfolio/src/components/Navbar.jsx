import React, { useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Certificates", link: "#certificates" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <a href="#" className="text-xl sm:text-2xl font-bold tracking-wide">
          Shivanshu<span className="text-blue-400">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="hover:text-blue-400 transition text-sm sm:text-base"
            >
              {item.name}
            </a>
          ))}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-lg sm:text-xl hover:text-yellow-400 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl sm:text-3xl p-2"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md text-white px-4 sm:px-6 pb-6 flex flex-col">
          {navLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              onClick={() => setMenuOpen(false)}
              className="block py-3 border-b border-gray-700 hover:text-blue-400 text-sm sm:text-base transition"
            >
              {item.name}
            </a>
          ))}
          {/* Dark Mode Toggle for Mobile */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-4 flex items-center justify-center text-lg sm:text-xl hover:text-yellow-400 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />} <span className="ml-2">Theme</span>
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
