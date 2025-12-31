import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';
import ProjectCard from './ProjectCard';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const headRef = useRef(null);
    const sectionRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "top 20%",
                scrub: 1.5, // smoother scroll link
            },
        });

        // Heading animation
        tl.fromTo(
            headRef.current,
            { y: -40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: "expo.out" }
        );

        // Animate all cards with stagger + smooth polish
        tl.fromTo(
            [".first-left-card", ".first-right-card", ".second-left-card", ".second-right-card"],
            {
                opacity: 0,
                y: 60,
                scale: 0.95,
                filter: "blur(4px)", // subtle blur at start
                x: (i) => (i % 2 === 0 ? -80 : 80), // alternate left/right
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                x: 0,
                duration: 1.2,
                ease: "power2.out",
                stagger: 0.5, // smooth cascade
            },
            "-=0.5" // overlap with heading
        );
    }, { scope: sectionRef });
    return (
        <section ref={sectionRef} className="w-full">
            <div className="text-white px-4 sm:px-6 md:px-10 py-10 w-full mt-8 md:mt-6 lg:mt-4">
                {/* Heading */}
                <div
                    className="heading mb-8 text-center md:text-left w-full flex items-center justify-center"
                    ref={headRef}
                >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-indigo-400">
                        My Projects
                    </h1>
                </div>

                {/* Card container */}
                <div className="cont flex flex-col md:flex-row flex-wrap gap-6 md:gap-8 justify-center md:justify-between text-white">
                    <ProjectCard
                        className="first-left-card"
                        title="ShopOrbit"
                        category="E-Commerce"
                        description="ShopOrbit is a full‑stack e‑commerce platform built with React, Tailwind, Express, and MongoDB. It offers smooth product browsing, cart management, and secure checkout, all wrapped in a responsive design. With GSAP‑powered animations and premium branding, it delivers a cinematic shopping experience that’s fast, scalable, and accessible."
                        link="https://github.com/pathaksanchit25-coder/shoporbits"
                        status="Completed"
                    />
                    <ProjectCard
                        className="first-right-card"
                        title="SongOrbit"
                        category="Music Streaming"
                        description="SongOrbit is a modern music streaming platform built with the MERN stack. It lets users explore tracks, stream seamlessly, and manage playlists with ease. Featuring GSAP‑powered transitions and a responsive design, it delivers a cinematic listening experience that feels smooth and immersive."
                        link="https://github.com/pathaksanchit25-coder/songorbit"
                        status="In Progress"
                    />
                    <ProjectCard
                        className="second-left-card"
                        title="TasteOrbit"
                        category="Food Discovery"
                        description="TasteOrbit is a food and restaurant discovery app crafted with React, Express, Tailwind, and MongoDB. Users can explore cuisines, view menus, and discover trending spots nearby. With a clean interface and GSAP‑enhanced visuals, it makes food exploration engaging, responsive, and delightful."
                        link="https://github.com/pathaksanchit25-coder/tasteorbit"
                        status="In Progress"
                    />
                    <ProjectCard
                        className="second-right-card"
                        title="WorkOrbit"
                        category="Productivity Platform"
                        description="WorkOrbit is a productivity and project management tool built with the MERN stack. It provides task tracking, team collaboration, and cinematic dashboards powered by GSAP animations. Designed for scalability and accessibility, it helps teams stay organized and efficient in a visually polished environment."
                        link="https://github.com/pathaksanchit25-coder/workorbit"
                        status="Completed"
                    />
                </div>
            </div>
        </section>
    );
};

export default Projects;