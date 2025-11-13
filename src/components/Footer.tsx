"use client";

import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

interface FooterProps {
  currentLang: "en" | "am";
}

export function Footer({ currentLang }: FooterProps) {
  const footerSections = {
    services: {
      title: currentLang === "en" ? "Services" : "አገልግሎቶች",
      links: [
        { label: currentLang === "en" ? "Emergency Care" : "የድንገተኛ እንክብካቤ", href: "#emergency" },
        { label: currentLang === "en" ? "General Medicine" : "አጠቃላይ ሕክምና", href: "#general" },
        { label: currentLang === "en" ? "Surgery" : "ቀዶ ጥገና", href: "#surgery" },
        { label: currentLang === "en" ? "Pediatrics" : "የህፃናት ሕክምና", href: "#pediatrics" },
        { label: currentLang === "en" ? "Laboratory" : "ላቦራቶሪ", href: "#lab" },
      ],
    },
    quickLinks: {
      title: currentLang === "en" ? "Quick Links" : "ፈጣን አገናኞች",
      links: [
        { label: currentLang === "en" ? "Find a Doctor" : "ሐኪም ፈልግ", href: "#doctors" },
        { label: currentLang === "en" ? "Book Appointment" : "ቀጠሮ ያስይዙ", href: "#appointment" },
        { label: currentLang === "en" ? "Patient Portal" : "የታካሚ መግቢያ", href: "#portal" },
        { label: currentLang === "en" ? "Health Records" : "የጤና መዝገቦች", href: "#records" },
        { label: currentLang === "en" ? "Careers" : "የስራ እድሎች", href: "#careers" },
      ],
    },
    support: {
      title: currentLang === "en" ? "Support" : "ድጋፍ",
      links: [
        { label: currentLang === "en" ? "Contact Us" : "አግኙን", href: "#contact" },
        { label: currentLang === "en" ? "FAQs" : "ተደጋግሚ ጥያቄዎች", href: "#faq" },
        { label: currentLang === "en" ? "Insurance" : "መድን", href: "#insurance" },
        { label: currentLang === "en" ? "Billing" : "ክፍያ", href: "#billing" },
        { label: currentLang === "en" ? "Feedback" : "አስተያየት", href: "#feedback" },
      ],
    },
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                  <path d="M12 2L10 8H8L10 2H12ZM14 2L16 8H14L12 2H14ZM12 8L10 14H8L10 8H12ZM14 8L16 14H14L12 8H14ZM12 14L10 22H12L14 22L12 14ZM8 10L2 12L8 14V10ZM16 10V14L22 12L16 10Z" />
                </svg>
              </div>
              <div>
                <h3 className={`text-xl font-semibold ${currentLang === "am" ? "amharic" : ""}`}>
                  {currentLang === "en" ? "Bete Selam" : "ቤተ ሰላም"}
                </h3>
                <p className="text-sm text-white/60">
                  {currentLang === "en" ? "House of Peace" : "የሰላም ቤት"}
                </p>
              </div>
            </div>
            <p className={`text-white/70 mb-4 leading-relaxed ${currentLang === "am" ? "amharic" : ""}`}>
              {currentLang === "en"
                ? "Providing world-class healthcare with Ethiopian warmth since 2010."
                : "ከ2010 ዓ.ም ጀምሮ በኢትዮጵያ ሙቀት ዓለም አቀፍ የጤና እንክብካቤ እንሰጣለን።"}
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className={`font-semibold mb-4 ${currentLang === "am" ? "amharic" : ""}`}>
              {footerSections.services.title}
            </h4>
            <ul className="space-y-2">
              {footerSections.services.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`text-white/70 hover:text-secondary transition-all duration-300 ${
                      currentLang === "am" ? "amharic" : ""
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-semibold mb-4 ${currentLang === "am" ? "amharic" : ""}`}>
              {footerSections.quickLinks.title}
            </h4>
            <ul className="space-y-2">
              {footerSections.quickLinks.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`text-white/70 hover:text-secondary transition-all duration-300 ${
                      currentLang === "am" ? "amharic" : ""
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`font-semibold mb-4 ${currentLang === "am" ? "amharic" : ""}`}>
              {currentLang === "en" ? "Contact Us" : "አግኙን"}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+251111234567" className="flex items-start gap-3 text-white/70 hover:text-secondary transition-all duration-300">
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium">+251 11 123 4567</div>
                    <div className="text-sm text-white/60">{currentLang === "en" ? "Emergency: 907" : "ድንገተኛ: 907"}</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:info@beteselam.et" className="flex items-start gap-3 text-white/70 hover:text-secondary transition-all duration-300">
                  <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>info@beteselam.et</span>
                </a>
              </li>
              <li>
                <a href="#location" className="flex items-start gap-3 text-white/70 hover:text-secondary transition-all duration-300">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>
                    {currentLang === "en"
                      ? "Bole Road, Addis Ababa, Ethiopia"
                      : "ቦሌ መንገድ፣ አዲስ አበባ፣ ኢትዮጵያ"}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-white/60 text-sm ${currentLang === "am" ? "amharic" : ""}`}>
              {currentLang === "en"
                ? "© 2025 Bete Selam Hospital. All rights reserved."
                : "© 2025 ቤተ ሰላም ሆስፒታል። ሁሉም መብቶች የተጠበቁ ናቸው።"}
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-white/60 hover:text-secondary transition-all duration-300">
                {currentLang === "en" ? "Privacy Policy" : "የግላዊነት ፖሊሲ"}
              </a>
              <a href="#terms" className="text-white/60 hover:text-secondary transition-all duration-300">
                {currentLang === "en" ? "Terms of Service" : "የአገልግሎት ውሎች"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}