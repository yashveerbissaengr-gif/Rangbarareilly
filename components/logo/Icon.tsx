import { Logo } from "./Logo";

interface IconProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function Icon({ size = "md", className = "" }: IconProps) {
  return <Logo variant="icon" size={size} className={className} />;
}
