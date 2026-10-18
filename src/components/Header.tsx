import React, { useState } from 'react';
import { PageId } from '../types';
import { HostmarcLogo } from './HostmarcLogo';
import { Menu, X, ArrowRight, Tag } from 'lucide-react';
import { AFFILIATE_CONFIG } from '../config/affiliates';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenAffiliateModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenAffiliateModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Services' },
    { id: 'reviews', label: 'Hosting Hub' },
    { id: 'comparisons', label: 'Comparisons' },
    { id: 'tools', label: 'Tools' },
    { id: 'about', label: 'Work & About' },
    { id: 'deals', label: 'Deals' },
  ];

  const handleLinkClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F3EFE6]/90 backdrop-blur-md border-b border-[#E2DDD2] transition-colors">
      {/* Top Affiliate Transparency Notice */}
      <div className="bg-[#153E43] text-[#F3EFE6] text-xs py-1.5 px-4 text-center flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1.5 text-amber-300 font-medium">
          <Tag className="w-3.5 h-3.5" />
          Verified Partner Offer:
        </span>
        <span className="hidden sm:inline opacity-90">
          Hostinger hosting guidance + up to 78% discount with code
        </span>
        <button
          onClick={onOpenAffiliateModal}
          className="font-mono bg-white/10 text-amber-300 border border-white/20 px-2 py-0.5 rounded text-[11px] font-bold hover:bg-white/20 transition-colors cursor-pointer"
        >
          HOSTMARC
        </button>
      </div>

      {/* Main Top Bar Contract: Zone 1 (Wordmark) — Zone 2 (Nav Links) — Zone 3 (Primary Action) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6 md:gap-8">
        {/* Zone 1: Brand Identity & Logo matching Logo Hostmarc.png */}
        <button
          onClick={() => handleLinkClick('home')}
          className="cursor-pointer focus:outline-none shrink-0 flex items-center py-1 hover:opacity-95 transition-opacity group"
          aria-label="HostMarc Home"
        >
          <HostmarcLogo
            height={46}
            color="petrol"
            className="flex items-center"
            imgClassName="h-10 sm:h-11 md:h-12 w-auto max-w-[210px] sm:max-w-[240px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.06)]"
          />
        </button>

        {/* Zone 2: Navigation Links (Clean text with hover underlines) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#153E43]/80">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`transition-colors whitespace-nowrap cursor-pointer py-1 relative ${
                  isActive
                    ? 'text-[#153E43] font-bold'
                    : 'hover:text-[#153E43]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#153E43] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action (Outlined "Let's talk" matching Brandguideline.png) */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleLinkClick('contact')}
            className="px-5 py-2 text-sm font-semibold text-[#153E43] border border-[#153E43]/40 rounded-lg hover:border-[#153E43] hover:bg-[#153E43] hover:text-[#F3EFE6] transition-all cursor-pointer whitespace-nowrap"
          >
            Let's talk
          </button>
          <button
            onClick={onOpenAffiliateModal}
            className="px-4 py-2 text-xs font-bold text-white bg-[#153E43] hover:bg-[#0E282B] rounded-lg shadow-sm transition-all cursor-pointer whitespace-nowrap"
          >
            Claim 78% Deal
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => handleLinkClick('contact')}
            className="text-xs font-semibold text-[#153E43] border border-[#153E43]/40 px-3 py-1.5 rounded-lg"
          >
            Let's talk
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#153E43] hover:bg-[#EAE4D7] rounded-lg focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F3EFE6] border-b border-[#E2DDD2] px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#E2DDD2]">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3 py-2 text-left text-sm rounded-lg transition-colors cursor-pointer ${
                  currentPage === link.id
                    ? 'bg-[#153E43] text-white font-semibold'
                    : 'text-[#153E43] hover:bg-[#EAE4D7]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAffiliateModal();
              }}
              className="w-full py-2.5 px-4 bg-[#C86445] hover:bg-[#B05337] text-white font-semibold text-sm rounded-lg shadow-sm transition-all cursor-pointer text-center"
            >
              Hostinger 78% Off Voucher (HOSTMARC)
            </button>
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full py-2.5 px-4 border border-[#153E43] text-[#153E43] hover:bg-[#153E43] hover:text-white font-semibold text-sm rounded-lg transition-all cursor-pointer text-center"
            >
              Start a Project / Let's talk
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
