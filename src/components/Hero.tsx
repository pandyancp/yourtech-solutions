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
  Check,
  Play,
  Flame,
  Globe
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { TechIcon } from './TechLogos';

interface HeroProps {
  onConsultClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onConsultClick }) => {
  const [activeTab, setActiveTab] = useState<'pipeline' | 'cluster' | 'security'>('pipeline');
  const [terminalStep, setTerminalStep] = useState(0);

  const pipelineSteps = [
    { text: "git push origin main (v3.2 Production Release)", status: "done", time: "0.1s" },
    { text: "test: React 18 + Node API + Python AI Service (214 tests)", status: "done", time: "1.1s" },
    { text: "docker build -t yourtech/enterprise-app:latest (Multi-Stage)", status: "done", time: "1.8s" },
    { text: "terraform apply (AWS EKS + RDS Postgres + CloudFront)", status: "done", time: "2.9s" },
    { text: "fortinet firewall scan: Zero CVEs, Zero Leaks", status: "done", time: "0.3s" },
    { text: "DEPLOYMENT LIVE (Zero-Downtime Rollout Healthy)", status: "live", time: "100% ONLINE" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTerminalStep((prev) => (prev < pipelineSteps.length - 1 ? prev + 1 : 0));
    }, 2200);
    return () => clearInterval(interval);
  }, [pipelineSteps.length]);

  return (
    <section id="home" className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden mesh-grid">
      
      {/* Background Lighting Flares */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-brand-500/25 via-cyan-500/15 to-transparent rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-5 w-[380px] h-[380px] bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-5 w-[450px] h-[450px] bg-cyan-600/15 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy & Actions (Intellio Style) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-island shimmer-badge border border-brand-500/40 shadow-lg shadow-brand-500/10">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-semibold tracking-wider uppercase text-cyan-300">
                ✨ Next-Gen Cloud, AI & DevOps Engineering
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.06]">
                <span className="gradient-heading block">
                  Intelligent Cloud &
                </span>
                <span className="gradient-brand block glow-text">
                  DevOps Automation
                </span>
                <span className="gradient-heading block text-3xl sm:text-4xl md:text-5xl font-extrabold mt-1 text-slate-300">
                  Built for Modern Scale.
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-300 font-normal max-w-2xl pt-2 leading-relaxed">
                {siteConfig.company.heroSubheadline}
              </p>
            </div>

            {/* Key Capability Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5 pt-1 w-full max-w-xl">
              <div className="flex items-center gap-2.5 p-3 rounded-xl glass-card text-xs text-slate-200">
                <Code2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="font-semibold">Full-Stack Development (React/Node/Py/Java)</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl glass-card text-xs text-slate-200">
                <GitBranch className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span className="font-semibold">Automated CI/CD & Terraform IaC</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl glass-card text-xs text-slate-200">
                <Database className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="font-semibold">SQL High Availability & Backup</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl glass-card text-xs text-slate-200">
                <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="font-semibold">Fortinet Firewall & SSL-VPN Security</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3.5 pt-3 w-full sm:w-auto">
              <a
                href="#contact"
                className="btn-primary text-sm py-3 px-7 w-full sm:w-auto font-bold tracking-wide"
              >
                <span>Get Free Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="btn-secondary text-sm py-3 px-6 w-full sm:w-auto font-semibold"
              >
                <span>Explore Solutions</span>
              </a>

              <a
                href={siteConfig.company.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm py-3 px-5 w-full sm:w-auto font-semibold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp</span>
              </a>
            </div>

            {/* Trust Signal / Guarantee */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-2">
              <span className="flex items-center gap-1 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 99.99% Uptime SLA
              </span>
              <span className="flex items-center gap-1 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Zero-Downtime Rollouts
              </span>
              <span className="flex items-center gap-1 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 24/7 SRE Support
              </span>
            </div>

          </div>

          {/* Right Column: High-Tech Interactive Intelligence Dashboard Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Glow Halos */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-600 via-cyan-500 to-indigo-600 rounded-3xl blur-xl opacity-35 animate-pulse-slow"></div>

              {/* Console Island Frame */}
              <div className="relative rounded-3xl glass-island overflow-hidden border border-white/10 shadow-2xl">
                
                {/* Console Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-950/90 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span className="ml-2 text-xs font-mono text-slate-300 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      ops-core@yourtech-solutions
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    SYSTEMS 100% ONLINE
                  </span>
                </div>

                {/* Dashboard Switch Tabs */}
                <div className="grid grid-cols-3 bg-slate-950/60 border-b border-white/10 text-xs font-mono">
                  <button
                    onClick={() => setActiveTab('pipeline')}
                    className={`py-2.5 px-3 text-center border-b-2 transition-all ${
                      activeTab === 'pipeline'
                        ? 'border-cyan-400 text-cyan-300 bg-brand-950/50 font-bold'
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    CI/CD Engine
                  </button>
                  <button
                    onClick={() => setActiveTab('cluster')}
                    className={`py-2.5 px-3 text-center border-b-2 transition-all ${
                      activeTab === 'cluster'
                        ? 'border-cyan-400 text-cyan-300 bg-brand-950/50 font-bold'
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Cloud & DB
                  </button>
                  <button
                    onClick={() => setActiveTab('security')}
                    className={`py-2.5 px-3 text-center border-b-2 transition-all ${
                      activeTab === 'security'
                        ? 'border-cyan-400 text-cyan-300 bg-brand-950/50 font-bold'
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Fortinet Guard
                  </button>
                </div>

                {/* Interactive Console Screen */}
                <div className="p-4 font-mono text-xs text-slate-300 min-h-[310px] flex flex-col justify-between bg-black/40">
                  {activeTab === 'pipeline' && (
                    <div className="space-y-2">
                      <div className="text-[11px] text-slate-400 flex items-center justify-between pb-1.5 border-b border-slate-800">
                        <span>PIPELINE: PROD-AUTO-WORKFLOW</span>
                        <span className="text-emerald-400 font-bold flex items-center gap-1">
                          <Activity className="w-3 h-3 text-emerald-400 animate-pulse" /> LIVE ORCHESTRATION
                        </span>
                      </div>
                      
                      <div className="space-y-1.5">
                        {pipelineSteps.map((step, idx) => (
                          <div
                            key={idx}
                            className={`flex items-center justify-between p-2 rounded-xl transition-all duration-300 ${
                              idx === terminalStep
                                ? 'bg-brand-950/80 border border-cyan-400/60 text-cyan-300 translate-x-1 shadow-md'
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
                        <span>MULTI-CLOUD TOPOLOGY</span>
                        <span className="text-cyan-400">AWS / AZURE / OCI</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2.5 text-[11px]">
                        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                          <p className="text-slate-400 text-[10px] flex items-center gap-1">
                            <Cloud className="w-3 h-3 text-cyan-400" />
                            Compute & Kubernetes
                          </p>
                          <p className="text-sm font-bold text-emerald-400 mt-1">EKS / AKS Cluster</p>
                          <p className="text-[9px] text-slate-500">Node Autoscaling: Active</p>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                          <p className="text-slate-400 text-[10px] flex items-center gap-1">
                            <Database className="w-3 h-3 text-emerald-400" />
                            SQL Server & MySQL
                          </p>
                          <p className="text-sm font-bold text-cyan-400 mt-1">0.4ms Latency</p>
                          <p className="text-[9px] text-slate-500">Auto-Backup: Encrypted</p>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                          <p className="text-slate-400 text-[10px] flex items-center gap-1">
                            <Box className="w-3 h-3 text-brand-400" />
                            Docker Containers
                          </p>
                          <p className="text-sm font-bold text-indigo-400 mt-1">Node + Python + Java</p>
                          <p className="text-[9px] text-slate-500">100% Health Status</p>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                          <p className="text-slate-400 text-[10px] flex items-center gap-1">
                            <Layers className="w-3 h-3 text-amber-400" />
                            Terraform State
                          </p>
                          <p className="text-sm font-bold text-amber-400 mt-1">Zero Drift</p>
                          <p className="text-[9px] text-slate-500">Automated IaC Apply</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'security' && (
                    <div className="space-y-3">
                      <div className="text-[11px] text-slate-400 flex items-center justify-between pb-1.5 border-b border-slate-800">
                        <span>FORTINET FORTIGATE DEFENSE</span>
                        <span className="text-emerald-400 font-bold">100% PROTECTED</span>
                      </div>
                      <div className="space-y-2 text-[11px]">
                        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-emerald-800/40 flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-white font-medium">
                            <Lock className="w-3.5 h-3.5 text-emerald-400" />
                            SSL-VPN 256-Bit Encrypted Tunnel
                          </span>
                          <span className="text-emerald-400 font-bold">SECURE</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-slate-300">
                          <span>Intrusion Prevention (IPS/IDS)</span>
                          <span className="text-cyan-400 font-bold">0 Active Threats</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-slate-300">
                          <span>OS Security & Port Hardening</span>
                          <span className="text-emerald-400 font-bold">Passed Audit</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Bottom Telemetry Bar */}
                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      All Deployments Healthy
                    </span>
                    <a
                      href={`tel:${siteConfig.company.phone}`}
                      className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1"
                    >
                      <span>Direct: {siteConfig.company.phoneFormatted}</span>
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
