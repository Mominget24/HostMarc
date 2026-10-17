import React, { useState } from 'react';
import { Check, Zap } from 'lucide-react';

interface ComparisonTableProps {
  onOpenModal: () => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onOpenModal }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'performance' | 'pricing' | 'features'>('all');

  const rows = [
    {
      category: 'performance',
      feature: 'Web Server Technology',
      hostinger: 'LiteSpeed Enterprise (LSCache native)',
      godaddy: 'Standard Apache (No server caching)',
      bluehost: 'Standard Apache with proxy',
      namecheap: 'Apache / Nginx hybrid',
      winner: 'Hostinger (3x faster throughput)',
    },
    {
      category: 'performance',
      feature: 'Storage Hardware',
      hostinger: 'Pure NVMe SSD (Up to 6,000 MB/s)',
      godaddy: 'Legacy SATA SSD',
      bluehost: 'SATA SSD Storage',
      namecheap: 'Standard SSD',
      winner: 'Hostinger (NVMe read/write speed)',
    },
    {
      category: 'performance',
      feature: 'Average South Asia TTFB',
      hostinger: '85ms - 142ms (Singapore node)',
      godaddy: '420ms - 510ms',
      bluehost: '440ms - 550ms',
      namecheap: '380ms - 460ms',
      winner: 'Hostinger',
    },
    {
      category: 'pricing',
      feature: 'Introductory Price (48mo)',
      hostinger: '$2.99 / month',
      godaddy: '$9.99 / month',
      bluehost: '$4.95 / month',
      namecheap: '$2.98 / month',
      winner: 'Hostinger ($2.99 + 3 mo free)',
    },
    {
      category: 'pricing',
      feature: 'Standard Renewal Price',
      hostinger: '$6.99 - $8.99 / mo',
      godaddy: '$14.99 / mo',
      bluehost: '$11.99 / mo',
      namecheap: '$5.88 / mo',
      winner: 'Namecheap on renewal; Hostinger on TCO',
    },
    {
      category: 'features',
      feature: 'Free Domain Name',
      hostinger: 'Yes (1st year, $9.99 value)',
      godaddy: 'Yes (with annual plan)',
      bluehost: 'Yes (1st year)',
      namecheap: 'Only .website or .me domains',
      winner: 'Hostinger / Bluehost',
    },
    {
      category: 'features',
      feature: 'SSL Certificate Cost',
      hostinger: 'Free Unlimited Lifetime Let’s Encrypt',
      godaddy: 'Paid after year 1 ($89.99/yr extra!)',
      bluehost: 'Free Let’s Encrypt',
      namecheap: 'Free PositiveSSL 1st year only',
      winner: 'Hostinger (Truly free forever)',
    },
    {
      category: 'features',
      feature: 'Automated Daily Backups',
      hostinger: 'Included Free on Business tier',
      godaddy: 'Paid addon ($2.99/mo)',
      bluehost: 'Paid addon ($3.29/mo CodeGuard)',
      namecheap: 'Twice-weekly on basic tier',
      winner: 'Hostinger',
    },
    {
      category: 'features',
      feature: '1-Click WordPress Staging',
      hostinger: 'Included on Business ($3.99/mo)',
      godaddy: 'Only on higher tiers ($14.99+)',
      bluehost: 'Included in WordPress tools',
      namecheap: 'No native 1-click staging',
      winner: 'Hostinger / Bluehost',
    },
    {
      category: 'features',
      feature: 'Control Panel Usability',
      hostinger: 'hPanel (Clean, instant 1s page load)',
      godaddy: 'Modified cPanel with upsell banners',
      bluehost: 'Custom dashboard + cPanel blend',
      namecheap: 'Classic cPanel',
      winner: 'Hostinger (Zero bloat)',
    },
  ];

  const filteredRows =
    activeTab === 'all' ? rows : rows.filter((r) => r.category === activeTab);

  return (
    <div className="bg-white border border-[#E2DDD2] rounded-2xl overflow-hidden shadow-sm">
      {/* Table Filter Tabs */}
      <div className="p-4 sm:p-6 border-b border-[#E2DDD2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-[#153E43] flex items-center gap-2">
            <span>2026 Web Hosting Technical Matrix</span>
            <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-[#153E43]/10 text-[#153E43] border border-[#153E43]/20">
              Verified Specs
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-[#153E43]/70 mt-1">
            Raw architectural specifications compared against GoDaddy, Bluehost, and Namecheap.
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex items-center gap-1 p-1 bg-[#F3EFE6] rounded-lg border border-[#E2DDD2] text-xs self-start sm:self-auto">
          {(
            [
              { id: 'all', label: 'All Specs' },
              { id: 'performance', label: 'Speed & Hardware' },
              { id: 'pricing', label: 'Pricing & Renewal' },
              { id: 'features', label: 'Features & Backups' },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 rounded-md font-medium transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#153E43] text-white shadow-sm'
                  : 'text-[#153E43]/70 hover:text-[#153E43]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-[#F8F5EE] border-b border-[#E2DDD2] text-[#153E43]/80">
              <th className="py-3.5 px-4 sm:px-6 font-semibold w-1/4">Specification</th>
              <th className="py-3.5 px-4 font-semibold text-[#153E43] bg-[#EFEAE0] border-x border-[#E2DDD2] w-1/4">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-base text-[#153E43]">Hostinger</span>
                  <span className="text-[10px] bg-[#C86445] text-white px-1.5 py-0.2 rounded font-mono font-bold">
                    RECOMMENDED
                  </span>
                </div>
              </th>
              <th className="py-3.5 px-4 font-semibold text-[#153E43]/70 w-1/6">GoDaddy</th>
              <th className="py-3.5 px-4 font-semibold text-[#153E43]/70 w-1/6">Bluehost</th>
              <th className="py-3.5 px-4 font-semibold text-[#153E43]/70 w-1/6">Namecheap</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E2DDD2]">
            {filteredRows.map((row, idx) => (
              <tr
                key={idx}
                className="hover:bg-[#F9F6F0] transition-colors"
              >
                <td className="py-3.5 px-4 sm:px-6 font-medium text-[#153E43]">
                  {row.feature}
                </td>
                <td className="py-3.5 px-4 text-[#153E43] font-semibold bg-[#F3EFE6]/60 border-x border-[#E2DDD2]">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#153E43] shrink-0" />
                    <span>{row.hostinger}</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[#153E43]/70">{row.godaddy}</td>
                <td className="py-3.5 px-4 text-[#153E43]/70">{row.bluehost}</td>
                <td className="py-3.5 px-4 text-[#153E43]/70">{row.namecheap}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-[#F8F5EE] border-t border-[#E2DDD2]">
              <td className="py-4 px-4 sm:px-6 text-xs text-[#153E43]/70">
                Summary Recommendation
              </td>
              <td className="py-4 px-4 bg-[#EFEAE0] border-x border-[#E2DDD2]">
                <button
                  onClick={onOpenModal}
                  className="w-full py-2 px-3 text-xs font-bold text-white bg-[#153E43] hover:bg-[#0D282C] rounded-lg shadow-sm transition-all cursor-pointer flex items-center justify-center gap-1"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-300" />
                  <span>Choose Hostinger (78% OFF)</span>
                </button>
              </td>
              <td className="py-4 px-4 text-xs text-[#153E43]/60 italic">Too expensive on renewal</td>
              <td className="py-4 px-4 text-xs text-[#153E43]/60 italic">Slow traditional Apache</td>
              <td className="py-4 px-4 text-xs text-[#153E43]/60 italic">Low server RAM limits</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};
