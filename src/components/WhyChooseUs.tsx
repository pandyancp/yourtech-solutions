import React from 'react';
import { 
  ShieldAlert, 
  Clock, 
  Zap, 
  Layers, 
  DollarSign, 
  CheckCircle, 
  Star,
  Quote
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const WhyChooseUs: React.FC = () => {
  const getWhyIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" };
    switch (iconName) {
      case 'ShieldAlert': return <ShieldAlert {...props} />;
      case 'Clock': return <Clock {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'DollarSign': return <DollarSign {...props} />;
      case 'CheckCircle': return <CheckCircle {...props} />;
      default: return <CheckCircle {...props} />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-navy-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-brand-950 text-cyan-400 border border-brand-800 mb-3">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>The YourTech Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Why Engineering Teams Trust Us
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            We don't just write scripts — we engineer resilient, self-healing, and fortified production systems designed for scale.
          </p>
        </div>

        {/* 6 Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {siteConfig.whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="group p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/30"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-5 group-hover:border-cyan-400 transition-colors shadow-inner">
                {getWhyIcon(item.icon)}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Client Testimonials Section */}
        <div className="pt-12 border-t border-slate-800/80">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Trusted by Technical Leaders
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Here is what CTOs and DevOps leads say about our infrastructure support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteConfig.testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-300 italic leading-relaxed mb-6">
                    "{t.content}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.name}</h4>
                    <p className="text-xs text-cyan-400 font-mono">{t.role}, {t.company}</p>
                  </div>
                  <Quote className="w-6 h-6 text-slate-700" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
