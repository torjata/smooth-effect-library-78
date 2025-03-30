
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";

export interface ToastProps {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  type?: "default" | "success" | "error" | "warning" | "info";
  duration?: number;
  onClose: (id: string) => void;
}

interface ToastProviderProps {
  children: React.ReactNode;
}

// Toast Context
const ToastContext = React.createContext<{
  toasts: ToastProps[];
  addToast: (toast: Omit<ToastProps, "id" | "onClose">) => void;
  removeToast: (id: string) => void;
}>({
  toasts: [],
  addToast: () => {},
  removeToast: () => {},
});

// Toast Content Component
const ToastContent = React.forwardRef<HTMLDivElement, ToastProps>(({
  id,
  title,
  description,
  action,
  type = "default",
  onClose,
}, ref) => {
  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.8 }}
      className={cn(
        "glassmorphism pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-lg border p-4 shadow-lg",
        {
          "bg-white/10 dark:bg-black/20": type === "default",
          "bg-green-500/10 border-green-500/20": type === "success",
          "bg-red-500/10 border-red-500/20": type === "error",
          "bg-yellow-500/10 border-yellow-500/20": type === "warning",
          "bg-blue-500/10 border-blue-500/20": type === "info",
        }
      )}
    >
      <div className="flex-1">
        {title && <h4 className="mb-1 font-medium">{title}</h4>}
        {description && <p className="text-sm opacity-90">{description}</p>}
        {action && <div className="mt-3">{action}</div>}
      </div>
      <button
        onClick={() => onClose(id)}
        className="shrink-0 rounded-md p-1 text-foreground/50 opacity-70 transition-opacity hover:opacity-100"
      >
        <X className="h-4 w-4" />
      </button>
    </motion.div>
  );
});

ToastContent.displayName = "ToastContent";

// Toast Provider
export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const addToast = (toast: Omit<ToastProps, "id" | "onClose">) => {
    const id = String(Date.now());
    const newToast: ToastProps = {
      ...toast,
      id,
      onClose: removeToast,
    };

    setToasts((prev) => [...prev, newToast]);

    if (toast.duration !== Infinity) {
      setTimeout(() => {
        removeToast(id);
      }, toast.duration || 5000);
    }
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  if (!isMounted) return <>{children}</>;

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      {createPortal(
        <div className="fixed bottom-0 right-0 z-50 flex flex-col gap-2 p-4 sm:bottom-auto sm:right-4 sm:top-4 sm:max-w-sm">
          <AnimatePresence mode="popLayout">
            {toasts.map((toast) => (
              <ToastContent key={toast.id} {...toast} />
            ))}
          </AnimatePresence>
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
};

// Hook to use toast
export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
