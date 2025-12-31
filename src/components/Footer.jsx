import React, { useRef } from "react";
import { FaGithub, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const sectionRef = useRef(null);
  const brandRef = useRef(null);
  const linksRef = useRef(null);
  const socialsRef = useRef(null);
  const copyrightRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
        end: "top 50%",
        scrub: 1.5, // smoother scroll link
      },
    });

    // Brand / tagline
    tl.fromTo(
      brandRef.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.8, ease: "power2.out" } // slower + softer
    );

    // Quick links
    tl.fromTo(
      linksRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.8, ease: "power2.out" },
      "-=1" // overlap but still slower
    );

    // Social buttons (staggered cascade)
    tl.fromTo(
      socialsRef.current.querySelectorAll("a"),
      { opacity: 0, y: 40, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.35, // slower cascade
      },
      "-=0.8"
    );

    // Copyright
    tl.fromTo(
      copyrightRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: "power1.out" }, // longer fade
      "-=0.5"
    );
  }, { scope: sectionRef });

  return (
    <footer
      ref={sectionRef}
      className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] 
                 text-gray-300 py-12 px-6 md:px-16 border-t border-gray-700"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">

        {/* Brand / Tagline */}
        <div ref={brandRef} className="flex flex-col gap-3 md:w-1/3">
          <h2 className="text-indigo-400 text-2xl font-bold">DevOrbits</h2>
          <p className="text-sm text-gray-400">
            Crafting reliable web experiences that feel cinematic, scalable, and future‑proof.
          </p>
        </div>

        {/* Quick Links */}
        <div ref={linksRef} className="flex flex-col gap-3 md:w-1/3">
          <h3 className="text-white font-semibold text-lg">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li><a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                window.lenis.scrollTo("#projects", {
                  offset: -50, // adjust for header height
                  duration: 1.6,
                  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                });
              }}
              className="hover:text-indigo-400 transition"
            >
              Projects
            </a></li>
            <li><a
              href="#services"
              className="hover:text-indigo-400 transition"
              onClick={(e) => {
                e.preventDefault();
                window.lenis.scrollTo("#services", {
                  offset: -50, // adjust for header height
                  duration: 1.6,
                  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                });
              }}
            >Services
            </a></li>
            <li><a
              href="#whychooseus"
              className="hover:text-indigo-400 transition"
              onClick={(e) => {
                e.preventDefault();
                window.lenis.scrollTo("#whychoseus", {
                  offset: -50, // adjust for header height
                  duration: 1.6,
                  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                });
              }}
            >Why Choose Us
            </a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div ref={socialsRef} className="flex flex-col gap-3 md:w-1/3">
          <h3 className="text-white font-semibold text-lg">Connect</h3>
          <div className="flex flex-wrap gap-4">
            <a href="https://github.com/pathaksanchit25-coder" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between w-40 px-4 py-3 rounded-xl 
                          bg-white/10 backdrop-blur-md text-gray-200 font-semibold 
                          hover:bg-indigo-500 hover:text-white transition-all duration-300 shadow-lg">
              <FaGithub size={22} />
              <span>GitHub</span>
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between w-40 px-4 py-3 rounded-xl 
                          bg-white/10 backdrop-blur-md text-gray-200 font-semibold 
                          hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-lg">
              <FaInstagram size={22} />
              <span>Instagram</span>
            </a>
            <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between w-40 px-4 py-3 rounded-xl 
                          bg-white/10 backdrop-blur-md text-gray-200 font-semibold 
                          hover:bg-red-600 hover:text-white transition-all duration-300 shadow-lg">
              <FaYoutube size={22} />
              <span>YouTube</span>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between w-40 px-4 py-3 rounded-xl 
                          bg-white/10 backdrop-blur-md text-gray-200 font-semibold 
                          hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg">
              <FaLinkedin size={22} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div ref={copyrightRef} className="mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} DevOrbits. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;