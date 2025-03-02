"use client";

import { useContext } from "react";
import { ThemeContext } from "../app/context/ThemeContext";
import {  CodeXml, LaptopMinimal, MoonStar, Sun } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaHome, FaUser,   FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const pathname = usePathname();

    return (
        <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-10 border transition-all duration-300 shadow-md rounded-full 
            px-6 py-2 w-[90%] max-w-[750px] flex justify-center items-center gap-6 bg-opacity-50 backdrop-blur-md 
            ${isDarkMode ? "bg-gray-800/50 text-white border-gray-800" : "bg-white/50 text-black border-gray-300"}`}>

            <div className="flex items-center gap-4">
                {/* Navigation Links */}
                <NavLink href="/" icon={<FaHome />} text="Home" active={pathname === "/"} isDarkMode={isDarkMode} />
                <NavLink href="/about" icon={<FaUser />} text="About" active={pathname === "/about"} isDarkMode={isDarkMode} />
                <NavLink href="/skills" icon={<LaptopMinimal /> } text="Skills" active={pathname === "/skills"} isDarkMode={isDarkMode} />
                <NavLink href="/projects" icon={ <CodeXml />} text="Projects" active={pathname === "/projects"} isDarkMode={isDarkMode} />
                <NavLink href="/contact" icon={<FaEnvelope />} text="Contact" active={pathname === "/contact"} isDarkMode={isDarkMode} />
            </div>

            {/* Social Links - Shown only on larger screens */}
            <div className="hidden sm:flex items-center gap-4">
                <NavLink href="https://github.com/saikindigeri" icon={<FaGithub />} text="GitHub" isDarkMode={isDarkMode} />
                <NavLink href="https://www.linkedin.com/in/saikumarkindigeri" icon={<FaLinkedin />} text="LinkedIn" isDarkMode={isDarkMode} />
                <NavLink href="https://twitter.com/Devaa_Sai" icon={<FaTwitter />} text="Twitter" isDarkMode={isDarkMode} />
            </div>

            {/* Dark Mode Toggle */}
            <button onClick={toggleTheme} 
                className="relative group p-2 rounded-full transition-all duration-200 
                    hover:scale-110
                    border-gray-300 ">
                
                {isDarkMode ? <Sun className="h-4 w-4 text-yellow-300" /> : <MoonStar className="h-4 w-4 text-gray-700" />}
                
                {/* Tooltip */}
                <span className="absolute left-1/2 transform -translate-x-1/2 top-12 opacity-0  text-xs bg-gray-900 text-white px-2 py-1 rounded-md transition-opacity">
                    Toggle Theme
                </span>
            </button>
        </nav>
    );
};

const NavLink = ({ href, icon, text, active, isDarkMode }) => (
  <Link
    href={href}
    className={`relative group text-xl p-2 rounded-full backdrop-blur-2xl transition-all duration-200 
      hover:scale-120 
      ${active ? "text-yellow-400" : isDarkMode ? "text-white" : "text-black"}
    `}
  >
    {icon}

    {/* Tooltip Text on Hover - Positioned Below */}
    <span
  className={`absolute left-1/2 transform -translate-x-1/2 top-full mt-3 px-2 py-0.5 rounded-md 
  text-[10px] font-light opacity-0 scale-95 transition-all duration-200 
  group-hover:opacity-100 group-hover:scale-100
  ${isDarkMode ? "bg-gray-800 text-gray-200" : "bg-gray-300 text-gray-900"}`}
>
  {text}

  {/* Arrow */}
  <span
    className={`absolute left-1/2 transform -translate-x-1/2 -top-1 w-2 h-2 rotate-45 
    ${isDarkMode ? "bg-gray-800" : "bg-gray-300"}`}
  ></span>
</span>


  </Link>
);


export default Navbar;
