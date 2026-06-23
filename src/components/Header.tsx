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
    <header className="w-full fixed top-0 z-50 transition-all duration-300">
      {/* Top Bar - Minimalist (hidden when scrolled) */}
      {!isScrolled && (
        <div className="bg-brand-950 text-slate-300 py-1.5 px-4 hidden md:block border-b border-gold-900/10">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] font-semibold uppercase tracking-widest">
            <div className="flex gap-8">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold-500" />
                Faridabad, Haryana
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gold-500" />
                Mon-Sat: 8AM - 8PM
              </span>
              <span className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                24/7 Emergency Support
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:+918287023020" className="hover:text-gold-400 transition-colors font-bold text-white tracking-widest">+91 82870 23020</a>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation with dynamic floating state */}
      <div className="px-4 py-3 transition-all duration-300">
        <nav className={`mx-auto transition-all duration-300 flex justify-between items-center ${
          isScrolled 
            ? 'max-w-6xl bg-white/80 backdrop-blur-lg border border-slate-200/50 shadow-2xl shadow-brand-900/5 rounded-full py-2 px-6' 
            : 'max-w-7xl py-2 px-4'
        }`}>
          <div className="flex items-center gap-3">
            <img 
              src="/images/logo.png" 
              alt="Royal Plumbing Services Logo" 
              className={`object-contain transition-all duration-300 ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'}`}
              referrerPolicy="no-referrer"
            />
            <div>
              <h1 className={`font-display font-black leading-none text-slate-900 transition-all duration-300 ${isScrolled ? 'text-base' : 'text-lg'}`}>Royal Plumbing Services</h1>
              {!isScrolled && <span className="text-[9px] uppercase tracking-[0.25em] font-black text-gold-600">MSME Registered</span>}
            </div>
          </div>

          {/* Search Bar - hidden on mobile / floating */}
          {!isScrolled && (
            <div className="hidden lg:flex flex-1 max-w-xs mx-8 relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-slate-400" />
              </div>
              <input 
                type="text" 
                placeholder="Search services..." 
                className="w-full bg-slate-50 border border-slate-200 rounded-full py-2 pl-10 pr-4 text-xs focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 transition-all"
              />
            </div>
          )}

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-xs font-black uppercase tracking-widest text-slate-600 hover:text-gold-600 transition-colors">Home</a>
            <a href="#services" className="text-xs font-black uppercase tracking-widest text-slate-600 hover:text-gold-600 transition-colors">Services</a>
            <a href="#service-area" className="text-xs font-black uppercase tracking-widest text-slate-600 hover:text-gold-600 transition-colors">Service Area</a>
            <a href="#pricing" className="text-xs font-black uppercase tracking-widest text-slate-600 hover:text-gold-600 transition-colors">Pricing</a>
            <a href="#gallery" className="text-xs font-black uppercase tracking-widest text-slate-600 hover:text-gold-600 transition-colors">Our Work</a>
            <button 
              onClick={onOpenModal}
              className={`bg-brand-600 hover:bg-brand-700 text-white font-black uppercase tracking-widest transition-all shadow-lg border border-brand-500 hover:border-gold-400 ${
                isScrolled ? 'px-5 py-2 rounded-full text-[10px]' : 'px-6 py-2.5 rounded-xl text-xs'
              }`}
            >
              Book Service
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:text-gold-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-slate-100 overflow-hidden absolute w-full shadow-2xl z-40"
          >
            <div className="p-6 flex flex-col gap-6">
              <a href="#" onClick={closeMenu} className="font-black text-slate-900 text-base uppercase tracking-widest hover:text-gold-600 transition-colors">Home</a>
              <a href="#services" onClick={closeMenu} className="font-black text-slate-900 text-base uppercase tracking-widest hover:text-gold-600 transition-colors">Services</a>
              <a href="#service-area" onClick={closeMenu} className="font-black text-slate-900 text-base uppercase tracking-widest hover:text-gold-600 transition-colors">Service Area</a>
              <a href="#pricing" onClick={closeMenu} className="font-black text-slate-900 text-base uppercase tracking-widest hover:text-gold-600 transition-colors">Pricing</a>
              <a href="#about" onClick={closeMenu} className="font-black text-slate-900 text-base uppercase tracking-widest hover:text-gold-600 transition-colors">About</a>
              <a href="#contact" onClick={closeMenu} className="font-black text-slate-900 text-base uppercase tracking-widest hover:text-gold-600 transition-colors">Contact</a>
              <div className="pt-4 border-t border-slate-100">
                <button 
                  onClick={() => {
                    closeMenu();
                    onOpenModal();
                  }}
                  className="bg-brand-600 text-white px-6 py-4 rounded-full font-black uppercase tracking-widest w-full shadow-xl shadow-brand-600/20 border border-brand-500 hover:border-gold-400"
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
