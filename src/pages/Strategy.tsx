import React from 'react';
import { motion } from 'motion/react';
import { 
  Target, 
  BarChart3, 
  Layers, 
  Zap, 
  Search, 
  ShieldCheck,
  Scale,
  Gem,
  CheckCircle2,
  Globe2
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function Strategy() {
  const pillars = [
    {
      title: "Data-Driven Arbitrage",
      desc: "Identifying value gaps in distressed commercial real estate debt using proprietary algorithms.",
      icon: Search,
      color: "text-blue-400"
    },
    {
      title: "Asset Transformation",
      desc: "Managing asset rehabilitation through strategic capital expenditure and management realignment.",
      icon: Zap,
      color: "text-emerald-400"
    },
    {
      title: "Mezzanine Advantage",
      desc: "High-yield bridge lending solutions with strong seniority positions in capitalization tables.",
      icon: Layers,
      color: "text-amber-400"
    }
  ];

  return (
    <div className="flex flex-col gap-12 py-12 px-6 max-w-7xl mx-auto">
      {/* Header Bento */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bento-card col-span-1 md:col-span-2 flex flex-col justify-center min-h-[300px]">
          <div className="label-caps !text-primary">Investment Strategy</div>
          <h1 className="text-headline-xl text-white mb-6">Forward-Looking Financial Architecture</h1>
          <p className="text-body-lg">
            Our framework is built on institutional stability and the aggressive pursuit of market inefficiencies.
          </p>
        </div>
        <div className="bento-card col-span-1 relative overflow-hidden flex items-center justify-center">
          <Target className="w-32 h-32 text-primary/10 absolute -right-8 -bottom-8" />
          <div className="relative z-10 text-center">
            <div className="text-5xl font-bold text-white mb-2">2%</div>
            <div className="label-caps !mb-0">Deal Acceptance Rate</div>
          </div>
        </div>
      </section>

      {/* The Pillars - Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pillars.map((pillar, idx) => (
          <div key={idx} className="bento-card group hover:bg-surface-hover">
            <div className={cn("w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 transition-transform group-hover:scale-110", pillar.color)}>
              <pillar.icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{pillar.title}</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {pillar.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Methodology - Interactive Bento */}
      <section className="bento-card bg-primary/20 border-primary/20 relative overflow-hidden p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-outline">
          {[
            { step: "01", title: "Sourcing", desc: "Balance sheet direct." },
            { step: "02", title: "Audit", desc: "Multi-year stress tests." },
            { step: "03", title: "Infusion", desc: "Precision funding." },
            { step: "04", title: "Exit", desc: "Optimized disposition." }
          ].map((m, i) => (
            <div key={i} className="p-8 hover:bg-white/5 transition-colors cursor-default">
              <div className="text-primary font-black text-xs mb-4">{m.step}</div>
              <h4 className="text-white font-bold text-lg mb-2">{m.title}</h4>
              <p className="text-xs text-on-surface-variant italic">"{m.desc}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vetting Bento */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bento-card flex flex-col justify-center">
          <h2 className="text-headline-lg text-white mb-8">Selection Criteria</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              "LTV Optimization",
              "Market Resilience",
              "Efficiency Audit",
              "Environmental",
              "Liquidity Thresholds",
              "Tenant Quality"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-on-surface-variant">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bento-card bg-slate-800/50">
          <Scale className="text-primary w-12 h-12 mb-6" />
          <h3 className="text-xl font-bold text-white mb-4">Risk Tolerance</h3>
          <p className="text-sm text-on-surface-variant">
            Low-to-moderate leverage across all core positions, prioritizing capital preservation above all else.
          </p>
          <div className="mt-8 p-4 bg-background/50 rounded-xl border border-outline">
            <div className="text-[10px] label-caps !mb-2">Leverage Cap</div>
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[65%] bg-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner Bento */}
      <section className="bento-card py-10 flex flex-wrap justify-between items-center opacity-70 hover:opacity-100 transition-opacity gap-8">
         <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-on-surface-variant"><Gem className="w-4 h-4" />BLOOMBERG CERTIFIED</div>
         <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-on-surface-variant"><ShieldCheck className="w-4 h-4" />SEC COMPLIANCE</div>
         <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-on-surface-variant"><BarChart3 className="w-4 h-4" />BIG FOUR AUDITED</div>
         <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-on-surface-variant"><Globe2 className="w-4 h-4" />MSCI AA RATING</div>
      </section>
    </div>
  );
}
