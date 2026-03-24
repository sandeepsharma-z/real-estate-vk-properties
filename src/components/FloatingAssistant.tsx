import { useEffect, useMemo, useRef, useState } from "react";
import { Facebook, Instagram, Linkedin, MessageCircle, Send, X, Youtube, ChevronUp } from "lucide-react";

type ChatRole = "bot" | "user";

type ChatMessage = {
  id: number;
  role: ChatRole;
  text: string;
};

const BOT_TYPING_MS = 900;

const quickQuestions = [
  "What properties are available in Delhi?",
  "How can I schedule a site visit?",
  "What is the brokerage and fee structure?",
  "Do you help with home loan support?",
  "Where is your office located?",
];

const introMessage =
  "Hello. I am your real estate assistant. I can help with buying, selling, site visits, pricing, loan guidance, and legal process. How can I help you today?";

const answerFor = (input: string) => {
  const q = input.toLowerCase();

  if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
    return "Hello. Share your budget, preferred area in Delhi, and property type. I will guide you quickly.";
  }

  if (q.includes("location") || q.includes("office") || q.includes("address")) {
    return "Our service region is Delhi, India. Share your preferred locality and I will suggest matching options and next steps.";
  }

  if (q.includes("site visit") || q.includes("visit") || q.includes("schedule") || q.includes("appointment")) {
    return "Site visit is available 7 days a week. Send your preferred date, time slot, and area. Our team will confirm availability.";
  }

  if (q.includes("budget") || q.includes("price") || q.includes("cost") || q.includes("rates")) {
    return "Please share your budget range and area preference in Delhi. I will suggest suitable listings with expected price bands.";
  }

  if (q.includes("loan") || q.includes("emi") || q.includes("mortgage") || q.includes("finance")) {
    return "Yes, we assist with home loan guidance, eligibility checks, and documentation support through partner banks.";
  }

  if (q.includes("brokerage") || q.includes("fee") || q.includes("commission")) {
    return "Brokerage depends on transaction type and property category. Share your requirement and we will provide exact transparent charges.";
  }

  if (q.includes("documents") || q.includes("legal") || q.includes("registry") || q.includes("registration")) {
    return "We help with title check, agreement drafting support, token process, and registration coordination for smoother closure.";
  }

  if (q.includes("rent") || q.includes("rental") || q.includes("lease")) {
    return "Yes, we support rental and lease properties in Delhi. Share your monthly budget, family size, and preferred locality.";
  }

  if (q.includes("sell") || q.includes("selling") || q.includes("seller")) {
    return "For selling support, share property details, location, and expected price. We can assist with valuation and qualified buyer outreach.";
  }

  return "I can help with Delhi property search, pricing, site visits, legal steps, loan support, rentals, and resale. Please share your exact requirement.";
};

const FloatingAssistant = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [idCounter, setIdCounter] = useState(1);
  const chatBodyRef = useRef<HTMLDivElement | null>(null);

  const socials = useMemo(
    () => [
      { icon: Facebook, label: "Facebook", href: "#" },
      { icon: Instagram, label: "Instagram", href: "#" },
      { icon: Linkedin, label: "LinkedIn", href: "#" },
      { icon: Youtube, label: "YouTube", href: "#" },
    ],
    [],
  );

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const openTimer = window.setTimeout(() => {
      setIsChatOpen(true);
      setIsTyping(true);

      window.setTimeout(() => {
        setMessages([{ id: 1, role: "bot", text: introMessage }]);
        setIdCounter(2);
        setIsTyping(false);
      }, BOT_TYPING_MS);
    }, 800);

    return () => window.clearTimeout(openTimer);
  }, []);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    const userMessage: ChatMessage = { id: idCounter, role: "user", text: trimmed };
    const botText = answerFor(trimmed);

    setMessages((prev) => [...prev, userMessage]);
    setIdCounter((prev) => prev + 1);
    setInput("");
    setIsTyping(true);

    window.setTimeout(() => {
      setMessages((prev) => [...prev, { id: idCounter + 1, role: "bot", text: botText }]);
      setIdCounter((prev) => prev + 1);
      setIsTyping(false);
    }, BOT_TYPING_MS);
  };

  return (
    <>
      <div className="fixed left-3 top-1/2 -translate-y-1/2 z-[70] hidden md:flex flex-col gap-3">
        {socials.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="w-12 h-12 rounded-full flex items-center justify-center border border-accent/40 text-accent bg-background/90 backdrop-blur shadow-md hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>

      <div className="fixed left-4 bottom-4 z-[80]">
        {!isChatOpen ? (
          <button
            onClick={() => setIsChatOpen(true)}
            className="w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-lg hover:brightness-110 transition-all duration-300 flex items-center justify-center"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        ) : (
          <div className="w-[360px] max-w-[92vw] h-[560px] max-h-[78vh] rounded-2xl overflow-hidden border border-border bg-background shadow-2xl flex flex-col">
            <div className="px-4 py-3 bg-foreground text-primary-foreground flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.12em] font-medium">Real Estate Help Desk</p>
                <p className="text-xs opacity-80">Online now</p>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="w-8 h-8 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div ref={chatBodyRef} className="flex-1 overflow-y-auto px-3 py-3 space-y-3 bg-secondary/30">
              {messages.map((msg) => (
                <div key={msg.id} className={msg.role === "user" ? "flex justify-end" : "flex justify-start"}>
                  <div
                    className={
                      msg.role === "user"
                        ? "max-w-[86%] rounded-2xl px-3 py-2 text-sm bg-accent text-accent-foreground"
                        : "max-w-[86%] rounded-2xl px-3 py-2 text-sm bg-background border border-border text-foreground"
                    }
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[86%] rounded-2xl px-3 py-2 text-sm bg-background border border-border text-foreground">
                    <span className="inline-flex gap-1 items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 animate-bounce [animation-delay:120ms]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 animate-bounce [animation-delay:240ms]" />
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-border p-3 bg-background space-y-2">
              <div className="flex gap-2 overflow-x-auto pb-1">
                {quickQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="shrink-0 text-xs rounded-full px-3 py-1.5 border border-border hover:border-accent hover:text-accent transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage(input);
                }}
                className="flex items-center gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your property question..."
                  className="flex-1 h-11 rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-accent"
                />
                <button
                  type="submit"
                  className="w-11 h-11 rounded-xl bg-accent text-accent-foreground flex items-center justify-center hover:brightness-110"
                  aria-label="Send"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed right-4 bottom-4 z-[70] w-12 h-12 rounded-full border border-accent/40 bg-background/90 backdrop-blur text-accent shadow-lg transition-all duration-300 ${showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6 mx-auto" />
      </button>
    </>
  );
};

export default FloatingAssistant;