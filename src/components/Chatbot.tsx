import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";

declare global {
  interface Window {
    voiceflow: any;
  }
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Check if script is already loaded or being loaded (guards StrictMode double-effect)
    if (window.voiceflow?.chat || document.getElementById("voiceflow-widget-script")) {
      setLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.id = "voiceflow-widget-script";
    script.type = "text/javascript";
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    script.onload = async () => {
      await window.voiceflow.chat.load({
        verify: { projectID: "6a298d3ed4249ea2fd05dfce" },
        url: "https://general-runtime.voiceflow.com",
        voice: {
          url: "https://runtime-api.voiceflow.com",
        },
        assistant: {
          title: "Hi, I'm Sunny! 👋",
          description: "Not a medical service. For emergencies call 911 🚨",
          image: `${window.location.origin}/assets/sunny_pasted_mascot.jpg`,
          color: "#E58A13",
          stylesheet: `${window.location.origin}/assets/voiceflow_custom.css`,
        },
      });
      // Start fully hidden — the custom button is the only entry point,
      // and a persisted session must not auto-open behind it
      window.voiceflow.chat.hide();
      setLoaded(true);

      // The widget-next bundle exposes no open/close events, so watch for
      // clicks inside its shadow DOM (e.g. the header X) and re-sync state.
      // A closing window starts fading immediately, so a header-action click
      // only needs a ~50ms peek at the opacity to know the chat is closing.
      const shadowRoot = document.getElementById("voiceflow-chat")?.shadowRoot;
      shadowRoot?.addEventListener(
        "click",
        (e) => {
          const inHeaderActions = e
            .composedPath()
            .some(
              (el) =>
                el instanceof Element &&
                el.classList?.contains("vfrc-header--actions")
            );
          setTimeout(() => {
            const container = shadowRoot.querySelector(".vfrc-chat__container");
            const opacity = container
              ? parseFloat(getComputedStyle(container).opacity)
              : 0;
            if (!container || opacity < 1) {
              setIsOpen(false);
              // let the fade finish before removing the widget entirely
              setTimeout(() => window.voiceflow?.chat?.hide(), 350);
            }
          }, inHeaderActions ? 50 : 600);
        },
        true
      );
    };

    document.body.appendChild(script);
  }, []);

  const toggleChat = () => {
    if (!window.voiceflow?.chat) return;
    if (isOpen) {
      window.voiceflow.chat.close();
      setIsOpen(false);
      // Fully remove the widget after the close animation so no
      // translucent window ghost is left peeking at the page bottom
      setTimeout(() => window.voiceflow?.chat?.hide(), 400);
    } else {
      window.voiceflow.chat.show();
      window.voiceflow.chat.open();
      setIsOpen(true);
    }
  };

  if (!loaded) return null;

  return (
    <button
      onClick={toggleChat}
      className="fixed bottom-6 right-6 z-[9999] flex items-center gap-2.5 px-6 py-3 rounded-full shadow-lg active:scale-95 transition-all duration-200 select-none font-sans font-semibold text-sm sm:text-base"
      style={{
        backgroundColor: "#E58A13",
        color: "#FFFFFF",
        border: "1px solid #FDE68A",
        boxShadow: "0 8px 24px -4px rgba(194, 112, 8, 0.4)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#C27008")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#E58A13")}
      aria-label="Chat with Sunny"
    >
      {isOpen ? (
        <>
          <X className="w-5 h-5" />
          <span>Close Chat</span>
        </>
      ) : (
        <>
          <MessageCircle className="w-5 h-5 fill-[#FAFAF7]/10" />
          <span>Chat with Sunny 💛</span>
        </>
      )}
    </button>
  );
}
