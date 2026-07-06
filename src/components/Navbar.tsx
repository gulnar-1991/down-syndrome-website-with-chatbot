import { useEffect, useState } from "react";
import { CLINIC_NAME, PORTAL_URL } from "../data";
import { ArrowUpRight } from "lucide-react";

interface NavbarProps {
  isHeroDarkSection: boolean;
}

export default function Navbar({ isHeroDarkSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle body freeze on mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.setAttribute("data-no-scroll", "1");
    } else {
      document.body.style.overflow = "";
      document.body.removeAttribute("data-no-scroll");
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { text: "About", href: "#about" },
    { text: "Our Programs", href: "#programs" },
    { text: "Eligibility", href: "#eligibility" },
    { text: "Contact", href: "#contact" },
  ];

  // If scrolled, let's use the solid cream scrolled layout.
  // If not scrolled but we are over the dark hero, we should have white text. Otherwise, dark green.
  // When the mobile menu is open, the drawer paints a cream backdrop behind the
  // top bar — force dark text so the logo + X button remain visible.
  const isNavDarkTheme = isHeroDarkSection && !scrolled && !mobileMenuOpen;

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="navbar select-none" id="main-navigation">
      <div
        className={`fixed top-0 left-0 right-0 z-[900] transition-all duration-500 py-4 ${
          scrolled ? "navbar_component scrolled" : "navbar_component bg-transparent"
        } ${isNavDarkTheme ? "text-white" : "text-[#1A2E1D]"}`}
      >
        <div className="container-large flex justify-between items-center">
          {/* Logo element */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="navbar_logo-link font-serif font-medium text-lg md:text-xl tracking-tight leading-none hover:opacity-80 transition-opacity flex flex-col justify-start"
            id="nav-logo"
          >
            <span className="font-medium">{CLINIC_NAME}</span>
            <span className="text-[9px] uppercase tracking-widest opacity-60 font-sans mt-0.5 font-medium">
              Pediatric care
            </span>
          </a>

          {/* Desktop Links (Center) */}
          <nav className="navbar2_menu hidden md:flex items-center gap-8 font-sans text-xs uppercase tracking-widest font-medium">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="navbar-link-wrap hover:opacity-60 transition-opacity relative group py-2"
              >
                <span className="navbar-txt">{link.text}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-current transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            
            {/* Direct Portal Link */}
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-link-wrap hover:opacity-60 transition-opacity flex items-center gap-1 group py-2"
            >
              <span className="navbar-txt">MyChart Portal</span>
              <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </nav>

          {/* Right Area CTA Call Button (Q Psychology Mask System) */}
          <div className="navbar_button-wrapper hidden lg:flex items-center">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#contact");
              }}
              className={`custom-button is-small uppercase tracking-wider font-medium ${
                isNavDarkTheme ? "is-dark-context" : "is-light-context"
              }`}
              id="nav-cta-button"
            >
              <span className="button-text">Book a Discovery Call</span>
              <div className="button-circles-animation flex items-center">
                <div className="button-circle">
                  <ArrowUpRight className="w-3 h-3 text-current" />
                </div>
              </div>
              <div className="button-mask" />
            </a>
          </div>

          {/* Mobile Right Component Toggle */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="menu-icon flex flex-col gap-1 w-6 py-2"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <div
                className={`menu-icon2_line-top w-6 h-[1.5px] bg-current transition-transform duration-300 ${
                  mobileMenuOpen ? "translate-y-[5.5px] rotate-45" : ""
                }`}
              />
              <div
                className={`menu-icon2_line-middle w-6 h-[1.5px] bg-current transition-opacity duration-300 ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <div
                className={`menu-icon2_line-bottom w-6 h-[1.5px] bg-current transition-transform duration-300 ${
                  mobileMenuOpen ? "-translate-y-[5.5px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#FAFAF7] z-[850] flex flex-col justify-between pt-24 pb-12 px-8 transition-transform duration-700 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        id="mobile-drawer"
      >
        <div className="flex flex-col gap-6 mt-8">
          {navLinks.map((link) => (
            <a
              key={link.text}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="font-serif text-3xl font-light text-[#1A2E1D] hover:opacity-60 transition-opacity py-3 border-b border-[#1A2E1D]/10"
            >
              {link.text}
            </a>
          ))}
          <a
            href={PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif text-3xl font-light text-[#1A2E1D] hover:opacity-60 transition-opacity py-3 border-b border-[#1A2E1D]/10 flex items-center justify-between"
          >
            <span>MyChart Portal</span>
            <ArrowUpRight className="w-6 h-6" />
          </a>
        </div>

        <div className="flex flex-col gap-4 mt-8">
          <p className="text-xs text-[#1A2E1D]/60 uppercase tracking-widest font-medium mb-2">
            Speak to our team
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#contact");
            }}
            className="custom-button is-light-context justify-center text-xs uppercase tracking-wider font-medium w-full py-4"
          >
            <span className="button-text">Book a Discovery Call</span>
            <div className="button-circles-animation flex items-center">
              <div className="button-circle">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="button-mask" />
          </a>
        </div>
      </div>
    </header>
  );
}
