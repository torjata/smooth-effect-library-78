
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "framer-motion";

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
      <button
        type="button"
        role="switch"
        aria-checked={isChecked}
        disabled={disabled}
        onClick={handleToggle}
        className={cn(
          "group relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          isChecked 
            ? "bg-gradient-to-r from-primary to-primary/80" 
            : "bg-gradient-to-r from-muted/80 to-muted",
          disabled && "cursor-not-allowed opacity-50",
          className
        )}
      >
        <motion.span
          layout
          className={cn(
            "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-sm border border-border/10 dark:border-white/10",
            disabled ? "opacity-50" : ""
          )}
          initial={false}
          animate={{ 
            x: isChecked ? "calc(100% - 20px)" : "2px"
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </button>
      {label && (
        <label
          className={cn(
            "ml-2 text-sm font-medium leading-none cursor-pointer",
            disabled && "cursor-not-allowed opacity-70"
          )}
          onClick={!disabled ? handleToggle : undefined}
        >
          {label}
        </label>
      )}
    </div>
  );
}
