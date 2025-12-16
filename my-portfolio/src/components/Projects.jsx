import React from "react";
import { motion } from "framer-motion";

const projectList = [
  {
    title: "Data Analysis Dashboard",
    description:
      "Performed data cleaning, analysis, and visualization using Python libraries to extract meaningful insights from real-world datasets.",
    tech: ["Python", "Pandas", "Matplotlib"],
    link: "#",
  },
  {
    title: "Machine Learning Prediction System",
    description:
      "Built a basic machine learning model to predict outcomes based on structured data, focusing on model training and evaluation.",
    tech: ["Python", "Scikit-learn"],
    link: "#",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Designed and developed a responsive personal portfolio using React and Tailwind CSS with smooth animations.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    link: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="p-10 md:p-20 bg-gray-900 text-white">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800/80 backdrop-blur-md p-6 rounded-2xl shadow-xl flex flex-col justify-between hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
          >
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={project.link}
              className="text-blue-400 hover:underline text-sm font-semibold"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
