import * as React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useRouterState } from "@tanstack/react-router";

// A function to capitalize the first letter of a string
const capitalize = (s: string) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export function DynamicBreadcrumb() {
  const routerState = useRouterState();
  const matches = routerState.matches;

  // Filter out the root route
  const breadcrumbMatches = matches.filter(
    (match) => match.routeId !== "__root__"
  );

  const isDashboardRoute = routerState.location.pathname === "/dashboard";
  const dashboardLink = "/dashboard";
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* First Breadcrumb: Dashboard */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to={dashboardLink}>Dashboard</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {/* Dynamic Breadcrumbs */}
        {breadcrumbMatches.map((match, index) => {
          const isLast = index === breadcrumbMatches.length - 1;
          const pathSegment = match.pathname.split("/").filter(Boolean).pop();
          const routeTitle = capitalize(pathSegment as string);
          // If on the dashboard route and it's the last item, return "Overview"
          if (isDashboardRoute && isLast) {
            return (
              <React.Fragment key="overview">
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Overview</BreadcrumbPage>
                </BreadcrumbItem>
              </React.Fragment>
            );
          }

          // Skip the dashboard route to avoid duplication
          if (match.pathname === dashboardLink) {
            return null;
          }

          return (
            <React.Fragment key={match.routeId}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{routeTitle}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={match.pathname}>{routeTitle}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
