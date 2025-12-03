import { useEffect, useRef, useState } from "react";
import TagBadge from "@/components/TagBadge";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MoreHorizontal, Tag } from "lucide-react";

interface TagListProps {
  tags: string[];
  showPreview?: boolean; // If false, all tags hidden in popover
  maxPreviewCount?: number; // Max number of tags to show (will show fewer if space limited)
}

export default function TagList({ tags, showPreview = true, maxPreviewCount = 10 }: TagListProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [measured, setMeasured] = useState(false);

  useEffect(() => {
    if (!showPreview || !containerRef.current) return;

    const calculateVisibleTags = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerWidth = container.offsetWidth;
      const buttonWidth = 80; // Approximate width of the "more" button
      let availableWidth = containerWidth - buttonWidth;
      let count = 0;

      // Estimate tag widths (approximate based on text length)
      for (let i = 0; i < Math.min(tags.length, maxPreviewCount); i++) {
        const estimatedWidth = tags[i].length * 8 + 40; // ~8px per char + padding
        if (availableWidth >= estimatedWidth) {
          availableWidth -= estimatedWidth + 8; // 8px gap
          count++;
        } else {
          break;
        }
      }

      setVisibleCount(Math.max(0, count)); // TODO: if 0 tags display, change the icon
      setMeasured(true);
    };

    calculateVisibleTags();

    const resizeObserver = new ResizeObserver(calculateVisibleTags);
    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, [tags, showPreview, maxPreviewCount]);

  const visibleTags = showPreview && measured ? tags.slice(0, visibleCount) : [];
  const hiddenTags = showPreview && measured ? tags.slice(visibleCount) : tags;
  const hasHiddenTags = hiddenTags.length > 0 || !measured;

  return (
    <div ref={containerRef} className="h-8 flex items-center gap-2 overflow-hidden">
      {visibleTags.map((tag, index) => (
        <TagBadge key={index} tag={tag} />
      ))}
      {hasHiddenTags && (
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
            >
              {showPreview ? (
                <>
                  <MoreHorizontal className="w-[0.75em] mr-1" />
                  <span className="text-xs">+{hiddenTags.length} more</span>
                </>
              ) : (
                <>
                  <Tag className="w-[0.75em] mr-1" />
                  <span className="text-xs">{tags.length} tags</span>
                </>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-2 w-auto max-w-xs" >
            <div className="flex flex-wrap gap-2 w-fit">
              {hiddenTags.map((tag, index) => (
                <TagBadge key={index} tag={tag} />
              ))}
            </div>
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
}

