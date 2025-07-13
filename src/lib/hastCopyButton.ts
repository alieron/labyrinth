import { h } from 'hastscript';

export function createCopyButton(code: string) {
  // using Button from shadcn/ui, this function replicates this react component
  // <Button
  //   variant="outline"
  //   size="icon"
  //   className="opacity-0 group-hover:opacity-100 absolute top-2 right-2"
  //   onClick={handleCopy}
  //   aria-label={copied ? "Copied" : "Copy to clipboard"}
  //   disabled={copied}
  // >
  //   <div
  //     className={cn(
  //       "transition-all",
  //       copied ? "scale-100 opacity-100" : "scale-0 opacity-0",
  //     )}
  //   >
  //     <Check className="stroke-emerald-500" aria-hidden="true" />
  //   </div>
  //   <div
  //     className={cn(
  //       "absolute transition-all",
  //       copied ? "scale-0 opacity-0" : "scale-100 opacity-100",
  //     )}
  //   >
  //     <Copy aria-hidden="true" />
  //   </div>
  // </Button>
  return h('button', {
    class: `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9 opacity-0 group-hover:opacity-100 absolute top-2 right-2`,
    'aria-label': 'Copy to clipboard',
    onclick: `(() => {
      const btn = this;
      const check = btn.querySelector('.lucide-check');
      const copy = btn.querySelector('.lucide-copy');
      navigator.clipboard.writeText(${JSON.stringify(code)}).then(() => {
        copy.classList.replace('scale-100', 'scale-0');
        copy.classList.replace('opacity-100', 'opacity-0');
        check.classList.replace('scale-0', 'scale-100');
        check.classList.replace('opacity-0', 'opacity-100');
        btn.setAttribute('aria-label', 'Copied');
        btn.disabled = true;
        setTimeout(() => {
          copy.classList.replace('scale-0', 'scale-100');
          copy.classList.replace('opacity-0', 'opacity-100');
          check.classList.replace('scale-100', 'scale-0');
          check.classList.replace('opacity-100', 'opacity-0');
          btn.setAttribute('aria-label', 'Copy to clipboard');
          btn.disabled = false;
        }, 1500);
      });
    })()`
  }, [
    // Check icon https://lucide.dev/icons/check
    h('svg', {
      class: 'lucide lucide-check-icon lucide-check absolute scale-0 opacity-0 transition-all stroke-emerald-500',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '24',
      height: '24',
      fill: 'none',
      // stroke: "currentColor",
      'stroke-width': "2",
      'stroke-linecap': "round",
      'stroke-linejoin': "round",
      viewBox: '0 0 24 24',
    }, [
      h('path', {
        d: "M20 6 9 17l-5-5",
      }),
    ]),
    // Copy icon https://lucide.dev/icons/copy
    h('svg', {
      class: 'lucide lucide-copy-icon lucide-copy absolute scale-100 opacity-100 transition-all',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '24',
      height: '24',
      fill: 'none',
      stroke: "currentColor",
      'stroke-width': "2",
      'stroke-linecap': "round",
      'stroke-linejoin': "round",
      viewBox: '0 0 24 24',
    }, [
      h('rect', {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
      }),
      h('path', {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      }),
    ])
  ]);
}