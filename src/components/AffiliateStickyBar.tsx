import React, { useState } from 'react';
import { ArrowRight, X, Sparkles, Check, Copy } from 'lucide-react';
import { AFFILIATE_CONFIG } from '../config/affiliates';

interface AffiliateStickyBarProps {
  onOpenModal: () => void;
}

export const AffiliateStickyBar: React.FC<AffiliateStickyBarProps> = ({ onOpenModal }) => {
  const [dismissed, setDismissed] = useState(false);
  const [copied, setCopied] = useState(false);

  if (dismissed) return null;

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(AFFILIATE_CONFIG.defaultCoupon);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-30 p-2 sm:p-3 pointer-events-none">
      <div className="max-w-4xl mx-auto bg-[#153E43] border border-[#0D282C] rounded-xl p-2.5 sm:p-3.5 shadow-2xl pointer-events-auto flex items-center justify-between gap-3 text-[#F3EFE6]">
        <div className="flex items-center gap-3 min-w-0">
          <div className="hidden sm:flex w-8 h-8 rounded-lg bg-white/10 items-center justify-center text-amber-300 shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs sm:text-sm font-bold text-white whitespace-nowrap">
                Save {AFFILIATE_CONFIG.maxDiscount} + {AFFILIATE_CONFIG.freeMonths}
              </span>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1 font-mono text-[11px] font-bold text-amber-300 bg-black/20 border border-white/20 px-2 py-0.5 rounded hover:bg-black/40 transition-colors cursor-pointer"
                title="Click to copy coupon code"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'COPIED!' : AFFILIATE_CONFIG.defaultCoupon}</span>
              </button>
            </div>
            <p className="text-[11px] text-[#F3EFE6]/75 truncate hidden sm:block">
              Hostinger hosting guidance: starts at {AFFILIATE_CONFIG.starterPrice}/mo with free domain, SSL, and zero-downtime migration.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenModal}
            className="px-3.5 py-1.5 sm:py-2 text-xs font-bold text-white bg-[#C86445] hover:bg-[#B05337] rounded-lg shadow-sm transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <span>Claim Offer</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setDismissed(true)}
            className="p-1.5 text-white/60 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
