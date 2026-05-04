import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  ArrowRight,
  ShieldCheck,
  Globe2,
  Building,
  ChevronRight
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col gap-12 py-12 px-6 max-w-7xl mx-auto">
      {/* Header Bento */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bento-card col-span-1 md:col-span-2 min-h-[300px] flex flex-col justify-center">
          <div className="label-caps !text-primary">Institutional Access</div>
          <h1 className="text-headline-xl text-white mb-6 leading-none">Strategic Relations</h1>
          <p className="text-body-lg">
            Connect with our capital allocation team for private placement memorandum access and institutional inquiries.
          </p>
        </div>
        <div className="bento-card bg-surface-hover flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 bg-primary/20 border border-primary/30 rounded-full flex items-center justify-center mb-4">
            <span className="w-3 h-3 bg-primary rounded-full animate-pulse" />
          </div>
          <div className="text-sm font-bold text-white uppercase tracking-widest">Global Status</div>
          <div className="text-accent text-xs font-black mt-2">ACTIVE SOURCING</div>
        </div>
      </section>

      {/* Main Content - Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
        {/* Form Card */}
        <div className="bento-card col-span-1 md:col-span-2 p-10 h-full">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-background border border-outline rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-colors"
                    placeholder="Enter name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Institutional Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-background border border-outline rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-colors"
                    placeholder="email@vault.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Subject of Inquiry</label>
                <div className="relative">
                  <select className="w-full bg-background border border-outline rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-colors appearance-none">
                    <option>Private Equity Allocation</option>
                    <option>Institutional Debt Inquiry</option>
                    <option>Strategic Partnership</option>
                    <option>Media & Press</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2 flex-grow">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Brief Memorandum</label>
                <textarea 
                  rows={4}
                  className="w-full bg-background border border-outline rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-colors resize-none mb-6"
                  placeholder="Describe your institutional interest..."
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all mt-auto"
              >
                Dispatch Inquiry <Send className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center h-full py-12"
            >
              <div className="w-20 h-20 bg-accent/20 border border-accent/30 rounded-full flex items-center justify-center mb-8">
                <ShieldCheck className="text-accent w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Inquiry Received</h2>
              <p className="text-on-surface-variant max-w-sm mb-8">
                Your message has been encrypted and routed to our strategic relations desk. Expected turnaround: 24-48 business hours.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-primary font-bold hover:underline py-2 px-4 rounded-lg hover:bg-primary/10 transition-colors"
              >
                Send Another Message
              </button>
            </motion.div>
          )}
        </div>

        {/* Sidebar Info - Bento Cards */}
        <div className="flex flex-col gap-4">
          <div className="bento-card flex-1">
            <h3 className="text-lg font-bold text-white mb-6">Global Hubs</h3>
            <div className="space-y-6">
              {[
                { city: "New York", addr: "Wall St Financial District" },
                { city: "London", addr: "Mayfair Corporate Center" },
                { city: "Singapore", addr: "Marina Bay Hub" }
              ].map((hub, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <MapPin className="text-primary w-5 h-5 shrink-0 mt-1" />
                  <div>
                    <div className="text-sm font-bold text-white">{hub.city}</div>
                    <div className="text-[10px] text-on-surface-variant uppercase tracking-tighter">{hub.addr}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bento-card">
            <h3 className="text-lg font-bold text-white mb-6">Direct Channels</h3>
            <div className="space-y-4">
              <a href="mailto:sovereign@rkgroups.com" className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="text-primary w-5 h-5 transition-transform group-hover:scale-110" />
                </div>
                <div className="text-xs font-semibold text-white">Secure Email</div>
              </a>
              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="text-primary w-5 h-5 transition-transform group-hover:scale-110" />
                </div>
                <div className="text-xs font-semibold text-white">+1 (212) 555-0198</div>
              </div>
            </div>
          </div>
          
          <div className="bento-card bg-surface-hover/50 text-center flex flex-col items-center justify-center">
            <div className="text-[10px] label-caps !mb-2 opacity-50 uppercase">Encryption Status</div>
            <div className="flex items-center gap-2 text-accent font-bold text-[10px]">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              AES-256 SECURED
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
