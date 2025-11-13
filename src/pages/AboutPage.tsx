import { Award, Users, Heart, Target, Eye, Zap, Shield, Globe } from "lucide-react";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/ImageWithFallback";

interface AboutPageProps {
  currentLang: "en" | "am";
  onBack: () => void;
}

// ONLY CHANGE: Changed from named export to default export
export default function AboutPage({ currentLang, onBack }: AboutPageProps) {
  const milestones = [
    {
      year: "2010",
      title: currentLang === "en" ? "Hospital Founded" : "ሆስፒታል ተመሠረተ",
      description:
        currentLang === "en"
          ? "Started with 50 beds and a vision to provide world-class healthcare"
          : "በ50 አልጋዎች እና የዓለም አቀፍ የጤና እንክብካቤ ለማቅረብ ራዕይ ተጀመረ",
    },
    {
      year: "2013",
      title: currentLang === "en" ? "First Major Expansion" : "የመጀመሪያው ዋና ማስፋፊያ",
      description:
        currentLang === "en"
          ? "Added specialized departments and increased capacity to 150 beds"
          : "ልዩ ክፍሎችን ጨመረ እና አቅምን ወደ 150 አልጋዎች ጨመረ",
    },
    {
      year: "2016",
      title: currentLang === "en" ? "MOH Level 4 Certification" : "የጤና ሚኒስቴር ደረጃ 4 ማረጋገጫ",
      description:
        currentLang === "en"
          ? "Received highest hospital certification from Ministry of Health"
          : "ከጤና ሚኒስቴር ከፍተኛውን የሆስፒታል ማረጋገጫ ተቀበለ",
    },
    {
      year: "2019",
      title: currentLang === "en" ? "Telemedicine Launch" : "ቴሌሜዲሲን ጅምር",
      description:
        currentLang === "en"
          ? "Pioneered digital healthcare services in Ethiopia"
          : "በኢትዮጵያ ውስጥ ዲጂታል የጤና አገልግሎቶችን መሪ ሆነ",
    },
    {
      year: "2022",
      title: currentLang === "en" ? "Research Center Opening" : "የምርምር ማዕከል መክፈት",
      description:
        currentLang === "en"
          ? "Established dedicated medical research and training facility"
          : "የተወሰነ የሕክምና ምርምር እና ስልጠና መሳሪያ አቋቋመ",
    },
    {
      year: "2025",
      title: currentLang === "en" ? "45,000+ Patients Served" : "45,000+ ታካሚዎች ተገልግለዋል",
      description:
        currentLang === "en"
          ? "Continuing our mission to serve the community with excellence"
          : "ማህበረሰቡን በላቀ ሁኔታ ለማገልገል ተልእኮአችንን እንቀጥላለን",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: currentLang === "en" ? "Compassion" : "ርኅራኄ",
      description:
        currentLang === "en"
          ? "We treat every patient with empathy, dignity, and respect"
          : "እያንዳንዱን ታካሚ በአዘኔታ፣ በክብር እና በአክብሮት እናከብራለን",
      color: "bg-accent",
    },
    {
      icon: Award,
      title: currentLang === "en" ? "Excellence" : "ላቀ ያለ አገልግሎት",
      description:
        currentLang === "en"
          ? "Committed to the highest standards of medical care and service"
          : "ከፍተኛውን የሕክምና እንክብካቤ እና አገልግሎት መስፈርቶች ቁርጠኛ",
      color: "bg-primary",
    },
    {
      icon: Users,
      title: currentLang === "en" ? "Community" : "ማህበረሰብ",
      description:
        currentLang === "en"
          ? "Serving our community with accessible and affordable healthcare"
          : "ማህበረሰባችንን በተደራሽ እና በተመጣጣኝ ዋጋ የጤና እንክብካቤ እናገለግላለን",
      color: "bg-secondary",
    },
    {
      icon: Zap,
      title: currentLang === "en" ? "Innovation" : "ፈጠራ",
      description:
        currentLang === "en"
          ? "Embracing new technologies and medical advances"
          : "አዳዲስ ቴክኖሎጂዎችን እና የሕክምና እድገቶችን እንቀበላለን",
      color: "bg-primary",
    },
    {
      icon: Shield,
      title: currentLang === "en" ? "Safety" : "ደህንነት",
      description:
        currentLang === "en"
          ? "Patient safety is our top priority in everything we do"
          : "የታካሚ ደህንነት በምንሰራው ሁሉ የእኛ ቅድሚያ ነው",
      color: "bg-neutral-dark",
    },
    {
      icon: Globe,
      title: currentLang === "en" ? "Diversity" : "ልዩነት",
      description:
        currentLang === "en"
          ? "Celebrating diversity and providing culturally sensitive care"
          : "ልዩነትን እናከብራለን እና በባህል ስሜታዊ እንክብካቤ እንሰጣለን",
      color: "bg-secondary",
    },
  ];

  const team = [
    {
      name: "Dr. Yohannes Alemayehu",
      title: currentLang === "en" ? "Medical Director" : "የሕክምና ዳይሬክተር",
      image: "https://images.unsplash.com/photo-1694787590597-ba49c7cdc2cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhpb3BpYW4lMjBkb2N0b3IlMjBob3NwaXRhbHxlbnwxfHx8fDE3NjI5NjM1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      credentials: "MD, FACC",
    },
    {
      name: "Dr. Mulu Teshome",
      title: currentLang === "en" ? "Chief of Surgery" : "የቀዶ ጥገና ኃላፊ",
      image: "https://images.unsplash.com/photo-1587557983735-f05198060b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3RhZmYlMjB0ZWFtfGVufDF8fHx8MTc2MjkxMTQ1OXww&ixlib=rb-4.1.0&q=80&w=1080",
      credentials: "MD, FACS",
    },
    {
      name: "Ato Solomon Bekele",
      title: currentLang === "en" ? "CEO & Administrator" : "ዋና ሥራ አስፈፃሚ እና አስተዳዳሪ",
      image: "https://images.unsplash.com/photo-1762603677582-7b809b5490d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJchaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMG1lZGljYWx8ZW58MXx8fHwxNzYyOTYzNTQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      credentials: "MBA, MHA",
    },
  ];

  const stats = [
    {
      value: "45,000+",
      label: currentLang === "en" ? "Patients Annually" : "በዓመት ታካሚዎች",
      icon: Users,
    },
    {
      value: "150+",
      label: currentLang === "en" ? "Medical Staff" : "የሕክምና ሰራተኞች",
      icon: Award,
    },
    {
      value: "15+",
      label: currentLang === "en" ? "Years Experience" : "ዓመታት ልምድ",
      icon: Target,
    },
    {
      value: "24/7",
      label: currentLang === "en" ? "Emergency Care" : "የድንገተኛ እንክብካቤ",
      icon: Heart,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 ethiopian-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-smooth"
          >
            ← {currentLang === "en" ? "Back to Home" : "ወደ ቤት ተመለስ"}
          </button>
          <div className="max-w-3xl">
            <h1 className={`text-5xl mb-4 ${currentLang === "am" ? "amharic" : ""}`}>
              {currentLang === "en" ? "About Bete Selam" : "ስለ ቤተ ሰላም"}
            </h1>
            <p className={`text-2xl text-white/90 ${currentLang === "am" ? "amharic" : ""}`}>
              {currentLang === "en"
                ? "Where Healing Begins - House of Peace"
                : "የፈውስ መጀመሪያ - የሰላም ቤት"}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 border-l-4 border-l-primary">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-10 h-10 text-primary" />
              <h2 className={`text-3xl ${currentLang === "am" ? "amharic" : ""}`}>
                {currentLang === "en" ? "Our Mission" : "የእኛ ተልእኮ"}
              </h2>
            </div>
            <p className={`text-lg text-neutral-dark/80 leading-relaxed ${currentLang === "am" ? "amharic" : ""}`}>
              {currentLang === "en"
                ? "To provide world-class healthcare services that combine advanced medical technology with traditional Ethiopian warmth and hospitality, making quality healthcare accessible to all members of our community."
                : "የላቀ የሕክምና ቴክኖሎጂን ከባህላዊ የኢትዮጵያ ሙቀት እና እንግዳ መስተንግዶ ጋር የሚያጣምሩ የዓለም አቀፍ የጤና አገልግሎቶችን ለማቅረብ፣ ለሁሉም የማህበረሰባችን አባላት ጥራት ያለው የጤና እንክብካቤ ተደራሽ ማድረግ።"}
            </p>
          </Card>

          <Card className="p-8 border-l-4 border-l-secondary">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-10 h-10 text-secondary" />
              <h2 className={`text-3xl ${currentLang === "am" ? "amharic" : ""}`}>
                {currentLang === "en" ? "Our Vision" : "የእኛ ራዕይ"}
              </h2>
            </div>
            <p className={`text-lg text-neutral-dark/80 leading-relaxed ${currentLang === "am" ? "amharic" : ""}`}>
              {currentLang === "en"
                ? "To be the leading healthcare institution in Ethiopia, recognized for excellence in patient care, medical innovation, and community health advancement, while maintaining our Ethiopian values and heritage."
                : "በታካሚ እንክብካቤ፣ የሕክምና ፈጠራ እና የማህበረሰብ ጤና እድገት ላይ በላቀ ሁኔታ የሚታወቅ፣ የኢትዮጵያ እሴቶቻችንን እና ቅርሳችንን እየጠበቅን በኢትዮጵያ ውስጥ መሪ የጤና ተቋም መሆን።"}
            </p>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-xl transition-smooth">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl text-primary mb-2">{stat.value}</div>
              <div className={`text-neutral-dark/70 ${currentLang === "am" ? "amharic" : ""}`}>
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <h2 className={`text-4xl mb-8 text-center ${currentLang === "am" ? "amharic" : ""}`}>
            {currentLang === "en" ? "Our Journey" : "የእኛ ጉዞ"}
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1">
                    <Card className="p-6 hover:shadow-xl transition-smooth">
                      <div className="text-3xl text-primary mb-2">{milestone.year}</div>
                      <h3 className={`text-xl mb-2 ${currentLang === "am" ? "amharic" : ""}`}>
                        {milestone.title}
                      </h3>
                      <p className={`text-neutral-dark/70 ${currentLang === "am" ? "amharic" : ""}`}>
                        {milestone.description}
                      </p>
                    </Card>
                  </div>
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 relative z-10 border-4 border-background">
                    <div className="w-4 h-4 bg-secondary rounded-full"></div>
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className={`text-4xl mb-8 text-center ${currentLang === "am" ? "amharic" : ""}`}>
            {currentLang === "en" ? "Our Core Values" : "የእኛ ዋና እሴቶች"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 group border-2 border-transparent hover:border-primary/20"
              >
                <div className={`${value.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className={`text-xl mb-2 ${currentLang === "am" ? "amharic" : ""}`}>
                  {value.title}
                </h3>
                <p className={`text-neutral-dark/70 ${currentLang === "am" ? "amharic" : ""}`}>
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h2 className={`text-4xl mb-8 text-center ${currentLang === "am" ? "amharic" : ""}`}>
            {currentLang === "en" ? "Our Leadership" : "የእኛ አመራሮች"}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-smooth">
                <div className="h-80 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-1">{member.name}</h3>
                  <p className={`text-primary mb-2 ${currentLang === "am" ? "amharic" : ""}`}>
                    {member.title}
                  </p>
                  <p className="text-sm text-neutral-dark/60">{member.credentials}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5">
          <h2 className={`text-4xl mb-8 text-center ${currentLang === "am" ? "amharic" : ""}`}>
            {currentLang === "en" ? "Accreditations & Certifications" : "እውቅናዎች እና ማረጋገጫዎች"}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <Award className="w-12 h-12 text-primary flex-shrink-0" />
              <div>
                <h3 className={`text-xl mb-2 ${currentLang === "am" ? "amharic" : ""}`}>
                  {currentLang === "en"
                    ? "Ministry of Health - Level 4 Hospital"
                    : "የጤና ሚኒስቴር - ደረጃ 4 ሆስፒታል"}
                </h3>
                <p className={`text-neutral-dark/70 ${currentLang === "am" ? "amharic" : ""}`}>
                  {currentLang === "en"
                    ? "Highest certification for comprehensive healthcare services"
                    : "ለአጠቃላይ የጤና አገልግሎቶች ከፍተኛው ማረጋገጫ"}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Shield className="w-12 h-12 text-primary flex-shrink-0" />
              <div>
                <h3 className={`text-xl mb-2 ${currentLang === "am" ? "amharic" : ""}`}>
                  {currentLang === "en"
                    ? "International Quality Standards"
                    : "አለም አቀፍ የጥራት ደረጃዎች"}
                </h3>
                <p className={`text-neutral-dark/70 ${currentLang === "am" ? "amharic" : ""}`}>
                  {currentLang === "en"
                    ? "ISO 9001 certified for quality management systems"
                    : "ለጥራት አስተዳደር ስርዓቶች ISO 9001 የተረጋገጠ"}
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}