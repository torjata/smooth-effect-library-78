
import { DocsLayout } from "@/components/docs/DocsLayout";
import { ComponentExample } from "@/components/docs/ComponentExample";
import { ComponentCode } from "@/components/docs/ComponentExample";
import { Input } from "@/components/ui-custom/Input";
import { Mail, User, Search } from "lucide-react";

export default function InputDoc() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Input</h1>
          <p className="text-muted-foreground mt-2">
            Input components for collecting user input with various states and styles.
          </p>
        </div>

        <ComponentExample title="Basic Input">
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <Input placeholder="Enter your text" />
          </div>
          <ComponentCode>
{`<Input placeholder="Enter your text" />`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="Input with Label">
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <Input label="Email Address" placeholder="your@email.com" />
          </div>
          <ComponentCode>
{`<Input label="Email Address" placeholder="your@email.com" />`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="Input with Icon">
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <Input icon={<Mail className="h-4 w-4" />} placeholder="Enter your email" />
            <Input icon={<User className="h-4 w-4" />} placeholder="Enter your name" />
            <Input icon={<Search className="h-4 w-4" />} placeholder="Search..." />
          </div>
          <ComponentCode>
{`<Input icon={<Mail className="h-4 w-4" />} placeholder="Enter your email" />
<Input icon={<User className="h-4 w-4" />} placeholder="Enter your name" />
<Input icon={<Search className="h-4 w-4" />} placeholder="Search..." />`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="Input States">
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <Input placeholder="Disabled input" disabled />
            <Input placeholder="Invalid input" error="This field is required" />
            <Input type="password" placeholder="Password input" />
          </div>
          <ComponentCode>
{`<Input placeholder="Disabled input" disabled />
<Input placeholder="Invalid input" error="This field is required" />
<Input type="password" placeholder="Password input" />`}
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
                  <td className="py-3 px-4 align-top font-mono text-sm">label</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">string</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                  <td className="py-3 px-4 align-top text-sm">Optional label text for the input</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 align-top font-mono text-sm">icon</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">React.ReactNode</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                  <td className="py-3 px-4 align-top text-sm">Optional icon to display inside the input</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 align-top font-mono text-sm">error</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">string</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                  <td className="py-3 px-4 align-top text-sm">Error message to display below the input</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 align-top font-mono text-sm">...rest</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">InputHTMLAttributes</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                  <td className="py-3 px-4 align-top text-sm">All standard HTML input attributes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
