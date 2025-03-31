
import { DocsLayout } from "@/components/docs/DocsLayout";
import { ComponentExample } from "@/components/docs/ComponentExample";
import { ComponentCode } from "@/components/docs/ComponentExample";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui-custom/Tabs";

export default function TabsDoc() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Tabs</h1>
          <p className="text-muted-foreground mt-2">
            Content separated into different sections, with only one section visible at a time.
          </p>
        </div>

        <ComponentExample title="Basic Tabs">
          <Tabs defaultValue="account" className="w-full max-w-md">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="py-4">
              <p>Manage your account settings and preferences.</p>
            </TabsContent>
            <TabsContent value="password" className="py-4">
              <p>Change your password and security settings.</p>
            </TabsContent>
            <TabsContent value="settings" className="py-4">
              <p>Configure application preferences and options.</p>
            </TabsContent>
          </Tabs>
          <ComponentCode>
{`<Tabs defaultValue="account" className="w-full max-w-md">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="account" className="py-4">
    <p>Manage your account settings and preferences.</p>
  </TabsContent>
  <TabsContent value="password" className="py-4">
    <p>Change your password and security settings.</p>
  </TabsContent>
  <TabsContent value="settings" className="py-4">
    <p>Configure application preferences and options.</p>
  </TabsContent>
</Tabs>`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="Tabs with Icons">
          <div className="w-full max-w-md">
            <p className="text-center text-muted-foreground mb-4">This example uses shadcn/ui Tabs component</p>
          </div>
          <ComponentCode>
{`import { User, Lock, Settings } from "lucide-react";

<Tabs defaultValue="account" className="w-full max-w-md">
  <TabsList className="grid grid-cols-3">
    <TabsTrigger value="account">
      <User className="mr-2 h-4 w-4" />
      Account
    </TabsTrigger>
    <TabsTrigger value="password">
      <Lock className="mr-2 h-4 w-4" />
      Password
    </TabsTrigger>
    <TabsTrigger value="settings">
      <Settings className="mr-2 h-4 w-4" />
      Settings
    </TabsTrigger>
  </TabsList>
  {/* Tab content... */}
</Tabs>`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="Tabs with Card Content">
          <div className="w-full max-w-md">
            <p className="text-center text-muted-foreground mb-4">This example uses shadcn/ui Tabs component with Card</p>
          </div>
          <ComponentCode>
{`<Tabs defaultValue="overview" className="w-full">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
    <TabsTrigger value="reports">Reports</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    <Card>
      <CardHeader>
        <CardTitle>Overview</CardTitle>
        <CardDescription>
          View a summary of your account activity and performance.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Content for the overview tab goes here...</p>
      </CardContent>
    </Card>
  </TabsContent>
  <TabsContent value="analytics">
    <Card>
      <CardHeader>
        <CardTitle>Analytics</CardTitle>
        <CardDescription>
          View detailed analytics and metrics about your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Analytics content goes here...</p>
      </CardContent>
    </Card>
  </TabsContent>
  <TabsContent value="reports">
    <Card>
      <CardHeader>
        <CardTitle>Reports</CardTitle>
        <CardDescription>
          View and download reports about your account activity.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Reports content goes here...</p>
      </CardContent>
    </Card>
  </TabsContent>
</Tabs>`}
          </ComponentCode>
        </ComponentExample>

        <div className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">API Reference</h2>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Tabs Props</h3>
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
                    <td className="py-3 px-4 align-top font-mono text-sm">defaultValue</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">string</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                    <td className="py-3 px-4 align-top text-sm">The value of the tab that should be active when initially rendered</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 align-top font-mono text-sm">value</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">string</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                    <td className="py-3 px-4 align-top text-sm">The controlled value of the currently active tab</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 align-top font-mono text-sm">onValueChange</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">(value: string) => void</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                    <td className="py-3 px-4 align-top text-sm">Callback fired when the active tab changes</td>
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
            
            <h3 className="text-xl font-semibold mt-6">TabsList Props</h3>
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
                  <tr>
                    <td className="py-3 px-4 align-top font-mono text-sm">className</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">string</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                    <td className="py-3 px-4 align-top text-sm">Additional CSS classes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold mt-6">TabsTrigger Props</h3>
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
                    <td className="py-3 px-4 align-top font-mono text-sm">value</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">string</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                    <td className="py-3 px-4 align-top text-sm">Unique identifier matching its corresponding TabsContent</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 align-top font-mono text-sm">disabled</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">boolean</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">false</td>
                    <td className="py-3 px-4 align-top text-sm">Whether the tab is disabled</td>
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
            
            <h3 className="text-xl font-semibold mt-6">TabsContent Props</h3>
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
                    <td className="py-3 px-4 align-top font-mono text-sm">value</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">string</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                    <td className="py-3 px-4 align-top text-sm">Unique identifier matching its corresponding TabsTrigger</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 align-top font-mono text-sm">forceMount</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">boolean</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">false</td>
                    <td className="py-3 px-4 align-top text-sm">Force the content to be mounted regardless of active state</td>
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
      </div>
    </DocsLayout>
  );
}
