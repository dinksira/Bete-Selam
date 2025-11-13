"use client";

import {
  Heart,
  Stethoscope,
  Activity,
  Baby,
  Brain,
  Eye,
  Bone,
  Microscope,
  Syringe,
  Ambulance,
  Clock,
  Users,
} from "lucide-react";
import { Hero } from "../components/Hero";
import { ServiceCard } from "../components/ServiceCard";
import { DoctorCard } from "../components/DoctorCard";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { Button } from "../components/ui/button";

interface HomePageProps {
  currentLang: "en" | "am";
  onFindDoctor: () => void;
  onBookAppointment: () => void;
}

export function HomePage({ currentLang, onFindDoctor, onBookAppointment }: HomePageProps) {
  const services = [
    {
      icon: Ambulance,
      title: currentLang === "en" ? "Emergency Care" : "የድንገተኛ እንክብካቤ",
      description:
        currentLang === "en"
          ? "24/7 emergency services with fully equipped ambulances and trauma care"
          : "24/7 የድንገተኛ አገልግሎቶች ሙሉ በሙሉ የታጠቁ አምቡላንሶች እና ጉዳት እንክብካቤ",
      color: "bg-red-500",
      available247: true,
    },
    {
      icon: Heart,
      title: currentLang === "en" ? "Cardiology" : "የልብ ሕክምና",
      description:
        currentLang === "en"
          ? "Advanced heart care with state-of-the-art diagnostic and treatment facilities"
          : "ከፍተኛ የልብ እንክብካቤ ዘመናዊ ምርመራ እና ሕክምና መሳሪያዎች",
      color: "bg-primary",
    },
    {
      icon: Baby,
      title: currentLang === "en" ? "Pediatrics" : "የህፃናት ሕክምና",
      description:
        currentLang === "en"
          ? "Specialized care for children from newborns to adolescents"
          : "ከአዲስ የተወለዱ እስከ ጎረምሶች ለልጆች ልዩ እንክብካቤ",
      color: "bg-primary-light",
      available247: true,
    },
    {
      icon: Stethoscope,
      title: currentLang === "en" ? "General Medicine" : "አጠቃላይ ሕክምና",
      description:
        currentLang === "en"
          ? "Comprehensive primary care for all your health needs"
          : "ለሁሉም የጤና ፍላጎቶችዎ አጠቃላይ ቀዳሚ እንክብካቤ",
      color: "bg-primary",
    },
    {
      icon: Activity,
      title: currentLang === "en" ? "Surgery" : "ቀዶ ጥገና",
      description:
        currentLang === "en"
          ? "Modern surgical facilities with experienced surgeons"
          : "ዘመናዊ የቀዶ ጥገና መሳሪያዎች ልምድ ካላቸው ቀዶ ጥገና ሐኪሞች ጋር",
      color: "bg-neutral-dark",
    },
    {
      icon: Brain,
      title: currentLang === "en" ? "Neurology" : "የነርቭ ሕክምና",
      description:
        currentLang === "en"
          ? "Expert care for brain, spine, and nervous system disorders"
          : "ለአንጎል፣ የአከርካሪ አጥንት እና የነርቭ ስርዓት በሽታዎች ባለሙያ እንክብካቤ",
      color: "bg-primary",
    },
    {
      icon: Eye,
      title: currentLang === "en" ? "Ophthalmology" : "የዓይን ሕክምና",
      description:
        currentLang === "en"
          ? "Complete eye care from routine exams to advanced surgery"
          : "ከመደበኛ ምርመራዎች እስከ ከፍተኛ ቀዶ ጥገና ሙሉ የዓይን እንክብካቤ",
      color: "bg-primary-light",
    },
    {
      icon: Microscope,
      title: currentLang === "en" ? "Laboratory Services" : "የላቦራቶሪ አገልግሎቶች",
      description:
        currentLang === "en"
          ? "Advanced diagnostic testing with quick and accurate results"
          : "ፈጣን እና ትክክለኛ ውጤቶች ከፍተኛ የምርመራ ምርመራ",
      color: "bg-primary",
      available247: true,
    },
  ];

  const doctors = [
    {
      name: "Dr. Abebe Tadesse",
      specialty: "Cardiologist",
      specialtyAm: "የልብ ሐኪም",
      experience: "15 years",
      rating: 4.9,
      reviews: 234,
      languages: ["English", "Amharic", "Oromo"],
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
      available: true,
    },
    {
      name: "Dr. Sara Mengistu",
      specialty: "Pediatrician",
      specialtyAm: "የህፃናት ሐኪም",
      experience: "12 years",
      rating: 5.0,
      reviews: 189,
      languages: ["English", "Amharic"],
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
      available: true,
    },
    {
      name: "Dr. Dawit Bekele",
      specialty: "Neurologist",
      specialtyAm: "የነርቭ ሐኪም",
      experience: "18 years",
      rating: 4.8,
      reviews: 156,
      languages: ["English", "Amharic", "French"],
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
      available: false,
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "45,000+",
      label: currentLang === "en" ? "Patients Treated Annually" : "በዓመት የታከሙ ታካሚዎች",
    },
    {
      icon: Stethoscope,
      value: "150+",
      label: currentLang === "en" ? "Expert Doctors" : "ባለሙያ ሐኪሞች",
    },
    {
      icon: Ambulance,
      value: "24/7",
      label: currentLang === "en" ? "Emergency Services" : "የድንገተኛ አገልግሎቶች",
    },
    {
      icon: Clock,
      value: "< 15 min",
      label: currentLang === "en" ? "Average ER Wait Time" : "አማካይ የድንገተኛ መጠበቂያ ጊዜ",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero currentLang={currentLang} onFindDoctor={onFindDoctor} onBookAppointment={onBookAppointment} />

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              {currentLang === "en" ? "Our Services" : "የእኛ አገልግሎቶች"}
            </span>
            <h2 className={`text-4xl font-bold mb-4 ${currentLang === "am" ? "amharic" : ""}`}>
              {currentLang === "en" ? "Comprehensive Healthcare Services" : "አጠቃላይ የጤና እንክብካቤ አገልግሎቶች"}
            </h2>
            <p className={`text-gray-600 max-w-2xl mx-auto text-lg ${currentLang === "am" ? "amharic" : ""}`}>
              {currentLang === "en"
                ? "From emergency care to specialized treatments, we offer a full spectrum of medical services with the latest technology and compassionate care."
                : "ከድንገተኛ እንክብካቤ እስከ ልዩ ህክምናዎች፣ በአዳዲስ ቴክኖሎጂ እና በርኅራኄ እንክብካቤ ሙሉ የሕክምና አገልግሎቶችን እናቀርባለን።"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} currentLang={currentLang} />
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              {currentLang === "en" ? "Our Healers" : "የእኛ ፈዋሾች"}
            </span>
            <h2 className={`text-4xl font-bold mb-4 ${currentLang === "am" ? "amharic" : ""}`}>
              {currentLang === "en" ? "Meet Our Expert Doctors" : "ባለሙያ ሐኪሞቻችንን ያግኙ"}
            </h2>
            <p className={`text-gray-600 max-w-2xl mx-auto text-lg ${currentLang === "am" ? "amharic" : ""}`}>
              {currentLang === "en"
                ? "Our team of highly qualified doctors brings together local expertise and international training to provide you with world-class care."
                : "በከፍተኛ ደረጃ የተመሰከረላቸው የሐኪሞች ቡድናችን የአገር ውስጥ እውቀትን እና አለም አቀፍ ስልጠናን አንድ ላይ በማድረግ የዓለም አቀፍ እንክብካቤ ይሰጥዎታል።"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {doctors.map((doctor, index) => (
              <DoctorCard key={index} {...doctor} currentLang={currentLang} />
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white font-semibold"
              onClick={onFindDoctor}
            >
              {currentLang === "en" ? "View All Doctors →" : "ሁሉንም ሐኪሞች ይመልከቱ →"}
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 ethiopian-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-gray-800" />
                  </div>
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className={`text-white/80 ${currentLang === "am" ? "amharic" : ""}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                {currentLang === "en" ? "Why Choose Us" : "ለምን እኛን ይምረጡ"}
              </span>
              <h2 className={`text-4xl font-bold mb-6 ${currentLang === "am" ? "amharic" : ""}`}>
                {currentLang === "en"
                  ? "Your Health, Our Priority"
                  : "ጤናዎ፣ የእኛ ቅድሚያ"}
              </h2>
              <p className={`text-gray-600 mb-6 text-lg leading-relaxed ${currentLang === "am" ? "amharic" : ""}`}>
                {currentLang === "en"
                  ? "At Bete Selam Hospital, we combine cutting-edge medical technology with traditional Ethiopian hospitality to create a healing environment where patients feel cared for and families feel supported."
                  : "በቤተ ሰላም ሆስፒታል፣ ዘመናዊ የሕክምና ቴክኖሎጂን ከባህላዊ የኢትዮጵያ እንግዳ መስተንግዶ ጋር አጣምረን ታካሚዎች እንክብካቤ እንደተደረገላቸው እና ቤተሰቦች ድጋፍ እንደተደረገላቸው የሚሰማቸው የፈውስ አካባቢ እንፈጥራለን።"}
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: currentLang === "en" ? "State-of-the-art Facilities" : "ዘመናዊ መሳሪያዎች",
                    desc: currentLang === "en" ? "Latest medical equipment and technology" : "የቅርብ ጊዜ የሕክምና መሳሪያዎች እና ቴክኖሎጂ",
                  },
                  {
                    title: currentLang === "en" ? "Expert Medical Team" : "ባለሙያ የሕክምና ቡድን",
                    desc: currentLang === "en" ? "Highly qualified and experienced doctors" : "በከፍተኛ ደረጃ የተመረቁ እና ልምድ ያላቸው ሐኪሞች",
                  },
                  {
                    title: currentLang === "en" ? "Patient-Centered Care" : "በታካሚ ላይ ያተኮረ እንክብካቤ",
                    desc: currentLang === "en" ? "Personalized treatment plans for every patient" : "ለእያንዳንዱ ታካሚ የተበጀ የሕክምና እቅድ",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 bg-secondary rounded-full"></div>
                    </div>
                    <div>
                      <h4 className={`font-semibold text-lg mb-1 ${currentLang === "am" ? "amharic" : ""}`}>
                        {item.title}
                      </h4>
                      <p className={`text-gray-600 text-sm ${currentLang === "am" ? "amharic" : ""}`}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=500&fit=crop"
                  alt="Hospital facility"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className={`text-gray-800 font-semibold ${currentLang === "am" ? "amharic" : ""}`}>
                  {currentLang === "en" ? "Years of Excellence" : "ዓመታት የላቀ አገልግሎት"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 ethiopian-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`text-4xl font-bold mb-6 ${currentLang === "am" ? "amharic" : ""}`}>
              {currentLang === "en"
                ? "Ready to Take Control of Your Health?"
                : "የጤናዎን ቁጥጥር ለመያዝ ዝግጁ ነዎት?"}
            </h2>
            <p className={`text-xl text-white/90 mb-8 ${currentLang === "am" ? "amharic" : ""}`}>
              {currentLang === "en"
                ? "Book an appointment with our expert doctors today and experience healthcare that truly cares."
                : "ዛ ከባለሙያ ሐኪሞቻችን ጋር ቀጠሮ ያስይዙ እና በእውነት የሚያስብ የጤና እንክብካቤን ይለማመዱ።"}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary-dark text-gray-900 font-semibold"
                onClick={onBookAppointment}
              >
                {currentLang === "en" ? "Book Appointment" : "ቀጠሮ ያስይዙ"}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary font-semibold"
              >
                {currentLang === "en" ? "Call: +251 11 123 4567" : "ይደውሉ: +251 11 123 4567"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}