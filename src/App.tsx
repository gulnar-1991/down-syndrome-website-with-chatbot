import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import About from "./components/About";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Portal from "./components/Portal";
import HowItWorks from "./components/HowItWorks";
import Eligibility from "./components/Eligibility";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

export default function App() {
  const [isHeroDarkSection, setIsHeroDarkSection] = useState(true);

  useEffect(() => {
    // 1. Intersection Observer for Slideup Scroll animations (IX2 system replicate)
    const slideupElements = document.querySelectorAll(".animation-slideup");
    
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.12
    };

    const slideupObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          slideupObserver.unobserve(entry.target); // Trigger once
        }
      });
    }, observerOptions);

    slideupElements.forEach((el) => {
      slideupObserver.observe(el);
    });

    // 2. Intersection Observer to detect if we are inside a dark section
    // to dynamically transition the floating Navbar's default text/arrow colors.
    // Track intersection PER section in a Set so the final "is any dark section
    // visible" state is computed from all observed entries — fixes a bug where
    // entries.forEach overwrote each other and the last non-intersecting one won.
    const darkSections = document.querySelectorAll("#hero, #testimonials, #portal, #footer");
    const visibleDarkSections = new Set<Element>();

    const darkSectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleDarkSections.add(entry.target);
          } else {
            visibleDarkSections.delete(entry.target);
          }
        });
        setIsHeroDarkSection(visibleDarkSections.size > 0);
      },
      {
        root: null,
        rootMargin: "-80px 0px 0px 0px", // Offset by roughly Navbar height
        threshold: 0.01,
      }
    );

    darkSections.forEach((section) => {
      darkSectionObserver.observe(section);
    });

    return () => {
      slideupObserver.disconnect();
      darkSectionObserver.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FAFAF7] text-[#1A2E1D] overflow-x-hidden font-sans">
      {/* 1. Preloader Overlay */}
      <Loader />

      {/* 2. Fluid Custom Cursor */}
      <Cursor />

      {/* 3. Sticky Blurry Navbar */}
      <Navbar isHeroDarkSection={isHeroDarkSection} />

      {/* 4. Section Blocks */}
      <main id="main-content">
        {/* Section 1: Hero split screen with Safari inline background loops */}
        <Hero />

        {/* Section 2: Clinical tagline introduction */}
        <Intro />

        {/* Section 3: Professional specialized coordinates */}
        <About />

        {/* Section 4: Hover-active clinical tracks (cta38_component) */}
        <Services />

        {/* Section 5: Responsive Parent testimonies (Dark Section) */}
        <Testimonial />

        {/* Section 6: Secure MyChart portal pathways (Dark Section) */}
        <Portal />

        {/* Section 7: Ontarian onboarding flow timelines */}
        <HowItWorks />

        {/* Section 8: Regional funding eligibility summaries */}
        <Eligibility />

        {/* Section 9: Locations addresses, hours, and direct contact intake */}
        <Contact />
      </main>

      {/* 5. Minimal footer with Land acknowledgement and Emergency instructions */}
      <Footer />

      {/* 6. Customized Voiceflow Chatbot */}
      <Chatbot />
    </div>
  );
}
