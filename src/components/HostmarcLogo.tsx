import React from 'react';

interface HostmarcLogoProps {
  className?: string;
  variant?: 'full' | 'symbol-only';
  color?: 'petrol' | 'white' | 'limestone';
  height?: number;
}

export const HostmarcLogo: React.FC<HostmarcLogoProps> = ({
  className = '',
  variant = 'full',
  color = 'petrol',
  height = 32,
}) => {
  const fillColor =
    color === 'white'
      ? '#FFFFFF'
      : color === 'limestone'
      ? '#F3EFE6'
      : '#153E43';

  if (variant === 'symbol-only') {
    return (
      <svg
        height={height}
        viewBox="0 0 110 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-block shrink-0 ${className}`}
        aria-label="HostMarc symbol"
      >
        {/* Geometric Monolithic Faceted H Symbol from approved brand mark */}
        {/* Left vertical pillar with top/bottom angled facets */}
        <path
          d="M 12 18 L 44 8 L 44 102 L 12 92 Z"
          fill={fillColor}
        />
        {/* Right vertical pillar with top/bottom angled facets */}
        <path
          d="M 66 8 L 98 18 L 98 92 L 66 102 Z"
          fill={fillColor}
        />
        {/* Central connecting crossbar */}
        <rect
          x="38"
          y="44"
          width="34"
          height="22"
          fill={fillColor}
        />
      </svg>
    );
  }

  // Full Horizontal Lockup: Symbol + Lowercase 'hostmarc' wordmark
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Symbol */}
      <svg
        height={height}
        viewBox="0 0 110 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <path
          d="M 14 18 L 44 8 L 44 102 L 14 92 Z"
          fill={fillColor}
        />
        <path
          d="M 66 8 L 96 18 L 96 92 L 66 102 Z"
          fill={fillColor}
        />
        <rect
          x="38"
          y="44"
          width="34"
          height="22"
          fill={fillColor}
        />
      </svg>

      {/* Exact lowercase wordmark: "hostmarc" */}
      <span
        className="font-bold tracking-tight lowercase"
        style={{
          color: fillColor,
          fontSize: `${Math.round(height * 0.82)}px`,
          letterSpacing: '-0.03em',
          lineHeight: 1,
          fontFamily: "'Manrope', sans-serif",
        }}
      >
        hostmarc
      </span>
    </div>
  );
};
