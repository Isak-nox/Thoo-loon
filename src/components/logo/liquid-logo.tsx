import React from "react";

interface LiquidLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

/** Simple monogram used for Shopify Liquid in the About core stack. */
const LiquidLogo: React.FC<LiquidLogoProps> = ({
  width = 28,
  height = 28,
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="32" height="32" rx="8" fill="#212326" />
      <path
        d="M16 6.5c-3.2 4.2-7 8.1-7 12.2a7 7 0 0 0 14 0c0-4.1-3.8-8-7-12.2Z"
        fill="#95BF47"
      />
      <path
        d="M16 11.2c-1.9 2.5-4.2 4.8-4.2 7.3a4.2 4.2 0 1 0 8.4 0c0-2.5-2.3-4.8-4.2-7.3Z"
        fill="#5E8E3E"
      />
    </svg>
  );
};

export default LiquidLogo;
