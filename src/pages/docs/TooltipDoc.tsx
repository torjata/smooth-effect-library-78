
import { DocsLayout } from "@/components/docs/DocsLayout";
import { ComponentExample } from "@/components/docs/ComponentExample";
import { ComponentCode } from "@/components/docs/ComponentExample";
import { Tooltip } from "@/components/ui-custom/Tooltip";
import { Button } from "@/components/ui-custom/Button";
import { Info, HelpCircle, Settings, User } from "lucide-react";

export default function TooltipDoc() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Tooltip</h1>
          <p className="text-muted-foreground mt-2">
            Contextual information shown on hover or focus.
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-300">
          <p className="text-sm">The tooltip examples are visible below, but for an interactive experience, please visit the showcase page. Tooltips rely on hover interactions that may not function correctly within this documentation view.</p>
        </div>

        <ComponentExample title="Basic Tooltip">
          <div className="flex justify-center py-8">
            <Button variant="outline" size="icon">
              <Info className="h-4 w-4" />
            </Button>
          </div>
          <ComponentCode>
{`<Tooltip content="Shows more information about this feature">
  <Button variant="outline" size="icon">
    <Info className="h-4 w-4" />
  </Button>
</Tooltip>`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="Tooltip Positions">
          <div className="flex flex-wrap justify-center gap-4 py-8">
            <Button variant="outline">Top</Button>
            <Button variant="outline">Right</Button>
            <Button variant="outline">Bottom</Button>
            <Button variant="outline">Left</Button>
          </div>
          <ComponentCode>
{`<Tooltip content="This tooltip appears on top" side="top">
  <Button variant="outline">Top</Button>
</Tooltip>

<Tooltip content="This tooltip appears on the right" side="right">
  <Button variant="outline">Right</Button>
</Tooltip>

<Tooltip content="This tooltip appears on the bottom" side="bottom">
  <Button variant="outline">Bottom</Button>
</Tooltip>

<Tooltip content="This tooltip appears on the left" side="left">
  <Button variant="outline">Left</Button>
</Tooltip>`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="With Icons">
          <div className="flex flex-wrap justify-center gap-4 py-8">
            <Button variant="ghost" size="icon">
              <HelpCircle className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
          <ComponentCode>
{`<Tooltip content="Get help">
  <Button variant="ghost" size="icon">
    <HelpCircle className="h-5 w-5" />
  </Button>
</Tooltip>

<Tooltip content="Account settings">
  <Button variant="ghost" size="icon">
    <Settings className="h-5 w-5" />
  </Button>
</Tooltip>

<Tooltip content="Your profile">
  <Button variant="ghost" size="icon">
    <User className="h-5 w-5" />
  </Button>
</Tooltip>`}
          </ComponentCode>
        </ComponentExample>

        <div className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">API Reference</h2>
          
          <div>
            <h3 className="text-xl font-semibold">Props</h3>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><code>content</code> - The content to display inside the tooltip</li>
              <li><code>children</code> - The element that triggers the tooltip</li>
              <li><code>side</code> - Position of the tooltip: "top", "right", "bottom", "left" (default: "top")</li>
              <li><code>sideOffset</code> - Distance between tooltip and trigger element in pixels (default: 4)</li>
              <li><code>align</code> - Alignment along the trigger element: "start", "center", "end" (default: "center")</li>
              <li><code>delayDuration</code> - Delay before the tooltip appears in milliseconds (default: 300)</li>
              <li><code>className</code> - Additional CSS classes for the tooltip</li>
            </ul>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
