"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { FiGithub } from "react-icons/fi";
import { ThemeContext } from "../context/ThemeContext";
import { bricolage_grotesque } from "../utils/font";
import Image from "next/image";

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
  {
    title: "Socially ",
    description:
      "A photo-sharing platform with user authentication and content management.",
    demoLink: "https://socially-lac.vercel.app",
    githubLink: "https://github.com/saikindigeri/socially.git",
    src: "/projects_images/socially.png",
  },
  {
    title: "Saas Landing",
    description:
      "A Saas landing page with animations including sleek and cool design.",
    demoLink: "https://saas-landing-khaki.vercel.app",
    githubLink: "https://github.com/saikindigeri/saas-landing.git",
    src: "/projects_images/landing.png",
  },
];

export default function ProjectsSection() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section id="projects" className="py-12 text-center">
      <h2 className={`${bricolage_grotesque} text-3xl font-bold mb-6`}>
        Projects
      </h2>

      <div className="relative w-full">
        {/* Horizontal scrolling container */}
        <motion.div
          className="flex gap-4 px-4 md:px-8 overflow-x-auto scrollbar-hide snap-x"
          animate={{ x: ["5%", "-25%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          whileHover={{ x: 0 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className={`w-[220px] md:w-[260px] rounded-lg shadow-lg flex flex-col flex-shrink-0 snap-start transition-all duration-300
                ${
                  isDarkMode
                    ? "bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white"
                    : "bg-gradient-to-br from-white via-gray-100 to-gray-200 text-black"
                }`}
            >
              {/* Image Section */}
              <div className="relative">
                <Image
                  width={240}
                  height={160}
                  src={project.src}
                  alt={project.title}
                  className="w-full h-[120px] md:h-[140px] object-cover rounded-t-lg"
                />
              </div>

              {/* Content Section */}
              <div className="p-3 flex flex-col flex-grow">
                <h3
                  className={`${bricolage_grotesque} text-sm md:text-lg font-semibold mb-2`}
                >
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm opacity-80 leading-relaxed flex-grow">
                  {project.description}
                </p>
              </div>

              {/* Icons Fixed at Bottom */}
              <div className="p-3 border-t border-gray-400 flex justify-between items-center">
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
                  className="text-xs font-medium flex items-center gap-2"
                >
                  <p className="text-sm italic opacity-80">Website</p>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
