import { Home, Users } from "lucide-react";

// This is sample data.
export const NAVLINKS = {
  SIDEBAR_LINKS: [
    {
      title: "Dashboard",
      url: "#",
      items: [
        {
          title: "Overview",
          url: "/dashboard",
          icon: Home,
        },
      ],
    },
    {
      title: "Storefront",
      url: "#",
      items: [
        {
          title: "Users",
          url: "/dashboard/users",
          icon: Users,
        },
      ],
    },
  ],
};
