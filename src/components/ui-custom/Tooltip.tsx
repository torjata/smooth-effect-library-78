
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
    if (!childRef.current || !isMounted) return;
    
    const rect = childRef.current.getBoundingClientRect();
    const tooltipWidth = tooltipRef.current?.offsetWidth || 0;
    const tooltipHeight = tooltipRef.current?.offsetHeight || 0;
    
    let x = 0;
    let y = 0;
    
    // Calculate position based on side
    switch (side) {
      case "top":
        x = rect.left + (rect.width / 2);
        y = rect.top - sideOffset - (tooltipHeight > 0 ? tooltipHeight : 0);
        break;
      case "bottom":
        x = rect.left + (rect.width / 2);
        y = rect.bottom + sideOffset;
        break;
      case "left":
        x = rect.left - sideOffset - (tooltipWidth > 0 ? tooltipWidth : 0);
        y = rect.top + (rect.height / 2);
        break;
      case "right":
        x = rect.right + sideOffset;
        y = rect.top + (rect.height / 2);
        break;
    }
    
    // Apply alignment adjustments
    if (tooltipWidth > 0 && tooltipHeight > 0) {
      if (side === "top" || side === "bottom") {
        if (align === "start") {
          x = rect.left;
        } else if (align === "end") {
          x = rect.right;
        }
      } else if (side === "left" || side === "right") {
        if (align === "start") {
          y = rect.top;
        } else if (align === "end") {
          y = rect.bottom;
        }
      }
    }
    
    setPosition({ x, y });
  };
  
  const handleMouseEnter = () => {
    if (!isMounted) return;
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = window.setTimeout(() => {
      setIsOpen(true);
      // Calculate position after tooltip is visible to get correct dimensions
      requestAnimationFrame(() => calculatePosition());
    }, delayDuration);
  };
  
  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(false);
  };
  
  // Clone the child element with our event handlers
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
    
    switch (side) {
      case 'top':
        styles.left = position.x;
        styles.top = position.y;
        styles.transform = 'translateX(-50%)';
        break;
      case 'bottom':
        styles.left = position.x;
        styles.top = position.y;
        styles.transform = 'translateX(-50%)';
        break;
      case 'left':
        styles.left = position.x;
        styles.top = position.y;
        styles.transform = 'translateY(-50%)';
        break;
      case 'right':
        styles.left = position.x;
        styles.top = position.y;
        styles.transform = 'translateY(-50%)';
        break;
    }
    
    // Apply alignment adjustments to transform
    if (align === "start") {
      if (side === 'top' || side === 'bottom') {
        styles.transform = 'translateX(0)';
      } else if (side === 'left' || side === 'right') {
        styles.transform = 'translateY(0)';
      }
    } else if (align === "end") {
      if (side === 'top' || side === 'bottom') {
        styles.transform = 'translateX(-100%)';
      } else if (side === 'left' || side === 'right') {
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
      {isMounted && createPortal(
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
              onAnimationComplete={() => {
                if (isOpen) calculatePosition();
              }}
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
