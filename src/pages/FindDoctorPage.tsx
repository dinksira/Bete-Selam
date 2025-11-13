"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, Star, X } from "lucide-react";
import { DoctorCard } from "../components/DoctorCard";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Badge } from "../components/ui/badge";

interface FindDoctorPageProps {
  currentLang: "en" | "am";
  onBack: () => void;
}

export function FindDoctorPage({ currentLang, onBack }: FindDoctorPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [selectedAvailability, setSelectedAvailability] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const specialties = [
    { value: "all", label: currentLang === "en" ? "All Specialties" : "ሁሉም ስፔሻሊቲዎች" },
    { value: "cardiology", label: currentLang === "en" ? "Cardiology" : "የልብ ሕክምና" },
    { value: "pediatrics", label: currentLang === "en" ? "Pediatrics" : "የህፃናት ሕክምና" },
    { value: "neurology", label: currentLang === "en" ? "Neurology" : "የነርቭ ሕክምና" },
    { value: "orthopedics", label: currentLang === "en" ? "Orthopedics" : "የአጥንት ሕክምና" },
    { value: "gynecology", label: currentLang === "en" ? "Gynecology" : "የማህፀን ሕክምና" },
    { value: "ophthalmology", label: currentLang === "en" ? "Ophthalmology" : "የዓይን ሕክምና" },
    { value: "dermatology", label: currentLang === "en" ? "Dermatology" : "የቆዳ ሕክምና" },
    { value: "ent", label: currentLang === "en" ? "ENT" : "የጆሮ አፍንጫ ጉሮሮ" },
  ];

  const languages = [
    { value: "all", label: currentLang === "en" ? "All Languages" : "ሁሉም ቋንቋዎች" },
    { value: "amharic", label: currentLang === "en" ? "Amharic" : "አማርኛ" },
    { value: "english", label: currentLang === "en" ? "English" : "እንግሊዝኛ" },
    { value: "oromo", label: currentLang === "en" ? "Oromo" : "ኦሮምኛ" },
    { value: "tigrinya", label: currentLang === "en" ? "Tigrinya" : "ትግርኛ" },
  ];

  const availability = [
    { value: "all", label: currentLang === "en" ? "Any Time" : "ማንኛውም ጊዜ" },
    { value: "today", label: currentLang === "en" ? "Available Today" : "ዛሬ ይገኛል" },
    { value: "week", label: currentLang === "en" ? "This Week" : "በዚህ ሳምንት" },
    { value: "online", label: currentLang === "en" ? "Video Consult" : "የቪዲዮ ምክክር" },
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
      specialty_value: "cardiology",
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
      specialty_value: "pediatrics",
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
      specialty_value: "neurology",
    },
    {
      name: "Dr. Hana Gebremedhin",
      specialty: "Gynecologist",
      specialtyAm: "የማህፀን ሐኪም",
      experience: "14 years",
      rating: 4.9,
      reviews: 201,
      languages: ["English", "Amharic", "Tigrinya"],
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
      available: true,
      specialty_value: "gynecology",
    },
    {
      name: "Dr. Mesfin Alemayehu",
      specialty: "Orthopedic Surgeon",
      specialtyAm: "የአጥንት ቀዶ ጥገና ሐኪም",
      experience: "20 years",
      rating: 4.7,
      reviews: 178,
      languages: ["English", "Amharic", "Oromo"],
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
      available: true,
      specialty_value: "orthopedics",
    },
    {
      name: "Dr. Tigist Wolde",
      specialty: "Ophthalmologist",
      specialtyAm: "የዓይን ሐኪም",
      experience: "11 years",
      rating: 4.8,
      reviews: 145,
      languages: ["English", "Amharic"],
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
      available: false,
      specialty_value: "ophthalmology",
    },
  ];

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      searchQuery === "" ||
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSpecialty =
      selectedSpecialty === "all" || doctor.specialty_value === selectedSpecialty;

    const matchesLanguage =
      selectedLanguage === "all" ||
      doctor.languages.some((lang) => lang.toLowerCase().includes(selectedLanguage));

    const matchesAvailability =
      selectedAvailability === "all" ||
      (selectedAvailability === "today" && doctor.available);

    return matchesSearch && matchesSpecialty && matchesLanguage && matchesAvailability;
  });

  const activeFiltersCount = [
    selectedSpecialty !== "all",
    selectedLanguage !== "all",
    selectedAvailability !== "all",
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-all duration-300"
          >
            ← {currentLang === "en" ? "Back to Home" : "ወደ ቤት ተመለስ"}
          </button>
          <h1 className={`text-4xl font-bold mb-2 ${currentLang === "am" ? "amharic" : ""}`}>
            {currentLang === "en" ? "Find Your Doctor" : "ሐኪም ይፈልጉ"}
          </h1>
          <p className={`text-white/90 ${currentLang === "am" ? "amharic" : ""}`}>
            {currentLang === "en"
              ? "Search and book appointments with our expert medical team"
              : "ከባለሙያ የሕክምና ቡድናችን ጋር ይፈልጉ እና ቀጠሮ ያስይዙ"}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-200">
          {/* Search Bar */}
          <div className="flex gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder={
                  currentLang === "en"
                    ? "Search by doctor name or specialty..."
                    : "በሐኪም ስም ወይም ስፔሻሊቲ ይፈልጉ..."
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
            <Button
              variant={showFilters ? "default" : "outline"}
              onClick={() => setShowFilters(!showFilters)}
              className="relative h-12"
            >
              <SlidersHorizontal className="w-5 h-5 mr-2" />
              {currentLang === "en" ? "Filters" : "ማጣሪያዎች"}
              {activeFiltersCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-red-500 text-white px-2 py-0.5 text-xs">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-gray-200 mt-4">
              <div>
                <label className={`text-sm font-medium mb-2 block ${currentLang === "am" ? "amharic" : ""}`}>
                  {currentLang === "en" ? "Specialty" : "ስፔሻሊቲ"}
                </label>
                <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {specialties.map((specialty) => (
                      <SelectItem key={specialty.value} value={specialty.value}>
                        {specialty.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className={`text-sm font-medium mb-2 block ${currentLang === "am" ? "amharic" : ""}`}>
                  {currentLang === "en" ? "Language" : "ቋንቋ"}
                </label>
                <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((language) => (
                      <SelectItem key={language.value} value={language.value}>
                        {language.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className={`text-sm font-medium mb-2 block ${currentLang === "am" ? "amharic" : ""}`}>
                  {currentLang === "en" ? "Availability" : "መገኘት"}
                </label>
                <Select value={selectedAvailability} onValueChange={setSelectedAvailability}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {availability.map((avail) => (
                      <SelectItem key={avail.value} value={avail.value}>
                        {avail.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Active Filters */}
          {activeFiltersCount > 0 && (
            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 mt-4">
              {selectedSpecialty !== "all" && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  {specialties.find((s) => s.value === selectedSpecialty)?.label}
                  <button 
                    onClick={() => setSelectedSpecialty("all")}
                    className="ml-1 hover:bg-gray-300 rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              )}
              {selectedLanguage !== "all" && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  {languages.find((l) => l.value === selectedLanguage)?.label}
                  <button 
                    onClick={() => setSelectedLanguage("all")}
                    className="ml-1 hover:bg-gray-300 rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              )}
              {selectedAvailability !== "all" && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  {availability.find((a) => a.value === selectedAvailability)?.label}
                  <button 
                    onClick={() => setSelectedAvailability("all")}
                    className="ml-1 hover:bg-gray-300 rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mb-6">
          <h2 className={`text-2xl font-bold mb-2 ${currentLang === "am" ? "amharic" : ""}`}>
            {currentLang === "en" ? "Available Doctors" : "ያሉ ሐኪሞች"}
          </h2>
          <p className={`text-gray-600 ${currentLang === "am" ? "amharic" : ""}`}>
            {currentLang === "en"
              ? `Found ${filteredDoctors.length} doctor${filteredDoctors.length !== 1 ? "s" : ""}`
              : `${filteredDoctors.length} ሐኪም${filteredDoctors.length !== 1 ? "ች" : ""} ተገኝተዋል`}
          </p>
        </div>

        {/* Doctor Grid */}
        {filteredDoctors.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor, index) => (
              <DoctorCard key={index} {...doctor} currentLang={currentLang} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl p-12 text-center shadow-lg border border-gray-200">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${currentLang === "am" ? "amharic" : ""}`}>
              {currentLang === "en" ? "No doctors found" : "ምንም ሐኪም አልተገኘም"}
            </h3>
            <p className={`text-gray-600 mb-4 ${currentLang === "am" ? "amharic" : ""}`}>
              {currentLang === "en"
                ? "Try adjusting your filters or search criteria"
                : "የማጣሪያ ወይም የፍለጋ መመዘኛዎችዎን ለማስተካከል ይሞክሩ"}
            </p>
            <Button
              onClick={() => {
                setSearchQuery("");
                setSelectedSpecialty("all");
                setSelectedLanguage("all");
                setSelectedAvailability("all");
              }}
              className="bg-primary hover:bg-primary-dark"
            >
              {currentLang === "en" ? "Clear All Filters" : "ሁሉንም ማጣሪያዎች አጽዳ"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}