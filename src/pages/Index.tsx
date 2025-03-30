
import { useEffect, useState } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Link } from "react-router-dom";

// Import our UI components
import { Button } from "@/components/ui-custom/Button";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui-custom/Card";
import { Modal, ModalHeader, ModalTitle, ModalDescription, ModalFooter } from "@/components/ui-custom/Modal";
import { Input } from "@/components/ui-custom/Input";
import { Switch } from "@/components/ui-custom/Switch";
import { Badge } from "@/components/ui-custom/Badge";
import { ToastProvider, useToast } from "@/components/ui-custom/Toast";
import { Tooltip } from "@/components/ui-custom/Tooltip";
import { Avatar } from "@/components/ui-custom/Avatar";
import { 
  Bell, 
  Book,
  Check, 
  ChevronRight, 
  Info, 
  Mail, 
  Search, 
  User, 
  X,
  Settings,
  AlertCircle,
  CheckCircle2,
  Clock
} from "lucide-react";

// Component showcase
const ComponentShowcase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const [progress, setProgress] = useState(45);
  const { addToast } = useToast();
  
  const showToast = (type: "default" | "success" | "error" | "warning" | "info") => {
    const toastConfig = {
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} Toast`,
      description: `This is a ${type} toast notification example.`,
      type,
      duration: 5000,
    };
    
    addToast(toastConfig);
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-16 flex flex-col items-center justify-center text-center">
        <div className="absolute top-4 right-4 flex items-center gap-4">
          <Button asChild variant="ghost" size="sm" className="text-muted-foreground">
            <Link to="/docs">
              <Book className="mr-1 h-4 w-4" />
              Docs
            </Link>
          </Button>
          <ThemeToggle />
        </div>
        
        <h1 className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl">
          UI Component Library
        </h1>
        <p className="mt-4 max-w-lg text-lg text-muted-foreground">
          Beautiful, responsive components with subtle gradients, smooth animations, and dark mode support.
        </p>
        <div className="mt-8">
          <Button asChild>
            <Link to="/docs">View Documentation</Link>
          </Button>
        </div>
      </header>
      
      {/* Buttons */}
      <ComponentSection title="Button" description="Responsive buttons with hover and click effects">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <Button variant="default">Default</Button>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button isLoading>Loading</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button size="icon"><Bell className="h-4 w-4" /></Button>
        </div>
      </ComponentSection>
      
      {/* Cards */}
      <ComponentSection title="Card" description="Cards with subtle gradients and hover effects">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Simple Card</CardTitle>
              <CardDescription>A basic card example</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is a simple card with a subtle gradient background. It has a minimal hover animation.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">Learn More</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Feature Card</CardTitle>
              <CardDescription>With badge and buttons</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Badge variant="success">New</Badge>
                <Badge variant="primary">Feature</Badge>
              </div>
              <p>This card demonstrates using badges and different buttons together.</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost" size="sm">Cancel</Button>
              <Button size="sm">Continue</Button>
            </CardFooter>
          </Card>
          
          <Card glass={false} hover={false} className="border-dashed">
            <CardHeader>
              <CardTitle>Non-glass Card</CardTitle>
              <CardDescription>Without effects</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This card has no glassmorphic effect or hover animation, showing the versatility.</p>
            </CardContent>
          </Card>
        </div>
      </ComponentSection>
      
      {/* Modal */}
      <ComponentSection title="Modal" description="Popup modals with smooth transitions">
        <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
        
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ModalHeader>
            <ModalTitle>Modal Example</ModalTitle>
            <ModalDescription>
              This is a modal with a gradient background. It has smooth animations for opening and closing.
            </ModalDescription>
          </ModalHeader>
          
          <div className="py-4">
            <p className="mb-4">This modal demonstrates the gradient effect with a subtle border.</p>
            <Input placeholder="Try typing something..." className="mb-4" />
          </div>
          
          <ModalFooter>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button onClick={() => setIsModalOpen(false)}>Continue</Button>
          </ModalFooter>
        </Modal>
      </ComponentSection>
      
      {/* Input */}
      <ComponentSection title="Input" description="Text inputs with focus effects">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Input placeholder="Standard input" />
          <Input placeholder="With label" label="Email Address" />
          <Input placeholder="With icon" icon={<Mail className="h-4 w-4" />} />
          <Input placeholder="With error" error="This field is required" />
          <Input placeholder="Disabled" disabled />
          <Input type="password" placeholder="Password" icon={<User className="h-4 w-4" />} />
        </div>
      </ComponentSection>
      
      {/* Switch */}
      <ComponentSection title="Switch" description="Toggle switches with smooth transitions">
        <div className="flex flex-wrap gap-8">
          <Switch checked={switchValue} onCheckedChange={setSwitchValue} />
          <Switch label="With Label" />
          <Switch checked disabled label="Disabled On" />
          <Switch disabled label="Disabled Off" />
        </div>
      </ComponentSection>
      
      {/* Badge */}
      <ComponentSection title="Badge" description="Status badges with subtle animations">
        <div className="flex flex-wrap gap-2">
          <Badge variant="default">Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
        </div>
      </ComponentSection>
      
      {/* Toast */}
      <ComponentSection title="Toast" description="Notification toasts with slide-in animations">
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => showToast("default")}>Default Toast</Button>
          <Button onClick={() => showToast("success")}>Success Toast</Button>
          <Button onClick={() => showToast("error")}>Error Toast</Button>
          <Button onClick={() => showToast("warning")}>Warning Toast</Button>
          <Button onClick={() => showToast("info")}>Info Toast</Button>
        </div>
      </ComponentSection>
      
      {/* Tooltip */}
      <ComponentSection title="Tooltip" description="Helpful tooltips with fade-in effects">
        <div className="flex flex-wrap gap-4">
          <Tooltip content="This is a tooltip">
            <Button variant="outline" size="icon">
              <Info className="h-4 w-4" />
            </Button>
          </Tooltip>
          
          <Tooltip content="Top tooltip" side="top">
            <Button variant="outline">Top</Button>
          </Tooltip>
          
          <Tooltip content="Right tooltip" side="right">
            <Button variant="outline">Right</Button>
          </Tooltip>
          
          <Tooltip content="Bottom tooltip" side="bottom">
            <Button variant="outline">Bottom</Button>
          </Tooltip>
          
          <Tooltip content="Left tooltip" side="left">
            <Button variant="outline">Left</Button>
          </Tooltip>
        </div>
      </ComponentSection>
      
      {/* Avatar */}
      <ComponentSection title="Avatar" description="User avatars with status indicators">
        <div className="flex flex-wrap items-end gap-4">
          <Avatar
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=128&h=128&auto=format&fit=crop"
            alt="User avatar"
            status="online"
          />
          
          <Avatar 
            fallback="JD" 
            status="busy"
            size="lg"
          />
          
          <Avatar 
            status="away"
            size="sm"
          />
          
          <Avatar 
            fallback="OD" 
            status="offline"
            size="xl"
            badge={<Badge variant="danger">3</Badge>}
          />
        </div>
      </ComponentSection>
      
      <footer className="mt-16 text-center text-sm text-muted-foreground">
        <p>Modern UI Component Library with Subtle Gradients</p>
        <p className="mt-1">Built with React, Tailwind CSS, and TypeScript</p>
      </footer>
    </div>
  );
};

// Component section wrapper
const ComponentSection = ({ 
  title, 
  description, 
  children 
}: { 
  title: string; 
  description: string; 
  children: React.ReactNode;
}) => {
  return (
    <section className="mb-16">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="rounded-lg border p-6 bg-card/30 backdrop-blur-[2px]">
        {children}
      </div>
    </section>
  );
};

// Main page component
const Index = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <ToastProvider>
        <div className="min-h-screen bg-gradient-to-br from-background to-background/80 pb-20">
          <ComponentShowcase />
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default Index;
