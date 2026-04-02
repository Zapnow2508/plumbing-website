import { Phone, MapPin, Clock, Menu, X, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header({ onOpenModal }: { onOpenModal: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
      {/* Top Bar - Minimalist */}
      {!isScrolled && (
        <div className="bg-slate-50 text-slate-600 py-1.5 px-4 hidden md:block border-b border-slate-100">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-[11px] font-medium uppercase tracking-wider">
            <div className="flex gap-8">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-brand-600" />
                Faridabad, Haryana
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3 h-3 text-brand-600" />
                Mon-Sat: 8AM - 8PM
              </span>
              <span className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                24/7 Emergency
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:+918796982003" className="hover:text-brand-600 transition-colors">+91 87969 82003</a>
              <a href="tel:+917428023020" className="hover:text-brand-600 transition-colors">+91 74280 23020</a>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center gap-4">
          <img 
            src="/images/logo.png" 
            alt="Vikas Plumbing Logo" 
            className="w-12 h-12 object-contain"
            referrerPolicy="no-referrer"
          />
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold leading-none text-slate-900">Vikas Plumbing</h1>
            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-brand-600">MSME Registered</span>
          </div>
        </div>

        {/* Search Bar - Urban Company Style */}
        <div className="hidden lg:flex flex-1 max-w-md mx-12 relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-slate-400" />
          </div>
          <input 
            type="text" 
            placeholder="Search for 'Pipe Leak', 'Geyser'..." 
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors">Home</a>
          <a href="#services" className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors">Services</a>
          <a href="#service-area" className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors">Service Area</a>
          <a href="#pricing" className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors">Pricing</a>
          <a href="#gallery" className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors">Our Work</a>
          <button 
            onClick={onOpenModal}
            className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-brand-600/20"
          >
            Book Service
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-3 -mr-3 text-slate-600 hover:text-brand-600 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden absolute w-full shadow-2xl z-40"
          >
            <div className="p-6 flex flex-col gap-6">
              <a href="#" onClick={closeMenu} className="font-bold text-slate-900 text-lg">Home</a>
              <a href="#services" onClick={closeMenu} className="font-bold text-slate-900 text-lg">Services</a>
              <a href="#service-area" onClick={closeMenu} className="font-bold text-slate-900 text-lg">Service Area</a>
              <a href="#pricing" onClick={closeMenu} className="font-bold text-slate-900 text-lg">Pricing</a>
              <a href="#about" onClick={closeMenu} className="font-bold text-slate-900 text-lg">About</a>
              <a href="#contact" onClick={closeMenu} className="font-bold text-slate-900 text-lg">Contact</a>
              <div className="pt-4 border-t border-slate-100">
                <button 
                  onClick={() => {
                    closeMenu();
                    onOpenModal();
                  }}
                  className="bg-brand-600 text-white px-6 py-4 rounded-2xl font-bold w-full shadow-xl shadow-brand-600/20"
                >
                  Book Service Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

