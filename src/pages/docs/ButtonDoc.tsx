
import { Button } from "@/components/ui-custom/Button";
import { DocsLayout } from "@/components/docs/DocsLayout";
import { Check, Heart, Mail, Search } from "lucide-react";
import { ComponentExample } from "@/components/docs/ComponentExample";
import { ComponentCode } from "@/components/docs/ComponentCode";

export default function ButtonDoc() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold gradient-text">Button</h1>
          <p className="text-muted-foreground text-lg">
            Responsive buttons with hover and click effects, supporting various styles and states.
          </p>
        </div>
        
        <ComponentExample title="Variants">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <Button variant="default">Default</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
          
          <ComponentCode>
{`<Button variant="default">Default</Button>
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>`}
          </ComponentCode>
        </ComponentExample>
        
        <ComponentExample title="Sizes">
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="icon"><Mail className="h-4 w-4" /></Button>
          </div>
          
          <ComponentCode>
{`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Mail className="h-4 w-4" /></Button>`}
          </ComponentCode>
        </ComponentExample>
        
        <ComponentExample title="States">
          <div className="flex flex-wrap items-center gap-4">
            <Button>Normal</Button>
            <Button disabled>Disabled</Button>
            <Button isLoading>Loading</Button>
          </div>
          
          <ComponentCode>
{`<Button>Normal</Button>
<Button disabled>Disabled</Button>
<Button isLoading>Loading</Button>`}
          </ComponentCode>
        </ComponentExample>
        
        <ComponentExample title="With Icon">
          <div className="flex flex-wrap items-center gap-4">
            <Button>
              <Heart className="mr-2 h-4 w-4" /> Like
            </Button>
            <Button variant="secondary">
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
            <Button variant="outline">
              Submit <Check className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <ComponentCode>
{`<Button>
  <Heart className="mr-2 h-4 w-4" /> Like
</Button>
<Button variant="secondary">
  <Search className="mr-2 h-4 w-4" /> Search
</Button>
<Button variant="outline">
  Submit <Check className="ml-2 h-4 w-4" />
</Button>`}
          </ComponentCode>
        </ComponentExample>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Properties</h2>
          <div className="overflow-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2 px-4 text-left font-medium">Prop</th>
                  <th className="py-2 px-4 text-left font-medium">Type</th>
                  <th className="py-2 px-4 text-left font-medium">Default</th>
                  <th className="py-2 px-4 text-left font-medium">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">variant</td>
                  <td className="py-2 px-4 text-sm">"default" | "primary" | "secondary" | "outline" | "ghost" | "destructive"</td>
                  <td className="py-2 px-4">"default"</td>
                  <td className="py-2 px-4">Determines the button's appearance</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">size</td>
                  <td className="py-2 px-4 text-sm">"sm" | "md" | "lg" | "icon"</td>
                  <td className="py-2 px-4">"md"</td>
                  <td className="py-2 px-4">Controls the button's size</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">isLoading</td>
                  <td className="py-2 px-4 text-sm">boolean</td>
                  <td className="py-2 px-4">false</td>
                  <td className="py-2 px-4">Shows loading spinner when true</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">ripple</td>
                  <td className="py-2 px-4 text-sm">boolean</td>
                  <td className="py-2 px-4">true</td>
                  <td className="py-2 px-4">Enables ripple effect on click</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
