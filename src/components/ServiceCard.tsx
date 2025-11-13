import { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  available247?: boolean;
  currentLang: "en" | "am";
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  color,
  available247,
  currentLang,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-200/50 hover:border-primary/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 ethiopian-pattern opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

      <div className="relative z-10">
        {/* Icon */}
        <div className={`${color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Badge */}
        {available247 && (
          <div className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs mb-3 font-medium">
            {currentLang === "en" ? "24/7 Available" : "24/7 ይገኛል"}
          </div>
        )}

        {/* Content */}
        <h3 className={`text-xl font-semibold mb-2 text-gray-900 ${currentLang === "am" ? "amharic" : ""}`}>
          {title}
        </h3>
        <p className={`text-gray-600 mb-4 leading-relaxed ${currentLang === "am" ? "amharic" : ""}`}>
          {description}
        </p>

        {/* CTA */}
        <Button
          variant="ghost"
          className="text-primary hover:text-primary-dark hover:bg-primary/5 p-0 font-medium"
        >
          {currentLang === "en" ? "Learn More →" : "ተጨማሪ ይመልከቱ →"}
        </Button>
      </div>
    </div>
  );
}