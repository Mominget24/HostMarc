import React from 'react';
import { PageId } from '../../types';
import { ShoppingCart, Users, Terminal, Newspaper, ArrowRight, CheckCircle2 } from 'lucide-react';

interface UseCasesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenModal: () => void;
}

export const UseCasesPage: React.FC<UseCasesPageProps> = ({ onNavigate, onOpenModal }) => {
  const blueprints = [
    {
      icon: ShoppingCart,
      title: 'High-Conversion WooCommerce & eCommerce',
      badge: 'eCommerce Blueprint',
      tier: 'Business WordPress or Cloud Startup',
      price: 'From $3.99/mo',
      overview:
        'WooCommerce queries are notoriously database heavy. Every cart addition and checkout bypasses standard static page cache.',
      architecture: [
        'Pure NVMe SSD Storage: Slashes MySQL query wait times by over 70% compared to SATA disk arrays.',
        'LiteSpeed Object Cache: Keeps persistent session cookies and active cart metadata in RAM memory.',
        'Daily Automatic Backups: Protects transactional customer order logs with on-demand snapshot recovery.',
      ],
      clientProof: 'Implemented on high-volume product catalogs with 0.8s checkout response times.',
    },
    {
      icon: Users,
      title: 'Agencies & Freelancer Multi-Client Hosting',
      badge: 'Agency Blueprint',
      tier: 'Cloud Startup ($8.99/mo)',
      price: 'From $8.99/mo',
      overview:
        'Agencies managing 20 to 50 client websites need isolated container resources and separate user access delegation without paying $300/mo for managed cloud.',
      architecture: [
        'Host up to 300 Websites: Manage all client domains under a single unified hPanel account.',
        'Access Management Delegation: Grant clients access only to their specific website without exposing billing details.',
        'Dedicated IP Address: Shields your clients from shared IP spam blacklists and boosts email deliverability.',
      ],
      clientProof: 'Powers production client portals including Sunlitbd.com and regional agency networks.',
    },
    {
      icon: Newspaper,
      title: 'High-Traffic Content Blogs & Publishers',
      badge: 'Publishing Blueprint',
      tier: 'Premium Shared ($2.99/mo)',
      price: 'From $2.99/mo',
      overview:
        'Publishers receiving 50,000 to 200,000 monthly pageviews need cost efficiency while maintaining fast core web vitals for Google SEO rankings.',
      architecture: [
        'Guest Mode Cache Pre-Rendering: Serves static HTML snapshots in sub-80ms to first-time readers.',
        'Integrated Cloudflare CDN: Distributes images and static assets across 300+ global edge nodes.',
        'Uncapped Bandwidth: Zero bandwidth overage bills when your article goes viral on Reddit or Twitter.',
      ],
      clientProof: 'Achieves 99+ mobile performance scores on Google PageSpeed Insights.',
    },
    {
      icon: Terminal,
      title: 'Full-Stack Developers & VPS Microservices',
      badge: 'Developer Blueprint',
      tier: 'KVM 2 / KVM 4 VPS ($5.99/mo)',
      price: 'From $5.99/mo',
      overview:
        'When you need raw root SSH access, Docker containers, Node.js backend APIs, or Python FastAPI endpoints.',
      architecture: [
        'Full Root Access: Full sudo privileges with custom Linux kernel extensions and Docker compose.',
        'Dedicated vCPU & RAM: Guaranteed hardware resources with NVMe PCIe 4.0 disk storage.',
        'Automated Server Snapshots: Instant rollbacks before running breaking system updates.',
      ],
      clientProof: 'Used for automated scraping daemons, background worker queues, and custom headless CMS APIs.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C86445]">
          ARCHITECTURE BLUEPRINTS
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#153E43] tracking-tight">
          Hosting Architectures by Use Case
        </h1>
        <p className="text-[#153E43]/80 text-sm sm:text-base leading-relaxed">
          Detailed technical blueprints tailored for WooCommerce stores, web design agencies, digital media publishers, and full-stack developers.
        </p>
      </div>

      {/* Blueprints Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blueprints.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-white border border-[#E2DDD2] rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-[#153E43]/40 transition-all shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#F3EFE6] border border-[#E2DDD2] flex items-center justify-center text-[#153E43]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-mono text-[#C86445] font-bold block">
                      {item.price}
                    </span>
                    <span className="text-[11px] text-[#153E43]/60 font-mono">
                      {item.tier}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C86445] bg-[#C86445]/10 px-2.5 py-0.5 rounded-full font-mono">
                    {item.badge}
                  </span>
                  <h3 className="text-xl font-bold text-[#153E43] mt-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#153E43]/75 mt-2 leading-relaxed">
                    {item.overview}
                  </p>
                </div>

                {/* Architecture Bullets */}
                <div className="space-y-2.5 pt-3 border-t border-[#E2DDD2]">
                  <div className="text-xs font-bold font-mono text-[#153E43] uppercase tracking-wider">
                    Recommended Setup:
                  </div>
                  {item.architecture.map((arch, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2 text-xs text-[#153E43]/85 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#153E43] shrink-0 mt-0.5" />
                      <span>{arch}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-lg bg-[#F8F5EE] border border-[#E2DDD2] text-xs text-[#153E43]/80 italic">
                  Production Note: {item.clientProof}
                </div>
              </div>

              <button
                onClick={onOpenModal}
                className="w-full py-2.5 px-4 text-xs font-bold text-white bg-[#153E43] hover:bg-[#0D282C] rounded-xl shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Deploy This Architecture (78% OFF)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
