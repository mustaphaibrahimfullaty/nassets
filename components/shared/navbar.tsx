"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavItems } from "@/data/navigation";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Search, ShoppingCart, User, Menu, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/brand/nassets-full-logo.png"
            alt="Nassets"
            width={200}
            height={150}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative py-1",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary rounded-full animate-fade-in-scale" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-2">
          <Button variant="ghost" className="rounded-full w-10 h-10 hover:bg-primary/10 bg-foreground text-background">
            <Search className="w-5 h-5" />
            <span className="sr-only">Search</span>
          </Button>

          <Button variant="ghost" className="rounded-full w-10 h-10 hover:bg-primary/10 relative bg-foreground text-background">
            <ShoppingCart className="w-5 h-5" />
            <Badge className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 rounded-full text-[10px]">
              2
            </Badge>
            <span className="sr-only">Cart</span>
          </Button>

          <Button variant="ghost" className="rounded-full w-10 h-10 hover:bg-primary/10 bg-foreground text-background">
            <User className="w-5 h-5" />
            <span className="sr-only">Account</span>
          </Button>

          <div className="w-px h-6 bg-border mx-1"></div>

          <ThemeToggle />
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button variant="ghost" className="relative rounded-full w-10 h-10 hover:bg-primary/10 bg-foreground text-background">
            <ShoppingCart className="w-5 h-5" />
            <Badge className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 rounded-full text-[9px]">
              2
            </Badge>
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="relative rounded-full w-10 h-10 hover:bg-primary/10 bg-foreground text-background">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col p-0">
              <div className="p-6 border-b flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="bg-primary text-primary-foreground p-1.5 rounded-md">
                    <Zap size={20} strokeWidth={2.5} />
                  </div>
                  <span className="font-heading font-bold text-xl tracking-tight">
                    Nassets
                  </span>
                </Link>
                <ThemeToggle />
              </div>

              <div className="flex-1 overflow-auto py-6 px-4 flex flex-col gap-4">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-lg font-medium transition-colors",
                      pathname === item.href
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-muted"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="p-6 border-t mt-auto">
                <Button className="w-full justify-start gap-2 mb-3" variant="outline">
                  <User className="w-4 h-4" />
                  Sign In / Register
                </Button>
                <Button className="w-full justify-start gap-2" variant="secondary">
                  <Search className="w-4 h-4" />
                  Search Motorcycles
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
