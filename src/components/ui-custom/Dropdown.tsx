
// If this file exists in your project and you need to modify it, replace it with this code.
// Since you didn't provide the original Dropdown.tsx file, I'm creating a basic implementation
// that addresses the z-index and outside click issues.

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: "start" | "center" | "end";
  className?: string;
  menuClassName?: string;
  offset?: number;
}

export function Dropdown({
  trigger,
  children,
  align = "center",
  className,
  menuClassName,
  offset = 4,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  
  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node) &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const getMenuPosition = () => {
    if (!triggerRef.current) return { top: 0, left: 0 };
    
    const rect = triggerRef.current.getBoundingClientRect();
    
    return {
      top: rect.bottom + offset + window.scrollY,
      left: align === "start" 
        ? rect.left + window.scrollX
        : align === "end"
          ? rect.right - (menuRef.current?.offsetWidth || 0) + window.scrollX
          : rect.left + rect.width / 2 - (menuRef.current?.offsetWidth || 0) / 2 + window.scrollX,
    };
  };

  return (
    <div className={cn("relative", className)}>
      <div 
        ref={triggerRef} 
        onClick={handleToggle}
        className="cursor-pointer"
      >
        {trigger}
      </div>
      
      {isOpen && createPortal(
        <AnimatePresence>
          <motion.div
            ref={menuRef}
            className={cn(
              "absolute z-[9999] min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
              menuClassName
            )}
            style={{
              position: 'absolute',
              ...getMenuPosition(),
            }}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}

export function DropdownItem({
  children,
  onClick,
  className,
  disabled,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}) {
  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground",
        disabled && "pointer-events-none opacity-50",
        className
      )}
    >
      {children}
    </div>
  );
}

export function DropdownSeparator({ className }: { className?: string }) {
  return <div className={cn("my-1 h-px bg-border", className)} />;
}
