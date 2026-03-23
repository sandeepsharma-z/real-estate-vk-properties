import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Properties", "About", "Services", "Insights", "Contact"];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-panel py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="section-padding flex items-center justify-between">
        <a href="#" className="font-display text-xl md:text-2xl font-semibold tracking-tight" style={{ color: scrolled ? "hsl(var(--foreground))" : "white" }}>
          VK Properties
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium tracking-[0.1em] uppercase transition-colors duration-300 hover:opacity-70"
              style={{ color: scrolled ? "hsl(var(--foreground))" : "white" }}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+08375030830"
            className="flex items-center gap-2 text-sm font-medium transition-colors duration-300"
            style={{ color: scrolled ? "hsl(var(--accent))" : "white" }}
          >
            <Phone className="w-4 h-4" />
            083750 30830
          </a>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: scrolled ? "hsl(var(--foreground))" : "white" }}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-panel border-t border-border"
          >
            <div className="section-padding py-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-medium tracking-[0.1em] uppercase text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <a href="tel:+08375030830" className="flex items-center gap-2 text-sm font-medium text-accent">
                <Phone className="w-4 h-4" />
                083750 30830
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
