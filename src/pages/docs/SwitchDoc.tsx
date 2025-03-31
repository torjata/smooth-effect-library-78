
import { DocsLayout } from "@/components/docs/DocsLayout";
import { ComponentExample } from "@/components/docs/ComponentExample";
import { ComponentCode } from "@/components/docs/ComponentExample";
import { Switch } from "@/components/ui-custom/Switch";
import { useState } from "react";

export default function SwitchDoc() {
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  
  return (
    <DocsLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Switch</h1>
          <p className="text-muted-foreground mt-2">
            A control that allows the user to toggle between checked and not checked.
          </p>
        </div>

        <ComponentExample title="Basic Switch">
          <Switch checked={checked} onChange={setChecked} />
          <ComponentCode>
{`import { Switch } from "@/components/ui-custom/Switch";
import { useState } from "react";

const [checked, setChecked] = useState(false);

<Switch checked={checked} onChange={setChecked} />`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="Switch with Label">
          <Switch label="Airplane Mode" checked={checked} onChange={setChecked} />
          <ComponentCode>
{`<Switch label="Airplane Mode" checked={checked} onChange={setChecked} />`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="Disabled Switch">
          <Switch disabled />
          <ComponentCode>
{`<Switch disabled />`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="Switch Sizes">
          <div className="flex flex-col gap-4">
            <Switch size="sm" label="Small" />
            <Switch size="md" label="Medium" />
            <Switch size="lg" label="Large" />
          </div>
          <ComponentCode>
{`<Switch size="sm" label="Small" />
<Switch size="md" label="Medium" />
<Switch size="lg" label="Large" />`}
          </ComponentCode>
        </ComponentExample>

        <div className="mt-10 space-y-4">
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
                  <td className="py-3 px-4 align-top font-mono text-sm">checked</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">boolean</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">false</td>
                  <td className="py-3 px-4 align-top text-sm">Whether the switch is checked</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 align-top font-mono text-sm">onChange</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">(checked: boolean) => void</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                  <td className="py-3 px-4 align-top text-sm">Callback when state changes</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 align-top font-mono text-sm">disabled</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">boolean</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">false</td>
                  <td className="py-3 px-4 align-top text-sm">Whether the switch is disabled</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 align-top font-mono text-sm">size</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">'sm' | 'md' | 'lg'</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">'md'</td>
                  <td className="py-3 px-4 align-top text-sm">Size of the switch</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 align-top font-mono text-sm">label</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">string</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                  <td className="py-3 px-4 align-top text-sm">Label for the switch</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
