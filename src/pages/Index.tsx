import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandIntro from "@/components/BrandIntro";
import FeaturedProperties from "@/components/FeaturedProperties";
import LifestyleCategories from "@/components/LifestyleCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import LuxuryLiving from "@/components/LuxuryLiving";
import AgentSection from "@/components/AgentSection";
import Testimonials from "@/components/Testimonials";
import MarketInsights from "@/components/MarketInsights";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <BrandIntro />
        <FeaturedProperties />
        <LifestyleCategories />
        <WhyChooseUs />
        <LuxuryLiving />
        <AgentSection />
        <Testimonials />
        <MarketInsights />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
