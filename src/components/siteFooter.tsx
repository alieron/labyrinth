import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import SvgIcons from './svgIcons';

export default function SiteFooter() {
  return (
    <footer className="border-t border-border relative bottom-0 flex flex-none items-center justify-between p-4 mt-10 w-full max-w-5xl mx-auto">
      <div className="flex h-4 text-center items-center space-x-2 text-sm">
        <Link to="/" className="grow-1 text-foreground underline hover:text-foreground/80">Home</Link>
        <Separator orientation="vertical" />
        <Link to="/notes" className="grow-1 text-foreground underline hover:text-foreground/80">Notes</Link>
      </div>
      <div className="flex">
        <Link to="https://github.com/alieron/labyrinth" target="_blank" rel="noreferrer">
          <SvgIcons.gitHub className="size-5"/>
        </Link>
      </div>
    </footer>
  );
}
