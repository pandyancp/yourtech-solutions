import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { TechIcon } from './TechLogos';
import { Layers, CheckCircle2, Sparkles } from 'lucide-react';

export const Technologies: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Databases' },
    { id: 'devops', label: 'DevOps' },
    { id: 'container', label: 'Containers' },
    { id: 'cloud', label: 'Cloud' },
    { id: 'security', label: 'Systems & Security' },
  ];

  const filteredTech = selectedCategory === 'all'
    ? siteConfig.technologies
    : siteConfig.technologies.filter(t => t.category === selectedCategory);

  return (
    <section id="technologies" className="py-28 bg-[#030712] relative border-t border-white/5">
      
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-brand-950/80 text-cyan-300 border border-brand-800 mb-3.5">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Comprehensive Technology Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Supported Languages, Frameworks & Cloud Platforms
          </h2>
          <p className="mt-3 text-slate-300 text-base md:text-lg">
            We deliver production-ready solutions across modern frontend, backend runtimes, relational & NoSQL databases, container orchestrators, and cloud providers.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-brand-600 to-cyan-500 text-white shadow-lg shadow-brand-500/25 scale-105'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-850 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              className="group relative p-6 rounded-3xl glass-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-13 h-13 p-3 rounded-2xl bg-slate-950 border border-brand-500/30 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-brand-950 transition-all shadow-inner">
                    <TechIcon name={tech.icon || tech.name} className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                  </div>
                  {tech.featured && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-950 text-emerald-400 border border-emerald-800">
                      Production Core
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {tech.name}
                </h3>
                <p className="mt-1.5 text-xs text-slate-300 leading-relaxed font-normal">
                  {tech.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="capitalize text-slate-400">{tech.category}</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Supported
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
