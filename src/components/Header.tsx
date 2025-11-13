"use client";

import { useState } from "react";
import { Phone, Menu, X, MapPin, Globe } from "lucide-react";
import { Button } from "./ui/button";

// Update the type to include 'book-appointment'
type Page = "home" | "services" | "find-doctor" | "emergency" | "about" | "contact" | "book-appointment";

interface HeaderProps {
  currentLang: "en" | "am";
  onLanguageToggle: () => void;
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

export function Header({ currentLang, onLanguageToggle, onNavigate, currentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: currentLang === "en" ? "Home" : "ቤት", page: "home" as const },
    { label: currentLang === "en" ? "Services" : "አገልግሎቶች", page: "services" as const },
    { label: currentLang === "en" ? "Doctors" : "ሐኪሞች", page: "find-doctor" as const },
    { label: currentLang === "en" ? "Emergency" : "ድንገተኛ", page: "emergency" as const },
    { label: currentLang === "en" ? "About" : "ስለ እኛ", page: "about" as const },
    { label: currentLang === "en" ? "Contact" : "አግኙን", page: "contact" as const },
  ];

  const handleNavClick = (page: typeof navItems[number]["page"]) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  const handleBookAppointment = () => {
    // Navigate to the book-appointment page
    onNavigate("book-appointment");
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-sm">
            <a href="tel:+251111234567" className="flex items-center gap-2 hover:text-secondary transition-all duration-300">
              <Phone className="w-4 h-4" />
              <span>+251 11 123 4567</span>
            </a>
            <a href="#locations" className="hidden md:flex items-center gap-2 hover:text-secondary transition-all duration-300">
              <MapPin className="w-4 h-4" />
              <span>{currentLang === "en" ? "Find Location" : "አድራሻ ፈልግ"}</span>
            </a>
          </div>
          <button
            onClick={onLanguageToggle}
            className="flex items-center gap-2 text-sm hover:text-secondary transition-all duration-300"
          >
            <Globe className="w-4 h-4" />
            <span>{currentLang === "en" ? "አማርኛ" : "English"}</span>
          </button>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("home")}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
                  <path d="M12 2L10 8H8L10 2H12ZM14 2L16 8H14L12 2H14ZM12 8L10 14H8L10 8H12ZM14 8L16 14H14L12 8H14ZM12 14L10 22H12L14 22L12 14ZM8 10L2 12L8 14V10ZM16 10V14L22 12L16 10Z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">
                  {currentLang === "en" ? "Bete Selam" : "ቤተ ሰላም"}
                </h1>
                <p className="text-xs text-gray-600">
                  {currentLang === "en" ? "House of Peace" : "የሰላም ቤት"}
                </p>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`font-medium transition-all duration-300 ${
                    currentPage === item.page
                      ? "text-primary border-b-2 border-primary"
                      : "text-gray-700 hover:text-primary"
                  } ${currentLang === "am" ? "amharic" : ""}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button 
                className="bg-secondary hover:bg-secondary-dark text-gray-900 font-semibold"
                onClick={handleBookAppointment}
              >
                {currentLang === "en" ? "Book Appointment" : "ቀጠሮ ያስይዙ"}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-all duration-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`py-3 text-left font-medium transition-all duration-300 ${
                    currentPage === item.page
                      ? "text-primary border-l-4 border-primary pl-3"
                      : "text-gray-700 hover:text-primary pl-4"
                  } ${currentLang === "am" ? "amharic" : ""}`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                className="bg-secondary hover:bg-secondary-dark text-gray-900 font-semibold mt-2"
                onClick={handleBookAppointment}
              >
                {currentLang === "en" ? "Book Appointment" : "ቀጠሮ ያስይዙ"}
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}