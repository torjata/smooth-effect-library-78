
import { DocsLayout } from "@/components/docs/DocsLayout";
import { ComponentExample } from "@/components/docs/ComponentExample";
import { ComponentCode } from "@/components/docs/ComponentExample";
import { Button } from "@/components/ui-custom/Button";
import { useToast } from "@/components/ui-custom/Toast";

export default function ToastDoc() {
  const { addToast } = useToast();
  
  const showToast = (type: "default" | "success" | "error" | "warning" | "info") => {
    const toastConfig = {
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} Toast`,
      description: `This is a ${type} toast notification example.`,
      type,
      duration: 5000,
    };
    
    addToast(toastConfig);
  };
  
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
            
            <div className="mt-4">
              <h3 className="text-xl font-semibold">Toast Props</h3>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><code>title</code> - Toast title</li>
                <li><code>description</code> - Optional description text</li>
                <li><code>type</code> - "default", "success", "error", "warning", "info"</li>
                <li><code>duration</code> - Display duration in milliseconds (default: 5000)</li>
                <li><code>action</code> - Optional action button or component</li>
              </ul>
            </div>
            
            <div className="mt-4">
              <h3 className="text-xl font-semibold">useToast Hook</h3>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><code>addToast</code> - Function to add a new toast</li>
                <li><code>removeToast</code> - Function to remove a toast by ID</li>
                <li><code>toasts</code> - Array of active toasts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
