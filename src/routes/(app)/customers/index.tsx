import { customers, type Customer } from "@/data/customers";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export const Route = createFileRoute("/(app)/customers/")({
  component: RouteComponent,
});

const TABLE_HEADERS = [
  "Serial No",
  "Name",
  "Email",
  "Phone",
  "Joined Date",
  "Address",
  "Total Orders",
  "Total Spent",
  "Action",
];

function RouteComponent() {
  return (
    <section className="max-w-7xl mx-auto px-4">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            {TABLE_HEADERS.map((header) => (
              <TableHead
                key={header}
                className="uppercase text-muted-foreground"
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.data.map((customer: Customer, index: number) => (
            <TableRow key={customer.customerId}>
              <TableCell className="font-medium px-2 whitespace-nowrap shrink-0">{`${
                index + 1 < 10 ? `0${index + 1}` : index + 1
              }`}</TableCell>
              <TableCell className="font-medium px-2 whitespace-nowrap shrink-0">
                {customer.firstName + customer.lastName}
              </TableCell>
              <TableCell className="px-2 whitespace-nowrap shrink-0">
                {customer.email}
              </TableCell>
              <TableCell className="px-2 whitespace-nowrap shrink-0">
                {customer.phone}
              </TableCell>
              <TableCell className="px-2 whitespace-nowrap shrink-0">
                {customer.dateJoined}
              </TableCell>
              <TableCell className="px-2 whitespace-nowrap shrink-0">
                {customer.address.city}, {customer.address.country}
              </TableCell>
              <TableCell className="px-2 whitespace-nowrap shrink-0">
                {customer.totalOrders}
              </TableCell>
              <TableCell className="px-2 whitespace-nowrap shrink-0">
                ${customer.totalSpent}
              </TableCell>
              <TableCell className="px-2 whitespace-nowrap shrink-0">
                <Link
                  to="/customers/$customerId"
                  params={{ customerId: customer.customerId }}
                  className={cn(buttonVariants({variant: "secondary", size: "sm"}))}
                >
                  View
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
