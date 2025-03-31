
import { DocsLayout } from "@/components/docs/DocsLayout";
import { ComponentExample } from "@/components/docs/ComponentExample";
import { ComponentCode } from "@/components/docs/ComponentExample";
import { useState } from "react";
import { Button } from "@/components/ui-custom/Button";
import { Stepper, StepperStep } from "@/components/ui-custom/Stepper";
import { useToast } from "@/hooks/use-toast";

export default function StepperDoc() {
  const [activeStep, setActiveStep] = useState(1);
  const [verticalActiveStep, setVerticalActiveStep] = useState(0);
  const { toast } = useToast();

  const handleNext = () => {
    const nextStep = Math.min(activeStep + 1, 3);
    setActiveStep(nextStep);
    if (nextStep === 3) {
      toast({
        title: "Process Complete",
        description: "You have successfully completed all steps!",
        type: "success",
        duration: 3000,
      });
    }
  };

  const handlePrev = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  const handleVerticalNext = () => {
    const nextStep = Math.min(verticalActiveStep + 1, 3);
    setVerticalActiveStep(nextStep);
    if (nextStep === 3) {
      toast({
        title: "Process Complete",
        description: "You have successfully completed all steps!",
        type: "success",
        duration: 3000,
      });
    }
  };

  const handleVerticalPrev = () => {
    setVerticalActiveStep((prev) => Math.max(prev - 1, 0));
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
          <div className="w-full max-w-2xl p-6 border rounded-lg">
            <Stepper activeStep={activeStep}>
              <StepperStep step={0} label="Account" description="Personal information" />
              <StepperStep step={1} label="Contact" description="Contact details" />
              <StepperStep step={2} label="Review" description="Review information" />
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
  const nextStep = Math.min(activeStep + 1, 3);
  setActiveStep(nextStep);
  if (nextStep === 3) {
    toast({
      title: "Process Complete",
      description: "You have successfully completed all steps!",
      type: "success",
      duration: 3000,
    });
  }
};

const handlePrev = () => {
  setActiveStep((prev) => Math.max(prev - 1, 0));
};

<Stepper activeStep={activeStep}>
  <StepperStep step={0} label="Account" description="Personal information" />
  <StepperStep step={1} label="Contact" description="Contact details" />
  <StepperStep step={2} label="Review" description="Review information" />
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

        <ComponentExample title="Vertical Stepper">
          <div className="w-full max-w-2xl p-6 border rounded-lg">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2">
                <Stepper activeStep={verticalActiveStep} orientation="vertical">
                  <StepperStep step={0} label="Account Setup" description="Create your account" />
                  <StepperStep step={1} label="Personal Details" description="Add personal information" />
                  <StepperStep step={2} label="Confirm Email" description="Verify email address" />
                  <StepperStep step={3} label="Complete" description="Account created" />
                </Stepper>
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">
                    {verticalActiveStep === 0 && "Create Account"}
                    {verticalActiveStep === 1 && "Personal Information"}
                    {verticalActiveStep === 2 && "Verification"}
                    {verticalActiveStep === 3 && "All Done!"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {verticalActiveStep === 0 && "Step 1: Set up your account credentials."}
                    {verticalActiveStep === 1 && "Step 2: Tell us a bit about yourself."}
                    {verticalActiveStep === 2 && "Step 3: Verify your email address."}
                    {verticalActiveStep === 3 && "Your account has been successfully created!"}
                  </p>
                  <div className="pt-4 flex justify-between">
                    <Button 
                      variant="outline" 
                      onClick={handleVerticalPrev}
                      disabled={verticalActiveStep === 0}
                      size="sm"
                    >
                      Back
                    </Button>
                    <Button 
                      onClick={handleVerticalNext}
                      disabled={verticalActiveStep === 3}
                      size="sm"
                    >
                      {verticalActiveStep === 2 ? "Finish" : "Continue"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ComponentCode>
{`const [verticalActiveStep, setVerticalActiveStep] = useState(0);

const handleVerticalNext = () => {
  const nextStep = Math.min(verticalActiveStep + 1, 3);
  setVerticalActiveStep(nextStep);
  if (nextStep === 3) {
    toast({
      title: "Process Complete",
      description: "You have successfully completed all steps!",
      type: "success",
      duration: 3000,
    });
  }
};

const handleVerticalPrev = () => {
  setVerticalActiveStep((prev) => Math.max(prev - 1, 0));
};

<div className="flex flex-col md:flex-row gap-8">
  <div className="w-full md:w-1/2">
    <Stepper activeStep={verticalActiveStep} orientation="vertical">
      <StepperStep step={0} label="Account Setup" description="Create your account" />
      <StepperStep step={1} label="Personal Details" description="Add personal information" />
      <StepperStep step={2} label="Confirm Email" description="Verify email address" />
      <StepperStep step={3} label="Complete" description="Account created" />
    </Stepper>
  </div>
  <div className="w-full md:w-1/2 flex flex-col justify-center">
    <div className="space-y-4">
      <h3 className="text-lg font-medium">
        {verticalActiveStep === 0 && "Create Account"}
        {verticalActiveStep === 1 && "Personal Information"}
        {verticalActiveStep === 2 && "Verification"}
        {verticalActiveStep === 3 && "All Done!"}
      </h3>
      <p className="text-sm text-muted-foreground">
        {verticalActiveStep === 0 && "Step 1: Set up your account credentials."}
        {verticalActiveStep === 1 && "Step 2: Tell us a bit about yourself."}
        {verticalActiveStep === 2 && "Step 3: Verify your email address."}
        {verticalActiveStep === 3 && "Your account has been successfully created!"}
      </p>
      <div className="pt-4 flex justify-between">
        <Button 
          variant="outline" 
          onClick={handleVerticalPrev}
          disabled={verticalActiveStep === 0}
          size="sm"
        >
          Back
        </Button>
        <Button 
          onClick={handleVerticalNext}
          disabled={verticalActiveStep === 3}
          size="sm"
        >
          {verticalActiveStep === 2 ? "Finish" : "Continue"}
        </Button>
      </div>
    </div>
  </div>
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
                  <tr className="border-b">
                    <td className="py-3 px-4 align-top font-mono text-sm">variant</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">"default" | "outline" | "gradient"</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">"default"</td>
                    <td className="py-3 px-4 align-top text-sm">Visual style variant</td>
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
