import { Logo } from "./Logo";

interface WordmarkProps {
  variant?: "black" | "white";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function Wordmark({ variant = "black", size = "md", className = "" }: WordmarkProps) {
  return <Logo variant={variant} size={size} className={className} />;
}
