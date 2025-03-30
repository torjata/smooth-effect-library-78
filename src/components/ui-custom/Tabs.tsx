
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { createContext, useContext, useId, useState } from "react";

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const TabsContext = createContext<TabsContextValue | undefined>(undefined);

interface TabsProps {
  defaultValue?: string;
  className?: string;
  children: React.ReactNode;
  onValueChange?: (value: string) => void;
}

export function Tabs({
  defaultValue,
  className,
  children,
  onValueChange,
}: TabsProps) {
  const [activeTab, setActiveTab] = useState<string>(defaultValue || "");
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    onValueChange?.(value);
  };
  
  return (
    <TabsContext.Provider
      value={{ activeTab, setActiveTab: handleTabChange }}
    >
      <div className={cn("space-y-4", className)}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

interface TabListProps {
  className?: string;
  children: React.ReactNode;
}

export function TabList({ className, children }: TabListProps) {
  return (
    <div
      role="tablist"
      className={cn(
        "glassmorphism flex overflow-auto rounded-lg p-1",
        className
      )}
    >
      {children}
    </div>
  );
}

interface TabTriggerProps {
  value: string;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

export function TabTrigger({
  value,
  className,
  children,
  disabled = false,
}: TabTriggerProps) {
  const context = useContext(TabsContext);
  const id = useId();
  
  if (!context) {
    throw new Error("TabTrigger must be used within a Tabs component");
  }
  
  const { activeTab, setActiveTab } = context;
  const isActive = activeTab === value;
  
  return (
    <motion.button
      id={`tab-${id}`}
      role="tab"
      type="button"
      aria-selected={isActive}
      aria-controls={`tabpanel-${id}`}
      className={cn(
        "relative px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        "data-[state=active]:text-foreground data-[state=inactive]:text-muted-foreground",
        className
      )}
      data-state={isActive ? "active" : "inactive"}
      disabled={disabled}
      onClick={() => setActiveTab(value)}
      whileTap={{ scale: 0.97 }}
    >
      {children}
      {isActive && (
        <motion.div
          className="absolute inset-0 bg-background/50 rounded-md"
          layoutId="activeTab"
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.button>
  );
}

interface TabContentProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

export function TabContent({
  value,
  className,
  children,
}: TabContentProps) {
  const context = useContext(TabsContext);
  const id = useId();
  
  if (!context) {
    throw new Error("TabContent must be used within a Tabs component");
  }
  
  const { activeTab } = context;
  const isActive = activeTab === value;
  
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          id={`tabpanel-${id}`}
          role="tabpanel"
          tabIndex={0}
          aria-labelledby={`tab-${id}`}
          className={cn("mt-2", className)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
