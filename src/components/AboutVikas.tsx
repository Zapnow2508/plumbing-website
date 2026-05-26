import { motion } from 'motion/react';
import { Award, Target, Heart, ShieldCheck, CheckCircle2, Star, Users, Briefcase } from 'lucide-react';

export default function AboutVikas() {
  const stats = [
    { label: "Years Experience", value: "10+", icon: <Briefcase className="w-5 h-5" /> },
    { label: "Happy Customers", value: "250+", icon: <Users className="w-5 h-5" /> },
    { label: "Service Rating", value: "4.9/5", icon: <Star className="w-5 h-5" /> },
  ];

  const values = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Integrity",
      desc: "Honest pricing and transparent communication in every project."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      desc: "Superior craftsmanship using the best materials for long-lasting results."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Reliability",
      desc: "Punctual service and 24/7 support for all plumbing emergencies."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Customer First",
      desc: "Your satisfaction is our top priority, from start to finish."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-3xl border-[12px] border-slate-50">
              <img 
                src="/images/vikas_profile.jpg" 
                alt="Royal Plumbing Services" 
                className="w-full h-auto object-cover aspect-[4/5] object-[center_25%] scale-[1.3] origin-top transition-transform"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Stats */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/80 to-transparent p-10 pt-20">
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, i) => (
                    <div key={i} className="text-center text-white">
                      <div className="text-2xl font-black mb-1">{stat.value}</div>
                      <div className="text-[10px] uppercase tracking-widest font-bold text-slate-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-500/10 rounded-full -z-0 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-600/10 rounded-full -z-0 blur-3xl" />
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="absolute -top-10 -right-10 bg-white p-8 rounded-[2.5rem] shadow-2xl z-20 border border-slate-100 hidden md:block"
            >
              <div className="flex items-center gap-5">
                <div className="bg-brand-600 p-4 rounded-2xl text-white shadow-xl shadow-brand-600/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-xs font-black text-brand-600 uppercase tracking-[0.2em] mb-1">MSME Certified</p>
                  <p className="text-xl font-black text-slate-900">Royal Plumbing</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <div className="lg:w-1/2 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block">The Mastermind</span>
              <h2 className="text-4xl md:text-6xl mb-8 text-slate-900 leading-tight">A decade of trust in every home</h2>
              <p className="text-slate-500 text-xl leading-relaxed font-medium">
                Our journey began with a simple mission: to provide Faridabad with a plumbing service that values honesty as much as technical skill. Today, <strong>Royal Plumbing Services</strong> stands as a symbol of reliability for over 250 families.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-lg mb-2">{value.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">{value.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-10 rounded-[2.5rem] bg-slate-950 text-white overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-brand-600/40 transition-all duration-500" />
              <div className="relative z-10">
                <h4 className="font-black text-2xl mb-4 flex items-center gap-3">
                  <Target className="w-8 h-8 text-brand-400" />
                  Our Mission
                </h4>
                <p className="text-slate-400 text-lg leading-relaxed font-medium">
                  To set the gold standard for plumbing in Faridabad by combining traditional craftsmanship with modern technology, ensuring every drop is managed with expertise.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
