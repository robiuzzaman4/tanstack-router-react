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
import { NAVLINKS } from "@/constants/navlinks";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-b h-14">
        <Link to="/dashboard" className="w-full flex items-center gap-2">
          
          <span>
            <h3 className="text-base font-bold text-primary">MHFBD</h3>
            <p className="text-xs text-muted-foreground">Mallikpur Hilful Fuzul</p>
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
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
                        className="text-muted-foreground [.active]:text-primary [.active]:bg-muted [.active]:border"
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
