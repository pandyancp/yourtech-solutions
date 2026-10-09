import React from 'react';
import { ShieldCheck, Server, Zap, CheckCircle2, Award, Clock, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-navy-950 relative border-t border-slate-800/80">
      
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-brand-950 text-cyan-400 border border-brand-800">
              <Award className="w-3.5 h-3.5" />
              <span>About {siteConfig.company.name}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Architecting Resilient Cloud & DevOps Foundations
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              At <strong className="text-white font-semibold">{siteConfig.company.name}</strong>, we bridge the gap between application software engineering and rock-solid production infrastructure. We eliminate manual deployments, solve server instability, and secure corporate networks against modern threats.
            </p>

            <p className="text-slate-300 text-base leading-relaxed">
              Whether you are migrating enterprise workloads to AWS or Azure, automating Jenkins & Docker pipelines, configuring high-availability SQL clusters, or deploying Fortinet firewalls for remote teams, our certified engineers deliver dependable, audited results with rapid turnaround.
            </p>

            {/* Core Values / Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2.5 text-cyan-400 font-bold text-sm mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  Security By Design
                </div>
                <p className="text-xs text-slate-400">
                  Every server, firewall, and container is hardened following industry CIS benchmarks and strict access policies.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-sm mb-1">
                  <Clock className="w-4 h-4" />
                  24/7 SLA Commitment
                </div>
                <p className="text-xs text-slate-400">
                  Direct telephone and WhatsApp lines for zero-delay emergency escalation during critical production issues.
                </p>
              </div>
            </div>

            {/* Contact quick CTA */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href={`tel:${siteConfig.company.phone}`}
                className="btn-primary text-xs py-3 px-5"
              >
                <span>Call An Engineer: {siteConfig.company.phoneFormatted}</span>
              </a>
              <a
                href="#contact"
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
              >
                <span>Get in touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Visual Infographic & Stats Matrix */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-brand-500/20 shadow-2xl shadow-cyan-950/40">
              
              {/* Highlight Stats 2x2 Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {siteConfig.stats.map((stat, idx) => (
                  <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <p className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-brand-400 bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-white mt-1">
                      {stat.label}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Verified Expertise Checkmarks */}
              <div className="p-4 rounded-xl bg-brand-950/50 border border-brand-800/60 space-y-2.5">
                <p className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                  Our Guarantee to Your Organization:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>No vendor lock-in</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>100% Documented IaC</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Encrypted Backup Tests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Direct Senior DevOps Access</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
