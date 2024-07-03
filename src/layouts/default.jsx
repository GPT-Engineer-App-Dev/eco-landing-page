import { Outlet } from "react-router-dom";
import { Package2, Home, ShoppingCart, Info, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
        <NavLink to="/" className="flex items-center gap-2 text-lg font-semibold">
          <Package2 className="h-6 w-6" />
          <span>eCommerce</span>
        </NavLink>
        <nav className="hidden md:flex md:items-center md:gap-5 lg:gap-6 text-lg font-medium md:text-sm">
          <NavItem to="/" icon={<Home className="h-4 w-4" />}>Home</NavItem>
          <NavItem to="/shop" icon={<ShoppingCart className="h-4 w-4" />}>Shop</NavItem>
          <NavItem to="/about" icon={<Info className="h-4 w-4" />}>About</NavItem>
          <NavItem to="/contact" icon={<Phone className="h-4 w-4" />}>Contact</NavItem>
        </nav>
        <div className="flex items-center gap-4">
          <NavLink to="/account" className="text-muted-foreground hover:text-foreground">
            <Button variant="secondary" size="icon" className="rounded-full">
              <Package2 className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </NavLink>
          <NavLink to="/cart" className="text-muted-foreground hover:text-foreground">
            <Button variant="secondary" size="icon" className="rounded-full">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </NavLink>
        </div>
        <MobileNav />
      </header>
      <main className="flex-grow p-4 overflow-auto">
        <Outlet />
      </main>
      <footer className="border-t bg-muted/40 p-4 text-center space-y-4">
        <div className="flex justify-center space-x-4">
          <NavLink to="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</NavLink>
          <NavLink to="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</NavLink>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" className="text-muted-foreground hover:text-foreground">Facebook</a>
          <a href="https://twitter.com" className="text-muted-foreground hover:text-foreground">Twitter</a>
          <a href="https://instagram.com" className="text-muted-foreground hover:text-foreground">Instagram</a>
        </div>
        <p className="text-muted-foreground">Contact us: support@ecommerce.com</p>
      </footer>
    </div>
  );
};

const MobileNav = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="shrink-0 md:hidden">
        <Package2 className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left">
      <nav className="grid gap-6 text-lg font-medium">
        <NavItem to="/" icon={<Home className="h-4 w-4" />}>Home</NavItem>
        <NavItem to="/shop" icon={<ShoppingCart className="h-4 w-4" />}>Shop</NavItem>
        <NavItem to="/about" icon={<Info className="h-4 w-4" />}>About</NavItem>
        <NavItem to="/contact" icon={<Phone className="h-4 w-4" />}>Contact</NavItem>
      </nav>
    </SheetContent>
  </Sheet>
);

const NavItem = ({ to, icon, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-2 transition-colors",
        isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
      )
    }
  >
    {icon}
    {children}
  </NavLink>
);

export default Layout;