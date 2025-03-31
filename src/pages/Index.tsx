import { useState } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Link } from "react-router-dom";

// Import our UI components
import { Button } from "@/components/ui-custom/Button";
import { Card, CardContent } from "@/components/ui-custom/Card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui-custom/Tabs";
import { Badge } from "@/components/ui-custom/Badge";
import { ToastProvider } from "@/components/ui-custom/Toast";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui-custom/Input";
import { Avatar } from "@/components/ui-custom/Avatar";
import { Tooltip } from "@/components/ui-custom/Tooltip";
import { 
  ArrowRight, 
  Book, 
  Check, 
  ExternalLink, 
  Github, 
  Heart, 
  Layout, 
  Palette, 
  Search, 
  Shield, 
  Sparkles,
  Zap,
} from "lucide-react";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <ToastProvider>
        <div className="min-h-screen bg-gradient-to-br from-background to-background/80">
          <Hero />
          <Features />
          <ComponentShowcase />
          <Footer />
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
};

const Hero = () => {
  return (
    <div className="relative overflow-hidden px-6 lg:px-8 py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>
      
      <div className="absolute top-4 right-4 flex items-center gap-4">
        <Button asChild variant="ghost" size="sm" className="text-muted-foreground">
          <Link to="/docs">
            <Book className="mr-1 h-4 w-4" />
            Docs
          </Link>
        </Button>
        <ThemeToggle />
      </div>
      
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl">
          Modern UI Component Library
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Beautiful, responsive components with subtle gradients, 
          smooth animations, and dark mode support.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link to="/docs">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/docs">
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div className="py-24 sm:py-32 bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Designed for developers
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A collection of high-quality React components built with Tailwind CSS
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <FeatureCard 
              icon={<Layout className="h-6 w-6 text-primary" />}
              title="Responsive Design"
              description="All components are fully responsive and adapt beautifully to any screen size."
            />
            <FeatureCard 
              icon={<Palette className="h-6 w-6 text-primary" />}
              title="Dark Mode"
              description="Built-in dark mode support that respects user preference out of the box."
            />
            <FeatureCard 
              icon={<Sparkles className="h-6 w-6 text-primary" />}
              title="Subtle Animations"
              description="Smooth animations and transitions that enhance the user experience."
            />
            <FeatureCard 
              icon={<Shield className="h-6 w-6 text-primary" />}
              title="Accessibility"
              description="Components follow WAI-ARIA standards for maximum accessibility."
            />
            <FeatureCard 
              icon={<Zap className="h-6 w-6 text-primary" />}
              title="Blazing Fast"
              description="Optimized for performance with minimal bundle size impact."
            />
            <FeatureCard 
              icon={<Heart className="h-6 w-6 text-primary" />}
              title="Open Source"
              description="Free to use for personal and commercial projects."
            />
          </dl>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="glassmorphism flex flex-col rounded-xl border p-6 transition-all duration-300">
      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
        <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10">
          {icon}
        </div>
        <span>{title}</span>
      </dt>
      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
        <p className="flex-auto">{description}</p>
      </dd>
    </div>
  );
};

const ComponentShowcase = () => {
  const { toast } = useToast();
  
  const showToast = (type: "default" | "success" | "error" | "warning" | "info") => {
    const toastConfig = {
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} Toast`,
      description: `This is a ${type} toast notification example.`,
      type: type,
      duration: 5000,
    };
    
    toast(toastConfig);
  };
  
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Component Showcase
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Explore our beautiful components
          </p>
        </div>
        
        <div className="mt-16">
          <Tabs defaultValue="buttons" className="w-full">
            <TabsList className="mx-auto mb-8 grid w-full max-w-lg grid-cols-3 sm:grid-cols-5">
              <TabsTrigger value="buttons">Buttons</TabsTrigger>
              <TabsTrigger value="inputs">Inputs</TabsTrigger>
              <TabsTrigger value="cards">Cards</TabsTrigger>
              <TabsTrigger value="toasts">Toasts</TabsTrigger>
              <TabsTrigger value="avatars">Avatars</TabsTrigger>
            </TabsList>
            
            <TabsContent value="buttons" className="space-y-4">
              <div className="flex flex-wrap justify-center gap-4 bg-card/30 backdrop-blur-[2px] p-8 rounded-xl border">
                <Button variant="default">Default</Button>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button isLoading>Loading</Button>
                <Tooltip content="Button with tooltip">
                  <Button variant="outline">Hover me</Button>
                </Tooltip>
              </div>
            </TabsContent>
            
            <TabsContent value="inputs" className="space-y-4">
              <div className="flex flex-col items-center gap-4 bg-card/30 backdrop-blur-[2px] p-8 rounded-xl border">
                <div className="grid w-full max-w-lg gap-4">
                  <Input placeholder="Basic input" />
                  <Input placeholder="With icon" icon={<Search className="h-4 w-4" />} />
                  <Input placeholder="With label" label="Email address" />
                  <Input placeholder="Password" type="password" />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="cards" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 bg-card/30 backdrop-blur-[2px] rounded-xl border">
                <Card>
                  <CardContent className="p-6">
                    <Badge className="mb-4">New</Badge>
                    <h3 className="text-lg font-semibold mb-2">Feature Card</h3>
                    <p className="text-sm text-muted-foreground">This card showcases a new feature</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-4">Popular</Badge>
                    <h3 className="text-lg font-semibold mb-2">Popular Feature</h3>
                    <p className="text-sm text-muted-foreground">This is our most popular feature</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-4">Coming Soon</Badge>
                    <h3 className="text-lg font-semibold mb-2">Future Feature</h3>
                    <p className="text-sm text-muted-foreground">This feature is coming soon</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="toasts" className="space-y-4">
              <div className="flex flex-wrap justify-center gap-4 bg-card/30 backdrop-blur-[2px] p-8 rounded-xl border">
                <Button onClick={() => showToast("default")}>Default Toast</Button>
                <Button onClick={() => showToast("success")}>Success Toast</Button>
                <Button onClick={() => showToast("error")}>Error Toast</Button>
                <Button onClick={() => showToast("warning")}>Warning Toast</Button>
                <Button onClick={() => showToast("info")}>Info Toast</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="avatars" className="space-y-4">
              <div className="flex flex-wrap justify-center gap-6 bg-card/30 backdrop-blur-[2px] p-8 rounded-xl border">
                <Avatar
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=128&h=128&auto=format&fit=crop"
                  alt="User avatar"
                  status="online"
                  size="lg"
                />
                
                <Avatar 
                  fallback="JD" 
                  status="busy"
                  size="lg"
                />
                
                <Avatar 
                  status="away"
                  size="lg"
                />
                
                <Avatar 
                  fallback="OD" 
                  status="offline"
                  size="lg"
                  badge={<Badge variant="danger">3</Badge>}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="mx-auto mt-12 flex items-center justify-center">
          <Button asChild size="lg" variant="outline">
            <Link to="/docs">
              View All Components
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-muted/40 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-xl font-semibold gradient-text">UI Component Library</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              A modern collection of React components
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Link to="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              Documentation
            </Link>
            <Link to="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              Components
            </Link>
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              GitHub
            </Link>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} UI Component Library. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Index;
