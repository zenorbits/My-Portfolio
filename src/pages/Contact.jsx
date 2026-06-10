import React from "react";
import { FaInstagram, FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const cardClass = "group border border-gray-700 rounded-2xl p-8 bg-gradient-to-br from-[#0f172a]/80 via-[#1e293b]/70 to-[#0f172a]/80 backdrop-blur-md shadow-md transition-all duration-500 hover:shadow-[0_0_35px_rgba(99,102,241,0.7)] hover:border-indigo-500 hover:scale-[1.02] flex flex-col items-center text-center";

const Contact = () => {
  return (
    <section id="contact" className="contact-page bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] pt-28 pb-3.5 px-6">

      <div className="text-center mb-16">
        <h1 className="text-indigo-400 text-4xl md:text-5xl font-extrabold tracking-wide">Contact Me</h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Let's connect and collaborate! Reach out through any of the methods below.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        <a href="https://wa.me/918657850019?text=Hi%20Sanchit%2C%20I%20saw%20your%20portfolio%20and%20want%20a%20website%20for%20my%20business" target="_blank" rel="noopener noreferrer" className="group border border-gray-700 rounded-2xl p-8 bg-gradient-to-br from-[#0f172a]/80 via-[#1e293b]/70 to-[#0f172a]/80 backdrop-blur-md shadow-md transition-all duration-500 hover:shadow-[0_0_35px_rgba(37,211,102,0.7)] hover:border-[#25D366] hover:scale-[1.02] flex flex-col items-center text-center">
          <FaWhatsapp size={36} className="text-[#25D366] mb-4 group-hover:text-green-400 transition-colors" />
          <h3 className="text-lg font-semibold text-white">WhatsApp</h3>
          <p className="text-gray-400 text-sm mt-2">Chat with me directly on WhatsApp.</p>
        </a>

        <a href="https://www.instagram.com/zen_orbits" target="_blank" rel="noopener noreferrer" className={cardClass}>
          <FaInstagram size={36} className="text-pink-500 mb-4 group-hover:text-pink-400 transition-colors" />
          <h3 className="text-lg font-semibold text-white">Instagram DM</h3>
          <p className="text-gray-400 text-sm mt-2">Message me directly on Instagram.</p>
        </a>

        <a href="mailto:zenorbits29@gmail.com" className={cardClass}>
          <FaEnvelope size={36} className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors" />
          <h3 className="text-lg font-semibold text-white">Email</h3>
          <p className="text-gray-400 text-sm mt-2">zenorbits29@gmail.com</p>
        </a>

        <a href="https://www.linkedin.com/in/sanchit-pathak-5a19b13a2/" target="_blank" rel="noopener noreferrer" className={cardClass}>
          <FaLinkedin size={36} className="text-blue-600 mb-4 group-hover:text-blue-500 transition-colors" />
          <h3 className="text-lg font-semibold text-white">LinkedIn</h3>
          <p className="text-gray-400 text-sm mt-2">Connect with me professionally.</p>
        </a>



      </div>

      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold mb-4 text-indigo-400">🚀 Let's Build Together</h2>
        <p className="text-gray-400 mb-6">Whether it's a project idea or collaboration, I'd love to hear from you.</p>
      </div>

    </section>
  );
};

export default Contact;