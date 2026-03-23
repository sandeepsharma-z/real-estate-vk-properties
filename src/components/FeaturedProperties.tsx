import ScrollReveal from "./ScrollReveal";
import { ArrowRight } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";

const properties = [
  {
    image: property1,
    name: "The Skyline Penthouse",
    location: "Manhattan, New York",
    price: "$8,500,000",
    details: "4 Bed • 3 Bath • Terrace • City Views",
    featured: true,
  },
  {
    image: property2,
    name: "Villa Côte d'Azur",
    location: "Malibu, California",
    price: "$12,750,000",
    details: "6 Bed • 5 Bath • Pool • Ocean View",
  },
  {
    image: property3,
    name: "The Modern Residence",
    location: "Austin, Texas",
    price: "$2,450,000",
    details: "3 Bed • 2 Bath • Garden • Smart Home",
  },
  {
    image: property4,
    name: "Waterfront Estate",
    location: "Miami, Florida",
    price: "$6,900,000",
    details: "5 Bed • 4 Bath • Dock • Pool",
  },
];

const FeaturedProperties = () => {
  const [featured, ...rest] = properties;

  return (
    <section id="properties" className="py-24 md:py-32 section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="label-accent mb-4">Curated Selection</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <h2 className="heading-section max-w-lg">Featured Properties</h2>
            <a href="#" className="flex items-center gap-2 text-accent text-sm font-medium uppercase tracking-[0.1em] mt-4 md:mt-0 group">
              View All Listings
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </ScrollReveal>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Featured large */}
          <ScrollReveal className="lg:col-span-3" delay={0.2}>
            <div className="group relative image-zoom rounded-sm overflow-hidden h-[400px] lg:h-[560px] cursor-pointer">
              <img src={featured.image} alt={featured.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.15em] mb-2" style={{ color: "hsl(36 55% 55%)" }}>{featured.location}</p>
                <h3 className="font-display text-2xl md:text-3xl font-semibold mb-2" style={{ color: "white" }}>{featured.name}</h3>
                <p className="text-sm font-light mb-3" style={{ color: "hsla(0,0%,100%,0.7)" }}>{featured.details}</p>
                <div className="flex items-center justify-between">
                  <p className="font-display text-xl font-semibold" style={{ color: "white" }}>{featured.price}</p>
                  <span className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.1em] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ color: "hsl(36 55% 55%)" }}>
                    View Details <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Stacked secondary */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {rest.map((prop, i) => (
              <ScrollReveal key={prop.name} delay={0.3 + i * 0.1}>
                <div className="group relative image-zoom rounded-sm overflow-hidden h-[170px] cursor-pointer">
                  <img src={prop.image} alt={prop.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-xs uppercase tracking-[0.15em] mb-1" style={{ color: "hsl(36 55% 55%)" }}>{prop.location}</p>
                    <h3 className="font-display text-lg font-semibold" style={{ color: "white" }}>{prop.name}</h3>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-sm font-light" style={{ color: "hsla(0,0%,100%,0.7)" }}>{prop.price}</p>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ color: "hsl(36 55% 55%)" }} />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
