// src/app/page.tsx
"use client";

import { useState } from "react";
import { HomePage } from "../pages/HomePage";
import { ServicesPage } from "../pages/ServicesPage";
import { FindDoctorPage } from "../pages/FindDoctorPage";
import { EmergencyPage } from "../pages/EmergencyPage";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
import { BookAppointmentPage } from "../pages/BookAppointmentPage";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

// Update the Page type to include 'book-appointment'
type Page = "home" | "services" | "find-doctor" | "emergency" | "about" | "contact" | "book-appointment";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [currentLang, setCurrentLang] = useState<"en" | "am">("en");

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  const handleLanguageToggle = () => {
    setCurrentLang(currentLang === "en" ? "am" : "en");
  };

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  // Render the appropriate page based on currentPage
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomePage 
            currentLang={currentLang}
            onFindDoctor={() => setCurrentPage("find-doctor")} // FIXED: Now goes to find-doctor
            onBookAppointment={() => setCurrentPage("book-appointment")}
          />
        );
      case "services":
        return (
          <ServicesPage 
            currentLang={currentLang}
            onBack={handleBackToHome}
            onBookAppointment={() => setCurrentPage("book-appointment")}
          />
        );
      case "find-doctor":
        return (
          <FindDoctorPage 
            currentLang={currentLang}
            onBack={handleBackToHome}
          />
        );
      case "emergency":
        return (
          <EmergencyPage 
            currentLang={currentLang}
            onBack={handleBackToHome}
          />
        );
      case "about":
        return (
          <AboutPage 
            currentLang={currentLang}
            onBack={handleBackToHome}
          />
        );
      case "contact":
        return (
          <ContactPage 
            currentLang={currentLang}
            onBack={handleBackToHome}
          />
        );
      case "book-appointment":
        return (
          <BookAppointmentPage 
            currentLang={currentLang}
            onBack={handleBackToHome}
          />
        );
      default:
        return (
          <HomePage 
            currentLang={currentLang}
            onFindDoctor={() => setCurrentPage("find-doctor")} // FIXED: Now goes to find-doctor
            onBookAppointment={() => setCurrentPage("book-appointment")}
          />
        );
    }
  };

  return (
    <>
      <Header 
        currentLang={currentLang} 
        onLanguageToggle={handleLanguageToggle}
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />
      <main>
        {renderPage()}
      </main>
      <Footer currentLang={currentLang} />
    </>
  );
}