import Header from './components/Header';
import ServiceBanner from './components/ServiceBanner';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import AboutVikas from './components/AboutVikas';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ServiceAreaMap from './components/ServiceAreaMap';
import { ShieldCheck, Clock, Award, CheckCircle2, Phone, ChevronRight, Users, Settings, Search, FileText, Wrench, Zap, Calculator, ThumbsUp, Droplets, Calendar, MessageSquare, CreditCard } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const categories = [
  { title: "Emergency", icon: <Zap className="w-6 h-6" />, color: "bg-amber-50 text-amber-600" },
  { title: "Installation", icon: <Wrench className="w-6 h-6" />, color: "bg-blue-50 text-blue-600" },
  { title: "Maintenance", icon: <Settings className="w-6 h-6" />, color: "bg-green-50 text-green-600" },
  { title: "Leak Repair", icon: <Droplets className="w-6 h-6" />, color: "bg-red-50 text-red-600" },
  { title: "Commercial", icon: <Award className="w-6 h-6" />, color: "bg-purple-50 text-purple-600" },
  { title: "Consultation", icon: <MessageSquare className="w-6 h-6" />, color: "bg-slate-50 text-slate-600" },
];

const steps = [
  {
    title: "Book Online",
    desc: "Choose your service and schedule a time that works for you.",
    icon: <Calendar className="w-8 h-8" />
  },
  {
    title: "Expert Visit",
    desc: "Our expert technician arrives with all necessary tools.",
    icon: <Wrench className="w-8 h-8" />
  },
  {
    title: "Quality Fix",
    desc: "We perform the repair or installation with precision and care.",
    icon: <ShieldCheck className="w-8 h-8" />
  },
  {
    title: "Easy Payment",
    desc: "Pay securely after the job is done to your satisfaction.",
    icon: <CreditCard className="w-8 h-8" />
  }
];

const features = [
  {
    title: "250+ Happy Customers",
    description: "Successfully installed and repaired pipes for over 250 residential and commercial clients.",
    icon: <Users className="w-8 h-8 text-brand-500" />
  },
  {
    title: "300+ Systems Tested",
    description: "Thoroughly tested over 300 plumbing systems to identify and resolve potential leakages.",
    icon: <Settings className="w-8 h-8 text-brand-500" />
  },
  {
    title: "Expert Troubleshooting",
    description: "Helped resolve complex plumbing issues for 54+ customers with 100% satisfaction.",
    icon: <Zap className="w-8 h-8 text-brand-500" />
  }
];

const serviceList = [
  { title: "Pipe Installation", desc: "Installing pipes and plumbing fixtures in homes or businesses.", icon: <Wrench className="w-5 h-5" /> },
  { title: "System Maintenance", desc: "Maintaining water supply and waste removal systems.", icon: <Settings className="w-5 h-5" /> },
  { title: "Material Selection", desc: "Selecting the best materials for a durable plumbing system.", icon: <CheckCircle2 className="w-5 h-5" /> },
  { title: "Blueprint Review", desc: "Reviewing building blueprints for optimal plumbing installation.", icon: <FileText className="w-5 h-5" /> },
  { title: "Equipment Inspection", desc: "Operating advanced equipment to troubleshoot systems.", icon: <Search className="w-5 h-5" /> },
  { title: "Leak Repair", desc: "Testing and repairing pipe systems and leakages.", icon: <ShieldCheck className="w-5 h-5" /> },
  { title: "Drain Clearing", desc: "Clearing obstructions from drains and plumbing systems.", icon: <Droplets className="w-5 h-5" /> },
  { title: "Cost Estimation", desc: "Providing accurate estimates for installations and repairs.", icon: <Calculator className="w-5 h-5" /> },
  { title: "Expert Advice", desc: "Offering professional recommendations to customers.", icon: <ThumbsUp className="w-5 h-5" /> }
];

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onOpenModal={() => setIsModalOpen(true)} />
      
      <main className="flex-grow">
        {/* Hero Section with Changing Banner */}
        <ServiceBanner isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

        {/* Service Categories Grid */}
        <section className="py-16 px-4 bg-white -mt-10 relative z-20">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-[3rem] shadow-3xl p-8 md:p-12 border border-slate-100">
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 pt-2 px-2 -mx-2 hide-scrollbar">
                {categories.map((cat, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center gap-4 cursor-pointer group min-w-[120px] shrink-0 snap-center"
                  >
                    <div className={`w-20 h-20 rounded-3xl ${cat.color} flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm`}>
                      {cat.icon}
                    </div>
                    <span className="font-black text-slate-900 text-sm uppercase tracking-widest">{cat.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Bento Grid Style */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <span className="text-brand-600 font-black uppercase tracking-[0.2em] text-xs mb-4 block">Why Royal Plumbing Services</span>
                <h2 className="text-4xl md:text-6xl text-slate-900 leading-tight">Professional service you can trust</h2>
              </div>
              <p className="text-slate-500 max-w-sm text-lg font-medium">
                We combine years of expertise with modern tools to deliver excellence in every pipe we fix.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white p-10 rounded-[2.5rem] border border-slate-100/50 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-bl-[100px] -mr-16 -mt-16 transition-all duration-500 group-hover:scale-150 group-hover:bg-brand-500" />
                  <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white transition-all duration-500 relative z-10">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl mb-4 font-black relative z-10 group-hover:text-slate-900 transition-colors">{feature.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium relative z-10">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 md:py-32 px-4 bg-brand-50/50 text-slate-900 overflow-hidden relative">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <span className="text-brand-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Simple Process</span>
              <h2 className="text-4xl md:text-6xl font-black mb-8 text-slate-900">How it works</h2>
              <p className="text-slate-600 text-xl max-w-2xl mx-auto font-medium">
                Getting your plumbing fixed is easier than ever. Follow these four simple steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group"
                >
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-px border-t-2 border-dashed border-brand-200 z-0 -ml-10" />
                  )}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-[2rem] bg-white border border-brand-100 flex items-center justify-center text-brand-600 mb-8 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-500 shadow-xl shadow-brand-500/10 z-10">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-black mb-4 text-slate-900">{step.title}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Vikas Ji Section */}
        <AboutVikas />

        {/* Pricing Section */}
        <Pricing />

        {/* Services Overview Section - Modern Split Layout */}
        <section id="services" className="py-20 md:py-32 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-24 items-center">
              <div className="lg:w-1/2 relative">
                <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-3xl">
                  <img 
                    src="/images/hero_commercial.png" 
                    alt="Royal Plumbing Services expert at work" 
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Floating Badge */}
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2.5rem] shadow-2xl z-20 border border-slate-100 hidden md:block"
                >
                  <div className="flex items-center gap-5">
                    <div className="bg-brand-600 p-4 rounded-2xl text-white shadow-xl shadow-brand-600/30">
                      <Award className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-3xl font-black text-slate-900">Vikas Ji</div>
                      <div className="text-sm font-bold text-brand-600 uppercase tracking-widest">Master Plumber</div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div className="lg:w-1/2 space-y-12">
                <div>
                  <span className="text-brand-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Our Expertise</span>
                  <h2 className="text-4xl md:text-6xl mb-8 leading-tight">Precision in every connection</h2>
                  <p className="text-slate-500 text-xl leading-relaxed font-medium">
                    Royal Plumbing Services provides professional installation, maintenance, and repair for all your plumbing needs. We collaborate with construction departments and review blueprints to ensure perfect execution.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {serviceList.map((service, idx) => (
                    <motion.div 
                      key={idx} 
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-5 group cursor-pointer"
                    >
                      <div className="w-14 h-14 shrink-0 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 text-lg mb-1">{service.title}</h4>
                        <p className="text-sm text-slate-500 font-medium leading-snug">{service.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="pt-6">
                  <button className="bg-brand-600 hover:bg-brand-700 text-white px-12 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-brand-600/20 hover:scale-105 active:scale-95">
                    Explore All Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <Gallery />

        {/* Service Area Map Section */}
        <ServiceAreaMap />

        {/* Testimonials Section */}
        <Testimonials />

        {/* CTA Section - Immersive Design */}
        <section id="contact" className="py-32 px-4">
          <div className="max-w-6xl mx-auto relative">
            <div className="absolute inset-0 bg-brand-200 rounded-[4rem] rotate-1 scale-[1.02] opacity-50" />
            <div className="bg-gradient-to-br from-brand-500 to-brand-800 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-3xl">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.2),transparent)]" />
              
              <div className="relative z-10 space-y-12">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-widest">Online & Ready to Help</span>
                </div>
                
                <h2 className="text-4xl md:text-7xl font-black leading-tight max-w-4xl mx-auto">
                  Ready to fix your plumbing issues?
                </h2>
                
                <p className="text-slate-400 text-xl md:text-2xl max-w-2xl mx-auto font-medium">
                  Join our 250+ happy customers in Faridabad. Call Royal Plumbing Services today for a reliable and honest service.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                  <a 
                    href="tel:+918287023020" 
                    className="group bg-white text-brand-900 px-12 py-6 rounded-[2rem] font-black text-2xl flex items-center justify-center gap-4 hover:scale-105 transition-all shadow-2xl shadow-brand-900/10"
                  >
                    <Phone className="w-8 h-8 fill-brand-600 text-brand-600" />
                    +91 82870 23020
                  </a>
                </div>
                
                <div className="pt-8 flex flex-wrap justify-center gap-8 opacity-50">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-400" />
                    <span className="text-sm font-bold">MSME Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-400" />
                    <span className="text-sm font-bold">24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-400" />
                    <span className="text-sm font-bold">Faridabad Local</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
