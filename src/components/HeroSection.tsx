import { motion } from "framer-motion";
import { Search, MapPin, Home, DollarSign } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Luxury modern mansion at golden hour" className="w-full h-full object-cover ken-burns" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, hsla(0,0%,0%,0.35) 0%, hsla(0,0%,0%,0.5) 100%)" }} />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[8%] w-24 h-24 border border-accent/20 rounded-full float-slow" />
        <div className="absolute top-[25%] right-[10%] w-3 h-3 bg-accent/40 rounded-full float-medium" />
        <div className="absolute bottom-[30%] left-[15%] w-2 h-2 bg-accent/30 rounded-full float-reverse" />
        <div className="absolute top-[40%] right-[20%] w-16 h-16 border border-accent/10 rotate-45 float-reverse" />
        <div className="absolute bottom-[25%] right-[8%] w-4 h-4 bg-accent/20 rounded-full orbit" />
        <div className="absolute top-[60%] left-[5%] w-32 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent shimmer" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center section-padding max-w-5xl mx-auto pt-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="label-accent mb-6"
          style={{ color: "hsl(36 55% 55%)" }}
        >
          Premium Real Estate
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight mb-6"
          style={{ color: "white" }}
        >
          Find a Home That Reflects
          <br />
          <span className="text-gradient-bronze">Your Lifestyle</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl mx-auto"
          style={{ color: "hsla(0,0%,100%,0.8)" }}
        >
          Buy, sell, and invest in premium residential and commercial properties with expert guidance tailored to your vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a href="#properties" className="btn-accent">Explore Properties</a>
          <a href="#contact" className="btn-outline-light">Book a Consultation</a>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="glass-panel rounded-lg p-3 md:p-4 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="flex items-center gap-3 px-4 py-3 rounded-md bg-background/50">
              <MapPin className="w-5 h-5 text-accent shrink-0" />
              <div className="text-left">
                <p className="text-xs font-medium uppercase tracking-wider text-foreground/60">Location</p>
                <input
                  type="text"
                  placeholder="City or area"
                  className="bg-transparent text-sm font-light text-foreground outline-none w-full placeholder:text-foreground/40"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-md bg-background/50">
              <Home className="w-5 h-5 text-accent shrink-0" />
              <div className="text-left">
                <p className="text-xs font-medium uppercase tracking-wider text-foreground/60">Property Type</p>
                <select className="bg-transparent text-sm font-light text-foreground outline-none w-full">
                  <option>All Types</option>
                  <option>Villa</option>
                  <option>Apartment</option>
                  <option>Townhouse</option>
                  <option>Commercial</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-md bg-background/50">
              <DollarSign className="w-5 h-5 text-accent shrink-0" />
              <div className="text-left">
                <p className="text-xs font-medium uppercase tracking-wider text-foreground/60">Budget</p>
                <select className="bg-transparent text-sm font-light text-foreground outline-none w-full">
                  <option>Any Price</option>
                  <option>$500K - $1M</option>
                  <option>$1M - $3M</option>
                  <option>$3M - $5M</option>
                  <option>$5M+</option>
                </select>
              </div>
            </div>
            <button className="btn-accent rounded-md flex items-center justify-center gap-2">
              <Search className="w-4 h-4" />
              Search
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
