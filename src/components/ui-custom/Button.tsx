
import React, { forwardRef, ButtonHTMLAttributes, useState } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
  ripple?: boolean;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = "default", 
    size = "md", 
    isLoading = false, 
    ripple = true,
    asChild = false,
    children, 
    onClick,
    ...props 
  }, ref) => {
    const [rippleEffect, setRippleEffect] = useState<{ x: number, y: number, size: number } | null>(null);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (ripple) {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        setRippleEffect({ x, y, size });
        setTimeout(() => setRippleEffect(null), 500);
      }
      
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center overflow-hidden rounded-md font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 transition-all duration-200",
          {
            // Size variations
            "h-9 px-3 text-sm": size === "sm",
            "h-10 px-4 text-sm": size === "md",
            "h-11 px-6 text-base": size === "lg",
            "h-9 w-9 p-0": size === "icon",

            // Variant variations
            "bg-gradient-to-r from-primary/90 to-primary/80 text-primary-foreground hover:from-primary hover:to-primary/90": variant === "default" || variant === "primary",
            "bg-gradient-to-r from-secondary/90 to-secondary/80 text-secondary-foreground hover:from-secondary hover:to-secondary/90": variant === "secondary",
            "border border-primary/30 bg-transparent hover:bg-primary/10": variant === "outline",
            "bg-transparent text-foreground hover:bg-accent": variant === "ghost",
            "bg-gradient-to-r from-destructive/90 to-destructive/80 text-destructive-foreground hover:from-destructive hover:to-destructive/90": variant === "destructive",
          },
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {isLoading ? (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
        
        {rippleEffect && (
          <span
            className="absolute animate-ping rounded-full bg-white/30 dark:bg-white/20"
            style={{
              left: rippleEffect.x,
              top: rippleEffect.y,
              width: rippleEffect.size,
              height: rippleEffect.size,
            }}
          />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
