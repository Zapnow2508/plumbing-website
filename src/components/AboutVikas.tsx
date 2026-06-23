import { motion } from 'motion/react';
import { Award, Target, Heart, ShieldCheck, Star, Users, Briefcase } from 'lucide-react';

export default function AboutVikas() {
  const stats = [
    { label: "Years Experience", value: "10+", icon: <Briefcase className="w-5 h-5 text-gold-500" /> },
    { label: "Happy Customers", value: "250+", icon: <Users className="w-5 h-5 text-gold-500" /> },
    { label: "Service Rating", value: "4.9/5", icon: <Star className="w-5 h-5 text-gold-500" /> },
  ];

  const values = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Integrity First",
      desc: "Honest upfront pricing and clear, transparent communication at every single phase of our work."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Premium Materials",
      desc: "We use only the top-grade materials ensuring your plumbing fixes outlast standard market solutions."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision Execution",
      desc: "Highly experienced technicians utilizing advanced electronic testing to pinpoint and repair leaks."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Unrivaled Support",
      desc: "We stand behind our craftsmanship with 24/7 priority emergency response for all contract clients."
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-4 bg-slate-50 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-16">
          {/* Card 1: Branding and Core Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-5/12 bg-slate-900 text-white rounded-[3rem] p-10 md:p-12 flex flex-col justify-between relative overflow-hidden border border-gold-900/20 shadow-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(212,175,55,0.1),transparent)]" />
            <div className="relative z-10 space-y-8">
              <span className="text-gold-400 font-black uppercase tracking-[0.25em] text-[10px] bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-black leading-tight">
                Setting the Gold Standard in Faridabad
              </h2>
              <p className="text-slate-400 text-base leading-relaxed font-medium">
                Our journey began with a simple mission: to provide Faridabad with a plumbing service that values honesty as much as technical skill. Today, <strong>Royal Plumbing Services</strong> stands as a symbol of reliability for over 250 families and businesses.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/10 relative z-10">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-[9px] uppercase tracking-widest font-bold text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Core Values Grid */}
          <div className="lg:w-7/12 flex flex-col justify-between gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((val, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-[2rem] border border-slate-200/60 hover:border-gold-300 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center text-gold-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-black text-slate-900 text-lg mb-2">{val.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">{val.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-brand-900 to-brand-950 text-white p-8 rounded-[2.5rem] border border-gold-500/20 shadow-xl flex flex-col sm:flex-row justify-between items-center gap-6"
            >
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-widest text-gold-400 font-bold">Priority Support</div>
                <h4 className="text-xl font-display font-black">Facing a critical water leak or block?</h4>
              </div>
              <a 
                href="tel:+918287023020" 
                className="bg-gold-500 hover:bg-gold-600 text-slate-950 font-black px-6 py-3.5 rounded-full transition-all text-sm shrink-0 shadow-lg shadow-gold-500/25"
              >
                Call Emergency Desk
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
