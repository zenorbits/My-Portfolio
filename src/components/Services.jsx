import React, { useRef } from "react";
import { FaCode, FaMobileAlt, FaServer, FaTools, FaLayerGroup, FaPlug } from "react-icons/fa";
import ServiceCard from "./ServiceCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: 2,
      },
    });

    // Animate heading
    tl.from(titleRef.current, {
      y: -40,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });

    // Animate service cards with stagger
    tl.fromTo(
  ".service-card",
  {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  {
    opacity: 1,
    y: 0,
    scale: 1,
    ease: "power3.out",
    stagger: 0.25, // cascade effect
  },
  "-=0.5" // overlap slightly with heading animation
);
  }, { scope: sectionRef });

  const services = [
    {
      icon: FaCode,
      title: "Frontend Development",
      description:
        "Crafting cinematic, responsive interfaces with React.js, Tailwind CSS, and modern animation libraries.",
    },
    {
      icon: FaServer,
      title: "Backend Development",
      description:
        "Building scalable APIs and server-side logic with Node.js, Express, and MongoDB.",
    },
    {
      icon: FaMobileAlt,
      title: "Responsive Web Design",
      description:
        "Ensuring seamless experiences across devices with mobile-first, future-proof design principles.",
    },
    {
      icon: FaTools,
      title: "Performance & Optimization",
      description:
        "Refactoring code, improving accessibility, and optimizing apps for speed, scalability, and reliability.",
    },
    {
      icon: FaLayerGroup,
      title: "Full-Stack Development",
      description:
        "Delivering complete end-to-end solutions by combining frontend, backend, and database expertise.",
    },
    {
      icon: FaPlug,
      title: "API Integration",
      description:
        "Connecting third-party services, payment gateways, and external APIs to enhance functionality and user experience.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="services-cont bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] py-20 px-10"
      id="services"
    >
      {/* Title */}
      <div className="title mb-16 text-center" ref={titleRef}>
        <h1 className="text-indigo-400 text-4xl md:text-5xl font-extrabold tracking-wide">
          Services Provided
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          I focus on building reliable, cinematic web experiences with technical precision and future-proof design.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} className="service-card" />
        ))}
      </div>
    </section>
  );
};

export default Services;