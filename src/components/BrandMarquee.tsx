import React from 'react';
import { 
  Cloud, 
  Terminal, 
  Database, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  GitBranch, 
  Box, 
  Server, 
  Flame, 
  Globe, 
  Activity 
} from 'lucide-react';
import { TechIcon } from './TechLogos';

export const BrandMarquee: React.FC = () => {
  const partners = [
    { name: 'Amazon Web Services', icon: 'aws', category: 'Cloud Infrastructure' },
    { name: 'Microsoft Azure', icon: 'azure', category: 'Enterprise Cloud' },
    { name: 'Google Cloud Platform', icon: 'gcp', category: 'Cloud & AI' },
    { name: 'Docker Containers', icon: 'docker', category: 'Containerization' },
    { name: 'Kubernetes Cluster', icon: 'kubernetes', category: 'Orchestration' },
    { name: 'Terraform by HashiCorp', icon: 'terraform', category: 'Infrastructure as Code' },
    { name: 'Ansible Automation', icon: 'ansible', category: 'Config Management' },
    { name: 'Jenkins CI/CD', icon: 'jenkins', category: 'Pipeline Automation' },
    { name: 'PostgreSQL Enterprise', icon: 'postgresql', category: 'Relational DB' },
    { name: 'MySQL Server', icon: 'mysql', category: 'Database Engine' },
    { name: 'Oracle Cloud OCI', icon: 'oracle', category: 'Enterprise OCI' },
    { name: 'Fortinet FortiGate', icon: 'fortinet', category: 'Network Security' },
    { name: 'React & Next.js', icon: 'react', category: 'Modern Frontend' },
    { name: 'Node.js & Express', icon: 'nodejs', category: 'Backend Engine' },
    { name: 'Python & FastAPI', icon: 'python', category: 'AI & Data Scripts' },
    { name: 'Java & Spring Boot', icon: 'java', category: 'Enterprise Apps' },
    { name: 'Nginx Web Server', icon: 'nginx', category: 'Reverse Proxy' },
    { name: 'Prometheus & Grafana', icon: 'grafana', category: 'SRE Monitoring' }
  ];

  return (
    <div className="relative py-10 bg-slate-950/60 border-y border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-5 text-center">
        <p className="text-xs font-mono uppercase tracking-widest text-slate-400">
          POWERING NEXT-GENERATION ENTERPRISE INFRASTRUCTURE ACROSS THE GLOBE
        </p>
      </div>

      {/* Infinite Scrolling Track */}
      <div className="flex select-none overflow-hidden relative">
        {/* Gradient fade masks on left and right */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

        <div className="flex shrink-0 animate-marquee items-center gap-6 pr-6">
          {partners.map((partner, index) => (
            <div
              key={`marquee-1-${index}`}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl glass-island border border-slate-800/80 hover:border-cyan-400/50 hover:bg-slate-900/80 transition-all duration-300 group cursor-default"
            >
              <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 group-hover:scale-110 transition-transform">
                <TechIcon name={partner.icon} className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="block text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                  {partner.name}
                </span>
                <span className="block text-[10px] font-mono text-slate-500">
                  {partner.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex shrink-0 animate-marquee items-center gap-6 pr-6" aria-hidden="true">
          {partners.map((partner, index) => (
            <div
              key={`marquee-2-${index}`}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl glass-island border border-slate-800/80 hover:border-cyan-400/50 hover:bg-slate-900/80 transition-all duration-300 group cursor-default"
            >
              <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 group-hover:scale-110 transition-transform">
                <TechIcon name={partner.icon} className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="block text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                  {partner.name}
                </span>
                <span className="block text-[10px] font-mono text-slate-500">
                  {partner.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
