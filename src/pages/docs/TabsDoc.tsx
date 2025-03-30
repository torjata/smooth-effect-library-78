
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
            <div>
              <h3 className="text-xl font-semibold">Tabs Props</h3>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><code>defaultValue</code> - The value of the tab that should be active when initially rendered</li>
                <li><code>value</code> - The controlled value of the currently active tab</li>
                <li><code>onValueChange</code> - Callback fired when the active tab changes</li>
                <li><code>className</code> - Additional CSS classes</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold">TabsList Props</h3>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><code>className</code> - Additional CSS classes</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold">TabsTrigger Props</h3>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><code>value</code> - Unique identifier matching its corresponding TabsContent</li>
                <li><code>disabled</code> - Whether the tab is disabled</li>
                <li><code>className</code> - Additional CSS classes</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold">TabsContent Props</h3>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><code>value</code> - Unique identifier matching its corresponding TabsTrigger</li>
                <li><code>forceMount</code> - Force the content to be mounted regardless of active state</li>
                <li><code>className</code> - Additional CSS classes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
