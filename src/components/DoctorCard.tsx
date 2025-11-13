import { ImageWithFallback } from "./ImageWithFallback";
import { cn } from "../lib/utils";

interface DoctorCardProps {
  name: string;
  specialty: string;
  specialtyAm: string;
  experience: string;
  rating: number;
  reviews: number;
  languages: string[];
  image: string;
  available: boolean;
  currentLang: "en" | "am";
}

export function DoctorCard({
  name,
  specialty,
  specialtyAm,
  experience,
  rating,
  reviews,
  languages,
  image,
  available,
  currentLang,
}: DoctorCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <span className={cn(
            "px-3 py-1 rounded-full text-sm font-medium",
            available 
              ? "bg-green-100 text-green-800" 
              : "bg-gray-100 text-gray-800"
          )}>
            {available 
              ? (currentLang === "en" ? "Available" : "ይገኛል") 
              : (currentLang === "en" ? "Away" : "አልገኝም")
            }
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className={cn("text-primary mb-3", currentLang === "am" ? "amharic" : "")}>
          {currentLang === "en" ? specialty : specialtyAm}
        </p>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-600">
            {experience} {currentLang === "en" ? "experience" : "ልምድ"}
          </span>
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">⭐</span>
            <span className="font-semibold">{rating}</span>
            <span className="text-gray-500 text-sm">({reviews})</span>
          </div>
        </div>
        
        <div className="border-t pt-3">
          <p className="text-sm text-gray-600 mb-2">
            {currentLang === "en" ? "Languages:" : "ቋንቋዎች:"}
          </p>
          <div className="flex flex-wrap gap-2">
            {languages.map((language, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
              >
                {language}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}