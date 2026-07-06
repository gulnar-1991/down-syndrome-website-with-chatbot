import { GENERAL_ELIGIBILITY } from "../data";
import { Award, Landmark, Wallet, HelpCircle } from "lucide-react";

export default function Eligibility() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Landmark className="w-6 h-6 text-[#E8734A]" />;
      case 1:
        return <Wallet className="w-6 h-6 text-[#4A7C59]" />;
      case 2:
        return <Award className="w-6 h-6 text-[#4A7C59]" />;
      case 3:
        return <HelpCircle className="w-6 h-6 text-[#E8734A]" />;
      default:
        return <Landmark className="w-6 h-6 text-[#4A7C59]" />;
    }
  };

  return (
    <section 
      className="pt-12 pb-28 md:pt-16 md:pb-32 bg-[#F3F0E9] text-[#1A2E1D]" 
      id="eligibility"
      aria-labelledby="eligibility-heading"
    >
      <div className="container-large">
        <div className="flex-halfsplit-layout gap-12 md:gap-24 items-start">
          
          {/* Left: General Criteria */}
          <div className="animation-slideup flex flex-col items-start gap-6 max-w-xl">
            <span className="section-label">Access & Funding</span>
            <h2 id="eligibility-heading" className="heading-style-h2 text-left">
              {GENERAL_ELIGIBILITY.title}
            </h2>
            <div className="line-divider mt-2" />
            <p className="text-size-large font-serif italic text-emerald-900 leading-relaxed font-light">
              {GENERAL_ELIGIBILITY.subtitle}
            </p>
            <p className="text-size-medium text-[#1A2E1D]/80 leading-relaxed font-light">
              {GENERAL_ELIGIBILITY.content}
            </p>
            <div className="p-4 rounded-xl bg-white/50 border border-[#1A2E1D]/5 text-left text-xs text-[#1A2E1D]/70 font-light mt-4">
              <strong>Need help with applications?</strong> Our navigation team is available to assist you in filling out OAP forms, organizing service estimates, or requesting medical code letters for SSAH and school-board integrations.
            </div>
          </div>

          {/* Right: Funding Blocks */}
          <div className="animation-slideup flex flex-col gap-6 w-full">
            {GENERAL_ELIGIBILITY.fundingOptions.map((f, idx) => (
              <div 
                key={f.title}
                className="p-6 rounded-xl bg-[#FAFAF7] hover:shadow-md transition-all duration-300 flex gap-4 text-left items-start border border-black/[0.03]"
              >
                <div className="p-3 bg-slate-100 rounded-lg shrink-0">
                  {getIcon(idx)}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-serif italic text-lg font-medium text-[#1A2E1D]">
                    {f.title}
                  </h3>
                  <p className="text-xs text-[#1A2E1D]/75 leading-relaxed font-light">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
