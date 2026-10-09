import React from 'react';
import { 
  Sparkles, 
  GitBranch, 
  ShieldCheck, 
  Cloud, 
  Database, 
  Cpu, 
  Layers, 
  Activity, 
  CheckCircle2, 
  ArrowRight,
  Terminal,
  Lock,
  Box
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const FeaturesBento: React.FC = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-slate-950/40">
      
      {/* Glow Backdrops */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-island border border-brand-500/30 text-xs font-mono text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>ENTERPRISE-GRADE CAPABILITIES</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            <span className="gradient-heading">Built for High-Growth</span>{' '}
            <span className="gradient-brand">Tech & Cloud Workloads</span>
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From modern microservices architecture and declarative Terraform infrastructure to hardened enterprise firewalls, our unified engineering stack delivers unmatched velocity and resilience.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Main Large Box (CI/CD Automation & Autonomous Delivery) */}
          <div className="md:col-span-8 p-8 rounded-3xl glass-card relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-brand-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 text-xs font-mono">
                <GitBranch className="w-3.5 h-3.5" />
                <span>CI/CD & DEVOPS LIFECYCLE</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                Automated Blue/Green & Canary Pipelines with Zero Downtime
              </h3>
              
              <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                Seamlessly trigger Jenkins, GitHub Actions, and Azure Pipelines upon git push. We orchestrate automated linting, unit test suites, Docker image builds, vulnerability scanning, and seamless live cluster deployment.
              </p>
            </div>

            {/* Visual Code / Pipeline Snippet */}
            <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 font-mono text-xs text-slate-300 space-y-2">
              <div className="flex items-center justify-between text-slate-500 pb-2 border-b border-slate-800 text-[11px]">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <Terminal className="w-3 h-3" /> pipeline.yaml (Automated Workflow)
                </span>
                <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-3 h-3" /> PASSING (0.4s)
                </span>
              </div>
              <p className="text-slate-400">
                <span className="text-purple-400">stages:</span> [lint, test, containerize, terraform_apply, rollout]
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-[10px]">
                <div className="p-2 rounded bg-slate-900 border border-slate-800 text-center">
                  <span className="text-slate-400 block">Lint & Test</span>
                  <span className="text-emerald-400 font-bold">100% Passed</span>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800 text-center">
                  <span className="text-slate-400 block">Docker Build</span>
                  <span className="text-cyan-400 font-bold">Optimized Multi-Stage</span>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800 text-center">
                  <span className="text-slate-400 block">Terraform IaC</span>
                  <span className="text-brand-400 font-bold">State Synced</span>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800 text-center">
                  <span className="text-slate-400 block">Rollout</span>
                  <span className="text-emerald-400 font-bold">0ms Downtime</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Security & Firewall Hardening */}
          <div className="md:col-span-4 p-8 rounded-3xl glass-card flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                Zero-Trust Firewall & Network Security
              </h3>
              
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Fortinet FortiGate, SSL-VPN setup, server port hardening, IAM Least-Privilege policies, and proactive automated threat monitoring.
              </p>
            </div>

            <div className="mt-6 space-y-2 text-xs font-mono">
              <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-amber-400" /> FortiGate IPS / IDS
                </span>
                <span className="text-emerald-400 font-semibold">Active</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between text-slate-300">
                <span>SSL-VPN 2FA Encryption</span>
                <span className="text-cyan-400 font-semibold">Hardened</span>
              </div>
            </div>
          </div>

          {/* Bento Card 3: Multi-Cloud Infrastructure (AWS, Azure, OCI) */}
          <div className="md:col-span-4 p-8 rounded-3xl glass-card flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Cloud className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                Multi-Cloud Orchestration & IaC
              </h3>
              
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Declarative infrastructure on AWS, Microsoft Azure, and Oracle Cloud Infrastructure using Terraform, Ansible, and Docker Swarm/K8s.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-1.5 text-[11px] font-mono">
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-cyan-300">AWS VPC & EC2</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-cyan-300">Azure DevOps</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-cyan-300">OCI Compute</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-cyan-300">Terraform Cloud</span>
            </div>
          </div>

          {/* Bento Card 4: Database HA & Disaster Recovery */}
          <div className="md:col-span-4 p-8 rounded-3xl glass-card flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Database className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                SQL & Database High Availability
              </h3>
              
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                MS SQL Server, MySQL, and PostgreSQL cluster management. Automated encrypted backup, replication, query tuning, and disaster recovery.
              </p>
            </div>

            <div className="mt-6 p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs font-mono space-y-1">
              <div className="flex justify-between text-slate-300">
                <span>RPO / RTO Target:</span>
                <span className="text-emerald-400 font-bold">&lt; 1 min / &lt; 5 min</span>
              </div>
              <div className="flex justify-between text-slate-400 text-[11px]">
                <span>Automated Backup:</span>
                <span className="text-cyan-400">AWS S3 / Azure Blob</span>
              </div>
            </div>
          </div>

          {/* Bento Card 5: Full-Stack Application Support */}
          <div className="md:col-span-4 p-8 rounded-3xl glass-card flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                Polyglot Full-Stack Runtimes
              </h3>
              
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Comprehensive deployment and tuning for React, Node.js, Python, Java (Tomcat/JAR/WAR), Go, and static Nginx micro-frontends.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs font-mono text-slate-400 pt-2 border-t border-slate-800">
              <span>Production Runtimes</span>
              <span className="text-indigo-400 font-semibold">100% Containerized</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
