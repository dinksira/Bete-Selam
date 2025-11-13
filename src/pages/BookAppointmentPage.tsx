import { useState } from "react";
import { Calendar, Clock, Video, MapPin, User, Phone, Mail, FileText, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Card } from "../components/ui/card";

interface BookAppointmentPageProps {
  currentLang: "en" | "am";
  onBack: () => void;
}

export default function BookAppointmentPage({ currentLang, onBack }: BookAppointmentPageProps) {
  const [step, setStep] = useState(1);
  const [appointmentType, setAppointmentType] = useState<"in-person" | "video">("in-person");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const departments = [
    { value: "cardiology", label: currentLang === "en" ? "Cardiology" : "የልብ ሕክምና" },
    { value: "pediatrics", label: currentLang === "en" ? "Pediatrics" : "የህፃናት ሕክምና" },
    { value: "neurology", label: currentLang === "en" ? "Neurology" : "የነርቭ ሕክምና" },
    { value: "orthopedics", label: currentLang === "en" ? "Orthopedics" : "የአጥንት ሕክምና" },
    { value: "gynecology", label: currentLang === "en" ? "Gynecology" : "የማህፀን ሕክምና" },
    { value: "general", label: currentLang === "en" ? "General Medicine" : "አጠቃላይ ሕክምና" },
  ];

  const doctors = {
    cardiology: [
      { value: "dr-abebe", label: "Dr. Abebe Tadesse" },
      { value: "dr-samuel", label: "Dr. Samuel Kifle" },
    ],
    pediatrics: [
      { value: "dr-sara", label: "Dr. Sara Mengistu" },
      { value: "dr-helen", label: "Dr. Helen Yohannes" },
    ],
    neurology: [
      { value: "dr-dawit", label: "Dr. Dawit Bekele" },
    ],
    orthopedics: [
      { value: "dr-mesfin", label: "Dr. Mesfin Alemayehu" },
    ],
    gynecology: [
      { value: "dr-hana", label: "Dr. Hana Gebremedhin" },
    ],
    general: [
      { value: "dr-almaz", label: "Dr. Almaz Tesfaye" },
      { value: "dr-yonas", label: "Dr. Yonas Assefa" },
    ],
  };

  const timeSlots = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  const availableDoctors = selectedDepartment
    ? doctors[selectedDepartment as keyof typeof doctors] || []
    : [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Only submit if we're on the final step
    if (step === 3) {
      setSubmitted(true);
    }
  };

  const handleDepartmentChange = (value: string) => {
    setSelectedDepartment(value);
    // Reset doctor selection when department changes
    setSelectedDoctor("");
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto p-8 text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-primary" />
            </div>
            <h1 className={`text-3xl mb-4 ${currentLang === "am" ? "amharic" : ""}`}>
              {currentLang === "en" ? "Appointment Confirmed!" : "ቀጠሮ ተረጋግጧል!"}
            </h1>
            <p className={`text-neutral-dark/70 mb-6 ${currentLang === "am" ? "amharic" : ""}`}>
              {currentLang === "en"
                ? "Your appointment has been successfully booked. You will receive a confirmation SMS and email shortly."
                : "ቀጠሮዎ በተሳካ ሁኔታ ተይዟል። በቅርቡ የማረጋገጫ የኤስኤምኤስ እና ኢሜይል ይደርስዎታል።"}
            </p>

            <div className="bg-background p-6 rounded-xl mb-6 text-left">
              <h3 className={`mb-4 ${currentLang === "am" ? "amharic" : ""}`}>
                {currentLang === "en" ? "Appointment Details" : "የቀጠሮ ዝርዝሮች"}
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="text-sm text-neutral-dark/60">
                      {currentLang === "en" ? "Date & Time" : "ቀን እና ሰዓት"}
                    </div>
                    <div>
                      {selectedDate} at {selectedTime}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="text-sm text-neutral-dark/60">
                      {currentLang === "en" ? "Doctor" : "ሐኪም"}
                    </div>
                    <div>
                      {availableDoctors.find((d) => d.value === selectedDoctor)?.label}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  {appointmentType === "video" ? (
                    <Video className="w-5 h-5 text-primary mt-0.5" />
                  ) : (
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  )}
                  <div>
                    <div className="text-sm text-neutral-dark/60">
                      {currentLang === "en" ? "Type" : "ዓይነት"}
                    </div>
                    <div>
                      {appointmentType === "video"
                        ? currentLang === "en"
                          ? "Video Consultation"
                          : "የቪዲዮ ምክክር"
                        : currentLang === "en"
                        ? "In-Person Visit"
                        : "በአካል ጉብኝት"}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Button onClick={onBack} variant="outline">
                {currentLang === "en" ? "Back to Home" : "ወደ ቤት ተመለስ"}
              </Button>
              <Button className="bg-primary hover:bg-primary-dark">
                {currentLang === "en" ? "Add to Calendar" : "ወደ ቀን መቁጠሪያ ጨምር"}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-smooth"
          >
            ← {currentLang === "en" ? "Back to Home" : "ወደ ቤት ተመለስ"}
          </button>
          <h1 className={`text-4xl mb-2 ${currentLang === "am" ? "amharic" : ""}`}>
            {currentLang === "en" ? "Book Appointment" : "ቀጠሮ ያስይዙ"}
          </h1>
          <p className={`text-white/90 ${currentLang === "am" ? "amharic" : ""}`}>
            {currentLang === "en"
              ? "Schedule your visit with our expert medical team"
              : "ከባለሙያ የሕክምና ቡድናችን ጋር ጉብኝትዎን ያስይዙ"}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-smooth ${
                      step >= s
                        ? "bg-primary text-white"
                        : "bg-neutral-light text-neutral-dark/40"
                    }`}
                  >
                    {s}
                  </div>
                  <div className={`ml-3 ${currentLang === "am" ? "amharic" : ""}`}>
                    <div className={`text-sm ${step >= s ? "text-primary" : "text-neutral-dark/40"}`}>
                      {s === 1 && (currentLang === "en" ? "Select Service" : "አገልግሎት ምረጥ")}
                      {s === 2 && (currentLang === "en" ? "Choose Date & Time" : "ቀን እና ሰዓት ምረጥ")}
                      {s === 3 && (currentLang === "en" ? "Your Information" : "መረጃዎ")}
                    </div>
                  </div>
                </div>
                {s < 3 && (
                  <div
                    className={`flex-1 h-0.5 mx-4 transition-smooth ${
                      step > s ? "bg-primary" : "bg-neutral-light"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          {/* Step 1: Select Service */}
          {step === 1 && (
            <Card className="p-8">
              <h2 className={`text-2xl mb-6 ${currentLang === "am" ? "amharic" : ""}`}>
                {currentLang === "en" ? "Select Appointment Type" : "የቀጠሮ ዓይነት ይምረጡ"}
              </h2>

              <RadioGroup 
                value={appointmentType} 
                onValueChange={(value: "in-person" | "video") => setAppointmentType(value)} 
                className="mb-8"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <label
                    htmlFor="in-person"
                    className={`flex items-start gap-4 p-6 border-2 rounded-xl cursor-pointer transition-smooth ${
                      appointmentType === "in-person"
                        ? "border-primary bg-primary/5"
                        : "border-neutral-light hover:border-primary/50"
                    }`}
                  >
                    <RadioGroupItem value="in-person" id="in-person" />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <MapPin className="w-6 h-6 text-primary" />
                        <h3 className={currentLang === "am" ? "amharic" : ""}>
                          {currentLang === "en" ? "In-Person Visit" : "በአካል ጉብኝት"}
                        </h3>
                      </div>
                      <p className={`text-sm text-neutral-dark/70 ${currentLang === "am" ? "amharic" : ""}`}>
                        {currentLang === "en"
                          ? "Visit our hospital for comprehensive care and examination"
                          : "ለአጠቃላይ እንክብካቤ እና ምርመራ ሆስፒታላችንን ይጎብኙ"}
                      </p>
                    </div>
                  </label>

                  <label
                    htmlFor="video"
                    className={`flex items-start gap-4 p-6 border-2 rounded-xl cursor-pointer transition-smooth ${
                      appointmentType === "video"
                        ? "border-primary bg-primary/5"
                        : "border-neutral-light hover:border-primary/50"
                    }`}
                  >
                    <RadioGroupItem value="video" id="video" />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Video className="w-6 h-6 text-secondary" />
                        <h3 className={currentLang === "am" ? "amharic" : ""}>
                          {currentLang === "en" ? "Video Consultation" : "የቪዲዮ ምክክር"}
                        </h3>
                      </div>
                      <p className={`text-sm text-neutral-dark/70 ${currentLang === "am" ? "amharic" : ""}`}>
                        {currentLang === "en"
                          ? "Consult with our doctors from the comfort of your home"
                          : "ከቤትዎ ምቹነት ከሐኪሞቻችን ጋር ያማክሩ"}
                      </p>
                    </div>
                  </label>
                </div>
              </RadioGroup>

              <div className="mb-6">
                <Label htmlFor="department" className={currentLang === "am" ? "amharic" : ""}>
                  {currentLang === "en" ? "Select Department" : "ክፍል ይምረጡ"}
                </Label>
                <Select value={selectedDepartment} onValueChange={handleDepartmentChange}>
                  <SelectTrigger id="department">
                    <SelectValue
                      placeholder={
                        currentLang === "en" ? "Choose a department..." : "ክፍል ይምረጡ..."
                      }
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

              {selectedDepartment && (
                <div className="mb-6">
                  <Label htmlFor="doctor" className={currentLang === "am" ? "amharic" : ""}>
                    {currentLang === "en" ? "Select Doctor" : "ሐኪም ይምረጡ"}
                  </Label>
                  <Select value={selectedDoctor} onValueChange={setSelectedDoctor}>
                    <SelectTrigger id="doctor">
                      <SelectValue
                        placeholder={
                          currentLang === "en" ? "Choose a doctor..." : "ሐኪም ይምረጡ..."
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {availableDoctors.map((doc) => (
                        <SelectItem key={doc.value} value={doc.value}>
                          {doc.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <Button
                type="button" // Changed from type="submit" to type="button"
                onClick={() => setStep(2)}
                disabled={!selectedDepartment || !selectedDoctor}
                className="w-full bg-primary hover:bg-primary-dark"
              >
                {currentLang === "en" ? "Continue" : "ቀጥል"}
              </Button>
            </Card>
          )}

          {/* Step 2: Choose Date & Time */}
          {step === 2 && (
            <Card className="p-8">
              <h2 className={`text-2xl mb-6 ${currentLang === "am" ? "amharic" : ""}`}>
                {currentLang === "en" ? "Select Date & Time" : "ቀን እና ሰዓት ይምረጡ"}
              </h2>

              <div className="mb-6">
                <Label htmlFor="date" className={currentLang === "am" ? "amharic" : ""}>
                  {currentLang === "en" ? "Preferred Date" : "የሚመረጥ ቀን"}
                </Label>
                <Input
                  type="date"
                  id="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              {selectedDate && (
                <div className="mb-6">
                  <Label className={`mb-3 block ${currentLang === "am" ? "amharic" : ""}`}>
                    {currentLang === "en" ? "Available Time Slots" : "ያሉ የጊዜ ቦታዎች"}
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button" // Important: type="button" prevents form submission
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 border-2 rounded-lg transition-smooth ${
                          selectedTime === time
                            ? "border-primary bg-primary text-white"
                            : "border-neutral-light hover:border-primary/50"
                        }`}
                      >
                        <Clock className="w-4 h-4 mx-auto mb-1" />
                        <div className="text-sm">{time}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-4">
                <Button 
                  type="button" // Changed from type="submit" to type="button"
                  onClick={() => setStep(1)} 
                  variant="outline" 
                  className="flex-1"
                >
                  {currentLang === "en" ? "Back" : "ተመለስ"}
                </Button>
                <Button
                  type="button" // Changed from type="submit" to type="button"
                  onClick={() => setStep(3)}
                  disabled={!selectedDate || !selectedTime}
                  className="flex-1 bg-primary hover:bg-primary-dark"
                >
                  {currentLang === "en" ? "Continue" : "ቀጥል"}
                </Button>
              </div>
            </Card>
          )}

          {/* Step 3: Your Information */}
          {step === 3 && (
            <Card className="p-8">
              <h2 className={`text-2xl mb-6 ${currentLang === "am" ? "amharic" : ""}`}>
                {currentLang === "en" ? "Your Information" : "የእርስዎ መረጃ"}
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
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

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="phone" className={currentLang === "am" ? "amharic" : ""}>
                    {currentLang === "en" ? "Phone Number" : "ስልክ ቁጥር"}
                  </Label>
                  <Input id="phone" type="tel" placeholder="+251..." required />
                </div>
                <div>
                  <Label htmlFor="email" className={currentLang === "am" ? "amharic" : ""}>
                    {currentLang === "en" ? "Email" : "ኢሜይል"}
                  </Label>
                  <Input id="email" type="email" required />
                </div>
              </div>

              <div className="mb-6">
                <Label htmlFor="reason" className={currentLang === "am" ? "amharic" : ""}>
                  {currentLang === "en" ? "Reason for Visit" : "የጉብኝት ምክንያት"}
                </Label>
                <Textarea
                  id="reason"
                  placeholder={
                    currentLang === "en"
                      ? "Please describe your symptoms or reason for appointment..."
                      : "እባክዎ ምልክቶችዎን ወይም የቀጠሮ ምክንያትዎን ይግለጹ..."
                  }
                  rows={4}
                />
              </div>

              <div className="flex gap-4">
                <Button 
                  type="button" // Changed from type="submit" to type="button"
                  onClick={() => setStep(2)} 
                  variant="outline" 
                  className="flex-1"
                >
                  {currentLang === "en" ? "Back" : "ተመለስ"}
                </Button>
                <Button 
                  type="submit" // Only the final submit button should be type="submit"
                  className="flex-1 bg-primary hover:bg-primary-dark"
                >
                  {currentLang === "en" ? "Confirm Appointment" : "ቀጠሮን አረጋግጥ"}
                </Button>
              </div>
            </Card>
          )}
        </form>
      </div>
    </div>
  );
}