import { motion } from 'motion/react';
import { Play, Maximize2, ExternalLink } from 'lucide-react';

const images = [
  { src: "/images/hero_installation.png", alt: "Bathroom Installation", category: "Installation" },
  { src: "/images/hero_leak.png", alt: "Pump System Setup", category: "Maintenance" },
  { src: "/images/hero_commercial.png", alt: "Commercial Urinal Installation", category: "Commercial" },
  { src: "/images/hero_installation.png", alt: "Restroom Plumbing", category: "Installation" },
  { src: "/images/hero_commercial.png", alt: "Modern Sink Setup", category: "Modern" },
  { src: "/images/hero_installation.png", alt: "Luxury Bathroom", category: "Premium" },
  { src: "/images/hero_leak.png", alt: "Shower Fitting", category: "Fitting" },
  { src: "/images/hero_installation.png", alt: "Basin Installation", category: "Installation" },
  { src: "/images/hero_commercial.png", alt: "Wall-hung Toilet", category: "Modern" },
  { src: "/images/hero_installation.png", alt: "Designer Shower", category: "Premium" },
  { src: "/images/hero_commercial.png", alt: "Premium Basin", category: "Premium" },
  { src: "/images/hero_leak.png", alt: "Water Tank System", category: "Maintenance" }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-32 px-4 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Our Portfolio</span>
            <h2 className="text-4xl md:text-6xl text-slate-900 leading-tight">Craftsmanship in motion</h2>
          </div>
          <p className="text-slate-500 max-w-sm text-lg font-medium">
            A visual journey through our most challenging and rewarding plumbing projects across Faridabad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <span className="text-brand-400 text-[10px] uppercase tracking-[0.2em] font-black mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.category}</span>
                <h4 className="text-white font-black text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{img.alt}</h4>
                <div className="mt-6 flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                  <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-600 transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-600 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 relative"
        >
          <div className="absolute inset-0 bg-brand-600 rounded-[4rem] rotate-1 scale-[1.02] opacity-5" />
          <div className="relative bg-white p-4 md:p-8 rounded-[4rem] shadow-3xl border border-slate-100 overflow-hidden">
            <div className="relative aspect-video rounded-[3rem] overflow-hidden group cursor-pointer">
              <video 
                className="w-full h-full object-cover" 
                poster="/images/hero_installation.png"
              >
                <source src="" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-all flex items-center justify-center">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-2xl shadow-brand-600/50"
                >
                  <Play className="w-10 h-10 md:w-12 md:h-12 fill-current ml-2" />
                </motion.div>
              </div>
              
              <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 text-white">
                  <p className="text-xs font-black uppercase tracking-widest mb-1 opacity-60">Featured Project</p>
                  <h3 className="text-2xl font-black">Luxury Bathroom Walkthrough</h3>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
