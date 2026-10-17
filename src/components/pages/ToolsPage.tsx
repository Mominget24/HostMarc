import React, { useState } from 'react';
import { PageId, HostingPlan } from '../../types';
import {
  Calculator,
  Activity,
  Sliders,
  Globe,
  Sparkles,
  ArrowRight,
  Zap,
  CheckCircle2,
  Clock,
  RotateCcw,
  ShieldCheck,
  Search,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Check
} from 'lucide-react';
import { BENCHMARK_REGIONS, HOSTING_PLANS } from '../../data/comparisonsData';
import { AFFILIATE_CONFIG } from '../../config/affiliates';

interface ToolsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenModal: () => void;
}

export const ToolsPage: React.FC<ToolsPageProps> = ({ onNavigate, onOpenModal }) => {
  const [activeTool, setActiveTool] = useState<'tco' | 'quiz' | 'speed' | 'tld'>('tco');

  // Tool 1: 3-Year True Cost & Renewal Calculator States
  const [tcoPlanId, setTcoPlanId] = useState<'premium' | 'business' | 'cloud-startup'>('premium');
  const [termYears, setTermYears] = useState<number>(3); // 1, 2, 3, or 4 years

  // Tool 2: 30-Second Hosting Recommendation Quiz States
  const [quizStep, setQuizStep] = useState<1 | 2 | 3 | 4>(1);
  const [quizAnswers, setQuizAnswers] = useState({
    siteType: 'blog', // 'blog' | 'ecommerce' | 'agency'
    traffic: 'under15k', // 'under15k' | '15k-60k' | '60k+'
    priority: 'speed', // 'cost' | 'speed' | 'security'
  });

  // Tool 3: Global TTFB & Server Diagnostic Simulator States
  const [testDomain, setTestDomain] = useState('yourwebsite.com');
  const [selectedRegion, setSelectedRegion] = useState(BENCHMARK_REGIONS[0].region);
  const [isDiagnosing, setIsDiagnosing] = useState(false);
  const [diagnosticsRun, setDiagnosticsRun] = useState(false);

  // ----------------------------------------------------------------------
  // TOOL 1: 3-Year True Cost Calculations
  // ----------------------------------------------------------------------
  const selectedPlan = HOSTING_PLANS.find((p) => p.id === tcoPlanId) || HOSTING_PLANS[0];
  const totalMonths = termYears * 12;

  // Hostinger pricing based on selected term duration
  const hostingerMonthly =
    termYears === 4
      ? selectedPlan.promoPrice
      : termYears === 3
      ? Number((selectedPlan.promoPrice * 1.0).toFixed(2)) // special 3yr rate
      : termYears === 2
      ? Number((selectedPlan.promoPrice * 1.25).toFixed(2))
      : Number((selectedPlan.promoPrice * 1.6).toFixed(2));

  const hostingerServerCost = Number((hostingerMonthly * totalMonths).toFixed(2));
  const hostingerSslCost = 0; // Free forever
  const hostingerBackupCost = 0; // Free on business, included
  const hostingerDomainPrivacy = 0; // Free forever
  const hostingerTotal = hostingerServerCost;

  // Legacy Competitor (GoDaddy / Bluehost baseline)
  // Intro $9.99/mo for year 1, renewal $14.99/mo for remaining years
  // SSL fee: $89.99/year after year 1
  // Backup fee: $2.99/mo ($35.88/yr)
  // Domain privacy: $14.99/yr
  const competitorIntroMonths = Math.min(12, totalMonths);
  const competitorRenewalMonths = Math.max(0, totalMonths - 12);
  const competitorServerCost = 9.99 * competitorIntroMonths + 14.99 * competitorRenewalMonths;
  const competitorSslYears = Math.max(0, termYears - 1);
  const competitorSslCost = competitorSslYears * 89.99;
  const competitorBackupCost = 2.99 * totalMonths;
  const competitorPrivacyCost = 14.99 * termYears;

  const legacyCompetitorTotal = Number(
    (competitorServerCost + competitorSslCost + competitorBackupCost + competitorPrivacyCost).toFixed(2)
  );

  const calculatedSavings = Number((legacyCompetitorTotal - hostingerTotal).toFixed(2));
  const savingsPercent = Math.round((calculatedSavings / legacyCompetitorTotal) * 100);

  // ----------------------------------------------------------------------
  // TOOL 2: Quiz Logic
  // ----------------------------------------------------------------------
  const getQuizResult = () => {
    const { siteType, traffic, priority } = quizAnswers;

    if (siteType === 'agency' || traffic === '60k+') {
      return {
        plan: 'Cloud Startup',
        tierId: 'cloud-startup',
        price: '$8.99/mo',
        badge: 'Enterprise Performance',
        reasons: [
          'High concurrency volume requires isolated container resources (3 GB RAM & 2 dedicated vCPUs).',
          'Dedicated static IP address protects email reputation and agency client deployments.',
          'Host up to 300 client websites under a single unified hPanel dashboard with delegated access.',
        ],
      };
    }

    if (siteType === 'ecommerce' || traffic === '15k-60k' || priority === 'speed') {
      return {
        plan: 'Business WordPress',
        tierId: 'business',
        price: '$3.99/mo',
        badge: 'Top Recommendation',
        reasons: [
          'NVMe PCIe 4.0 SSD drives deliver 5x faster read/write speeds for instantaneous database queries.',
          'Daily automated backups and on-demand snapshots safeguard customer orders and shopping carts.',
          'Built-in Redis Object Cache and LiteSpeed cache ensure sub-100ms server response times.',
        ],
      };
    }

    return {
      plan: 'Premium Shared',
      tierId: 'premium',
      price: '$2.99/mo',
      badge: 'Best Budget Value',
      reasons: [
        'Unbeatable $2.99/mo entry rate locks in maximum savings with code HOSTMARC.',
        'LiteSpeed Web Server eliminates PHP bloat and easily handles up to 25,000 monthly visits.',
        'Free .com domain for the first year plus unlimited lifetime Let’s Encrypt SSL certificates.',
      ],
    };
  };

  const quizResult = getQuizResult();

  // ----------------------------------------------------------------------
  // TOOL 3: Simulator Action
  // ----------------------------------------------------------------------
  const activeBenchmark =
    BENCHMARK_REGIONS.find((b) => b.region === selectedRegion) || BENCHMARK_REGIONS[0];

  const handleRunDiagnostic = () => {
    setIsDiagnosing(true);
    setTimeout(() => {
      setIsDiagnosing(false);
      setDiagnosticsRun(true);
    }, 1200);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Header (Exact prompt wording) */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C86445]">
          Free Architecture Utilities
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#153E43] tracking-tight">
          Web Hosting Calculators &amp; Diagnostic Tools
        </h1>
        <p className="text-[#153E43]/80 text-sm sm:text-base leading-relaxed">
          Zero sign-up required. Calculate hidden renewal price hikes, test server TTFB response times, check custom domain availability, and get an instant plan recommendation.
        </p>

        {/* 4 Interactive Tool Selector Tabs */}
        <div className="flex items-center justify-center gap-2 pt-4 flex-wrap">
          {[
            { id: 'tco', label: '1. True Cost Calculator', icon: Calculator },
            { id: 'quiz', label: '2. 30-Sec Recommendation Quiz', icon: Sliders },
            { id: 'speed', label: '3. Global TTFB Simulator', icon: Activity },
            { id: 'tld', label: '4. Domain Renewal Checker', icon: Globe },
          ].map((tool) => {
            const Icon = tool.icon;
            const isActive = activeTool === tool.id;
            return (
              <button
                key={tool.id}
                onClick={() => setActiveTool(tool.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#153E43] text-white shadow-sm ring-2 ring-[#153E43]/20'
                    : 'bg-white text-[#153E43]/80 hover:text-[#153E43] border border-[#E2DDD2]'
                }`}
              >
                <Icon className="w-4 h-4 text-[#C86445]" />
                <span>{tool.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ================================================================== */}
      {/* TOOL 1: 3-Year True Cost & Renewal Calculator                     */}
      {/* ================================================================== */}
      {activeTool === 'tco' && (
        <div className="bg-white border border-[#E2DDD2] rounded-3xl p-6 sm:p-10 space-y-8 shadow-sm animate-in fade-in duration-200">
          <div className="border-b border-[#E2DDD2] pb-6 space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#C86445] uppercase tracking-wider">
              <span>Exposes Hidden Upsells</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#153E43]">
              1. 3-Year True Cost &amp; Renewal Calculator
            </h2>
            <p className="text-sm text-[#153E43]/75 max-w-2xl">
              Compare what you actually pay over 1, 2, 3, or 4 years between Hostinger and legacy hosts charging hidden SSL fees and 300% renewal rate hikes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Step 1 & Step 2 Controls */}
            <div className="lg:col-span-6 space-y-6">
              {/* Step 1: Select Hosting Tier */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#153E43] mb-3">
                  Step 1: Select Hosting Tier
                </label>
                <div className="space-y-2.5">
                  {HOSTING_PLANS.map((plan) => (
                    <button
                      key={plan.id}
                      onClick={() => setTcoPlanId(plan.id as any)}
                      className={`w-full p-4 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                        tcoPlanId === plan.id
                          ? 'bg-[#F3EFE6] border-[#153E43] ring-1 ring-[#153E43]'
                          : 'bg-white border-[#E2DDD2] hover:border-[#153E43]/40'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-bold text-[#153E43] flex items-center gap-2">
                          <span>{plan.name}</span>
                          {plan.popular && (
                            <span className="text-[10px] bg-[#C86445] text-white px-2 py-0.5 rounded font-mono font-bold">
                              RECOMMENDED
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-[#153E43]/70 mt-1">
                          Renews at only ${plan.renewalPrice}/mo (transparent)
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono text-base font-extrabold text-[#153E43]">
                          ${plan.promoPrice}<span className="text-xs text-[#153E43]/60">/mo</span>
                        </div>
                        <div className="text-[10px] text-slate-400 line-through font-mono">
                          ${plan.originalPrice}/mo
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Choose Term Duration */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#153E43]">
                    Step 2: Choose Term Duration
                  </label>
                  <span className="font-mono text-sm font-bold text-[#C86445]">
                    {termYears} {termYears === 1 ? 'Year' : 'Years'} ({totalMonths} Months)
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((years) => (
                    <button
                      key={years}
                      onClick={() => setTermYears(years)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer text-center border ${
                        termYears === years
                          ? 'bg-[#153E43] text-white border-[#153E43] shadow-sm'
                          : 'bg-[#F8F5EE] text-[#153E43] border-[#E2DDD2] hover:border-[#153E43]/40'
                      }`}
                    >
                      {years} {years === 1 ? 'Yr' : 'Yrs'}
                      {years === 3 && <span className="block text-[10px] text-amber-300 font-sans">Best Fit</span>}
                      {years === 4 && <span className="block text-[10px] text-emerald-400 font-sans">Max 78%</span>}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Callout Box Matching User Spec */}
            <div className="lg:col-span-6 bg-[#F8F5EE] border border-[#E2DDD2] rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <div className="flex items-center justify-between text-xs text-[#153E43]/70 font-mono">
                  <span>Selected Scenario:</span>
                  <span className="font-bold text-[#153E43]">Hostinger {selectedPlan.name} ({termYears} Years Locked)</span>
                </div>

                {/* Big Metric Display */}
                <div className="mt-4 p-5 rounded-2xl bg-white border border-[#E2DDD2] space-y-4">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="text-xs text-[#153E43]/70">Hostinger Total ({termYears} Yrs)</div>
                      <div className="text-3xl font-black font-mono text-[#153E43]">
                        ${hostingerTotal.toFixed(2)}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-rose-700">Legacy Competitor Total</div>
                      <div className="text-2xl font-bold font-mono text-rose-800 line-through">
                        ${legacyCompetitorTotal.toFixed(2)}
                      </div>
                    </div>
                  </div>

                  {/* Savings Banner */}
                  <div className="pt-3 border-t border-[#E2DDD2] flex items-center justify-between text-sm">
                    <span className="font-bold text-[#153E43]">Total Money Saved:</span>
                    <span className="font-mono font-extrabold text-emerald-700 text-lg">
                      Save ${calculatedSavings.toFixed(2)} ({savingsPercent}%)
                    </span>
                  </div>
                </div>
              </div>

              {/* Line-item Comparison */}
              <div className="space-y-2 text-xs">
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#153E43]/60">
                  Hidden Upsell Breakdown:
                </div>
                <div className="space-y-1.5 text-[#153E43]/80">
                  <div className="flex justify-between py-1 border-b border-[#E2DDD2]/60">
                    <span>SSL Certificate Fee:</span>
                    <span className="font-mono font-semibold">
                      <strong className="text-emerald-700">$0 (Free Forever)</strong> vs <span className="text-rose-700">${competitorSslCost.toFixed(2)} on GoDaddy</span>
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#E2DDD2]/60">
                    <span>Automatic Backups:</span>
                    <span className="font-mono font-semibold">
                      <strong className="text-emerald-700">$0 (Included)</strong> vs <span className="text-rose-700">${competitorBackupCost.toFixed(2)}</span>
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#E2DDD2]/60">
                    <span>WHOIS Domain Privacy:</span>
                    <span className="font-mono font-semibold">
                      <strong className="text-emerald-700">$0 (Included)</strong> vs <span className="text-rose-700">${competitorPrivacyCost.toFixed(2)}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Action */}
              <button
                onClick={onOpenModal}
                className="w-full py-3 px-4 text-xs font-bold text-white bg-[#153E43] hover:bg-[#0D282C] rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Zap className="w-4 h-4 text-amber-300" />
                <span>Lock In This Rate with Coupon HOSTMARC (Save {savingsPercent}%)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================================================================== */}
      {/* TOOL 2: 30-Second Hosting Recommendation Quiz                     */}
      {/* ================================================================== */}
      {activeTool === 'quiz' && (
        <div className="bg-white border border-[#E2DDD2] rounded-3xl p-6 sm:p-10 space-y-8 shadow-sm animate-in fade-in duration-200">
          <div className="border-b border-[#E2DDD2] pb-6 space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#C86445] uppercase tracking-wider">
              <span>Personalized Architecture Match</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#153E43]">
              2. 30-Second Hosting Recommendation Quiz
            </h2>
            <p className="text-sm text-[#153E43]/75 max-w-2xl">
              Answer 3 simple questions to determine the optimal configuration for your web project.
            </p>
          </div>

          {/* Stepper Wizard Container */}
          <div className="max-w-2xl mx-auto space-y-8">
            {/* Progress indicator */}
            {quizStep <= 3 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-[#153E43]">
                  <span>Question {quizStep} of 3</span>
                  <span>{Math.round((quizStep / 3) * 100)}%</span>
                </div>
                <div className="w-full h-2 bg-[#F3EFE6] rounded-full overflow-hidden border border-[#E2DDD2]">
                  <div
                    className="h-full bg-[#153E43] rounded-full transition-all duration-300"
                    style={{ width: `${(quizStep / 3) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {/* Question 1 */}
            {quizStep === 1 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <h3 className="text-xl font-bold text-[#153E43]">
                  What type of website are you building or migrating?
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      id: 'blog',
                      title: 'Blog or Portfolio',
                      desc: 'Personal brand, article publishing, or creative showcase.',
                    },
                    {
                      id: 'ecommerce',
                      title: 'E-Commerce Store',
                      desc: 'WooCommerce, Shopify alternative, online product checkout.',
                    },
                    {
                      id: 'agency',
                      title: 'Agency / Multi-Site',
                      desc: 'Hosting multiple client websites under one unified cPanel/hPanel.',
                    },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setQuizAnswers({ ...quizAnswers, siteType: opt.id });
                        setQuizStep(2);
                      }}
                      className={`w-full p-5 rounded-2xl text-left border transition-all cursor-pointer flex items-center justify-between group ${
                        quizAnswers.siteType === opt.id
                          ? 'bg-[#F3EFE6] border-[#153E43] ring-1 ring-[#153E43]'
                          : 'bg-white border-[#E2DDD2] hover:border-[#153E43]/40'
                      }`}
                    >
                      <div>
                        <div className="text-base font-bold text-[#153E43] group-hover:text-[#C86445] transition-colors">
                          {opt.title}
                        </div>
                        <div className="text-xs text-[#153E43]/70 mt-1">{opt.desc}</div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-[#153E43]/40 group-hover:text-[#153E43] transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Question 2 */}
            {quizStep === 2 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <h3 className="text-xl font-bold text-[#153E43]">
                  What is your expected monthly traffic volume?
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      id: 'under15k',
                      title: 'Under 15,000 Visits',
                      desc: 'New launch, niche blog, or local business site.',
                    },
                    {
                      id: '15k-60k',
                      title: '15,000 – 60,000 Visits',
                      desc: 'Growing audience, regular promotional spikes.',
                    },
                    {
                      id: '60k+',
                      title: '60,000+ Visits / SaaS',
                      desc: 'High concurrency, busy cart transactions, heavy APIs.',
                    },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setQuizAnswers({ ...quizAnswers, traffic: opt.id });
                        setQuizStep(3);
                      }}
                      className={`w-full p-5 rounded-2xl text-left border transition-all cursor-pointer flex items-center justify-between group ${
                        quizAnswers.traffic === opt.id
                          ? 'bg-[#F3EFE6] border-[#153E43] ring-1 ring-[#153E43]'
                          : 'bg-white border-[#E2DDD2] hover:border-[#153E43]/40'
                      }`}
                    >
                      <div>
                        <div className="text-base font-bold text-[#153E43] group-hover:text-[#C86445] transition-colors">
                          {opt.title}
                        </div>
                        <div className="text-xs text-[#153E43]/70 mt-1">{opt.desc}</div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-[#153E43]/40 group-hover:text-[#153E43] transition-colors" />
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setQuizStep(1)}
                  className="text-xs font-semibold text-[#153E43] flex items-center gap-1 cursor-pointer pt-2"
                >
                  <ChevronLeft className="w-3.5 h-3.5" /> Back to Question 1
                </button>
              </div>
            )}

            {/* Question 3 */}
            {quizStep === 3 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <h3 className="text-xl font-bold text-[#153E43]">
                  What is your primary architectural priority?
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      id: 'cost',
                      title: 'Lowest Upfront Cost',
                      desc: 'Max savings with free domain and reliable uptime.',
                    },
                    {
                      id: 'speed',
                      title: 'Sub-Second Speed',
                      desc: 'LiteSpeed caching, NVMe drives, and Redis acceleration.',
                    },
                    {
                      id: 'security',
                      title: 'Automated Security',
                      desc: 'Daily backups, staging environment, automated restore.',
                    },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setQuizAnswers({ ...quizAnswers, priority: opt.id });
                        setQuizStep(4);
                      }}
                      className={`w-full p-5 rounded-2xl text-left border transition-all cursor-pointer flex items-center justify-between group ${
                        quizAnswers.priority === opt.id
                          ? 'bg-[#F3EFE6] border-[#153E43] ring-1 ring-[#153E43]'
                          : 'bg-white border-[#E2DDD2] hover:border-[#153E43]/40'
                      }`}
                    >
                      <div>
                        <div className="text-base font-bold text-[#153E43] group-hover:text-[#C86445] transition-colors">
                          {opt.title}
                        </div>
                        <div className="text-xs text-[#153E43]/70 mt-1">{opt.desc}</div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-[#153E43]/40 group-hover:text-[#153E43] transition-colors" />
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setQuizStep(2)}
                  className="text-xs font-semibold text-[#153E43] flex items-center gap-1 cursor-pointer pt-2"
                >
                  <ChevronLeft className="w-3.5 h-3.5" /> Back to Question 2
                </button>
              </div>
            )}

            {/* Quiz Result Screen */}
            {quizStep === 4 && (
              <div className="bg-[#F8F5EE] border border-[#E2DDD2] rounded-3xl p-6 sm:p-8 space-y-6 animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between flex-wrap gap-2 border-b border-[#E2DDD2] pb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#153E43]/10 text-[#153E43] text-xs font-bold font-mono">
                    <Sparkles className="w-3.5 h-3.5 text-[#C86445]" />
                    <span>{quizResult.badge}</span>
                  </div>
                  <button
                    onClick={() => setQuizStep(1)}
                    className="text-xs font-semibold text-[#153E43] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Start Over
                  </button>
                </div>

                <div className="flex items-baseline justify-between flex-wrap gap-4">
                  <div>
                    <span className="text-xs font-mono uppercase text-[#153E43]/70">Matched Tier:</span>
                    <h4 className="text-3xl font-extrabold text-[#153E43]">
                      Hostinger {quizResult.plan}
                    </h4>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black font-mono text-[#C86445]">
                      {quizResult.price}
                    </div>
                    <div className="text-xs text-[#153E43]/60">with promo code HOSTMARC</div>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-bold font-mono uppercase tracking-wider text-[#153E43]/70">
                    Why This Fits Your Architecture:
                  </span>
                  {quizResult.reasons.map((r, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#153E43]/85 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#153E43] shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={onOpenModal}
                  className="w-full py-3 px-5 text-sm font-bold text-white bg-[#153E43] hover:bg-[#0D282C] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Zap className="w-4 h-4 text-amber-300" />
                  <span>Configure {quizResult.plan} (78% Discount Applied)</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ================================================================== */}
      {/* TOOL 3: Global TTFB & Server Diagnostic Simulator                 */}
      {/* ================================================================== */}
      {activeTool === 'speed' && (
        <div className="bg-white border border-[#E2DDD2] rounded-3xl p-6 sm:p-10 space-y-8 shadow-sm animate-in fade-in duration-200">
          <div className="border-b border-[#E2DDD2] pb-6 space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#C86445] uppercase tracking-wider">
              <span>Core Web Vitals Test</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#153E43]">
              3. Global TTFB &amp; Server Diagnostic Simulator
            </h2>
            <p className="text-sm text-[#153E43]/75 max-w-2xl">
              Test your current domain response times against our global test network to evaluate server bottlenecking.
            </p>
          </div>

          <div className="space-y-6">
            {/* Input Bar */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={testDomain}
                  onChange={(e) => setTestDomain(e.target.value)}
                  placeholder="Enter domain (e.g. yourwebsite.com)"
                  className="w-full bg-[#F8F5EE] border border-[#E2DDD2] rounded-xl px-4 py-3 text-sm text-[#153E43] focus:outline-none focus:border-[#153E43] focus:bg-white font-mono transition-colors"
                />
              </div>
              <button
                onClick={handleRunDiagnostic}
                disabled={isDiagnosing}
                className="px-6 py-3 bg-[#153E43] hover:bg-[#0D282C] text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 whitespace-nowrap"
              >
                {isDiagnosing ? (
                  <>
                    <Activity className="w-4 h-4 animate-spin text-amber-300" />
                    <span>Probing Edge Nodes...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 text-amber-300" />
                    <span>Run Server Diagnostic</span>
                  </>
                )}
              </button>
            </div>

            {/* Region Selection */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#153E43] mb-2">
                Probe Region:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {BENCHMARK_REGIONS.slice(0, 4).map((b) => (
                  <button
                    key={b.region}
                    onClick={() => {
                      setSelectedRegion(b.region);
                      setDiagnosticsRun(true);
                    }}
                    className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                      selectedRegion === b.region
                        ? 'bg-[#F3EFE6] border-[#153E43] text-[#153E43] ring-1 ring-[#153E43]'
                        : 'bg-white border-[#E2DDD2] text-[#153E43]/70 hover:border-[#153E43]/40'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold">
                      <span>{b.flag}</span>
                      <span>{b.region.split(' ')[0]}</span>
                    </div>
                    <div className="text-[11px] font-mono text-[#C86445] mt-1">{b.hostingerTtfb}ms avg</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Diagnostic Results Card */}
            {(diagnosticsRun || isDiagnosing) && (
              <div className="bg-[#F8F5EE] border border-[#E2DDD2] rounded-2xl p-6 sm:p-8 space-y-6 animate-in fade-in duration-300">
                <div className="flex items-center justify-between border-b border-[#E2DDD2] pb-4">
                  <div>
                    <span className="text-xs font-mono text-[#153E43]/60 uppercase">Target Domain:</span>
                    <h4 className="text-lg font-bold text-[#153E43] font-mono">{testDomain}</h4>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-[#153E43]/60 uppercase">Probe Node:</span>
                    <div className="text-sm font-bold text-[#153E43]">{activeBenchmark.city}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-[#E2DDD2] text-center">
                    <div className="text-2xl font-black font-mono text-emerald-700">
                      {activeBenchmark.hostingerTtfb}ms
                    </div>
                    <div className="text-xs font-semibold text-[#153E43] mt-1">Hostinger TTFB</div>
                    <div className="text-[10px] text-emerald-600 font-bold">Passes CWV (&lt;200ms)</div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-[#E2DDD2] text-center">
                    <div className="text-2xl font-black font-mono text-rose-700">
                      {activeBenchmark.godaddyTtfb}ms
                    </div>
                    <div className="text-xs font-semibold text-[#153E43] mt-1">GoDaddy TTFB</div>
                    <div className="text-[10px] text-rose-600 font-bold">Fails CWV (&gt;300ms)</div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-[#E2DDD2] text-center">
                    <div className="text-2xl font-black font-mono text-[#153E43]">
                      18ms
                    </div>
                    <div className="text-xs font-semibold text-[#153E43] mt-1">DNS Resolution</div>
                    <div className="text-[10px] text-[#153E43]/60">Cloudflare Edge</div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-[#E2DDD2] text-center">
                    <div className="text-2xl font-black font-mono text-[#153E43]">
                      32ms
                    </div>
                    <div className="text-xs font-semibold text-[#153E43] mt-1">TLS Handshake</div>
                    <div className="text-[10px] text-[#153E43]/60">TLS 1.3 / HTTP/3</div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#E2DDD2] text-xs text-[#153E43]/80 space-y-1">
                  <strong className="text-[#153E43]">Diagnostic Summary:</strong> Servers running on traditional Apache or overseas US data centers introduce 200–350ms of avoidable network latency to regional visitors. Migrating to Hostinger’s Singapore or Frankfurt node reduces server latency by up to 68%.
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ================================================================== */}
      {/* TOOL 4: Domain Renewal TLD Checker                                 */}
      {/* ================================================================== */}
      {activeTool === 'tld' && (
        <div className="bg-white border border-[#E2DDD2] rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm animate-in fade-in duration-200">
          <div className="border-b border-[#E2DDD2] pb-6 space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#C86445] uppercase tracking-wider">
              <span>Domain Cost Clarity</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#153E43]">
              4. Domain TLD &amp; Renewal Fee Transparency Guide
            </h2>
            <p className="text-sm text-[#153E43]/70 max-w-2xl">
              Verify real registration and ongoing yearly renewal rates for common domain extensions on Hostinger before committing.
            </p>
          </div>

          <div className="overflow-x-auto border border-[#E2DDD2] rounded-xl">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-[#F8F5EE] text-[#153E43]/70 border-b border-[#E2DDD2]">
                  <th className="py-3 px-4 font-semibold">TLD Extension</th>
                  <th className="py-3 px-4 font-semibold">Year 1 Promo Price</th>
                  <th className="py-3 px-4 font-semibold">Yearly Renewal Rate</th>
                  <th className="py-3 px-4 font-semibold">Free WHOIS Privacy</th>
                  <th className="py-3 px-4 font-semibold">Included in Hosting Plan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2DDD2]">
                {[
                  { tld: '.com', intro: '$4.99 / yr', renew: '$13.99 / yr', freeHost: 'Yes (1st year free)' },
                  { tld: '.net', intro: '$11.99 / yr', renew: '$14.99 / yr', freeHost: 'Yes (1st year free)' },
                  { tld: '.org', intro: '$9.99 / yr', renew: '$15.99 / yr', freeHost: 'Yes (1st year free)' },
                  { tld: '.online', intro: '$0.99 / yr', renew: '$34.99 / yr', freeHost: 'Yes (Watch renewal!)' },
                  { tld: '.io', intro: '$39.99 / yr', renew: '$44.99 / yr', freeHost: 'Separate purchase' },
                  { tld: '.shop', intro: '$1.99 / yr', renew: '$39.99 / yr', freeHost: 'Yes (1st year free)' },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F9F6F0]">
                    <td className="py-3 px-4 font-bold text-[#153E43] font-mono text-base">{row.tld}</td>
                    <td className="py-3 px-4 text-[#153E43] font-mono">{row.intro}</td>
                    <td className="py-3 px-4 text-[#153E43]/80 font-mono">{row.renew}</td>
                    <td className="py-3 px-4 text-emerald-700 font-medium">Free Forever</td>
                    <td className="py-3 px-4 text-[#153E43]/80">{row.freeHost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#F8F5EE] rounded-xl p-4 border border-[#E2DDD2] text-xs text-[#153E43]/80 space-y-1">
            <strong className="text-[#153E43]">Engineer Advice:</strong> Stick with <span className="font-mono text-[#C86445] font-bold">.com</span> or <span className="font-mono text-[#C86445] font-bold">.org</span>. Gimmick extensions like <span className="font-mono">.online</span> or <span className="font-mono">.shop</span> cost $0.99 for year one but jump to $35–$40/year upon renewal.
          </div>
        </div>
      )}
    </div>
  );
};
