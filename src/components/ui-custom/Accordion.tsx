
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import React, { createContext, useContext, useState } from "react";

interface AccordionContextValue {
  expanded: Record<string, boolean>;
  toggle: (value: string) => void;
  type: "single" | "multiple";
  defaultValue?: string;
  collapsible?: boolean;
}

const AccordionContext = createContext<AccordionContextValue | undefined>(undefined);

interface AccordionProps {
  type?: "single" | "multiple";
  defaultValue?: string;
  collapsible?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Accordion({
  type = "single",
  defaultValue,
  collapsible = true,
  className,
  children,
}: AccordionProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() => {
    if (defaultValue && type === "single") {
      return { [defaultValue]: true };
    }
    return {};
  });

  const toggle = (value: string) => {
    if (type === "single") {
      if (expanded[value] && !collapsible) {
        return;
      }
      setExpanded(expanded[value] ? {} : { [value]: true });
    } else {
      setExpanded((prev) => ({
        ...prev,
        [value]: !prev[value],
      }));
    }
  };

  return (
    <AccordionContext.Provider
      value={{ expanded, toggle, type, defaultValue, collapsible }}
    >
      <div className={cn("space-y-1", className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  value: string;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function AccordionItem({
  value,
  disabled = false,
  className,
  children,
}: AccordionItemProps) {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionItem must be used within an Accordion");
  }

  return (
    <div
      className={cn(
        "glassmorphism rounded-md border",
        disabled && "cursor-not-allowed opacity-50",
        className
      )}
      data-state={context.expanded[value] ? "open" : "closed"}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement, { value });
        }
        return child;
      })}
    </div>
  );
}

interface AccordionTriggerProps {
  className?: string;
  children: React.ReactNode;
  value?: string;
}

export function AccordionTrigger({
  className,
  children,
  value,
}: AccordionTriggerProps) {
  const context = useContext(AccordionContext);
  if (!context || !value) {
    throw new Error(
      "AccordionTrigger must be used within an AccordionItem with a value"
    );
  }

  const { expanded, toggle } = context;
  const isExpanded = expanded[value];

  return (
    <motion.button
      type="button"
      className={cn(
        "flex w-full items-center justify-between px-4 py-3 text-left font-medium transition-all",
        className
      )}
      onClick={() => toggle(value)}
      aria-expanded={isExpanded}
      whileTap={{ scale: 0.98 }}
    >
      {children}
      <motion.div
        animate={{ rotate: isExpanded ? 180 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform" />
      </motion.div>
    </motion.button>
  );
}

interface AccordionContentProps {
  className?: string;
  children: React.ReactNode;
  value?: string;
}

export function AccordionContent({
  className,
  children,
  value,
}: AccordionContentProps) {
  const context = useContext(AccordionContext);
  if (!context || !value) {
    throw new Error(
      "AccordionContent must be used within an AccordionItem with a value"
    );
  }

  const isExpanded = context.expanded[value];

  return (
    <AnimatePresence initial={false}>
      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden"
        >
          <div className={cn("px-4 pb-4 pt-0", className)}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
