import React from 'react';
import { Activity, Globe, ShieldCheck } from 'lucide-react';
import heroMockupImg from '../assets/images/website_hosting_template_1792344298198.jpg';

interface HeroSculptureProps {
  className?: string;
}

export const HeroSculpture: React.FC<HeroSculptureProps> = ({ className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer ambient glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#153E43]/10 via-[#C86445]/10 to-transparent rounded-3xl blur-2xl -z-10" />

      {/* Container framing the website template snapshot with hosting domain */}
      <div className="relative w-full max-w-[500px] aspect-square rounded-2xl overflow-hidden bg-[#F3EFE6] border border-[#DDD5C6] shadow-2xl shadow-[#153E43]/10 flex flex-col p-2 sm:p-2.5 group">
        {/* Sleek top browser / domain header bar */}
        <div className="flex items-center justify-between px-3 py-2 bg-white/90 backdrop-blur-sm rounded-t-xl border-b border-[#E8E2D5] text-xs text-[#153E43]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E57373]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFB74D]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#81C784]" />
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 bg-[#F5F2EB] rounded-md border border-[#E2DDD2] text-[11px] font-mono text-[#153E43]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-semibold text-emerald-700">https://</span>
            <span className="font-medium">yourbrand.com</span>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="hidden sm:inline">Active</span>
          </div>
        </div>

        {/* High-res website template preview image */}
        <div className="relative flex-1 rounded-b-xl overflow-hidden bg-[#FAF7F2]">
          <img
            src={heroMockupImg || "/images/website_hosting_template_1792344298198.jpg"}
            alt="Modern Website Template with Connected Domain and LiteSpeed Hosting Telemetry"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />

          {/* Floating live telemetry pill */}
          <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between px-3.5 py-2 bg-[#153E43]/90 backdrop-blur-md border border-white/20 rounded-lg text-xs text-white shadow-lg">
            <div className="flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-[#C86445]" />
              <span className="font-semibold text-white/90">LiteSpeed NVMe:</span>
              <span className="font-mono text-[#FFD180] font-bold">125ms TTFB</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-white/80">
              <Globe className="w-3 h-3 text-emerald-400" />
              <span className="hidden sm:inline font-medium">Global DNS Propagated</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
