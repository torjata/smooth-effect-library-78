
import { DocsLayout } from "@/components/docs/DocsLayout";
import { ComponentExample } from "@/components/docs/ComponentExample";
import { ComponentCode } from "@/components/docs/ComponentExample";
import { Badge } from "@/components/ui-custom/Badge";

export default function BadgeDoc() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Badge</h1>
          <p className="text-muted-foreground mt-2">
            Badges are used to highlight status, count, or categorize items.
          </p>
        </div>

        <ComponentExample title="Basic Badge">
          <div className="flex flex-wrap gap-2">
            <Badge variant="default">Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
          <ComponentCode>
{`<Badge variant="default">Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="Status Badges">
          <div className="flex flex-wrap gap-2">
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
          </div>
          <ComponentCode>
{`<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>`}
          </ComponentCode>
        </ComponentExample>

        <div className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">API Reference</h2>
          
          <div>
            <h3 className="text-xl font-semibold">Props</h3>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><code>variant</code> - Badge style variant: default, primary, secondary, outline, success, warning, danger</li>
              <li><code>animate</code> - Whether the badge should animate (defaults to true)</li>
              <li><code>className</code> - Additional CSS classes</li>
            </ul>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
