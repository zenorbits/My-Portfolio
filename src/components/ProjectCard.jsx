import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import { FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const ProjectCard = ({ title, category, description, link, status,className}) => {


  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full md:w-[48%] group ${className}`}
    >
      <div
        className="border border-gray-700 rounded-2xl p-6 flex flex-col justify-between 
                   bg-gradient-to-br from-[#0f172a]/80 via-[#1e293b]/70 to-[#0f172a]/80 
                   backdrop-blur-md shadow-md transition-all duration-500 
                   hover:shadow-xl hover:border-indigo-500"
        style={{ height: "340px" }}
      >
        {/* Title + Category + Status */}
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold text-white tracking-wide transition-colors group-hover:text-indigo-400">
            {title}
          </h1>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-400">{category}</span>
            <span
              className={`px-2 py-0.5 rounded-full text-xs ${status === "Completed"
                ? "bg-green-600/20 text-green-400"
                : "bg-yellow-600/20 text-yellow-400"
                }`}
            >
              {status}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-300 leading-relaxed line-clamp-5">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-4 text-gray-300 text-sm mt-4">
          <div className="flex items-center gap-1">
            <FaReact size={18} color="#61DBFB" />
            <span>React</span>
          </div>
          <div className="flex items-center gap-1">
            <SiExpress size={18} color="#fff" />
            <span>Express</span>
          </div>
          <div className="flex items-center gap-1">
            <SiTailwindcss size={18} color="#38BDF8" />
            <span>Tailwind</span>
          </div>
          <div className="flex items-center gap-1">
            <SiMongodb size={18} color="#4DB33D" />
            <span>MongoDB</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;