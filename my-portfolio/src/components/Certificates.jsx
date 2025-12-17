import React, { useState } from "react";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "Oracle Cloud Infrastructure Certified AI Foundation Associate",
    issuer: "Oracle",
    image: "/first_certificate.jpeg",
  },
  {
    title: "Deloitte Cyber Job Simulation",
    issuer: "Deloitte",
    image: "/second_certificate.jpeg",
  },
  {
    title: "OfficeMaster Power BI Workshop",
    issuer: "OfficeMaster",
    image: "/third_certificate.jpeg",
  },
];

function Certificates() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openModal = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage("");
  };

  return (
    <section id="certificates" className="p-6 sm:p-10 md:p-20 bg-gray-900 text-white">
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-14 text-center text-blue-400"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Certificates
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="rounded-2xl bg-gray-800/70 backdrop-blur-md border border-gray-700 p-4 cursor-pointer
                       hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20 transition"
            onClick={() => openModal(cert.image)}
          >
            {cert.image && (
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-40 sm:h-48 md:h-36 object-contain rounded-md mb-3"
              />
            )}
            <h3 className="text-base sm:text-lg md:text-lg font-semibold mb-1 text-center text-white">
              {cert.title}
            </h3>
            <p className="text-sm text-gray-400 text-center">{cert.issuer}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 sm:p-6"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-lg sm:max-w-2xl md:max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage}
              alt="Certificate"
              className="w-full h-auto rounded-md shadow-2xl object-contain"
            />
            <button
              className="absolute top-2 right-2 text-white text-3xl sm:text-4xl font-bold hover:text-red-500"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;
