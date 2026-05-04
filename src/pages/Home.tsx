import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Building2,
  ChevronRight,
  BarChart3,
  Globe2,
  PieChart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="flex flex-col gap-12 py-12 px-6 max-w-7xl mx-auto">
      {/* Hero Section - Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 min-h-[80vh]">
        {/* Main Hero Card */}
        <div className="bento-card col-span-1 md:col-span-2 md:row-span-3 relative overflow-hidden flex flex-col justify-end min-h-[400px]">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
              alt="Office" 
              className="w-full h-full object-cover opacity-20 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </div>
          <div className="relative z-10">
            <div className="label-caps !text-primary">Private Institutional Fund</div>
            <h1 className="text-headline-xl text-white mb-6 leading-none">
              Sovereign <br />
              <span className="text-gradient">Precision.</span>
            </h1>
            <p className="text-body-lg mb-8 max-w-md">
              Specializing in distressed asset acquisition and strategic financing for high-stakes portfolios.
            </p>
            <div className="flex gap-4">
              <Link 
                to="/strategy" 
                className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all group"
              >
                Strategy
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Dynamic Growth Card */}
        <div className="bento-card col-span-1 md:col-span-2 md:row-span-2 relative overflow-hidden">
          <div className="label-caps">Portfolio Growth</div>
          <div className="flex-1 flex items-end gap-2 pt-8">
            {[30, 45, 65, 60, 85, 95].map((h, i) => (
              <div key={i} className="w-full h-32 bg-primary/10 rounded-lg flex items-end overflow-hidden">
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className={cn(
                    "w-full border-t border-white/20",
                    i === 5 ? "bg-primary" : "bg-primary/40"
                  )} 
                />
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-between items-center">
            <div className="stat-value">$4.2B<span className="text-lg font-normal text-on-surface-variant ml-2">AUM</span></div>
            <div className="text-accent text-sm font-medium">+12.4% ARR</div>
          </div>
        </div>

        {/* Secondary Metric Cards */}
        <div className="bento-card col-span-1 md:col-span-1 md:row-span-1 bg-gradient-to-br from-primary to-indigo-700 border-0">
          <div className="label-caps text-white/50">Market Position</div>
          <div className="text-2xl font-bold text-white mt-2">Core Dominance</div>
          <div className="mt-auto flex justify-between items-center">
            <div className="text-xs text-white/80">18 Global Hubs</div>
            <Globe2 className="w-6 h-6 text-white/20" />
          </div>
        </div>

        <div className="bento-card col-span-1 md:col-span-1 md:row-span-1">
          <div className="label-caps">Risk Status</div>
          <div className="flex items-center gap-4 mt-2">
            <div className="text-4xl font-bold text-accent">AAA</div>
            <div className="text-[10px] text-on-surface-variant leading-tight">Institutional<br />Stability Index</div>
          </div>
          <div className="mt-auto">
            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[92%] bg-accent" />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bento-card col-span-1 md:col-span-2 flex flex-row gap-8 items-center bg-surface-hover">
          <div className="flex-1">
            <div className="label-caps">Our Foundation</div>
            <h2 className="text-headline-md text-white mb-2">Active Guardianship</h2>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              We bridge the gap between traditional banking stability and the agility of private equity.
            </p>
          </div>
          <ShieldCheck className="w-16 h-16 text-primary/20" />
        </div>

        <div className="bento-card col-span-1 flex flex-col justify-center text-center items-center">
          <PieChart className="text-secondary w-10 h-10 mb-4" />
          <div className="text-3xl font-bold text-white mb-1">98%</div>
          <div className="label-caps !mb-0">Retention Rate</div>
        </div>
      </section>

      {/* Focus Areas - Bento Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            title: "Commercial Real Estate",
            desc: "Class-A office and industrial logistics centers in primary metro markets.",
            icon: Building2,
            color: "text-blue-400"
          },
          {
            title: "Industrial Logistics",
            desc: "Supply chain infrastructure and specialized manufacturing hubs.",
            icon: PieChart,
            color: "text-purple-400"
          },
          {
            title: "Private Debt",
            desc: "Mezzanine financing and bridge loans for transformative scaling.",
            icon: TrendingUp,
            color: "text-emerald-400"
          }
        ].map((sector, idx) => (
          <div key={idx} className="bento-card group cursor-pointer hover:bg-surface-hover transition-colors">
            <div className={cn("w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6", sector.color)}>
              <sector.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{sector.title}</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
              {sector.desc}
            </p>
            <div className="mt-auto flex items-center gap-2 text-primary font-bold text-xs">
              EXPLORE SECTOR <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </section>

      {/* CTA Bento */}
      <section className="bento-card bg-indigo-600 border-0 flex flex-col md:flex-row gap-12 items-center p-12">
        <div className="flex-1">
          <h2 className="text-headline-lg text-white mb-6">Secure Your Private Institutional Allocation</h2>
          <p className="text-white/80 text-lg mb-8">
            Join 500+ limited partnerships in our elite institutional network.
          </p>
          <Link to="/contact" className="bg-white text-primary px-8 py-4 rounded-xl font-bold inline-block hover:scale-105 transition-transform">
            Request Access Portal
          </Link>
        </div>
        <div className="flex -space-x-4 items-center">
          {[1,2,3,4,5].map(i => (
            <div key={i} className="w-12 h-12 rounded-full border-4 border-indigo-600 bg-slate-800 overflow-hidden">
              <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="Avatar" />
            </div>
          ))}
          <div className="w-12 h-12 rounded-full border-4 border-indigo-600 bg-white/10 backdrop-blur-sm flex items-center justify-center text-[10px] font-bold text-white">
            +12
          </div>
        </div>
      </section>
    </div>
  );
}
