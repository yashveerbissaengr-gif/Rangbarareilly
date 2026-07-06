import Image from "next/image";

type LogoVariant = "black" | "white" | "icon" | "full";
type LogoSize = "xs" | "sm" | "md" | "lg" | "xl";

interface LogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
  heightOverride?: number | string; 
  widthOverride?: number | string;
}

export function Logo({ variant = "black", size = "md", className = "" }: LogoProps) {
  const isWhite = variant === "white";
  const textColor = isWhite ? "text-white" : "text-[#9A161F]";
  
  // Use a base font-size to drive the 'em' scaling for the entire monogram
  let wrapperSize = "text-[64px]"; // md - optimized for standard header height, larger visual size but smaller footprint
  if (size === "xs") wrapperSize = "text-[32px]";
  if (size === "sm") wrapperSize = "text-[48px]"; 
  if (size === "lg") wrapperSize = "text-[84px]";
  if (size === "xl") wrapperSize = "text-[120px]";

  return (
    <div 
      className={`relative flex items-center justify-center transition-all duration-300 hover:opacity-100 opacity-95 ${wrapperSize} ${className} w-[1.7em] h-[0.7em]`}
    >
      {/* 1. Large R-B Monogram */}
      <div className={`absolute inset-0 flex items-center justify-center font-serif text-[1em] leading-none ${textColor}`}>
        <span className="relative -top-[0.03em] left-[0.03em] z-0">R</span>
        <span className="relative top-[0.04em] -left-[0.03em] z-0">B</span>
      </div>
      
      {/* 2. Horizontal Text Cutout */}
      <div className="absolute top-[48%] -translate-y-1/2 w-full flex justify-center z-10">
        <div className={`px-[0.08em] py-[0.01em] ${isWhite ? 'bg-[#1a1a1a]' : 'bg-[#FDFCF8]'}`}>
          <span className={`block text-[0.14em] font-sans font-bold uppercase tracking-[0.28em] ${textColor} ml-[0.02em]`}>
            RANGBAREILLY
          </span>
        </div>
      </div>
    </div>
  );
}
