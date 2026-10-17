import React from 'react';

interface HeroSculptureProps {
  className?: string;
}

export const HeroSculpture: React.FC<HeroSculptureProps> = ({ className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Container with soft lighting and subtle floor plane */}
      <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-b from-[#EFEAE0] to-[#E8E1D3] border border-[#E0D8CA]/80 shadow-2xl shadow-[#153E43]/10 flex items-center justify-center p-6 sm:p-8">
        {/* Soft background radial light */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_35%,rgba(255,255,255,0.7),transparent_70%)] pointer-events-none" />

        {/* Tactile 3D Geometric Architectural Sculpture */}
        <svg
          viewBox="0 0 500 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xl select-none"
        >
          <defs>
            {/* Ambient floor shadow */}
            <radialGradient id="floorShadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#153E43" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#153E43" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#153E43" stopOpacity="0" />
            </radialGradient>

            {/* Petrol Teal Arch Shading Gradients */}
            <linearGradient id="petrolArchLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1D4E54" />
              <stop offset="60%" stopColor="#153E43" />
              <stop offset="100%" stopColor="#0D272A" />
            </linearGradient>

            <linearGradient id="petrolArchTop" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#255D64" />
              <stop offset="100%" stopColor="#19454A" />
            </linearGradient>

            <linearGradient id="petrolLowerBlock" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#1D4E54" />
              <stop offset="100%" stopColor="#0E282B" />
            </linearGradient>

            {/* Warm Persimmon Terracotta Cylinder Gradient */}
            <linearGradient id="persimmonCylinder" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DA7252" />
              <stop offset="45%" stopColor="#C86445" />
              <stop offset="90%" stopColor="#9C442A" />
            </linearGradient>

            <linearGradient id="persimmonCylinderTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E28264" />
              <stop offset="100%" stopColor="#BA593C" />
            </linearGradient>
          </defs>

          {/* Floor Shadow beneath sculpture */}
          <ellipse cx="250" cy="360" rx="190" ry="32" fill="url(#floorShadow)" />
          <ellipse cx="370" cy="335" rx="50" ry="16" fill="url(#floorShadow)" />

          {/* 1. Behind Object: Persimmon Terracotta Cylinder standing on right */}
          <g transform="translate(345, 155)">
            {/* Cylinder Base/Body */}
            <path
              d="M 5 25 L 5 160 C 5 174, 55 174, 55 160 L 55 25 Z"
              fill="url(#persimmonCylinder)"
            />
            {/* Cylinder Top Lip Ellipse */}
            <ellipse cx="30" cy="25" rx="25" ry="12" fill="url(#persimmonCylinderTop)" />
            {/* Cylinder Highlight */}
            <path
              d="M 12 25 L 12 160"
              stroke="rgba(255,255,255,0.22)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>

          {/* 2. Middle-Back: Vertical Intertwined Petrol Loop / Arch */}
          <g transform="translate(195, 60)">
            {/* Outer Arch Shape with curved top */}
            <path
              d="M 20 220 
                 L 20 85 
                 C 20 20, 140 20, 140 85 
                 L 140 220 
                 L 88 220 
                 L 88 100 
                 C 88 65, 72 65, 72 100 
                 L 72 220 Z"
              fill="url(#petrolArchLight)"
            />

            {/* Top Curved Rim Highlight */}
            <path
              d="M 20 85 C 20 20, 140 20, 140 85"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="4"
              fill="none"
            />

            {/* Inner Window Rim Shadow */}
            <path
              d="M 72 100 C 72 65, 88 65, 88 100 L 88 220 L 72 220 Z"
              fill="rgba(0,0,0,0.18)"
            />
          </g>

          {/* 3. Foreground: Horizontal Interlocking Block Arch with Rounded Ends */}
          <g transform="translate(75, 145)">
            {/* Soft contact shadow onto back pillar */}
            <rect x="110" y="70" width="70" height="90" rx="10" fill="rgba(0,0,0,0.22)" />

            {/* Main Horizontal Sculptural Arch */}
            <path
              d="M 35 150 
                 C 15 150, 0 135, 0 115 
                 L 0 45 
                 C 0 20, 20 0, 45 0 
                 L 190 0 
                 C 220 0, 235 20, 235 50 
                 L 235 115 
                 C 235 135, 220 150, 200 150 
                 L 165 150 
                 L 165 65 
                 C 165 42, 150 36, 125 36 
                 L 70 36 
                 C 50 36, 35 48, 35 70 
                 Z"
              fill="url(#petrolLowerBlock)"
            />

            {/* Sculptural Top Plane Bevel / Surface Light */}
            <path
              d="M 2 45 C 5 22, 22 4, 45 2 L 190 2 C 218 2, 232 20, 234 48"
              stroke="rgba(255,255,255,0.24)"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />

            {/* Base contact shadow */}
            <ellipse cx="35" cy="155" rx="30" ry="6" fill="rgba(10,35,38,0.3)" />
            <ellipse cx="200" cy="155" rx="30" ry="6" fill="rgba(10,35,38,0.3)" />
          </g>
        </svg>

        {/* Subtle pill-free brand micro-caption in corner */}
        <div className="absolute bottom-4 left-6 text-[10px] uppercase font-mono tracking-wider text-[#153E43]/60 font-semibold">
          Websites · Hosting · Growth
        </div>
      </div>
    </div>
  );
};
