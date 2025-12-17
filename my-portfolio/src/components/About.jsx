import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="p-6 sm:p-10 md:p-20 text-center bg-gray-900/70 dark:bg-gray-800/70 backdrop-blur-md rounded-3xl mx-2 sm:mx-4 md:mx-20 my-6 sm:my-10"
    >
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 text-white drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-sm sm:text-base md:text-xl text-gray-300 max-w-xs sm:max-w-xl md:max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        I am a <span className="text-blue-400 font-semibold">3rd Year B.Tech CSE (AI)</span> student
        with a strong interest in <span className="text-blue-400">Data Science and Machine Learning</span>.
        <br /><br />
        I enjoy working with data, building predictive models, and developing data-driven applications using modern technologies. I am continuously enhancing my problem-solving skills and preparing myself for industry-ready, real-world projects and internships.
      </motion.p>
    </section>
  );
}

export default About;
