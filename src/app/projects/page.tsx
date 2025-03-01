"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { ThemeContext } from "../context/ThemeContext";
import { bricolage_grotesque } from "../utils/font";

const projects = [
  {
    title: "Chat App",
    description:
      "A real-time messaging app using React, Node.js, Express, Socket.io, and MySQL.",
    demoLink: "https://wsocket.vercel.app",
    githubLink: "https://github.com/saikindigeri/chat_app.git",
    src: "/projects_images/chat.png",
  },
  {
    title: "Ecommerce",
    description:
      "A secure e-commerce platform built with React, Node.js, Express, and MongoDB.",
    demoLink: "https://sainxtcart.ccbp.tech/",
    githubLink: "https://github.com/saikindigeri/NxtTrendz_Ecommerce.git",
    src: "/projects_images/ecommerce.png",
  },
  {
    title: "YouTube Clone",
    description:
      "A video-sharing platform with user authentication and content management.",
    demoLink: "https://saikwatch.ccbp.tech/",
    githubLink: "https://github.com/saikindigeri/nxtwatch.git",
    src: "/projects_images/utube.png",
  },
];

export default function ProjectsSection() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section
      id="projects"
      className={`py-12 text-center transition-all duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h2 className={`${bricolage_grotesque} text-3xl font-bold mb-6`}>
        Projects
      </h2>

      <div className="relative overflow-x-hidden w-full">
        <motion.div
          className="flex gap-6 px-4 md:px-8 overflow-x-auto scrollbar-hide"
          animate={{ x: ["5%", "-20%"] }} // Moves projects slightly left
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          whileHover={{ x: 0 }} // Stops movement on hover
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className={`w-[230px] md:w-[260px] rounded-lg overflow-hidden shadow-md transition-all duration-300 ${
                isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
              }`}
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-[120px] object-cover"
                />
              </div>

              {/* Title and Description Below Image */}
              <div className="p-3">
                <h3
                  className={`${bricolage_grotesque} text-base md:text-lg font-semibold mb-2`}
                >
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm opacity-80 leading-relaxed">
                  {project.description}
                </p>

                {/* Icons Positioned Below */}
                <div className="flex justify-between items-center mt-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium hover:underline flex items-center gap-2"
                  >
                    <FiGithub className="text-lg" />
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium hover:underline flex items-center gap-2"
                  >
                    <FaExternalLinkAlt className="text-lg" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
