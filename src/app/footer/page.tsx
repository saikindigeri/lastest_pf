"use client";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Footer() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <footer
      className={`py-6 text-center text-sm transition-all duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <p className="text-lg font-medium">
        <span className="font-serif tracking-wide">Designed & Developed by</span>{" "}
        <span className="font-extrabold font-mono text-xl underline decoration-wavy">
          Sai Kumar
        </span>
      </p>
      <p className="mt-1 text-base italic opacity-80">
        Built with passion <span className="text-red-500 text-lg">❤️</span>
      </p>
    </footer>
  );
}
