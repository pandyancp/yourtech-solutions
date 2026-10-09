import React, { useState } from 'react';
import { 
  GitBranch, 
  Box, 
  Coffee, 
  Database, 
  Layout, 
  Server, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  MessageSquare,
  Search,
  Sparkles,
  Phone
} from 'lucide-react';
import { siteConfig, ServiceItem } from '../config/siteConfig';
import { TechIcon } from './TechLogos';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
  onQuickQuote: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService, onQuickQuote }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const getServiceIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-cyan-400 group-hover:scale-110 group-hover:text-white transition-all duration-300" };
    switch (iconName) {
      case 'GitBranch': return <GitBranch {...props} />;
      case 'Box': return <Box {...props} />;
      case 'Coffee': return <Coffee {...props} />;
      case 'Database': return <Database {...props} />;
      case 'Layout': return <Layout {...props} />;
      case 'Server': return <Server {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      default: return <Server {...props} />;
    }
  };

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'devops', label: 'DevOps & IaC' },
    { id: 'container', label: 'Docker & K8s' },
    { id: 'backend', label: 'Java & Databases' },
    { id: 'security', label: 'Security & SysAdmin' },
  ];

  const filteredServices = siteConfig.services.filter(service => {
    const matchesSearch = 
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.technologies.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));

    if (activeCategory === 'all') return matchesSearch;
    if (activeCategory === 'devops') return matchesSearch && service.id.includes('devops');
    if (activeCategory === 'container') return matchesSearch && service.id.includes('docker');
    if (activeCategory === 'backend') return matchesSearch && (service.id.includes('java') || service.id.includes('sql') || service.id.includes('frontend'));
    if (activeCategory === 'security') return matchesSearch && (service.id.includes('firewall') || service.id.includes('system'));
    return matchesSearch;
  });

  return (
    <section id="services" className="relative py-28 bg-[#040816] border-t border-b border-white/5">
      
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-brand-950/80 text-cyan-300 border border-brand-800 mb-3.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Enterprise IT & Infrastructure Offerings</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Comprehensive DevOps, Cloud & Server Engineering
            </h2>
            <p className="mt-3 text-slate-300 text-base md:text-lg leading-relaxed">
              We architect, automate, and safeguard production workloads. From zero-downtime CI/CD pipelines to Fortinet firewall isolation, our senior engineers deliver reliable results.
            </p>
          </div>

          {/* Search & Filter Controls */}
          <div className="flex flex-col gap-3 w-full lg:w-auto">
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search services or tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-slate-900/90 border border-slate-700 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all shadow-inner"
              />
            </div>

            {/* Quick Category Buttons */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-gradient-to-r from-brand-600 to-cyan-500 text-white font-semibold shadow-md shadow-brand-500/25'
                      : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services 3D-Tilt Cards Grid (7 Core Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between p-7 rounded-3xl glass-card relative overflow-hidden"
            >
              {/* Subtle Card Glow Effect on Hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />

              <div>
                {/* Header with Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 p-3 rounded-2xl bg-slate-950 border border-brand-500/30 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-brand-950 transition-all shadow-inner">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-slate-900/90 border border-slate-700/80 text-cyan-300">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Short Description */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2.5">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {service.shortDesc}
                </p>

                {/* Key Deliverables Checkmarks */}
                <ul className="space-y-2 mb-6">
                  {service.keyFeatures.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: Tech tags & Action */}
              <div className="pt-5 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-300"
                    >
                      <TechIcon name={tech} className="w-3 h-3 text-cyan-400" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-3 pt-1">
                  <button
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onQuickQuote(service.title)}
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-emerald-400 hover:bg-emerald-950/40 hover:border-emerald-500 transition-all"
                    title={`Request consultation for ${service.title}`}
                    aria-label={`Request consultation for ${service.title}`}
                  >
                    <MessageSquare className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner for Direct Engineering Access */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-brand-950 via-slate-900 to-navy-950 border border-brand-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-brand-500/20 border border-brand-500/40 flex items-center justify-center flex-shrink-0 text-cyan-400">
              <Server className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">
                Need a Custom Cloud or Server Setup?
              </h4>
              <p className="text-sm text-slate-300 mt-1">
                Speak directly with senior DevOps engineers to design, migrate, or secure your infrastructure.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 w-full md:w-auto">
            <a
              href={`tel:${siteConfig.company.phone}`}
              className="btn-primary text-xs py-3 px-6 w-full sm:w-auto"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us: {siteConfig.company.phoneFormatted}</span>
            </a>
            <a
              href={siteConfig.company.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-xs py-3 px-6 w-full sm:w-auto"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
