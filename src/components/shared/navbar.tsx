import { Link } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 h-14 border-b bg-card w-full px-4 z-50">
      <div className="max-w-7xl mx-auto xl:px-4 h-full flex items-center gap-6">
        <Link to="/">
          <BookOpen />
        </Link>
        <Link to="/" className="[&.active]:text-primary font-medium text-sm">
          Home
        </Link>
        <Link
          to="/customers"
          className="[&.active]:text-primary font-medium text-sm"
        >
          Customers
        </Link>
        <Link
          to="/orders"
          className="[&.active]:text-primary font-medium text-sm"
        >
          Orders
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
