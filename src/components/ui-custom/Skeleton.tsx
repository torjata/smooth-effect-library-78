
import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  shimmer?: boolean;
}

export function Skeleton({
  className,
  shimmer = true,
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn(
        "glassmorphism h-5 w-full rounded-md bg-muted/40 dark:bg-muted/40 border border-border/10 dark:border-border/10",
        shimmer && "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
        className
      )}
      {...props}
    />
  );
}

export function AvatarSkeleton({ className }: { className?: string }) {
  return <Skeleton className={cn("h-12 w-12 rounded-full", className)} />;
}

export function TextSkeleton({ className }: { className?: string }) {
  return <Skeleton className={cn("h-4 w-[250px]", className)} />;
}

export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("glassmorphism space-y-5 rounded-xl p-4 border border-border/10 dark:border-border/10", className)}>
      <div className="space-y-3">
        <Skeleton className="h-5 w-2/5" />
        <Skeleton className="h-4 w-4/5" />
      </div>
      <div className="space-y-3">
        <Skeleton className="h-5 w-3/5" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
}
