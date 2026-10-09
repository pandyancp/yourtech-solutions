import React from 'react';
import { Terminal, Phone, MessageSquare, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 border-t border-slate-800 text-slate-400 text-sm">
      
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-700 to-cyan-400 p-[1.5px] shadow-lg shadow-brand-500/20">
                <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white block">
                  {siteConfig.company.name}
                </span>
                <span className="text-[10px] font-mono tracking-wider uppercase text-cyan-400">
                  {siteConfig.company.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {siteConfig.company.subTagline}. Delivering zero-downtime CI/CD automation, cloud infrastructure, container orchestration, database administration, and firewall security.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href={siteConfig.company.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs font-medium hover:bg-emerald-900 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: {siteConfig.company.whatsappFormatted}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Services List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Infrastructure Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {siteConfig.services.map((service) => (
                <li key={service.id}>
                  <a href="#services" className="hover:text-cyan-400 transition-colors block">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {siteConfig.navigation.map((nav) => (
                <li key={nav.label}>
                  <a href={nav.href} className="hover:text-cyan-400 transition-colors block">
                    {nav.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Contacts */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <a
                href={`tel:${siteConfig.company.phone}`}
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{siteConfig.company.phoneFormatted}</span>
              </a>

              <a
                href={`mailto:${siteConfig.company.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>{siteConfig.company.email}</span>
              </a>

              <div className="flex items-start gap-2 text-slate-400 pt-1">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{siteConfig.company.cityState}, {siteConfig.company.country}</span>
              </div>
            </div>

            <div className="pt-3">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
                <p className="text-cyan-300 font-mono font-medium flex items-center gap-1 mb-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Configuration Notice:
                </p>
                All company information is centrally configurable in <code className="text-cyan-400 font-mono">src/config/siteConfig.ts</code>.
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Sub Footer */}
      <div className="border-t border-slate-800/80 py-6 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {siteConfig.company.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
            <a href="#home" className="hover:text-cyan-400 transition-colors">Security Overview</a>
          </div>
        </div>
      </div>

    </footer>
  );
};
