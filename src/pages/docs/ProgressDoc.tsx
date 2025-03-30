
import { DocsLayout } from "@/components/docs/DocsLayout";
import { ComponentExample } from "@/components/docs/ComponentExample";
import { ComponentCode } from "@/components/docs/ComponentExample";
import { LinearProgress, CircularProgress } from "@/components/ui-custom/Progress";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui-custom/Button";

export default function ProgressDoc() {
  const [progress, setProgress] = useState(45);
  
  const simulateProgress = () => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 200);
    
    return () => clearInterval(interval);
  };
  
  return (
    <DocsLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Progress</h1>
          <p className="text-muted-foreground mt-2">
            Progress indicators showing completion status and loading state.
          </p>
        </div>

        <ComponentExample title="Linear Progress">
          <div className="space-y-8 w-full max-w-md">
            <LinearProgress value={progress} />
            <LinearProgress value={progress} label="Download Progress" showValue />
            <Button onClick={simulateProgress}>Simulate Progress</Button>
          </div>
          <ComponentCode>
{`const [progress, setProgress] = useState(45);

<LinearProgress value={progress} />
<LinearProgress value={progress} label="Download Progress" showValue />

// Simulate progress
const simulateProgress = () => {
  setProgress(0);
  const interval = setInterval(() => {
    setProgress(prev => {
      if (prev >= 100) {
        clearInterval(interval);
        return 100;
      }
      return prev + 5;
    });
  }, 200);
  
  return () => clearInterval(interval);
};`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="Progress Variants">
          <div className="space-y-6 w-full max-w-md">
            <LinearProgress value={30} variant="default" showValue />
            <LinearProgress value={50} variant="success" showValue />
            <LinearProgress value={70} variant="warning" showValue />
            <LinearProgress value={90} variant="danger" showValue />
          </div>
          <ComponentCode>
{`<LinearProgress value={30} variant="default" showValue />
<LinearProgress value={50} variant="success" showValue />
<LinearProgress value={70} variant="warning" showValue />
<LinearProgress value={90} variant="danger" showValue />`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="Circular Progress">
          <div className="flex flex-wrap gap-8">
            <CircularProgress value={25} />
            <CircularProgress value={50} showValue />
            <CircularProgress value={75} showValue label="Loading" />
            <CircularProgress value={100} variant="success" showValue />
          </div>
          <ComponentCode>
{`<CircularProgress value={25} />
<CircularProgress value={50} showValue />
<CircularProgress value={75} showValue label="Loading" />
<CircularProgress value={100} variant="success" showValue />`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="Circular Progress Sizes">
          <div className="flex items-center gap-8">
            <CircularProgress value={66} size={40} strokeWidth={4} showValue />
            <CircularProgress value={66} size={60} strokeWidth={6} showValue />
            <CircularProgress value={66} size={80} strokeWidth={8} showValue />
            <CircularProgress value={66} size={100} strokeWidth={10} showValue />
          </div>
          <ComponentCode>
{`<CircularProgress value={66} size={40} strokeWidth={4} showValue />
<CircularProgress value={66} size={60} strokeWidth={6} showValue />
<CircularProgress value={66} size={80} strokeWidth={8} showValue />
<CircularProgress value={66} size={100} strokeWidth={10} showValue />`}
          </ComponentCode>
        </ComponentExample>

        <div className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">API Reference</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">LinearProgress Props</h3>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><code>value</code> - Current progress value (0-100)</li>
                <li><code>max</code> - Maximum value (default: 100)</li>
                <li><code>label</code> - Optional label text</li>
                <li><code>showValue</code> - Whether to show the value as percentage</li>
                <li><code>variant</code> - Visual style: "default", "success", "warning", "danger"</li>
                <li><code>className</code> - Additional CSS classes for the container</li>
                <li><code>indicatorClassName</code> - Additional CSS classes for the progress indicator</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold">CircularProgress Props</h3>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><code>value</code> - Current progress value (0-100)</li>
                <li><code>max</code> - Maximum value (default: 100)</li>
                <li><code>size</code> - Size of the circle in pixels (default: 60)</li>
                <li><code>strokeWidth</code> - Width of the progress track (default: 8)</li>
                <li><code>label</code> - Optional label text</li>
                <li><code>showValue</code> - Whether to show the value as percentage</li>
                <li><code>variant</code> - Visual style: "default", "success", "warning", "danger"</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
