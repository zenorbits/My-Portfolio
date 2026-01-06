import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Stairs = ({ children }) => {
  const stairAnimate = useRef(null);
  const appRef = useRef(null);
  const tlRef = useRef(null);
  const routeLocation = useLocation().pathname;

  // Pointer reference
  const pointerRef = useRef(null);

  // GSAP stair animation
  useGSAP(() => {
    if (tlRef.current) {
      tlRef.current.kill();
    }

    gsap.killTweensOf(".stair");
    gsap.killTweensOf(".stair-text");
    gsap.killTweensOf(appRef.current);

    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 0.5 }
    });
    tlRef.current = tl;

    // Hide pointer at start
    gsap.set(pointerRef.current, { autoAlpha: 0 });

    tl.set(stairAnimate.current, { autoAlpha: 1 });

    tl.fromTo(".stair", { height: 0 }, { height: "100%", stagger: 0.07 });
    tl.fromTo(
      ".stair-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.07 },
      "-=0.4"
    );

    tl.to(".stair", { y: "100%", stagger: 0.07 });
    tl.to(".stair-text", { opacity: 0, y: 50, stagger: 0.07 }, "-=0.6");

    tl.set(stairAnimate.current, { autoAlpha: 0 });

    tl.add(() => {
      gsap.set(".stair", { y: "0%", height: "100%" });
      gsap.set(".stair-text", { opacity: 0, y: 0 });
    });

    tl.from(appRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8
    }, "-=1");

    // Fade in pointer AFTER transition is done
    tl.to(pointerRef.current, { autoAlpha: 1, duration: 0.5 }, "-=0.2");
  }, [routeLocation]);

  // Pointer animation
  useEffect(() => {
    if (!pointerRef.current) return;

    const xTo = gsap.quickTo(pointerRef.current, "x", {
      duration: 0.8,
      ease: "back.out(1.4)"
    });
    const yTo = gsap.quickTo(pointerRef.current, "y", {
      duration: 0.8,
      ease: "back.out(1.4)"
    });

    const movePointer = (e) => {
      xTo(e.clientX - pointerRef.current.offsetWidth / 2);
      yTo(e.clientY - pointerRef.current.offsetHeight / 2);
    };

    window.addEventListener("mousemove", movePointer);

    return () => {
      window.removeEventListener("mousemove", movePointer);
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] min-h-screen">
      {/* Pointer (hidden until transition ends) */}
      <div
        ref={pointerRef}
        className="pointer fixed h-6 w-6 rounded-full bg-white z-50 pointer-events-none lg:flex hidden"
        style={{ transform: "translate(0px, 0px)" }}
      ></div>

      {/* Stair transition overlay */}
      <div
        className="transition-anim fixed inset-0 z-40 w-screen h-screen flex pointer-events-none text-white"
        ref={stairAnimate}
      >
        {["Z", "E", "N", "O", "R", "B", "I", "T", "S"].map((letter, i) => (
          <div
            key={i}
            className="stair flex-1 h-full bg-gradient-to-tr from-blue-900 via-indigo-900 to-cyan-900 flex items-center justify-center"
          >
            <span className="stair-text font-extrabold text-5xl tracking-widest drop-shadow-lg">
              {letter}
            </span>
          </div>
        ))}
      </div>

      {/* App content */}
      <div ref={appRef}>
        {children}
      </div>
    </div>
  );
};

export default Stairs;