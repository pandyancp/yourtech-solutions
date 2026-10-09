import React, { useState } from 'react';
import { Calculator, Check, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface QuoteCalculatorProps {
  onPreFillContact: (service: string, message: string) => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ onPreFillContact }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([siteConfig.services[0].title]);
  const [cloudProvider, setCloudProvider] = useState('AWS');
  const [serverCount, setServerCount] = useState('1 - 3 Workloads');
  const [urgency, setUrgency] = useState('standard');

  const availableServices = siteConfig.services.map(s => s.title);

  const toggleService = (title: string) => {
    if (selectedServices.includes(title)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== title));
      }
    } else {
      setSelectedServices([...selectedServices, title]);
    }
  };

  const handleSendToWhatsApp = () => {
    const summary = `*Infrastructure & IT Scope Estimate — ${siteConfig.company.name}*
----------------------------------------
- *Selected Services:* ${selectedServices.join(', ')}
- *Cloud / Platform:* ${cloudProvider}
- *Workload Footprint:* ${serverCount}
- *Project Urgency:* ${urgency.toUpperCase()}
----------------------------------------
Please review our requirements and schedule a technical consultation.`;

    const url = `https://wa.me/${siteConfig.company.whatsappNumber}?text=${encodeURIComponent(summary)}`;
    window.open(url, '_blank');
  };

  const handleFillContactForm = () => {
    const message = `Project & Architecture Requirements:
- Selected Services: ${selectedServices.join(', ')}
- Cloud / Platform: ${cloudProvider}
- Workload Footprint: ${serverCount}
- Timeline / Urgency: ${urgency.toUpperCase()}`;

    onPreFillContact(selectedServices[0] || 'Frontend Development', message);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculator" className="py-24 bg-[#030611] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-brand-950/80 text-cyan-300 border border-brand-800 mb-3.5">
            <Calculator className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Scope & Estimation Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Customize Your Project Scope
          </h2>
          <p className="mt-3 text-slate-300 text-base md:text-lg">
            Select your technology and infrastructure parameters below to generate an instant technical specification blueprint.
          </p>
        </div>

        {/* Interactive Scope Box */}
        <div className="max-w-4xl mx-auto rounded-3xl glass-island border border-brand-500/30 shadow-2xl p-6 sm:p-10">
          
          <div className="space-y-8">
            
            {/* Step 1: Select Services */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
                1. Select Required Services (Multi-Select):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {availableServices.map((service) => {
                  const isSelected = selectedServices.includes(service);
                  return (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`flex items-center justify-between p-3.5 rounded-2xl text-left text-xs sm:text-sm font-medium border transition-all ${
                        isSelected
                          ? 'bg-brand-950/90 border-cyan-400 text-white shadow-md shadow-brand-500/20'
                          : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <span className="font-semibold">{service}</span>
                      <div className={`w-5 h-5 rounded-lg flex items-center justify-center border ${
                        isSelected ? 'bg-cyan-500 border-cyan-400 text-black' : 'border-slate-700 bg-slate-900'
                      }`}>
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Primary Cloud / Platform */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
                  2. Primary Cloud / Hosting Environment:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['AWS', 'Azure', 'OCI / On-Prem'].map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCloudProvider(c)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-mono font-medium border text-center transition-all ${
                        cloudProvider === c
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold'
                          : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
                  3. Workload / Server Footprint:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['1 - 3 Apps', '4 - 10 Microservices', '10+ Enterprise'].map((cnt) => (
                    <button
                      key={cnt}
                      type="button"
                      onClick={() => setServerCount(cnt)}
                      className={`py-2.5 px-2 rounded-xl text-xs font-mono border text-center transition-all ${
                        serverCount === cnt
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold'
                          : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {cnt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3: Urgency */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
                4. Project Timeline & Urgency:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'critical', label: 'Emergency (< 24 Hours)', badge: 'Fast Track' },
                  { id: 'standard', label: 'Standard (1 - 2 Weeks)', badge: 'Recommended' },
                  { id: 'planned', label: 'Long-term Architecture Planning', badge: 'Consultation' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setUrgency(item.id)}
                    className={`p-3.5 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                      urgency === item.id
                        ? 'bg-brand-950/90 border-cyan-400 text-white'
                        : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase mb-1">{item.badge}</span>
                    <span className="text-xs font-semibold text-slate-200">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Summary & Dispatch */}
            <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-5">
              <div className="space-y-1 text-left w-full md:w-auto">
                <p className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 font-bold">
                  <Sparkles className="w-4 h-4" />
                  Instant Specification Summary Ready
                </p>
                <p className="text-sm text-slate-200 font-semibold">
                  {selectedServices.length} Disciplines Selected • {cloudProvider} • {serverCount}
                </p>
                <p className="text-xs text-slate-400 font-mono">
                  Guaranteed SLA: Senior engineer response within 15 minutes.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 w-full md:w-auto">
                <button
                  type="button"
                  onClick={handleSendToWhatsApp}
                  className="btn-whatsapp text-xs py-3 px-5 w-full sm:w-auto font-semibold"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send to WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleFillContactForm}
                  className="btn-primary text-xs py-3 px-5 w-full sm:w-auto font-semibold"
                >
                  <span>Pre-Fill Inquiry Form</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
