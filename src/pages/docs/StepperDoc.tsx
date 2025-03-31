
import { DocsLayout } from "@/components/docs/DocsLayout";
import { ComponentExample } from "@/components/docs/ComponentExample";
import { ComponentCode } from "@/components/docs/ComponentExample";
import { useState } from "react";
import { Button } from "@/components/ui-custom/Button";
import { Stepper, StepperStep } from "@/components/ui-custom/Stepper";

export default function StepperDoc() {
  const [activeStep, setActiveStep] = useState(1);

  const handleNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, 3));
  };

  const handlePrev = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <DocsLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Stepper</h1>
          <p className="text-muted-foreground mt-2">
            Multi-step processes with visual progress tracking.
          </p>
        </div>

        <ComponentExample title="Basic Stepper">
          <div className="w-full max-w-2xl">
            <Stepper activeStep={activeStep}>
              <StepperStep step={0} label="Step 1" description="Personal information" />
              <StepperStep step={1} label="Step 2" description="Contact details" />
              <StepperStep step={2} label="Step 3" description="Review information" />
              <StepperStep step={3} label="Complete" description="Process completed" />
            </Stepper>
            <div className="mt-8 flex justify-between">
              <Button 
                variant="outline" 
                onClick={handlePrev}
                disabled={activeStep === 0}
              >
                Previous
              </Button>
              <Button 
                onClick={handleNext}
                disabled={activeStep === 3}
              >
                Next
              </Button>
            </div>
          </div>
          <ComponentCode>
{`const [activeStep, setActiveStep] = useState(1);

const handleNext = () => {
  setActiveStep((prev) => Math.min(prev + 1, 3));
};

const handlePrev = () => {
  setActiveStep((prev) => Math.max(prev - 1, 0));
};

<Stepper activeStep={activeStep}>
  <StepperStep step={0} label="Step 1" description="Personal information" />
  <StepperStep step={1} label="Step 2" description="Contact details" />
  <StepperStep step={2} label="Step 3" description="Review information" />
  <StepperStep step={3} label="Complete" description="Process completed" />
</Stepper>
<div className="mt-8 flex justify-between">
  <Button 
    variant="outline" 
    onClick={handlePrev}
    disabled={activeStep === 0}
  >
    Previous
  </Button>
  <Button 
    onClick={handleNext}
    disabled={activeStep === 3}
  >
    Next
  </Button>
</div>`}
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
                    <td className="py-3 px-4 align-top font-mono text-sm">activeStep</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">number</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">0</td>
                    <td className="py-3 px-4 align-top text-sm">Current active step</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 align-top font-mono text-sm">orientation</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">"horizontal" | "vertical"</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">"horizontal"</td>
                    <td className="py-3 px-4 align-top text-sm">Layout orientation</td>
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
            
            <h3 className="text-xl font-semibold mt-6">StepperStep Props</h3>
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
                    <td className="py-3 px-4 align-top font-mono text-sm">step</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">number</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">required</td>
                    <td className="py-3 px-4 align-top text-sm">Step index</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 align-top font-mono text-sm">label</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">string</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                    <td className="py-3 px-4 align-top text-sm">Step label text</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 align-top font-mono text-sm">description</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">string</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                    <td className="py-3 px-4 align-top text-sm">Step description text</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 align-top font-mono text-sm">icon</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">ReactNode</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                    <td className="py-3 px-4 align-top text-sm">Custom icon for the step</td>
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
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
