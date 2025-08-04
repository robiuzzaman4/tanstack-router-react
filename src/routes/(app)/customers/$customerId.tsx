import { buttonVariants } from "@/components/ui/button";
import { getCustomerById } from "@/data/customers";
import { cn } from "@/lib/utils";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/(app)/customers/$customerId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { customerId } = Route.useParams();
  const customer = getCustomerById({ customerId });
  return (
    <section className="max-w-7xl mx-auto px-4 space-y-6">
      <div className="flex items-center gap-4">
        <Link
          to="/customers"
          className={cn(
            buttonVariants({
              variant: "outline",
              size: "icon",
            })
          )}
        >
          <ChevronLeft />
        </Link>

        <div className="h-auto py-2 px-4 bg-muted/50 uppercase text-sm font-medium text-muted-foreground flex items-center gap-2 grow">
          <Link to="/orders" className="text-primary">
            CUSTOMERS
          </Link>
          <ChevronRight className="size-4" />
          <p className="text-fuchsia-500">{customerId}</p>
        </div>
      </div>
      <div className="space-y-2">
        <p className="uppercase text-lg">Customer Details</p>

        <div className="space-y-2 bg-muted/50 p-4 uppercase text-muted-foreground text-sm">
          <p>
            Id: <span className="text-foreground">{customer?.customerId}</span>
          </p>
          <p>
            Name:{" "}
            <span className="text-foreground">
              {customer?.firstName} {customer?.lastName}
            </span>
          </p>
          <p>
            Email: <span className="text-foreground">{customer?.email}</span>
          </p>
          <p>
            Phone: <span className="text-foreground">{customer?.phone}</span>
          </p>
          <p>
            Joined Date:{" "}
            <span className="text-foreground">{customer?.dateJoined}</span>
          </p>
          <p>
            Total Orders:{" "}
            <span className="text-foreground">{customer?.totalOrders}</span>
          </p>
          <p>
            Total Spent:{" "}
            <span className="text-foreground">${customer?.totalSpent}</span>
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <p className="uppercase text-lg">Shipping Address</p>

        <div className="space-y-2 bg-muted/50 p-4 uppercase text-muted-foreground text-sm">
          <p>
            Street:{" "}
            <span className="text-foreground">{customer?.address?.street}</span>
          </p>
          <p>
            State:{" "}
            <span className="text-foreground">{customer?.address?.state}</span>
          </p>
          <p>
            City:{" "}
            <span className="text-foreground">{customer?.address?.city}</span>
          </p>
          <p>
            Country:{" "}
            <span className="text-foreground">
              {customer?.address?.country}
            </span>
          </p>
          <p>
            Zip Code:{" "}
            <span className="text-foreground">
              {customer?.address?.zipCode}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
