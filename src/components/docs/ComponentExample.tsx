
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Code } from "lucide-react";

interface ComponentExampleProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function ComponentExample({ title, children, className }: ComponentExampleProps) {
  const [showCode, setShowCode] = useState(false);
  
  // Find the example and code components
  const childrenArray = React.Children.toArray(children);
  const exampleContent = childrenArray.filter(child => 
    React.isValidElement(child) && child.type !== ComponentCode
  );
  const codeContent = childrenArray.find(child => 
    React.isValidElement(child) && child.type === ComponentCode
  );
  
  return (
    <div className={cn("rounded-lg border border-border/60", className)}>
      <div className="border-b border-border/60 p-4">
        <div className="flex items-center justify-between">
          <h2 className="font-medium">{title}</h2>
          <button 
            onClick={() => setShowCode(!showCode)}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Code size={16} />
            <span>{showCode ? "Hide code" : "Show code"}</span>
          </button>
        </div>
      </div>
      
      <div className="p-6 flex flex-col gap-6">
        {exampleContent}
      </div>
      
      {showCode && codeContent && (
        <div className="border-t border-border/60 p-4 bg-muted/50 rounded-b-lg overflow-auto max-h-80">
          {codeContent}
        </div>
      )}
    </div>
  );
}

export function ComponentCode({ children }: { children: React.ReactNode }) {
  return (
    <pre className="text-sm p-4 bg-muted/30 rounded-md overflow-auto">
      <code>{children}</code>
    </pre>
  );
}
