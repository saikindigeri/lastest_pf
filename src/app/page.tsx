"use client";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { bricolage_grotesque, inter } from "@/app/utils/font";

import About from "./about/page";
import Skills from "./skills/page";
import ProjectsSection from "./projects/page";
import Contact from "./contact/page";
import Footer from "./footer/page";

export default function Home() {
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <>
  <section 
  className={`relative flex flex-col justify-center items-center text-center transition-all duration-300 space-y-6 p-6 min-h-screen
    ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}
  `}
>
  {/* Background Glow Effect */}
  <div className="absolute inset-0 overflow-hidden z-[-1]">
    {/* Main Glow */}
    <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-600/50 to-transparent blur-3xl opacity-50"></div>
    <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-gradient-radial from-purple-700/50 to-transparent blur-2xl opacity-50"></div>
    <div className="absolute bottom-10 left-10 w-[250px] h-[250px] bg-gradient-radial from-pink-500/50 to-transparent blur-2xl opacity-40"></div>

    {/* Animated Stars */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#2c2c54_0%,_transparent_70%)] opacity-30"></div>
  </div>
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-purple-600 blur-[150px] opacity-40"></div>
    <div className="absolute top-1/2 right-1/4 w-[250px] h-[250px] rounded-full bg-blue-500 blur-[120px] opacity-50"></div>
    <div className="absolute bottom-1/4 left-1/3 w-[200px] h-[200px] rounded-full bg-yellow-500 blur-[100px] opacity-40"></div>
  </div>
  {/* Main Heading */}
  <h1 className={`font-extrabold text-5xl md:text-6xl leading-tight ${bricolage_grotesque}`}>
    Hi, I'm <br />
    <span 
  className="relative text-transparent bg-clip-text bg-gradient-to-r 
    from-yellow-500 via-orange-500 to-purple-700 dark:from-pink-500 dark:via-red-500 dark:to-yellow-500 
    font-extrabold tracking-wide px-4 py-1 border-4 border-transparent rounded-lg 
    before:absolute before:-inset-1 before:bg-gradient-to-r before:from-yellow-500 before:via-orange-500 before:to-purple-600 
    dark:before:from-pink-500 dark:before:via-red-500 dark:before:to-yellow-500 before:rounded-lg before:blur-md before:-z-10"
>
  Sai Kumar
</span>


  </h1>

  {/* Subtitle */}
  <p className=" text-lg md:text-xl font-semibold text-gray-400 max-w-2xl">
    Full-Stack Developer | MERN | Blockchain Enthusiast
  </p>

  {/* Description */}
  <p className={`text-lg md:text-base max-w-2xl ${inter}`}>
    Passionate about crafting scalable, efficient applications and solving complex problems  
    with a logical approach. With expertise in both frontend and backend development,  
    let’s build something amazing together!
  </p>

  {/* Call to Action Buttons */}
  <div className="flex flex-col sm:flex-row items-center gap-4">
    {/* Get in Touch Button */}
    <a href="/contact"
      className={`px-6 py-3 h-12 w-44 font-semibold flex justify-center items-center rounded-lg relative transition-all duration-300 hover:scale-105
        ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'}
      `}
    >
      Get in touch
      {/* Button Glow */}
      <span className="absolute inset-x-0 -bottom-2 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 rounded-full blur-md opacity-80"></span>
      <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-lg opacity-20"></span>
    </a>

    {/* Social Media Links */}
  
  </div>
</section>


        <About/>
        <Skills/>
        <ProjectsSection/>
        <Contact/>
        <Footer/>

        </>
    );
}
