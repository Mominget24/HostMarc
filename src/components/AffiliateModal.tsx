import React, { useState } from 'react';
import { X, Check, Copy, ExternalLink, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { AFFILIATE_CONFIG } from '../config/affiliates';

interface AffiliateModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCoupon?: string;
}

export const AffiliateModal: React.FC<AffiliateModalProps> = ({
  isOpen,
  onClose,
  selectedCoupon = 'HOSTMARC',
}) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => {
      setCopiedCode(null);
    }, 3000);
  };

  const handleOpenPartnerSite = () => {
    window.open(AFFILIATE_CONFIG.partnerUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#153E43]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#F3EFE6] border border-[#E2DDD2] rounded-3xl p-6 sm:p-8 shadow-2xl text-[#153E43]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#153E43]/60 hover:text-[#153E43] rounded-full hover:bg-black/5 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C86445]/10 border border-[#C86445]/30 text-[#C86445] text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified October 2026 Partner Voucher</span>
          </div>
          <h3 className="text-2xl font-extrabold tracking-tight text-[#153E43]">
            Claim Up to 78% OFF Hostinger
          </h3>
          <p className="text-xs sm:text-sm text-[#153E43]/75">
            Use our official partner code below to unlock maximum introductory savings plus 3 bonus free months.
          </p>
        </div>

        {/* Coupon Cards */}
        <div className="space-y-3 mb-6">
          {AFFILIATE_CONFIG.coupons.map((coupon) => (
            <div
              key={coupon.code}
              className={`p-3.5 rounded-xl border transition-all ${
                coupon.code === selectedCoupon
                  ? 'bg-white border-[#153E43] shadow-sm'
                  : 'bg-white/60 border-[#E2DDD2] hover:border-[#153E43]/30'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-extrabold text-base text-[#153E43]">
                      {coupon.code}
                    </span>
                    <span className="text-[11px] font-bold text-white bg-[#C86445] px-2 py-0.5 rounded">
                      {coupon.discount}
                    </span>
                  </div>
                  <p className="text-xs text-[#153E43]/70 mt-1">{coupon.applicableTo}</p>
                </div>
                <button
                  onClick={() => handleCopy(coupon.code)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer shrink-0 ${
                    copiedCode === coupon.code
                      ? 'bg-[#153E43] text-white'
                      : 'bg-[#F3EFE6] hover:bg-[#EAE4D7] text-[#153E43] border border-[#E2DDD2]'
                  }`}
                >
                  {copiedCode === coupon.code ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-white" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* What You Get Breakdown */}
        <div className="bg-white rounded-xl p-4 border border-[#E2DDD2] mb-6 text-xs text-[#153E43] space-y-2">
          <p className="font-bold text-[#153E43]">What’s included in this promotional tier:</p>
          <div className="grid grid-cols-2 gap-2 text-[#153E43]/80">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C86445]" /> Free Domain Name ($9.99/yr)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C86445]" /> Unlimited Free SSLs
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C86445]" /> Automatic Daily Backups
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C86445]" /> Free Zero-Downtime Migration
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="space-y-3">
          <button
            onClick={handleOpenPartnerSite}
            className="w-full flex items-center justify-center gap-2.5 py-3 px-5 text-sm font-bold text-white bg-[#153E43] hover:bg-[#0E282B] rounded-xl shadow-md transition-all cursor-pointer"
          >
            <Zap className="w-4 h-4 text-amber-300" />
            <span>Go to Hostinger &amp; Apply Discount</span>
            <ExternalLink className="w-4 h-4 opacity-70" />
          </button>

          <div className="flex items-center justify-center gap-2 text-[11px] text-[#153E43]/70">
            <ShieldCheck className="w-4 h-4 text-[#153E43]" />
            <span>Official Hostinger Partner Link · 30-Day Money-Back Guarantee</span>
          </div>
        </div>
      </div>
    </div>
  );
};
