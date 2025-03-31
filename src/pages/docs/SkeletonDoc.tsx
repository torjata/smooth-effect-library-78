
import { DocsLayout } from "@/components/docs/DocsLayout";
import { ComponentExample } from "@/components/docs/ComponentExample";
import { ComponentCode } from "@/components/docs/ComponentExample";
import { Skeleton, AvatarSkeleton, TextSkeleton, CardSkeleton } from "@/components/ui-custom/Skeleton";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui-custom/Card";

export default function SkeletonDoc() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Skeleton</h1>
          <p className="text-muted-foreground mt-2">
            Placeholder loading state for UI elements while content is loading.
          </p>
        </div>

        <ComponentExample title="Basic Skeleton">
          <div className="space-y-4 w-64">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
          <ComponentCode>
{`<Skeleton className="h-4 w-full" />
<Skeleton className="h-4 w-3/4" />
<Skeleton className="h-4 w-1/2" />`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="Skeleton Variants">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="space-y-4">
              <AvatarSkeleton />
              <TextSkeleton />
              <TextSkeleton className="w-3/4" />
            </div>
            
            <CardSkeleton className="w-64" />
          </div>
          <ComponentCode>
{`// Avatar skeleton
<AvatarSkeleton />

// Text skeletons
<TextSkeleton />
<TextSkeleton className="w-3/4" />

// Card skeleton
<CardSkeleton className="w-64" />`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="Without Shimmer Effect">
          <div className="space-y-4 w-64">
            <Skeleton className="h-4 w-full" shimmer={false} />
            <Skeleton className="h-4 w-3/4" shimmer={false} />
            <Skeleton className="h-4 w-1/2" shimmer={false} />
          </div>
          <ComponentCode>
{`<Skeleton className="h-4 w-full" shimmer={false} />
<Skeleton className="h-4 w-3/4" shimmer={false} />
<Skeleton className="h-4 w-1/2" shimmer={false} />`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="Loading Card Example">
          <div className="w-full max-w-md">
            <Card>
              <CardHeader>
                <Skeleton className="h-6 w-1/2" />
                <Skeleton className="h-4 w-3/4 mt-2" />
              </CardHeader>
              <CardContent className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </CardContent>
              <CardFooter>
                <Skeleton className="h-10 w-1/3" />
              </CardFooter>
            </Card>
          </div>
          <ComponentCode>
{`<Card>
  <CardHeader>
    <Skeleton className="h-6 w-1/2" />
    <Skeleton className="h-4 w-3/4 mt-2" />
  </CardHeader>
  <CardContent className="space-y-4">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-2/3" />
  </CardContent>
  <CardFooter>
    <Skeleton className="h-10 w-1/3" />
  </CardFooter>
</Card>`}
          </ComponentCode>
        </ComponentExample>

        <div className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">API Reference</h2>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Basic Skeleton Props</h3>
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
                    <td className="py-3 px-4 align-top font-mono text-sm">shimmer</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">boolean</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">true</td>
                    <td className="py-3 px-4 align-top text-sm">Whether to show the shimmer animation effect</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold mt-6">Helper Components</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left">Component</th>
                    <th className="py-3 px-4 text-left">Props</th>
                    <th className="py-3 px-4 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 align-top font-mono text-sm">AvatarSkeleton</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">className, size, shimmer</td>
                    <td className="py-3 px-4 align-top text-sm">Circular skeleton for avatars</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 align-top font-mono text-sm">TextSkeleton</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">className, lines, shimmer</td>
                    <td className="py-3 px-4 align-top text-sm">Skeleton for text content</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 align-top font-mono text-sm">CardSkeleton</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">className, shimmer</td>
                    <td className="py-3 px-4 align-top text-sm">Complete card skeleton with multiple elements</td>
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
