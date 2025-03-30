
import { DocsLayout } from "@/components/docs/DocsLayout";
import { ComponentExample } from "@/components/docs/ComponentExample";
import { ComponentCode } from "@/components/docs/ComponentExample";
import { Stepper } from "@/components/ui-custom/Stepper";
import { useState } from "react";
import { Button } from "@/components/ui-custom/Button";

export default function StepperDoc() {
  const [activeStep, setActiveStep] = useState(1);
  
  const horizontalSteps = [
    { title: "Account", description: "Personal information" },
    { title: "Address", description: "Shipping address" },
    { title: "Payment", description: "Payment details" },
    { title: "Review", description: "Confirm order" }
  ];
  
  const verticalSteps = [
    { title: "Step 1", description: "Create account" },
    { title: "Step 2", description: "Setup profile" },
    { title: "Step 3", description: "Enable notifications" }
  ];
  
  const nextStep = () => {
    setActiveStep(prev => Math.min(prev + 1, horizontalSteps.length - 1));
  };
  
  const prevStep = () => {
    setActiveStep(prev => Math.max(prev - 1, 0));
  };
  
  return (
    <DocsLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Stepper</h1>
          <p className="text-muted-foreground mt-2">
            Visual indicator for multi-step processes and workflows.
          </p>
        </div>

        <ComponentExample title="Horizontal Stepper">
          <div className="space-y-8">
            <Stepper steps={horizontalSteps} activeStep={activeStep} />
            
            <div className="flex justify-between">
              <Button 
                variant="outline" 
                onClick={prevStep}
                disabled={activeStep === 0}
              >
                Previous
              </Button>
              <Button 
                onClick={nextStep}
                disabled={activeStep === horizontalSteps.length - 1}
              >
                Next
              </Button>
            </div>
          </div>
          <ComponentCode>
{`const [activeStep, setActiveStep] = useState(1);
  
const steps = [
  { title: "Account", description: "Personal information" },
  { title: "Address", description: "Shipping address" },
  { title: "Payment", description: "Payment details" },
  { title: "Review", description: "Confirm order" }
];

<Stepper steps={steps} activeStep={activeStep} />

<div className="flex justify-between">
  <Button 
    variant="outline" 
    onClick={() => setActiveStep(prev => Math.max(prev - 1, 0))}
    disabled={activeStep === 0}
  >
    Previous
  </Button>
  <Button 
    onClick={() => setActiveStep(prev => Math.min(prev + 1, steps.length - 1))}
    disabled={activeStep === steps.length - 1}
  >
    Next
  </Button>
</div>`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="Vertical Stepper">
          <div className="py-4">
            <Stepper 
              steps={verticalSteps} 
              activeStep={1} 
              orientation="vertical" 
            />
          </div>
          <ComponentCode>
{`const steps = [
  { title: "Step 1", description: "Create account" },
  { title: "Step 2", description: "Setup profile" },
  { title: "Step 3", description: "Enable notifications" }
];

<Stepper 
  steps={steps} 
  activeStep={1} 
  orientation="vertical" 
/>`}
          </ComponentCode>
        </ComponentExample>

        <div className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">API Reference</h2>
          
          <div>
            <h3 className="text-xl font-semibold">Props</h3>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><code>steps</code> - Array of step objects with title and optional description</li>
              <li><code>activeStep</code> - Index of the current active step</li>
              <li><code>orientation</code> - "horizontal" or "vertical" layout (default: "horizontal")</li>
              <li><code>className</code> - Additional CSS classes</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">Step Object</h3>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><code>title</code> - Title text for the step</li>
              <li><code>description</code> - Optional description text</li>
              <li><code>icon</code> - Optional custom icon for the step</li>
            </ul>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
