import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C / C++", "Python", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
  },
  {
    title: "Concepts & Domains",
    skills: [
      "Data Science",
      "Machine Learning",
      "Neural Networks",
      "DSA",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Google Colab",
      "Kaggle",
      "MySQL Workbench",
      "VS Code",
      "GitHub",
      "Git",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="p-10 md:p-20 bg-gray-900 text-white"
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-14 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Skills
      </motion.h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="rounded-2xl bg-gray-800/70 backdrop-blur-md border border-gray-700 p-6
                       hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition"
          >
            <h3 className="text-lg font-semibold mb-5 text-center text-blue-400">
              {category.title}
            </h3>

            {/* All skills as boxes */}
            <div className="flex flex-wrap justify-center gap-3">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-1.5 text-sm rounded-full bg-gray-700 text-gray-200 hover:bg-blue-500 hover:text-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
