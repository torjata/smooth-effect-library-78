
import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

type BadgeVariant = "default" | "primary" | "secondary" | "outline" | "success" | "warning" | "danger";

interface BadgeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "animate"> {
  variant?: BadgeVariant;
  animate?: boolean;
}

export function Badge({
  className,
  variant = "default",
  animate = true,
  ...props
}: BadgeProps) {
  // Define animation properties but don't include them in props
  const animationProps = animate ? {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    whileHover: { scale: 1.05 },
    transition: { type: "spring", stiffness: 500, damping: 30 }
  } : {};

  // Separate React's HTML props that might conflict with Framer Motion
  const { onDrag, ...otherProps } = props;
  
  return (
    <motion.div
      className={cn(
        "glassmorphism inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
        {
          "border-transparent bg-primary/80 text-primary-foreground": variant === "default" || variant === "primary",
          "border-transparent bg-secondary/80 text-secondary-foreground": variant === "secondary",
          "border-current text-foreground": variant === "outline",
          "border-transparent bg-green-500/20 text-green-700 dark:text-green-300": variant === "success",
          "border-transparent bg-yellow-500/20 text-yellow-700 dark:text-yellow-300": variant === "warning",
          "border-transparent bg-red-500/20 text-red-700 dark:text-red-300": variant === "danger",
        },
        className
      )}
      {...animationProps}
      {...otherProps}
    />
  );
}
