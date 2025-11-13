"use client";

import { useState } from "react";
import {
  Heart,
  Stethoscope,
  Activity,
  Baby,
  Brain,
  Eye,
  Bone,
  Microscope,
  Ambulance,
  Users,
  Syringe,
  Search,
  ChevronRight,
  Clock,
  Award,
  CheckCircle,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { Badge } from "../components/ui/badge";

interface ServicesPageProps {
  currentLang: "en" | "am";
  onBack: () => void;
  onBookAppointment: () => void;
}

export default function ServicesPage({ currentLang, onBack, onBookAppointment }: ServicesPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { value: "all", label: currentLang === "en" ? "All Services" : "ሁሉም አገልግሎቶች" },
    { value: "emergency", label: currentLang === "en" ? "Emergency" : "ድንገተኛ" },
    { value: "specialist", label: currentLang === "en" ? "Specialist Care" : "ስፔሻሊስት እንክብካቤ" },
    { value: "diagnostic", label: currentLang === "en" ? "Diagnostic" : "ምርመራ" },
    { value: "surgical", label: currentLang === "en" ? "Surgical" : "ቀዶ ጥገና" },
  ];

  const services = [
    {
      icon: Ambulance,
      title: currentLang === "en" ? "Emergency Care" : "የድንገተኛ እንክብካቤ",
      category: "emergency",
      description:
        currentLang === "en"
          ? "24/7 emergency services with fully equipped trauma center, advanced life support ambulances, and rapid response team."
          : "24/7 የድንገተኛ አገልግሎቶች ሙሉ በሙሉ የታጠቀ የጉዳት ማዕከል፣ የላቀ የህይወት ድጋፍ አምቡላንሶች እና ፈጣን ምላሽ ቡድን።",
      features: [
        currentLang === "en" ? "24/7 Availability" : "24/7 መገኘት",
        currentLang === "en" ? "Trauma Center" : "የጉዳት ማዕከል",
        currentLang === "en" ? "Advanced Equipment" : "የላቀ መሳሪያ",
      ],
      price: currentLang === "en" ? "Emergency Fee: 500 ETB" : "የድንገተኛ ክፍያ: 500 ብር",
      available247: true,
      color: "bg-red-500",
    },
    {
      icon: Heart,
      title: currentLang === "en" ? "Cardiology" : "የልብ ሕክምና",
      category: "specialist",
      description:
        currentLang === "en"
          ? "Comprehensive heart care including diagnostics, interventional procedures, and cardiac rehabilitation."
          : "አጠቃላይ የልብ እንክብካቤ ምርመራዎችን፣ የጣልቃ ገብነት ሂደቶችን እና የልብ መልሶ ማቋቋምን ያካትታል።",
      features: [
        currentLang === "en" ? "ECG & Echo" : "ኢሲጂ እና ኢኮ",
        currentLang === "en" ? "Cardiac Cath Lab" : "የልብ ካት ላብ",
        currentLang === "en" ? "Rehabilitation" : "መልሶ ማቋቋም",
      ],
      price: currentLang === "en" ? "From 1,200 ETB" : "ከ1,200 ብር",
      available247: false,
      color: "bg-primary",
    },
    {
      icon: Baby,
      title: currentLang === "en" ? "Pediatrics & Neonatology" : "የህፃናት እና አዲስ የተወለዱ ሕክምና",
      category: "specialist",
      description:
        currentLang === "en"
          ? "Specialized care for children from newborns to adolescents, including NICU and pediatric surgery."
          : "ከአዲስ የተወለዱ እስከ ጎረምሶች ለልጆች ልዩ እንክብካቤ፣ NICU እና የህፃናት ቀዶ ጥገናን ጨምሮ።",
      features: [
        currentLang === "en" ? "NICU Level III" : "NICU ደረጃ III",
        currentLang === "en" ? "Vaccination Center" : "የክትባት ማዕከል",
        currentLang === "en" ? "Child Development" : "የልጅ እድገት",
      ],
      price: currentLang === "en" ? "From 800 ETB" : "ከ800 ብር",
      available247: true,
      color: "bg-secondary",
    },
    {
      icon: Brain,
      title: currentLang === "en" ? "Neurology & Neurosurgery" : "የነርቭ ሕክምና እና ቀዶ ጥገና",
      category: "specialist",
      description:
        currentLang === "en"
          ? "Expert care for brain, spine, and nervous system disorders with advanced imaging and surgical facilities."
          : "ለአንጎል፣ የአከርካሪ አጥንት እና የነርቭ ስርዓት በሽታዎች ባለሙያ እንክብካቤ የላቀ ምስል እና የቀዶ ጥገና መሳሪያዎች።",
      features: [
        currentLang === "en" ? "MRI & CT Scan" : "ኤምአርአይ እና ሲቲ ስካን",
        currentLang === "en" ? "Stroke Unit" : "የስትሮክ ክፍል",
        currentLang === "en" ? "Neurosurgery" : "የነርቭ ቀዶ ጥገና",
      ],
      price: currentLang === "en" ? "From 1,500 ETB" : "ከ1,500 ብር",
      available247: false,
      color: "bg-primary",
    },
    {
      icon: Bone,
      title: currentLang === "en" ? "Orthopedics & Trauma" : "የአጥንት እና ጉዳት ሕክምና",
      category: "specialist",
      description:
        currentLang === "en"
          ? "Complete bone and joint care including sports medicine, joint replacement, and trauma surgery."
          : "ሙሉ የአጥንት እና መገጣጠሚያ እንክብካቤ የስፖርት ሕክምና፣ የመገጣጠሚያ መተካት እና የጉዳት ቀዶ ጥገናን ጨምሮ።",
      features: [
        currentLang === "en" ? "Joint Replacement" : "የመገጣጠሚያ መተካት",
        currentLang === "en" ? "Sports Medicine" : "የስፖርት ሕክምና",
        currentLang === "en" ? "Physiotherapy" : "ፊዚዮቴራፒ",
      ],
      price: currentLang === "en" ? "From 1,000 ETB" : "ከ1,000 ብር",
      available247: false,
      color: "bg-gray-700",
    },
    {
      icon: Eye,
      title: currentLang === "en" ? "Ophthalmology" : "የዓይን ሕክምና",
      category: "specialist",
      description:
        currentLang === "en"
          ? "Complete eye care from routine exams to advanced cataract and laser surgery."
          : "ከመደበኛ ምርመራዎች እስከ የላቀ የዓይን ሞራ እና ሌዘር ቀዶ ጥገና ሙሉ የዓይን እንክብካቤ።",
      features: [
        currentLang === "en" ? "Cataract Surgery" : "የዓይን ሞራ ቀዶ ጥገና",
        currentLang === "en" ? "Laser Treatment" : "ሌዘር ሕክምና",
        currentLang === "en" ? "Retina Care" : "የረቲና እንክብካቤ",
      ],
      price: currentLang === "en" ? "From 700 ETB" : "ከ700 ብር",
      available247: false,
      color: "bg-secondary",
    },
    {
      icon: Microscope,
      title: currentLang === "en" ? "Laboratory Services" : "የላቦራቶሪ አገልግሎቶች",
      category: "diagnostic",
      description:
        currentLang === "en"
          ? "Advanced diagnostic testing with rapid results, including biochemistry, hematology, and microbiology."
          : "ፈጣን ውጤቶች ያላቸው የላቀ የምርመራ ምርመራዎች፣ ባዮኬሚስትሪ፣ ሄማቶሎጂ እና ማይክሮባዮሎጂን ጨምሮ።",
      features: [
        currentLang === "en" ? "Blood Tests" : "የደም ምርመራዎች",
        currentLang === "en" ? "Rapid Results" : "ፈጣን ውጤቶች",
        currentLang === "en" ? "Home Collection" : "ቤት ውስጥ ስብስብ",
      ],
      price: currentLang === "en" ? "From 150 ETB" : "ከ150 ብር",
      available247: true,
      color: "bg-primary",
    },
    {
      icon: Activity,
      title: currentLang === "en" ? "General Surgery" : "አጠቃላይ ቀዶ ጥገና",
      category: "surgical",
      description:
        currentLang === "en"
          ? "Modern surgical facilities with minimally invasive techniques and expert surgical team."
          : "ዘመናዊ የቀዶ ጥገና መሳሪያዎች አነስተኛ ወራሪ ቴክኒኮች እና ባለሙያ የቀዶ ጥገና ቡድን።",
      features: [
        currentLang === "en" ? "Laparoscopic Surgery" : "ላፓሮስኮፒክ ቀዶ ጥገና",
        currentLang === "en" ? "Day Surgery" : "የቀን ቀዶ ጥገና",
        currentLang === "en" ? "Post-op Care" : "ድህረ-ቀዶ ጥገና እንክብካቤ",
      ],
      price: currentLang === "en" ? "From 3,000 ETB" : "ከ3,000 ብር",
      available247: false,
      color: "bg-gray-700",
    },
    {
      icon: Stethoscope,
      title: currentLang === "en" ? "General Medicine" : "አጠቃላይ ሕክምና",
      category: "specialist",
      description:
        currentLang === "en"
          ? "Comprehensive primary care for all your health needs including chronic disease management."
          : "ሥር የሰደደ በሽታ አስተዳደርን ጨምሮ ለሁሉም የጤና ፍላጎቶችዎ አጠቃላይ ቀዳሚ እንክብካቤ።",
      features: [
        currentLang === "en" ? "Health Screening" : "የጤና ምርመራ",
        currentLang === "en" ? "Chronic Care" : "ሥር የሰደደ እንክብካቤ",
        currentLang === "en" ? "Preventive Care" : "መከላከያ እንክብካቤ",
      ],
      price: currentLang === "en" ? "From 500 ETB" : "ከ500 ብር",
      available247: false,
      color: "bg-primary",
    },
  ];

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      searchQuery === "" ||
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 ethiopian-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-all duration-300"
          >
            ← {currentLang === "en" ? "Back to Home" : "ወደ ቤት ተመለስ"}
          </button>
          <h1 className={`text-5xl font-bold mb-3 ${currentLang === "am" ? "amharic" : ""}`}>
            {currentLang === "en" ? "Our Services" : "የእኛ አገልግሎቶች"}
          </h1>
          <p className={`text-xl text-white/90 max-w-3xl ${currentLang === "am" ? "amharic" : ""}`}>
            {currentLang === "en"
              ? "Comprehensive healthcare services with the latest technology and compassionate care"
              : "በአዳዲስ ቴክኖሎጂ እና በርኅራኄ እንክብካቤ አጠቃላይ የጤና እንክብካቤ አገልግሎቶች"}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder={
                  currentLang === "en" ? "Search services..." : "አገልግሎቶችን ይፈልጉ..."
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg border-2 border-gray-200 focus:border-primary"
              />
            </div>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto gap-2 bg-transparent">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.value}
                  value={category.value}
                  className={`data-[state=active]:bg-primary data-[state=active]:text-white ${
                    currentLang === "am" ? "amharic" : ""
                  }`}
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredServices.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-2xl transition-all duration-300 group border-2 border-transparent hover:border-primary/20"
            >
              <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {service.available247 && (
                <Badge className="mb-3 bg-red-500 text-white">
                  {currentLang === "en" ? "24/7 Available" : "24/7 ይገኛል"}
                </Badge>
              )}

              <h3 className={`text-xl font-semibold mb-2 ${currentLang === "am" ? "amharic" : ""}`}>
                {service.title}
              </h3>

              <p className={`text-gray-600 mb-4 text-sm leading-relaxed ${currentLang === "am" ? "amharic" : ""}`}>
                {service.description}
              </p>

              <div className="space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className={currentLang === "am" ? "amharic" : ""}>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 mb-4">
                <div className={`text-sm text-gray-500 mb-1 ${currentLang === "am" ? "amharic" : ""}`}>
                  {currentLang === "en" ? "Starting Price" : "መነሻ ዋጋ"}
                </div>
                <div className="text-lg font-semibold text-primary">{service.price}</div>
              </div>

              <Button
                onClick={onBookAppointment}
                className="w-full bg-primary hover:bg-primary-dark font-semibold"
              >
                {currentLang === "en" ? "Book Now" : "አሁን ይይዙ"}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="bg-primary text-white rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Clock className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className={`text-2xl font-bold mb-2 ${currentLang === "am" ? "amharic" : ""}`}>
                {currentLang === "en" ? "Quick Service" : "ፈጣን አገልግሎት"}
              </h3>
              <p className={`text-white/80 ${currentLang === "am" ? "amharic" : ""}`}>
                {currentLang === "en"
                  ? "Minimal wait times with efficient care delivery"
                  : "ውጤታማ እንክብካቤ አቅርቦት ጋር አነስተኛ የመጠበቂያ ጊዜዎች"}
              </p>
            </div>
            <div>
              <Award className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className={`text-2xl font-bold mb-2 ${currentLang === "am" ? "amharic" : ""}`}>
                {currentLang === "en" ? "Expert Care" : "ባለሙያ እንክብካቤ"}
              </h3>
              <p className={`text-white/80 ${currentLang === "am" ? "amharic" : ""}`}>
                {currentLang === "en"
                  ? "Highly qualified specialists with years of experience"
                  : "ከብዙ አመታት ልምድ ጋር በከፍተኛ ደረጃ የተመረቁ ስፔሻሊስቶች"}
              </p>
            </div>
            <div>
              <Users className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className={`text-2xl font-bold mb-2 ${currentLang === "am" ? "amharic" : ""}`}>
                {currentLang === "en" ? "Patient First" : "ታካሚ በመጀመሪያ"}
              </h3>
              <p className={`text-white/80 ${currentLang === "am" ? "amharic" : ""}`}>
                {currentLang === "en"
                  ? "Personalized care tailored to your needs"
                  : "ለፍላጎቶችዎ የተበጀ ግላዊ እንክብካቤ"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}