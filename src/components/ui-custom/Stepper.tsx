
import React, { createContext, useContext } from 'react';
import { cn } from '@/lib/utils';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

interface StepperContextValue {
  activeStep: number;
  orientation: 'horizontal' | 'vertical';
  children?: React.ReactNode;
}

const StepperContext = createContext<StepperContextValue>({
  activeStep: 0,
  orientation: 'horizontal',
});

interface StepperProps {
  activeStep: number;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'gradient';
}

export function Stepper({
  activeStep = 0,
  orientation = 'horizontal',
  className,
  children,
  variant = 'default',
}: StepperProps) {
  return (
    <StepperContext.Provider value={{ activeStep, orientation, children }}>
      <div
        className={cn(
          'flex',
          orientation === 'vertical' ? 'flex-col space-y-1' : 'flex-row items-center space-x-1',
          className
        )}
      >
        {children}
      </div>
    </StepperContext.Provider>
  );
}

interface StepperStepProps {
  step: number;
  label?: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function StepperStep({
  step,
  label,
  description,
  icon,
  className,
}: StepperStepProps) {
  const { activeStep, orientation } = useContext(StepperContext);
  
  const isActive = step === activeStep;
  const isCompleted = step < activeStep;
  
  // Calculate if this is the last step based on sibling count
  const isLastStep = step === React.Children.count(
    React.Children.toArray(useContext(StepperContext).children)
  ) - 1;

  return (
    <div
      className={cn(
        'relative',
        orientation === 'vertical' ? 'flex flex-row items-start' : 'flex flex-col items-center',
        orientation === 'horizontal' && 'flex-1',
        className
      )}
    >
      <div className="flex items-center z-10">
        <div
          className={cn(
            'flex items-center justify-center rounded-full w-10 h-10 border-2 text-sm font-medium transition-all duration-200 shadow-sm',
            isActive && 'border-primary bg-primary/10 text-primary ring-2 ring-primary/20 scale-110',
            isCompleted && 'border-primary bg-primary text-primary-foreground',
            !isActive && !isCompleted && 'border-muted-foreground/30 text-muted-foreground'
          )}
        >
          {isCompleted ? (
            icon || <Check className="h-5 w-5 stroke-[2.5px]" />
          ) : (
            <span>{step + 1}</span>
          )}
        </div>
        
        {orientation === 'horizontal' && !isLastStep && (
          <div
            className={cn(
              'w-full h-1 mx-4 rounded-full',
              isCompleted ? 'bg-primary' : 'bg-muted-foreground/30'
            )}
          />
        )}
      </div>
      
      {(label || description) && (
        <div
          className={cn(
            'flex flex-col',
            orientation === 'vertical' ? 'ml-4' : 'mt-3',
            orientation === 'vertical' && !isLastStep && 'mb-6',
            orientation === 'horizontal' && 'items-center text-center'
          )}
        >
          {label && (
            <span
              className={cn(
                'text-sm font-medium transition-colors',
                isActive && 'text-primary font-semibold',
                isCompleted && 'text-foreground',
                !isActive && !isCompleted && 'text-muted-foreground'
              )}
            >
              {label}
            </span>
          )}
          {description && (
            <span className="text-xs text-muted-foreground mt-1 max-w-[180px]">{description}</span>
          )}
        </div>
      )}
      
      {orientation === 'vertical' && !isLastStep && (
        <div
          className={cn(
            'absolute left-5 top-10 ml-0 w-[2px] h-full -z-10',
            isCompleted ? 'bg-primary' : 'bg-border'
          )}
        />
      )}
      
      {orientation === 'vertical' && !isLastStep && (
        <div className="absolute left-[18px] top-[50px]">
          {isCompleted ? (
            <ChevronUp className="w-4 h-4 text-primary" />
          ) : (
            <ChevronDown className="w-4 h-4 text-muted-foreground/50" />
          )}
        </div>
      )}
    </div>
  );
}
