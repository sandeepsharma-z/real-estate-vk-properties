import ScrollReveal from "./ScrollReveal";
import brandImg from "@/assets/brand-intro.jpg";

const BrandIntro = () => {
  return (
    <section id="about" className="py-24 md:py-32 section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <ScrollReveal>
              <p className="label-accent mb-4">About VK Properties</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="heading-section mb-6">
                Where Exceptional Properties Meet Exceptional Service
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="gold-line mb-8" />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="body-elegant mb-6">
                For over two decades, VK Properties has been the trusted name in luxury real estate.
                We specialize in curating premium residential and commercial properties for
                discerning buyers, sellers, and investors who demand nothing less than excellence.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <p className="body-elegant mb-10">
                Our team of seasoned advisors combines deep local market knowledge with
                a personalized approach, ensuring every client receives bespoke guidance
                through every step of their property journey.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.5}>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { number: "2,500+", label: "Properties Sold" },
                  { number: "$4.2B", label: "In Transactions" },
                  { number: "22", label: "Years of Excellence" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-2xl md:text-3xl font-semibold text-foreground">{stat.number}</p>
                    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Image */}
          <ScrollReveal className="order-1 lg:order-2" delay={0.2}>
            <div className="relative">
              <div className="image-zoom rounded-sm overflow-hidden">
                <img src={brandImg} alt="Luxury interior with marble floors and designer furniture" className="w-full h-[500px] lg:h-[600px] object-cover" />
              </div>
              {/* Accent overlay block */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-accent rounded-sm hidden lg:block" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default BrandIntro;

