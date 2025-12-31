import React, { useRef } from "react";
import { FaShieldAlt, FaUsers, FaCogs, FaClock, FaStar, FaHandsHelping } from "react-icons/fa";
import ReasonCard from "./ReasonCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
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
    tl.fromTo(
      titleRef.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, ease: "power4.out", duration: 1 }
    );

    // Animate reason cards with stagger
    tl.fromTo(
      ".reason-card",
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
        stagger: 0.15, // cascade effect
      },
      "-=0.5" // overlap slightly with heading animation
    );
  }, { scope: sectionRef });

  const reasons = [
    {
      icon: FaShieldAlt,
      title: "Reliable & Secure",
      description:
        "We build future-proof applications with strong security practices and reliable performance.",
    },
    {
      icon: FaUsers,
      title: "Client-Centric Approach",
      description:
        "Your vision drives our process — we collaborate closely to deliver tailored solutions.",
    },
    {
      icon: FaCogs,
      title: "Cutting-Edge Tech",
      description:
        "We leverage modern frameworks like React, Node.js, and Tailwind to craft immersive experiences.",
    },
    {
      icon: FaClock,
      title: "Timely Delivery",
      description:
        "Efficiency and precision ensure projects are delivered on schedule without compromising quality.",
    },
    {
      icon: FaStar,
      title: "Cinematic Polish",
      description:
        "Every detail is refined with premium design and smooth animations for a cinematic feel.",
    },
    {
      icon: FaHandsHelping,
      title: "Continuous Support",
      description:
        "We provide ongoing maintenance, updates, and support to keep your applications running smoothly.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="whychooseus-cont bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] py-20 px-10"
      id="whychoseus"
    >
      {/* Title */}
      <div className="title mb-16 text-center" ref={titleRef}>
        <h1 className="text-indigo-400 text-4xl md:text-5xl font-extrabold tracking-wide">
          Why Choose Us
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          We combine technical mastery with cinematic design to deliver experiences that inspire confidence.
        </p>
      </div>

      {/* Reasons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {reasons.map((reason, index) => (
          <ReasonCard key={index} {...reason} className="reason-card" />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;