import ScrollReveal from "./ScrollReveal";
import { ArrowRight } from "lucide-react";
import villasImg from "@/assets/lifestyle-villas.jpg";
import apartmentsImg from "@/assets/lifestyle-apartments.jpg";
import familyImg from "@/assets/lifestyle-family.jpg";
import commercialImg from "@/assets/lifestyle-commercial.jpg";

const categories = [
  { image: villasImg, title: "Luxury Villas", count: "48 Properties" },
  { image: apartmentsImg, title: "Modern Apartments", count: "126 Properties" },
  { image: familyImg, title: "Family Homes", count: "89 Properties" },
  { image: commercialImg, title: "Commercial Spaces", count: "34 Properties" },
];

const LifestyleCategories = () => {
  return (
    <section className="py-24 md:py-32 section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="label-accent mb-4 text-center">Explore by Lifestyle</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="heading-section text-center mb-16 max-w-2xl mx-auto">
            Spaces Designed Around the Way You Live
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={0.15 * i}>
              <div className="group relative h-[420px] rounded-sm overflow-hidden cursor-pointer">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500" />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-500 group-hover:-translate-y-2">
                  <p className="text-xs uppercase tracking-[0.15em] mb-2" style={{ color: "hsl(36 55% 55%)" }}>{cat.count}</p>
                  <h3 className="font-display text-xl font-semibold mb-3" style={{ color: "white" }}>{cat.title}</h3>
                  <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.1em] opacity-0 group-hover:opacity-100 transition-all duration-500" style={{ color: "hsl(36 55% 55%)" }}>
                    Explore <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifestyleCategories;
