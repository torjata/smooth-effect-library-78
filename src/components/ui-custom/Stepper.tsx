
import React, { createContext, useContext } from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface StepperContextValue {
  activeStep: number;
  orientation: 'horizontal' | 'vertical';
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
}

export function Stepper({
  activeStep = 0,
  orientation = 'horizontal',
  className,
  children,
}: StepperProps) {
  return (
    <StepperContext.Provider value={{ activeStep, orientation }}>
      <div
        className={cn(
          'flex',
          orientation === 'vertical' ? 'flex-col' : 'flex-row items-center',
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
  
  // Calculate the total number of steps based on children
  const isLastStep = React.Children.count(
    React.useContext(StepperContext).children
  ) === step + 1;

  return (
    <div
      className={cn(
        'flex',
        orientation === 'vertical' ? 'flex-row items-start' : 'flex-col items-center',
        orientation === 'horizontal' && 'flex-1',
        className
      )}
    >
      <div className="flex items-center">
        <div
          className={cn(
            'flex items-center justify-center rounded-full w-8 h-8 border-2 text-sm font-medium',
            isActive && 'border-primary text-primary',
            isCompleted && 'border-primary bg-primary text-primary-foreground',
            !isActive && !isCompleted && 'border-muted-foreground/30 text-muted-foreground'
          )}
        >
          {isCompleted ? (
            icon || <Check className="h-4 w-4" />
          ) : (
            <span>{step + 1}</span>
          )}
        </div>
        
        {orientation === 'horizontal' && !isLastStep && (
          <div
            className={cn(
              'w-full h-0.5 mx-4',
              isCompleted ? 'bg-primary' : 'bg-muted-foreground/30'
            )}
          />
        )}
      </div>
      
      {(label || description) && (
        <div
          className={cn(
            'flex flex-col',
            orientation === 'vertical' ? 'ml-4' : 'mt-2',
            orientation === 'vertical' && !isLastStep && 'mb-8',
            orientation === 'horizontal' && 'items-center text-center'
          )}
        >
          {label && (
            <span
              className={cn(
                'text-sm font-medium',
                isActive && 'text-primary',
                isCompleted && 'text-foreground',
                !isActive && !isCompleted && 'text-muted-foreground'
              )}
            >
              {label}
            </span>
          )}
          {description && (
            <span className="text-xs text-muted-foreground mt-1">{description}</span>
          )}
        </div>
      )}
      
      {orientation === 'vertical' && !isLastStep && (
        <div
          className={cn(
            'ml-4 w-0.5 h-8',
            isCompleted ? 'bg-primary' : 'bg-border'
          )}
        />
      )}
    </div>
  );
}
