"use client";

import { motion } from "framer-motion";
import { bricolage_grotesque } from "@/app/utils/font";
import { FaJs, FaReact, FaNodeJs, FaPython, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiExpress, SiMongodb, SiMysql, SiTailwindcss, SiCss3 } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
  { name: "React", icon: <FaReact />, color: "text-blue-400" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-white bg-black px-2 rounded" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Express.js", icon: <SiExpress />, color: "text-gray-400" },
  { name: "Python", icon: <FaPython />, color: "text-yellow-300" },
  { name: "Java", icon: <FaJava />, color: "text-red-500" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
  { name: "MySQL", icon: <SiMysql />, color: "text-blue-600" },
  {name:"CSS",icon:<SiCss3/>,color:"text-blue-600"},
  {name:"TailwindCss",icon:<SiTailwindcss/>, color:"text-blue-600"}
];

export default function Skills() {


  return (
    <div
      className={` w-full flex flex-col items-center justify-center px-8 py-6 transition-all duration-300 
   `}
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-3xl md:text-3xl font-bold mb-10 ${bricolage_grotesque}`}
      >
        My Skills 🚀
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center gap-2 px-6 py-4 rounded-lg 
                       bg-opacity-10 text-lg font-medium transition-all duration-300 border 
                       border-gray-600 shadow-lg"
          >
            <span className={`text-3xl ${skill.color}`}>{skill.icon}</span>
            <span className="text-base">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
