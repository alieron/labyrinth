import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg">Page not found</p>
      <Link to="/" className="text-blue-500 underline mt-4 inline-block">Go home</Link>
    </div>
  );
}
