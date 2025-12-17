import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Hero() {
  const titles = [
    "Data Science Enthusiast",
    "Machine Learning Learner",
    "Backend Developer (Python)",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % titles.length),
      2000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4">
      {/* Profile Image */}
      <motion.div
        className="relative mb-6"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.4 }}
      >
        <div className="absolute inset-0 rounded-full bg-blue-500 blur-xl opacity-40"></div>
        <img
          src="/my image.jpg"
          alt="Shivanshu Mishra"
          className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-500 shadow-[0_0_45px_rgba(59,130,246,0.6)]"
        />
      </motion.div>

      {/* Name */}
      <motion.h1
        className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-2 text-white text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Shivanshu Mishra
      </motion.h1>

      {/* Role */}
      <motion.p
        className="text-sm sm:text-lg md:text-xl font-semibold mb-4 text-gray-300 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <span className="text-blue-400">{titles[index]}</span>
      </motion.p>

      {/* Description */}
      <motion.p
        className="max-w-xs sm:max-w-md md:max-w-xl text-center text-gray-400 mb-6 px-2 sm:px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        B.Tech Computer Science student with a strong interest in Machine Learning and Data Science. Passionate about building data-driven solutions, training predictive models, and extracting insights from data using Python, SQL, and modern ML frameworks.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {/* Resume Button */}
        <a
          href="/resume.pdf"
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition text-center w-full sm:w-auto"
        >
          Download Resume
        </a>

        {/* GitHub Button */}
        <a
          href="https://github.com/shivanshu7680"
          target="_blank"
          rel="noreferrer"
          className="border border-gray-400 text-gray-300 px-6 py-3 rounded-full hover:bg-gray-800 hover:text-white transition flex items-center justify-center gap-2 w-full sm:w-auto"
        >
          <FaGithub />
          View GitHub
        </a>

        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/shivanshu-mishra-733b51299/"
          target="_blank"
          rel="noreferrer"
          className="border border-blue-500 text-blue-500 px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white transition flex items-center justify-center gap-2 w-full sm:w-auto"
        >
          <FaLinkedin />
          View LinkedIn
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
