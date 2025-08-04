import { Button, buttonVariants } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getOrderById, type Book } from "@/data/orders";
import { cn } from "@/lib/utils";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Printer } from "lucide-react";

export const Route = createFileRoute("/(app)/orders/$orderId")({
  component: RouteComponent,
});

const TABLE_HEADERS = [
  "Serial No",
  "Book",
  "Author",
  "Genre",
  "Fromat",
  "Price",
];

function RouteComponent() {
  const { orderId } = Route.useParams();
  const order = getOrderById({ orderId });

  return (
    <section className="max-w-7xl mx-auto px-4 space-y-6">
      <div className="flex items-center gap-4">
        <Link
          to="/orders"
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
            ORDERS
          </Link>
          <ChevronRight className="size-4" />
          <p className="text-fuchsia-500">{orderId}</p>
        </div>
      </div>
      <div className="space-y-2">
        <p className="uppercase text-lg">Order Summary</p>

        <div className="space-y-2 bg-muted/50 p-4 uppercase text-muted-foreground text-sm">
          <p>
            Id: <span className="text-foreground">{order?.orderId}</span>
          </p>
          <p>
            Customer Id:{" "}
            <span className="text-foreground">{order?.customerId}</span>
          </p>
          <p>
            Order Date:{" "}
            <span className="text-foreground">{order?.orderDate}</span>
          </p>
          <p>
            Payment Method:{" "}
            <span className="text-foreground">{order?.paymentMethod}</span>
          </p>
          <p>
            Total Amount:{" "}
            <span className="text-foreground">${order?.totalAmount}</span>
          </p>
          <p>
            Order Status:{" "}
            <span
              className={cn("text-foreground", {
                "text-emerald-600": order?.orderStatus === "COMPLETED",
                "text-orange-600": order?.orderStatus === "DELIVERED",
              })}
            >
              {order?.orderStatus}
            </span>
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <p className="uppercase text-lg">Order Items</p>
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
            {order?.books?.map((book: Book, index: number) => (
              <TableRow key={book.bookId}>
                <TableCell className="font-medium px-2 whitespace-nowrap shrink-0">{`${
                  index + 1 < 10 ? `0${index + 1}` : index + 1
                }`}</TableCell>
                <TableCell className="font-medium px-2 whitespace-nowrap shrink-0">
                  {book.title}
                </TableCell>
                <TableCell className="font-medium px-2 whitespace-nowrap shrink-0">
                  {book.author}
                </TableCell>
                <TableCell className="font-medium px-2 whitespace-nowrap shrink-0">
                  {book.genre}
                </TableCell>
                <TableCell className="font-medium px-2 whitespace-nowrap shrink-0">
                  {book.format}
                </TableCell>
                <TableCell className="font-medium px-2 whitespace-nowrap shrink-0">
                  ${book.price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="w-fit ms-auto">
        <Button>
          <Printer /> Print Invoice
        </Button>
      </div>
    </section>
  );
}
