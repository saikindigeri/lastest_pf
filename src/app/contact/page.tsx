"use client";

import React, { useContext, useState } from "react";

import { bricolage_grotesque } from "@/app/utils/font";
import { ThemeContext } from "../context/ThemeContext";
import toast from "react-hot-toast";

const ContactForm = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const result = await response.json();

      if (response.status === 200) {
       
        toast.success("Message sent successfully");
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
      } else {
        setStatus(result.error || "Something went wrong!");
      }
    } catch (err) {
      console.log(err);
      setStatus("Failed to send message!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className={`py-20 text-center transition-all duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h2
        className={`text-3xl md:text-3xl font-bold tracking-tight mb-10 ${bricolage_grotesque} relative`}
      >
        Get in Touch
    
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto space-y-6 transition-all duration-300"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-1 transition-all duration-300 shadow-lg ${
           isDarkMode
                  ? "transparent text-white border-gray-500 focus:ring-gray-200"
              : "bg-gray-100 text-black border-gray-200 focus:ring-gray-200"
            }`}
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`w-full p-4 border rounded-lg focus:outline-none focus:ring transition-all duration-300 shadow-lg ${
             isDarkMode
               ? "transparent text-white border-gray-500 focus:ring-gray-100"
              : "bg-gray-100 text-black border-gray-200 focus:ring-gray-200"
            }`}
          />
        </div>

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-1 transition-all duration-300 shadow-lg ${
          isDarkMode
            ? "transparent text-white border-gray-500 focus:ring-gray-200"
              : "bg-gray-100 text-black border-gray-200 focus:ring-gray-200"
          }`}
        />

        <input
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-1 transition-all duration-300 shadow-lg  ${
           isDarkMode
              ? "transparent text-white border-gray-500 focus:ring-gray-200"
              : "bg-gray-100 text-black border-gray-200 focus:ring-gray-200"
          }`}
        />

        {/* Gradient Button with Glow Effect */}
     {/* Gradient Glassmorphism Button with Glow Effect */}
<button
  type="submit"
  disabled={isSubmitting}
  className={`w-full py-3 text-xl font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 relative shadow-2xl backdrop-blur-lg bg-opacity-80 ${
    isDarkMode
      ? "bg-gradient-to-l from-blue-900 via-red-500 to-purple-400 text-white"
      : "bg-gradient-to-l from-yellow-500 via-purple-500 to-green-400 text-black"
  }`}
  style={{
    boxShadow: isDarkMode,
    
    backdropFilter: "blur(10px)",
    transition: "all 0.3s ease-in-out",
  }}
>
  <span className="text-sm tracking-tight relative z-10">{isSubmitting ? "Sending..." : "Submit"}</span>

  {/* Subtle Bottom Glow */}
  <span
    className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-[80%] h-[10px] rounded-full blur-md opacity-60 ${
      isDarkMode ? "bg-pink-500" : "bg-blue-600"
    }`}
  ></span>
</button>


      </form>

      {status && (
        <p className={`mt-6 text-xl  ${bricolage_grotesque}`}>
        
        </p>
      )}
    </section>
  );
};

export default ContactForm;
