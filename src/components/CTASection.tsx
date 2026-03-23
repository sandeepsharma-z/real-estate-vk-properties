import ScrollReveal from "./ScrollReveal";
import ctaBg from "@/assets/cta-bg.jpg";

const CTASection = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={ctaBg} alt="Dark luxury marble texture" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "hsla(0,0%,0%,0.5)" }} />
      </div>

      {/* Animated decorative accents */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 border border-accent/15 rounded-full pulse-glow" />
        <div className="absolute bottom-10 right-10 w-56 h-56 border border-accent/10 rounded-full pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-accent/30 rounded-full orbit" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent/20 rounded-full float-slow" />
        <div className="absolute bottom-1/3 left-[10%] w-48 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent shimmer" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/4 right-[10%] w-48 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent shimmer" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 section-padding text-center max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="label-accent mb-4" style={{ color: "hsl(36 55% 55%)" }}>Start Your Journey</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6" style={{ color: "white" }}>
            Ready to Find Your Next Property?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-base md:text-lg font-light leading-relaxed mb-10" style={{ color: "hsla(0,0%,100%,0.7)" }}>
            Whether you're buying, selling, or investing, our team is ready to guide you
            with the expertise and care you deserve. Let's make it happen.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#properties" className="btn-accent">Browse Listings</a>
            <a href="#" className="btn-outline-light">Talk to an Expert</a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
