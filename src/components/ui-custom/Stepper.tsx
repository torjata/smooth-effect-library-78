
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface StepProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

interface StepperProps {
  steps: StepProps[];
  activeStep: number;
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function Stepper({
  steps,
  activeStep,
  orientation = "horizontal",
  className,
}: StepperProps) {
  const isVertical = orientation === "vertical";
  
  return (
    <div
      className={cn(
        "w-full",
        isVertical ? "flex flex-col space-y-4" : "flex",
        className
      )}
    >
      {steps.map((step, index) => {
        const isActive = index === activeStep;
        const isCompleted = index < activeStep;
        const isLast = index === steps.length - 1;
        
        return (
          <div
            key={index}
            className={cn(
              "relative flex",
              isVertical ? "flex-row" : "flex-1 flex-col items-center"
            )}
          >
            {/* Connector Line */}
            {!isLast && (
              <div
                className={cn(
                  "absolute bg-border",
                  isVertical
                    ? "left-3.5 top-10 h-full w-px"
                    : "left-0 right-0 top-3.5 h-px w-full",
                  isVertical ? "ml-0" : "ml-[50%]"
                )}
              >
                {isCompleted && (
                  <motion.div
                    className={cn(
                      "absolute bg-primary",
                      isVertical ? "h-full w-full" : "h-full w-full"
                    )}
                    initial={{ [isVertical ? "height" : "width"]: 0 }}
                    animate={{ [isVertical ? "height" : "width"]: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>
            )}
            
            <div
              className={cn(
                "relative flex",
                isVertical ? "flex-row items-start" : "flex-col items-center"
              )}
            >
              {/* Step Circle */}
              <motion.div
                className={cn(
                  "glassmorphism z-10 flex h-7 w-7 items-center justify-center rounded-full border transition-colors duration-200",
                  {
                    "border-primary bg-primary text-primary-foreground": isActive || isCompleted,
                    "border-muted bg-background": !isActive && !isCompleted,
                  }
                )}
                animate={{
                  scale: isActive ? [1, 1.1, 1] : 1,
                  transition: { duration: 0.5 }
                }}
              >
                {isCompleted ? (
                  <Check className="h-3.5 w-3.5 text-background dark:text-foreground" />
                ) : (
                  <span className="text-xs font-medium">{index + 1}</span>
                )}
              </motion.div>
              
              {/* Step Content */}
              <div
                className={cn(
                  "mt-2 text-center",
                  isVertical ? "ml-3 mt-0 text-left" : ""
                )}
              >
                <div className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  isActive 
                    ? "text-foreground" 
                    : isCompleted 
                      ? "text-foreground/80"
                      : "text-muted-foreground"
                )}>
                  {step.title}
                </div>
                {step.description && (
                  <div className={cn(
                    "mt-0.5 text-xs transition-colors duration-200",
                    isActive || isCompleted 
                      ? "text-muted-foreground" 
                      : "text-muted-foreground/70"
                  )}>
                    {step.description}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
