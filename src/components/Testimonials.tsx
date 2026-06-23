import { Star, Quote, Plus, X, Award, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect } from 'react';

const initialTestimonials = [
  {
    name: "Rajesh Kumar",
    location: "Sector 15, Faridabad",
    quote: "Excellent service! They arrived within 30 minutes for a pipe burst emergency. Very professional and fixed the issue quickly at a reasonable price.",
    rating: 5
  },
  {
    name: "Sneha Sharma",
    location: "Greenfield Colony",
    quote: "Got my entire bathroom fittings changed. The team was very skilled and left the place spotless. Highly recommended for any plumbing work in Faridabad.",
    rating: 5
  },
  {
    name: "Amit Verma",
    location: "NIT Faridabad",
    quote: "Reliable and honest. They explained the problem clearly and didn't try to overcharge. Best plumbing service I've used so far.",
    rating: 4
  },
  {
    name: "Priya Singh",
    location: "Sector 21",
    quote: "Very professional behavior. The plumber was polite and knew exactly what he was doing. Fixed my kitchen sink blockage in no time.",
    rating: 5
  }
];

export default function Testimonials() {
  const [reviews, setReviews] = useState(initialTestimonials);
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', location: '', quote: '', rating: 5 });

  useEffect(() => {
    const saved = localStorage.getItem('royal_plumbing_reviews');
    if (saved) {
      try {
        setReviews([...JSON.parse(saved), ...initialTestimonials]);
      } catch (e) {
        console.error("Failed to parse reviews", e);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    
    const saved = localStorage.getItem('royal_plumbing_reviews');
    const parsedSaved = saved ? JSON.parse(saved) : [];
    localStorage.setItem('royal_plumbing_reviews', JSON.stringify([newReview, ...parsedSaved]));
    
    setShowForm(false);
    setNewReview({ name: '', location: '', quote: '', rating: 5 });
  };

  return (
    <section className="py-24 px-4 bg-slate-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          
          {/* Summary Panel (Left Card) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-4/12 bg-white border border-slate-200/60 p-10 rounded-[2.5rem] flex flex-col justify-between shadow-xl"
          >
            <div>
              <span className="text-gold-600 font-bold uppercase tracking-widest text-[10px] bg-gold-50 border border-gold-200 px-4 py-1.5 rounded-full inline-block mb-6">
                Customer Feedback
              </span>
              <h2 className="text-3xl md:text-4xl text-slate-900 font-display font-black leading-tight mb-4">
                What Our Clients Say
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                We take immense pride in delivering top-notch residential and commercial plumbing services across Faridabad.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-center gap-4">
                <div className="text-4xl font-display font-black text-slate-900">4.9</div>
                <div>
                  <div className="flex gap-0.5 mb-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4.5 h-4.5 fill-current" />)}
                  </div>
                  <div className="text-xs text-slate-400 font-bold uppercase">Average Service Rating</div>
                </div>
              </div>

              <button 
                onClick={() => setShowForm(true)}
                className="w-full bg-brand-600 hover:bg-brand-700 text-white py-4.5 rounded-full font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-600/10 border border-brand-500 hover:border-gold-400"
              >
                <Plus className="w-4 h-4" />
                Write a Review
              </button>
            </div>
          </motion.div>

          {/* Testimonials Feed Grid (Right Side) */}
          <div className="lg:w-8/12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-h-[550px] overflow-y-auto pr-2">
            {reviews.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[2rem] border border-slate-200/50 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <Quote className="absolute -top-3 -right-3 w-16 h-16 text-gold-200/20 -z-0" />
                <div>
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${i < item.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200'}`}
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 italic text-sm leading-relaxed mb-6 relative z-10">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                  <div>
                    <h4 className="font-display font-black text-slate-900 text-sm">{item.name}</h4>
                    <p className="text-[10px] text-gold-600 font-bold uppercase tracking-wider">{item.location}</p>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-green-500" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      <AnimatePresence>
        {showForm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" 
              onClick={() => setShowForm(false)} 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl p-8 z-10 border border-slate-100"
            >
              <button 
                onClick={() => setShowForm(false)} 
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <h3 className="text-2xl font-display font-black text-slate-900 mb-2">Write a Review</h3>
              <p className="text-slate-500 font-medium text-sm mb-6">Share your experience with Royal Plumbing Services.</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-black uppercase text-slate-400 tracking-wider mb-2.5">Rating</label>
                  <div className="flex gap-2 bg-slate-50 p-4 rounded-xl w-fit border border-slate-200/50">
                    {[1,2,3,4,5].map(star => (
                      <button 
                        type="button" 
                        key={star} 
                        onClick={() => setNewReview({...newReview, rating: star})}
                        className="hover:scale-110 transition-transform focus:outline-none"
                      >
                        <Star className={`w-7 h-7 ${star <= newReview.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200'}`} />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase text-slate-400 tracking-wider mb-2">Name</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="e.g. Rahul Gupta" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all font-medium text-sm" 
                      value={newReview.name} 
                      onChange={e => setNewReview({...newReview, name: e.target.value})} 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase text-slate-400 tracking-wider mb-2">Location</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="e.g. Sector 15" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all font-medium text-sm" 
                      value={newReview.location} 
                      onChange={e => setNewReview({...newReview, location: e.target.value})} 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-black uppercase text-slate-400 tracking-wider mb-2">Review</label>
                  <textarea 
                    required 
                    placeholder="Tell us about the service provided..." 
                    rows={4} 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all font-medium text-sm resize-none" 
                    value={newReview.quote} 
                    onChange={e => setNewReview({...newReview, quote: e.target.value})} 
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-brand-600 text-white font-black uppercase tracking-widest text-sm py-4.5 rounded-full hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/20 mt-4 border border-brand-500 hover:border-gold-400"
                >
                  Post Review
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
