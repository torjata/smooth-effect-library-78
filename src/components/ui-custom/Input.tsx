
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
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
          <motion.div
            animate={isFocused ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
            className="absolute inset-0 rounded-md bg-primary/5 blur-sm"
          />
          <input
            className={cn(
              "glassmorphism flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
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
