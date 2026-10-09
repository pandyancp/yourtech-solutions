import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { FolderGit2, Info, Sparkles, ArrowRight } from 'lucide-react';
import { TechIcon } from './TechLogos';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-28 bg-[#04091a] relative border-t border-white/5">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-brand-950/80 text-cyan-300 border border-brand-800 mb-3.5">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Demonstration Architectures & Blueprints</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Reference Implementations & Deployment Models
          </h2>
          <p className="mt-3 text-slate-300 text-base md:text-lg">
            Explore sample full-stack web applications, automated DevOps delivery pipelines, database high-availability setups, and cloud architectures.
          </p>
        </div>

        {/* Demo Notice Banner */}
        <div className="mb-12 p-4 rounded-2xl bg-brand-950/60 border border-brand-800/80 flex items-center gap-3 text-xs text-slate-300 max-w-4xl mx-auto">
          <Info className="w-5 h-5 text-cyan-400 flex-shrink-0" />
          <span>
            <strong>Architectural Demonstrations:</strong> The portfolio cards below represent sample architectures and technical solutions we can design, deploy, and support for your company.
          </span>
        </div>

        {/* Projects 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl glass-card p-7 sm:p-8 flex flex-col justify-between"
            >
              <div>
                {/* Header Tag and Demo Indicator */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-900 border border-slate-700/80 text-cyan-400">
                    {project.category}
                  </span>
                  {project.isDemo && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-950 text-amber-300 border border-amber-800">
                      Sample Architecture
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-4">
                  {project.title}
                </h3>

                {/* Technical Overview Block */}
                <div className="space-y-3 mb-6 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800">
                    <p className="font-mono text-[11px] text-cyan-400 font-bold uppercase tracking-wider mb-1">
                      Architecture Scope:
                    </p>
                    <p className="text-slate-300">
                      {project.challenge}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-emerald-950/60">
                    <p className="font-mono text-[11px] text-emerald-400 font-bold uppercase tracking-wider mb-1">
                      Technical Solution:
                    </p>
                    <p className="text-slate-300">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Metrics Matrix */}
                <div className="grid grid-cols-3 gap-2.5 mb-6">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                      <p className="text-sm sm:text-base font-extrabold text-cyan-300 font-mono">
                        {metric.value}
                      </p>
                      <p className="text-[10px] text-slate-400 mt-0.5 font-medium">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Tag Footer */}
              <div className="pt-5 border-t border-slate-800/80">
                <p className="text-[11px] font-mono text-slate-400 mb-2.5">Associated Tech Stack:</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-950 border border-slate-800 text-slate-300"
                    >
                      <TechIcon name={tag} className="w-3 h-3 text-cyan-400" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
