
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BaseProgressProps {
  value: number;
  max?: number;
  className?: string;
  indicatorClassName?: string;
  label?: string;
  showValue?: boolean;
  gradient?: boolean;
}

interface LinearProgressProps extends BaseProgressProps {
  variant?: "default" | "success" | "warning" | "danger";
}

export function LinearProgress({
  value,
  max = 100,
  className,
  indicatorClassName,
  label,
  showValue = false,
  variant = "default",
  gradient = false,
}: LinearProgressProps) {
  const percentage = Math.min(Math.max(0, (value / max) * 100), 100);
  
  return (
    <div className="space-y-2">
      {(label || showValue) && (
        <div className="flex items-center justify-between text-sm">
          {label && <div>{label}</div>}
          {showValue && <div>{Math.round(percentage)}%</div>}
        </div>
      )}
      <div
        className={cn(
          "glassmorphism relative h-4 w-full overflow-hidden rounded-full",
          className
        )}
      >
        <motion.div
          className={cn(
            "h-full rounded-full", // Added rounded-full here
            {
              "bg-primary/70": variant === "default" && !gradient,
              "bg-green-500/70": variant === "success" && !gradient,
              "bg-yellow-500/70": variant === "warning" && !gradient,
              "bg-red-500/70": variant === "danger" && !gradient,
              "bg-gradient-to-r from-primary/60 to-primary": variant === "default" && gradient,
              "bg-gradient-to-r from-green-500/60 to-green-500": variant === "success" && gradient,
              "bg-gradient-to-r from-yellow-500/60 to-yellow-500": variant === "warning" && gradient,
              "bg-gradient-to-r from-red-500/60 to-red-500": variant === "danger" && gradient,
            },
            indicatorClassName
          )}
          style={{ width: `${percentage}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

interface CircularProgressProps extends BaseProgressProps {
  size?: number;
  strokeWidth?: number;
  variant?: "default" | "success" | "warning" | "danger";
}

export function CircularProgress({
  value,
  max = 100,
  className,
  indicatorClassName,
  label,
  showValue = false,
  size = 60,
  strokeWidth = 8,
  variant = "default",
  gradient = false,
}: CircularProgressProps) {
  const percentage = Math.min(Math.max(0, (value / max) * 100), 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
  return (
    <div className={cn("relative inline-flex", className)}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="rotate-[-90deg]"
      >
        {gradient && (
          <defs>
            <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" className={cn({
                "stop-color-primary/60": variant === "default",
                "stop-color-green-500/60": variant === "success",
                "stop-color-yellow-500/60": variant === "warning",
                "stop-color-red-500/60": variant === "danger",
              })} />
              <stop offset="100%" className={cn({
                "stop-color-primary": variant === "default",
                "stop-color-green-500": variant === "success",
                "stop-color-yellow-500": variant === "warning",
                "stop-color-red-500": variant === "danger",
              })} />
            </linearGradient>
          </defs>
        )}
        
        <circle
          className="text-muted stroke-current"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <motion.circle
          className={cn(
            "stroke-current", {
              "text-primary": variant === "default" && !gradient,
              "text-green-500": variant === "success" && !gradient,
              "text-yellow-500": variant === "warning" && !gradient,
              "text-red-500": variant === "danger" && !gradient,
            },
            indicatorClassName
          )}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="none"
          stroke={gradient ? "url(#progress-gradient)" : undefined}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </svg>
      
      {(showValue || label) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-sm">
          {showValue && <span className="font-semibold">{Math.round(percentage)}%</span>}
          {label && <span className="text-xs text-muted-foreground">{label}</span>}
        </div>
      )}
    </div>
  );
}
