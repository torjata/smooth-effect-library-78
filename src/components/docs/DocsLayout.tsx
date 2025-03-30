
import { ReactNode } from "react";
import { ThemeToggle } from "../ThemeToggle";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface DocsLayoutProps {
  children: ReactNode;
}

export function DocsLayout({ children }: DocsLayoutProps) {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/docs/button", label: "Button" },
    { href: "/docs/card", label: "Card" },
    { href: "/docs/badge", label: "Badge" },
    { href: "/docs/input", label: "Input" },
    { href: "/docs/switch", label: "Switch" },
    { href: "/docs/avatar", label: "Avatar" },
    { href: "/docs/modal", label: "Modal" },
    { href: "/docs/dropdown", label: "Dropdown" },
  ]
  
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-background to-background/80">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border/50 p-6 hidden md:block">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-xl font-semibold gradient-text">UI Components</h1>
          <ThemeToggle />
        </div>
        
        <nav className="space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "block px-3 py-2 rounded-md text-sm transition-colors",
                currentPath === link.href
                  ? "bg-primary/10 text-primary font-medium"
                  : "hover:bg-primary/5 text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
      
      {/* Mobile header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold gradient-text">UI Components</h1>
          <ThemeToggle />
        </div>
      </div>
      
      {/* Main content */}
      <main className="flex-1 p-6 md:p-10 pt-20 md:pt-10">
        {children}
      </main>
    </div>
  );
}
