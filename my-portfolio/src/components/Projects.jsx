import React from "react";
import { motion } from "framer-motion";
import newProjectImg from "../assets/newproject.png"; // path to your screenshot

const project = {
  title: "AI-Enabled Soil Nutrient Mapping Using Satellite Data",
  description:
    "Developed a system that predicts soil nutrient levels (N, P, K) using satellite imagery and machine learning, helping farmers make data-driven fertilizer decisions.",
  tech: [
    "Python",
    "Flask",
    "Scikit-learn",
    "TensorFlow",
    "GDAL",
    "Rasterio",
    "Sentinel-2",
    "Leaflet.js",
    "PostgreSQL/PostGIS",
  ],
  link: "https://newproject-ly7y.vercel.app",
  image: newProjectImg,
};

function Projects() {
  return (
    <section id="projects" className="p-10 md:p-20 bg-gray-900 text-white">
      {/* Section Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      {/* Card */}
      <div className="flex justify-center">
        <motion.div
          className="relative bg-gray-800/80 backdrop-blur-md p-4 rounded-2xl shadow-md flex flex-col justify-between transition-transform duration-300 max-w-sm w-full hover:shadow-2xl hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)" }}
        >
          {/* Image */}
          {project.image && (
            <div className="w-full mb-4 overflow-hidden rounded-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-contain"
              />
            </div>
          )}

          {/* Title */}
          <h3 className="text-lg font-bold mb-2 text-white text-center">{project.title}</h3>

          {/* Description */}
          <p className="text-gray-300 mb-3 text-sm leading-relaxed text-center">
            {project.description}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 mb-3 justify-center">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Link */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline text-sm font-semibold text-center"
          >
            View Project →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
