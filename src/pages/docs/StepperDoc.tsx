
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
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Stepper Props</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left">Prop</th>
                    <th className="py-3 px-4 text-left">Type</th>
                    <th className="py-3 px-4 text-left">Default</th>
                    <th className="py-3 px-4 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 align-top font-mono text-sm">steps</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">StepObject[]</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                    <td className="py-3 px-4 align-top text-sm">Array of step objects with title and optional description</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 align-top font-mono text-sm">activeStep</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">number</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">0</td>
                    <td className="py-3 px-4 align-top text-sm">Index of the current active step</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 align-top font-mono text-sm">orientation</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">"horizontal" | "vertical"</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">"horizontal"</td>
                    <td className="py-3 px-4 align-top text-sm">Layout orientation of the stepper</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 align-top font-mono text-sm">className</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">string</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                    <td className="py-3 px-4 align-top text-sm">Additional CSS classes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold mt-6">Step Object</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left">Property</th>
                    <th className="py-3 px-4 text-left">Type</th>
                    <th className="py-3 px-4 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 align-top font-mono text-sm">title</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">string</td>
                    <td className="py-3 px-4 align-top text-sm">Title text for the step</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 align-top font-mono text-sm">description</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">string</td>
                    <td className="py-3 px-4 align-top text-sm">Optional description text</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 align-top font-mono text-sm">icon</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">ReactNode</td>
                    <td className="py-3 px-4 align-top text-sm">Optional custom icon for the step</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
