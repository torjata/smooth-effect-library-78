
import { Button } from "@/components/ui-custom/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui-custom/Card";
import { Badge } from "@/components/ui-custom/Badge";
import { DocsLayout } from "@/components/docs/DocsLayout";
import { ComponentExample } from "@/components/docs/ComponentExample";
import { ComponentCode } from "@/components/docs/ComponentCode";

export default function CardDoc() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold gradient-text">Card</h1>
          <p className="text-muted-foreground text-lg">
            Versatile card components with subtle hover effects and gradient backgrounds.
          </p>
        </div>
        
        <ComponentExample title="Basic Card">
          <div className="max-w-sm mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Simple Card</CardTitle>
                <CardDescription>A basic card example</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This is a simple card with a subtle gradient background. It has a minimal hover animation.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">Learn More</Button>
              </CardFooter>
            </Card>
          </div>
          
          <ComponentCode>
{`<Card>
  <CardHeader>
    <CardTitle>Simple Card</CardTitle>
    <CardDescription>A basic card example</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This is a simple card with a subtle gradient background. It has a minimal hover animation.</p>
  </CardContent>
  <CardFooter>
    <Button variant="outline" size="sm">Learn More</Button>
  </CardFooter>
</Card>`}
          </ComponentCode>
        </ComponentExample>
        
        <ComponentExample title="Card with Badges">
          <div className="max-w-sm mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Feature Card</CardTitle>
                <CardDescription>With badge and buttons</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Badge variant="success">New</Badge>
                  <Badge variant="primary">Feature</Badge>
                </div>
                <p>This card demonstrates using badges and different buttons together.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" size="sm">Cancel</Button>
                <Button size="sm">Continue</Button>
              </CardFooter>
            </Card>
          </div>
          
          <ComponentCode>
{`<Card>
  <CardHeader>
    <CardTitle>Feature Card</CardTitle>
    <CardDescription>With badge and buttons</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="flex items-center space-x-2">
      <Badge variant="success">New</Badge>
      <Badge variant="primary">Feature</Badge>
    </div>
    <p>This card demonstrates using badges and different buttons together.</p>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="ghost" size="sm">Cancel</Button>
    <Button size="sm">Continue</Button>
  </CardFooter>
</Card>`}
          </ComponentCode>
        </ComponentExample>
        
        <ComponentExample title="Non-glass Card">
          <div className="max-w-sm mx-auto">
            <Card glass={false} hover={false} className="border-dashed">
              <CardHeader>
                <CardTitle>Non-glass Card</CardTitle>
                <CardDescription>Without effects</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This card has no glassmorphic effect or hover animation, showing the versatility.</p>
              </CardContent>
            </Card>
          </div>
          
          <ComponentCode>
{`<Card glass={false} hover={false} className="border-dashed">
  <CardHeader>
    <CardTitle>Non-glass Card</CardTitle>
    <CardDescription>Without effects</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This card has no glassmorphic effect or hover animation, showing the versatility.</p>
  </CardContent>
</Card>`}
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
                  <td className="py-2 px-4">hover</td>
                  <td className="py-2 px-4 text-sm">boolean</td>
                  <td className="py-2 px-4">true</td>
                  <td className="py-2 px-4">Enables hover animation</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">glass</td>
                  <td className="py-2 px-4 text-sm">boolean</td>
                  <td className="py-2 px-4">true</td>
                  <td className="py-2 px-4">Enables glassmorphic gradient effect</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
