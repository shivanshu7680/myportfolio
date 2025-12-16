import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Certificates from "./components/Certificates.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className="bg-black text-white transition-colors duration-500">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Hero />
      </motion.section>

      {[{ id: "about", Component: About }, { id: "projects", Component: Projects }, { id: "skills", Component: Skills }, { id: "certificates", Component: Certificates }, { id: "contact", Component: Contact }].map(({ id, Component }) => (
        <motion.section key={id} id={id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, type: "spring", stiffness: 80 }}>
          <Component />
        </motion.section>
      ))}

      <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Footer />
      </motion.section>
    </div>
  );
}

export default App;
