
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactElement;
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  align?: "start" | "center" | "end";
  className?: string;
  delayDuration?: number;
}

export function Tooltip({
  content,
  children,
  side = "top",
  sideOffset = 4,
  align = "center",
  className,
  delayDuration = 300,
}: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef<number | null>(null);
  const childRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  
  const calculatePosition = () => {
    if (!childRef.current || !isMounted || !tooltipRef.current) return;
    
    const rect = childRef.current.getBoundingClientRect();
    const tooltipWidth = tooltipRef.current.offsetWidth;
    const tooltipHeight = tooltipRef.current.offsetHeight;
    
    let x = 0;
    let y = 0;
    
    // Calculate positions based on side and alignment
    switch (side) {
      case "top":
        x = rect.left + rect.width / 2;
        y = rect.top - tooltipHeight - sideOffset;
        break;
      case "bottom":
        x = rect.left + rect.width / 2;
        y = rect.bottom + sideOffset;
        break;
      case "left":
        x = rect.left - tooltipWidth - sideOffset;
        y = rect.top + rect.height / 2;
        break;
      case "right":
        x = rect.right + sideOffset;
        y = rect.top + rect.height / 2;
        break;
    }
    
    // Adjust alignment
    if (side === "top" || side === "bottom") {
      if (align === "start") {
        x = rect.left;
      } else if (align === "end") {
        x = rect.right;
      }
      // For center, x is already set to rect.left + rect.width / 2
    } else if (side === "left" || side === "right") {
      if (align === "start") {
        y = rect.top;
      } else if (align === "end") {
        y = rect.bottom;
      }
      // For center, y is already set to rect.top + rect.height / 2
    }
    
    setPosition({ x, y });
  };
  
  const handleMouseEnter = () => {
    if (!isMounted) return;
    timeoutRef.current = window.setTimeout(() => {
      calculatePosition();
      setIsOpen(true);
    }, delayDuration);
  };
  
  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(false);
  };
  
  const triggerChild = React.cloneElement(children, {
    ref: childRef,
    onMouseEnter: (e: any) => {
      handleMouseEnter();
      children.props.onMouseEnter?.(e);
    },
    onMouseLeave: (e: any) => {
      handleMouseLeave();
      children.props.onMouseLeave?.(e);
    },
    onFocus: (e: any) => {
      handleMouseEnter();
      children.props.onFocus?.(e);
    },
    onBlur: (e: any) => {
      handleMouseLeave();
      children.props.onBlur?.(e);
    },
  });
  
  const getPositionStyles = () => {
    const styles: React.CSSProperties = {
      position: 'fixed',
      zIndex: 9999,
    };
    
    if (side === 'top') {
      styles.bottom = window.innerHeight - position.y;
      styles.left = position.x;
      if (align === 'center') {
        styles.transform = 'translateX(-50%)';
      } else if (align === 'end') {
        styles.transform = 'translateX(-100%)';
      }
    } else if (side === 'bottom') {
      styles.top = position.y;
      styles.left = position.x;
      if (align === 'center') {
        styles.transform = 'translateX(-50%)';
      } else if (align === 'end') {
        styles.transform = 'translateX(-100%)';
      }
    } else if (side === 'left') {
      styles.right = window.innerWidth - position.x;
      styles.top = position.y;
      if (align === 'center') {
        styles.transform = 'translateY(-50%)';
      } else if (align === 'end') {
        styles.transform = 'translateY(-100%)';
      }
    } else if (side === 'right') {
      styles.left = position.x;
      styles.top = position.y;
      if (align === 'center') {
        styles.transform = 'translateY(-50%)';
      } else if (align === 'end') {
        styles.transform = 'translateY(-100%)';
      }
    }
    
    return styles;
  };
  
  const getAnimation = () => {
    switch (side) {
      case 'top':
        return {
          initial: { opacity: 0, y: 5 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 5 },
        };
      case 'bottom':
        return {
          initial: { opacity: 0, y: -5 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -5 },
        };
      case 'left':
        return {
          initial: { opacity: 0, x: 5 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 5 },
        };
      case 'right':
        return {
          initial: { opacity: 0, x: -5 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -5 },
        };
    }
  };
  
  if (!isMounted) {
    return triggerChild;
  }
  
  return (
    <>
      {triggerChild}
      {isMounted && isOpen && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={tooltipRef}
              className={cn(
                "z-50 max-w-xs overflow-hidden rounded-md px-3 py-1.5 text-xs text-foreground shadow-md bg-popover border border-border/20",
                className
              )}
              style={getPositionStyles()}
              {...getAnimation()}
              transition={{ duration: 0.15 }}
            >
              {content}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
