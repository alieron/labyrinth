import { Link, LinkProps } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

import { cn } from '@/lib/utils';

export function GenericLink({ to, children, className, ...props }: LinkProps) {
  return (
    <Link to={to} className={cn("flex items-center", className)} {...props}>
      {children}
      {!(to as string).startsWith('/') && <ExternalLink className="h-3 w-3" />}
    </Link>
  )
}