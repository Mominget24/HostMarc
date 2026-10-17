import React, { useState } from 'react';
import { PageId } from '../../types';
import { COMPARISONS_DATA } from '../../data/comparisonsData';
import { ComparisonTable } from '../ComparisonTable';
import { Check, Trophy, Zap } from 'lucide-react';

interface ComparisonsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenModal: () => void;
}

export const ComparisonsPage: React.FC<ComparisonsPageProps> = ({
  onNavigate,
  onOpenModal,
}) => {
  const [selectedCompetitor, setSelectedCompetitor] = useState<string>('GoDaddy');

  const currentComparison =
    COMPARISONS_DATA.find((c) => c.competitor.toLowerCase() === selectedCompetitor.toLowerCase()) ||
    COMPARISONS_DATA[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C86445]">
          INDEPENDENT HEAD-TO-HEAD TESTING
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#153E43] tracking-tight">
          Hostinger vs. Major Hosting Competitors
        </h1>
        <p className="text-[#153E43]/80 text-sm sm:text-base leading-relaxed">
          See how Hostinger stacks up against GoDaddy, Bluehost, Namecheap, and SiteGround on raw server speed, disk storage, renewal costs, and user freedom.
        </p>

        {/* Competitor Selector Pills */}
        <div className="flex items-center justify-center gap-2 pt-4 flex-wrap">
          {['GoDaddy', 'Bluehost', 'Namecheap'].map((comp) => (
            <button
              key={comp}
              onClick={() => setSelectedCompetitor(comp)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCompetitor.toLowerCase() === comp.toLowerCase()
                  ? 'bg-[#153E43] text-white shadow-sm'
                  : 'bg-white text-[#153E43]/80 hover:text-[#153E43] border border-[#E2DDD2]'
              }`}
            >
              Hostinger vs {comp}
            </button>
          ))}
        </div>
      </div>

      {/* Head to Head Summary Card */}
      <div className="bg-white border border-[#E2DDD2] rounded-2xl p-6 sm:p-10 space-y-8 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-[#E2DDD2] pb-8">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#F3EFE6] border border-[#E2DDD2] flex items-center justify-center text-[#153E43]">
              <Trophy className="w-7 h-7 text-[#C86445]" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#C86445] font-bold uppercase tracking-wider">
                {currentComparison.verdict}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#153E43]">
                Hostinger vs. {currentComparison.competitor}
              </h2>
            </div>
          </div>

          {/* Scores comparison */}
          <div className="flex items-center gap-6 bg-[#F3EFE6] p-4 rounded-xl border border-[#E2DDD2]">
            <div className="text-center">
              <div className="text-2xl font-black font-mono text-[#153E43]">
                {currentComparison.hostingerScore}
              </div>
              <div className="text-[10px] text-[#153E43]/70 uppercase font-bold">Hostinger</div>
            </div>
            <span className="text-[#153E43]/40 font-bold text-sm">vs</span>
            <div className="text-center">
              <div className="text-2xl font-black font-mono text-[#153E43]/60">
                {currentComparison.competitorScore}
              </div>
              <div className="text-[10px] text-[#153E43]/60 uppercase font-bold">
                {currentComparison.competitor}
              </div>
            </div>
          </div>
        </div>

        {/* Narrative & Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#F8F5EE] p-5 rounded-xl border border-[#E2DDD2] space-y-1">
            <span className="text-xs font-bold text-[#C86445]">Price Differential</span>
            <p className="text-sm font-semibold text-[#153E43]">{currentComparison.priceDiff}</p>
          </div>
          <div className="bg-[#F8F5EE] p-5 rounded-xl border border-[#E2DDD2] space-y-1">
            <span className="text-xs font-bold text-[#153E43]">Response Speed Advantage</span>
            <p className="text-sm font-semibold text-[#153E43]">{currentComparison.speedDiff}</p>
          </div>
        </div>

        <p className="text-[#153E43]/85 text-sm leading-relaxed">
          {currentComparison.summary}
        </p>

        {/* Breakdown Table */}
        <div className="overflow-x-auto border border-[#E2DDD2] rounded-xl">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-[#F8F5EE] border-b border-[#E2DDD2] text-[#153E43]/70">
                <th className="py-3 px-4 font-semibold w-1/3">Feature / Metric</th>
                <th className="py-3 px-4 font-semibold text-[#153E43] bg-[#EFEAE0] w-1/3">
                  Hostinger
                </th>
                <th className="py-3 px-4 font-semibold text-[#153E43]/70 w-1/3">
                  {currentComparison.competitor}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2DDD2]">
              {currentComparison.keyDifferences.map((diff, dIdx) => (
                <tr key={dIdx} className="hover:bg-[#F9F6F0]">
                  <td className="py-3 px-4 font-medium text-[#153E43]">
                    {diff.category}
                  </td>
                  <td className="py-3 px-4 bg-[#F3EFE6]/60 text-[#153E43] font-semibold">
                    <div className="flex items-center gap-1.5">
                      {diff.winner === 'hostinger' && (
                        <Check className="w-4 h-4 text-[#153E43] shrink-0" />
                      )}
                      <span>{diff.hostinger}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-[#153E43]/75">
                    <div className="flex items-center gap-1.5">
                      {diff.winner === 'competitor' && (
                        <Check className="w-4 h-4 text-[#C86445] shrink-0" />
                      )}
                      <span>{diff.competitor}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E2DDD2]">
          <div className="text-xs text-[#153E43]/70">
            Want to see all 10+ providers compared simultaneously?
          </div>
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold text-white bg-[#153E43] hover:bg-[#0D282C] rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5 text-amber-300" />
            <span>Switch to Hostinger at 78% OFF</span>
          </button>
        </div>
      </div>

      {/* Embedded Full Matrix Table */}
      <ComparisonTable onOpenModal={onOpenModal} />
    </div>
  );
};
