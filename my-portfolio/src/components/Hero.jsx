import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Hero() {
  const titles = [
    "Data Science Enthusiast",
    "Machine Learning Learner",
    "Backend Developer (Python)",
  ];

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 40 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
        if (displayText.length + 1 === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setDisplayText(currentTitle.slice(0, displayText.length - 1));
        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const imgRotateX = useTransform(springY, [-300, 300], [12, -12]);
  const imgRotateY = useTransform(springX, [-300, 300], [-12, 12]);
  const orb1X = useTransform(springX, [-300, 300], [-40, 40]);
  const orb1Y = useTransform(springY, [-300, 300], [-40, 40]);
  const orb2X = useTransform(springX, [-300, 300], [35, -35]);
  const orb2Y = useTransform(springY, [-300, 300], [35, -35]);

  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const badges = ["Python", "Machine Learning", "SQL", "TensorFlow"];

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#050507] px-6 md:px-16 py-24"
    >
      {/* Background gradient orbs */}
      <motion.div
        style={{ x: orb1X, y: orb1Y }}
        className="pointer-events-none absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-600/25 blur-[130px]"
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ x: orb2X, y: orb2Y }}
        className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-fuchsia-600/25 blur-[130px]"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />

      <div className="relative w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT: Text content */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-blue-400 bg-blue-500/10 border border-blue-500/30 px-4 py-1.5 rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            WELCOME TO MY PROFILE
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-4 text-white"
          >
            Hi, I'm{" "}
            <span className="relative inline-block bg-gradient-to-r from-blue-400 via-cyan-300 to-fuchsia-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradientMove_4s_linear_infinite]">
              Shivanshu
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-2xl font-semibold text-gray-300 mb-6 h-8"
          >
            <span className="text-blue-400">{displayText}</span>
            <motion.span
              className="inline-block w-[2px] h-5 sm:h-6 bg-blue-400 ml-1 align-middle"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed mb-8"
          >
            B.Tech Computer Science student with a strong interest in Machine
            Learning and Data Science. Passionate about building data-driven
            solutions, training predictive models, and extracting insights
            from data using Python, SQL, and modern ML frameworks.
          </motion.p>

          {/* Floating tech badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-2 justify-center md:justify-start mb-8"
          >
            {badges.map((b, i) => (
              <motion.span
                key={b}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.08 }}
                className="text-xs font-medium text-gray-300 bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-full"
              >
                {b}
              </motion.span>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href="/Shivanshu%20mishra%20resume.pdf"
              download
              className="relative bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white px-7 py-3.5 rounded-full font-semibold text-center shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_45px_rgba(59,130,246,0.6)] transition-shadow"
            >
              Download Resume
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href="https://github.com/shivanshu7680"
              target="_blank"
              rel="noreferrer"
              className="bg-white/5 backdrop-blur-sm border border-white/15 text-gray-200 px-7 py-3.5 rounded-full font-semibold hover:bg-white/10 transition flex items-center justify-center gap-2"
            >
              <FaGithub />
              GitHub
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href="https://www.linkedin.com/in/shivanshu-mishra-733b51299/"
              target="_blank"
              rel="noreferrer"
              className="bg-white/5 backdrop-blur-sm border border-white/15 text-gray-200 px-7 py-3.5 rounded-full font-semibold hover:bg-white/10 transition flex items-center justify-center gap-2"
            >
              <FaLinkedin />
              LinkedIn
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT: Image with animated gradient border */}
        <div className="order-1 md:order-2 flex justify-center">
          <motion.div
            className="relative [perspective:900px]"
            style={{ rotateX: imgRotateX, rotateY: imgRotateY }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated conic gradient ring */}
            <motion.div
              className="absolute -inset-3 rounded-full opacity-90"
              style={{
                background:
                  "conic-gradient(from 0deg, #3b82f6, #d946ef, #22d3ee, #3b82f6)",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 6px), black calc(100% - 6px))",
                WebkitMask:
                  "radial-gradient(farthest-side, transparent calc(100% - 6px), black calc(100% - 6px))",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              src="/my-image.jpg"
              alt="Shivanshu Mishra"
              className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full object-cover"
            />

            {/* Floating glass badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { delay: 1, duration: 0.6 },
                y: { delay: 1.2, duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -bottom-4 -right-2 sm:-right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2.5 shadow-xl"
            >
              <p className="text-white text-sm font-bold">B.Tech CSE</p>
              <p className="text-gray-300 text-xs">Data Science</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs tracking-widest">SCROLL</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>

      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
}

export default Hero;