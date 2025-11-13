import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Card } from "../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

interface ContactPageProps {
  currentLang: "en" | "am";
  onBack: () => void;
}

export function ContactPage({ currentLang, onBack }: ContactPageProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: currentLang === "en" ? "Phone" : "ስልክ",
      details: [
        { label: currentLang === "en" ? "Main Line" : "ዋና መስመር", value: "+251 11 123 4567" },
        { label: currentLang === "en" ? "Emergency" : "ድንገተኛ", value: "907" },
        { label: currentLang === "en" ? "Appointments" : "ቀጠሮዎች", value: "+251 11 567 8901" },
      ],
      color: "bg-primary",
    },
    {
      icon: Mail,
      title: currentLang === "en" ? "Email" : "ኢሜይል",
      details: [
        { label: currentLang === "en" ? "General Inquiries" : "አጠቃላይ ጥያቄዎች", value: "info@beteselam.et" },
        { label: currentLang === "en" ? "Appointments" : "ቀጠሮዎች", value: "appointments@beteselam.et" },
        { label: currentLang === "en" ? "Billing" : "ክፍያ", value: "billing@beteselam.et" },
      ],
      color: "bg-secondary",
    },
    {
      icon: Clock,
      title: currentLang === "en" ? "Working Hours" : "የስራ ሰዓቶች",
      details: [
        {
          label: currentLang === "en" ? "Emergency" : "ድንገተኛ",
          value: currentLang === "en" ? "24/7 - Always Open" : "24/7 - ሁልጊዜ ክፍት",
        },
        {
          label: currentLang === "en" ? "Outpatient" : "ውጫዊ ታካሚ",
          value: currentLang === "en" ? "Mon-Sat: 8AM - 6PM" : "ሰኞ-ቅዳሜ: 8:00 - 6:00",
        },
        {
          label: currentLang === "en" ? "Admin" : "አስተዳደር",
          value: currentLang === "en" ? "Mon-Fri: 8AM - 5PM" : "ሰኞ-አርብ: 8:00 - 5:00",
        },
      ],
      color: "bg-accent",
    },
  ];

  const locations = [
    {
      name: currentLang === "en" ? "Main Hospital - Bole" : "ዋና ሆስፒታል - ቦሌ",
      address:
        currentLang === "en"
          ? "Bole Road, Near Edna Mall, Addis Ababa, Ethiopia"
          : "ቦሌ መንገድ፣ ኤድና ሞል አጠገብ፣ አዲስ አበባ፣ ኢትዮጵያ",
      phone: "+251 11 123 4567",
      services: currentLang === "en" ? "Full Service Hospital, Emergency, Surgery" : "ሙሉ አገልግሎት ሆስፒታል፣ ድንገተኛ፣ ቀዶ ጥገና",
      isMain: true,
      coordinates: { lat: 9.0227, lng: 38.7863 }
    },
    {
      name: currentLang === "en" ? "Branch Hospital - Megenagna" : "ቅርንጫፍ ሆስፒታል - መገናኛ",
      address:
        currentLang === "en"
          ? "Megenagna, CMC Road, Addis Ababa, Ethiopia"
          : "መገናኛ፣ ሲኤምሲ መንገድ፣ አዲስ አበባ፣ ኢትዮጵያ",
      phone: "+251 11 567 8901",
      services: currentLang === "en" ? "Outpatient Care, Laboratory, Pharmacy" : "ውጫዊ እንክብካቤ፣ ላቦራቶሪ፣ ፋርማሲ",
      isMain: false,
      coordinates: { lat: 9.0186, lng: 38.7996 }
    },
    {
      name: currentLang === "en" ? "Clinic - Piassa" : "ክሊኒክ - ፒያሳ",
      address:
        currentLang === "en"
          ? "Piassa, Churchill Road, Addis Ababa, Ethiopia"
          : "ፒያሳ፣ ቸርችል መንገድ፣ አዲስ አበባ፣ ኢትዮጵያ",
      phone: "+251 11 234 5678",
      services: currentLang === "en" ? "Primary Care, Consultations" : "ቀዳሚ እንክብካቤ፣ ምክክሮች",
      isMain: false,
      coordinates: { lat: 9.0300, lng: 38.7560 }
    },
  ];

  const departments = [
    { value: "general", label: currentLang === "en" ? "General Inquiry" : "አጠቃላይ ጥያቄ" },
    { value: "appointments", label: currentLang === "en" ? "Appointments" : "ቀጠሮዎች" },
    { value: "billing", label: currentLang === "en" ? "Billing & Insurance" : "ክፍያ እና መድን" },
    { value: "medical", label: currentLang === "en" ? "Medical Records" : "የሕክምና መዝገቦች" },
    { value: "feedback", label: currentLang === "en" ? "Feedback & Complaints" : "አስተያየት እና ቅሬታዎች" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 ethiopian-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-smooth"
          >
            ← {currentLang === "en" ? "Back to Home" : "ወደ ቤት ተመለስ"}
          </button>
          <h1 className={`text-5xl mb-3 ${currentLang === "am" ? "amharic" : ""}`}>
            {currentLang === "en" ? "Contact Us" : "አግኙን"}
          </h1>
          <p className={`text-xl text-white/90 ${currentLang === "am" ? "amharic" : ""}`}>
            {currentLang === "en"
              ? "We're here to help. Reach out to us anytime."
              : "እርዳታ ለመስጠት እዚህ ነን። በማንኛውም ጊዜ ያግኙን።"}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-smooth">
              <div className={`${method.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                <method.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className={`text-xl mb-4 ${currentLang === "am" ? "amharic" : ""}`}>
                {method.title}
              </h3>
              <div className="space-y-3">
                {method.details.map((detail, idx) => (
                  <div key={idx}>
                    <div className={`text-sm text-neutral-dark/60 mb-1 ${currentLang === "am" ? "amharic" : ""}`}>
                      {detail.label}
                    </div>
                    <div className="text-primary">{detail.value}</div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-8 h-8 text-primary" />
              <h2 className={`text-3xl ${currentLang === "am" ? "amharic" : ""}`}>
                {currentLang === "en" ? "Send us a Message" : "መልእክት ይላኩልን"}
              </h2>
            </div>

            {formSubmitted && (
              <div className="bg-primary/10 text-primary p-4 rounded-lg mb-6">
                {currentLang === "en"
                  ? "✓ Message sent successfully! We'll get back to you soon."
                  : "✓ መልእክት በተሳካ ሁኔታ ተልኳል! በቅርቡ እናገኝዎታለን።"}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className={currentLang === "am" ? "amharic" : ""}>
                    {currentLang === "en" ? "First Name" : "ስም"}
                  </Label>
                  <Input id="firstName" required />
                </div>
                <div>
                  <Label htmlFor="lastName" className={currentLang === "am" ? "amharic" : ""}>
                    {currentLang === "en" ? "Last Name" : "የአባት ስም"}
                  </Label>
                  <Input id="lastName" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className={currentLang === "am" ? "amharic" : ""}>
                    {currentLang === "en" ? "Email" : "ኢሜይል"}
                  </Label>
                  <Input id="email" type="email" required />
                </div>
                <div>
                  <Label htmlFor="phone" className={currentLang === "am" ? "amharic" : ""}>
                    {currentLang === "en" ? "Phone Number" : "ስልክ ቁጥር"}
                  </Label>
                  <Input id="phone" type="tel" placeholder="+251..." />
                </div>
              </div>

              <div>
                <Label htmlFor="department" className={currentLang === "am" ? "amharic" : ""}>
                  {currentLang === "en" ? "Subject" : "ርዕሰ ጉዳይ"}
                </Label>
                <Select>
                  <SelectTrigger id="department">
                    <SelectValue
                      placeholder={currentLang === "en" ? "Select a subject..." : "ርዕሰ ጉዳይ ይምረጡ..."}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept.value} value={dept.value}>
                        {dept.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className={currentLang === "am" ? "amharic" : ""}>
                  {currentLang === "en" ? "Message" : "መልእክት"}
                </Label>
                <Textarea
                  id="message"
                  rows={6}
                  placeholder={
                    currentLang === "en"
                      ? "How can we help you?"
                      : "እንዴት እንረዳዎት?"
                  }
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary-dark" size="lg">
                <Send className="w-5 h-5 mr-2" />
                {currentLang === "en" ? "Send Message" : "መልእክት ላክ"}
              </Button>
            </form>
          </Card>

          {/* Locations */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-primary" />
              <h2 className={`text-3xl ${currentLang === "am" ? "amharic" : ""}`}>
                {currentLang === "en" ? "Our Locations" : "የእኛ አድራሻዎች"}
              </h2>
            </div>

            {locations.map((location, index) => (
              <Card
                key={index}
                className={`p-6 hover:shadow-xl transition-smooth ${
                  location.isMain ? "border-2 border-primary" : ""
                }`}
              >
                {location.isMain && (
                  <div className="bg-primary text-white px-3 py-1 rounded-full text-sm inline-block mb-3">
                    {currentLang === "en" ? "Main Hospital" : "ዋና ሆስፒታል"}
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
                  <div className={`text-sm text-neutral-dark/60 ${currentLang === "am" ? "amharic" : ""}`}>
                    {location.services}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full mt-3"
                    onClick={() =>
                      window.open(
                        `https://maps.google.com?q=${encodeURIComponent(location.address)}`,
                        "_blank"
                      )
                    }
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    {currentLang === "en" ? "Get Directions" : "አቅጣጫዎችን ያግኙ"}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <Card className="p-8 mb-12">
          <h2 className={`text-3xl mb-6 ${currentLang === "am" ? "amharic" : ""}`}>
            {currentLang === "en" ? "Find Us on Map" : "በካርታ ላይ ያግኙን"}
          </h2>
          <div className="bg-neutral-light rounded-xl h-96 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.755234294766!2d38.78372527500716!3d9.02270009093064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85e2c3e37c0f%3A0x5a2a8d6d7b3f3e3a!2sBole%20Road%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1698765432100!5m2!1sen!2set"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(20%) contrast(90%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bete Selam Hospital Locations"
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {locations.map((location, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${location.isMain ? 'bg-accent' : 'bg-primary'}`}></div>
                <span className={`text-sm ${currentLang === "am" ? "amharic" : ""}`}>
                  {location.name.split(' - ')[1]}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Social Media & Additional Info */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className={`text-2xl mb-6 ${currentLang === "am" ? "amharic" : ""}`}>
              {currentLang === "en" ? "Connect With Us" : "ከእኛ ጋር ተገናኝ"}
            </h3>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-12 h-12 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center transition-smooth group"
              >
                <Facebook className="w-6 h-6 text-primary group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center transition-smooth group"
              >
                <Twitter className="w-6 h-6 text-primary group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center transition-smooth group"
              >
                <Instagram className="w-6 h-6 text-primary group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center transition-smooth group"
              >
                <Linkedin className="w-6 h-6 text-primary group-hover:text-white" />
              </a>
            </div>
            <p className={`text-neutral-dark/70 ${currentLang === "am" ? "amharic" : ""}`}>
              {currentLang === "en"
                ? "Follow us on social media for health tips, hospital updates, and community health information."
                : "ለጤና ምክሮች፣ የሆስፒታል ዜናዎች እና የማህበረሰብ ጤና መረጃ በማህበራዊ ሚዲያ ይከተሉን።"}
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-primary to-primary-dark text-white">
            <h3 className={`text-2xl mb-4 ${currentLang === "am" ? "amharic" : ""}`}>
              {currentLang === "en" ? "Need Immediate Help?" : "አፋጣኝ እርዳታ ያስፈልግዎታል?"}
            </h3>
            <p className={`text-white/90 mb-6 ${currentLang === "am" ? "amharic" : ""}`}>
              {currentLang === "en"
                ? "For medical emergencies, call our 24/7 emergency hotline"
                : "ለድንገተኛ የሕክምና ጉዳዮች፣ የእኛን 24/7 ድንገተኛ የእርዳታ መስመር ይደውሉ"}
            </p>
            <Button
              size="lg"
              onClick={() => (window.location.href = "tel:907")}
              className="w-full bg-accent hover:bg-accent-light text-white"
            >
              <Phone className="w-5 h-5 mr-2" />
              {currentLang === "en" ? "Call 907 - Emergency" : "907 ይደውሉ - ድንገተኛ"}
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}