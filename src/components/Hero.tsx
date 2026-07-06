import React, { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Attempt playback when DOM hydrates
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Playback interrupted or auto-play prevented:", err);
      });
    }
  }, []);

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#intro");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="home-hero flex items-center justify-center relative select-none bg-emerald-950 font-sans" id="hero">
      <div className="container-large w-full">
        <div className="header_hero_content">
          
          {/* Stacked Layout - Middle-Left aligned inside container */}
          <div className="home_hero-headline max-w-2xl text-left animation-slideup visible flex flex-col justify-center gap-8">
            <h1 className="heading-style-h1-super text-white drop-shadow-sm font-medium">
              Every child deserves <br />
              <span className="block mt-4 font-medium">to thrive.</span>
            </h1>

            {/* Text Block & CTA stacked neatly below the heading */}
            <div className="home_hero_text_block flex flex-col items-start gap-6 max-w-md text-left">
              <div className="line-divider is-alternate" />
              <p className="text-size-medium text-white/90 leading-relaxed font-medium">
                Specialized support for children with Down syndrome, autism, and complex developmental needs. One connected team. One care plan. Built around your child.
              </p>
              
              {/* Custom CTA Action - Standard Style */}
              <a
                href="#about"
                className="custom-button is-dark-context leading-none text-xs uppercase tracking-wider font-medium group mt-4 hover-target"
                id="hero-cta-button"
              >
                <span className="button-text">Begin Here</span>
                <div className="button-circles-animation flex items-center">
                  <div className="button-circle">
                    <ArrowUpRight className="w-3.5 h-3.5 text-current transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
                <div className="button-mask" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Safari-Optimized Absolute Background Video Wrapper */}
      <div 
        className="header_background-video-wrapper-vb" 
        id="video-bg-wrapper"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden"
        }}
      >
        {/* Dark Gradient Overlay for optimal readability */}
        <div 
          className="video-home-overlay-layer" 
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(26,46,29,0.3) 0%, rgba(26,46,29,0.6) 100%)",
            zIndex: 1
          }}
        />

        {/* Failover static meadow background */}
        <div
          id="video-fallback"
          className="hero-fallback-bg"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&q=80&w=1920')",
            position: "absolute",
            inset: 0,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />

        {/* Dual implementation video play */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="hero-bg-video"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            height: "100%",
            position: "absolute",
            inset: 0,
            zIndex: 0,
            filter: "brightness(1.15)"
          }}
        >
          {/* Static asset served from /public — works on Vite dev, Vercel, any static host */}
          <source src="/brighthorizon-hero.mp4" type="video/mp4" />
        </video>
      </div>
    </header>
  );
}
