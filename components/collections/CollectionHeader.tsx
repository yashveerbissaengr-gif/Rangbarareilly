import React from "react";
import { Heading, Text } from "../ui/Typography";

import { cn } from "@/lib/utils";

interface CollectionHeaderProps {
  title: string;
  description?: string;
  productCount: number;
  theme?: "core" | "loud";
}

export function CollectionHeader({ title, description, productCount, theme = "core" }: CollectionHeaderProps) {
  const isLoud = theme === "loud";
  const bgClass = isLoud ? "bg-[#2B2622]" : "bg-glint-ivory";
  const textClass = isLoud ? "text-glint-ivory" : "text-glint-charcoal";
  const mutedTextClass = isLoud ? "text-glint-ivory/80" : "text-glint-charcoal/80";
  const lightTextClass = isLoud ? "text-glint-ivory/60" : "text-glint-charcoal/60";
  const borderClass = isLoud ? "border-glint-ivory/10" : "border-glint-charcoal/10";

  return (
    <div className={cn("flex flex-col items-center justify-center py-24 px-6 text-center border-b", bgClass, borderClass)}>
      <Heading as="h1" className={cn("text-4xl md:text-5xl lg:text-6xl mb-4 capitalize", textClass)}>
        {title.replace("-", " ")}
      </Heading>
      {description && (
        <Text className={cn("max-w-2xl mb-6", mutedTextClass)}>
          {description}
        </Text>
      )}
      <Text className={cn("text-sm tracking-widest uppercase", lightTextClass)}>
        {productCount} {productCount === 1 ? 'Product' : 'Products'}
      </Text>
    </div>
  );
}
