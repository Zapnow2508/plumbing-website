import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-24 pb-12 px-4 overflow-hidden relative">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl -mr-48 -mt-48" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="bg-brand-600 p-3 rounded-2xl shadow-xl shadow-brand-600/20">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-black leading-none text-white tracking-tight">Royal Plumbing Services</h1>
                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-brand-500">Faridabad's Choice</span>
              </div>
            </div>
            <p className="text-slate-500 text-lg leading-relaxed font-medium">
              Expert plumbing solutions. Over 10 years of mastery in installations and repairs for Faridabad homes.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white hover:bg-brand-600 hover:scale-110 transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-xs">Operating Hours</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-brand-500" />
                </div>
                <div>
                  <p className="text-white font-black">Mon - Sat</p>
                  <p className="text-sm font-medium text-slate-500">8:00 AM - 8:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-600/10 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                </div>
                <div>
                  <p className="text-white font-black">Emergency</p>
                  <p className="text-brand-500 font-black text-sm">Available 24/7</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-xs">Quick Links</h3>
            <ul className="space-y-4">
              {['Emergency Repairs', 'Service Area', 'Bathroom Fitting', 'Drain Cleaning', 'Water Heater', 'Pipe Installation'].map((link, i) => (
                <li key={i}>
                  <a 
                    href={link === 'Service Area' ? '#service-area' : '#'} 
                    className="group flex items-center gap-2 hover:text-white transition-colors font-medium"
                  >
                    <ArrowRight className="w-4 h-4 text-brand-600 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-xs">Get in Touch</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-brand-500 shrink-0 mt-1" />
                <a href="https://maps.app.goo.gl/3Dzhq4ubDNpQVHdK9" target="_blank" rel="noopener noreferrer" className="text-sm font-medium leading-relaxed hover:text-white transition-colors">
                  Kushvaha ji plumbing service<br />
                  Faridabad, Haryana
                </a>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-brand-500 shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+918287023020" className="text-white font-black hover:text-brand-500 transition-colors text-lg">+91 82870 23020</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-brand-500 shrink-0" />
                <a href="mailto:Veer8796982003@gmail.com" className="text-sm font-medium hover:text-white transition-colors">Veer8796982003@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-600">
            <ShieldCheck className="w-4 h-4 text-brand-600" />
            MSME Registered Business
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-700">
            © {new Date().getFullYear()} Royal Plumbing Services. Crafted for Excellence.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-600">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
