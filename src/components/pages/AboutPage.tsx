import React from 'react';
import { PageId } from '../../types';
import {
  ShieldCheck,
  Server,
  Cpu,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  DollarSign,
  Activity,
  Layers,
  Globe2,
  Sparkles,
  Terminal,
  Zap
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenModal }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* 1. Header & Breadcrumb */}
      <div className="space-y-4 border-b border-[#E2DDD2] pb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#153E43]/5 border border-[#153E43]/15 text-[#153E43] text-xs font-mono font-bold tracking-wider uppercase">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C86445]" />
          Editorial Integrity &amp; Lab Standards
        </div>
        
        <h1 className="text-3xl sm:text-5xl font-black text-[#153E43] tracking-tight font-sans">
          About Farhan Momen &amp; HostMarc
        </h1>
        
        <p className="text-[#153E43]/85 text-base sm:text-xl leading-relaxed max-w-3xl font-medium">
          Why we founded HostMarc: to bring raw, verifiable hardware telemetry to an industry plagued by synthetic marketing claims and sponsored recommendations.
        </p>
      </div>

      {/* 2. Farhan Momen Profile Section */}
      <div className="bg-white border border-[#E2DDD2] rounded-2xl p-6 sm:p-10 shadow-xs relative overflow-hidden">
        {/* Subtle background circuit accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#153E43]/5 to-transparent rounded-bl-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          {/* Avatar & Badges */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
            <div className="relative">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-[#153E43] p-1.5 shadow-xl shadow-[#153E43]/15 border-2 border-[#153E43]">
                <div className="w-full h-full bg-[#1A4B51] rounded-[14px] flex flex-col items-center justify-center text-[#F3EFE6] border border-white/20">
                  <span className="text-4xl font-black font-mono tracking-tighter">FM</span>
                  <span className="text-[10px] font-mono tracking-widest text-[#C86445] uppercase font-bold mt-1">
                    LAB DIRECTOR
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[#C86445] text-white p-2 rounded-xl shadow-md" title="Verified Web Infrastructure Specialist">
                <Terminal className="w-4 h-4" />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#153E43]">Farhan Momen</h2>
              <p className="text-xs text-[#C86445] font-mono font-bold mt-1 uppercase tracking-wider">
                Senior Web Infrastructure Specialist &amp; Testing Director
              </p>
              <div className="flex flex-wrap gap-2 mt-3 justify-center sm:justify-start">
                <span className="inline-flex items-center text-[11px] font-mono bg-[#F3EFE6] text-[#153E43] px-2.5 py-1 rounded border border-[#E2DDD2] font-semibold">
                  10+ Yrs Server Tuning
                </span>
                <span className="inline-flex items-center text-[11px] font-mono bg-[#F3EFE6] text-[#153E43] px-2.5 py-1 rounded border border-[#E2DDD2] font-semibold">
                  Dhaka &amp; Global Nodes
                </span>
              </div>
            </div>
          </div>

          {/* Bio text */}
          <div className="lg:col-span-8 space-y-4 text-[#153E43]/85 text-sm sm:text-base leading-relaxed">
            <div className="inline-block px-2.5 py-0.5 rounded bg-[#C86445]/10 text-[#C86445] text-xs font-mono font-bold uppercase tracking-wider mb-1">
              Farhan Momen - Senior Web Infrastructure Specialist
            </div>
            
            <p className="text-base sm:text-lg font-medium text-[#153E43]">
              With over 10 years of hands-on experience tuning high-load web architectures, Linux server kernels, LiteSpeed web engines, and MySQL query performance, Farhan leads the technical evaluation laboratory at HostMarc.
            </p>
            
            <p>
              He holds degrees in computer science and works with international development teams across South Asia, North America, and Europe.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#E2DDD2]/80">
              <div className="p-3 rounded-lg bg-[#F8F5EE] border border-[#E2DDD2]">
                <div className="text-xs text-[#153E43]/70 font-mono">Specialization</div>
                <div className="text-sm font-bold text-[#153E43] mt-0.5">LiteSpeed &amp; NVMe</div>
              </div>
              <div className="p-3 rounded-lg bg-[#F8F5EE] border border-[#E2DDD2]">
                <div className="text-xs text-[#153E43]/70 font-mono">Active Telemetry</div>
                <div className="text-sm font-bold text-[#153E43] mt-0.5">7 Global Probes</div>
              </div>
              <div className="p-3 rounded-lg bg-[#F8F5EE] border border-[#E2DDD2] col-span-2 sm:col-span-1">
                <div className="text-xs text-[#153E43]/70 font-mono">Benchmark Focus</div>
                <div className="text-sm font-bold text-[#153E43] mt-0.5">Sub-150ms TTFB</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Our 3 Core Testing Principles */}
      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C86445]">
            Uncompromising Methodologies
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#153E43]">
            Our 3 Core Testing Principles
          </h2>
          <p className="text-sm sm:text-base text-[#153E43]/80 max-w-2xl">
            We reject the pay-to-play affiliate model that plagues web hosting reviews. Every rating on HostMarc is backed by this three-point discipline:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Principle 1 */}
          <div className="bg-white border border-[#E2DDD2] rounded-xl p-6 sm:p-7 space-y-4 shadow-xs relative flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#153E43]/10 text-[#153E43] flex items-center justify-center font-mono font-bold text-sm">
                01
              </div>
              <h3 className="text-lg font-bold text-[#153E43] leading-snug">
                We Purchase Our Own Hosting Accounts
              </h3>
              <p className="text-sm text-[#153E43]/80 leading-relaxed">
                We never accept VIP &ldquo;review accounts&rdquo; configured by hosting marketing departments with artificial CPU prioritizations. Every host reviewed is bought using independent payment methods under anonymous buyer personas.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E2DDD2] flex items-center gap-2 text-xs font-mono text-[#153E43]/70">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>100% Self-Funded Subscriptions</span>
            </div>
          </div>

          {/* Principle 2 */}
          <div className="bg-white border border-[#E2DDD2] rounded-xl p-6 sm:p-7 space-y-4 shadow-xs relative flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#153E43]/10 text-[#153E43] flex items-center justify-center font-mono font-bold text-sm">
                02
              </div>
              <h3 className="text-lg font-bold text-[#153E43] leading-snug">
                Real Traffic Simulations
              </h3>
              <p className="text-sm text-[#153E43]/80 leading-relaxed">
                We deploy live WordPress websites containing realistic dynamic WooCommerce queries, media libraries, and active databases. We stress test them with automated concurrent visitor sessions using k6 and WebPageTest.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E2DDD2] flex items-center gap-2 text-xs font-mono text-[#153E43]/70">
              <Activity className="w-4 h-4 text-[#C86445] shrink-0" />
              <span>Automated k6 Load Concurrency</span>
            </div>
          </div>

          {/* Principle 3 */}
          <div className="bg-white border border-[#E2DDD2] rounded-xl p-6 sm:p-7 space-y-4 shadow-xs relative flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#153E43]/10 text-[#153E43] flex items-center justify-center font-mono font-bold text-sm">
                03
              </div>
              <h3 className="text-lg font-bold text-[#153E43] leading-snug">
                Total Renewal Price Transparency
              </h3>
              <p className="text-sm text-[#153E43]/80 leading-relaxed">
                If a host advertises $2.95/mo but charges $17.99/mo upon renewal or demands $79.99 for SSL certificates, we expose the exact financial impact in our 3-year cost calculators.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E2DDD2] flex items-center gap-2 text-xs font-mono text-[#153E43]/70">
              <DollarSign className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Zero Concealed Price Multipliers</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Live Production Platforms & Case Studies */}
      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C86445]">
            Real-World Validation
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#153E43]">
            Live Production Platforms &amp; Case Studies
          </h2>
          <p className="text-sm sm:text-base text-[#153E43]/85 leading-relaxed max-w-3xl">
            In addition to benchmarking global server infrastructure, Farhan actively architects and engineers high-speed live production websites and affiliate platforms for businesses and creators worldwide:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Case Study 1: Sunlitbd.com */}
          <div className="bg-white border border-[#E2DDD2] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs hover:border-[#153E43]/40 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C86445] bg-[#C86445]/10 px-2.5 py-1 rounded">
                  Live Corporate Client
                </span>
                <span className="text-xs font-mono text-emerald-800 font-bold bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded">
                  96/100 Mobile Speed
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-[#153E43]">Sunlitbd.com</h3>
                <p className="text-sm text-[#153E43]/85 leading-relaxed mt-2">
                  Corporate website &amp; project portfolio for a premier interior design and MEP infrastructure engineering firm (handling IFIC Bank and institutional projects).
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F8F5EE] border border-[#E2DDD2] space-y-1.5">
                <div className="text-[11px] font-mono font-bold text-[#153E43]/70 uppercase">
                  Technical Stack:
                </div>
                <div className="text-xs font-mono text-[#153E43] font-semibold">
                  WordPress · LiteSpeed · Optimized WebP Pipeline (96/100 Mobile Speed)
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2DDD2]">
              <a
                href="https://sunlitbd.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#153E43] hover:text-[#C86445] transition-colors group"
              >
                <span>Inspect Live Site (sunlitbd.com)</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Case Study 2: Ural-Travel */}
          <div className="bg-white border border-[#E2DDD2] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs hover:border-[#153E43]/40 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C86445] bg-[#C86445]/10 px-2.5 py-1 rounded">
                  Live Affiliate Engine
                </span>
                <span className="text-xs font-mono text-emerald-800 font-bold bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded">
                  100/100 PageSpeed
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-[#153E43]">Ural-Travel</h3>
                <p className="text-sm text-[#153E43]/85 leading-relaxed mt-2">
                  High-speed travel booking guide, flight price tracking, and visa checklist authority portal built with modern AI vibe coding.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F8F5EE] border border-[#E2DDD2] space-y-1.5">
                <div className="text-[11px] font-mono font-bold text-[#153E43]/70 uppercase">
                  Technical Stack:
                </div>
                <div className="text-xs font-mono text-[#153E43] font-semibold">
                  Cloudflare Pages Edge · AVIF Engine · 100/100 Google PageSpeed
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2DDD2]">
              <a
                href="https://ural-travel.pages.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#153E43] hover:text-[#C86445] transition-colors group"
              >
                <span>Inspect Live Portal (ural-travel.pages.dev)</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Editorial Independence & Affiliate Policy */}
      <div className="bg-[#153E43] text-[#F3EFE6] rounded-2xl p-6 sm:p-10 space-y-5 shadow-lg border border-[#0E282B]">
        <div className="flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-widest text-[#C86445]">
          <ShieldCheck className="w-4 h-4 text-[#C86445]" />
          Editorial Independence &amp; Affiliate Policy
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F3EFE6]">
          How HostMarc Sustains Its Operations
        </h2>

        <div className="space-y-4 text-sm sm:text-base text-[#F3EFE6]/85 leading-relaxed">
          <p>
            HostMarc is free for readers. To sustain our server purchasing budgets and testing node operations, we participate in affiliate referral partnerships with web hosts, domain registrars, and cloud services.
          </p>
          <p>
            When you purchase a plan through our verified coupon links, we may earn a referral fee at zero extra cost to you. However, our technical ratings are dictated strictly by raw telemetry: if a host fails uptime tests or throttles database queries, they receive poor marks regardless of affiliate commission payout.
          </p>
        </div>

        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-[#F3EFE6]/70 font-mono">
          <span>Tested on Live Singapore, Frankfurt &amp; USA Nodes</span>
          <button
            onClick={() => onNavigate('disclosure')}
            className="text-white hover:text-[#C86445] underline transition-colors cursor-pointer"
          >
            Read Full FTC &amp; Affiliate Disclosure →
          </button>
        </div>
      </div>

      {/* 6. Need Architecture Advice or a Consultation? */}
      <div className="bg-[#FAF8F3] border-2 border-[#153E43]/20 rounded-2xl p-8 sm:p-12 text-center space-y-6">
        <div className="w-12 h-12 mx-auto rounded-full bg-[#153E43] text-[#F3EFE6] flex items-center justify-center shadow-md">
          <Cpu className="w-6 h-6" />
        </div>

        <div className="space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#153E43]">
            Need Architecture Advice or a Consultation?
          </h2>
          <p className="text-sm sm:text-base text-[#153E43]/85 leading-relaxed">
            Farhan provides tailored hosting and performance audits for growing e-commerce businesses and web development agencies.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#153E43] text-[#F3EFE6] font-bold text-sm hover:bg-[#1A4B51] transition-all shadow-md cursor-pointer group"
          >
            <span>Contact Infrastructure Team</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onNavigate('tools')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white border border-[#E2DDD2] text-[#153E43] font-bold text-sm hover:bg-[#F3EFE6] transition-colors cursor-pointer"
          >
            <Activity className="w-4 h-4 text-[#C86445]" />
            <span>Test Free Architecture Utilities</span>
          </button>
        </div>
      </div>

    </div>
  );
};
