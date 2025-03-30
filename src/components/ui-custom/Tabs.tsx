
import { cn } from "@/lib/utils";
import React, { createContext, useContext, useState } from "react";
import { motion } from "framer-motion";

interface TabsContextValue {
  value: string;
  onValueChange: (value: string) => void;
}

const TabsContext = createContext<TabsContextValue | undefined>(undefined);

interface TabsProps {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

function Tabs({
  defaultValue,
  value,
  onValueChange,
  children,
  className,
}: TabsProps) {
  const [tabValue, setTabValue] = useState(value || defaultValue || "");
  
  const handleValueChange = (newValue: string) => {
    if (value === undefined) {
      setTabValue(newValue);
    }
    onValueChange?.(newValue);
  };
  
  const contextValue = {
    value: value !== undefined ? value : tabValue,
    onValueChange: handleValueChange,
  };
  
  return (
    <TabsContext.Provider value={contextValue}>
      <div className={cn("w-full", className)}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

function TabsList({ children, className }: TabsListProps) {
  return (
    <div className={cn("relative inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className)}>
      {children}
    </div>
  );
}

interface TabsTriggerProps {
  value: string;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

function TabsTrigger({ value, disabled, children, className }: TabsTriggerProps) {
  const context = useContext(TabsContext);
  
  if (!context) {
    throw new Error("TabsTrigger must be used within a Tabs component");
  }
  
  const { value: selectedValue, onValueChange } = context;
  const isSelected = selectedValue === value;
  
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isSelected}
      disabled={disabled}
      className={cn(
        "relative inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      onClick={() => onValueChange(value)}
    >
      {isSelected && (
        <motion.span
          layoutId="tab-indicator"
          className="absolute inset-0 bg-background rounded-sm shadow-sm"
          transition={{ type: "spring", duration: 0.5 }}
        />
      )}
      <span className={cn(
        "relative z-10 transition-colors duration-200",
        isSelected ? "text-foreground" : "hover:text-foreground/80"
      )}>
        {children}
      </span>
    </button>
  );
}

interface TabsContentProps {
  value: string;
  forceMount?: boolean;
  children: React.ReactNode;
  className?: string;
}

function TabsContent({ value, forceMount, children, className }: TabsContentProps) {
  const context = useContext(TabsContext);
  
  if (!context) {
    throw new Error("TabsContent must be used within a Tabs component");
  }
  
  const { value: selectedValue } = context;
  const isSelected = selectedValue === value;
  
  if (!forceMount && !isSelected) {
    return null;
  }
  
  return (
    <motion.div
      role="tabpanel"
      hidden={!isSelected}
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: isSelected ? 1 : 0, y: isSelected ? 0 : 5 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
