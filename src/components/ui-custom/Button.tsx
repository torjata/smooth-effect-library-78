
import { cn } from "@/lib/utils";
import { forwardRef, ButtonHTMLAttributes, useState } from "react";
import { motion, MotionProps } from "framer-motion";

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  variant?: "default" | "primary" | "secondary" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
  ripple?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = "default", 
    size = "md", 
    isLoading = false, 
    ripple = true,
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

    // Define motion props separately to avoid type conflicts
    const motionProps: MotionProps = {
      whileHover: { scale: 1.02 },
      whileTap: { scale: 0.98 }
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center overflow-hidden rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          {
            // Size variations
            "h-9 px-3 text-sm": size === "sm",
            "h-10 px-4 text-sm": size === "md",
            "h-11 px-6 text-base": size === "lg",
            "h-9 w-9 p-0": size === "icon",

            // Variant variations
            "glassmorphism bg-primary/80 text-primary-foreground hover:bg-primary/90": variant === "default" || variant === "primary",
            "glassmorphism bg-secondary/80 text-secondary-foreground hover:bg-secondary/90": variant === "secondary",
            "border-2 border-primary/30 bg-transparent hover:bg-primary/10": variant === "outline",
            "bg-transparent text-foreground hover:bg-accent": variant === "ghost",
            "glassmorphism bg-destructive/80 text-destructive-foreground hover:bg-destructive/90": variant === "destructive",
          },
          className
        )}
        onClick={handleClick}
        {...motionProps}
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
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
