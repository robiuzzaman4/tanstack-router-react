import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="max-w-7xl mx-auto px-4 h-[calc(100vh-108px)] grid place-items-center">
      <div className="flex items-center gap-6">
        <Button  asChild>
          <Link to="/dashboard">Dashboard</Link>
        </Button>
      </div>
    </section>
  );
}
