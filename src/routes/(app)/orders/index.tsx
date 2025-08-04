import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { orders, type Order } from "@/data/orders";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export const Route = createFileRoute("/(app)/orders/")({
  component: RouteComponent,
});

const TABLE_HEADERS = [
  "Serial No",
  "Order Id",
  "Customer Id",
  "Order Date",
  "Items",
  "Total Amount",
  "Payment Method",
  "Order Status",
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
          {orders.data.slice(0, 20).map((order: Order, index: number) => (
            <TableRow key={order.orderId}>
              <TableCell className="font-medium px-2 whitespace-nowrap shrink-0">{`${
                index + 1 < 10 ? `0${index + 1}` : index + 1
              }`}</TableCell>
              <TableCell className="font-medium px-2 whitespace-nowrap shrink-0">
                {order.orderId}
              </TableCell>
              <TableCell className="px-2 whitespace-nowrap shrink-0">
                {order.customerId}
              </TableCell>
              <TableCell className="px-2 whitespace-nowrap shrink-0">
                {order.orderDate}
              </TableCell>
              <TableCell className="px-2 whitespace-nowrap shrink-0">
                {order.books.map((book, index) => (
                  <div key={index}>
                    <span className="block w-60 truncate">{book.title}</span>
                    <span className="block">
                      {book.format} - ${book.price}
                    </span>
                  </div>
                ))}
              </TableCell>
              <TableCell className="px-2 whitespace-nowrap shrink-0">
                ${order.totalAmount}
              </TableCell>
              <TableCell className="px-2 whitespace-nowrap shrink-0">
                {order.paymentMethod}
              </TableCell>
              <TableCell
                className={cn("px-2 whitespace-nowrap shrink-0", {
                  "text-emerald-600": order.orderStatus === "COMPLETED",
                  "text-orange-600": order?.orderStatus === "DELIVERED",
                })}
              >
                {order.orderStatus}
              </TableCell>
              <TableCell className="px-2 whitespace-nowrap shrink-0 group">
                <Link
                  to="/orders/$orderId"
                  params={{ orderId: order.orderId }}
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "sm" })
                  )}
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
