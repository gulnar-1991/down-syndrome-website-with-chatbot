import React from "react";
import { CLINIC_NAME, EMAIL_CONTACT } from "../data";
import { ArrowUp, Instagram, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="bg-[#1A2E1D] text-[#FAFAF7] px-8 md:px-16 py-20 md:py-24"
      id="footer"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
        {/* Left column */}
        <div className="flex flex-col justify-between gap-16 md:min-h-[260px]">
          <h3 className="font-serif italic text-3xl md:text-4xl font-light text-[#7AB87A] leading-none">
            {CLINIC_NAME}
          </h3>

          <p className="text-sm md:text-base text-[#FAFAF7] font-light max-w-md leading-relaxed -mt-6">
            Where every child's journey is celebrated. Multidisciplinary
            healthcare pathways built for pediatric developmental milestones in
            Canada.
          </p>

          <div className="flex gap-7 text-[#FAFAF7] mt-auto">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-70 transition-opacity"
            >
              <Instagram className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:opacity-70 transition-opacity"
            >
              <Linkedin className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:opacity-70 transition-opacity"
            >
              <Facebook className="w-5 h-5" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col justify-between gap-16 md:items-end md:min-h-[260px]">
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-widest font-semibold text-white md:justify-end">
            <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
            <a href="#programs" className="hover:opacity-70 transition-opacity">Programs</a>
            <a href="#eligibility" className="hover:opacity-70 transition-opacity">Eligibility</a>
            <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
            <a href={`mailto:${EMAIL_CONTACT}`} className="hover:opacity-70 transition-opacity">Support</a>
          </nav>

          <div className="flex items-center justify-between md:justify-end gap-8 w-full md:w-auto mt-auto">
            <p className="text-sm text-[#FAFAF7] font-light leading-none">
              © {currentYear} {CLINIC_NAME}. All rights reserved.
            </p>
            <a
              href="#"
              onClick={handleBackToTop}
              aria-label="Back to top"
              className="text-[#FAFAF7] hover:opacity-70 transition-opacity"
            >
              <ArrowUp className="w-5 h-5" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
