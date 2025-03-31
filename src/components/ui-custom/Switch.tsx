
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Switch({
  checked: controlledChecked,
  onChange,
  disabled = false,
  className,
  label,
  size = 'md'
}: SwitchProps) {
  const [internalChecked, setInternalChecked] = useState(false);
  
  const isControlled = controlledChecked !== undefined;
  const isChecked = isControlled ? controlledChecked : internalChecked;
  
  const handleToggle = () => {
    if (disabled) return;
    
    if (isControlled) {
      onChange?.(!controlledChecked);
    } else {
      setInternalChecked(!internalChecked);
      onChange?.(!internalChecked);
    }
  };
  
  const sizeClasses = {
    sm: 'h-4 w-7',
    md: 'h-5 w-10',
    lg: 'h-6 w-12'
  };
  
  const thumbSizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };
  
  const thumbOffsetClasses = {
    sm: isChecked ? 'translate-x-3' : 'translate-x-0.5',
    md: isChecked ? 'translate-x-5' : 'translate-x-0.5',
    lg: isChecked ? 'translate-x-6' : 'translate-x-0.5'
  };

  return (
    <label className={cn("inline-flex items-center cursor-pointer", disabled && "opacity-50 cursor-not-allowed", className)}>
      {label && <span className="mr-3 text-sm font-medium">{label}</span>}
      <div
        onClick={handleToggle}
        className={cn(
          'relative inline-flex items-center rounded-full transition-colors ease-in-out duration-200',
          sizeClasses[size],
          isChecked ? 'bg-primary' : 'bg-muted',
          !disabled && 'cursor-pointer',
          !disabled && !isChecked && 'hover:bg-muted/70',
          !disabled && isChecked && 'hover:bg-primary/90'
        )}
      >
        <span
          className={cn(
            'absolute inline-block transform rounded-full bg-white shadow-lg ring-0 transition-transform duration-200 ease-in-out',
            thumbSizeClasses[size],
            thumbOffsetClasses[size]
          )}
        />
      </div>
    </label>
  );
}
