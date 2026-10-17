import React from 'react';
import { PageId } from '../../types';
import { Shield, Lock, CheckCircle2 } from 'lucide-react';
import { AFFILIATE_CONFIG } from '../../config/affiliates';

interface LegalPagesProps {
  pageType: 'disclosure' | 'privacy';
  onNavigate: (page: PageId) => void;
  onOpenModal: () => void;
}

export const LegalPages: React.FC<LegalPagesProps> = ({ pageType, onNavigate, onOpenModal }) => {
  if (pageType === 'disclosure') {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-[#153E43]/85 text-sm leading-relaxed">
        <div className="border-b border-[#E2DDD2] pb-6 space-y-2">
          <div className="flex items-center gap-2 text-[#C86445] font-mono text-xs uppercase tracking-wider font-bold">
            <Shield className="w-4 h-4" />
            <span>Transparency Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#153E43]">
            Affiliate Disclosure &amp; Service Boundaries
          </h1>
          <p className="text-xs text-[#153E43]/60">Effective Date: October 2026 · Complies with FTC &amp; Bangladesh Digital Commerce Guidelines</p>
        </div>

        <div className="bg-white border border-[#E2DDD2] rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
          <h3 className="text-lg font-bold text-[#153E43]">1. Two Distinct Business Paths</h3>
          <p>
            HostMarc helps businesses establish and scale their presence online through two clear, distinct paths:
          </p>
          <ul className="space-y-2 text-sm text-[#153E43]">
            <li className="flex items-start gap-2">
              <span className="text-[#C86445] font-bold">A.</span>
              <span><strong>Domains &amp; Hosting Guidance:</strong> We recommend Hostinger products via affiliate links, provide setup guidance, and publish zero-downtime migration checklists.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C86445] font-bold">B.</span>
              <span><strong>Web &amp; Growth Services:</strong> We deliver custom website design, development, maintenance, and marketing services as a bespoke agency practice.</span>
            </li>
          </ul>
          <p className="pt-2 text-xs text-[#153E43]/70 italic">
            Important distinction: A customer purchasing hosting directly from Hostinger is not automatically purchasing HostMarc’s development or maintenance services. Any agency service is separately agreed upon.
          </p>
        </div>

        <div className="bg-white border border-[#E2DDD2] rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
          <h3 className="text-lg font-bold text-[#153E43]">2. Affiliate Commission Notice</h3>
          <p>
            {AFFILIATE_CONFIG.disclaimer}
          </p>
          <p>
            When you click on outbound referral links to Hostinger and complete a purchase, HostMarc may receive an affiliate referral commission. This incurs zero additional cost to you, and our coupon code (<code className="font-mono font-bold text-[#C86445]">HOSTMARC</code>) ensures you unlock verified discounts up to 78% off plus 3 months free.
          </p>
        </div>

        <div className="bg-white border border-[#E2DDD2] rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
          <h3 className="text-lg font-bold text-[#153E43]">3. Independent Benchmarks</h3>
          <p>
            All server response benchmarks, load concurrency tests, and uptime probes are conducted independently by Farhan Momen using anonymous, self-funded accounts. We never accept sponsored payments for positive ratings.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-[#153E43]/85 text-sm leading-relaxed">
      <div className="border-b border-[#E2DDD2] pb-6 space-y-2">
        <div className="flex items-center gap-2 text-[#C86445] font-mono text-xs uppercase tracking-wider font-bold">
          <Lock className="w-4 h-4" />
          <span>Privacy &amp; Data Security</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#153E43]">
          Privacy Policy
        </h1>
        <p className="text-xs text-[#153E43]/60">Last Revised: October 2026</p>
      </div>

      <div className="bg-white border border-[#E2DDD2] rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
        <h3 className="text-lg font-bold text-[#153E43]">Information We Collect</h3>
        <p>
          HostMarc values your privacy. We do not require account registration to read benchmarks, use our TCO calculators, or follow our migration guides.
        </p>
        <p>
          If you voluntarily submit a project inquiry or consultation request through our Contact page, we collect only the name, email, website URL, and message details you provide so that our team can review and respond. We never sell, rent, or trade your personal information.
        </p>
      </div>

      <div className="bg-white border border-[#E2DDD2] rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
        <h3 className="text-lg font-bold text-[#153E43]">Cookies &amp; Outbound Referral Tracking</h3>
        <p>
          When you click outbound affiliate links to partner web hosts, those third-party websites may set a standard tracking cookie to attribute your qualifying promotional discount. Please consult the respective privacy policies of partner hosts for their specific data handling terms.
        </p>
      </div>
    </div>
  );
};
