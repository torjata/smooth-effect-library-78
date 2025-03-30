
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "sm" | "md" | "lg" | "xl";
  status?: "online" | "offline" | "away" | "busy";
  badge?: React.ReactNode;
  className?: string;
}

export function Avatar({
  src,
  alt,
  fallback,
  size = "md",
  status,
  badge,
  className,
}: AvatarProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };
  
  const getSizeClass = () => {
    switch (size) {
      case "sm": return "h-8 w-8 text-xs";
      case "md": return "h-10 w-10 text-sm";
      case "lg": return "h-14 w-14 text-base";
      case "xl": return "h-20 w-20 text-lg";
    }
  };
  
  const getStatusClass = () => {
    if (!status) return "";
    
    const statusSize = size === "xl" ? "h-4 w-4" : size === "lg" ? "h-3.5 w-3.5" : "h-2.5 w-2.5";
    const baseClass = `absolute rounded-full ring-2 ring-background ${statusSize}`;
    
    switch (status) {
      case "online": return `${baseClass} bg-green-500 bottom-0 right-0`;
      case "offline": return `${baseClass} bg-gray-400 bottom-0 right-0`;
      case "away": return `${baseClass} bg-yellow-500 bottom-0 right-0`;
      case "busy": return `${baseClass} bg-red-500 bottom-0 right-0`;
    }
  };
  
  return (
    <motion.div 
      className="relative inline-flex"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={cn(
          "glassmorphism relative flex shrink-0 overflow-hidden rounded-full",
          getSizeClass(),
          className
        )}
      >
        {src ? (
          <img
            src={src}
            alt={alt || "Avatar"}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted font-medium">
            {fallback ? getInitials(fallback) : "?"}
          </div>
        )}
      </div>
      
      {status && <span className={getStatusClass()} />}
      
      {badge && (
        <div className="absolute -top-2 -right-2 z-10">
          {badge}
        </div>
      )}
    </motion.div>
  );
}
