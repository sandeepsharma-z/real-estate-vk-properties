import ScrollReveal from "./ScrollReveal";
import luxuryImg from "@/assets/luxury-living.jpg";
import brandImg from "@/assets/brand-intro.jpg";

const LuxuryLiving = () => {
  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[600px]">
          {/* Left: image */}
          <ScrollReveal className="relative" direction="left">
            <div className="h-full min-h-[400px] lg:min-h-[600px] overflow-hidden rounded-l-sm">
              <img
                src={luxuryImg}
                alt="Luxury bedroom with panoramic ocean view"
                className="w-full h-full object-cover transition-transform duration-[1.5s] hover:scale-105"
              />
            </div>
          </ScrollReveal>

          {/* Right: content */}
          <div className="relative bg-foreground flex items-center rounded-r-sm overflow-hidden">
            {/* Animated decorative elements */}
            <div className="absolute top-8 right-8 w-20 h-20 border border-accent/30 rounded-sm float-slow" />
            <div className="absolute bottom-12 right-12 w-12 h-12 border border-accent/15 rounded-full breathe" />
            <div className="absolute top-1/2 right-4 w-2 h-2 bg-accent/25 rounded-full float-medium" />
            <div className="absolute top-[20%] right-[30%] w-32 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent shimmer" style={{ animationDelay: "0.5s" }} />
            <div className="p-10 md:p-16 lg:p-20">
              <ScrollReveal delay={0.2}>
                <p className="label-accent mb-4" style={{ color: "hsl(36 55% 55%)" }}>Luxury Living</p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6 text-primary-foreground">
                  More Than Property — A Way of Life
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <div className="gold-line mb-8" />
              </ScrollReveal>
              <ScrollReveal delay={0.5}>
                <p className="text-base md:text-lg font-light leading-relaxed mb-8" style={{ color: "hsla(40,20%,98%,0.7)" }}>
                  We believe a home should inspire. From breathtaking architecture to meticulously designed interiors, every property in our collection tells a story of craftsmanship, beauty, and modern living at its finest.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.6}>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "100%", label: "Client Satisfaction" },
                    { value: "48h", label: "Average Response" },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="font-display text-2xl font-semibold text-primary-foreground">{s.value}</p>
                      <p className="text-xs uppercase tracking-[0.15em] mt-1" style={{ color: "hsla(40,20%,98%,0.5)" }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryLiving;
