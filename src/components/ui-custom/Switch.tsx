
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

interface SwitchProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
}

export function Switch({
  checked = false,
  onCheckedChange,
  disabled = false,
  label,
  className,
}: SwitchProps) {
  const [isChecked, setIsChecked] = useState(checked);
  
  const handleToggle = () => {
    if (disabled) return;
    
    const newValue = !isChecked;
    setIsChecked(newValue);
    onCheckedChange?.(newValue);
  };
  
  return (
    <div className="flex items-center">
      <motion.button
        type="button"
        role="switch"
        aria-checked={isChecked}
        disabled={disabled}
        onClick={handleToggle}
        className={cn(
          "group relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          isChecked 
            ? "glassmorphism bg-primary/80" 
            : "glassmorphism bg-muted",
          disabled && "cursor-not-allowed opacity-50",
          className
        )}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          className={cn(
            "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg",
            disabled ? "opacity-50" : ""
          )}
          animate={{ 
            x: isChecked ? "100%" : "0%",
            translateX: isChecked ? -10 : 5
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </motion.button>
      {label && (
        <label
          className={cn(
            "ml-2 text-sm font-medium leading-none",
            disabled && "cursor-not-allowed opacity-70"
          )}
        >
          {label}
        </label>
      )}
    </div>
  );
}
