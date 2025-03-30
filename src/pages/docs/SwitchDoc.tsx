
import { DocsLayout } from "@/components/docs/DocsLayout";
import { ComponentExample } from "@/components/docs/ComponentExample";
import { ComponentCode } from "@/components/docs/ComponentExample";
import { Switch } from "@/components/ui-custom/Switch";
import { useState } from "react";

export default function SwitchDoc() {
  const [checked, setChecked] = useState(false);
  
  return (
    <DocsLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Switch</h1>
          <p className="text-muted-foreground mt-2">
            Toggle switches for enabling or disabling options.
          </p>
        </div>

        <ComponentExample title="Basic Switch">
          <div className="flex flex-col gap-4">
            <Switch />
          </div>
          <ComponentCode>
{`<Switch />`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="Controlled Switch">
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <Switch checked={checked} onCheckedChange={setChecked} />
              <p className="text-sm text-muted-foreground">The switch is {checked ? "on" : "off"}</p>
            </div>
          </div>
          <ComponentCode>
{`const [checked, setChecked] = useState(false);

<Switch checked={checked} onCheckedChange={setChecked} />
<p>The switch is {checked ? "on" : "off"}</p>`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="With Labels">
          <div className="flex flex-col gap-4">
            <Switch label="Airplane Mode" />
            <Switch label="Dark Mode" />
            <Switch label="Notifications" />
          </div>
          <ComponentCode>
{`<Switch label="Airplane Mode" />
<Switch label="Dark Mode" />
<Switch label="Notifications" />`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="Disabled States">
          <div className="flex flex-col gap-4">
            <Switch disabled label="Disabled (off)" />
            <Switch disabled checked label="Disabled (on)" />
          </div>
          <ComponentCode>
{`<Switch disabled label="Disabled (off)" />
<Switch disabled checked label="Disabled (on)" />`}
          </ComponentCode>
        </ComponentExample>

        <div className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">API Reference</h2>
          
          <div>
            <h3 className="text-xl font-semibold">Props</h3>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><code>checked</code> - Whether the switch is checked or not</li>
              <li><code>onCheckedChange</code> - Function called when the switch is toggled</li>
              <li><code>disabled</code> - Whether the switch is disabled</li>
              <li><code>label</code> - Optional label text</li>
              <li><code>className</code> - Additional CSS classes</li>
            </ul>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
