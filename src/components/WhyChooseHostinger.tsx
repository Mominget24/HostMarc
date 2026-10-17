import React from 'react';
import { Zap, HardDrive, Globe, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';

interface WhyChooseHostingerProps {
  onOpenModal: () => void;
  onExploreBenchmarks: () => void;
}

export const WhyChooseHostinger: React.FC<WhyChooseHostingerProps> = ({
  onOpenModal,
  onExploreBenchmarks,
}) => {
  const pillars = [
    {
      icon: Zap,
      title: 'LiteSpeed Enterprise Web Server',
      metric: '300% Faster',
      subtext: 'vs Traditional Apache / Nginx stacks',
      description:
        'Processes cached static and dynamic assets directly in server kernel memory without calling the PHP engine. Handles sudden traffic spikes with near-zero CPU spikes.',
      benefits: ['Native LSCache integration', 'Built-in QUIC & HTTP/3 support', 'Reduced database lock latency'],
    },
    {
      icon: HardDrive,
      title: 'Ultra-Fast NVMe SSD Drives',
      metric: 'Up to 6,000 MB/s',
      subtext: 'PCIe 4.0 read/write IOPS throughput',
      description:
        'Unlike budget hosts using legacy SATA-III drives limited to 550 MB/s, Hostinger’s Business & Cloud tiers run on pure NVMe arrays for instantaneous MySQL database queries.',
      benefits: ['5x faster WooCommerce checkouts', 'Zero database throttling', 'Rapid backup creation'],
    },
    {
      icon: Globe,
      title: 'Singapore & Global Data Centers',
      metric: '85ms - 140ms TTFB',
      subtext: 'across South Asia and Asia-Pacific',
      description:
        'A dedicated Singapore facility connected directly to trans-oceanic cables ensures users in Bangladesh, India, and Southeast Asia experience instant page loads.',
      benefits: ['Direct SEA-ME-WE fiber routes', 'Choice of 7 global server regions', 'Free 1-click datacenter relocation'],
    },
    {
      icon: Layers,
      title: 'Modern hPanel Cloud Management',
      metric: 'Sub-1s Load Time',
      subtext: 'React & Node microservices architecture',
      description:
        'Custom built to eliminate the clunky 1990s cPanel interface. Enjoy lightning-fast DNS updates, automated SSL provisioning, and painless PHP 8.3 switching.',
      benefits: ['1-Click WordPress staging', 'Integrated Git deploy hooks', 'Automated malware scanner'],
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F3EFE6] border-t border-[#E2DDD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C86445]">
            ARCHITECTURAL ADVANTAGES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#153E43]">
            Why We Recommend Hostinger’s Server Stack
          </h2>
          <p className="text-[#153E43]/75 text-sm sm:text-base leading-relaxed">
            We tore down server specifications, stress-tested concurrent visitors, and analyzed round-trip latency to reveal what separates modern hosting from legacy competitors.
          </p>
        </div>

        {/* 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E2DDD2] rounded-2xl p-6 sm:p-8 hover:border-[#153E43]/40 transition-all shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#F3EFE6] border border-[#E2DDD2] flex items-center justify-center text-[#153E43]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <div className="text-xl sm:text-2xl font-bold font-mono text-[#153E43] tabular-nums">
                        {pillar.metric}
                      </div>
                      <div className="text-[11px] text-[#153E43]/60">{pillar.subtext}</div>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#153E43] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-[#153E43]/75 text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2DDD2] space-y-2">
                  {pillar.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-xs text-[#153E43]/85">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#153E43] shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Card */}
        <div className="bg-[#153E43] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold">
              Ready to test Hostinger on your own project with zero risk?
            </h4>
            <p className="text-sm text-white/75">
              Hostinger includes a 30-day no-questions-asked refund guarantee on all plans.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
            <button
              onClick={onExploreBenchmarks}
              className="px-4 py-2 text-xs font-semibold text-white/90 hover:text-white border border-white/20 hover:border-white rounded-lg transition-colors cursor-pointer"
            >
              View Latency Map
            </button>
            <button
              onClick={onOpenModal}
              className="px-5 py-2.5 text-xs font-bold text-white bg-[#C86445] hover:bg-[#B05337] rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Get 78% Discount</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
