import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Stairs from "./common/Stairs.jsx";

// Lenis + GSAP
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Root wrapper to initialize Lenis
const Root = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8, // increase duration → slower glide
      smooth: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothTouch: true,
      touchMultiplier: 0.8, // lower multiplier → slower touch scroll
    });;


    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    window.lenis = lenis;


    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <StrictMode>
        <Stairs>
          <App />
        </Stairs>
      </StrictMode>
    </BrowserRouter>
  );
};

createRoot(document.getElementById("root")).render(<Root />);