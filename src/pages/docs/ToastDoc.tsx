
import { DocsLayout } from "@/components/docs/DocsLayout";
import { ComponentExample } from "@/components/docs/ComponentExample";
import { ComponentCode } from "@/components/docs/ComponentExample";
import { Button } from "@/components/ui-custom/Button";
import { useToast } from "@/components/ui-custom/Toast";
import { useEffect } from "react";

export default function ToastDoc() {
  const { addToast } = useToast();
  
  const showToast = (type: "default" | "success" | "error" | "warning" | "info") => {
    addToast({
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} Toast`,
      description: `This is a ${type} toast notification example.`,
      type,
      duration: 5000,
    });
  };
  
  // Demo toast to show when page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      addToast({
        title: "Welcome to Toast Documentation",
        description: "Toasts appear at the corner of the screen to provide feedback",
        type: "info",
        duration: 5000,
      });
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [addToast]);
  
  return (
    <DocsLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Toast</h1>
          <p className="text-muted-foreground mt-2">
            Notification messages that appear temporarily.
          </p>
        </div>

        <ComponentExample title="Toast Types">
          <div className="flex flex-wrap gap-2">
            <Button onClick={() => showToast("default")}>Default Toast</Button>
            <Button onClick={() => showToast("success")}>Success Toast</Button>
            <Button onClick={() => showToast("error")}>Error Toast</Button>
            <Button onClick={() => showToast("warning")}>Warning Toast</Button>
            <Button onClick={() => showToast("info")}>Info Toast</Button>
          </div>
          <ComponentCode>
{`import { useToast } from "@/components/ui-custom/Toast";

const { addToast } = useToast();

const showToast = (type: "default" | "success" | "error" | "warning" | "info") => {
  const toastConfig = {
    title: \`\${type.charAt(0).toUpperCase() + type.slice(1)} Toast\`,
    description: \`This is a \${type} toast notification example.\`,
    type,
    duration: 5000,
  };
  
  addToast(toastConfig);
};

<Button onClick={() => showToast("default")}>Default Toast</Button>
<Button onClick={() => showToast("success")}>Success Toast</Button>
<Button onClick={() => showToast("error")}>Error Toast</Button>
<Button onClick={() => showToast("warning")}>Warning Toast</Button>
<Button onClick={() => showToast("info")}>Info Toast</Button>`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="Toast with Action">
          <div>
            <Button
              onClick={() => {
                addToast({
                  title: "Action Required",
                  description: "Please confirm your action.",
                  type: "warning",
                  duration: 10000,
                  action: (
                    <Button size="sm" variant="outline" onClick={() => console.log("Action clicked")}>
                      Confirm
                    </Button>
                  ),
                });
              }}
            >
              Show Action Toast
            </Button>
          </div>
          <ComponentCode>
{`<Button
  onClick={() => {
    addToast({
      title: "Action Required",
      description: "Please confirm your action.",
      type: "warning",
      duration: 10000,
      action: (
        <Button size="sm" variant="outline" onClick={() => console.log("Action clicked")}>
          Confirm
        </Button>
      ),
    });
  }}
>
  Show Action Toast
</Button>`}
          </ComponentCode>
        </ComponentExample>

        <div className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">Setup</h2>
          
          <div className="space-y-2">
            <p>To use toasts in your application, you need to add the <code>ToastProvider</code> to your app:</p>
            <pre className="text-sm p-4 bg-muted/30 rounded-md overflow-auto">
{`import { ToastProvider } from "@/components/ui-custom/Toast";

function App() {
  return (
    <ToastProvider>
      <YourApp />
    </ToastProvider>
  );
}`}
            </pre>
          </div>
          
          <div className="mt-8">
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
                    <td className="py-3 px-4 align-top text-sm">Toast title</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 align-top font-mono text-sm">description</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">string</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                    <td className="py-3 px-4 align-top text-sm">Optional description text</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 align-top font-mono text-sm">type</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">"default" | "success" | "error" | "warning" | "info"</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">"default"</td>
                    <td className="py-3 px-4 align-top text-sm">Type of toast for styling</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 align-top font-mono text-sm">duration</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">number</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">5000</td>
                    <td className="py-3 px-4 align-top text-sm">Display duration in milliseconds</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 align-top font-mono text-sm">action</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">ReactNode</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                    <td className="py-3 px-4 align-top text-sm">Optional action button or component</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold">useToast Hook</h3>
              <div className="overflow-x-auto mt-2">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 px-4 text-left">Method</th>
                      <th className="py-3 px-4 text-left">Type</th>
                      <th className="py-3 px-4 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 align-top font-mono text-sm">addToast</td>
                      <td className="py-3 px-4 align-top font-mono text-sm">function</td>
                      <td className="py-3 px-4 align-top text-sm">Function to add a new toast</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 align-top font-mono text-sm">removeToast</td>
                      <td className="py-3 px-4 align-top font-mono text-sm">function</td>
                      <td className="py-3 px-4 align-top text-sm">Function to remove a toast by ID</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 align-top font-mono text-sm">toasts</td>
                      <td className="py-3 px-4 align-top font-mono text-sm">array</td>
                      <td className="py-3 px-4 align-top text-sm">Array of active toasts</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
