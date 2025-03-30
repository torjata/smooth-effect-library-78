
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
            <div>
              <h3 className="text-xl font-semibold">Basic Skeleton Props</h3>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><code>className</code> - Additional CSS classes</li>
                <li><code>shimmer</code> - Whether to show the shimmer animation effect (default: true)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold">Helper Components</h3>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><code>AvatarSkeleton</code> - Circular skeleton for avatars</li>
                <li><code>TextSkeleton</code> - Skeleton for text content</li>
                <li><code>CardSkeleton</code> - Complete card skeleton with multiple elements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
