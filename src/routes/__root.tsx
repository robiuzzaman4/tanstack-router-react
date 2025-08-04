import Navbar from "@/components/shared/navbar";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <div className="mt-14 py-6">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
