import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
import newProjectImg from "../assets/newproject.png";
import studentImg from "../assets/student.png";
import whatsappchatImg from "../assets/whatsapp chat.png";
import youtubeImg from "../assets/youtube.png";

const projects = [
  {
    category: "WEB",
    title: "AI-Enabled Soil Nutrient Mapping Using Satellite Data",
    subtitle: "Satellite-Based Precision Agriculture",
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
    link: "https://newproject-muac.vercel.app",
    github: null,
    image: newProjectImg,
  },
  {
    category: "ML",
    title: "Student Performance Prediction",
    subtitle: "Academic Analytics Web App",
    description:
      "Built a machine learning model that predicts student academic performance based on factors like attendance, study hours, previous grades, and extracurricular involvement, and deployed it as an interactive web app so educators can identify at-risk students early and provide timely intervention.",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Streamlit",
      "Matplotlib",
      "Seaborn",
    ],
    link: "https://student-performance-prediction-4sbntxschxoarven5fvktb.streamlit.app/",
    github: null,
    image: studentImg,
  },
  {
    category: "DATA",
    title: "WhatsApp Chat Analyzer",
    subtitle: "Conversation Insights Dashboard",
    description:
      "Built a web app that analyzes exported WhatsApp chat data to reveal insights like message frequency, most active users, common words, emoji usage, and activity trends over time — presented through interactive charts and visualizations.",
    tech: [
      "Python",
      "Streamlit",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "WordCloud",
      "Regex",
    ],
    link: "https://whatsapp-chat-analyzer-fjxnr8icedup8g4ub65r8a.streamlit.app/",
    github: null,
    image: whatsappchatImg,
  },
  {
    category: "AI",
    title: "YouTube Video AI Summarizer",
    subtitle: "Transcript-to-Summary Tool",
    description:
      "Built a web app that extracts the transcript of any YouTube video and uses AI to generate concise, accurate summaries — helping users grasp key points of long videos in seconds instead of watching the whole thing.",
    tech: [
      "Python",
      "Streamlit",
      "YouTube Transcript API",
      "LangChain",
      "OpenAI API",
      "NLTK",
    ],
    link: "https://youtube-video-ai-sumarizer-new-angq9w85baanm2tqkkiv4e.streamlit.app/",
    github: null,
    image: youtubeImg,
  },
];

// Simple inline GitHub icon (lucide-react removed brand icons in v1.0)
function GithubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.02-.02-2-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.29 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function Projects() {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const pad = (n) => String(n + 1).padStart(2, "0");

  return (
    <section
      id="projects"
      className="relative bg-gray-950 text-white py-16 md:py-24 px-6 md:px-16 overflow-hidden"
    >
      {/* Counter */}
      <div className="flex items-center gap-3 mb-8">
        <div className="h-[1px] w-10 bg-white/30" />
        <span className="text-xs md:text-sm font-mono tracking-widest bg-white/10 px-3 py-1 rounded-full">
          {pad(index)} / {pad(projects.length - 1)}
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <span className="inline-block text-xs font-bold tracking-widest bg-blue-600 text-white px-2 py-1 rounded mb-4">
              {project.category}
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-3">
              {project.title}
            </h2>

            <h3 className="text-lg md:text-xl text-gray-400 font-medium mb-4">
              {project.subtitle}
            </h3>

            <p className="text-gray-300 leading-relaxed mb-6 max-w-lg">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs border border-white/20 text-gray-200 px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-white/30 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white/10 transition"
                >
                  <GithubIcon size={16} />
                  GitHub
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-white/30 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white/10 transition"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={project.image}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex gap-4 mt-10">
        <button
          onClick={prev}
          className="w-11 h-11 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition"
          aria-label="Previous project"
        >
          <ArrowLeft size={18} />
        </button>
        <button
          onClick={next}
          className="w-11 h-11 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition"
          aria-label="Next project"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}

export default Projects;