
import { useState } from "react";
import { DocsLayout } from "@/components/docs/DocsLayout";
import { ComponentExample } from "@/components/docs/ComponentExample";
import { ComponentCode } from "@/components/docs/ComponentExample";
import { Button } from "@/components/ui-custom/Button";
import { useToast } from "@/hooks/use-toast";

export default function ToastDoc() {
  const { toast } = useToast();
  
  const showToast = (type: "default" | "success" | "error" | "warning" | "info") => {
    toast({
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} Toast`,
      description: `This is a ${type} toast notification example.`,
      type: type,
      duration: 5000,
    });
  };
  
  return (
    <DocsLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Toast</h1>
          <p className="text-muted-foreground mt-2">
            Toast notifications for providing feedback to users.
          </p>
        </div>

        <ComponentExample title="Toast Types">
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => showToast("default")}>Default Toast</Button>
            <Button onClick={() => showToast("success")}>Success Toast</Button>
            <Button onClick={() => showToast("error")}>Error Toast</Button>
            <Button onClick={() => showToast("warning")}>Warning Toast</Button>
            <Button onClick={() => showToast("info")}>Info Toast</Button>
          </div>
          <ComponentCode>
{`// Import the useToast hook
import { useToast } from "@/hooks/use-toast";

// Inside your component
const { toast } = useToast();

// Show toast
const showToast = (type) => {
  toast({
    title: \`\${type.charAt(0).toUpperCase() + type.slice(1)} Toast\`,
    description: \`This is a \${type} toast notification example.\`,
    type: type,
    duration: 5000,
  });
};

// UI
<Button onClick={() => showToast("default")}>Default Toast</Button>
<Button onClick={() => showToast("success")}>Success Toast</Button>
<Button onClick={() => showToast("error")}>Error Toast</Button>
<Button onClick={() => showToast("warning")}>Warning Toast</Button>
<Button onClick={() => showToast("info")}>Info Toast</Button>`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="Toast with Custom Duration">
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => {
              toast({
                title: "Quick Toast",
                description: "This toast will disappear after 2 seconds.",
                duration: 2000,
              });
            }}>Short Duration (2s)</Button>
            
            <Button onClick={() => {
              toast({
                title: "Persistent Toast",
                description: "This toast will stay for 10 seconds.",
                duration: 10000,
              });
            }}>Long Duration (10s)</Button>
          </div>
          <ComponentCode>
{`const { toast } = useToast();

<Button onClick={() => {
  toast({
    title: "Quick Toast",
    description: "This toast will disappear after 2 seconds.",
    duration: 2000,
  });
}}>Short Duration (2s)</Button>

<Button onClick={() => {
  toast({
    title: "Persistent Toast",
    description: "This toast will stay for 10 seconds.",
    duration: 10000,
  });
}}>Long Duration (10s)</Button>`}
          </ComponentCode>
        </ComponentExample>

        <div className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">API Reference</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-4 text-left">Property</th>
                  <th className="py-3 px-4 text-left">Type</th>
                  <th className="py-3 px-4 text-left">Default</th>
                  <th className="py-3 px-4 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4 align-top font-mono text-sm">title</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">string</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                  <td className="py-3 px-4 align-top text-sm">Title text displayed in the toast</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 align-top font-mono text-sm">description</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">string</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                  <td className="py-3 px-4 align-top text-sm">Description text displayed in the toast</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 align-top font-mono text-sm">type</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">"default" | "success" | "error" | "warning" | "info"</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">"default"</td>
                  <td className="py-3 px-4 align-top text-sm">Type of toast that determines its appearance</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 align-top font-mono text-sm">duration</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">number</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">5000</td>
                  <td className="py-3 px-4 align-top text-sm">Duration in milliseconds before the toast is automatically dismissed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
