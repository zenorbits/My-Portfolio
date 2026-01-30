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
                scrub: 1.5,
            },
        });

        // Heading animation
        tl.fromTo(
            headRef.current,
            { y: -40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: "expo.out" }
        );

        // Animate cards with stagger
        tl.fromTo(
            [".first-left-card", ".first-right-card"],
            {
                opacity: 0,
                y: 60,
                scale: 0.95,
                filter: "blur(4px)",
                x: (i) => (i % 2 === 0 ? -80 : 80),
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                x: 0,
                duration: 1.2,
                ease: "power2.out",
                stagger: 0.5,
            },
            "-=0.5"
        );
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="w-full">
            <div className="text-white px-4 sm:px-6 md:px-10 py-10 w-full mt-8 md:mt-6 lg:mt-4" id='projects'>
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
                        title="PrevioQ"
                        category="Resource Library"
                        description="PrevioQ is a collaborative resource library built with the MERN stack and Redux. It allows students to post and download previous year question papers (PYQs), notes, and other study materials in one organized platform. With a responsive interface and scalable backend integration, PrevioQ makes sharing and accessing academic resources simple, fast, and engaging."
                        link="https://previo-q.vercel.app/"
                        status="Completed"
                    />
                    <ProjectCard
                        className="first-right-card"
                        title="StudyOrbit"
                        category="Study Platform"
                        description="StudyOrbit is a collaborative study resource platform powered by MERN and Redux. It allows users to upload, organize, and access study materials with ease. With polished UI/UX, GSAP transitions, and scalable backend integration, it creates an engaging and productive learning environment."
                        link="https://github.com/zenorbits/Study-Orbit"
                        status="In Progress"
                    />
                </div>
            </div>
        </section>
    );
};

export default Projects;