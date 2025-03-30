import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

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
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef<number | null>(null);
  const childRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  
  const calculatePosition = () => {
    if (!childRef.current) return;
    
    const rect = childRef.current.getBoundingClientRect();
    const x = rect.left + (rect.width / 2);
    const y = rect.top + (rect.height / 2);
    
    setCoords({ x, y });
  };
  
  const handleMouseEnter = () => {
    calculatePosition();
    timeoutRef.current = window.setTimeout(() => {
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
      transform: 'translate(-50%, -50%)',
    };
    
    switch (side) {
      case 'top':
        styles.left = coords.x;
        styles.top = coords.y - sideOffset - 20;
        styles.transform = 'translate(-50%, -100%)';
        break;
      case 'bottom':
        styles.left = coords.x;
        styles.top = coords.y + sideOffset + 20;
        styles.transform = 'translate(-50%, 0)';
        break;
      case 'left':
        styles.left = coords.x - sideOffset - 20;
        styles.top = coords.y;
        styles.transform = 'translate(-100%, -50%)';
        break;
      case 'right':
        styles.left = coords.x + sideOffset + 20;
        styles.top = coords.y;
        styles.transform = 'translate(0, -50%)';
        break;
    }
    
    if (align === 'start') {
      if (side === 'top' || side === 'bottom') {
        styles.transform = styles.transform.replace('-50%', '0');
      }
    } else if (align === 'end') {
      if (side === 'top' || side === 'bottom') {
        styles.transform = styles.transform.replace('-50%', '-100%');
      }
    }
    
    return styles;
  };
  
  const getAnimation = () => {
    switch (side) {
      case 'top':
        return {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 10 },
        };
      case 'bottom':
        return {
          initial: { opacity: 0, y: -10 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -10 },
        };
      case 'left':
        return {
          initial: { opacity: 0, x: 10 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 10 },
        };
      case 'right':
        return {
          initial: { opacity: 0, x: -10 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -10 },
        };
    }
  };
  
  return (
    <>
      {triggerChild}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={cn(
              "glassmorphism z-50 max-w-xs overflow-hidden rounded-md px-3 py-1.5 text-xs text-foreground shadow-md",
              className
            )}
            style={getPositionStyles()}
            {...getAnimation()}
            transition={{ duration: 0.15 }}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
