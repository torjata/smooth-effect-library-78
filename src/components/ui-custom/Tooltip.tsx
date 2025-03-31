
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: 'top' | 'right' | 'bottom' | 'left';
  className?: string;
  delay?: number;
}

export function Tooltip({
  content,
  children,
  position = 'top',
  className,
  delay = 300,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const childRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const showTooltip = () => {
    setIsVisible(true);
  };

  const hideTooltip = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (isVisible && childRef.current && tooltipRef.current) {
      const childRect = childRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      
      let x = 0;
      let y = 0;
      
      switch (position) {
        case 'top':
          x = childRect.left + (childRect.width / 2) - (tooltipRect.width / 2);
          y = childRect.top - tooltipRect.height - 8;
          break;
        case 'right':
          x = childRect.right + 8;
          y = childRect.top + (childRect.height / 2) - (tooltipRect.height / 2);
          break;
        case 'bottom':
          x = childRect.left + (childRect.width / 2) - (tooltipRect.width / 2);
          y = childRect.bottom + 8;
          break;
        case 'left':
          x = childRect.left - tooltipRect.width - 8;
          y = childRect.top + (childRect.height / 2) - (tooltipRect.height / 2);
          break;
      }
      
      // Adjust for window boundaries
      x = Math.max(8, Math.min(x, window.innerWidth - tooltipRect.width - 8));
      y = Math.max(8, Math.min(y, window.innerHeight - tooltipRect.height - 8));
      
      setCoords({ x, y });
    }
  }, [isVisible, position]);

  // Apply positioning
  const tooltipStyle = {
    left: `${coords.x}px`,
    top: `${coords.y}px`,
  };
  
  // Direction classes
  const directionClasses = {
    top: 'animate-slide-down-fade',
    right: 'animate-slide-left-fade',
    bottom: 'animate-slide-up-fade',
    left: 'animate-slide-right-fade',
  };

  return (
    <>
      <div 
        ref={childRef} 
        onMouseEnter={showTooltip} 
        onMouseLeave={hideTooltip}
        className="inline-flex"
      >
        {children}
      </div>
      
      {isVisible && (
        <div
          ref={tooltipRef}
          className={cn(
            'fixed z-50 px-2.5 py-1.5 text-xs font-medium',
            'bg-popover text-popover-foreground shadow-md rounded-md border',
            directionClasses[position],
            className
          )}
          style={tooltipStyle}
        >
          {content}
        </div>
      )}
    </>
  );
}
