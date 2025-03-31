
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useToast as useToastHook } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface ToastProps {
  title?: string;
  description?: string;
  type?: 'default' | 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  onClose?: () => void;
  id?: string;
  className?: string;
}

export function Toast({ 
  title, 
  description, 
  type = 'default', 
  duration = 3000, 
  onClose,
  id,
  className 
}: ToastProps) {
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => onClose?.(), 300); // Allow animation to complete
    }, duration);
    
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const typeStyles = {
    default: 'bg-popover border-border',
    success: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
    error: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
    warning: 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800',
    info: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
  };
  
  const typeIcon = {
    default: null,
    success: <div className="h-2 w-2 rounded-full bg-green-500"></div>,
    error: <div className="h-2 w-2 rounded-full bg-red-500"></div>,
    warning: <div className="h-2 w-2 rounded-full bg-amber-500"></div>,
    info: <div className="h-2 w-2 rounded-full bg-blue-500"></div>,
  };

  return (
    <div 
      className={cn(
        'fixed right-4 max-w-md rounded-lg border shadow-md transition-all duration-300 z-50',
        typeStyles[type],
        visible ? 'opacity-100' : 'opacity-0 translate-y-2',
        className
      )}
    >
      <div className="flex items-start p-4">
        {typeIcon[type] && (
          <div className="flex-shrink-0 pt-1.5 mr-3">
            {typeIcon[type]}
          </div>
        )}
        <div className="flex-1 pt-0.5">
          {title && <h3 className="text-sm font-medium">{title}</h3>}
          {description && <div className="mt-1 text-sm text-muted-foreground">{description}</div>}
        </div>
        <button 
          className="ml-4 flex-shrink-0 rounded-full p-1 text-muted-foreground hover:text-foreground"
          onClick={() => {
            setVisible(false);
            setTimeout(() => onClose?.(), 300);
          }}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

interface ToastProviderProps {
  children: React.ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  const { toasts } = useToastHook();

  return (
    <>
      {children}
      <div className="fixed bottom-0 right-0 z-50 p-4 flex flex-col gap-2 items-end max-h-screen overflow-hidden">
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            id={toast.id}
            title={toast.title}
            description={toast.description}
            type={toast.type as any}
            onClose={toast.onOpenChange ? () => toast.onOpenChange?.(false) : undefined}
          />
        ))}
      </div>
    </>
  );
}

// Re-export the useToast hook from the hooks folder
export { useToast, toast } from '@/hooks/use-toast';
