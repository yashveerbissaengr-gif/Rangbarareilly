"use client";

import { useRef } from "react";
import gsap from "gsap";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const container = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(container.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="flex-1 flex flex-col">
      {children}
    </div>
  );
}
