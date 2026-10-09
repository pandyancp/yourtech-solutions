import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Menu, 
  X, 
  Terminal, 
  ChevronDown, 
  Sparkles, 
  GitBranch, 
  Box, 
  Coffee, 
  Database, 
  Layout, 
  Server, 
  ShieldCheck, 
  ArrowRight,
  Zap
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { ThemeSelector } from './ThemeSelector';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const serviceIcons = [
    { title: "Frontend Development", icon: Layout, desc: "React, Next.js, Angular & Vue" },
    { title: "Backend Development", icon: Server, desc: "Node, Python, Java, Go, PHP, C#" },
    { title: "SQL & NoSQL Databases", icon: Database, desc: "PostgreSQL, MSSQL, MySQL & Redis" },
    { title: "DevOps & CI/CD Pipelines", icon: GitBranch, desc: "Jenkins, GitHub Actions & GitLab" },
    { title: "Docker & Kubernetes", icon: Box, desc: "Containers, Helm & Argo CD" },
    { title: "Multi-Cloud & IaC", icon: Zap, desc: "AWS, Azure, OCI & Terraform" },
    { title: "Systems & Fortinet Security", icon: ShieldCheck, desc: "Linux/Windows, Firewalls & VPN" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Top Emergency & SLA Ribbon */}
      <div className="bg-gradient-to-r from-brand-950 via-slate-900 to-navy-950 border-b border-brand-500/20 py-1.5 px-4 text-center text-[11px] font-medium text-slate-300 flex items-center justify-center gap-2 sm:gap-4 overflow-hidden">
        <span className="inline-flex items-center gap-1.5 text-cyan-400 font-semibold font-mono">
          <Zap className="w-3 h-3 animate-pulse" />
          <span>24/7 PRODUCTION SUPPORT</span>
        </span>
        <span className="hidden md:inline text-slate-500">|</span>
        <span className="hidden sm:inline text-slate-300">
          Zero-Downtime Releases, Cloud Migration & Firewall Defense
        </span>
        <span className="text-slate-500">•</span>
        <a
          href={`tel:${siteConfig.company.phone}`}
          className="text-white hover:text-cyan-300 font-mono font-semibold underline underline-offset-2 flex items-center gap-1"
        >
          <Phone className="w-2.5 h-2.5 text-cyan-400" />
          <span>{siteConfig.company.phoneFormatted}</span>
        </a>
      </div>

      {/* Floating Island Navigation Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2.5">
        <div 
          className={`transition-all duration-300 rounded-2xl ${
            isScrolled 
              ? 'glass-island py-2.5 px-4 sm:px-6 shadow-2xl' 
              : 'bg-slate-950/70 backdrop-blur-xl border border-white/10 py-3 px-4 sm:px-6'
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            
            {/* Brand Logo */}
            <a href="#home" className="flex items-center gap-3 group flex-shrink-0">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-700 via-brand-500 to-cyan-400 p-[1.5px] shadow-lg shadow-brand-500/25 group-hover:shadow-brand-500/50 transition-all">
                <div className="w-full h-full bg-[#030712] rounded-[10px] flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#030712] animate-pulse"></span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-brand-300 bg-clip-text text-transparent group-hover:to-cyan-300 transition-colors">
                  {siteConfig.company.name}
                </span>
                <span className="text-[10px] font-mono tracking-wider uppercase text-cyan-400/90 -mt-1 font-semibold">
                  {siteConfig.company.tagline}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1">
              
              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-200 hover:text-cyan-400 hover:bg-slate-800/60 rounded-full transition-all"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-cyan-400' : 'text-slate-400'}`} />
                </button>

                {/* Dropdown Flyout */}
                {servicesDropdownOpen && (
                  <div
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                    className="absolute top-full left-0 mt-2 w-80 p-3 rounded-2xl glass-island shadow-2xl border border-brand-500/30 animate-fadeIn z-50"
                  >
                    <div className="space-y-1">
                      {serviceIcons.map((s, idx) => {
                        const Icon = s.icon;
                        return (
                          <a
                            key={idx}
                            href="#services"
                            onClick={() => setServicesDropdownOpen(false)}
                            className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-800/80 transition-colors group"
                          >
                            <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-400">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                                {s.title}
                              </p>
                              <p className="text-[10px] text-slate-400">{s.desc}</p>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                    <div className="mt-2 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-cyan-400 px-2 font-mono">
                      <span>Explore all capabilities</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                )}
              </div>

              <a
                href="#features"
                className="px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 rounded-full transition-all"
              >
                Capabilities
              </a>

              <a
                href="#technologies"
                className="px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 rounded-full transition-all"
              >
                Technologies
              </a>

              <a
                href="#projects"
                className="px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 rounded-full transition-all"
              >
                Projects
              </a>

              <a
                href="#pricing"
                className="px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 rounded-full transition-all"
              >
                Pricing
              </a>

              <a
                href="#why-us"
                className="px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 rounded-full transition-all"
              >
                Why Us
              </a>

              <a
                href="#calculator"
                className="px-3 py-1.5 text-xs font-semibold text-cyan-300 bg-brand-950/60 border border-brand-800 hover:border-cyan-400 rounded-full transition-all flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>Scope Estimator</span>
              </a>
            </nav>

            {/* Desktop Action CTAs & Theme Selector */}
            <div className="hidden sm:flex items-center gap-2">
              
              {/* Theme Selector */}
              <ThemeSelector />

              {/* WhatsApp Quick Button */}
              <a
                href={siteConfig.company.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs py-2 px-3.5"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              {/* Consultation / Call Button */}
              <a
                href={`tel:${siteConfig.company.phone}`}
                className="btn-primary text-xs py-2 px-4 flex items-center gap-2"
                title="Direct Phone Call"
              >
                <Phone className="w-3.5 h-3.5 text-white animate-bounce" />
                <span>{siteConfig.company.phoneFormatted}</span>
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="flex xl:hidden items-center gap-2">
              <ThemeSelector />

              <a
                href={`tel:${siteConfig.company.phone}`}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 sm:hidden"
                aria-label="Call Now"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 hover:text-white focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden mx-4 mt-2 p-5 rounded-3xl glass-island border border-brand-500/30 shadow-2xl animate-fadeIn">
          <div className="space-y-1 pb-4 border-b border-slate-800">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 text-sm font-semibold text-white hover:text-cyan-400 hover:bg-slate-900/80 rounded-xl"
            >
              <span>Our Services (7 Core Offerings)</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </a>
            <a
              href="#technologies"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 text-sm font-semibold text-slate-300 hover:text-cyan-400 hover:bg-slate-900/80 rounded-xl"
            >
              <span>Technologies & Platforms</span>
              <ArrowRight className="w-4 h-4 text-slate-600" />
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 text-sm font-semibold text-slate-300 hover:text-cyan-400 hover:bg-slate-900/80 rounded-xl"
            >
              <span>Projects & Case Studies</span>
              <ArrowRight className="w-4 h-4 text-slate-600" />
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 text-sm font-semibold text-slate-300 hover:text-cyan-400 hover:bg-slate-900/80 rounded-xl"
            >
              <span>Why Choose Us</span>
              <ArrowRight className="w-4 h-4 text-slate-600" />
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 text-sm font-semibold text-cyan-300 bg-brand-950/40 rounded-xl border border-brand-800"
            >
              <span>Scope & Quote Estimator</span>
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 text-sm font-semibold text-slate-300 hover:text-cyan-400 hover:bg-slate-900/80 rounded-xl"
            >
              <span>Contact Senior Engineers</span>
              <ArrowRight className="w-4 h-4 text-slate-600" />
            </a>
          </div>

          <div className="pt-4 flex flex-col gap-2.5">
            <a
              href={`tel:${siteConfig.company.phone}`}
              className="btn-primary text-xs py-3 w-full"
            >
              <Phone className="w-4 h-4" />
              <span>Call Hotline: {siteConfig.company.phoneFormatted}</span>
            </a>
            <a
              href={siteConfig.company.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-xs py-3 w-full"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
