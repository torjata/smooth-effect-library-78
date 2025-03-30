
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
                  <td className="py-3 px-4 align-top font-mono text-sm">checked</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">boolean</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">false</td>
                  <td className="py-3 px-4 align-top text-sm">Whether the switch is checked</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 align-top font-mono text-sm">onCheckedChange</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">(checked: boolean) => void</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                  <td className="py-3 px-4 align-top text-sm">Function called when the switch state changes</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 align-top font-mono text-sm">disabled</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">boolean</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">false</td>
                  <td className="py-3 px-4 align-top text-sm">Whether the switch is disabled</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 align-top font-mono text-sm">label</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">string</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                  <td className="py-3 px-4 align-top text-sm">Optional label text</td>
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
