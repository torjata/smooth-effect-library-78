
import { cn } from "@/lib/utils";
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
      <button
        type="button"
        role="switch"
        aria-checked={isChecked}
        disabled={disabled}
        onClick={handleToggle}
        className={cn(
          "group relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          isChecked 
            ? "bg-gradient-to-r from-primary to-primary/80" 
            : "bg-gradient-to-r from-muted to-muted/80",
          disabled && "cursor-not-allowed opacity-50",
          className
        )}
      >
        <span
          className={cn(
            "pointer-events-none block h-5 w-5 rounded-full bg-background transition-transform duration-200 shadow-sm",
            disabled ? "opacity-50" : ""
          )}
          style={{ 
            transform: isChecked ? "translateX(calc(100% - 0.25rem))" : "translateX(0.25rem)"
          }}
        />
      </button>
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
