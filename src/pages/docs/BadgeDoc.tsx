
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
                  <td className="py-3 px-4 align-top font-mono text-sm">variant</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">"default" | "primary" | "secondary" | "outline" | "success" | "warning" | "danger"</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">"default"</td>
                  <td className="py-3 px-4 align-top text-sm">Badge style variant</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 align-top font-mono text-sm">animate</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">boolean</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">true</td>
                  <td className="py-3 px-4 align-top text-sm">Whether the badge should animate</td>
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
    </DocsLayout>
  );
}
