
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
      initial={animate ? { scale: 0.8, opacity: 0 } : undefined}
      animate={animate ? { scale: 1, opacity: 1 } : undefined}
      whileHover={animate ? { scale: 1.05 } : undefined}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      {...props}
    />
  );
}
