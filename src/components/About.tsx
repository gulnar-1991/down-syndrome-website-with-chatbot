import React from "react";
import { ArrowRight } from "lucide-react";

export default function About() {
  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#programs");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      className="padding-section-large bg-[#FAFAF7] text-[#1A2E1D] pt-0" 
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="container-large">
        <div className="flex-halfsplit-layout gap-12 md:gap-24 items-center">
          
          {/* Left Column: Portrait Video / Interactive Aesthetic */}
          <div className="animation-slideup order-2 md:order-1 flex justify-center">
            <div className="video-wrap-vertical grayscale-[20%] hover:grayscale-0 transition-all duration-700">
              
              {/* Dark Gradient Tint Overlay */}
              <div 
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to bottom, rgba(74, 124, 89, 0.1) 0%, rgba(26, 46, 29, 0.4) 100%)",
                  zIndex: 2,
                  pointerEvents: "none"
                }}
              />

              {/* Fallback image */}
              <div 
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=900')",
                  position: "absolute",
                  inset: "-100%",
                  objectFit: "cover",
                  backgroundSize: "cover",
                  backgroundPosition: "50%",
                  width: "100%",
                  height: "100%",
                  margin: "auto",
                  zIndex: 0
                }}
              />

              {/* Autoplay Portrait Looping Video */}
              <video
                autoPlay
                muted
                loop
                playsInline
                className="about-portrait-video"
                style={{
                  objectFit: "cover",
                  backgroundPosition: "50%",
                  backgroundSize: "cover",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  inset: 0,
                  zIndex: 1,
                }}
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-mother-and-son-painting-together-at-home-43093-large.mp4" type="video/mp4" />
                <source src="https://assets.mixkit.co/videos/preview/mixkit-little-girl-putting-together-a-puzzle-with-mother-42525-large.mp4" type="video/mp4" />
              </video>
              
              {/* Absolute label overlay */}
              <div className="absolute bottom-6 left-6 z-10 text-white select-none">
                <p className="font-serif italic text-2xl font-light">Ottawa Clinic</p>
                <p className="text-[9px] uppercase tracking-widest opacity-70 font-sans mt-1">Sensory-Friendly Space</p>
              </div>

            </div>
          </div>

          {/* Right Column: Information content */}
          <div className="animation-slideup order-1 md:order-2 flex flex-col items-start gap-6 max-w-xl">
            <span className="section-label">Hand in Hand</span>
            <h2 id="about-heading" className="heading-style-h2 text-left">
              One connected team, <br />
              carrying the load <br />
              <span className="font-medium text-emerald-950 block mt-2">with your family.</span>
            </h2>
            <div className="line-divider mt-2" />
            <p className="text-size-medium text-[#1A2E1D]/80 leading-relaxed font-light">
              Coordinating multiple medical and cognitive appointments shouldn't be your second job. We replace fragmented consultations with a collaborative loop. Our pediatric therapists reside under one roof, analyzing daily outcomes as one minds-and-hands group to constantly iterate goals.
            </p>
            <p className="text-size-medium text-[#1A2E1D]/80 leading-relaxed font-light mt-1">
              From secure documentation in Kids Health Alliance systems to direct partnerships with Ottawa Valley school districts, we construct unified, evidence-based environments where children feel validated and capable.
            </p>
 
            <a
              href="#programs"
              onClick={handleCtaClick}
              className="custom-button is-light-context leading-none text-xs uppercase tracking-wider font-medium group mt-6"
            >
              <span className="button-text">Discover Our Programs</span>
              <div className="button-circles-animation flex items-center">
                <div className="button-circle">
                  <ArrowRight className="w-3.5 h-3.5 text-current" />
                </div>
              </div>
              <div className="button-mask" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
