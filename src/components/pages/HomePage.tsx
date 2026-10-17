import React, { useState } from 'react';
import { PageId, HostingPlan } from '../../types';
import { HOSTING_PLANS, BENCHMARK_REGIONS } from '../../data/comparisonsData';
import { HeroSculpture } from '../HeroSculpture';
import { ComparisonTable } from '../ComparisonTable';
import {
  ArrowRight,
  CheckCircle2,
  Server,
  Zap,
  ShieldCheck,
  Activity,
  Globe,
  Sliders,
  Sparkles,
  ExternalLink,
  Lock,
  Clock
} from 'lucide-react';
import { AFFILIATE_CONFIG } from '../../config/affiliates';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenModal }) => {
  const [selectedTerm, setSelectedTerm] = useState<48 | 24 | 12>(48);

  const getPlanPrice = (plan: HostingPlan) => {
    if (selectedTerm === 48) return plan.promoPrice;
    if (selectedTerm === 24) return Number((plan.promoPrice * 1.25).toFixed(2));
    return Number((plan.promoPrice * 1.6).toFixed(2));
  };

  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO SECTION (Matching Brandguideline.png) */}
      <section className="pt-10 sm:pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Display Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold tracking-tight text-[#153E43] leading-[1.08] text-balance">
                Make your <br className="hidden sm:inline" />
                mark online.
              </h1>

              {/* Sub-headline from Brandguideline.png */}
              <p className="text-lg sm:text-xl text-[#153E43]/85 font-medium leading-relaxed max-w-xl text-balance">
                Thoughtful websites. Reliable hosting. Measurable growth.
              </p>

              {/* Primary & Secondary CTAs from Brandguideline.png */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-7 py-3.5 bg-[#153E43] hover:bg-[#0D282C] text-white font-semibold text-sm rounded-lg shadow-sm transition-all text-center cursor-pointer"
                >
                  Start your project
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('services-overview');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#153E43] hover:text-[#C86445] transition-colors cursor-pointer"
                >
                  <span>Explore services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Two Customer Journeys Quick Banner */}
              <div className="pt-4 border-t border-[#E2DDD2] flex flex-wrap items-center gap-6 text-xs text-[#153E43]/70 font-medium">
                <span className="flex items-center gap-1.5 text-[#153E43] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#C86445]" />
                  Need a custom website?
                </span>
                <span>Services, maintenance &amp; growth retainers</span>
                <span className="hidden sm:inline">·</span>
                <button
                  onClick={() => onNavigate('reviews')}
                  className="text-[#C86445] hover:underline font-bold"
                >
                  Looking for Hostinger hosting? View guide →
                </button>
              </div>
            </div>

            {/* Right Hero Graphic: Tactile Architectural 3D Sculpture from Brandguideline.png */}
            <div className="lg:col-span-5 flex justify-center">
              <HeroSculpture className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 01 / 02 / 03 CORE SERVICES STRIP (Exact from Brandguideline.png) */}
      <section id="services-overview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-[#E2DDD2] pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* 01: Web design & development */}
            <div
              onClick={() => onNavigate('contact')}
              className="group space-y-3 cursor-pointer p-4 -mx-4 rounded-xl hover:bg-white/50 transition-colors"
            >
              <div className="text-sm font-mono font-bold text-[#C86445]">01</div>
              <h3 className="text-lg font-bold text-[#153E43] group-hover:text-[#C86445] transition-colors flex items-center justify-between">
                <span>Web design &amp; development</span>
                <span className="text-[#153E43] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </h3>
              <p className="text-sm text-[#153E43]/75 leading-relaxed">
                Beautiful, fast and functional websites built for your goals. Custom coded or WordPress, with zero bloat.
              </p>
            </div>

            {/* 02: Hosting & maintenance */}
            <div
              onClick={() => onNavigate('reviews')}
              className="group space-y-3 cursor-pointer p-4 -mx-4 rounded-xl hover:bg-white/50 transition-colors"
            >
              <div className="text-sm font-mono font-bold text-[#C86445]">02</div>
              <h3 className="text-lg font-bold text-[#153E43] group-hover:text-[#C86445] transition-colors flex items-center justify-between">
                <span>Hosting &amp; maintenance</span>
                <span className="text-[#153E43] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </h3>
              <p className="text-sm text-[#153E43]/75 leading-relaxed">
                Secure, reliable hosting and ongoing support, so you're always online. Hostinger guidance and zero-downtime migrations.
              </p>
            </div>

            {/* 03: SEO & digital marketing */}
            <div
              onClick={() => onNavigate('contact')}
              className="group space-y-3 cursor-pointer p-4 -mx-4 rounded-xl hover:bg-white/50 transition-colors"
            >
              <div className="text-sm font-mono font-bold text-[#C86445]">03</div>
              <h3 className="text-lg font-bold text-[#153E43] group-hover:text-[#C86445] transition-colors flex items-center justify-between">
                <span>SEO &amp; digital marketing</span>
                <span className="text-[#153E43] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </h3>
              <p className="text-sm text-[#153E43]/75 leading-relaxed">
                More visibility, more qualified traffic, more growth. Strategic search positioning and performance campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED WORK SECTION (Matching Brandguideline.png) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-[#E2DDD2] pt-12 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#C86445]">
                FEATURED WORK
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#153E43] mt-1">
                Thoughtful digital experiences.
              </h2>
            </div>
            <button
              onClick={() => onNavigate('about')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#153E43] hover:text-[#C86445] transition-colors cursor-pointer self-start sm:self-auto"
            >
              <span>View all work</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 3 Case Study Showcase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Project 1: Rivermere Studio */}
            <div
              onClick={() => onNavigate('about')}
              className="group bg-white rounded-2xl border border-[#E2DDD2] overflow-hidden p-6 hover:shadow-xl hover:border-[#153E43]/30 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] bg-[#E8E2D5] rounded-xl overflow-hidden mb-5 relative flex items-center justify-center p-6 border border-[#DDD5C6]">
                  {/* Architectural Graphic representation */}
                  <div className="w-full h-full bg-[#153E43] rounded-lg flex flex-col justify-end p-4 text-[#F3EFE6]">
                    <span className="text-[10px] font-mono tracking-widest uppercase opacity-75">Architecture Studio</span>
                    <span className="text-sm font-bold">Rivermere Modern Space</span>
                  </div>
                </div>
                <div className="text-xs font-mono text-[#C86445] font-semibold">Brand &amp; Website</div>
                <h4 className="text-lg font-bold text-[#153E43] group-hover:text-[#C86445] transition-colors mt-1">
                  Rivermere Studio →
                </h4>
                <p className="text-xs text-[#153E43]/70 mt-2 leading-relaxed">
                  Bespoke portfolio and inquiry funnel engineered for an award-winning residential architecture studio.
                </p>
              </div>
            </div>

            {/* Project 2: Evergreen Goods */}
            <div
              onClick={() => onNavigate('about')}
              className="group bg-white rounded-2xl border border-[#E2DDD2] overflow-hidden p-6 hover:shadow-xl hover:border-[#153E43]/30 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] bg-[#E8E2D5] rounded-xl overflow-hidden mb-5 relative flex items-center justify-center p-6 border border-[#DDD5C6]">
                  {/* Sustainable goods mockup */}
                  <div className="w-full h-full bg-[#20494E] rounded-lg flex flex-col justify-end p-4 text-[#F3EFE6]">
                    <span className="text-[10px] font-mono tracking-widest uppercase opacity-75">eCommerce &amp; Retail</span>
                    <span className="text-sm font-bold">Evergreen Goods Store</span>
                  </div>
                </div>
                <div className="text-xs font-mono text-[#C86445] font-semibold">Website &amp; Hosting</div>
                <h4 className="text-lg font-bold text-[#153E43] group-hover:text-[#C86445] transition-colors mt-1">
                  Evergreen Goods →
                </h4>
                <p className="text-xs text-[#153E43]/70 mt-2 leading-relaxed">
                  High-converting WooCommerce store with sub-second page loads, automated inventory sync, and dedicated hosting.
                </p>
              </div>
            </div>

            {/* Project 3: Lumen Atelier / Sunlitbd */}
            <div
              onClick={() => onNavigate('about')}
              className="group bg-white rounded-2xl border border-[#E2DDD2] overflow-hidden p-6 hover:shadow-xl hover:border-[#153E43]/30 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] bg-[#E8E2D5] rounded-xl overflow-hidden mb-5 relative flex items-center justify-center p-6 border border-[#DDD5C6]">
                  {/* Home & Interior Production Client */}
                  <div className="w-full h-full bg-[#153E43] rounded-lg flex flex-col justify-end p-4 text-[#F3EFE6] border-l-4 border-[#C86445]">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-amber-300">Production Client</span>
                    <span className="text-sm font-bold">Sunlitbd.com (Dhaka)</span>
                  </div>
                </div>
                <div className="text-xs font-mono text-[#C86445] font-semibold">Digital Platform &amp; Marketing</div>
                <h4 className="text-lg font-bold text-[#153E43] group-hover:text-[#C86445] transition-colors mt-1">
                  Sunlitbd.com →
                </h4>
                <p className="text-xs text-[#153E43]/70 mt-2 leading-relaxed">
                  Bangladeshi interior design &amp; home services portal with live quotation engine and high-availability Singapore hosting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DEDICATED HOSTING HUB SECTION (Integrated in Limestone & Petrol aesthetic) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#E2DDD2] rounded-3xl p-8 sm:p-12 shadow-sm space-y-12">
          {/* Hosting Section Title */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E2DDD2] pb-8">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C86445]">
                HOSTING GUIDANCE &amp; DEALS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#153E43] tracking-tight">
                Recommended Hosting Infrastructure
              </h2>
              <p className="text-sm text-[#153E43]/75 max-w-xl">
                We independently benchmark Hostinger’s shared and cloud servers so you get fast, reliable hosting with zero predatory surprises.
              </p>
            </div>

            {/* Term selector tabs */}
            <div className="flex items-center p-1 bg-[#F3EFE6] border border-[#E2DDD2] rounded-xl text-xs font-semibold self-start md:self-auto">
              <button
                onClick={() => setSelectedTerm(48)}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  selectedTerm === 48
                    ? 'bg-[#153E43] text-white shadow-sm'
                    : 'text-[#153E43]/70 hover:text-[#153E43]'
                }`}
              >
                48 Months (78% Off)
              </button>
              <button
                onClick={() => setSelectedTerm(24)}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  selectedTerm === 24
                    ? 'bg-[#153E43] text-white shadow-sm'
                    : 'text-[#153E43]/70 hover:text-[#153E43]'
                }`}
              >
                24 Months
              </button>
              <button
                onClick={() => setSelectedTerm(12)}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  selectedTerm === 12
                    ? 'bg-[#153E43] text-white shadow-sm'
                    : 'text-[#153E43]/70 hover:text-[#153E43]'
                }`}
              >
                12 Months
              </button>
            </div>
          </div>

          {/* 3 Hostinger Plans in Limestone / White Styling */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {HOSTING_PLANS.map((plan) => {
              const price = getPlanPrice(plan);
              return (
                <div
                  key={plan.id}
                  className={`relative rounded-2xl flex flex-col justify-between p-6 sm:p-8 transition-all ${
                    plan.popular
                      ? 'bg-[#F3EFE6] border-2 border-[#153E43] shadow-md'
                      : 'bg-white border border-[#E2DDD2] hover:border-[#153E43]/40'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-6 bg-[#C86445] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full">
                      Recommended for Business
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-bold text-[#153E43]">{plan.name}</h3>
                    <p className="text-xs text-[#153E43]/70 mt-1 min-h-[32px]">
                      {plan.tagline}
                    </p>

                    <div className="my-5 pb-5 border-b border-[#E2DDD2]">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-extrabold text-[#153E43] font-mono">
                          ${price}
                        </span>
                        <span className="text-xs text-[#153E43]/70">/ month</span>
                        <span className="text-xs text-[#153E43]/50 line-through font-mono">
                          ${plan.originalPrice}/mo
                        </span>
                      </div>
                      <div className="text-[11px] text-[#C86445] font-semibold mt-1">
                        Renews at ${plan.renewalPrice}/mo after initial term
                      </div>
                    </div>

                    <div className="space-y-2.5 mb-6 text-xs text-[#153E43]/85">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#153E43] shrink-0" />
                        <span><strong>{plan.features.websites}</strong> hosted</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#153E43] shrink-0" />
                        <span>{plan.features.storage} ({plan.features.storageType})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#153E43] shrink-0" />
                        <span>{plan.features.domain}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#153E43] shrink-0" />
                        <span>{plan.features.ssl}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#153E43] shrink-0" />
                        <span>{plan.features.backups}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={onOpenModal}
                    className={`w-full py-2.5 px-4 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      plan.popular
                        ? 'bg-[#153E43] text-white hover:bg-[#0D282C]'
                        : 'border border-[#153E43] text-[#153E43] hover:bg-[#153E43] hover:text-white'
                    }`}
                  >
                    <span>Claim 78% Discount</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Quick Tools Access Bar */}
          <div className="pt-6 border-t border-[#E2DDD2] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick={() => onNavigate('tools')}
              className="p-4 rounded-xl bg-[#F3EFE6] border border-[#E2DDD2] hover:border-[#153E43] transition-all text-left cursor-pointer group"
            >
              <div className="text-xs font-mono font-bold text-[#C86445]">TOOL 01</div>
              <h4 className="text-sm font-bold text-[#153E43] mt-1 group-hover:text-[#C86445] transition-colors">
                TCO Renewal Calculator →
              </h4>
              <p className="text-[11px] text-[#153E43]/70 mt-1">Estimate exact 1–6 year costs vs GoDaddy.</p>
            </button>

            <button
              onClick={() => onNavigate('tools')}
              className="p-4 rounded-xl bg-[#F3EFE6] border border-[#E2DDD2] hover:border-[#153E43] transition-all text-left cursor-pointer group"
            >
              <div className="text-xs font-mono font-bold text-[#C86445]">TOOL 02</div>
              <h4 className="text-sm font-bold text-[#153E43] mt-1 group-hover:text-[#C86445] transition-colors">
                Server Resource Sizer →
              </h4>
              <p className="text-[11px] text-[#153E43]/70 mt-1">Calculate RAM/CPU for traffic volume.</p>
            </button>

            <button
              onClick={() => onNavigate('migration')}
              className="p-4 rounded-xl bg-[#F3EFE6] border border-[#E2DDD2] hover:border-[#153E43] transition-all text-left cursor-pointer group"
            >
              <div className="text-xs font-mono font-bold text-[#C86445]">TOOL 03</div>
              <h4 className="text-sm font-bold text-[#153E43] mt-1 group-hover:text-[#C86445] transition-colors">
                6-Step Migration Guide →
              </h4>
              <p className="text-[11px] text-[#153E43]/70 mt-1">Zero downtime WordPress transfer checklist.</p>
            </button>

            <button
              onClick={() => onNavigate('deals')}
              className="p-4 rounded-xl bg-[#F3EFE6] border border-[#E2DDD2] hover:border-[#153E43] transition-all text-left cursor-pointer group"
            >
              <div className="text-xs font-mono font-bold text-[#C86445]">TOOL 04</div>
              <h4 className="text-sm font-bold text-[#153E43] mt-1 group-hover:text-[#C86445] transition-colors">
                Verified Coupons Hub →
              </h4>
              <p className="text-[11px] text-[#153E43]/70 mt-1">Active October promo codes (HOSTMARC).</p>
            </button>
          </div>
        </div>
      </section>

      {/* 5. WORKING PROCESS SECTION (from Brand Foundation) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 border-t border-[#E2DDD2] pt-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C86445]">
              HOW WE WORK
            </span>
            <h2 className="text-3xl font-extrabold text-[#153E43] tracking-tight">
              A disciplined, transparent process.
            </h2>
            <p className="text-sm text-[#153E43]/75 leading-relaxed">
              Whether building a new platform or transitioning your server infrastructure, we follow an engineering-first roadmap with clear milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E2DDD2] space-y-2">
              <span className="font-mono text-sm font-bold text-[#C86445]">01. Discovery</span>
              <h4 className="text-base font-bold text-[#153E43]">Scope &amp; Architecture</h4>
              <p className="text-xs text-[#153E43]/70 leading-relaxed">
                We clarify your business objectives, target audience, traffic expectations, and hosting prerequisites before writing code.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E2DDD2] space-y-2">
              <span className="font-mono text-sm font-bold text-[#C86445]">02. Design</span>
              <h4 className="text-base font-bold text-[#153E43]">Restrained Craftsmanship</h4>
              <p className="text-xs text-[#153E43]/70 leading-relaxed">
                Clean, accessible layouts with domain-authentic typography and tactile materials. Zero generic templates.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E2DDD2] space-y-2">
              <span className="font-mono text-sm font-bold text-[#C86445]">03. Build</span>
              <h4 className="text-base font-bold text-[#153E43]">Fast, Clean Execution</h4>
              <p className="text-xs text-[#153E43]/70 leading-relaxed">
                Semantic HTML, responsive CSS, and minimal JavaScript overhead for instantaneous Core Web Vitals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E2DDD2] space-y-2">
              <span className="font-mono text-sm font-bold text-[#C86445]">04. Launch</span>
              <h4 className="text-base font-bold text-[#153E43]">Zero-Downtime Deployment</h4>
              <p className="text-xs text-[#153E43]/70 leading-relaxed">
                Staging verification, DNS TTL management, automated SSL installation, and LiteSpeed caching optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION / ENQUIRY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#153E43] text-white rounded-3xl p-8 sm:p-14 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to make your mark online?
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Tell us about your upcoming website project, or ask us for hosting guidance. We respond to inquiries within 4 business hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#C86445] hover:bg-[#B05337] text-white font-semibold text-sm rounded-lg shadow-sm transition-all cursor-pointer text-center"
            >
              Start your project
            </button>
            <button
              onClick={onOpenModal}
              className="w-full sm:w-auto px-6 py-3.5 border border-white/30 hover:border-white text-white font-semibold text-sm rounded-lg transition-all cursor-pointer text-center"
            >
              Explore Hosting Deals
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
