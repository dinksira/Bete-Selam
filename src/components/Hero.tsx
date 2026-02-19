"use client";

import { Calendar, Video, MapPin, AlertCircle, Clock3, ShieldCheck, Star } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./ImageWithFallback";

interface HeroProps {
  currentLang: "en" | "am";
  onFindDoctor?: () => void;
  onBookAppointment?: () => void;
}

export function Hero({ currentLang, onFindDoctor, onBookAppointment }: HeroProps) {
  const quickActions = [
    {
      icon: AlertCircle,
      label: currentLang === "en" ? "Emergency" : "ድንገተኛ",
      description: currentLang === "en" ? "Immediate 24/7 support" : "24/7 ፈጣን እገዛ",
      color: "bg-red-500",
      href: "#emergency",
    },
    {
      icon: Calendar,
      label: currentLang === "en" ? "Book Appointment" : "ቀጠሮ ያስይዙ",
      description: currentLang === "en" ? "Pick your preferred time" : "የሚመችዎን ጊዜ ይምረጡ",
      color: "bg-primary",
      href: "#appointment",
    },
    {
      icon: Video,
      label: currentLang === "en" ? "Telemedicine" : "የቴሌሜዲሲን",
      description: currentLang === "en" ? "Consult from anywhere" : "ከየትም ቦታ ያማክሩ",
      color: "bg-secondary",
      href: "#telemedicine",
    },
    {
      icon: MapPin,
      label: currentLang === "en" ? "Locations" : "አድራሻዎች",
      description: currentLang === "en" ? "Visit nearby branches" : "ቅርብ ቅርንጫፎችን ይጎብኙ",
      color: "bg-gray-700",
      href: "#locations",
    },
  ];

  const trustHighlights = [
    {
      icon: Clock3,
      value: "24/7",
      label: currentLang === "en" ? "Emergency Response" : "የድንገተኛ ምላሽ",
    },
    {
      icon: ShieldCheck,
      value: "98%",
      label: currentLang === "en" ? "Patient Satisfaction" : "የታካሚ እርካታ",
    },
    {
      icon: Star,
      value: "4.9/5",
      label: currentLang === "en" ? "Care Experience" : "የእንክብካቤ ልምድ",
    },
  ];

  return (
    <section id="home" className="relative bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
      {/* Ethiopian Pattern Background */}
      <div className="absolute inset-0 ethiopian-pattern opacity-20"></div>

      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-20 lg:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-secondary text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                {currentLang === "en" ? "🏥 Trusted Since 2010" : "🏥 ከ2010 ዓ.ም ጀምሮ የታመነ"}
              </span>
            </div>

            <h1 className={`text-5xl lg:text-6xl font-bold leading-tight ${currentLang === "am" ? "amharic" : ""}`}>
              {currentLang === "en" ? (
                <>
                  Where Healing <br />
                  <span className="text-secondary">Begins</span>
                </>
              ) : (
                <>
                  የፈውስ <br />
                  <span className="text-secondary">መጀመሪያ</span>
                </>
              )}
            </h1>

            <p className={`text-xl text-white/90 max-w-xl leading-relaxed ${currentLang === "am" ? "amharic" : ""}`}>
              {currentLang === "en"
                ? "World-class healthcare with Ethiopian warmth. Available 24/7 for your health and peace of mind."
                : "በኢትዮጵያ ሙቀት ዓለም አቀፍ የጤና እንክብካቤ። ለጤናዎ እና ለአእምሮዎ ሰላም 24/7 ይገኛል።"}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary-dark text-gray-900 font-semibold text-lg px-8 py-3 rounded-lg"
                onClick={onBookAppointment}
              >
                {currentLang === "en" ? "Book Appointment" : "ቀጠሮ ያስይዙ"}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-3 rounded-lg"
                onClick={onFindDoctor}
              >
                {currentLang === "en" ? "Find a Doctor" : "ሐኪም ፈልግ"}
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
              {trustHighlights.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/15">
                  <div className="flex items-center gap-2 mb-1">
                    <item.icon className="w-4 h-4 text-secondary" />
                    <span className="font-semibold text-lg">{item.value}</span>
                  </div>
                  <p className={`text-sm text-white/85 ${currentLang === "am" ? "amharic" : ""}`}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=500&fit=crop"
                alt="Bete Selam Hospital"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">✓</span>
                </div>
                <div>
                  <div className={`font-semibold ${currentLang === "am" ? "amharic" : ""}`}>
                    {currentLang === "en" ? "MOH Certified" : "በጤና ሚኒስቴር የተረጋገጠ"}
                  </div>
                  <div className="text-sm text-gray-600">
                    {currentLang === "en" ? "Level 4 Hospital" : "ደረጃ 4 ሆስፒታል"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Access Bar */}
        <div className="mt-20">
          <div className="bg-white rounded-2xl shadow-2xl p-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <a
                  key={index}
                  href={action.href}
                  className="flex items-center gap-3 p-4 rounded-xl border border-transparent hover:bg-gray-50 hover:border-gray-100 transition-all duration-300 group"
                >
                  <div className={`${action.color} w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className={`text-gray-800 font-semibold block leading-tight ${currentLang === "am" ? "amharic" : ""}`}>
                      {action.label}
                    </span>
                    <span className={`text-xs text-gray-500 ${currentLang === "am" ? "amharic" : ""}`}>
                      {action.description}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
