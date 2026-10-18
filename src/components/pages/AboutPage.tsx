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
  Zap,
  ShoppingBag,
  Users,
  Award
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
      <div className="bg-white border border-[#E2DDD2] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden">
        {/* Subtle background ambient glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#153E43]/5 via-[#C86445]/5 to-transparent rounded-bl-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
          
          {/* Column 1: Portrait Photo & Credential Highlights (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col space-y-5">
            {/* Image Card Frame */}
            <div className="relative group rounded-2xl overflow-hidden border-2 border-[#153E43]/15 shadow-xl shadow-[#153E43]/10 bg-[#153E43]">
              <img
                src="/images/farhan_momen.png"
                alt="Farhan Momen - Senior Web Infrastructure Specialist & Testing Director"
                className="w-full h-[420px] sm:h-[480px] lg:h-[480px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/Farhan Momeen.png';
                }}
              />
              
              {/* Bottom gradient overlay for readability of name & role badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2225] via-transparent to-transparent opacity-80 pointer-events-none" />
              
              {/* Badges on image */}
              <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#153E43]/90 text-white backdrop-blur-md text-[11px] font-mono font-bold tracking-wider uppercase border border-white/20 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Founder &amp; Testing Director
                </span>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-2xl sm:text-3xl font-black font-sans leading-tight">
                  Farhan Momen
                </p>
                <p className="text-xs text-[#C86445] font-mono font-bold uppercase tracking-wider mt-1">
                  Senior Web Infrastructure Specialist &amp; Testing Director
                </p>
              </div>
            </div>

            {/* Quick Action & Official Portfolio Card */}
            <div className="bg-[#F8F5EE] border border-[#E2DDD2] rounded-xl p-4 sm:p-5 space-y-3.5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-mono font-bold text-[#153E43] uppercase tracking-wider">
                    Personal Portfolio
                  </div>
                  <div className="text-[11px] text-[#153E43]/70 font-mono">
                    Live works &amp; client builds
                  </div>
                </div>
                <a
                  href="https://marc.pages.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#153E43] hover:bg-[#1A4B51] text-[#F3EFE6] text-xs font-mono font-bold tracking-wide transition-all shadow-xs hover:shadow-md"
                >
                  <span>marc.pages.dev</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#C86445]" />
                </a>
              </div>

              <div className="pt-2.5 border-t border-[#E2DDD2] flex items-center justify-between text-xs text-[#153E43]/80 font-mono">
                <span className="inline-flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-[#C86445]" />
                  <span>Gaotek Intern Alum</span>
                </span>
                <span className="text-[#153E43] font-bold">10+ Yrs Web Experience</span>
              </div>
            </div>

            {/* Freelancer Network Pill */}
            <div className="p-3.5 rounded-xl bg-white border border-[#E2DDD2] text-xs text-[#153E43]/85 leading-relaxed flex items-start gap-2.5">
              <Users className="w-4 h-4 text-[#C86445] shrink-0 mt-0.5" />
              <span>
                <strong>One-Person Agency with a Collective Reach:</strong> I provide single-point accountability, backed by a vetted circle of specialist freelancers available on demand for custom UI, deep APIs, and niche marketing.
              </span>
            </div>
          </div>

          {/* Column 2: Biography & Philosophy (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-5 text-[#153E43]/90 text-sm sm:text-base leading-relaxed">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#C86445]/10 text-[#C86445] text-xs font-mono font-bold uppercase tracking-wider">
              <Terminal className="w-3.5 h-3.5" />
              Self-Made Developer · Infrastructure Specialist
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-[#153E43] tracking-tight font-sans leading-tight">
              Helping Small Businesses Thrive with High-Speed Web Infrastructure &amp; E-Commerce
            </h2>
            
            <p className="text-base sm:text-lg font-medium text-[#153E43] leading-relaxed">
              I am a freelance website developer who entered this industry without a formal academic background — learning every layer of web systems through relentless curiosity, direct experimentation, and over 10 years of real-world trials.
            </p>
            
            <p>
              Throughout my journey, I have had the privilege of collaborating with numerous international clients across diverse industries, in addition to completing an intensive internship at <strong>Gaotek</strong> where I conducted rigorous quality testing and infrastructure verification.
            </p>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#153E43]/5 border border-[#153E43]/15 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#C86445]">
                <ShoppingBag className="w-4 h-4" />
                The E-Commerce Passion
              </div>
              <p className="text-sm sm:text-base text-[#153E43] font-medium leading-relaxed">
                Building e-commerce stores is my genuine passion for small businesses. I feel extremely delightful to support an independent business thrive online — helping them build brand credibility, launch smooth checkouts, and generate real sales, income, and scalable digital marketing traction.
              </p>
            </div>

            <p>
              Experience has proven one undeniable truth: <em>for authentic business stimulation and sustained customer retention, a high-speed hosting foundation and solid domain infrastructure are crucial.</em> Sluggish page loads destroy conversion rates regardless of how much you invest in marketing.
            </p>

            <p>
              That conviction led to the founding of <strong>HostMarc</strong>: an independent testing lab dedicated to benchmarking real server hardware, NVMe throughput, LiteSpeed caching, and global response times so business owners can invest with confidence.
            </p>

            {/* Featured Projects Bar */}
            <div className="pt-2">
              <div className="text-xs font-mono font-bold text-[#153E43] uppercase tracking-wider mb-2.5">
                Recent Featured Work &amp; Case Studies:
              </div>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href="https://sunlitbd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F8F5EE] border border-[#E2DDD2] hover:border-[#153E43] text-xs font-mono font-bold text-[#153E43] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C86445]" />
                  sunlitbd.com (Interior Design)
                  <ExternalLink className="w-3 h-3 text-[#153E43]/60" />
                </a>

                <a
                  href="https://emarket247.shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F8F5EE] border border-[#E2DDD2] hover:border-[#153E43] text-xs font-mono font-bold text-[#153E43] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#153E43]" />
                  emarket247.shop (E-Commerce)
                  <ExternalLink className="w-3 h-3 text-[#153E43]/60" />
                </a>

                <a
                  href="https://marc.pages.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#153E43] text-[#F3EFE6] text-xs font-mono font-bold transition-opacity hover:opacity-95"
                >
                  <span>marc.pages.dev (Portfolio)</span>
                  <ExternalLink className="w-3 h-3 text-[#C86445]" />
                </a>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#E2DDD2]/80">
              <div className="p-3 rounded-lg bg-[#F8F5EE] border border-[#E2DDD2]">
                <div className="text-xs text-[#153E43]/70 font-mono">Hands-on Mastery</div>
                <div className="text-sm font-bold text-[#153E43] mt-0.5">10+ Yrs Server Tuning</div>
              </div>
              <div className="p-3 rounded-lg bg-[#F8F5EE] border border-[#E2DDD2]">
                <div className="text-xs text-[#153E43]/70 font-mono">Delivery Model</div>
                <div className="text-sm font-bold text-[#153E43] mt-0.5">1-Person + Network</div>
              </div>
              <div className="p-3 rounded-lg bg-[#F8F5EE] border border-[#E2DDD2] col-span-2 sm:col-span-1">
                <div className="text-xs text-[#153E43]/70 font-mono">Core Discipline</div>
                <div className="text-sm font-bold text-[#153E43] mt-0.5">E-Commerce &amp; Speed</div>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Case Study 1: Sunlitbd.com */}
          <div className="bg-white border border-[#E2DDD2] rounded-2xl p-6 space-y-6 shadow-xs hover:border-[#153E43]/40 transition-all flex flex-col justify-between">
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
                <h3 className="text-xl font-black text-[#153E43]">Sunlitbd.com</h3>
                <p className="text-xs text-[#153E43]/85 leading-relaxed mt-2">
                  Corporate website &amp; project portfolio for a premier interior design and MEP infrastructure engineering firm (handling IFIC Bank and institutional projects).
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#F8F5EE] border border-[#E2DDD2] space-y-1">
                <div className="text-[10px] font-mono font-bold text-[#153E43]/70 uppercase">
                  Technical Stack:
                </div>
                <div className="text-xs font-mono text-[#153E43] font-semibold">
                  WordPress · LiteSpeed · Optimized WebP Pipeline
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2DDD2]">
              <a
                href="https://sunlitbd.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#153E43] hover:text-[#C86445] transition-colors group"
              >
                <span>Inspect Live Site (sunlitbd.com)</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Case Study 2: emarket247.shop */}
          <div className="bg-white border border-[#E2DDD2] rounded-2xl p-6 space-y-6 shadow-xs hover:border-[#153E43]/40 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C86445] bg-[#C86445]/10 px-2.5 py-1 rounded">
                  AI Vibe Coded Store
                </span>
                <span className="text-xs font-mono text-emerald-800 font-bold bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded">
                  Sub-Second Load
                </span>
              </div>

              <div>
                <h3 className="text-xl font-black text-[#153E43]">emarket247.shop</h3>
                <p className="text-xs text-[#153E43]/85 leading-relaxed mt-2">
                  High-speed e-commerce retail store engineered with AI vibe coding, rapid microservices, dynamic inventory management, and sub-second checkout.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#F8F5EE] border border-[#E2DDD2] space-y-1">
                <div className="text-[10px] font-mono font-bold text-[#153E43]/70 uppercase">
                  Technical Stack:
                </div>
                <div className="text-xs font-mono text-[#153E43] font-semibold">
                  AI Vibe Coding · Fast Edge API · Dynamic Catalog
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2DDD2]">
              <a
                href="https://emarket247.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#153E43] hover:text-[#C86445] transition-colors group"
              >
                <span>Inspect Live Store (emarket247.shop)</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Case Study 3: Ural-Travel */}
          <div className="bg-white border border-[#E2DDD2] rounded-2xl p-6 space-y-6 shadow-xs hover:border-[#153E43]/40 transition-all flex flex-col justify-between">
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
                <h3 className="text-xl font-black text-[#153E43]">Ural-Travel</h3>
                <p className="text-xs text-[#153E43]/85 leading-relaxed mt-2">
                  High-speed travel booking guide, flight price tracking, and visa checklist authority portal built with modern AI vibe coding.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#F8F5EE] border border-[#E2DDD2] space-y-1">
                <div className="text-[10px] font-mono font-bold text-[#153E43]/70 uppercase">
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
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#153E43] hover:text-[#C86445] transition-colors group"
              >
                <span>Inspect Live Portal (ural-travel.pages.dev)</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
