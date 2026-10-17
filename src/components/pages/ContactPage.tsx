import React, { useState } from 'react';
import { PageId } from '../../types';
import { Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    inquiryType: 'project-proposal',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    if (!formData.email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4 border-b border-[#E2DDD2] pb-8 text-center sm:text-left">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C86445]">
          LET'S TALK
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#153E43] tracking-tight">
          Start Your Project or Request Hosting Guidance
        </h1>
        <p className="text-[#153E43]/80 text-base sm:text-lg leading-relaxed max-w-3xl">
          Whether you want a high-performance custom website, ongoing maintenance, or independent advice on your Hostinger setup, send our team a message.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white border border-[#E2DDD2] rounded-2xl p-6 sm:p-8 shadow-sm">
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#153E43]/10 text-[#153E43] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#153E43]">Message Received</h3>
              <p className="text-[#153E43]/80 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Farhan Momen and our technical team will review your project requirements and respond to <strong>{formData.email}</strong> within 4 business hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', website: '', inquiryType: 'project-proposal', message: '' });
                }}
                className="mt-4 px-4 py-2 text-xs font-semibold text-[#153E43] border border-[#E2DDD2] hover:bg-[#F3EFE6] rounded-lg transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-xl font-bold text-[#153E43] mb-2">Project or Consultation Inquiry</h3>

              {error && (
                <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#153E43] uppercase tracking-wider mb-1.5 font-mono">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Farhan Chowdhury"
                    className="w-full bg-[#F8F5EE] border border-[#E2DDD2] rounded-xl px-3.5 py-2.5 text-sm text-[#153E43] focus:outline-none focus:border-[#153E43] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#153E43] uppercase tracking-wider mb-1.5 font-mono">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-[#F8F5EE] border border-[#E2DDD2] rounded-xl px-3.5 py-2.5 text-sm text-[#153E43] focus:outline-none focus:border-[#153E43] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#153E43] uppercase tracking-wider mb-1.5 font-mono">
                    Current Website (Optional)
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://example.com"
                    className="w-full bg-[#F8F5EE] border border-[#E2DDD2] rounded-xl px-3.5 py-2.5 text-sm text-[#153E43] focus:outline-none focus:border-[#153E43] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#153E43] uppercase tracking-wider mb-1.5 font-mono">
                    What Do You Need?
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full bg-[#F8F5EE] border border-[#E2DDD2] rounded-xl px-3.5 py-2.5 text-sm text-[#153E43] focus:outline-none focus:border-[#153E43] focus:bg-white transition-colors cursor-pointer"
                  >
                    <option value="project-proposal">New Website Design &amp; Development</option>
                    <option value="maintenance">Website Maintenance &amp; Retainer</option>
                    <option value="migration-help">Free Hostinger Migration Assistance</option>
                    <option value="server-sizing">Hosting Plan Sizing &amp; Architecture</option>
                    <option value="marketing">SEO &amp; Growth Marketing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#153E43] uppercase tracking-wider mb-1.5 font-mono">
                  Project Details *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your business goals, required timeline, and what you would like to achieve..."
                  className="w-full bg-[#F8F5EE] border border-[#E2DDD2] rounded-xl p-3.5 text-sm text-[#153E43] focus:outline-none focus:border-[#153E43] focus:bg-white transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-5 text-sm font-bold text-white bg-[#153E43] hover:bg-[#0E282B] rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Project Inquiry</span>
              </button>
            </form>
          )}
        </div>

        {/* Lab Office Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-[#E2DDD2] rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm">
            <h3 className="text-lg font-bold text-[#153E43]">Office &amp; Lab Details</h3>

            <div className="space-y-4 text-sm text-[#153E43]/85">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C86445] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#153E43]">Laboratory Location</div>
                  <div className="text-xs text-[#153E43]/70 mt-0.5">
                    Dhaka, Bangladesh · South Asia Regional Testing Facility
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#C86445] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#153E43]">Direct Email</div>
                  <div className="text-xs text-[#153E43]/70 mt-0.5 font-mono">
                    editorial@hostmarc.com
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#C86445] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#153E43]">Operating Hours</div>
                  <div className="text-xs text-[#153E43]/70 mt-0.5">
                    Monday – Saturday: 9:00 AM – 10:00 PM (BST / UTC+6)
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2DDD2] text-xs text-[#153E43]/70 leading-relaxed">
              <p>
                <strong>Privacy Promise:</strong> We never share your email address or project details. We respond personally to every inquiry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
