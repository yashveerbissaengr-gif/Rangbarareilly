"use client";

import React, { forwardRef } from "react";
import { cn } from "../../lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="relative w-full mb-6">
        <input
          ref={ref}
          className={cn(
            "block w-full px-0 py-3 text-sm text-glint-charcoal bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 peer transition-colors",
            error ? "border-red-500" : "border-glint-charcoal/20 focus:border-glint-charcoal",
            className
          )}
          placeholder=" "
          {...props}
        />
        <label
          className={cn(
            "absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            error ? "text-red-500" : "text-glint-charcoal/60 peer-focus:text-glint-charcoal"
          )}
        >
          {label}
        </label>
        {error && (
          <p className="absolute -bottom-5 left-0 text-[10px] tracking-wide text-red-500 font-sans">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
