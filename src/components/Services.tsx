import React, { useState } from "react";
import { createPortal } from "react-dom";
import { SERVICES } from "../data";
import { Service } from "../types";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function Services() {
  const [activeService, setActiveService] = useState<Service | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    // Small offset so the popup sits just below-right of the cursor — close enough
    // to feel attached, far enough not to flicker under the pointer itself.
    setMousePos({
      x: e.clientX + 16,
      y: e.clientY + 16,
    });
  };

  return (
    <section 
      className="padding-section-large bg-[#FAFAF7] text-[#1A2E1D] border-t border-[#1A2E1D]/5" 
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="container-large">
        <div className="flex-halfsplit-layout gap-12 mb-16 items-start">
          <div className="animation-slideup">
            <span className="section-label">Clinical Tracks</span>
            <h2 id="services-heading" className="heading-style-h2 text-left mt-2">
              Structured therapies <br />
              infused with <br />
              <span className="font-medium text-emerald-950 italic">unconditional support.</span>
            </h2>
          </div>
          <div className="animation-slideup flex flex-col items-start gap-4 max-w-md pt-5 md:pt-10">
            <p className="text-size-medium text-[#1A2E1D]/70 font-light">
              We coordinate our services to address cognitive and motor delays collectively. Discover our main core pediatric care and navigation specialties.
            </p>
          </div>
        </div>

        {/* Services List (cta38_component) */}
        <div 
          className="services-list relative mt-12 animation-slideup"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setActiveService(null)}
          id="services-list-container"
          aria-label="Pediatric Care Programs List"
        >
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="service-row flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-[#1A2E1D]/10 first:border-t hover-target cursor-none"
              onMouseEnter={() => setActiveService(service)}
              role="button"
              tabIndex={0}
              aria-expanded={activeService?.id === service.id}
              onClick={() => {
                // Toggle open state on mobile/clicks
                setActiveService(activeService?.id === service.id ? null : service);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveService(activeService?.id === service.id ? null : service);
                }
              }}
            >
              {/* Left Segment: Number + Clinical Focus Name */}
              <div className="flex items-center gap-6 md:gap-12 text-left">
                <span className="font-mono text-xs opacity-40 font-medium">
                  {`0${SERVICES.indexOf(service) + 1}`}
                </span>
                <h3 className="heading-style-h4-sans font-serif italic text-2xl md:text-3xl leading-none font-medium">
                  {service.name}
                </h3>
              </div>

              {/* Right Segment: Short Description + Interactive Circle Indicator */}
              <div className="flex items-center justify-between md:justify-end gap-6 mt-4 md:mt-0 text-left w-full md:w-auto">
                <p className="text-xs md:text-sm opacity-70 font-light max-w-sm">
                  {service.shortDescription}
                </p>
                <div className="service-arrow border-[#1A2E1D]/30">
                  <ArrowUpRight className="w-4 h-4 text-current" />
                </div>
              </div>

              {/* Mobile details (Accordion fallback) */}
              {activeService?.id === service.id && (
                <div className="flex md:hidden flex-col gap-4 text-left w-full mt-6 bg-[#1A2E1D] text-white p-6 rounded-xl animate-fadeIn">
                  <p className="text-xs text-[#E8734A] uppercase tracking-widest font-semibold">Clinical Pathway</p>
                  <p className="text-sm font-light leading-relaxed">{service.fullDescription}</p>
                  <div className="h-[0.5px] bg-white/20 my-2" />
                  <ul className="flex flex-col gap-2">
                    {service.bulletPoints.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-xs font-light text-white/95">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#7AB87A] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          {/* Desktop Floating Diagnostic/Popup Box (Exact Q Psychology Pattern) */}
          {activeService && typeof document !== "undefined" && createPortal((() => {
            // Render via portal to document.body so an ancestor `transform`
            // (animation-slideup) doesn't hijack `position: fixed`. Clamp inside
            // viewport so the card never overflows on right/bottom edges.
            const POPUP_W = 320;
            const POPUP_H = 380;
            const left = Math.min(mousePos.x, window.innerWidth - POPUP_W - 16);
            const top = Math.min(mousePos.y, window.innerHeight - POPUP_H - 16);
            return (
              <div
                className="service-popup hidden md:block select-none"
                style={{
                  position: "fixed",
                  left: `${left}px`,
                  top: `${top}px`,
                  width: `${POPUP_W}px`,
                  pointerEvents: "none",
                  zIndex: 80,
                }}
                aria-hidden="true"
              >
                <div className="flex flex-col gap-3 p-4 rounded-xl bg-[#1A2E1D] shadow-2xl border border-white/10">
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-emerald-900/20">
                    <img
                      src={activeService.imageUrl}
                      alt={activeService.name}
                      className="object-cover w-full h-full scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E1D] via-transparent to-transparent opacity-60" />
                  </div>

                  <h4 className="font-serif italic text-lg text-[#E8734A] border-b border-white/10 pb-2">
                    {activeService.name}
                  </h4>

                  <p className="text-[11px] leading-relaxed text-white/80 font-light mb-1">
                    {activeService.fullDescription}
                  </p>

                  <div className="flex flex-col gap-1.5 pt-1">
                    {activeService.bulletPoints.map((bullet) => (
                      <div key={bullet} className="flex items-center gap-1.5 text-[10px] text-white">
                        <CheckCircle2 className="w-3 h-3 text-[#7AB87A]" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })(), document.body)}
        </div>
      </div>
    </section>
  );
}
