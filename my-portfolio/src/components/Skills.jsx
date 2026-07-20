import React from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaBrain,
  FaChartBar,
  FaRobot,
} from "react-icons/fa";

import {
  SiMysql,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiGooglecolab,
  SiOpencv,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Programming",
    icon: <FaCode />,
    color: "from-blue-500 to-cyan-500",
    skills: ["C/C++", "Python", "SQL"],
  },
  {
    title: "Data Science",
    icon: <FaChartBar />,
    color: "from-purple-500 to-pink-500",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Power BI",
    ],
  },
  {
    title: "Machine Learning",
    icon: <FaBrain />,
    color: "from-green-500 to-emerald-500",
    skills: [
      "Scikit-learn",
      "Machine Learning",
      "Deep Learning",
      "NLP",
    ],
  },
  {
    title: "Core CS",
    icon: <FaDatabase />,
    color: "from-orange-500 to-red-500",
    skills: [
      "DSA",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

const technologies = [
  { name: "Python", icon: <FaPython /> },
  { name: "Pandas", icon: <SiPandas /> },
  { name: "NumPy", icon: <SiNumpy /> },
  { name: "Scikit-learn", icon: <SiScikitlearn /> },
  { name: "Power BI", icon: <FaChartBar /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Google Colab", icon: <SiGooglecolab /> },
  { name: "VS Code", icon: <FaCode /> },
  { name: "OpenCV", icon: <SiOpencv /> },
  { name: "Deep Learning", icon: <FaRobot /> },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-black text-center text-white"
        >
          My <span className="text-blue-400">Skills</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-400 mt-6 max-w-3xl mx-auto"
        >
          Passionate about Data Science, Machine Learning, AI and Software
          Development. I continuously learn modern technologies to build
          intelligent, scalable and data-driven applications.
        </motion.p>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className={`rounded-3xl bg-gradient-to-r ${category.color} p-[2px]`}
            >
              <div className="rounded-3xl bg-gray-900/90 backdrop-blur-xl p-8 h-full">
                <div className="flex justify-center text-5xl text-blue-400 mb-5">
                  {category.icon}
                </div>

                <h3 className="text-2xl font-bold text-center text-white mb-8">
                  {category.title}
                </h3>

                <div className="flex flex-wrap justify-center gap-3">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.08 }}
                      className="px-4 py-2 rounded-full bg-white/10 border border-white/10 hover:bg-blue-500 text-gray-200 transition-all"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center text-white mt-24 mb-10"
        >
          Technology Stack
        </motion.h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.08,
                rotate: 2,
              }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 flex flex-col items-center hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20 transition-all"
            >
              <div className="text-5xl text-blue-400 mb-4">
                {tech.icon}
              </div>

              <p className="text-gray-300 text-center text-sm">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;