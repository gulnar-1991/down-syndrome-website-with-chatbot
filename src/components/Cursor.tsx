import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable custom cursor on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);

      const clientX = e.clientX;
      const clientY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.left = `${clientX}px`;
        dotRef.current.style.top = `${clientY}px`;
        dotRef.current.style.opacity = "1";
      }

      // Delay the ring tracking slightly to create the fluid trailing aesthetic
      if (ringRef.current) {
        ringRef.current.style.opacity = "0.5";
        // Apply smooth transition delay using frame coordinates
        ringRef.current.style.transform = `translate3d(calc(${clientX}px - 50%), calc(${clientY}px - 50%), 0)`;
      }
    };

    const handleMouseEnter = () => {
      if (dotRef.current) {
        dotRef.current.style.opacity = "0";
      }
      if (ringRef.current) {
        ringRef.current.style.width = "48px";
        ringRef.current.style.height = "48px";
        ringRef.current.style.opacity = "0.8";
        ringRef.current.style.borderColor = "#E8734A"; // coral focus color
      }
    };

    const handleMouseLeave = () => {
      if (dotRef.current) {
        dotRef.current.style.opacity = "1";
      }
      if (ringRef.current) {
        ringRef.current.style.width = "32px";
        ringRef.current.style.height = "32px";
        ringRef.current.style.opacity = "0.5";
        ringRef.current.style.borderColor = "#4A7C59"; // main sage
      }
    };

    // Global listener for movement
    document.addEventListener("mousemove", moveCursor);

    // Grab all interactive components
    const updateListeners = () => {
      const interactives = document.querySelectorAll("a, button, [role='button'], .hover-target");
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    // Run initial hook
    updateListeners();

    // Re-bind when mutations occur in case sections change dynamically
    const observer = new MutationObserver(updateListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
    };
  }, [isVisible]);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" id="cursor-dot" />
      <div ref={ringRef} className="cursor-ring hidden md:block" id="cursor-ring" />
    </>
  );
}
