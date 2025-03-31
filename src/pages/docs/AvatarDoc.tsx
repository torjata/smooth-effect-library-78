
import { DocsLayout } from "@/components/docs/DocsLayout";
import { ComponentExample } from "@/components/docs/ComponentExample";
import { ComponentCode } from "@/components/docs/ComponentExample";
import { Avatar } from "@/components/ui-custom/Avatar";
import { Badge } from "@/components/ui-custom/Badge";

export default function AvatarDoc() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Avatar</h1>
          <p className="text-muted-foreground mt-2">
            Avatars represent users or entities with images, initials, or icons.
          </p>
        </div>

        <ComponentExample title="Basic Avatars">
          <div className="flex items-end gap-4">
            <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=128&h=128&auto=format&fit=crop" alt="Profile image" />
            <Avatar fallback="JD" />
            <Avatar />
          </div>
          <ComponentCode>
{`<Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=128&h=128&auto=format&fit=crop" alt="Profile image" />
<Avatar fallback="JD" />
<Avatar />`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="Sizes">
          <div className="flex items-end gap-4">
            <Avatar size="sm" fallback="SM" />
            <Avatar size="md" fallback="MD" />
            <Avatar size="lg" fallback="LG" />
            <Avatar size="xl" fallback="XL" />
          </div>
          <ComponentCode>
{`<Avatar size="sm" fallback="SM" />
<Avatar size="md" fallback="MD" />
<Avatar size="lg" fallback="LG" />
<Avatar size="xl" fallback="XL" />`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="Status">
          <div className="flex items-end gap-4">
            <Avatar status="online" fallback="ON" />
            <Avatar status="offline" fallback="OF" />
            <Avatar status="away" fallback="AW" />
            <Avatar status="busy" fallback="BS" />
          </div>
          <ComponentCode>
{`<Avatar status="online" fallback="ON" />
<Avatar status="offline" fallback="OF" />
<Avatar status="away" fallback="AW" />
<Avatar status="busy" fallback="BS" />`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="With Badges">
          <div className="flex items-end gap-4">
            <Avatar 
              fallback="JD" 
              badge={<Badge variant="danger">3</Badge>}
            />
            <Avatar 
              fallback="AB" 
              status="online"
              badge={<Badge variant="success">New</Badge>}
            />
          </div>
          <ComponentCode>
{`<Avatar 
  fallback="JD" 
  badge={<Badge variant="danger">3</Badge>}
/>
<Avatar 
  fallback="AB" 
  status="online"
  badge={<Badge variant="success">New</Badge>}
/>`}
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
                  <td className="py-3 px-4 align-top font-mono text-sm">src</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">string</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                  <td className="py-3 px-4 align-top text-sm">URL for the avatar image</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 align-top font-mono text-sm">alt</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">string</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">"Avatar"</td>
                  <td className="py-3 px-4 align-top text-sm">Alt text for the image</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 align-top font-mono text-sm">fallback</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">string</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">"?"</td>
                  <td className="py-3 px-4 align-top text-sm">Text to display when no image is available</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 align-top font-mono text-sm">size</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">"sm" | "md" | "lg" | "xl"</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">"md"</td>
                  <td className="py-3 px-4 align-top text-sm">Avatar size</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 align-top font-mono text-sm">status</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">"online" | "offline" | "away" | "busy"</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                  <td className="py-3 px-4 align-top text-sm">Status indicator</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 align-top font-mono text-sm">badge</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">ReactNode</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                  <td className="py-3 px-4 align-top text-sm">Optional badge component to display on the avatar</td>
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
