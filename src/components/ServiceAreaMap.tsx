import { MapContainer, TileLayer, Circle, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { motion } from 'motion/react';
import { MapPin, ShieldCheck, Clock } from 'lucide-react';

// Fix for default icon issue in Leaflet
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const FARIDABAD_CENTER: [number, number] = [28.4089, 77.3178];

export default function ServiceAreaMap() {
  return (
    <section id="service-area" className="py-32 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Content Column */}
          <div className="lg:w-1/2 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Our Reach</span>
              <h2 className="text-4xl md:text-6xl mb-8 text-slate-900 leading-tight">Serving all of Faridabad</h2>
              <p className="text-slate-500 text-xl leading-relaxed font-medium">
                Royal Plumbing Services is proud to serve the entire Faridabad region. From residential complexes in Sector 15 to commercial hubs in NIT, we are just a call away.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-lg mb-2">Primary Area</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">All sectors of Faridabad, Haryana including NIT, Greater Faridabad, and Old Faridabad.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-lg mb-2">Response Time</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">Average response time of 30-60 minutes for emergency calls within the city.</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-4 mb-4">
                <ShieldCheck className="w-6 h-6 text-green-500" />
                <span className="font-black text-slate-900 uppercase tracking-widest text-sm">Verified Service Area</span>
              </div>
              <p className="text-slate-500 font-medium leading-relaxed italic">
                "We ensure that every corner of Faridabad gets the same high-quality plumbing service that Royal Plumbing Services is known for."
              </p>
            </div>
          </div>

          {/* Map Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full h-[500px] rounded-[3rem] overflow-hidden shadow-3xl border-[12px] border-slate-50 relative z-10"
          >
            <MapContainer 
              center={FARIDABAD_CENTER} 
              zoom={12} 
              scrollWheelZoom={false} 
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Circle 
                center={FARIDABAD_CENTER}
                pathOptions={{ color: '#416eff', fillColor: '#416eff', fillOpacity: 0.2 }}
                radius={8000} 
              />
              <Marker position={FARIDABAD_CENTER}>
                <Popup>
                  <div className="text-center">
                    <p className="font-black text-slate-900">Royal Plumbing Services</p>
                    <p className="text-xs text-slate-500">Sector 15, Faridabad</p>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
            
            {/* Map Overlay Badge */}
            <div className="absolute top-8 left-8 z-[1000] bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl border border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-brand-600 animate-pulse" />
                <span className="text-xs font-black uppercase tracking-widest text-slate-900">Live Service Area</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
