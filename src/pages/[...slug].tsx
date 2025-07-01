import { Suspense } from "react";
import { Link, useParams } from "react-router-dom";
import routes from "../notes/routes";
import NotFound from "./404";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SlugPage() {
  const params = useParams<{ '*': string }>();
  const slug = params["*"] ?? "";
  const route = routes.find((r) => r.slug === slug);

  if (!route) return <NotFound />;

  const Page = route.component;
  return (
    <div className="flex flex-1 gap-8 my-0">
      {/* Left Sidebar */}
      <div className="sticky flex-none top-44 h-fit px-6 self-start">
        <Button asChild variant="outline" size="icon">
          <Link to="#">
            <ChevronLeft />
          </Link>
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold tracking-tight">
          Title Here
        </h1>
        <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span>Tags · Completion</span>
        </div>

        {/* Main Content */}
        <Suspense fallback={<div>Loading...</div>}>
          <Page />
        </Suspense>
      </div>

      {/* Right Sidebar */}
      <div className="sticky flex-none top-44 h-fit px-6">
        <Button asChild variant="outline" size="icon">
          <Link to="#">
            <ChevronRight />
          </Link>
        </Button>
      </div>
    </div >
  );
}
