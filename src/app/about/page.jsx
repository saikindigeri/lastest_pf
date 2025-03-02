"use client";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { bricolage_grotesque } from "@/app/utils/font";

export default function About() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={` w-full flex flex-col items-center justify-center px-6 md:px-10 py-4 transition-all duration-300 
      `}
    >
         <h2 className={`${bricolage_grotesque} text-3xl font-bold mb-6`}>Education 🎓</h2>
      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl text-center mb-12"
      >
        <p className={`text-base md:text-lg leading-relaxed ${bricolage_grotesque}`}>
          Passionate <span className="font-semibold">Full-Stack Developer </span>  
          specializing in React, Next.js, and Node.js.  
          I enjoy building scalable & efficient applications  
          while solving real-world challenges.
        </p>
      </motion.div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-2xl p-8 transition-all duration-300 text-center"
      >
     

        <div className="text-base md:text-lg font-medium space-y-3">
          <div className="flex justify-between">
            <span className={bricolage_grotesque}>City College, Hyderabad</span> 
            <span className="text-sm md:text-base opacity-80">Graduated in 2022</span>
          </div>
          <div className="flex justify-between">
            <span className={bricolage_grotesque}>BSc in MPCS</span> 
            <span className="text-sm md:text-base opacity-80">7.87 GPA</span>
          </div>
          <div className="flex justify-between">
            <span className={bricolage_grotesque}>Full-Stack Development Certification</span>  
            <span className="text-sm md:text-base opacity-80">NxtWave, 2023</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
