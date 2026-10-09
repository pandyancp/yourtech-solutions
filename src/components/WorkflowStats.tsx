import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Activity, 
  Server, 
  Clock, 
  Layers, 
  TrendingUp,
  Award
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const WorkflowStats: React.FC = () => {
  const stats = [
    {
      value: '3M+',
      label: 'Automated CI/CD Builds',
      description: 'Zero-failure production build & deploy jobs executed seamlessly',
      icon: Zap,
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      value: '99.99%',
      label: 'Production SLA Uptime',
      description: 'Multi-AZ high availability with instant failover across AWS & Azure',
      icon: Activity,
      gradient: 'from-emerald-400 to-teal-500'
    },
    {
      value: '500+',
      label: 'Cloud & Database Deployments',
      description: 'Microservices, Docker clusters & SQL instances optimized',
      icon: Server,
      gradient: 'from-indigo-400 to-cyan-400'
    },
    {
      value: '< 15 min',
      label: 'Emergency SLA Response',
      description: 'Round-the-clock priority incident resolution and SRE triage',
      icon: Clock,
      gradient: 'from-amber-400 to-orange-500'
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-2xl glass-card group hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Glow pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} p-0.5 shadow-lg shadow-cyan-500/10`}>
                    <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-cyan-300 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                    VERIFIED METRIC
                  </span>
                </div>

                <div className="space-y-1.5">
                  <div className={`text-3xl lg:text-4xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent font-mono tracking-tight`}>
                    {stat.value}
                  </div>
                  <h3 className="text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
