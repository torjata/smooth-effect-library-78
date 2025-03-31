
import { DocsLayout } from "@/components/docs/DocsLayout";
import { ComponentExample } from "@/components/docs/ComponentExample";
import { ComponentCode } from "@/components/docs/ComponentExample";
import { useToast } from "@/components/ui-custom/Toast";
import { Button } from "@/components/ui-custom/Button";

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

  return (
    <DocsLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Toast</h1>
          <p className="text-muted-foreground mt-2">
            Toast messages for displaying brief notifications to users.
          </p>
        </div>

        <ComponentExample title="Toast Variants">
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => showToast("default")}>Default Toast</Button>
            <Button onClick={() => showToast("success")}>Success Toast</Button>
            <Button onClick={() => showToast("error")}>Error Toast</Button>
            <Button onClick={() => showToast("warning")}>Warning Toast</Button>
            <Button onClick={() => showToast("info")}>Info Toast</Button>
          </div>
          <ComponentCode>
{`const { addToast } = useToast();

const showToast = (type) => {
  addToast({
    title: \`\${type.charAt(0).toUpperCase() + type.slice(1)} Toast\`,
    description: \`This is a \${type} toast notification example.\`,
    type,
    duration: 5000,
  });
};

<Button onClick={() => showToast("default")}>Default Toast</Button>
<Button onClick={() => showToast("success")}>Success Toast</Button>
<Button onClick={() => showToast("error")}>Error Toast</Button>
<Button onClick={() => showToast("warning")}>Warning Toast</Button>
<Button onClick={() => showToast("info")}>Info Toast</Button>`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="Toast with Longer Duration">
          <Button 
            onClick={() => 
              addToast({
                title: "Longer Duration",
                description: "This toast will stay visible for 10 seconds.",
                duration: 10000,
              })
            }
          >
            Show Toast (10s)
          </Button>
          <ComponentCode>
{`const { addToast } = useToast();

<Button 
  onClick={() => 
    addToast({
      title: "Longer Duration",
      description: "This toast will stay visible for 10 seconds.",
      duration: 10000,
    })
  }
>
  Show Toast (10s)
</Button>`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="Toast with Custom Action">
          <Button 
            onClick={() => 
              addToast({
                title: "Toast with Action",
                description: "This toast has a custom action button.",
                action: <Button size="sm" variant="secondary">Action</Button>,
              })
            }
          >
            Show Toast with Action
          </Button>
          <ComponentCode>
{`const { addToast } = useToast();

<Button 
  onClick={() => 
    addToast({
      title: "Toast with Action",
      description: "This toast has a custom action button.",
      action: <Button size="sm" variant="secondary">Action</Button>,
    })
  }
>
  Show Toast with Action
</Button>`}
          </ComponentCode>
        </ComponentExample>

        <div className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">API Reference</h2>
          
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
                  <td className="py-3 px-4 align-top font-mono text-sm">id</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">string</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">auto-generated</td>
                  <td className="py-3 px-4 align-top text-sm">Unique identifier for the toast</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 align-top font-mono text-sm">title</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">string</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                  <td className="py-3 px-4 align-top text-sm">Title of the toast</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 align-top font-mono text-sm">description</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">string</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                  <td className="py-3 px-4 align-top text-sm">Description text for the toast</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 align-top font-mono text-sm">type</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">"default" | "success" | "error" | "warning" | "info"</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">"default"</td>
                  <td className="py-3 px-4 align-top text-sm">Type of toast that determines styling</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 align-top font-mono text-sm">duration</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">number</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">5000</td>
                  <td className="py-3 px-4 align-top text-sm">Duration in milliseconds before auto-dismissing</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 align-top font-mono text-sm">action</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">React.ReactNode</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                  <td className="py-3 px-4 align-top text-sm">Optional action component to render in the toast</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
