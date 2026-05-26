import { Star, Quote, Plus, X } from 'lucide-react';
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
    const saved = localStorage.getItem('vikas_reviews');
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
    
    const saved = localStorage.getItem('vikas_reviews');
    const parsedSaved = saved ? JSON.parse(saved) : [];
    localStorage.setItem('vikas_reviews', JSON.stringify([newReview, ...parsedSaved]));
    
    setShowForm(false);
    setNewReview({ name: '', location: '', quote: '', rating: 5 });
  };

  return (
    <section className="py-24 px-4 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-left max-w-2xl">
            <span className="text-brand-600 font-bold uppercase tracking-widest text-sm">Testimonials</span>
            <h2 className="text-3xl md:text-4xl mt-2 text-slate-900 font-black">What Our Customers Say</h2>
            <p className="text-slate-600 mt-4 leading-relaxed font-medium">
              We take pride in delivering top-notch plumbing services across Faridabad. Here's why our customers trust us.
            </p>
          </div>
          <button 
            onClick={() => setShowForm(true)}
            className="bg-brand-50 hover:bg-brand-100 border border-brand-200 text-brand-700 px-6 py-4 rounded-2xl font-bold transition-all flex items-center gap-2 shrink-0 hover:shadow-lg shadow-sm"
          >
            <Plus className="w-5 h-5" />
            Write a Review
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.slice(0, 8).map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col h-full hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < item.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`}
                  />
                ))}
              </div>
              
              <div className="relative flex-grow">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-brand-100 -z-0" />
                <p className="text-slate-700 italic leading-relaxed relative z-10 mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <h4 className="font-bold text-slate-900">{item.name}</h4>
                <p className="text-xs text-brand-600 font-medium">{item.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-brand-50 px-6 py-3 rounded-full border border-brand-100">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://picsum.photos/seed/user${i}/40/40`}
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <p className="text-sm font-semibold text-brand-900">
              Join {500 + reviews.length - initialTestimonials.length}+ happy customers in Faridabad
            </p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showForm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" 
              onClick={() => setShowForm(false)} 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl p-8 z-10"
            >
              <button 
                onClick={() => setShowForm(false)} 
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <h3 className="text-3xl font-black text-slate-900 mb-2">Write a Review</h3>
              <p className="text-slate-500 font-medium text-sm mb-8">Share your experience with Royal Plumbing Services.</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">Rate your experience</label>
                  <div className="flex gap-2 bg-slate-50 p-4 rounded-2xl w-fit border border-slate-100">
                    {[1,2,3,4,5].map(star => (
                      <button 
                        type="button" 
                        key={star} 
                        onClick={() => setNewReview({...newReview, rating: star})}
                        className="hover:scale-110 transition-transform focus:outline-none"
                      >
                        <Star className={`w-8 h-8 ${star <= newReview.rating ? 'text-yellow-400 fill-yellow-400 drop-shadow-sm' : 'text-slate-200'}`} />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="e.g. Rahul Gupta" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all font-medium" 
                      value={newReview.name} 
                      onChange={e => setNewReview({...newReview, name: e.target.value})} 
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-sm font-bold text-slate-700 mb-2">Location</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="e.g. Sector 15" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all font-medium" 
                      value={newReview.location} 
                      onChange={e => setNewReview({...newReview, location: e.target.value})} 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Your Review</label>
                  <textarea 
                    required 
                    placeholder="Tell us about the service provided..." 
                    rows={4} 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all font-medium resize-none" 
                    value={newReview.quote} 
                    onChange={e => setNewReview({...newReview, quote: e.target.value})} 
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-brand-600 text-white font-black text-lg py-4 rounded-xl hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/20 mt-4"
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
