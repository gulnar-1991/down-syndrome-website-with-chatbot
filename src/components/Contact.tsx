import React, { useState } from "react";
import { CLINIC_LOCATIONS, EMAIL_CONTACT, PHONE_CONTACT } from "../data";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    parentName: "",
    childAge: "",
    email: "",
    phone: "",
    clinicalFocus: "general",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate professional form handling
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        parentName: "",
        childAge: "",
        email: "",
        phone: "",
        clinicalFocus: "general",
        message: ""
      });
    }, 4000);
  };

  const formsInputClass = "w-full p-4 rounded-xl border border-[#1A2E1D]/15 bg-white text-xs focus:outline-none focus:border-[#4A7C59] focus:ring-1 focus:ring-[#4A7C59] transition-all default-appearance-none";

  return (
    <section 
      className="padding-section-large bg-[#FAFAF7] text-[#1A2E1D]" 
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="container-large">
        <div className="flex-halfsplit-layout gap-12 md:gap-24 items-start">
          
          {/* Left Column: Direct info & Clinic Locations list */}
          <div className="animation-slideup flex flex-col gap-8 max-w-xl w-full text-left">
            <span className="section-label">Get in Touch</span>
            <h2 id="contact-heading" className="heading-style-h2 text-left">
              Speak with a lead <br />
              paediatric <br />
              <span className="font-medium text-emerald-950 block mt-2">care coordinator.</span>
            </h2>
            
            <p className="text-size-medium text-[#1A2E1D]/80 leading-relaxed font-light mt-2">
              Have questions about OAP core clinical funding, milestone evaluations, or active program waitlist lengths in Ottawa? Complete our secure discovery intake or access our office direct details.
            </p>

            <div className="flex flex-col gap-4 mt-4">
              <a href={`tel:${PHONE_CONTACT}`} className="flex items-center gap-4 text-sm font-medium hover:text-[#4A7C59] transition-colors">
                <div className="p-3 bg-slate-100 rounded-full shrink-0">
                  <Phone className="w-4 h-4 text-[#4A7C59]" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-medium font-sans leading-none mb-1">Clinic Phone</p>
                  <span className="text-sm font-medium">{PHONE_CONTACT}</span>
                </div>
              </a>

              <a href={`mailto:${EMAIL_CONTACT}`} className="flex items-center gap-4 text-sm font-medium hover:text-[#4A7C59] transition-colors">
                <div className="p-3 bg-slate-100 rounded-full shrink-0">
                  <Mail className="w-4 h-4 text-[#4A7C59]" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-medium font-sans leading-none mb-1">Administrative Email</p>
                  <span className="text-sm font-medium">{EMAIL_CONTACT}</span>
                </div>
              </a>
            </div>

            {/* Clinic Locations List (Location row pattern) */}
            <div className="mt-8 border-t border-[#1A2E1D]/10 pt-8" id="locations-list">
              <h3 className="section-label block mb-6">Our Ottawa Branches</h3>
              
              {CLINIC_LOCATIONS.map((loc) => (
                <div key={loc.id} className="location-row text-left">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="heading-style-h4-sans text-base font-medium text-[#1A2E1D]">
                        {loc.name}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 font-sans flex items-center gap-1.5 min-h-[16px]">
                        <MapPin className="w-3.5 h-3.5 text-[#E8734A] shrink-0" />
                        <span>{loc.address}, {loc.city}, {loc.province} {loc.postalCode}</span>
                      </p>
                    </div>
                  </div>
                  <div className="location_address-flex mt-4">
                    <span className="text-[10px] text-slate-400 font-sans tracking-wide leading-relaxed">
                      {loc.hours}
                    </span>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(loc.address + " " + loc.city)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-wider font-medium text-[#4A7C59] hover:underline flex items-center gap-1 shrink-0"
                    >
                      <span>Directions</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Consult Form */}
          <div className="animation-slideup w-full p-8 rounded-2xl bg-[#F3F0E9] border border-[#1A2E1D]/5">
            <h3 className="font-serif italic text-2xl font-light text-[#1A2E1D] mb-2 text-left">
              Discovery Intake Form
            </h3>
            <p className="text-xs text-[#1A2E1D]/70 font-light text-left mb-6">
              Complete these secure details to help us prepare your discovery call discussion.
            </p>

            {submitted ? (
              <div className="p-8 rounded-xl bg-green-50 text-emerald-950 border border-emerald-200 text-center flex flex-col items-center gap-4 animate-fadeIn">
                <CheckCircle className="w-12 h-12 text-emerald-600" />
                <h4 className="font-serif italic text-xl font-medium">Thank You</h4>
                <p className="text-xs text-emerald-900/80 leading-relaxed font-light max-w-xs mx-auto">
                  Your details were secured. Our pediatric intake coordinator will match your profile and reach out by phone or mail within 24 working hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                
                <div>
                  <label htmlFor="parentName" className="text-[10px] text-slate-500 uppercase tracking-widest font-medium font-sans block mb-1.5">
                    Parent / Guardian Name
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    required
                    placeholder="E.g. Nathalie Mercier"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className={formsInputClass}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="text-[10px] text-slate-500 uppercase tracking-widest font-medium font-sans block mb-1.5">
                      Phone Coordinate
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="613-555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={formsInputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="childAge" className="text-[10px] text-slate-500 uppercase tracking-widest font-medium font-sans block mb-1.5">
                      Child's Current Age
                    </label>
                    <input
                      type="text"
                      id="childAge"
                      required
                      placeholder="E.g. 5"
                      value={formData.childAge}
                      onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                      className={formsInputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="text-[10px] text-slate-500 uppercase tracking-widest font-medium font-sans block mb-1.5">
                    Secure Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="nathalie@domain.ca"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={formsInputClass}
                  />
                </div>

                <div>
                  <label htmlFor="clinicalFocus" className="text-[10px] text-slate-500 uppercase tracking-widest font-medium font-sans block mb-1.5">
                    Primary Development Focus
                  </label>
                  <select
                    id="clinicalFocus"
                    value={formData.clinicalFocus}
                    onChange={(e) => setFormData({ ...formData, clinicalFocus: e.target.value })}
                    className="w-full p-4 rounded-xl border border-[#1A2E1D]/15 bg-white text-xs focus:outline-none focus:border-[#4A7C59] focus:ring-1 focus:ring-[#4A7C59] transition-all default-appearance-none"
                    style={{ WebkitAppearance: "menulist", appearance: "auto" }}
                  >
                    <option value="general">Undecided / Multiple Delays</option>
                    <option value="down-syndrome">Down Syndrome Path</option>
                    <option value="autism">Autism Affinity Support</option>
                    <option value="speech">Speech-Language Therapy</option>
                    <option value="occupational">Occupational Therapy</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="text-[10px] text-slate-500 uppercase tracking-widest font-medium font-sans block mb-1.5">
                    Brief background (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us a little about your child's favorite play patterns and current milestones goals."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-4 rounded-xl border border-[#1A2E1D]/15 bg-white text-xs focus:outline-none focus:border-[#4A7C59] focus:ring-1 focus:ring-[#4A7C59] transition-all default-appearance-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="custom-button is-light-context leading-none text-xs uppercase tracking-wider font-medium group mt-2 w-full justify-center"
                >
                  <span className="button-text">Submit Secure Request</span>
                  <div className="button-circles-animation flex items-center">
                    <div className="button-circle">
                      <Send className="w-3.5 h-3.5 text-current" />
                    </div>
                  </div>
                  <div className="button-mask" />
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
