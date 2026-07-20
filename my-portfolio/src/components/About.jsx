import React from "react";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaDatabase,
  FaPython,
  FaChartBar,
} from "react-icons/fa";

function About() {
  const stats = [
    {
      number: "5+",
      title: "ML Projects",
    },
    {
      number: "15+",
      title: "Technologies",
    },
    {
      number: "5+",
      title: "Datasets Analyzed",
    },
    {
      number: "100%",
      title: "Learning",
    },
  ];

  const expertise = [
    {
      title: "Machine Learning",
      icon: <FaBrain />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Data Science",
      icon: <FaDatabase />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Python",
      icon: <FaPython />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Data Analytics",
      icon: <FaChartBar />,
      color: "from-orange-500 to-yellow-500",
    },
  ];

  return (
    <section id="about" className="relative py-20 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500 rounded-full blur-[120px] opacity-20"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative max-w-7xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 lg:p-14 shadow-[0_0_50px_rgba(59,130,246,.2)]"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm font-semibold">
              ABOUT ME
            </span>

            <h2 className="text-4xl md:text-5xl font-black mt-6 leading-tight text-white">
              Turning
              <span className="text-blue-400"> Data </span>
              into
              <span className="text-cyan-400"> Intelligence</span>
            </h2>

            <p className="text-gray-300 mt-8 leading-8 text-lg">
              I am a{" "}
              <span className="text-blue-400 font-semibold">
                3rd Year B.Tech CSE (AI)
              </span>{" "}
              student passionate about
              <span className="text-cyan-400">
                {" "}
                Data Science
              </span>{" "}
              and
              <span className="text-cyan-400">
                {" "}
                Machine Learning
              </span>
              .
              <br />
              <br />
              I enjoy extracting meaningful insights from data, building
              predictive machine learning models, and developing intelligent
              applications using Python and modern data science tools.
              <br />
              <br />
              Currently, I am strengthening my skills in Machine Learning,
              Data Analysis, SQL, Power BI, Python, and solving real-world
              business problems through projects.
            </p>

            {/* Skills */}

            <div className="flex flex-wrap gap-4 mt-10">
              {[
                
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.08 }}
                  className="px-5 py-3 rounded-xl bg-white/10 border border-white/10 text-gray-200 hover:border-blue-500 transition-all duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Section */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                }}
                transition={{ duration: 0.3 }}
                className={`rounded-2xl bg-gradient-to-r ${item.color} p-[2px]`}
              >
                <div className="bg-gray-900 rounded-2xl p-8 flex flex-col justify-center items-center h-52">
                  <div className="text-5xl text-white mb-5">
                    {item.icon}
                  </div>

                  <h3 className="text-xl text-center font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.08,
              }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-blue-500 transition-all duration-300"
            >
              <h1 className="text-4xl font-black text-blue-400">
                {item.number}
              </h1>

              <p className="text-gray-300 mt-2">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default About;