
import React, { useState } from 'react';
import { CopyToClipboard } from "@/components/docs/CopyToClipboard";
import { Button } from "@/components/ui-custom/Button";
import { Code } from "lucide-react";

interface ComponentExampleProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function ComponentExample({ title, children, className }: ComponentExampleProps) {
  const [showCode, setShowCode] = useState(false);
  
  // Find the actual component and the code block
  const childrenArray = React.Children.toArray(children);
  const codeBlock = childrenArray.find(
    (child) => React.isValidElement(child) && child.type === ComponentCode
  );
  const example = childrenArray.filter(
    (child) => !(React.isValidElement(child) && child.type === ComponentCode)
  );

  return (
    <div className={`border rounded-lg overflow-hidden bg-card/30 ${className}`}>
      <div className="flex items-center justify-between border-b p-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setShowCode(!showCode)}
          className="flex items-center gap-2"
        >
          <Code className="h-4 w-4" />
          {showCode ? "Hide Code" : "Show Code"}
        </Button>
      </div>
      
      <div className="p-6">
        {example}
      </div>
      
      {showCode && codeBlock && (
        <div className="border-t bg-muted/50 p-4 relative">
          <CopyToClipboard 
            value={React.isValidElement(codeBlock) ? 
              codeBlock.props.children as string : ""} 
            className="absolute top-4 right-4" 
          />
          <pre className="text-sm overflow-x-auto p-2 rounded-md bg-muted/30">
            {codeBlock}
          </pre>
        </div>
      )}
    </div>
  );
}

interface ComponentCodeProps {
  children: string;
}

export function ComponentCode({ children }: ComponentCodeProps) {
  return <>{children}</>;
}
