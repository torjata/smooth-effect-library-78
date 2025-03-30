
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type BadgeVariant = "default" | "primary" | "secondary" | "outline" | "success" | "warning" | "danger";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
  animate?: boolean;
}

export function Badge({
  className,
  variant = "default",
  animate = true,
  ...props
}: BadgeProps) {
  // Define animation properties
  const animationProps = animate ? {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    whileHover: { scale: 1.05 },
    transition: { type: "spring", stiffness: 500, damping: 30 }
  } : {};

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
        {
          "border-transparent bg-gradient-to-r from-primary/80 to-primary/60 text-primary-foreground": variant === "default" || variant === "primary",
          "border-transparent bg-gradient-to-r from-secondary/80 to-secondary/60 text-secondary-foreground": variant === "secondary",
          "border-current text-foreground": variant === "outline",
          "border-transparent bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-700 dark:text-green-300": variant === "success",
          "border-transparent bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-700 dark:text-yellow-300": variant === "warning",
          "border-transparent bg-gradient-to-r from-red-500/20 to-rose-500/20 text-red-700 dark:text-red-300": variant === "danger",
        },
        className
      )}
      {...props}
    />
  );
}
