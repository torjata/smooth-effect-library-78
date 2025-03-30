
import React, { useState } from 'react';
import { Button } from '@/components/ui-custom/Button';
import { Check, Copy } from 'lucide-react';

interface CopyToClipboardProps {
  value: string;
  className?: string;
}

export function CopyToClipboard({ value, className }: CopyToClipboardProps) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={copyToClipboard}
      className={className}
    >
      {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
    </Button>
  );
}
