import { PROGRAM_STEPS } from "../data";

export default function HowItWorks() {
  return (
    <section
      className="py-12 md:py-16 bg-[#FAFAF7] text-[#1A2E1D] relative overflow-hidden isolate"
      id="programs"
      aria-labelledby="programs-heading"
    >
      {/* Subtle grass video — sits beneath a heavy cream overlay so it feels like
          ambient texture rather than a separate hero. Crisp scaling via
          object-cover + 4K-friendly CSS filters for a polished look. */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="howitworks-bg-video absolute inset-0 z-0 pointer-events-none"
        style={{
          width: "100%",
          height: "100%",
          minWidth: "100%",
          minHeight: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          filter: "saturate(1.15) contrast(1.05) brightness(1.02)",
          transform: "translateZ(0)",
          willChange: "transform",
        }}
        aria-hidden="true"
      >
        <source src="/grass.mp4" type="video/mp4" />
      </video>

      {/* Cream wash to keep the section visually consistent and text readable.
          Soft top/bottom fades blend the video into the neighboring sections. */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(250,250,247,1) 0%, rgba(250,250,247,0.55) 10%, rgba(250,250,247,0.35) 50%, rgba(250,250,247,0.6) 90%, rgba(250,250,247,1) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Very faint sage tint to color-grade the green grass into the brand palette */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none mix-blend-multiply opacity-10"
        style={{ background: "linear-gradient(180deg, #EFEFE3 0%, #E8EDE0 100%)" }}
        aria-hidden="true"
      />

      <div className="container-large relative z-[2]">
        <div className="flex-halfsplit-layout gap-12 mb-10 items-end">
          <div className="animation-slideup">
            <span className="section-label">Onboarding Loop</span>
            <h2 id="programs-heading" className="heading-style-h2 text-left mt-2">
              Our 4-step path <br />
              to unified, active <br />
              <span className="font-medium text-emerald-950 block mt-2">milestone therapy.</span>
            </h2>
          </div>
          <div className="animation-slideup flex flex-col items-start gap-4 max-w-sm pt-4 md:pt-12">
            <p className="text-size-medium text-[#1A2E1D]/70 font-light leading-relaxed">
              We focus on building clarity and warmth from the initial matching consult onwards. This is how we support your child's milestones.
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {PROGRAM_STEPS.map((step, idx) => (
            <div
              key={step.id}
              className="animation-slideup flex flex-col items-start gap-4 p-6 rounded-xl border border-[#1A2E1D]/15 bg-[#FAFAF7]/88 backdrop-blur-md shadow-[0_8px_30px_rgba(26,46,29,0.08)] hover:border-[#1A2E1D]/30 hover:bg-[#FAFAF7]/96 transition-all duration-300 relative group"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Highlight number */}
              <div className="font-serif italic text-4xl text-[#E8734A] opacity-80 font-medium group-hover:scale-105 transition-transform duration-300">
                {step.stepNumber}
              </div>
              <div className="line-divider mt-1" />
              <h3 className="font-serif italic text-xl font-medium text-[#1A2E1D]">
                {step.title}
              </h3>
              <p className="text-xs text-[#1A2E1D]/80 leading-relaxed font-light text-left">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
