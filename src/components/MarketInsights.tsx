import ScrollReveal from "./ScrollReveal";
import { ArrowRight } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const articles = [
  {
    image: blog1,
    category: "Market Trends",
    title: "Luxury Real Estate Market Outlook for 2026",
    excerpt: "Key trends shaping the premium property landscape and what savvy investors need to know.",
    date: "March 12, 2026",
    large: true,
  },
  {
    image: blog2,
    category: "Buying Guide",
    title: "Top 5 Neighborhoods for Investment Properties",
    excerpt: "Discover emerging areas with the highest growth potential and rental yields.",
    date: "March 8, 2026",
  },
  {
    image: blog3,
    category: "Lifestyle",
    title: "Designing Your Dream Penthouse Terrace",
    excerpt: "Expert tips on creating an outdoor oasis in the sky.",
    date: "March 3, 2026",
  },
];

const MarketInsights = () => {
  return (
    <section id="insights" className="py-24 md:py-32 section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <p className="label-accent mb-4">Real Estate Journal</p>
              <h2 className="heading-section max-w-lg">Market Insights & Inspiration</h2>
            </div>
            <a href="#" className="flex items-center gap-2 text-accent text-sm font-medium uppercase tracking-[0.1em] mt-4 md:mt-0 group">
              View All Insights
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Large article */}
          <ScrollReveal delay={0.1}>
            <div className="group cursor-pointer h-full">
              <div className="image-zoom rounded-sm overflow-hidden mb-5 h-[320px]">
                <img src={articles[0].image} alt={articles[0].title} className="w-full h-full object-cover" />
              </div>
              <p className="label-accent mb-2">{articles[0].category}</p>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                {articles[0].title}
              </h3>
              <p className="body-elegant mb-3">{articles[0].excerpt}</p>
              <p className="text-xs text-muted-foreground">{articles[0].date}</p>
            </div>
          </ScrollReveal>

          {/* Stacked articles */}
          <div className="flex flex-col gap-6">
            {articles.slice(1).map((article, i) => (
              <ScrollReveal key={article.title} delay={0.2 + i * 0.1}>
                <div className="group cursor-pointer flex gap-5 items-start">
                  <div className="image-zoom rounded-sm overflow-hidden shrink-0 w-[180px] h-[130px]">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="label-accent mb-2">{article.category}</p>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-sm font-light text-muted-foreground mb-2">{article.excerpt}</p>
                    <p className="text-xs text-muted-foreground">{article.date}</p>
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

export default MarketInsights;
