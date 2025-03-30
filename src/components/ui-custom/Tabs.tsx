
import { cn } from "@/lib/utils";
import React, { createContext, useContext, useState } from "react";

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
    <div className={cn("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className)}>
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
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-background text-foreground shadow-sm": isSelected,
          "hover:bg-muted/50": !isSelected,
        },
        className
      )}
      onClick={() => onValueChange(value)}
    >
      {children}
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
    <div
      role="tabpanel"
      hidden={!isSelected}
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
    >
      {children}
    </div>
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
