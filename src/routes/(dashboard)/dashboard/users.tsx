import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(dashboard)/dashboard/users")({
  component: UsersPage,
});

function UsersPage() {
  return <section className="">Users Page</section>;
}
