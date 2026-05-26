import { motion } from 'motion/react';
import { Check, Info, Phone, Zap } from 'lucide-react';

const pricingPlans = [
  {
    title: "Minor Repairs",
    price: "199",
    unit: "starting",
    description: "Quick fixes for common household plumbing issues.",
    features: [
      "Tap & Faucet Repair",
      "Minor Leak Fixing",
      "Washbasin Unblocking",
      "Flush Button Repair"
    ],
    highlight: false
  },
  {
    title: "Installations",
    price: "499",
    unit: "starting",
    description: "Professional setup of new plumbing fixtures.",
    features: [
      "Geyser Installation",
      "Toilet Seat Fitting",
      "Kitchen Sink Setup",
      "Water Purifier Connection"
    ],
    highlight: true
  },
  {
    title: "Maintenance",
    price: "599",
    unit: "fixed",
    description: "Comprehensive checkups for long-term reliability.",
    features: [
      "Full Home Plumbing Check",
      "Water Tank Cleaning",
      "Pressure Pump Testing",
      "System Troubleshooting"
    ],
    highlight: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Transparent Pricing</span>
            <h2 className="text-4xl md:text-6xl text-slate-900 leading-tight">Fair rates for expert work</h2>
          </div>
          <div className="flex items-center gap-3 bg-brand-50 px-6 py-3 rounded-2xl border border-brand-100">
            <Zap className="w-5 h-5 text-brand-600 animate-pulse" />
            <p className="text-xs font-black text-brand-900 uppercase tracking-widest">No Hidden Charges</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-12 rounded-[3.5rem] transition-all duration-500 ${
                plan.highlight 
                  ? 'bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-3xl shadow-brand-500/30 scale-105 z-10 border border-brand-400/30' 
                  : 'bg-white text-slate-900 border border-slate-100 hover:shadow-2xl hover:shadow-brand-500/5'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-600 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">
                  Most Popular
                </div>
              )}
              <div className="mb-10">
                <h3 className={`text-2xl font-black mb-3 ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>{plan.title}</h3>
                <p className={`text-sm font-medium leading-relaxed ${plan.highlight ? 'text-brand-100' : 'text-slate-500'}`}>{plan.description}</p>
              </div>
              <div className="mb-10 flex items-baseline gap-2">
                <span className={`text-2xl font-black ${plan.highlight ? 'text-brand-200' : 'text-brand-600'}`}>₹</span>
                <span className="text-6xl font-black tracking-tighter">{plan.price}</span>
                <span className={`text-sm font-bold uppercase tracking-widest ${plan.highlight ? 'text-brand-200' : 'text-slate-400'}`}>/ {plan.unit}</span>
              </div>
              <ul className="space-y-5 mb-12">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-4 text-sm font-bold">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${plan.highlight ? 'bg-white text-brand-600' : 'bg-brand-50 text-brand-600 shadow-sm'}`}>
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className={plan.highlight ? 'text-white' : 'text-slate-700'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="tel:+918287023020"
                className={`w-full py-6 rounded-[2rem] font-black text-lg transition-all flex items-center justify-center gap-3 ${
                  plan.highlight 
                    ? 'bg-white text-brand-900 hover:bg-brand-50 shadow-xl shadow-brand-900/10' 
                    : 'bg-brand-600 text-white hover:bg-brand-700 shadow-xl shadow-brand-600/20'
                }`}
              >
                <Phone className="w-5 h-5" />
                Book Now
              </a>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-slate-50 p-10 md:p-16 rounded-[4rem] border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
            <div className="bg-white p-6 rounded-[2rem] text-brand-600 shadow-xl shadow-brand-500/5 shrink-0">
              <Info className="w-10 h-10" />
            </div>
            <div className="space-y-6">
              <h4 className="text-2xl font-black text-slate-900">Important Pricing Information</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-sm font-medium text-slate-500">
                <div className="space-y-3">
                  <p className="font-black text-slate-900 uppercase tracking-widest text-xs">Call-Out Fee</p>
                  <p className="leading-relaxed text-base">A nominal visit charge of <span className="text-brand-600 font-black">₹150</span> applies to all service calls. This is <span className="text-slate-900 font-black">waived</span> if you proceed with the repair.</p>
                </div>
                <div className="space-y-3">
                  <p className="font-black text-slate-900 uppercase tracking-widest text-xs">Hourly Rates</p>
                  <p className="leading-relaxed text-base">For complex troubleshooting or large-scale work, we charge <span className="text-brand-600 font-black">₹300/hour</span> plus materials.</p>
                </div>
              </div>
              <p className="text-[10px] text-slate-400 pt-6 border-t border-slate-200 font-bold uppercase tracking-[0.2em]">
                * Labor only. Materials charged at actual market rates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

