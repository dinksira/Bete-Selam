import { Phone, Ambulance, MapPin, Clock, AlertCircle, Navigation, Heart, Activity } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/ImageWithFallback";

interface EmergencyPageProps {
  currentLang: "en" | "am";
  onBack: () => void;
}

export function EmergencyPage({ currentLang, onBack }: EmergencyPageProps) {
  const emergencyNumber = "907";
  const hospitalNumber = "+251 11 123 4567";

  const emergencySigns = [
    {
      title: currentLang === "en" ? "Chest Pain" : "የደረት ህመም",
      symptoms: [
        currentLang === "en" ? "Severe chest pressure" : "ከባድ የደረት ጫና",
        currentLang === "en" ? "Pain radiating to arm" : "ወደ እጅ የሚተላለፍ ህመም",
        currentLang === "en" ? "Shortness of breath" : "የትንፋሽ እጥረት",
      ],
      action: currentLang === "en" ? "Call 907 immediately" : "907 ወዲያውኑ ይደውሉ",
      urgent: true,
    },
    {
      title: currentLang === "en" ? "Stroke Symptoms" : "የስትሮክ ምልክቶች",
      symptoms: [
        currentLang === "en" ? "Face drooping" : "ፊት መውደቅ",
        currentLang === "en" ? "Arm weakness" : "የእጅ ድክመት",
        currentLang === "en" ? "Speech difficulty" : "የመናገር ችግር",
      ],
      action: currentLang === "en" ? "Time is critical - Call 907" : "ጊዜ ወሳኝ ነው - 907 ይደውሉ",
      urgent: true,
    },
    {
      title: currentLang === "en" ? "Severe Bleeding" : "ከባድ ደም መፍሰስ",
      symptoms: [
        currentLang === "en" ? "Uncontrolled bleeding" : "ያልተቆጣጠረ ደም መፍሰስ",
        currentLang === "en" ? "Deep wounds" : "ጥልቅ ቁስሎች",
        currentLang === "en" ? "Heavy blood loss" : "ከባድ የደም መጥፋት",
      ],
      action: currentLang === "en" ? "Apply pressure & call 907" : "ጫና ይተግብሩ እና 907 ይደውሉ",
      urgent: true,
    },
    {
      title: currentLang === "en" ? "Difficulty Breathing" : "የመተንፈስ ችግር",
      symptoms: [
        currentLang === "en" ? "Severe shortness of breath" : "ከባድ የትንፋሽ እጥረት",
        currentLang === "en" ? "Blue lips or face" : "ሰማያዊ ከንፈሮች ወይም ፊት",
        currentLang === "en" ? "Cannot speak full sentences" : "ሙሉ ዓረፍተ ነገር መናገር አይችሉም",
      ],
      action: currentLang === "en" ? "Emergency care needed" : "የድንገተኛ እንክብካቤ ያስፈልጋል",
      urgent: true,
    },
  ];

  const locations = [
    {
      name: currentLang === "en" ? "Main Hospital - Bole" : "ዋና ሆስፒታል - ቦሌ",
      address: currentLang === "en" ? "Bole Road, Near Edna Mall" : "ቦሌ መንገድ፣ ኤድና ሞል አጠገብ",
      phone: "+251 11 123 4567",
      emergency: true,
    },
    {
      name: currentLang === "en" ? "Branch - Megenagna" : "ቅርንጫፍ - መገናኛ",
      address: currentLang === "en" ? "Megenagna, CMC Road" : "መገናኛ፣ ሲኤምሲ መንገድ",
      phone: "+251 11 567 8901",
      emergency: true,
    },
    {
      name: currentLang === "en" ? "Clinic - Piassa" : "ክሊኒክ - ፒያሳ",
      address: currentLang === "en" ? "Piassa, Churchill Road" : "ፒያሳ፣ ቸርችል መንገድ",
      phone: "+251 11 234 5678",
      emergency: false,
    },
  ];

  const whatToBring = [
    currentLang === "en" ? "Government-issued ID" : "መንግስት የሰጠ መታወቂያ",
    currentLang === "en" ? "Insurance card (if any)" : "የመድን ካርድ (ካለ)",
    currentLang === "en" ? "List of current medications" : "የአሁን መድሃኒቶች ዝርዝር",
    currentLang === "en" ? "Medical history records" : "የህክምና ታሪክ መዝገቦች",
    currentLang === "en" ? "Emergency contact information" : "የድንገተኛ ግንኙነት መረጃ",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Emergency Header */}
      <div className="bg-accent text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-smooth"
          >
            ← {currentLang === "en" ? "Back to Home" : "ወደ ቤት ተመለስ"}
          </button>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <AlertCircle className="w-10 h-10 text-accent" />
            </div>
            <div>
              <h1 className={`text-5xl ${currentLang === "am" ? "amharic" : ""}`}>
                {currentLang === "en" ? "Emergency Services" : "የድንገተኛ አገልግሎቶች"}
              </h1>
              <p className={`text-xl text-white/90 ${currentLang === "am" ? "amharic" : ""}`}>
                {currentLang === "en" ? "24/7 Emergency Care" : "24/7 የድንገተኛ እንክብካቤ"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Call Section */}
      <div className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="text-center md:text-left">
              <div className={`text-sm text-white/80 mb-1 ${currentLang === "am" ? "amharic" : ""}`}>
                {currentLang === "en" ? "Emergency Hotline" : "የድንገተኛ የእርዳታ መስመር"}
              </div>
              <div className="text-5xl md:text-6xl tracking-wider">{emergencyNumber}</div>
            </div>
            <div className="flex gap-4">
              <Button
                size="lg"
                onClick={() => (window.location.href = `tel:${emergencyNumber}`)}
                className="bg-accent hover:bg-accent-light text-white h-16 px-8 text-lg"
              >
                <Phone className="w-6 h-6 mr-3" />
                {currentLang === "en" ? "Call Emergency" : "ድንገተኛ ይደውሉ"}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => (window.location.href = `tel:${hospitalNumber}`)}
                className="border-white text-white hover:bg-white hover:text-primary h-16 px-8"
              >
                <Phone className="w-5 h-5 mr-2" />
                {currentLang === "en" ? "Main Line" : "ዋና መስመር"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Current ER Status */}
        <Card className="p-8 mb-12 bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20">
          <h2 className={`text-3xl mb-6 ${currentLang === "am" ? "amharic" : ""}`}>
            {currentLang === "en" ? "Current ER Status" : "የአሁኑ ድንገተኛ ክፍል ሁኔታ"}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-10 h-10 text-neutral-dark" />
              </div>
              <div className="text-3xl text-primary mb-1">~15 min</div>
              <div className={`text-neutral-dark/70 ${currentLang === "am" ? "amharic" : ""}`}>
                {currentLang === "en" ? "Average Wait Time" : "አማካይ የመጠበቂያ ጊዜ"}
              </div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Activity className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl text-primary mb-1">
                {currentLang === "en" ? "Moderate" : "መካከለኛ"}
              </div>
              <div className={`text-neutral-dark/70 ${currentLang === "am" ? "amharic" : ""}`}>
                {currentLang === "en" ? "Current Volume" : "የአሁኑ መጠን"}
              </div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl text-primary mb-1">12/15</div>
              <div className={`text-neutral-dark/70 ${currentLang === "am" ? "amharic" : ""}`}>
                {currentLang === "en" ? "Available Beds" : "ያሉ አልጋዎች"}
              </div>
            </div>
          </div>
        </Card>

        {/* When to Call Emergency */}
        <div className="mb-12">
          <h2 className={`text-3xl mb-6 ${currentLang === "am" ? "amharic" : ""}`}>
            {currentLang === "en" ? "When to Call 907" : "መቼ 907 መደወል አለብዎት"}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {emergencySigns.map((sign, index) => (
              <Card key={index} className="p-6 border-l-4 border-l-accent">
                <h3 className={`text-xl mb-3 text-accent ${currentLang === "am" ? "amharic" : ""}`}>
                  {sign.title}
                </h3>
                <ul className="space-y-2 mb-4">
                  {sign.symptoms.map((symptom, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className={currentLang === "am" ? "amharic" : ""}>{symptom}</span>
                    </li>
                  ))}
                </ul>
                <div className={`bg-accent/10 text-accent px-4 py-2 rounded-lg ${currentLang === "am" ? "amharic" : ""}`}>
                  <strong>{currentLang === "en" ? "Action:" : "እርምጃ:"}</strong> {sign.action}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Hospital Locations */}
        <div className="mb-12">
          <h2 className={`text-3xl mb-6 ${currentLang === "am" ? "amharic" : ""}`}>
            {currentLang === "en" ? "Emergency Locations" : "የድንገተኛ አድራሻዎች"}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <Card key={index} className={`p-6 ${location.emergency ? "border-2 border-accent" : ""}`}>
                {location.emergency && (
                  <div className="bg-accent text-white px-3 py-1 rounded-full text-sm inline-block mb-3">
                    {currentLang === "en" ? "24/7 Emergency" : "24/7 ድንገተኛ"}
                  </div>
                )}
                <h3 className={`text-xl mb-3 ${currentLang === "am" ? "amharic" : ""}`}>
                  {location.name}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className={`text-neutral-dark/70 ${currentLang === "am" ? "amharic" : ""}`}>
                      {location.address}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <a href={`tel:${location.phone}`} className="text-primary hover:underline">
                      {location.phone}
                    </a>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => window.open(`https://maps.google.com?q=${encodeURIComponent(location.address)}`, "_blank")}
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    {currentLang === "en" ? "Get Directions" : "አቅጣጫዎችን ያግኙ"}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* What to Bring */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className={`text-2xl mb-6 ${currentLang === "am" ? "amharic" : ""}`}>
              {currentLang === "en" ? "What to Bring" : "ምን ማምጣት እንደሚገባ"}
            </h3>
            <ul className="space-y-3">
              {whatToBring.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">{index + 1}</span>
                  </div>
                  <span className={currentLang === "am" ? "amharic" : ""}>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-primary to-primary-dark text-white">
            <Ambulance className="w-16 h-16 mb-4 text-secondary" />
            <h3 className={`text-2xl mb-4 ${currentLang === "am" ? "amharic" : ""}`}>
              {currentLang === "en" ? "Ambulance Service" : "የአምቡላንስ አገልግሎት"}
            </h3>
            <p className={`text-white/90 mb-6 ${currentLang === "am" ? "amharic" : ""}`}>
              {currentLang === "en"
                ? "Our fully equipped ambulances with trained paramedics are available 24/7 for emergency response."
                : "ሙሉ በሙሉ የታጠቁ አምቡላንሶቻችን ከሰለጠኑ ፓራሜዲክስ ጋር 24/7 ለድንገተኛ ምላሽ ይገኛሉ።"}
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className={currentLang === "am" ? "amharic" : ""}>
                  {currentLang === "en" ? "Advanced life support equipment" : "የላቀ የህይወት ድጋፍ መሳሪያ"}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className={currentLang === "am" ? "amharic" : ""}>
                  {currentLang === "en" ? "Trained paramedic staff" : "የሰለጠነ ፓራሜዲክ ሰራተኞች"}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className={currentLang === "am" ? "amharic" : ""}>
                  {currentLang === "en" ? "GPS tracking & fast response" : "GPS መከታተል እና ፈጣን ምላሽ"}
                </span>
              </li>
            </ul>
            <Button
              size="lg"
              onClick={() => (window.location.href = `tel:${emergencyNumber}`)}
              className="w-full bg-accent hover:bg-accent-light text-white"
            >
              <Phone className="w-5 h-5 mr-2" />
              {currentLang === "en" ? "Call for Ambulance" : "ለአምቡላንስ ይደውሉ"}
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
