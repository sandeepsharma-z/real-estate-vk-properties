import ScrollReveal from "./ScrollReveal";
import { Shield, TrendingUp, Users, Eye, HeartHandshake, Award } from "lucide-react";

const reasons = [
  { icon: Award, title: "Curated Premium Properties", description: "Every listing is personally vetted and selected to meet the highest standards of quality and value." },
  { icon: Eye, title: "Expert Market Knowledge", description: "Deep insights into local markets, emerging neighborhoods, and investment opportunities." },
  { icon: Shield, title: "Trusted Guidance", description: "Transparent, ethical practices throughout every transaction — from first viewing to final signature." },
  { icon: TrendingUp, title: "Investment Insight", description: "Strategic advice to maximize returns, whether you're a first-time buyer or seasoned investor." },
  { icon: Users, title: "Dedicated Support", description: "A personal advisor for every client, available when you need us — before, during, and after the sale." },
  { icon: HeartHandshake, title: "Seamless Process", description: "We handle the complexity so you can focus on what matters — finding your perfect property." },
];

const WhyChooseUs = () => {
  return (
    <section id="services" className="py-24 md:py-32 section-padding bg-secondary relative overflow-hidden">
      {/* Floating background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-64 h-64 border border-accent/8 rounded-full spin-slow" />
        <div className="absolute bottom-[10%] left-[5%] w-48 h-48 border border-accent/6 rounded-full spin-slow" style={{ animationDirection: "reverse" }} />
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-accent/15 rounded-full float-slow" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <p className="label-accent mb-4 text-center">Why VK Properties</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="heading-section text-center mb-4 max-w-2xl mx-auto">
            The VK Properties Difference
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="body-elegant text-center max-w-xl mx-auto mb-16">
            We don't just sell properties — we craft experiences and build lasting relationships.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <ScrollReveal key={reason.title} delay={0.1 * i}>
              <div className="relative p-8 bg-card rounded-sm border border-border/50 group hover:border-accent/30 transition-all duration-500">
                <div className="w-12 h-12 rounded-sm flex items-center justify-center mb-6 bg-accent/10 group-hover:bg-accent/20 transition-colors duration-500">
                  <reason.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{reason.title}</h3>
                <p className="text-sm font-light leading-relaxed text-muted-foreground">{reason.description}</p>
                {/* Gold connector line */}
                <div className="absolute top-0 left-8 w-px h-0 bg-accent/30 group-hover:h-full transition-all duration-700" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

