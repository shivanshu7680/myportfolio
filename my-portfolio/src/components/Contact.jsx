import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaCaretRight,
  FaPaperPlane,
  FaKaggle,
} from "react-icons/fa";

/*
  Update your real details here — everything on the page is driven
  by these two arrays, nothing else needs to change.
*/
const directContact = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "shivanshumishra1707@gmail.com",
    note: "Respond within 24 hours",
    href: "mailto:shivanshumishra1707@gmail.com",
  },
  {
    icon: FaPhoneAlt,
    label: "Phone",
    value: "+91 9555801872",
    note: "Available on WhatsApp & Telegram",
    href: "tel:+919555801872",
  },
];

const followMe = [
  {
    icon: FaGithub,
    label: "GitHub",
    value: "@shivanshu7680",
    note: "Open source projects & contributions",
    href: "https://github.com/shivanshu7680",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "Shivanshu Mishra",
    note: "Professional networking & updates",
    href: "https://www.linkedin.com/in/shivanshu-mishra-733b51299/",
  },
  {
    icon: FaKaggle,
    label: "Kaggle",
    value: "@shivanshumishra95",
    note: "Datasets, notebooks & competitions",
    href: "https://www.kaggle.com/shivanshumishra95",
  },
];

/*
  EmailJS setup (no backend needed):
  1. Create a free account at https://www.emailjs.com
  2. Add an Email Service (e.g. connect your Gmail) -> copy the Service ID
  3. Create an Email Template with {{from_name}}, {{from_email}}, {{message}}
     variables -> copy the Template ID
  4. Account -> General -> copy your Public Key
  5. Paste all three below.
*/
const EMAILJS_SERVICE_ID = "service_lv4gfiq";
const EMAILJS_TEMPLATE_ID = "template_qrlzn0k";
const EMAILJS_PUBLIC_KEY = "j134o9CPmJrB-P-J_";

function ContactRow({ item }) {
  const Icon = item.icon;
  return (
    <motion.a
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      whileHover={{ y: -2 }}
      className="group flex items-center gap-4 rounded-xl p-4 transition-colors duration-300"
      style={{
        background: "#10141F",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <span
        className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0 transition-colors duration-300 group-hover:bg-blue-500/20"
        style={{ background: "rgba(91,155,245,0.14)" }}
      >
        <Icon style={{ color: "#5B9BF5" }} className="text-lg" />
      </span>
      <span className="flex flex-col min-w-0">
        <span className="font-sans2 text-sm" style={{ color: "#9AA5A0" }}>
          {item.label}
        </span>
        <span
          className="font-sans2 text-base font-bold truncate"
          style={{ color: "#F5F7F6" }}
        >
          {item.value}
        </span>
        <span className="font-sans2 text-xs mt-0.5" style={{ color: "#6B7570" }}>
          {item.note}
        </span>
      </span>
    </motion.a>
  );
}

function Panel({ title, showArrow, children, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="rounded-3xl p-8"
      style={{
        background: "linear-gradient(180deg, #0E121C 0%, #0A0D15 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="flex items-center gap-2 mb-6">
        {showArrow && (
          <FaCaretRight style={{ color: "#5B9BF5" }} className="text-2xl" />
        )}
        <h3
          className="font-display2 text-2xl font-extrabold"
          style={{ color: "#F5F7F6" }}
        >
          {title}
        </h3>
      </div>
      <div className="flex flex-col gap-4">{children}</div>
    </motion.div>
  );
}

const inputStyle = {
  background: "#10141F",
  border: "1px solid rgba(255,255,255,0.1)",
  color: "#F5F7F6",
};

function MessageForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMsg("Please fill in all fields.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or email me directly.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      className="rounded-3xl p-8 mt-8"
      style={{
        background: "linear-gradient(180deg, #0E121C 0%, #0A0D15 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="flex items-center gap-2 mb-6">
        <FaCaretRight style={{ color: "#5B9BF5" }} className="text-2xl" />
        <h3
          className="font-display2 text-2xl font-extrabold"
          style={{ color: "#F5F7F6" }}
        >
          Send a Message
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="font-sans2 text-sm rounded-xl px-4 py-3 outline-none focus:border-blue-400"
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            className="font-sans2 text-sm rounded-xl px-4 py-3 outline-none focus:border-blue-400"
            style={inputStyle}
          />
        </div>
        <textarea
          name="message"
          placeholder="Your message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="font-sans2 text-sm rounded-xl px-4 py-3 outline-none resize-none focus:border-blue-400"
          style={inputStyle}
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="font-sans2 flex items-center justify-center gap-2 text-sm font-semibold rounded-xl py-3 transition-opacity duration-300 disabled:opacity-60"
          style={{ background: "#5B9BF5", color: "#0A0E17" }}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
          {status !== "sending" && <FaPaperPlane className="text-xs" />}
        </button>

        {status === "success" && (
          <p className="font-sans2 text-sm text-center" style={{ color: "#6EE7B7" }}>
            Message sent! I'll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="font-sans2 text-sm text-center" style={{ color: "#F87171" }}>
            {errorMsg}
          </p>
        )}
      </form>
    </motion.div>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 lg:px-20"
      style={{ background: "#0A0E17" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@700;800&display=swap');
        .font-sans2 { font-family: 'Inter', sans-serif; }
        .font-display2 { font-family: 'Poppins', sans-serif; }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaCaretRight style={{ color: "#5B9BF5" }} className="text-4xl" />
            <h2
              className="font-display2 text-5xl lg:text-6xl font-extrabold"
              style={{ color: "#5B9BF5" }}
            >
              Let's Connect
            </h2>
          </div>
          <p
            className="font-sans2 text-base max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#9AA5A0" }}
          >
            I'm always interested in hearing about new opportunities,
            projects, and collaborations. Feel free to reach out through any
            of these channels.
          </p>
        </motion.div>

        {/* Panels */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Panel title="Direct Contact" showArrow delay={0.1}>
            {directContact.map((item) => (
              <ContactRow key={item.label} item={item} />
            ))}
          </Panel>

          <Panel title="Follow Me" delay={0.2}>
            {followMe.map((item) => (
              <ContactRow key={item.label} item={item} />
            ))}
          </Panel>
        </div>

        {/* Message form */}
        <MessageForm />
      </div>
    </section>
  );
}