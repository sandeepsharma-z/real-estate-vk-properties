import ScrollReveal from "./ScrollReveal";
import agentImg from "@/assets/agent-portrait.jpg";

const AgentSection = () => {
  return (
    <section className="py-24 md:py-32 section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Portrait */}
          <ScrollReveal>
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="image-zoom rounded-sm overflow-hidden">
                <img src={agentImg} alt="James Richardson, Founder & Lead Advisor" className="w-full h-[500px] object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-accent rounded-sm hidden lg:block float-slow" />
              <div className="absolute -top-3 -left-3 w-16 h-16 border border-accent/20 rounded-full hidden lg:block breathe" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <div>
            <ScrollReveal delay={0.1}>
              <p className="label-accent mb-4">Meet Our Founder</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h2 className="heading-section mb-6">
                Guided by Experience, Driven by Results
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="gold-line mb-8" />
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <p className="body-elegant mb-6">
                "Real estate is more than transactions — it's about understanding people's dreams and
                turning them into reality. Every client deserves the same care, expertise, and dedication
                that I would expect for my own family."
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.5}>
              <p className="font-display text-xl font-semibold text-foreground mb-1">James Richardson</p>
              <p className="text-sm text-muted-foreground mb-8">Founder & Lead Advisor • 22 Years in Luxury Real Estate</p>
            </ScrollReveal>
            <ScrollReveal delay={0.6}>
              <a href="#contact" className="btn-accent">Schedule a Consultation</a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentSection;
