import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Droplets, Wrench, ShieldCheck, Star, ArrowRight, X, CheckCircle2, MessageCircle } from 'lucide-react';

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

type ServiceBannerProps = {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
};

export default function ServiceBanner({ isModalOpen, setIsModalOpen }: ServiceBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden bg-cyan-50">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
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
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-50 via-white/60 to-transparent backdrop-blur-[2px]" />
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center items-start">
        <motion.div
          key={`content-${currentIndex}`}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              <Star className="w-3 h-3 fill-current" />
              {services[currentIndex].rating}
            </div>
            <span className="text-brand-700 uppercase tracking-[0.3em] text-xs font-black">Faridabad's Choice</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl text-slate-900 mb-8 leading-[1.1] font-black">
            {services[currentIndex].title}
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-700 mb-10 leading-relaxed font-medium">
            {services[currentIndex].description}
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 w-full mt-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-brand-600 text-white px-6 py-4 md:px-10 md:py-5 rounded-2xl font-black text-base md:text-lg transition-all flex items-center justify-center gap-3 hover:scale-105 active:scale-95 shadow-2xl shadow-brand-600/30 w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 md:w-6 md:h-6" />
              Book Service Now
            </button>
            <button className="group bg-white/60 backdrop-blur-md text-slate-900 border-2 border-white px-6 py-4 md:px-10 md:py-5 rounded-2xl font-black text-base md:text-lg transition-all flex items-center justify-center gap-3 hover:bg-white shadow-xl shadow-brand-900/5 w-full sm:w-auto">
              Explore Portfolio
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Progress Indicators */}
        <div className="absolute bottom-12 left-4 right-4 flex gap-4 max-w-7xl mx-auto">
          {services.map((service, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className="flex-1 group"
            >
              <div className="text-left mb-2 hidden md:block">
                <p className={`text-[10px] uppercase tracking-widest font-black transition-colors ${idx === currentIndex ? 'text-brand-600' : 'text-slate-400'}`}>
                  0{idx + 1}
                </p>
                <p className={`text-xs font-bold truncate transition-colors ${idx === currentIndex ? 'text-slate-900' : 'text-slate-500'}`}>
                  {service.title}
                </p>
              </div>
              <div className="h-1.5 w-full bg-white rounded-full overflow-hidden shadow-inner">
                <motion.div 
                  className="h-full bg-brand-500"
                  initial={{ width: 0 }}
                  animate={{ width: idx === currentIndex ? "100%" : "0%" }}
                  transition={{ duration: idx === currentIndex ? 6 : 0.3, ease: "linear" }}
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden pointer-events-auto"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-slate-800 hover:bg-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row relative z-10 max-h-[90vh] overflow-y-auto">
                <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden shrink-0">
                  <img 
                    src="/images/vikas_profile.jpg" 
                    alt="Vikas Ji" 
                    className="w-full h-full object-cover object-[center_20%] scale-[1.3] md:scale-150 origin-top transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-white font-black text-2xl">Vikas Ji</h3>
                      <p className="text-brand-400 text-sm font-bold uppercase tracking-widest mt-1">Master Plumber</p>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-3/5 p-8 md:p-10 bg-white">
                  <h3 className="text-3xl font-black text-slate-900 mb-2">Book Service</h3>
                  <p className="text-slate-500 font-medium text-sm mb-8">Honest pricing. Professional quality. Faridabad based.</p>
                  
                  <div className="bg-brand-50 rounded-2xl p-5 mb-8 border border-brand-100 relative overflow-hidden">
                    <div className="absolute -top-4 -right-4 opacity-[0.03]">
                      <ShieldCheck className="w-32 h-32" />
                    </div>
                    <h4 className="font-bold text-brand-900 mb-4 flex items-center gap-2">
                       <Star className="w-4 h-4 fill-brand-600 text-brand-600" />
                       Unbeatable Value
                    </h4>
                    <div className="space-y-3 relative z-10">
                      <div className="flex justify-between items-center text-sm font-medium">
                        <span className="text-slate-500 line-through">General Market Rate</span>
                        <span className="text-slate-400 line-through">₹1,200</span>
                      </div>
                      <div className="flex justify-between items-center text-base font-black text-brand-700 bg-white p-3 rounded-xl shadow-sm border border-brand-50">
                        <span className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                          Royal Plumbing
                        </span>
                        <span className="text-green-600 text-lg">₹700*</span>
                      </div>
                      <p className="text-[10px] text-slate-400 mt-2 font-medium">* Example: Floor mounted bathroom seat installation</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <a 
                      href="tel:+918287023020"
                      className="w-full bg-brand-600 hover:bg-brand-700 text-white px-6 py-4 rounded-xl font-black flex items-center justify-center gap-3 transition-colors shadow-xl shadow-brand-600/20 text-lg"
                    >
                      <Phone className="w-5 h-5" />
                      +91 82870 23020
                    </a>
                    
                    <a 
                      href="https://wa.me/918287023020"
                      target="_blank" rel="noopener noreferrer"
                      className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-4 rounded-xl font-black flex items-center justify-center gap-3 transition-colors shadow-xl shadow-[#25D366]/20 text-lg"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

