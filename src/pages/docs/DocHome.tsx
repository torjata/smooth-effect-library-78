
import { Link } from "react-router-dom";
import { DocsLayout } from "@/components/docs/DocsLayout";
import { Card, CardContent } from "@/components/ui-custom/Card";
import { Button } from "@/components/ui-custom/Button";
import { Badge } from "@/components/ui-custom/Badge";
import { Layout, Layers, Square, ToggleLeft, User, Box, Inbox } from "lucide-react";

export default function DocHome() {
  const components = [
    { title: "Button", icon: <Square className="h-5 w-5" />, href: "/docs/button", description: "Buttons with various styles, sizes and states" },
    { title: "Card", icon: <Layout className="h-5 w-5" />, href: "/docs/card", description: "Flexible card layouts with header, content and footer" },
    { title: "Badge", icon: <Badge variant="outline">New</Badge>, href: "/docs/badge", description: "Status indicators and labels" },
    { title: "Input", icon: <Box className="h-5 w-5" />, href: "/docs/input", description: "Text inputs with labels, icons and validation" },
    { title: "Switch", icon: <ToggleLeft className="h-5 w-5" />, href: "/docs/switch", description: "Toggle controls for boolean options" },
    { title: "Avatar", icon: <User className="h-5 w-5" />, href: "/docs/avatar", description: "User avatars with fallback and status" },
    { title: "Modal", icon: <Layers className="h-5 w-5" />, href: "/docs/modal", description: "Modal dialogs for focused interactions" },
    { title: "Dropdown", icon: <Inbox className="h-5 w-5" />, href: "/docs/dropdown", description: "Dropdown menus for selection" },
  ];
  
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold gradient-text">UI Component Library</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Beautiful, responsive components with subtle gradients, smooth animations, and dark mode support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((component) => (
            <Link key={component.title} to={component.href}>
              <Card className="h-full hover:border-primary/20">
                <CardContent className="p-6 flex flex-col gap-2">
                  <div className="mb-3">
                    {component.icon}
                  </div>
                  <h3 className="font-medium text-lg">{component.title}</h3>
                  <p className="text-muted-foreground text-sm">{component.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="py-8 text-center">
          <Button asChild>
            <Link to="/">View Showcase</Link>
          </Button>
        </div>
      </div>
    </DocsLayout>
  );
}
