import React from 'react'
import { FaStar, FaGithub, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const MainBody = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] px-6 md:px-16 flex flex-col">
      
      {/* Top Section: Left + Right side */}
      <div className="flex flex-col md:flex-row">
        
        {/* Left Side: Text */}
        <div className="main-cont-body max-w-3xl w-full md:w-1/2 flex flex-col gap-8 pt-24 md:pt-32">
          <div className="dev inline-flex items-center gap-3 px-5 py-2 
                          border border-gray-600 rounded-full 
                          text-gray-300 font-semibold text-sm md:text-base 
                          bg-white/5 backdrop-blur-sm shadow-md 
                          hover:border-yellow-400 transition-all duration-300 w-fit">
            <FaStar size={20} className="text-yellow-400" />
            BUILD RELIABLE WEBSITES
          </div>

          <h1 className="tagline text-3xl md:text-5xl font-extrabold leading-tight text-gray-100">
            DevOrbits — <span className="text-indigo-400">Crafting reliable web experiences</span> that feel cinematic.
          </h1>

          <p className="text-gray-400 text-base md:text-lg max-w-2xl">
            I build immersive, scalable, and future‑proof web applications using React, Tailwind, and other modern technologies — blending technical precision with cinematic polish.
          </p>
        </div>

        {/* Right Side: Animated Orbit Element */}
        <div className="w-full md:w-1/2 flex items-center justify-center relative py-16 md:py-0" aria-hidden="true">
          <div className="absolute w-72 h-72 md:w-96 md:h-96 
                          bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 
                          rounded-full blur-2xl opacity-25 translate-y-24"></div>

          <div className="relative w-64 h-64 md:w-80 md:h-80 translate-y-24">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                            w-6 h-6 md:w-8 md:h-8 rounded-full 
                            bg-white/20 backdrop-blur-md border border-white/30 shadow-lg"></div>

            <div className="absolute inset-0 rounded-full border border-white/15"></div>
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '12s' }}>
              <span className="absolute top-0 left-1/2 -translate-x-1/2 
                               w-2 h-2 md:w-2.5 md:h-2.5 rounded-full 
                               bg-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.8)]"></span>
            </div>

            <div className="absolute inset-0 scale-110 rounded-full border border-white/10"></div>
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '18s', animationDirection: 'reverse' }}>
              <span className="absolute left-1/2 bottom-0 -translate-x-1/2 
                               w-1.5 h-1.5 md:w-2 md:h-2 rounded-full 
                               bg-pink-400 shadow-[0_0_10px_rgba(244,114,182,0.8)]"></span>
            </div>

            <span className="absolute left-6 top-10 w-1 h-1 bg-white/70 rounded-full"></span>
            <span className="absolute right-8 top-20 w-1 h-1 bg-white/60 rounded-full"></span>
            <span className="absolute left-10 bottom-8 w-1 h-1 bg-white/50 rounded-full"></span>
          </div>
        </div>
      </div>

      {/* Bottom Section: Social Media Buttons */}
      <div className="socialmedia mt-24 flex flex-col md:flex-row justify-between gap-6 w-">
        <a href="https://github.com/pathaksanchit25-coder" target="_blank" rel="noopener noreferrer"
           className="flex items-center justify-between w-64 px-6 py-4 rounded-xl 
                      bg-white/10 backdrop-blur-md text-gray-200 font-semibold 
                      hover:bg-indigo-500 hover:text-white transition-all duration-300 shadow-lg">
          <FaGithub size={28} />
          <span className="text-lg">GitHub</span>
        </a>

        <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer"
           className="flex items-center justify-between w-64 px-6 py-4 rounded-xl 
                      bg-white/10 backdrop-blur-md text-gray-200 font-semibold 
                      hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-lg">
          <FaInstagram size={28} />
          <span className="text-lg">Instagram</span>
        </a>

        <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer"
           className="flex items-center justify-between w-64 px-6 py-4 rounded-xl 
                      bg-white/10 backdrop-blur-md text-gray-200 font-semibold 
                      hover:bg-red-600 hover:text-white transition-all duration-300 shadow-lg">
          <FaYoutube size={28} />
          <span className="text-lg">YouTube</span>
        </a>

        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
           className="flex items-center justify-between w-64 px-6 py-4 rounded-xl 
                      bg-white/10 backdrop-blur-md text-gray-200 font-semibold 
                      hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg">
          <FaLinkedin size={28} />
          <span className="text-lg">LinkedIn</span>
        </a>
      </div>
    </div>
  )
}

export default MainBody