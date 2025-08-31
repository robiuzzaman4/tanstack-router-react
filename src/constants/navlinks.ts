import { Box, Home, LayoutGrid, List, Users } from "lucide-react";

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
      title: "Management",
      url: "#",
      items: [
        {
          title: "Users",
          url: "/dashboard/users",
          icon: Users,
        },
        {
          title: "Categories",
          url: "/dashboard/categories",
          icon: LayoutGrid,
        },
        {
          title: "Products",
          url: "/dashboard/products",
          icon: Box,
        },
        {
          title: "Orders",
          url: "/dashboard/orders",
          icon: List,
        },
      ],
    },
  ],
};
