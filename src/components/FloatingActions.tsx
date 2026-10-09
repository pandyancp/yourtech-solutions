import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-slate-900/90 text-cyan-400 border border-slate-700/80 shadow-lg hover:bg-slate-800 hover:scale-110 transition-all backdrop-blur-md"
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${siteConfig.company.phone}`}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-brand-700 to-blue-600 text-white shadow-xl shadow-brand-600/30 hover:shadow-brand-500/50 hover:scale-105 transition-all text-xs font-semibold group"
        title={`Call ${siteConfig.company.phoneFormatted}`}
      >
        <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline">Call Engineer</span>
      </a>

      {/* Floating WhatsApp Button with pulse indicator */}
      <a
        href={siteConfig.company.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-xl shadow-emerald-950/60 hover:scale-105 transition-all text-xs font-semibold group"
        title="Chat on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageSquare className="w-4 h-4" />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>
    </div>
  );
};
