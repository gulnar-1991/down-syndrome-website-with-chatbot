import { useState } from "react";
import { TESTIMONIALS } from "../data";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonial() {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleNext = () => {
    setActiveIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  return (
    <section 
      className="padding-section-large bg-[#1a2e1d] text-[#fafaf7]" 
      id="testimonials"
      aria-labelledby="testimonial-heading"
      style={{ backgroundColor: "#1A2E1D", color: "#FAFAF7" }}
    >
      <div className="container-large">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          <span 
            className="section-label mb-6 block"
            style={{ color: "#7AB87A" }}
          >
            Patient Stories
          </span>
          <Quote className="w-12 h-12 mb-8" style={{ color: "rgba(232, 115, 74, 0.75)" }} />
          
          <h2 id="testimonial-heading" className="sr-only">Parent Testimonials</h2>

          {/* Testimonial Active Display Card */}
          <div className="min-h-[180px] md:min-h-[140px] flex items-center justify-center">
            <p 
              className="font-serif italic text-lg sm:text-2xl md:text-3xl leading-relaxed font-light duration-500 transition-all"
              style={{ color: "#FAFAF7" }}
            >
              "{TESTIMONIALS[activeIdx].quote}"
            </p>
          </div>

          {/* Divider line style */}
          <div className="line-divider is-alternate my-8 max-w-sm mx-auto" />

          {/* User Meta Details */}
          <div className="mb-8">
            <p 
              className="text-sm font-medium tracking-wider"
              style={{ color: "#FFFFFF" }}
            >
              {TESTIMONIALS[activeIdx].author}
            </p>
            <p 
              className="text-xs mt-1 font-light uppercase tracking-widest"
              style={{ color: "rgba(122, 184, 122, 0.95)" }}
            >
              {TESTIMONIALS[activeIdx].role} • {TESTIMONIALS[activeIdx].relationship}
            </p>
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center gap-4 justify-center">
            <button
              onClick={handlePrev}
              className="w-10 h-10 border rounded-full flex items-center justify-center transition-all duration-300"
              style={{ 
                borderColor: "rgba(255, 255, 255, 0.25)",
                color: "#FFFFFF"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#FAFAF7";
                e.currentTarget.style.color = "#1A2E1D";
                e.currentTarget.style.borderColor = "#FAFAF7";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#FFFFFF";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.25)";
              }}
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-4 h-4 cursor-pointer" />
            </button>
            <span 
              className="text-xs font-mono tracking-widest"
              style={{ color: "rgba(250, 250, 247, 0.65)" }}
            >
              {`0${activeIdx + 1} / 0${TESTIMONIALS.length}`}
            </span>
            <button
              onClick={handleNext}
              className="w-10 h-10 border rounded-full flex items-center justify-center transition-all duration-300"
              style={{ 
                borderColor: "rgba(255, 255, 255, 0.25)",
                color: "#FFFFFF"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#FAFAF7";
                e.currentTarget.style.color = "#1A2E1D";
                e.currentTarget.style.borderColor = "#FAFAF7";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#FFFFFF";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.25)";
              }}
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-4 h-4 cursor-pointer" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
