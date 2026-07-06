import Link from "next/link";
import { Logo } from "./Logo";

interface LogoLinkProps {
  variant?: "black" | "white" | "icon" | "full";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  heightOverride?: number | string;
  widthOverride?: number | string;
}

export function LogoLink({ variant = "black", size = "md", className = "", heightOverride, widthOverride }: LogoLinkProps) {
  return (
    <Link href="/" className="inline-block" aria-label="Go to Rangbareilly Homepage">
      <Logo 
        variant={variant} 
        size={size} 
        className={className} 
        heightOverride={heightOverride}
        widthOverride={widthOverride}
      />
    </Link>
  );
}
