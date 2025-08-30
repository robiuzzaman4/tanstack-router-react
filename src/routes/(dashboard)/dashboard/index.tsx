import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(dashboard)/dashboard/")({
  component: DashboardPage,
});

function DashboardPage() {
  return <section className="">Overview Page</section>;
}
