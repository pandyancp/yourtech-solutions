import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  Sparkles,
  Loader2
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface ContactProps {
  preFilledService?: string;
  preFilledMessage?: string;
}

export const Contact: React.FC<ContactProps> = ({ preFilledService, preFilledMessage }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    serviceCategory: siteConfig.services[0].title,
    preferredTech: '',
    projectBudget: '',
    projectDescription: '',
    urgency: 'standard'
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    message: string;
    enquiryId?: string;
  } | null>(null);

  useEffect(() => {
    if (preFilledService) {
      setFormData(prev => ({ ...prev, serviceCategory: preFilledService }));
    }
    if (preFilledMessage) {
      setFormData(prev => ({ ...prev, projectDescription: preFilledMessage }));
    }
  }, [preFilledService, preFilledMessage]);

  const validateClientSide = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid work email address';
    }

    if (!formData.phone.trim() || formData.phone.replace(/[^0-9]/g, '').length < 7) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.projectDescription.trim() || formData.projectDescription.trim().length < 10) {
      newErrors.projectDescription = 'Please describe your project requirements (min 10 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionResult(null);

    if (!validateClientSide()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmissionResult({
          success: true,
          message: data.message || 'Enquiry successfully submitted!',
          enquiryId: data.data?.enquiryId,
        });
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          companyName: '',
          serviceCategory: siteConfig.services[0].title,
          preferredTech: '',
          projectBudget: '',
          projectDescription: '',
          urgency: 'standard'
        });
        setErrors({});
      } else {
        // Validation or server error
        if (data.errors) {
          const fieldErrors: { [key: string]: string } = {};
          Object.entries(data.errors).forEach(([field, msgs]) => {
            fieldErrors[field] = (msgs as string[])[0] || 'Invalid value';
          });
          setErrors(fieldErrors);
        }
        setSubmissionResult({
          success: false,
          message: data.message || 'Submission failed. Please check the highlighted fields.',
        });
      }
    } catch (err) {
      console.error('[Contact Form Error]', err);
      setSubmissionResult({
        success: false,
        message: 'Network error communicating with API backend. You can also send your enquiry directly via WhatsApp.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendToWhatsApp = () => {
    const text = `*Project Enquiry — ${siteConfig.company.name}*
- Name: ${formData.fullName || 'Not provided'}
- Email: ${formData.email || 'Not provided'}
- Phone: ${formData.phone || siteConfig.company.phoneFormatted}
- Company: ${formData.companyName || 'N/A'}
- Service: ${formData.serviceCategory}
- Tech: ${formData.preferredTech || 'N/A'}
- Budget: ${formData.projectBudget || 'N/A'}
- Urgency: ${formData.urgency.toUpperCase()}

*Project Description:*
${formData.projectDescription || 'Requesting general technical consultation.'}`;

    window.open(`https://wa.me/${siteConfig.company.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const copyToClipboard = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#030712] relative border-t border-white/5">
      
      {/* Glow highlight */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-brand-950/80 text-cyan-300 border border-brand-800 mb-3.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Consult With Senior IT & Cloud Engineers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Let's Discuss Your Project & Infrastructure
          </h2>
          <p className="mt-3 text-slate-300 text-base md:text-lg">
            Submit your technical requirements below for an upfront scope estimate, or reach out immediately via Phone or WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <div className="p-6 rounded-3xl glass-card border border-brand-500/30 shadow-2xl relative overflow-hidden">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-brand-500/20 border border-brand-500/40 flex items-center justify-center text-cyan-400">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">Direct Phone Hotline</p>
                    <p className="text-xl font-extrabold text-white mt-0.5">{siteConfig.company.phoneFormatted}</p>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(siteConfig.company.phone, 'phone')}
                  className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
                  title="Copy Phone"
                  aria-label="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="mt-5 flex gap-2.5">
                <a
                  href={`tel:${siteConfig.company.phone}`}
                  className="btn-primary text-xs py-2.5 px-4 flex-1 text-center"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>
                <a
                  href={siteConfig.company.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-xs py-2.5 px-4 flex-1 text-center"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-3xl glass-card border border-slate-800 flex items-start justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">Configurable Email</p>
                  <p className="text-sm sm:text-base font-semibold text-white mt-0.5 break-all">{siteConfig.company.email}</p>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(siteConfig.company.email, 'email')}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
                title="Copy Email"
                aria-label="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Operating Hours & SLA */}
            <div className="p-6 rounded-3xl glass-card border border-slate-800 space-y-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Service Hours</p>
                  <p className="text-slate-400 text-xs mt-0.5">{siteConfig.company.operatingHours}</p>
                  <p className="text-emerald-400 text-xs font-mono mt-1 flex items-center gap-1.5 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    {siteConfig.company.availability}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-800">
                <MapPin className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Global IT Delivery Hub</p>
                  <p className="text-slate-400 text-xs mt-0.5">{siteConfig.company.address}</p>
                  <p className="text-slate-400 text-xs">{siteConfig.company.cityState}, {siteConfig.company.country}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Full-Stack Validated Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl glass-island border border-brand-500/30 shadow-2xl">
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">
                  Submit a Project or Server Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Connected directly to our backend API with real-time validation and database persistence.
                </p>
              </div>

              {/* Status Banner */}
              {submissionResult && (
                <div
                  className={`mb-6 p-4 rounded-2xl border text-xs sm:text-sm flex items-start gap-3 ${
                    submissionResult.success
                      ? 'bg-emerald-950/80 border-emerald-800 text-emerald-200'
                      : 'bg-red-950/80 border-red-800 text-red-200'
                  }`}
                >
                  {submissionResult.success ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-1">
                    <p className="font-semibold">{submissionResult.message}</p>
                    {submissionResult.enquiryId && (
                      <p className="font-mono text-[11px] text-cyan-300">
                        Reference ID: {submissionResult.enquiryId}
                      </p>
                    )}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-medium mb-1.5">
                      Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vikram Mehta"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                        errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {errors.fullName && <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-medium mb-1.5">
                      Phone Number <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                        errors.phone ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Email & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-medium mb-1.5">
                      Work Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. vikram@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-medium mb-1.5">
                      Company Name <span className="text-slate-500">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Mehta Logistics"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Service Category & Preferred Technology */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-medium mb-1.5">
                      Service Category <span className="text-cyan-400">*</span>
                    </label>
                    <select
                      value={formData.serviceCategory}
                      onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      {siteConfig.services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Other / Custom IT Consultation">Other / Custom IT Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-medium mb-1.5">
                      Preferred Technology <span className="text-slate-500">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. React, Node, Python, AWS, Docker"
                      value={formData.preferredTech}
                      onChange={(e) => setFormData({ ...formData, preferredTech: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Budget & Urgency */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-medium mb-1.5">
                      Estimated Project Budget <span className="text-slate-500">(Optional)</span>
                    </label>
                    <select
                      value={formData.projectBudget}
                      onChange={(e) => setFormData({ ...formData, projectBudget: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="">Select budget range...</option>
                      <option value="< $1,000 / Emergency Fix">&lt; $1,000 (Emergency / Quick Setup)</option>
                      <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                      <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                      <option value="$15,000+ Enterprise">$15,000+ (Enterprise Architecture)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-medium mb-1.5">
                      Timeline / Urgency
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {[
                        { id: 'critical', label: 'Emergency' },
                        { id: 'standard', label: 'Standard' },
                        { id: 'planned', label: 'Planning' }
                      ].map((u) => (
                        <button
                          key={u.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, urgency: u.id })}
                          className={`py-2 px-1 rounded-xl text-xs font-mono border text-center transition-all ${
                            formData.urgency === u.id
                              ? 'bg-brand-950 border-cyan-400 text-cyan-300 font-bold'
                              : 'bg-slate-950 border-slate-800 text-slate-400'
                          }`}
                        >
                          {u.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-medium mb-1.5">
                    Project Requirements / Description <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your current tech stack, cloud requirements, server bottlenecks, or project goals..."
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                      errors.projectDescription ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-cyan-400'
                    }`}
                  />
                  {errors.projectDescription && <p className="text-[11px] text-red-400 mt-1">{errors.projectDescription}</p>}
                </div>

                {/* Dual Submit Actions */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary text-xs py-3.5 px-6 flex-1 justify-center font-semibold disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting to API...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Project Enquiry</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleSendToWhatsApp}
                    className="btn-whatsapp text-xs py-3.5 px-6 flex-1 justify-center font-semibold"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Scope to WhatsApp</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-500 text-center pt-1 font-mono">
                  Data stored securely in backend datastore. Confidentiality guaranteed.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
