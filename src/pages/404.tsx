import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

export default function NotFound() {
  return (
    <div className="flex flex-col p-8 text-center items-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg">Page not found</p>
      <div className="flex h-5 w-48 items-center space-x-4 mt-8">
        <Link to="/" className="grow-1 text-primary underline">Home</Link>
        <Separator orientation="vertical" />
        <Link to="/notes" className="grow-1 text-primary underline">Notes</Link>
      </div>
    </div>
  );
}
