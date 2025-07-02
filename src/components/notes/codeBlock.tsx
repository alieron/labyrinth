import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "../ui/button";

import { cn } from "@/lib/utils";

export type CodeBlockProps = React.ComponentProps<"div"> & {
  html: string,
  lang: string,
  code: string
}

export function CodeBlock({ html, lang, code, className, ...props }: CodeBlockProps) {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      setCopied(true);
      navigator.clipboard.writeText(code);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="group relative my-4 rounded-md overflow-hidden bg-[#1d1d1d] text-sm font-mono">
      {/* Language Label */}
      <span className="absolute top-2 left-2 text-[#e5e5e5]">{lang}</span>

      {/* Copy Button */}
      <Button
        variant="outline"
        size="icon"
        className="opacity-0 group-hover:opacity-100 absolute top-2 right-2"
        onClick={handleCopy}
        aria-label={copied ? "Copied" : "Copy to clipboard"}
        disabled={copied}
      >
        <div
          className={cn(
            "transition-all",
            copied ? "scale-100 opacity-100" : "scale-0 opacity-0",
          )}
        >
          <Check className="stroke-emerald-500" aria-hidden="true" />
        </div>
        <div
          className={cn(
            "absolute transition-all",
            copied ? "scale-0 opacity-0" : "scale-100 opacity-100",
          )}
        >
          <Copy aria-hidden="true" />
        </div>
      </Button>

      {/* Syntax Highlighted Code */}
      <div
        className="shiki-code overflow-x-auto bg-transparent mt-6 p-4"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
