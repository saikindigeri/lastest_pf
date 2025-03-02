"use client";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { bricolage_grotesque, inter } from "@/app/utils/font";

import About from "./about/page";
import Skills from "./skills/page";
import ProjectsSection from "./projects/page";
import Contact from "./contact/page";
import Footer from "./footer/page";
import Image from "next/image";

export default function Home() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <>
      <section
        className={`relative flex flex-col justify-center items-center text-center transition-all duration-300 space-y-6 p-6 min-h-screen
 
  `}
      >
        {/* Background Glow Effects */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
  {/* Soft Purple Glow (Top-Left) */}
  <div className="absolute top-1/5 left-1/4 w-[320px] h-[320px] rounded-full 
                  bg-purple-600 blur-[200px] opacity-30"></div>

  {/* Soft Blue Glow (Top-Right) */}
  <div className="absolute top-1/3 right-1/4 w-[270px] h-[270px] rounded-full 
                  bg-blue-500 blur-[180px] opacity-30"></div>

  {/* Soft Yellow Glow (Bottom-Left) */}
  <div className="absolute bottom-1/4 left-1/4 w-[220px] h-[220px] rounded-full 
                  bg-yellow-500 blur-[160px] opacity-25"></div>
</div>


        {/* 3D Icon Above the Name */}
        <Image
          quality={100}
          priority
          width={200}
          height={200}
          src="/iron.png"
          alt="3D Icon"
          className="w-32 h-32 md:w-40 md:h-40 animate-[float_3s_infinite] border-transparent transition-all duration-300 hover:scale-125  hover:shadow-purple-500"
          style={{ animation: "float 3s ease-in-out infinite" }}
        />

        {/* Main Heading */}
        <h1
          className={`font-extrabold text-5xl md:text-6xl leading-tight ${bricolage_grotesque}`}
        >
          Hi, Im <br />
          <span
  className="relative text-transparent bg-clip-text bg-gradient-to-r 
  from-yellow-500 via-orange-500 to-purple-700 dark:from-pink-500 dark:via-red-500 dark:to-yellow-500 
  font-extrabold tracking-wide px-6 py-2 border-4 border-transparent 
  [text-shadow:0px_0px_6px_rgba(255,165,0,0.7), 0px_0px_10px_rgba(255,165,0,0.5)] 
  dark:[text-shadow:0px_0px_6px_rgba(255,105,180,0.7), 0px_0px_12px_rgba(255,105,180,0.5)]"
>
  Sai Kumar
</span>


        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl font-semibold text-gray-400 max-w-2xl">
          Full-Stack Developer | MERN | Blockchain Enthusiast
        </p>

        {/* Description */}
        <p className={`text-lg md:text-base max-w-2xl ${inter}`}>
          Passionate about crafting scalable, efficient applications and solving
          complex problems with a logical approach. With expertise in both
          frontend and backend development, let’s build something amazing
          together!
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* Get in Touch Button */}
          <a
            href="/contact"
            className={`px-6 py-3 h-12 w-44 font-semibold flex justify-center items-center rounded-lg relative transition-all duration-300 hover:scale-105
        ${isDarkMode ? "bg-white text-black" : "bg-black text-white"}
      `}
          >
            Get in touch
            <span className="absolute inset-x-0 -bottom-2 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 rounded-full blur-md opacity-80"></span>
            <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-lg opacity-20"></span>
          </a>
        </div>
      </section>

      <About />
      <Skills />
      <ProjectsSection />
      <Contact />
      <Footer />
    </>
  );
}
