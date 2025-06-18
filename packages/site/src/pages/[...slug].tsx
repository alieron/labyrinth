import { Suspense } from "react";
import { useParams } from "react-router-dom";
import routes from "@labyrinth/notes";
import NotFound from "./404";

export default function SlugPage() {
  const params = useParams<{ '*': string }>();
  const slug = params["*"] ?? "";
  const route = routes.find((r) => r.slug === slug);

  if (!route) return <NotFound />;

  const Page = route.component;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Page />
    </Suspense>
  );
}
