import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare, Phone } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-navy-950 relative border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-brand-950 text-cyan-400 border border-brand-800 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Common Technical & Operational Questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {siteConfig.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-slate-100 hover:text-cyan-300 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-slate-300 text-left">
            Have a specialized architecture question not covered above?
          </p>
          <div className="flex gap-3">
            <a
              href={`tel:${siteConfig.company.phone}`}
              className="btn-secondary text-xs py-2 px-3.5"
            >
              <Phone className="w-3.5 h-3.5 text-brand-400" />
              <span>Call Us</span>
            </a>
            <a
              href={siteConfig.company.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-xs py-2 px-3.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
