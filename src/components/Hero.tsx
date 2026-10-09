import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Terminal, 
  CheckCircle2, 
  Server, 
  Activity, 
  Lock, 
  Code2, 
  GitBranch, 
  Database, 
  Cloud,
  Box,
  Layers,
  Sparkles,
  Zap,
  Check
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { TechIcon } from './TechLogos';

interface HeroProps {
  onConsultClick?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const [activeTab, setActiveTab] = useState<'pipeline' | 'cluster' | 'security'>('pipeline');
  const [terminalStep, setTerminalStep] = useState(0);

  const pipelineSteps = [
    { text: "git push origin main (Full-Stack v2.0)", status: "done", time: "0.2s" },
    { text: "test: React + Node API + Py microservice (184 passing)", status: "done", time: "1.2s" },
    { text: "docker build -t yourtech/fullstack-app:latest", status: "done", time: "2.1s" },
    { text: "terraform apply (AWS EC2 + RDS Postgres + VPC)", status: "done", time: "3.4s" },
    { text: "fortinet firewall security audit: 0 VULNERABILITIES", status: "done", time: "0.4s" },
    { text: "ZERO-DOWNTIME ROLLOUT SUCCESSFUL (100% HEALTHY)", status: "live", time: "ONLINE" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTerminalStep((prev) => (prev < pipelineSteps.length - 1 ? prev + 1 : 0));
    }, 2400);
    return () => clearInterval(interval);
  }, [pipelineSteps.length]);

  return (
    <section id="home" className="relative pt-36 pb-20 md:pt-44 md:pb-32 overflow-hidden mesh-grid">
      
      {/* Background Lighting Cones */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[420px] bg-gradient-to-b from-brand-500/20 via-cyan-500/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[420px] h-[420px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Shimmer Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-island shimmer-badge border border-brand-500/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-mono font-semibold tracking-wide text-cyan-300">
                {siteConfig.company.name} — {siteConfig.company.tagline}
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08]">
                <span className="gradient-heading block">
                  Build. Develop.
                </span>
                <span className="gradient-brand block glow-text">
                  Deploy. Secure. Scale.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-normal max-w-2xl pt-2 leading-relaxed">
                {siteConfig.company.heroSubheadline}
              </p>
            </div>

            {/* 4 Core Pillars Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5 pt-1 w-full max-w-xl">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                <Code2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="font-medium">Frontend & Backend Dev</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                <GitBranch className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span className="font-medium">DevOps & Cloud IaC</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                <Database className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="font-medium">SQL & NoSQL Databases</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="font-medium">Infrastructure & Security</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap gap-3.5 pt-3 w-full sm:w-auto">
              <a
                href="#contact"
                className="btn-primary text-sm py-3 px-6 w-full sm:w-auto font-semibold"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="btn-secondary text-sm py-3 px-6 w-full sm:w-auto font-semibold"
              >
                <span>Explore Our Services</span>
              </a>

              <a
                href={siteConfig.company.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm py-3 px-5 w-full sm:w-auto font-semibold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Tech Logo Strip */}
            <div className="pt-6 border-t border-slate-800/80 w-full">
              <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                Multi-Stack Runtimes, Clouds & Frameworks:
              </p>
              <div className="flex flex-wrap items-center gap-2 text-slate-300">
                {[
                  { name: 'React', icon: 'react' },
                  { name: 'Node.js', icon: 'nodejs' },
                  { name: 'Python', icon: 'python' },
                  { name: 'Java', icon: 'java' },
                  { name: 'Go', icon: 'go' },
                  { name: 'PostgreSQL', icon: 'postgresql' },
                  { name: 'Docker', icon: 'docker' },
                  { name: 'Kubernetes', icon: 'kubernetes' },
                  { name: 'AWS', icon: 'aws' },
                  { name: 'Terraform', icon: 'terraform' },
                  { name: 'Fortinet', icon: 'fortinet' }
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-300 hover:border-cyan-400/40 transition-colors"
                  >
                    <TechIcon name={item.icon} className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Connected Cloud & Server Infrastructure Visual */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Halos & Pulse */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-600 via-cyan-500 to-indigo-600 rounded-3xl blur-xl opacity-30 animate-pulse-slow"></div>

              {/* Connected Infrastructure Frame */}
              <div className="relative rounded-2xl glass-island overflow-hidden border border-white/10 shadow-2xl">
                
                {/* Console Chrome Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-950/90 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      ops-console@yourtech
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    CLUSTER: HEALTHY
                  </span>
                </div>

                {/* Dashboard Tabs */}
                <div className="grid grid-cols-3 bg-slate-950/60 border-b border-white/10 text-xs font-mono">
                  <button
                    onClick={() => setActiveTab('pipeline')}
                    className={`py-2 px-3 text-center border-b-2 transition-all ${
                      activeTab === 'pipeline'
                        ? 'border-cyan-400 text-cyan-300 bg-brand-950/40 font-bold'
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    CI/CD & Apps
                  </button>
                  <button
                    onClick={() => setActiveTab('cluster')}
                    className={`py-2 px-3 text-center border-b-2 transition-all ${
                      activeTab === 'cluster'
                        ? 'border-cyan-400 text-cyan-300 bg-brand-950/40 font-bold'
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Cloud & DB
                  </button>
                  <button
                    onClick={() => setActiveTab('security')}
                    className={`py-2 px-3 text-center border-b-2 transition-all ${
                      activeTab === 'security'
                        ? 'border-cyan-400 text-cyan-300 bg-brand-950/40 font-bold'
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Firewall Guard
                  </button>
                </div>

                {/* Interactive Console Screen */}
                <div className="p-4 font-mono text-xs text-slate-300 min-h-[300px] flex flex-col justify-between bg-black/40">
                  {activeTab === 'pipeline' && (
                    <div className="space-y-2">
                      <div className="text-[11px] text-slate-400 flex items-center justify-between pb-1.5 border-b border-slate-800">
                        <span>PIPELINE: PROD-FULLSTACK-302</span>
                        <span className="text-emerald-400 font-bold">100% AUTOMATED</span>
                      </div>
                      
                      <div className="space-y-1.5">
                        {pipelineSteps.map((step, idx) => (
                          <div
                            key={idx}
                            className={`flex items-center justify-between p-2 rounded-lg transition-all duration-300 ${
                              idx === terminalStep
                                ? 'bg-brand-950/80 border border-cyan-400/50 text-cyan-300 translate-x-1 shadow-md'
                                : idx < terminalStep
                                ? 'text-slate-400 bg-slate-900/30'
                                : 'text-slate-600'
                            }`}
                          >
                            <div className="flex items-center gap-2 overflow-hidden">
                              {idx <= terminalStep ? (
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                              ) : (
                                <span className="w-3.5 h-3.5 rounded-full border border-slate-700 flex-shrink-0"></span>
                              )}
                              <span className="truncate">$ {step.text}</span>
                            </div>
                            <span className="text-[10px] text-slate-500 ml-2 font-mono flex-shrink-0">{step.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'cluster' && (
                    <div className="space-y-3">
                      <div className="text-[11px] text-slate-400 flex items-center justify-between pb-1.5 border-b border-slate-800">
                        <span>CONNECTED INFRASTRUCTURE TOPOLOGY</span>
                        <span className="text-cyan-400">AWS / AZURE / OCI</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2.5 text-[11px]">
                        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                          <p className="text-slate-400 text-[10px] flex items-center gap-1">
                            <Cloud className="w-3 h-3 text-cyan-400" />
                            Compute Workloads
                          </p>
                          <p className="text-sm font-bold text-emerald-400 mt-1">EC2 & K8s Autoscaling</p>
                          <p className="text-[9px] text-slate-500">Node CPU: 12.8% Avg</p>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                          <p className="text-slate-400 text-[10px] flex items-center gap-1">
                            <Database className="w-3 h-3 text-emerald-400" />
                            PostgreSQL & MSSQL
                          </p>
                          <p className="text-sm font-bold text-cyan-400 mt-1">0.8ms Query Latency</p>
                          <p className="text-[9px] text-slate-500">Auto-Backup: Encrypted</p>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                          <p className="text-slate-400 text-[10px] flex items-center gap-1">
                            <Box className="w-3 h-3 text-brand-400" />
                            Docker Microservices
                          </p>
                          <p className="text-sm font-bold text-indigo-400 mt-1">Node + Python + Java</p>
                          <p className="text-[9px] text-slate-500">18/18 Pods Healthy</p>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                          <p className="text-slate-400 text-[10px] flex items-center gap-1">
                            <Layers className="w-3 h-3 text-amber-400" />
                            Terraform IaC State
                          </p>
                          <p className="text-sm font-bold text-amber-400 mt-1">Synced & Locked</p>
                          <p className="text-[9px] text-slate-500">0 Configuration Drift</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'security' && (
                    <div className="space-y-3">
                      <div className="text-[11px] text-slate-400 flex items-center justify-between pb-1.5 border-b border-slate-800">
                        <span>FORTINET FORTIGATE DEFENSE</span>
                        <span className="text-emerald-400">ACTIVE</span>
                      </div>
                      <div className="space-y-2 text-[11px]">
                        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-emerald-800/40 flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-white font-medium">
                            <Lock className="w-3.5 h-3.5 text-emerald-400" />
                            SSL-VPN 256-Bit Encrypted
                          </span>
                          <span className="text-emerald-400 font-bold">SECURE</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-slate-300">
                          <span>Intrusion Prevention (IPS)</span>
                          <span className="text-cyan-400 font-bold">0 Active Threats</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-slate-300">
                          <span>OS Port Hardening</span>
                          <span className="text-emerald-400">Key-Auth / Non-Root</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Console Bottom Action */}
                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      All Systems Operational
                    </span>
                    <a
                      href={`tel:${siteConfig.company.phone}`}
                      className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1"
                    >
                      <span>Hotline: {siteConfig.company.phoneFormatted}</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
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
