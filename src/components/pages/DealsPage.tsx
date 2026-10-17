import React, { useState } from 'react';
import { PageId, CouponDeal } from '../../types';
import { Tag, Copy, Check, ExternalLink, Sparkles, Clock } from 'lucide-react';

interface DealsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenModal: () => void;
}

export const DealsPage: React.FC<DealsPageProps> = ({ onNavigate, onOpenModal }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 3000);
  };

  const deals: CouponDeal[] = [
    {
      id: 'deal-1',
      provider: 'Hostinger',
      title: 'Premium & Business Shared Hosting Deal',
      discount: '78% OFF + 3 Months Free',
      code: 'HOSTMARC',
      verifiedDate: 'October 17, 2026',
      expires: 'October 31, 2026',
      badge: 'Most Popular',
      description:
        'Maximum discount for 48-month commitments on Hostinger Premium and Business tiers. Includes free 1st year domain, unlimited SSLs, and automated backups.',
      features: [
        'Free .com / .net domain for 1 year',
        'Unlimited free SSL certificates',
        'LiteSpeed server caching enabled',
        'Free automated website migration',
        '30-day money-back guarantee',
      ],
      affiliateUrl: 'https://www.hostinger.com?REFERRALCODE=HOSTMARC',
    },
    {
      id: 'deal-2',
      provider: 'Hostinger Cloud',
      title: 'Cloud Startup & Agency Container Deal',
      discount: '64% OFF + Dedicated IP',
      code: 'CLOUDPRO',
      verifiedDate: 'October 17, 2026',
      expires: 'October 31, 2026',
      badge: 'Best for Agencies',
      description:
        'Dedicated server container with 3 GB RAM and 2 CPU cores. Ideal for high-traffic WooCommerce stores and agency portfolios.',
      features: [
        'Dedicated static IPv4 address',
        '300 websites hosted allowance',
        '200 GB NVMe storage array',
        'Priority 24/7 VIP support queue',
        'Daily automatic backup snapshots',
      ],
      affiliateUrl: 'https://www.hostinger.com?REFERRALCODE=HOSTMARC&plan=cloud',
    },
    {
      id: 'deal-3',
      provider: 'Hostinger WordPress',
      title: 'Managed WordPress Business Plan',
      discount: '75% OFF + Staging Tool',
      code: 'WPBIZ75',
      verifiedDate: 'October 17, 2026',
      expires: 'October 31, 2026',
      badge: 'Best for WordPress',
      description:
        'Designed specifically for WordPress. Includes 1-click test staging, WordPress AI creation tools, and automatic plugin vulnerability updates.',
      features: [
        '1-Click WordPress staging environment',
        'Daily and on-demand manual backups',
        'Object Cache (Redis/Memcached) built-in',
        'Smart automatic core and plugin updates',
      ],
      affiliateUrl: 'https://www.hostinger.com?REFERRALCODE=HOSTMARC&plan=business',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C86445]/10 border border-[#C86445]/30 text-[#C86445] text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Tested &amp; Manually Verified Daily</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#153E43] tracking-tight">
          Verified Hostinger Coupons &amp; Deals
        </h1>
        <p className="text-[#153E43]/80 text-sm sm:text-base leading-relaxed">
          Exclusive engineering partner voucher codes for October 2026. Every coupon code below has been tested against Hostinger’s live checkout system.
        </p>
      </div>

      {/* Deals Grid */}
      <div className="space-y-6">
        {deals.map((deal) => (
          <div
            key={deal.id}
            className="bg-white border border-[#E2DDD2] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#153E43]/40 transition-all shadow-sm"
          >
            <div className="space-y-3 max-w-xl">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-wider bg-[#153E43]/10 text-[#153E43] px-2.5 py-0.5 rounded-full font-mono">
                  {deal.badge}
                </span>
                <span className="text-xs text-[#153E43]/60 flex items-center gap-1 font-mono">
                  <Clock className="w-3 h-3" />
                  Verified {deal.verifiedDate}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#153E43]">{deal.title}</h3>
                <p className="text-xs sm:text-sm text-[#153E43]/75 mt-1 leading-relaxed">
                  {deal.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {deal.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-[#153E43]/80">
                    <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Action Block */}
            <div className="w-full md:w-auto bg-[#F8F5EE] p-5 rounded-xl border border-[#E2DDD2] flex flex-col items-center justify-center gap-3 shrink-0">
              <div className="text-center">
                <div className="text-xs text-[#153E43]/70">Discount Savings</div>
                <div className="text-lg font-black text-[#C86445] font-mono">
                  {deal.discount}
                </div>
              </div>

              {/* Copy Code Box */}
              <div className="w-full flex items-center justify-between gap-2 bg-white border border-[#E2DDD2] px-3 py-1.5 rounded-lg shadow-xs">
                <span className="font-mono font-bold text-sm text-[#153E43]">
                  {deal.code}
                </span>
                <button
                  onClick={() => handleCopy(deal.code)}
                  className="text-xs text-[#153E43] hover:text-[#C86445] font-semibold flex items-center gap-1 cursor-pointer"
                >
                  {copiedCode === deal.code ? (
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <Check className="w-3 h-3" /> Copied!
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <Copy className="w-3 h-3" /> Copy
                    </span>
                  )}
                </button>
              </div>

              <button
                onClick={onOpenModal}
                className="w-full py-2.5 px-4 text-xs font-bold text-white bg-[#153E43] hover:bg-[#0D282C] rounded-lg shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Apply &amp; Visit Hostinger</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* How to Apply Guide */}
      <div className="bg-white border border-[#E2DDD2] rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
        <h3 className="text-lg font-bold text-[#153E43]">How to Apply Your Hostinger Coupon Code:</h3>
        <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-[#153E43]/85 leading-relaxed">
          <li>Click any of the "Apply" or "Claim Offer" buttons above to activate our affiliate partner discount link.</li>
          <li>Select your plan (we recommend the <strong>48-month Business WordPress</strong> tier for maximum savings and free NVMe storage).</li>
          <li>On the checkout summary screen below the total amount, click the text link: <strong>"Have a coupon code?"</strong>.</li>
          <li>Paste in <code className="font-mono font-bold text-[#C86445] bg-[#F3EFE6] px-1.5 py-0.5 rounded border border-[#E2DDD2]">HOSTMARC</code> and click the "Apply" plus icon.</li>
          <li>Your total will instantly discount by up to an additional 10% on top of the already discounted intro pricing!</li>
        </ol>
      </div>
    </div>
  );
};
