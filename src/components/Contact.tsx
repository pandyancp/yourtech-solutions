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
    name: '',
    email: '',
    phone: '',
    service: siteConfig.services[0].title,
    message: ''
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
      setFormData(prev => ({ ...prev, service: preFilledService }));
    }
    if (preFilledMessage) {
      setFormData(prev => ({ ...prev, message: preFilledMessage }));
    }
  }, [preFilledService, preFilledMessage]);

  const validateClientSide = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your name';
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim() || formData.phone.replace(/[^0-9]/g, '').length < 7) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      newErrors.message = 'Please enter your message (at least 5 characters)';
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
          message: data.message || 'Enquiry successfully sent!',
          enquiryId: data.data?.enquiryId,
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: siteConfig.services[0].title,
          message: ''
        });
        setErrors({});
      } else {
        if (data.errors) {
          const fieldErrors: { [key: string]: string } = {};
          Object.entries(data.errors).forEach(([field, msgs]) => {
            fieldErrors[field] = (msgs as string[])[0] || 'Invalid value';
          });
          setErrors(fieldErrors);
        }
        setSubmissionResult({
          success: false,
          message: data.message || 'Submission failed. Please check the fields.',
        });
      }
    } catch (err) {
      console.error('[Contact Error]', err);
      setSubmissionResult({
        success: false,
        message: 'Network error communicating with server. You can also chat directly on WhatsApp.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendToWhatsApp = () => {
    const text = `*New Service Enquiry — ${siteConfig.company.name}*
- Name: ${formData.name || 'Not provided'}
- Email: ${formData.email || 'Not provided'}
- Phone: ${formData.phone || siteConfig.company.phoneFormatted}
- Service: ${formData.service}

*Message:*
${formData.message || 'Hello, I would like to inquire about your services.'}`;

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
    <section id="contact" className="py-24 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-brand-950/80 text-cyan-300 border border-brand-800 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact Us
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base">
            Have a project or need server support? Send a message below or call us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <div className="p-6 rounded-2xl glass-card border border-brand-500/30">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-brand-500/20 border border-brand-500/40 flex items-center justify-center text-cyan-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold">Call Anytime</p>
                    <p className="text-lg font-bold text-white mt-0.5">{siteConfig.company.phoneFormatted}</p>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(siteConfig.company.phone, 'phone')}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="mt-4 flex gap-2">
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
            <div className="p-6 rounded-2xl glass-card border border-slate-800 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">Email Us</p>
                  <p className="text-sm font-semibold text-white mt-0.5 break-all">{siteConfig.company.email}</p>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(siteConfig.company.email, 'email')}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location */}
            <div className="p-5 rounded-2xl glass-card border border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold">
                <MapPin className="w-4 h-4 text-brand-400" />
                <span>{siteConfig.company.cityState}, {siteConfig.company.country}</span>
              </div>
              <p className="text-slate-400 text-[11px]">{siteConfig.company.address}</p>
              <p className="text-emerald-400 font-mono text-[11px] flex items-center gap-1 pt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                {siteConfig.company.availability}
              </p>
            </div>

          </div>

          {/* Right Column: Clean 5-Field Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-3xl glass-island border border-brand-500/30 shadow-2xl">
              
              <h3 className="text-xl font-bold text-white mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-300 mb-5">
                Fill out this quick form and our team will get back to you promptly.
              </p>

              {/* Status Alert */}
              {submissionResult && (
                <div
                  className={`mb-5 p-3.5 rounded-xl border text-xs flex items-start gap-2.5 ${
                    submissionResult.success
                      ? 'bg-emerald-950/80 border-emerald-800 text-emerald-200'
                      : 'bg-red-950/80 border-red-800 text-red-200'
                  }`}
                >
                  {submissionResult.success ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className="font-semibold">{submissionResult.message}</p>
                    {submissionResult.enquiryId && (
                      <p className="font-mono text-[10px] text-cyan-300 mt-0.5">Ref: {submissionResult.enquiryId}</p>
                    )}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* 1. Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                      errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-cyan-400'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                </div>

                {/* 2. Email & 3. Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Phone Number <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 97464 03622"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                        errors.phone ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* 4. Service Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Service Required <span className="text-cyan-400">*</span>
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    {siteConfig.services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Other / General Inquiry">Other / General Inquiry</option>
                  </select>
                </div>

                {/* 5. Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Message / Requirement <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your requirements or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                      errors.message ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-cyan-400'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary text-xs py-3 px-5 flex-1 justify-center font-semibold disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleSendToWhatsApp}
                    className="btn-whatsapp text-xs py-3 px-5 flex-1 justify-center font-semibold"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
