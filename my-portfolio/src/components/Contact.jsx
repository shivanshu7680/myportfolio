import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMsg("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setStatusMsg("");

    try {
      // ✅ Note the URL change to the serverless function
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatusMsg("Message sent successfully. I will get back to you soon!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatusMsg(data.msg || "Failed to send message.");
      }
    } catch (err) {
      console.log(err);
      setStatusMsg("Server error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="p-10 md:p-20 bg-gray-900 text-white relative">
      <motion.div
        className="max-w-lg mx-auto relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Contact Card */}
        <div className="relative p-8 bg-gray-800/70 backdrop-blur-md rounded-3xl border border-gray-700 shadow-lg hover:shadow-2xl transition transform hover:scale-105">
          <h2 className="text-3xl font-extrabold mb-4 text-center text-blue-400">
            Contact Me
          </h2>
          <p className="text-gray-400 text-sm text-center mb-6">
            Feel free to reach out for internships, projects, or collaboration.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded-xl bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded-xl bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="p-3 rounded-xl bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <button
              type="submit"
              disabled={loading}
              className={`bg-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-700 transition ${
                loading && "opacity-50 cursor-not-allowed"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {statusMsg && (
            <p className="text-center text-sm mt-4 text-gray-300">{statusMsg}</p>
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
