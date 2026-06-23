import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Droplets, Wrench, ShieldCheck, Star, ArrowRight, X, CheckCircle2, MessageSquare, Calendar, Clock, MapPin, User, ChevronRight } from 'lucide-react';

const services = [
  {
    title: "Expert Pipe Installation",
    description: "Professional fitting for homes and businesses with over 250 happy customers.",
    icon: <Droplets className="w-6 h-6" />,
    image: "/images/hero_installation.png",
    rating: "4.9"
  },
  {
    title: "Commercial Systems",
    description: "Specialized in large-scale commercial plumbing and restroom installations.",
    icon: <Wrench className="w-6 h-6" />,
    image: "/images/hero_commercial.png",
    rating: "4.8"
  },
  {
    title: "Leak Detection & Repair",
    description: "Advanced testing for over 300 systems to identify and fix potential leakages.",
    icon: <ShieldCheck className="w-6 h-6" />,
    image: "/images/hero_leak.png",
    rating: "5.0"
  }
];

const serviceOptions = [
  "Pipe Installation",
  "Leak Detection & Repair",
  "Drain Clearing",
  "Bathroom Fitting",
  "Geyser Installation",
  "Water Tank Maintenance",
  "Emergency Service"
];

const timeSlots = [
  "08:00 AM - 11:00 AM",
  "11:00 AM - 02:00 PM",
  "02:00 PM - 05:00 PM",
  "05:00 PM - 08:00 PM"
];

type ServiceBannerProps = {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
};

export default function ServiceBanner({ isModalOpen, setIsModalOpen }: ServiceBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Booking Wizard State
  const [wizardStep, setWizardStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({ name: "", phone: "", address: "" });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Royal Plumbing Services - New Booking Request*
----------------------------------------
*Service:* ${selectedService}
*Date:* ${selectedDate}
*Preferred Time:* ${selectedTime}
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Address:* ${formData.address}
----------------------------------------
Please confirm my booking. Thank you!`;
    
    const whatsappUrl = `https://wa.me/918287023020?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsModalOpen(false);
    resetWizard();
  };

  const resetWizard = () => {
    setWizardStep(1);
    setSelectedService("");
    setSelectedDate("");
    setSelectedTime("");
    setFormData({ name: "", phone: "", address: "" });
  };

  return (
    <div className="relative h-[650px] md:h-[750px] overflow-hidden bg-slate-950 text-white flex items-center">
      {/* Background Cinematic Slide */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.35, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img 
              src={services[currentIndex].image}
              alt={services[currentIndex].title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
        {/* Glow overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        <div className="absolute top-1/4 left-1/3 w-[30rem] h-[30rem] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[20rem] h-[20rem] bg-brand-500/10 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 mt-12 md:mt-16 flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Left Side Copy */}
        <motion.div
          key={`content-${currentIndex}`}
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-2xl text-left"
        >
          <div className="inline-flex items-center gap-3 mb-6 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2 rounded-full">
            <div className="flex items-center gap-1 bg-gold-500 text-slate-950 px-2.5 py-0.5 rounded-full text-xs font-black">
              <Star className="w-3.5 h-3.5 fill-current" />
              {services[currentIndex].rating}
            </div>
            <span className="text-gold-400 uppercase tracking-[0.25em] text-[10px] font-black">Faridabad's Premier Service</span>
          </div>
          
          <h2 className="text-4xl md:text-7xl font-display font-black mb-8 leading-[1.05] tracking-tight bg-gradient-to-r from-white via-white to-gold-300 bg-clip-text text-transparent">
            {services[currentIndex].title}
          </h2>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-medium">
            {services[currentIndex].description}
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full mt-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-gold-500 hover:bg-gold-600 text-slate-950 px-8 py-4.5 rounded-full font-black text-base transition-all flex items-center justify-center gap-3 hover:scale-105 active:scale-95 shadow-2xl shadow-gold-500/20 w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 fill-current" />
              Book Service Now
            </button>
            <a 
              href="#services"
              className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white border border-white/10 px-8 py-4.5 rounded-full font-black text-base transition-all flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              Explore Portfolio
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform text-gold-400" />
            </a>
          </div>
        </motion.div>

        {/* Right Side Glass Card Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full md:w-96 bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden hidden md:block"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-bl-[100px] -mr-8 -mt-8" />
          <h4 className="font-display font-black text-xl mb-6 text-gold-400 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5" />
            Royal Standards
          </h4>
          <div className="space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-white/5">
              <span className="text-slate-400 text-sm font-semibold">Response Time</span>
              <span className="text-white font-bold">Under 45 Mins</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-white/5">
              <span className="text-slate-400 text-sm font-semibold">Service Charge</span>
              <span className="text-gold-400 font-black">₹150 (Waived if hired)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400 text-sm font-semibold">Emergency Support</span>
              <span className="text-green-400 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Live 24/7
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Booking Wizard Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { setIsModalOpen(false); resetWizard(); }}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden pointer-events-auto text-slate-900 border border-slate-100"
            >
              <button 
                onClick={() => { setIsModalOpen(false); resetWizard(); }}
                className="absolute top-5 right-5 z-20 w-9 h-9 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center text-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 md:p-10">
                {/* Progress bar */}
                <div className="w-full bg-slate-100 h-1.5 rounded-full mb-8 overflow-hidden">
                  <div 
                    className="bg-gold-500 h-full transition-all duration-300"
                    style={{ width: `${(wizardStep / 3) * 100}%` }}
                  />
                </div>

                <span className="text-gold-600 font-black text-xs uppercase tracking-widest block mb-1">
                  Step {wizardStep} of 3
                </span>

                {wizardStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <h3 className="text-2xl font-display font-black mb-2 text-slate-900">Select Service</h3>
                    <p className="text-slate-500 text-sm mb-6">What plumbing service do you need today?</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-60 overflow-y-auto pr-1">
                      {serviceOptions.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => { setSelectedService(opt); setWizardStep(2); }}
                          className={`p-4 rounded-xl border text-left font-bold text-sm transition-all flex justify-between items-center ${
                            selectedService === opt 
                              ? 'border-gold-500 bg-gold-50/50 text-gold-900' 
                              : 'border-slate-200 hover:border-gold-300 hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          {opt}
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {wizardStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <h3 className="text-2xl font-display font-black mb-2 text-slate-900">Select Date & Time</h3>
                    <p className="text-slate-500 text-sm mb-6">When should our team visit your premises?</p>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-black uppercase text-slate-400 tracking-wider mb-2">Select Date</label>
                        <div className="relative">
                          <Calendar className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                          <input 
                            type="date" 
                            required
                            min={new Date().toISOString().split('T')[0]}
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-black uppercase text-slate-400 tracking-wider mb-2">Select Time Slot</label>
                        <div className="grid grid-cols-2 gap-2">
                          {timeSlots.map((slot, i) => (
                            <button
                              key={i}
                              type="button"
                              onClick={() => setSelectedTime(slot)}
                              className={`p-3.5 rounded-xl border text-center font-bold text-xs transition-all ${
                                selectedTime === slot 
                                  ? 'border-gold-500 bg-gold-50/50 text-gold-900' 
                                  : 'border-slate-200 hover:border-gold-300 hover:bg-slate-50 text-slate-600'
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between gap-4 pt-4">
                        <button 
                          type="button" 
                          onClick={() => setWizardStep(1)} 
                          className="px-6 py-3.5 rounded-xl border border-slate-200 font-bold text-slate-500 hover:bg-slate-50 text-sm"
                        >
                          Back
                        </button>
                        <button 
                          type="button" 
                          disabled={!selectedDate || !selectedTime}
                          onClick={() => setWizardStep(3)} 
                          className="flex-1 bg-gold-500 hover:bg-gold-600 text-slate-950 py-3.5 rounded-xl font-black text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {wizardStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <h3 className="text-2xl font-display font-black mb-2 text-slate-900">Your Contact Info</h3>
                    <p className="text-slate-500 text-sm mb-6">Almost done! Enter your details to confirm booking via WhatsApp.</p>
                    
                    <form onSubmit={handleBookingSubmit} className="space-y-4">
                      <div className="relative">
                        <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                        <input 
                          type="text" 
                          required
                          placeholder="Your Full Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500"
                        />
                      </div>

                      <div className="relative">
                        <Phone className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                        <input 
                          type="tel" 
                          required
                          placeholder="Your WhatsApp Phone Number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500"
                        />
                      </div>

                      <div className="relative">
                        <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                        <input 
                          type="text" 
                          required
                          placeholder="Your Address / Area in Faridabad"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500"
                        />
                      </div>

                      <div className="flex justify-between gap-4 pt-4">
                        <button 
                          type="button" 
                          onClick={() => setWizardStep(2)} 
                          className="px-6 py-3.5 rounded-xl border border-slate-200 font-bold text-slate-500 hover:bg-slate-50 text-sm"
                        >
                          Back
                        </button>
                        <button 
                          type="submit"
                          className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white py-3.5 rounded-xl font-black text-sm transition-all flex items-center justify-center gap-2"
                        >
                          <MessageSquare className="w-4 h-4 fill-current" />
                          Confirm & WhatsApp
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
