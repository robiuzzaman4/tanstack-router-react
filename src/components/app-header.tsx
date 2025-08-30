import { SidebarTrigger } from "@/components/ui/sidebar";
import { DynamicBreadcrumb } from "@/components/shared/dynamic-breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function AppHeader() {
  return (
    <header className="sticky top-0 w-full flex h-14 shrink-0 items-center justify-between gap-4 border-b px-4 bg-background z-50">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <DynamicBreadcrumb />
      </div>
      <Button variant="destructive">Logout</Button>
    </header>
  );
}
