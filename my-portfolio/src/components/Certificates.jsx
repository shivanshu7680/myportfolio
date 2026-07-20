import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronRight, FaTimes } from "react-icons/fa";

const certificates = [
  {
    title: "Oracle Cloud Infrastructure Certified AI Foundation Associate",
    issuer: "Oracle",
    image: "/first_certificate.jpeg",
    date: "January 2025",
    level: "Advanced",
  },
  {
    title: "Deloitte Cyber Job Simulation",
    issuer: "Deloitte",
    image: "/second_certificate.jpeg",
    date: "December 2024",
    level: "Intermediate",
  },
  {
    title: "OfficeMaster Power BI Workshop",
    issuer: "OfficeMaster",
    image: "/third_certificate.jpeg",
    date: "November 2024",
    level: "Beginner",
  },
  {
    title: "Career Essentials in Gen AI",
    issuer: "Microsoft and Linkedin",
    image: "/fourth%20certificate.jpeg",
    date: "July 2026",
    level: "Intermediate",
  },
  {
    title: "AWS cloud practitioner Essentials",
    issuer: "AWS",
    image: "/fifth%20certificate.png",
    date: "July 2026",
    level: "Intermediate",
  },
  {
    title: "Controller job Simulation",
    issuer: "IBM",
    image: "/sixth%20certificate.jpeg",
    date: "August 2026",
    level: "Advanced",
  },
];

const LEVEL_STYLES = {
  Beginner: {
    bg: "rgba(37,99,235,0.15)",
    border: "rgba(59,130,246,0.35)",
    text: "#93C5FD",
  },
  Intermediate: {
    bg: "rgba(147,51,234,0.15)",
    border: "rgba(168,85,247,0.35)",
    text: "#D8B4FE",
  },
  Advanced: {
    bg: "rgba(16,185,129,0.15)",
    border: "rgba(52,211,153,0.35)",
    text: "#6EE7B7",
  },
};

function Certificates() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      id="certificates"
      className="min-h-screen py-24 px-6 lg:px-20"
      style={{ background: "#0A0E17" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');
        .font-sans2 { font-family: 'Inter', sans-serif; }
        .font-mono2 { font-family: 'IBM Plex Mono', monospace; }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2
            className="font-sans2 text-5xl lg:text-6xl font-extrabold mb-4"
            style={{ color: "#F5F7F6" }}
          >
            Certifications
          </h2>
          <p
            className="font-sans2 text-base max-w-2xl mx-auto"
            style={{ color: "#8A968F" }}
          >
            Professional certifications in AI, Cloud Computing, and Data
            Analytics
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => {
            const lvl = LEVEL_STYLES[cert.level];
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl p-7 flex flex-col"
                style={{
                  background: "#10141F",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* ambient glow */}
                <div
                  className="pointer-events-none absolute -top-16 -left-16 w-56 h-56 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: "rgba(91,155,245,0.18)" }}
                />
                <div
                  className="pointer-events-none absolute -top-24 -left-24 w-56 h-56 rounded-full blur-3xl"
                  style={{ background: "rgba(91,155,245,0.06)" }}
                />

                {/* Level badge */}
                <span
                  className="font-sans2 relative z-10 inline-flex w-fit items-center px-3 py-1 rounded-full text-xs font-semibold mb-5"
                  style={{
                    background: lvl.bg,
                    border: `1px solid ${lvl.border}`,
                    color: lvl.text,
                  }}
                >
                  {cert.level}
                </span>

                {/* Title */}
                <h3
                  className="font-sans2 relative z-10 text-2xl font-bold leading-snug mb-4"
                  style={{ color: "#F5F7F6" }}
                >
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div
                  className="font-sans2 relative z-10 text-base font-semibold mb-2"
                  style={{ color: "#5B9BF5" }}
                >
                  {cert.issuer}
                </div>

                {/* Date */}
                <div
                  className="font-mono2 relative z-10 text-sm mb-6"
                  style={{ color: "#6B7570" }}
                >
                  {cert.date}
                </div>

                {/* CTA */}
                <button
                  onClick={() => setSelected(cert)}
                  className="font-sans2 relative z-10 mt-auto flex items-center gap-2 text-base font-semibold w-fit transition-colors duration-300"
                  style={{ color: "#F5F7F6" }}
                >
                  View Certificate
                  <FaChevronRight
                    className="text-xs transition-transform duration-300 group-hover:translate-x-1"
                    style={{ color: "#5B9BF5" }}
                  />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
            style={{ background: "rgba(5,7,6,0.92)", backdropFilter: "blur(6px)" }}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.1)", background: "#10141F" }}
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center shadow-xl transition-colors z-10"
                style={{ background: "#5B9BF5", color: "#0A0D0B" }}
              >
                <FaTimes />
              </button>
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full max-h-[65vh] object-contain"
                style={{ background: "#0A0E17" }}
              />
              <div className="px-7 py-6 flex flex-col gap-2" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <span
                  className="font-sans2 inline-flex w-fit items-center px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: LEVEL_STYLES[selected.level].bg,
                    border: `1px solid ${LEVEL_STYLES[selected.level].border}`,
                    color: LEVEL_STYLES[selected.level].text,
                  }}
                >
                  {selected.level}
                </span>
                <h3 className="font-sans2 text-xl font-bold" style={{ color: "#F5F7F6" }}>
                  {selected.title}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="font-sans2 text-sm font-semibold" style={{ color: "#5B9BF5" }}>
                    {selected.issuer}
                  </span>
                  <span className="font-mono2 text-sm" style={{ color: "#6B7570" }}>
                    {selected.date}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Certificates;