import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { NAVLINKS } from "@/constants/navlinks";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-b h-14 bg-background">
        <Link to="/dashboard" className="w-full flex items-center gap-2">
          <Button size="icon">
            <ShoppingBag />
          </Button>
          <span>
            <h3 className="text-base font-medium">RUHIA</h3>
            <p className="text-xs text-muted-foreground">Ecommerce Platform</p>
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent className="bg-background">
        {NAVLINKS.SIDEBAR_LINKS.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        to={item.url}
                        className="[.active]:text-primary [.active]:bg-primary/5"
                        activeOptions={{ exact: true }}
                      >
                        {<item.icon />}
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
