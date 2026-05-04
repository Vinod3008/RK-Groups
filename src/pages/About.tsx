import React from 'react';
import { motion } from 'motion/react';
import { 
  History, 
  Users2, 
  ShieldCheck, 
  Globe, 
  Award,
  ChevronRight,
  Sparkles,
  Search,
  Building
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const leadership = [
    {
      name: "Rajiv Kapoor",
      role: "Managing Partner",
      bio: "Formerly Senior MD at BlackRock Real Estate.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Elena Richardson",
      role: "CIO",
      bio: "20+ years in structured finance at Goldman Sachs.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Dr. Marcus Chen",
      role: "Head of Quant",
      bio: "Ph.D in Financial Engineering from MIT.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div className="flex flex-col gap-12 py-12 px-6 max-w-7xl mx-auto">
      {/* Hero Bento */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bento-card col-span-1 md:col-span-2 min-h-[400px] flex flex-col justify-end">
          <div className="label-caps !text-primary">Elite Foundation</div>
          <h1 className="text-headline-xl text-white mb-6">The Legacy of <br />RK Groups Sovereign</h1>
          <p className="text-body-lg max-w-xl">
             Emerging from a vision to bring institutional asset management precision to high-stakes private real estate.
          </p>
        </div>
        <div className="bento-card bg-surface-hover flex flex-col items-center justify-center text-center">
          <Award className="w-16 h-16 text-primary mb-6" />
          <div className="stat-value text-white">$12B+</div>
          <div className="label-caps !mb-0">Cumulative Deal Volume</div>
        </div>
      </section>

      {/* Philosophy Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { icon: ShieldCheck, title: "Fiduciary Duty", text: "Client alignment is our primary mandate." },
          { icon: Globe, title: "Global Perspective", text: "Analyzing local opportunities via global macro shifts." },
          { icon: History, title: "Long-Term Conviction", text: "We value sustainable alpha over short-term volatility." }
        ].map((v, i) => (
          <div key={i} className="bento-card bg-primary/5 hover:bg-primary/10 transition-colors">
            <v.icon className="text-primary w-10 h-10 mb-6" />
            <h3 className="text-xl font-bold text-white mb-4">{v.title}</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">{v.text}</p>
          </div>
        ))}
      </section>

      {/* Leadership Bento */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bento-card col-span-1 md:col-span-3 flex flex-row justify-between items-center bg-surface-hover">
          <h2 className="text-headline-md text-white">Institutional Leadership</h2>
          <Users2 className="text-primary w-10 h-10 opacity-20" />
        </div>
        {leadership.map((person, idx) => (
          <div 
            key={idx}
            className="bento-card group p-0 overflow-hidden bg-transparent border-0"
          >
            <div className="h-full w-full bento-card flex flex-col">
              <div className="aspect-square overflow-hidden rounded-2xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-700">
                <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{person.name}</h3>
              <div className="label-caps !text-primary !mb-4">{person.role}</div>
              <p className="text-xs text-on-surface-variant leading-relaxed italic">{person.bio}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Timeline Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { year: "2012", title: "Inception", text: "Founded in New York." },
          { year: "2015", title: "Expansion", text: "Opened London office." },
          { year: "2018", title: "$5B AUM", text: "Strategic industrial rollups." },
          { year: "2023", title: "Global JV", text: "Sovereign fund partnerships." }
        ].map((m, i) => (
          <div key={i} className="bento-card bg-surface-hover/30">
            <div className="text-primary font-black text-xs mb-2">{m.year}</div>
            <h4 className="text-white font-bold mb-2">{m.title}</h4>
            <p className="text-[10px] text-on-surface-variant leading-relaxed">{m.text}</p>
          </div>
        ))}
      </section>

      {/* CTA Bento */}
      <section className="bento-card bg-gradient-to-br from-indigo-600 to-primary p-12 flex flex-col md:flex-row items-center gap-12 border-0">
        <div className="flex-1">
          <Building className="w-16 h-16 text-white/20 mb-8" />
          <h3 className="text-3xl font-bold text-white mb-6">Ready to Partner?</h3>
          <p className="text-white/80 text-lg mb-8">
            Join our network of elite institutional investors. Download our firm profile for in-depth governance and performance data.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-primary px-8 py-4 rounded-xl font-bold inline-flex items-center gap-3 hover:scale-105 transition-all"
          >
            Request Firm Profile <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
