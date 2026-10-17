import React from 'react';
import { Activity } from 'lucide-react';

interface HeroSculptureProps {
  className?: string;
}

export const HeroSculpture: React.FC<HeroSculptureProps> = ({ className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Container framing the 3D sculpture matching brand guideline */}
      <div className="relative w-full max-w-[480px] aspect-square rounded-2xl overflow-hidden bg-[#F3EFE6] border border-[#E2DDD2] shadow-xl shadow-[#153E43]/5 flex items-center justify-center p-3 sm:p-5 group">
        {/* Soft radial backlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.6),transparent_70%)] pointer-events-none" />

        {/* Photorealistic 3D Interlocking Petrol & Persimmon Sculpture */}
        <img
          src="/src/assets/images/sculpture_petrol_persimmon_1792278259583.jpg"
          alt="HostMarc Geometric Sculpture - Interlocking Petrol Torus and Terracotta Persimmon Arch"
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain relative z-10 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />

        {/* Quiet technical badge in corner */}
        <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between px-3.5 py-2 bg-white/80 backdrop-blur-md border border-[#E2DDD2] rounded-lg text-xs text-[#153E43]">
          <div className="flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-[#C86445]" />
            <span className="font-semibold">Lab Benchmark:</span>
            <span className="font-mono text-[#4B686C]">125ms TTFB</span>
          </div>
          <span className="text-[#4B686C] hidden sm:inline text-[11px]">LiteSpeed Node 01</span>
        </div>
      </div>
    </div>
  );
};
