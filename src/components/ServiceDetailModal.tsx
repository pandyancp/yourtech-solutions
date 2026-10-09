import React from 'react';
import { X, CheckCircle2, MessageSquare, Phone, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import { ServiceItem, siteConfig } from '../config/siteConfig';
import { TechIcon } from './TechLogos';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectServiceForContact,
}) => {
  if (!service) return null;

  const handleEnquireWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello ${siteConfig.company.name}, I am interested in your "${service.title}" services. Please provide more details and consultation.`
    );
    window.open(`https://wa.me/${siteConfig.company.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-950 border border-brand-500/30 rounded-2xl shadow-2xl shadow-cyan-950/50 text-slate-100 p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col space-y-2 pr-8">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-brand-950 text-cyan-400 border border-brand-800">
              {service.badge}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            {service.title}
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            {service.fullDesc}
          </p>
        </div>

        {/* Key Features / Capabilities */}
        <div className="mt-6 pt-6 border-t border-slate-800/80">
          <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2 mb-3">
            <Cpu className="w-4 h-4" />
            Core Capabilities & Scope of Work:
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {service.keyFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Deliverables & Outcomes */}
        <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2 mb-3">
              <ShieldCheck className="w-4 h-4 text-brand-400" />
              What You Receive (Deliverables):
            </h4>
            <ul className="space-y-2">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2 mb-3">
              <ArrowRight className="w-4 h-4 text-emerald-400" />
              Business Benefits:
            </h4>
            <ul className="space-y-2">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technologies Covered */}
        <div className="mt-6 pt-6 border-t border-slate-800/80">
          <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
            Associated Tech Stack:
          </p>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-slate-700/80 text-cyan-300"
              >
                <TechIcon name={tech} className="w-3.5 h-3.5" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap gap-3 justify-end items-center">
          <a
            href={`tel:${siteConfig.company.phone}`}
            className="btn-secondary text-xs py-2.5 px-4"
          >
            <Phone className="w-3.5 h-3.5 text-brand-400" />
            <span>Call: {siteConfig.company.phoneFormatted}</span>
          </a>

          <button
            onClick={handleEnquireWhatsApp}
            className="btn-whatsapp text-xs py-2.5 px-4"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Discuss on WhatsApp</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onSelectServiceForContact(service.title);
            }}
            className="btn-primary text-xs py-2.5 px-5"
          >
            <span>Request Proposal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
