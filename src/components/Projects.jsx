import React, { useRef } from "react";
import { FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import ProjectCard from "./ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


const Projects = () => {

    const projectParentRef = useRef(null);

    const titleRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.from(titleRef.current, {
            y: -50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top 90%",
                end: "top 20%",
                scrub: true,
            }
        });
    });

    const projects = [
        {
            title: "ShopOrbits",
            category: "E-Commerce",
            description: "A cinematic e-commerce experience with glassmorphism UI, responsive design, and smooth GSAP animations.",
            link: "https://github.com/pathaksanchit25-coder/shoporbits",
            status: "In Progress",
            ref: 'firstLeft'
        },
        {
            title: "SongOrbit",
            category: "Music App",
            description: "A sleek music streaming app with immersive UI, playlist management, and smooth audio playback.",
            link: "https://github.com/pathaksanchit25-coder/songorbit",
            status: "In Progress",
            ref: 'firstRight'
        },
        {
            title: "TasteOrbit",
            category: "Food Discovery",
            description: "Discover recipes and restaurants with cinematic UI, responsive layouts, and interactive search.",
            link: "https://github.com/pathaksanchit25-coder/tasteorbit",
            status: "In Progress",
            ref: 'secondLeft'
        },
        {
            title: "WorkOrbit",
            category: "Productivity",
            description: "A productivity suite with task management, collaboration tools, and premium cinematic design.",
            link: "https://github.com/pathaksanchit25-coder/workorbit",
            status: "Completed",
            ref: 'secondRight'
        },
    ];

    return (
        <div className=" bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] p-6">
            <div className="title-card px-10">
                <div className="title mb-12 text-center" ref={titleRef}>
                    <h1 className="text-indigo-400 text-4xl font-extrabold">My Projects</h1>
                </div>

                {/* Projects Grid */}
                <div className="mainprojectcont flex flex-wrap justify-center gap-8">
                    {projects.map((project, index) => {
                        const row = Math.floor(index / 2) + 1;
                        const side = index % 2 == 0 ? 'left' : 'right';
                        const position = `row${row}${side}`
                        return (
                            <ProjectCard key={index} {...project}  position = {position}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Projects;