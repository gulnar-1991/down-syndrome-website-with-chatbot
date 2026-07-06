import { CLINIC_NAME, FOCUS_TEXT } from "../data";

export default function Intro() {
  return (
    <section 
      className="padding-section-large bg-[#FAFAF7] text-[#1A2E1D]" 
      id="intro"
      aria-labelledby="intro-heading"
    >
      <div className="container-large">
        <div className="flex-halfsplit-layout items-center">
          
          {/* Left Column Label */}
          <div className="animation-slideup">
            <span className="section-label block mb-4">Who We Are</span>
            <h2 id="intro-heading" className="heading-style-h2 text-left max-w-lg">
              A holistic space <br />
              where milestones are <br />
              <span className="font-medium text-emerald-900 block mt-2">celebrated daily.</span>
            </h2>
          </div>

          {/* Right Column Content */}
          <div className="animation-slideup flex flex-col items-start gap-6 max-w-md md:pl-8 mt-6 md:mt-0">
            <div className="line-divider" />
            <p className="text-size-large font-serif italic text-emerald-950">
              "{FOCUS_TEXT}"
            </p>
            <p className="text-size-medium text-[#1A2E1D]/80 leading-relaxed font-light">
              At {CLINIC_NAME}, we believe clinical excellence meets its true potential when infused with safety, playfulness, and family empowerment. Our mission is to integrate clinical services—from physical guidance to expressive speech—into a warm environment designed specifically for pediatric comfort.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
