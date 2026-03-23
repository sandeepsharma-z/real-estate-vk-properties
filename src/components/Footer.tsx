import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16 md:py-20 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl font-semibold tracking-tight text-primary-foreground mb-4">
              VK Properties
            </p>
            <p className="text-sm font-light leading-relaxed mb-6" style={{ color: "hsla(40,20%,98%,0.6)" }}>
              Premium real estate services for discerning buyers, sellers, and investors. Your trusted partner in luxury property.
            </p>
            <div className="flex gap-4">
              {["Facebook", "Instagram", "LinkedIn", "Twitter"].map((s) => (
                <a key={s} href="#" className="text-xs uppercase tracking-[0.1em] transition-colors duration-300 hover:text-accent" style={{ color: "hsla(40,20%,98%,0.5)" }}>
                  {s.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground mb-5">Quick Links</p>
            {["Properties", "About Us", "Services", "Market Insights", "Contact"].map((link) => (
              <a key={link} href="#" className="block text-sm font-light mb-3 transition-colors duration-300 hover:text-accent" style={{ color: "hsla(40,20%,98%,0.6)" }}>
                {link}
              </a>
            ))}
          </div>

          {/* Property Types */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground mb-5">Property Types</p>
            {["Luxury Villas", "Modern Apartments", "Family Homes", "Commercial Spaces", "Investment Properties"].map((type) => (
              <a key={type} href="#" className="block text-sm font-light mb-3 transition-colors duration-300 hover:text-accent" style={{ color: "hsla(40,20%,98%,0.6)" }}>
                {type}
              </a>
            ))}
          </div>

          {/* Contact & Newsletter */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground mb-5">Contact</p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <p className="text-sm font-light" style={{ color: "hsla(40,20%,98%,0.6)" }}>123 Park Avenue, Suite 2400, New York, NY 10017</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <p className="text-sm font-light" style={{ color: "hsla(40,20%,98%,0.6)" }}>083750 30830</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <p className="text-sm font-light" style={{ color: "hsla(40,20%,98%,0.6)" }}>hello@luxuryhaven.com</p>
              </div>
            </div>

            <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary-foreground mb-3">Newsletter</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 text-sm font-light bg-primary-foreground/10 border border-primary-foreground/20 outline-none text-primary-foreground placeholder:text-primary-foreground/40 rounded-l-sm"
              />
              <button className="px-4 py-2.5 bg-accent text-accent-foreground rounded-r-sm hover:brightness-110 transition-all duration-300">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t pt-8" style={{ borderColor: "hsla(40,20%,98%,0.1)" }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs font-light" style={{ color: "hsla(40,20%,98%,0.4)" }}>
              © 2026 VK Properties. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Sitemap"].map((link) => (
                <a key={link} href="#" className="text-xs font-light transition-colors duration-300 hover:text-accent" style={{ color: "hsla(40,20%,98%,0.4)" }}>
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

