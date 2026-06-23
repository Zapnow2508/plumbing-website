import { motion } from 'motion/react';
import { Check, Info, Phone, Zap, Star } from 'lucide-react';

const pricingPlans = [
  {
    title: "Minor Repairs",
    price: "199",
    unit: "starting",
    description: "Quick fixes for common household plumbing issues.",
    features: [
      "Tap & Faucet Leak Repair",
      "Minor Joint Re-sealing",
      "Washbasin/Sink Unblocking",
      "Flush Button Calibration"
    ],
    highlight: false
  },
  {
    title: "Installations",
    price: "499",
    unit: "starting",
    description: "Professional setup of premium plumbing fittings.",
    features: [
      "Geyser/Water Heater Fitting",
      "Toilet Seat Installation",
      "Kitchen Sink Assembly",
      "RO/Water Filter Hookup"
    ],
    highlight: true
  },
  {
    title: "System Checks",
    price: "599",
    unit: "fixed",
    description: "Comprehensive testing for long-term protection.",
    features: [
      "Full Home Pipeline Scan",
      "Pressure Pump Performance Test",
      "Water Tank Health Check",
      "Drain Line Obstruction Check"
    ],
    highlight: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 px-4 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Transparent Standard Rates</span>
            <h2 className="text-4xl md:text-6xl text-slate-900 leading-tight">Fair rates for royal-class plumbing</h2>
          </div>
          <div className="flex items-center gap-2.5 bg-gold-50 border border-gold-200 px-6 py-3.5 rounded-full shrink-0">
            <Zap className="w-5 h-5 text-gold-600 animate-pulse" />
            <p className="text-xs font-black text-slate-950 uppercase tracking-widest">No Hidden Diagnostics Surcharges</p>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 items-stretch">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-10 md:p-12 rounded-[2.5rem] transition-all duration-500 flex flex-col justify-between border ${
                plan.highlight 
                  ? 'bg-gradient-to-br from-brand-900 to-brand-950 text-white shadow-2xl shadow-brand-950/20 scale-105 z-10 border-gold-400' 
                  : 'bg-white text-slate-900 border-slate-200 hover:border-gold-300 hover:shadow-2xl'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gold-500 text-slate-950 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.25em] shadow-xl flex items-center gap-1.5 border border-gold-400">
                  <Star className="w-3 h-3 fill-current" /> Most Popular
                </div>
              )}
              
              <div>
                <div className="mb-8">
                  <h3 className={`text-2xl font-display font-black mb-3 ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>{plan.title}</h3>
                  <p className={`text-sm font-medium leading-relaxed ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{plan.description}</p>
                </div>
                
                <div className="mb-10 flex items-baseline gap-2">
                  <span className={`text-2xl font-black ${plan.highlight ? 'text-gold-400' : 'text-brand-600'}`}>₹</span>
                  <span className="text-6xl font-black tracking-tighter font-display">{plan.price}</span>
                  <span className={`text-xs font-bold uppercase tracking-widest ${plan.highlight ? 'text-gold-400/80' : 'text-slate-400'}`}>/ {plan.unit}</span>
                </div>
                
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3.5 text-sm font-semibold">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.highlight ? 'bg-gold-500 text-slate-950' : 'bg-gold-50 text-gold-600'}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className={plan.highlight ? 'text-slate-300' : 'text-slate-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href="tel:+918287023020"
                className={`w-full py-5 rounded-full font-black text-center text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-2.5 ${
                  plan.highlight 
                    ? 'bg-gold-500 text-slate-950 hover:bg-gold-600 shadow-xl shadow-gold-500/20' 
                    : 'bg-brand-600 text-white hover:bg-brand-700 shadow-xl shadow-brand-600/15 border border-brand-500 hover:border-gold-400'
                }`}
              >
                <Phone className="w-4 h-4 fill-current" />
                Book Now
              </a>
            </motion.div>
          ))}
        </div>

        {/* Info Banner */}
        <div className="max-w-4xl mx-auto bg-slate-50 p-10 md:p-14 rounded-[3rem] border border-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="flex flex-col md:flex-row items-start gap-8 relative z-10">
            <div className="bg-white p-5 rounded-2xl text-gold-600 shadow-xl border border-slate-100 shrink-0">
              <Info className="w-8 h-8" />
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-display font-black text-slate-900">Diagnostics Policy</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm font-medium text-slate-500">
                <div className="space-y-2">
                  <p className="font-black text-slate-900 uppercase tracking-widest text-[10px] text-gold-600">Standard Inspection</p>
                  <p className="leading-relaxed">A visit fee of <span className="text-gold-600 font-bold">₹150</span> applies to evaluate the site. This fee is completely <span className="text-slate-900 font-bold">deducted</span> from your invoice if we perform the work.</p>
                </div>
                <div className="space-y-2">
                  <p className="font-black text-slate-900 uppercase tracking-widest text-[10px] text-gold-600">Extended Tasks</p>
                  <p className="leading-relaxed">Complex testing and structural plumbing mapping is billed at <span className="text-gold-600 font-bold">₹300/hr</span> plus the cost of replacements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
