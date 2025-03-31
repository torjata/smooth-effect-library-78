
import { DocsLayout } from "@/components/docs/DocsLayout";
import { ComponentExample } from "@/components/docs/ComponentExample";
import { ComponentCode } from "@/components/docs/ComponentExample";
import { Skeleton } from "@/components/ui-custom/Skeleton";
import { Card, CardContent } from "@/components/ui-custom/Card";
import { Avatar } from "@/components/ui-custom/Avatar";

export default function SkeletonDoc() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Skeleton</h1>
          <p className="text-muted-foreground mt-2">
            Loading placeholders that animate to indicate content is loading.
          </p>
        </div>

        <ComponentExample title="Basic Skeleton">
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-[60%]" />
          </div>
          <ComponentCode>
{`<Skeleton className="h-4 w-full" />
<Skeleton className="h-4 w-[80%]" />
<Skeleton className="h-4 w-[60%]" />`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="Card Skeleton">
          <div className="w-full max-w-sm">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
                <div className="space-y-2 mt-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-[80%]" />
                </div>
              </CardContent>
            </Card>
          </div>
          <ComponentCode>
{`<Card>
  <CardContent className="p-4">
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
    <div className="space-y-2 mt-4">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-[80%]" />
    </div>
  </CardContent>
</Card>`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="Profile Skeleton">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <ComponentCode>
{`<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`}
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
                  <td className="py-3 px-4 align-top font-mono text-sm">className</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">string</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                  <td className="py-3 px-4 align-top text-sm">Additional CSS classes</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 align-top font-mono text-sm">...props</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">HTMLAttributes</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                  <td className="py-3 px-4 align-top text-sm">Any additional HTML attributes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
