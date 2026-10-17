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
  ExternalLink,
  Lock,
  Clock,
  Sparkles
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
      {/* 1. HERO SECTION (Exact Typography & Spatial Alignment from Brandguideline.png) */}
      <section className="pt-8 sm:pt-14 lg:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Hero Content: 7 Columns */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7">
              {/* Quiet unboxed descriptor / brand foundation */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C86445]">
                <span>HostMarc Studio</span>
                <span aria-hidden="true" className="text-[#153E43]/30">·</span>
                <span className="text-[#153E43]/70">Websites · Hosting · Growth</span>
              </div>

              {/* Display Headline in Plus Jakarta Sans */}
              <h1 className="text-4xl sm:text-5xl lg:text-[62px] xl:text-[68px] font-black tracking-[-0.03em] text-[#153E43] leading-[1.06] uppercase">
                MAKE YOUR MARK ONLINE
              </h1>

              {/* SEO-Friendly Value Proposition & Clear Description */}
              <p className="text-lg sm:text-xl text-[#153E43]/90 font-semibold leading-relaxed max-w-xl">
                Reliable Hosting, Thoughtful Website and measurable Growth.
              </p>

              {/* Primary & Secondary Dual CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-7 py-3.5 bg-[#153E43] hover:bg-[#0D282C] text-white font-semibold text-sm rounded-lg shadow-sm transition-all text-center cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Explore Web Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('reviews')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#153E43] hover:text-[#C86445] transition-colors cursor-pointer border border-[#153E43]/20 hover:border-[#153E43]/40 rounded-lg bg-white/40"
                >
                  <span>Inspect Hosting Hub</span>
                  <span className="text-xs font-mono font-bold text-[#C86445]">9.4 / 10</span>
                </button>
              </div>

              {/* Two Distinct Business Paths Footnote */}
              <div className="pt-4 border-t border-[#E2DDD2] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#153E43]/75">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#153E43]" />
                  <span className="font-semibold text-[#153E43]">Client Services:</span>
                  <span>Bespoke websites &amp; SEO</span>
                </div>
                <span className="hidden sm:inline text-[#E2DDD2]">|</span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C86445]" />
                  <span className="font-semibold text-[#153E43]">Hosting Hub:</span>
                  <button
                    onClick={() => onNavigate('reviews')}
                    className="text-[#C86445] hover:underline font-medium"
                  >
                    Verified Hostinger promo &amp; benchmarks →
                  </button>
                </div>
              </div>
            </div>

            {/* Right Hero Graphic: High-Resolution 3D Interlocking Sculpture from Brand Guideline */}
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
              className="group space-y-3 cursor-pointer p-5 -mx-5 rounded-xl hover:bg-white/60 transition-colors border border-transparent hover:border-[#E2DDD2]"
            >
              <div className="text-sm font-mono font-bold text-[#C86445]">01</div>
              <h3 className="text-lg font-bold text-[#153E43] group-hover:text-[#C86445] transition-colors flex items-center justify-between">
                <span>Web design &amp; development</span>
                <span className="text-[#153E43] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </h3>
              <p className="text-sm text-[#153E43]/75 leading-relaxed">
                Fast, responsive, and functional websites built for your business goals. Clean code, optimal Core Web Vitals, and zero software bloat.
              </p>
            </div>

            {/* 02: Hosting & maintenance */}
            <div
              onClick={() => onNavigate('reviews')}
              className="group space-y-3 cursor-pointer p-5 -mx-5 rounded-xl hover:bg-white/60 transition-colors border border-transparent hover:border-[#E2DDD2]"
            >
              <div className="text-sm font-mono font-bold text-[#C86445]">02</div>
              <h3 className="text-lg font-bold text-[#153E43] group-hover:text-[#C86445] transition-colors flex items-center justify-between">
                <span>Hosting &amp; maintenance</span>
                <span className="text-[#153E43] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </h3>
              <p className="text-sm text-[#153E43]/75 leading-relaxed">
                Secure, reliable hosting and proactive support so you're always online. Transparent Hostinger plan matching and zero-downtime migrations.
              </p>
            </div>

            {/* 03: SEO & digital marketing */}
            <div
              onClick={() => onNavigate('contact')}
              className="group space-y-3 cursor-pointer p-5 -mx-5 rounded-xl hover:bg-white/60 transition-colors border border-transparent hover:border-[#E2DDD2]"
            >
              <div className="text-sm font-mono font-bold text-[#C86445]">03</div>
              <h3 className="text-lg font-bold text-[#153E43] group-hover:text-[#C86445] transition-colors flex items-center justify-between">
                <span>SEO &amp; digital marketing</span>
                <span className="text-[#153E43] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </h3>
              <p className="text-sm text-[#153E43]/75 leading-relaxed">
                Higher organic search visibility, qualified inbound leads, and real ROI. Strategic search positioning and technical performance optimization.
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
              <span>View all work &amp; case studies</span>
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
                <div className="aspect-[16/10] bg-[#E8E2D5] rounded-xl overflow-hidden mb-5 relative border border-[#DDD5C6]">
                  <img
                    src="/src/assets/images/work_rivermere_arch_1792279543490.jpg"
                    alt="Rivermere Modern Architecture Studio"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3.5">
                    <span className="text-[11px] font-mono font-bold text-white tracking-wider uppercase">
                      Architecture Studio
                    </span>
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

            {/* Project 2: emarket247.shop */}
            <div
              onClick={() => onNavigate('about')}
              className="group bg-white rounded-2xl border border-[#E2DDD2] overflow-hidden p-6 hover:shadow-xl hover:border-[#153E43]/30 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] bg-[#E8E2D5] rounded-xl overflow-hidden mb-5 relative border border-[#DDD5C6]">
                  <img
                    src="/src/assets/images/work_evergreen_goods_1792279543971.jpg"
                    alt="emarket247.shop eCommerce Platform"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3.5">
                    <span className="text-[11px] font-mono font-bold text-white tracking-wider uppercase">
                      AI Vibe Coded Store
                    </span>
                  </div>
                </div>
                <div className="text-xs font-mono text-[#C86445] font-semibold">eCommerce &amp; AI Tools</div>
                <h4 className="text-lg font-bold text-[#153E43] group-hover:text-[#C86445] transition-colors mt-1">
                  emarket247.shop →
                </h4>
                <p className="text-xs text-[#153E43]/70 mt-2 leading-relaxed">
                  High-speed e-commerce retail portal engineered with AI vibe coding, rapid microservices, dynamic inventory, and sub-second checkout.
                </p>
              </div>
            </div>

            {/* Project 3: Sunlitbd.com */}
            <div
              onClick={() => onNavigate('about')}
              className="group bg-white rounded-2xl border border-[#E2DDD2] overflow-hidden p-6 hover:shadow-xl hover:border-[#153E43]/30 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] bg-[#E8E2D5] rounded-xl overflow-hidden mb-5 relative border border-[#DDD5C6]">
                  <img
                    src="/src/assets/images/work_sunlitbd_interior_1792279543981.jpg"
                    alt="Sunlitbd.com Interior Design & MEP Infrastructure"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3.5">
                    <span className="text-[11px] font-mono font-bold text-white tracking-wider uppercase">
                      Corporate Client (Dhaka)
                    </span>
                  </div>
                </div>
                <div className="text-xs font-mono text-[#C86445] font-semibold">Interior Design &amp; MEP Infrastructure</div>
                <h4 className="text-lg font-bold text-[#153E43] group-hover:text-[#C86445] transition-colors mt-1">
                  Sunlitbd.com →
                </h4>
                <p className="text-xs text-[#153E43]/70 mt-2 leading-relaxed">
                  Bangladeshi interior design &amp; MEP engineering firm portfolio (IFIC Bank projects) with 96/100 mobile speed and LiteSpeed infrastructure.
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
              onClick={() => onNavigate('renewal-costs')}
              className="p-4 rounded-xl border border-[#E2DDD2] hover:border-[#153E43] bg-[#F3EFE6]/50 hover:bg-[#F3EFE6] transition-all text-left flex items-start gap-3 cursor-pointer group"
            >
              <div className="p-2 bg-white rounded-lg border border-[#E2DDD2] text-[#153E43] group-hover:bg-[#153E43] group-hover:text-white transition-colors">
                <Sliders className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#153E43]">3-Year Cost Calculator</div>
                <div className="text-[11px] text-[#153E43]/70 mt-0.5">Expose hidden renewal rate hikes</div>
              </div>
            </button>

            <button
              onClick={() => onNavigate('tools')}
              className="p-4 rounded-xl border border-[#E2DDD2] hover:border-[#153E43] bg-[#F3EFE6]/50 hover:bg-[#F3EFE6] transition-all text-left flex items-start gap-3 cursor-pointer group"
            >
              <div className="p-2 bg-white rounded-lg border border-[#E2DDD2] text-[#153E43] group-hover:bg-[#153E43] group-hover:text-white transition-colors">
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#153E43]">30-Second Plan Matcher</div>
                <div className="text-[11px] text-[#153E43]/70 mt-0.5">Answer 3 questions for optimal tier</div>
              </div>
            </button>

            <button
              onClick={() => onNavigate('tools')}
              className="p-4 rounded-xl border border-[#E2DDD2] hover:border-[#153E43] bg-[#F3EFE6]/50 hover:bg-[#F3EFE6] transition-all text-left flex items-start gap-3 cursor-pointer group"
            >
              <div className="p-2 bg-white rounded-lg border border-[#E2DDD2] text-[#153E43] group-hover:bg-[#153E43] group-hover:text-white transition-colors">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#153E43]">Global TTFB Telemetry</div>
                <div className="text-[11px] text-[#153E43]/70 mt-0.5">Test real node latency across continents</div>
              </div>
            </button>

            <button
              onClick={() => onNavigate('migration')}
              className="p-4 rounded-xl border border-[#E2DDD2] hover:border-[#153E43] bg-[#F3EFE6]/50 hover:bg-[#F3EFE6] transition-all text-left flex items-start gap-3 cursor-pointer group"
            >
              <div className="p-2 bg-white rounded-lg border border-[#E2DDD2] text-[#153E43] group-hover:bg-[#153E43] group-hover:text-white transition-colors">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#153E43]">Zero-Downtime Migration</div>
                <div className="text-[11px] text-[#153E43]/70 mt-0.5">Step-by-step cPanel to hPanel checklist</div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* 5. LIVE SERVER TELEMETRY HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#153E43] rounded-3xl p-8 sm:p-12 text-[#F3EFE6] space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#255D64] pb-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C86445]">
                HARDWARE BENCHMARKS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1">
                Live Global Response Times (TTFB)
              </h2>
            </div>
            <p className="text-xs text-[#F3EFE6]/70 max-w-md">
              Tested on production LiteSpeed Enterprise servers running WordPress 6.7 with WooCommerce under active cache.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {BENCHMARK_REGIONS.slice(0, 6).map((region) => (
              <div
                key={region.region}
                className="bg-[#0D282C] border border-[#255D64] rounded-xl p-4 space-y-2"
              >
                <div className="flex items-center justify-between text-xs text-[#F3EFE6]/70">
                  <span className="font-semibold text-[#F3EFE6]">{region.region}</span>
                  <span className="text-sm">{region.flag}</span>
                </div>
                <div className="text-2xl font-extrabold font-mono text-[#F3EFE6]">
                  {region.hostingerTtfb}ms
                </div>
                <div className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                  <span>●</span>
                  <span>{region.hostingerTtfb < 120 ? 'Optimal (A+)' : 'Fast (A)'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. COMPARISON TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C86445]">
              DIRECT COMPARISON
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#153E43] tracking-tight">
              Hostinger vs. Traditional Shared Hosts
            </h2>
          </div>
          <ComparisonTable onOpenModal={onOpenModal} />
        </div>
      </section>
    </div>
  );
};
