import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

/*
  Update this array with your real experience.
  Order matters here — keep the most recent entry first,
  the timeline renders top to bottom in this order.
*/
const experience = [
  {
    role: "Data Science & AI Intern",
    company: "GRAStech",
    duration: "June 2026 — july 2026",
    location: "lucknow",
    description: [
      "Worked on data science and AI projects, performing data collection, cleaning, and exploratory analysis on real-world datasets.",
      "Built and trained machine learning models using Python (Scikit-learn) to solve classification and prediction problems.",
      "Applied AI concepts to automate data-driven tasks and improve decision-making accuracy under mentor guidance.",
    ],
    tags: ["Python", "ML", "DL"],
  },
  
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 lg:px-20"
      style={{ background: "#0A0E17" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');
        .font-sans2 { font-family: 'Inter', sans-serif; }
        .font-display2 { font-family: 'Poppins', sans-serif; }
        .font-mono2 { font-family: 'IBM Plex Mono', monospace; }
      `}</style>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2
            className="font-display2 text-5xl lg:text-6xl font-extrabold mb-4"
            style={{ color: "#F5F7F6" }}
          >
            Experience
          </h2>
          <p
            className="font-sans2 text-base max-w-2xl mx-auto"
            style={{ color: "#9AA5A0" }}
          >
            A timeline of the roles and projects that have shaped my work so
            far.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* vertical line */}
          <div
            className="absolute left-[27px] top-2 bottom-2 w-px"
            style={{ background: "rgba(255,255,255,0.1)" }}
          />

          <div className="flex flex-col gap-10">
            {experience.map((item, idx) => (
              <motion.div
                key={item.role + item.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
                className="relative pl-[70px]"
              >
                {/* marker */}
                <span
                  className="absolute left-0 top-1 flex items-center justify-center w-14 h-14 rounded-full"
                  style={{
                    background: "#10141F",
                    border: "1px solid rgba(91,155,245,0.4)",
                  }}
                >
                  <FaBriefcase style={{ color: "#5B9BF5" }} className="text-lg" />
                </span>

                {/* card */}
                <div
                  className="rounded-2xl p-6"
                  style={{
                    background: "#10141F",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3
                      className="font-sans2 text-xl font-bold"
                      style={{ color: "#F5F7F6" }}
                    >
                      {item.role}
                    </h3>
                    <span
                      className="font-mono2 text-xs px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(91,155,245,0.14)",
                        color: "#5B9BF5",
                        border: "1px solid rgba(91,155,245,0.3)",
                      }}
                    >
                      {item.duration}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span
                      className="font-sans2 text-base font-semibold"
                      style={{ color: "#5B9BF5" }}
                    >
                      {item.company}
                    </span>
                    <span style={{ color: "#6B7570" }}>•</span>
                    <span
                      className="font-sans2 text-sm"
                      style={{ color: "#9AA5A0" }}
                    >
                      {item.location}
                    </span>
                  </div>

                  <ul className="flex flex-col gap-2 mb-5">
                    {item.description.map((line, i) => (
                      <li
                        key={i}
                        className="font-sans2 text-sm leading-relaxed flex gap-2"
                        style={{ color: "#C4CBD1" }}
                      >
                        <span style={{ color: "#5B9BF5" }}>—</span>
                        {line}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono2 text-xs px-3 py-1 rounded-full"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          color: "#9AA5A0",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}