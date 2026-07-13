import React from "react";
import { cn } from "../../lib/utils";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: React.ElementType;
}

export function Heading({ children, className, as: Component = "h2", ...props }: TypographyProps) {
  return (
    <Component
      className={cn("font-serif text-glint-charcoal font-normal tracking-wide", className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Text({ children, className, as: Component = "p", ...props }: TypographyProps) {
  return (
    <Component
      className={cn("font-sans text-glint-charcoal font-light leading-relaxed tracking-wide", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
