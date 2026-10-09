import React from 'react';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Server, 
  MessageSquare,
  HelpCircle
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface PricingScopeProps {
  onSelectPlan: (planName: string, details: string) => void;
}

export const PricingScope: React.FC<PricingScopeProps> = ({ onSelectPlan }) => {
  const plans = [
    {
      name: 'Startup Sprint',
      badge: 'QUICK LAUNCH',
      price: 'Custom Scope',
      subtitle: 'Ideal for early-stage startups and rapid cloud setup',
      description: 'Get your application containerized and deployed into production with automated CI/CD and basic monitoring within days.',
      features: [
        'Automated CI/CD Pipeline (GitHub / Jenkins)',
        'Docker Containerization & Compose Configuration',
        'Cloud Server Setup (AWS EC2 / Azure VM)',
        'SSL Certificate & Nginx Reverse Proxy',
        'Basic Database Setup & Daily Backups',
        'Deployment Documentation & Knowledge Handover',
        '14-Day Post-Launch Support'
      ],
      popular: false,
      cta: 'Choose Startup Plan',
      accent: 'border-slate-800 hover:border-slate-700'
    },
    {
      name: 'Growth Cloud & DevOps',
      badge: 'MOST POPULAR',
      price: 'Dedicated Tier',
      subtitle: 'For scaling companies needing high availability & automation',
      description: 'Comprehensive infrastructure automation, multi-service deployment, database clustering, and security hardening for scaling workloads.',
      features: [
        'Complete Terraform / Ansible Infrastructure as Code',
        'Kubernetes / Docker Cluster Setup & Autoscaling',
        'Multi-Environment CI/CD (Dev, Staging, Prod)',
        'PostgreSQL / SQL Server Replication & Tuning',
        'Zero-Trust Network & Port Hardening',
        'Prometheus & Grafana Health Dashboards',
        'Fortinet / Cloud Firewall Configuration',
        '30-Day Dedicated Support & SLA'
      ],
      popular: true,
      cta: 'Choose Growth Plan',
      accent: 'border-cyan-500/50 shadow-xl shadow-brand-500/10'
    },
    {
      name: 'Enterprise Retainer',
      badge: 'FULL MANAGEMENT',
      price: 'Enterprise SLA',
      subtitle: 'Dedicated round-the-clock DevOps & cloud engineering partner',
      description: 'Continuous DevOps operations, 24/7 incident response, disaster recovery drills, cost optimization, and proactive architecture advisory.',
      features: [
        '24/7/365 On-Call SRE & Rapid SLA Response (< 15 mins)',
        'Multi-Cloud Hybrid Architecture (AWS + Azure + OCI)',
        'Disaster Recovery Architecture (Multi-AZ & Cross-Region)',
        'Continuous Cloud Cost & FinOps Optimization',
        'Enterprise Security & Compliance Audits',
        'Dedicated Senior Cloud & DevOps Engineers',
        'Quarterly Architecture & Performance Reviews',
        'Direct Private Slack / WhatsApp Engineering Channel'
      ],
      popular: false,
      cta: 'Consult Enterprise Plan',
      accent: 'border-slate-800 hover:border-slate-700'
    }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-island border border-brand-500/30 text-xs font-mono text-cyan-300">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>FLEXIBLE ENGAGEMENT PACKAGES</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            <span className="gradient-heading">Transparent Engagement Models</span>{' '}
            <span className="gradient-brand">Tailored to Your Scope</span>
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Whether you need a quick DevOps setup, full cloud migration, database clustering, or an ongoing 24/7 dedicated engineering partner, we have the right model for you.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-8 glass-card flex flex-col justify-between border ${plan.accent} transition-all duration-300 ${
                plan.popular ? 'bg-gradient-to-b from-brand-950/40 via-slate-950/80 to-slate-950' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-600 to-cyan-500 text-white text-[11px] font-bold tracking-wider shadow-lg shadow-cyan-500/25 uppercase">
                  {plan.badge}
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-slate-100">{plan.name}</h3>
                    {!plan.popular && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 uppercase">
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{plan.subtitle}</p>
                </div>

                <div className="pt-2 pb-4 border-y border-slate-800/80">
                  <div className="text-3xl font-black text-slate-100 font-mono">
                    {plan.price}
                  </div>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                    What's included:
                  </p>
                  <ul className="space-y-2.5">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-slate-800/80">
                <button
                  onClick={() => onSelectPlan(plan.name, `Interested in ${plan.name} package (${plan.price}). Please share customized proposal and timeline.`)}
                  className={`w-full py-3 px-6 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                    plan.popular
                      ? 'btn-primary'
                      : 'btn-secondary'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Scope Callout */}
        <div className="mt-12 p-6 rounded-2xl glass-island border border-slate-800 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="text-sm font-bold text-slate-200 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-cyan-400" />
              Need a custom architecture assessment?
            </h4>
            <p className="text-xs text-slate-400">
              We offer free initial architecture & security audit consultations for qualifying projects.
            </p>
          </div>
          <a
            href={siteConfig.company.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-xs py-2 px-4 whitespace-nowrap"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
