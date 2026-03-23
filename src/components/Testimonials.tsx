import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "VK Properties made our dream home a reality. Their expertise in the luxury market is unmatched, and the personalized service we received was extraordinary.",
    name: "Sarah & Michael Thompson",
    role: "Homebuyers — Delhi",
    stars: 5,
  },
  {
    quote: "Selling our waterfront estate was seamless. The team secured a buyer above asking price within two weeks. Truly exceptional professionals.",
    name: "Robert Chen",
    role: "Seller — Delhi",
    stars: 5,
  },
  {
    quote: "As an investor, I trust VK Properties for their deep market analysis and strategic guidance. They've helped me build a portfolio worth over $30M.",
    name: "Amara Williams",
    role: "Real Estate Investor",
    stars: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-24 md:py-32 section-padding bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <p className="label-accent mb-4">Client Stories</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="heading-section mb-16">Trusted by Buyers, Sellers, and Investors</h2>
        </ScrollReveal>

        <div className="relative">
          <Quote className="w-12 h-12 text-accent/20 mx-auto mb-8" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-display text-xl md:text-2xl lg:text-3xl font-normal leading-relaxed text-foreground mb-8 italic">
                "{testimonials[current].quote}"
              </p>

              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="font-display text-lg font-semibold text-foreground">{testimonials[current].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent transition-colors duration-300">
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-accent w-6" : "bg-border"}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent transition-colors duration-300">
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

