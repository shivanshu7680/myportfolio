import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-center py-6">
      <p className="text-gray-300 font-semibold mb-2">© {new Date().getFullYear()} Shivanshu Mishra</p>
      <div className="flex justify-center gap-6 text-2xl">
        <a href="https://www.linkedin.com/in/Shivanshu-Mishra" target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-400 transition-all">
          <FaLinkedin />
        </a>
        <a href="https://github.com/shivanshu7680" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-all">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
