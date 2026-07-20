import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Change this to your name / brand
const NAME = "SHIVANSHU MISHRA";

export default function Preloader({ onFinish }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onFinish) setTimeout(onFinish, 800);
    }, 2200);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          <div className="flex overflow-hidden text-3xl md:text-5xl font-bold tracking-widest text-white">
            {NAME.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: "easeOut" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          <motion.div className="mt-6 h-[2px] w-40 md:w-56 bg-white/20 overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-white"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.p
            className="mt-3 text-xs md:text-sm text-white/50 tracking-[0.3em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            LOADING PORTFOLIO
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}