
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
          
          <div>
            <h3 className="text-xl font-semibold">Props</h3>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><code>label</code> - Optional label text for the input</li>
              <li><code>icon</code> - Optional icon component to display inside the input</li>
              <li><code>error</code> - Optional error message to display</li>
              <li><code>...InputHTMLAttributes</code> - All standard HTML input attributes</li>
            </ul>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
