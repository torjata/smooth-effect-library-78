
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BaseProgressProps {
  value: number;
  max?: number;
  className?: string;
  indicatorClassName?: string;
  label?: string;
  showValue?: boolean;
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
  variant = "default"
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
            "h-full w-full flex-1",
            {
              "bg-primary/70": variant === "default",
              "bg-green-500/70": variant === "success",
              "bg-yellow-500/70": variant === "warning",
              "bg-red-500/70": variant === "danger",
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
}: CircularProgressProps) {
  const percentage = Math.min(Math.max(0, (value / max) * 100), 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
  return (
    <div className={cn("relative inline-flex", className)}>
      <motion.svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="rotate-[-90deg]"
      >
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
            "stroke-current",
            {
              "text-primary": variant === "default",
              "text-green-500": variant === "success",
              "text-yellow-500": variant === "warning",
              "text-red-500": variant === "danger",
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
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </motion.svg>
      
      {(showValue || label) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-sm">
          {showValue && <span className="font-semibold">{Math.round(percentage)}%</span>}
          {label && <span className="text-xs text-muted-foreground">{label}</span>}
        </div>
      )}
    </div>
  );
}
