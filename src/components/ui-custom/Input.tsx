
import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef, useState } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: string;
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, error, label, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    
    return (
      <div className="space-y-2">
        {label && (
          <label 
            htmlFor={props.id} 
            className="text-sm font-medium leading-none"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {icon}
            </div>
          )}
          <div 
            className={cn(
              "absolute inset-0 rounded-md transition-opacity duration-300",
              isFocused ? "opacity-100" : "opacity-0",
              "bg-gradient-to-r from-primary/5 to-accent/5 blur-[2px]"
            )}
          />
          <input
            className={cn(
              "flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring transition-colors",
              {
                "pl-9": !!icon,
                "border-red-500 focus-visible:ring-red-500": !!error,
              },
              className
            )}
            ref={ref}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />
        </div>
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
