
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
          
          <div>
            <h3 className="text-xl font-semibold">Props</h3>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><code>src</code> - URL for the avatar image</li>
              <li><code>alt</code> - Alt text for the image</li>
              <li><code>fallback</code> - Text to display when no image is available</li>
              <li><code>size</code> - Avatar size: "sm", "md", "lg", "xl"</li>
              <li><code>status</code> - Status indicator: "online", "offline", "away", "busy"</li>
              <li><code>badge</code> - Optional badge component to display on the avatar</li>
              <li><code>className</code> - Additional CSS classes</li>
            </ul>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
