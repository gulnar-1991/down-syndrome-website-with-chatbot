import { ArrowUpRight, ShieldCheck, FileSpreadsheet, MessageSquare, Calendar } from "lucide-react";
import { PORTAL_URL } from "../data";

export default function Portal() {
  return (
    <section 
      className="pt-28 pb-12 md:pt-32 md:pb-16 bg-[#FAFAF7] text-[#1A2E1D] border-t border-[#1A2E1D]/10" 
      id="portal"
      aria-labelledby="portal-heading"
    >
      <div className="container-large">
        <div className="flex-halfsplit-layout gap-12 md:gap-24 items-center">
          
          {/* Left Side: Secure Features Grid */}
          <div className="animation-slideup flex flex-col items-start gap-8 max-w-xl">
            <span className="section-label text-[#1A2E1D]/70">MyChart Access</span>
            <h2 id="portal-heading" className="heading-style-h2 text-left text-[#1A2E1D]">
              Secure client records <br />
              at your fingertips <br />
              <span className="font-medium text-[#7AB87A] block mt-2">anytime, on any device.</span>
            </h2>
            <p className="text-size-medium text-[#1A2E1D]/80 leading-relaxed font-light">
              We leverage the Kids Health Alliance secure MyChart framework to protect your child's developmental records. Login to co-track developmental milestones, look over speech guidelines, and message your therapy team with ease.
            </p>
            
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="custom-button is-light-context leading-none text-xs uppercase tracking-wider font-medium mt-4 group hover-target"
            >
              <span className="button-text">Open MyChart Portal</span>
              <div className="button-circles-animation flex items-center">
                <div className="button-circle">
                  <ArrowUpRight className="w-3.5 h-3.5 text-current" />
                </div>
              </div>
              <div className="button-mask" />
            </a>
          </div>

          {/* Right Side: Visual Accent Panel */}
          <div className="animation-slideup grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            
            <div className="p-6 rounded-xl bg-white border border-[#1A2E1D]/10 hover:shadow-md transition-all duration-300 flex flex-col gap-4 text-left">
              <ShieldCheck className="w-8 h-8 text-[#E8734A]" />
              <h3 className="font-serif italic text-lg font-medium text-[#1A2E1D]">PHIPPA Encrypted</h3>
              <p className="text-xs text-[#1A2E1D]/75 font-light leading-relaxed">
                Adhering to strict Canadian healthcare records encryption standards for patient record security.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#1A2E1D]/10 hover:shadow-md transition-all duration-300 flex flex-col gap-4 text-left">
              <FileSpreadsheet className="w-8 h-8 text-[#7AB87A]" />
              <h3 className="font-serif italic text-lg font-medium text-[#1A2E1D]">Milestone Reports</h3>
              <p className="text-xs text-[#1A2E1D]/75 font-light leading-relaxed">
                Directly download weekly home session summaries, growth milestones, and speech-language assessments.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#1A2E1D]/10 hover:shadow-md transition-all duration-300 flex flex-col gap-4 text-left">
              <MessageSquare className="w-8 h-8 text-[#7AB87A]" />
              <h3 className="font-serif italic text-lg font-medium text-[#1A2E1D]">Team Threading</h3>
              <p className="text-xs text-[#1A2E1D]/75 font-light leading-relaxed">
                Connect your lead clinician with family physicians or pediatricians on single chat streams.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#1A2E1D]/10 hover:shadow-md transition-all duration-300 flex flex-col gap-4 text-left">
              <Calendar className="w-8 h-8 text-[#E8734A]" />
              <h3 className="font-serif italic text-lg font-medium text-[#1A2E1D]">Booking Control</h3>
              <p className="text-xs text-[#1A2E1D]/75 font-light leading-relaxed">
                Pre-book multi-disciplinary sessions or shift appointment slots with direct automated reminders.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
