import React, { useState } from 'react';
import { GitBranch, Box, Cloud, ShieldCheck, Server, Activity, ArrowRight, CheckCircle2 } from 'lucide-react';
import { TechIcon } from './TechLogos';

export const ArchitectureFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      number: "01",
      title: "Code & GitOps Version Control",
      subtitle: "Git, GitHub & Azure Repos",
      desc: "Structured branching strategies, feature pull requests, and automated webhook triggers for instant build initiation.",
      tools: ["Git", "GitHub", "Azure DevOps"],
      details: [
        "Trunk-based and GitFlow branching best practices",
        "Automated secret scanning and static code analysis",
        "Branch protection and peer review validation rules"
      ]
    },
    {
      id: 2,
      number: "02",
      title: "Automated CI/CD Build & Test",
      subtitle: "Jenkins & Azure DevOps",
      desc: "Automated compilation, unit testing, artifact generation (JAR/WAR), and vulnerability scanning on every push.",
      tools: ["Jenkins", "Maven", "Gradle"],
      details: [
        "Multi-stage automated test suites & coverage reporting",
        "Parallelized build runners for sub-3-minute build times",
        "Artifact storage and automated version tagging"
      ]
    },
    {
      id: 3,
      number: "03",
      title: "Docker Containerization",
      subtitle: "Docker & Kubernetes Clusters",
      desc: "Multi-stage Dockerfile packaging, minimal image footprint, and seamless Kubernetes pod orchestration.",
      tools: ["Docker", "Kubernetes", "AWS ECR"],
      details: [
        "Lightweight Alpine/Distroless production containers",
        "Automated CVE vulnerability layer scanning",
        "Zero-downtime rolling updates & automatic health probes"
      ]
    },
    {
      id: 4,
      number: "04",
      title: "Infrastructure as Code (IaC)",
      subtitle: "Terraform & Ansible Multi-Cloud",
      desc: "Declarative server provisioning across AWS, Azure, and Oracle Cloud with automated Ansible configuration playbooks.",
      tools: ["Terraform", "Ansible", "AWS", "Azure", "OCI"],
      details: [
        "Reproducible VPCs, subnets, EC2 instances & RDS databases",
        "Ansible playbooks for automated server baseline setup",
        "State lock management with automated rollback mechanisms"
      ]
    },
    {
      id: 5,
      number: "05",
      title: "Firewall & Security Hardening",
      subtitle: "Fortinet, VPNs & Access Control",
      desc: "Perimeter defense, Fortinet FortiGate firewall rules, encrypted site-to-site VPN tunnels, and least-privilege IAM.",
      tools: ["Fortinet", "IPsec VPN", "iptables", "IAM"],
      details: [
        "Port restriction, geo-blocking and brute-force mitigation",
        "Encrypted SSL-VPN access with Multi-Factor Authentication",
        "Operating system SSH key hardening and root login closure"
      ]
    },
    {
      id: 6,
      number: "06",
      title: "24/7 Monitoring & Proactive Healing",
      subtitle: "APM, Logs & Instant Alerts",
      desc: "Live CPU/memory/disk threshold monitoring, automated restart daemons, and instant alert dispatches via WhatsApp & Email.",
      tools: ["Prometheus", "Grafana", "Nginx Logs", "Systemd"],
      details: [
        "Proactive disk usage alerts before space exhaustion",
        "JVM heap memory leak detection & GC telemetry",
        "Automated backup sync to encrypted cloud object storage"
      ]
    }
  ];

  return (
    <section className="py-20 bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-brand-950 text-cyan-400 border border-brand-800 mb-3">
            <span>End-to-End Infrastructure Lifecycle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How We Engineer Your Production Reliability
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Click on any stage in our 6-step DevOps and Server Delivery Pipeline to see how we build zero-downtime, secure architectures.
          </p>
        </div>

        {/* Step Selector Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`p-4 rounded-xl text-left border transition-all duration-300 flex flex-col justify-between ${
                activeStep === step.id
                  ? 'bg-brand-950/80 border-cyan-400 shadow-lg shadow-brand-500/20 translate-y-[-2px]'
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-mono font-bold ${activeStep === step.id ? 'text-cyan-400' : 'text-slate-500'}`}>
                  {step.number}
                </span>
                <span className={`w-2 h-2 rounded-full ${activeStep === step.id ? 'bg-cyan-400 animate-ping' : 'bg-slate-700'}`}></span>
              </div>
              <p className={`text-xs font-bold leading-tight ${activeStep === step.id ? 'text-white' : 'text-slate-300'}`}>
                {step.title.split(' ')[0]} {step.title.split(' ')[1] || ''}
              </p>
            </button>
          ))}
        </div>

        {/* Active Stage Detailed Breakdown */}
        {(() => {
          const current = steps.find(s => s.id === activeStep) || steps[0];
          return (
            <div className="p-6 md:p-8 rounded-2xl bg-slate-900/90 border border-brand-500/30 shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-lg text-sm font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-800">
                      STAGE {current.number}
                    </span>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      {current.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                    {current.title}
                  </h3>

                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    {current.desc}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Key Technical Deliverables:
                    </h4>
                    <ul className="space-y-2">
                      {current.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs md:text-sm text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    Integrated Toolchain in this Stage:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {current.tools.map((t) => (
                      <div
                        key={t}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 text-xs font-mono text-slate-200"
                      >
                        <TechIcon name={t} className="w-4 h-4 text-cyan-400" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-800">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>Deployment Reliability SLA</span>
                      <span className="text-emerald-400 font-bold">100% Automated</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full mt-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-brand-500 to-cyan-400 h-full w-full"></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
};
