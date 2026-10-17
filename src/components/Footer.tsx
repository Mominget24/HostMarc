import React from 'react';
import { PageId } from '../types';
import { HostmarcLogo } from './HostmarcLogo';
import { Shield, Globe, Cpu, ArrowUpRight } from 'lucide-react';
import { AFFILIATE_CONFIG } from '../config/affiliates';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenAffiliateModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAffiliateModal }) => {
  return (
    <footer className="bg-[#153E43] text-[#F3EFE6] pt-16 pb-12 text-sm selection:bg-[#C86445] selection:text-white border-t border-[#0E282B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <HostmarcLogo height={32} color="white" />
              <p className="text-xs font-mono font-bold tracking-widest text-[#C86445] uppercase mt-2">
                MAKE YOUR MARK ONLINE
              </p>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm mt-3">
              Websites, hosting guidance, and digital marketing. We help modern businesses launch with clarity and grow with purpose.
            </p>
            <div className="text-xs text-white/50 pt-1">
              Lead Systems Engineer: Farhan Momen · Dhaka, Bangladesh
            </div>
          </div>

          {/* Web & Growth Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/90 mb-4 font-mono">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors text-left"
                >
                  Website Design &amp; Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors text-left"
                >
                  Hosting &amp; Maintenance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors text-left"
                >
                  SEO &amp; Digital Marketing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('use-cases')}
                  className="hover:text-white transition-colors text-left"
                >
                  WooCommerce Architecture
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  Client Work Portfolio
                </button>
              </li>
            </ul>
          </div>

          {/* Dedicated Hosting Hub */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/90 mb-4 font-mono">
              Hosting Hub
            </h4>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <button
                  onClick={() => onNavigate('reviews')}
                  className="hover:text-white transition-colors text-left"
                >
                  Hostinger Complete Review
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('comparisons')}
                  className="hover:text-white transition-colors text-left"
                >
                  Hostinger vs GoDaddy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('comparisons')}
                  className="hover:text-white transition-colors text-left"
                >
                  Hostinger vs Bluehost
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('migration')}
                  className="hover:text-white transition-colors text-left"
                >
                  Zero-Downtime Migration Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tools')}
                  className="hover:text-white transition-colors text-left"
                >
                  Hosting TCO Calculator
                </button>
              </li>
            </ul>
          </div>

          {/* Transparency & Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/90 mb-4 font-mono">
              Transparency
            </h4>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <button
                  onClick={() => onNavigate('deals')}
                  className="hover:text-white transition-colors text-left text-amber-300 font-semibold"
                >
                  Verified October Coupons
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('disclosure')}
                  className="hover:text-white transition-colors text-left"
                >
                  Affiliate Disclosure
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('privacy')}
                  className="hover:text-white transition-colors text-left"
                >
                  Privacy Notice
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Start a Project
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Affiliate Disclosure Notice Banner */}
        <div className="py-6 border-b border-white/10 text-xs text-white/60 leading-relaxed space-y-2">
          <div className="flex items-center gap-2 text-white/80 font-medium">
            <Shield className="w-3.5 h-3.5 text-amber-300" />
            <span>Affiliate Disclosure &amp; Service Boundaries:</span>
          </div>
          <p>
            HostMarc may earn a commission when you make a qualifying purchase through our Hostinger affiliate links. Hosting is purchased from and provided by Hostinger. Any HostMarc setup, development, or maintenance services are separately agreed.
          </p>
          <p>
            Real client systems powered by these architectures include <strong className="text-white">Sunlitbd.com</strong> and <strong className="text-white">Ural Travel</strong>. We never accept payment in exchange for positive benchmark ratings.
          </p>
        </div>


        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} HostMarc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('disclosure')}
              className="hover:text-white transition-colors"
            >
              Affiliate Transparency
            </button>
            <button
              onClick={() => onNavigate('privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-white transition-colors"
            >
              Contact Lab
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
