import { Badge } from "@/components/ui/badge";
import { resolveBase } from "@/utils/resolve";

interface TagBadgeProps {
  tag: string;
  key?: number;
}

export default function TagBadge({ tag, key }: TagBadgeProps) {
  const splitTag = tag.split("/");
  let partialTag = resolveBase("/tags");

  return (
    <Badge key={key} className="bg-primary/10 text-primary dark:bg-primary/20">
      <ul className="flex flex-wrap items-center gap-1">
        {
          splitTag.map((part, index) => {
            partialTag += `/${part}`;
            const notLast = index !== splitTag.length - 1;
            return (
              <>
                <li>
                  <a
                    href={partialTag}
                    className="hover:text-foreground hover:underline"
                  >
                    {part}
                  </a>
                </li>
                {notLast && <li className="cursor-default">/</li>}
              </>
            );
          })
        }
      </ul>
    </Badge>
  );
}
