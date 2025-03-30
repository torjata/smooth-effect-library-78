
import { useEffect, useState } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion } from "framer-motion";

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
import { Dropdown } from "@/components/ui-custom/Dropdown";
import { Switch } from "@/components/ui-custom/Switch";
import { Badge } from "@/components/ui-custom/Badge";
import { ToastProvider, useToast } from "@/components/ui-custom/Toast";
import { Tooltip } from "@/components/ui-custom/Tooltip";
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from "@/components/ui-custom/Accordion";
import { LinearProgress, CircularProgress } from "@/components/ui-custom/Progress";
import { Tabs, TabList, TabTrigger, TabContent } from "@/components/ui-custom/Tabs";
import { Avatar } from "@/components/ui-custom/Avatar";
import { Stepper } from "@/components/ui-custom/Stepper";
import { 
  Skeleton, 
  AvatarSkeleton, 
  TextSkeleton, 
  CardSkeleton 
} from "@/components/ui-custom/Skeleton";

// Import icons
import { 
  Bell, 
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
  const [dropdownValue, setDropdownValue] = useState("");
  const [switchValue, setSwitchValue] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [progress, setProgress] = useState(45);
  const { addToast } = useToast();
  
  const dropdownOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
  ];
  
  const steps = [
    { title: "Step 1", description: "Personal information" },
    { title: "Step 2", description: "Address details" },
    { title: "Step 3", description: "Review and submit" },
  ];
  
  useEffect(() => {
    // Demonstrate progress animation
    const timer = setInterval(() => {
      setProgress((prev) => {
        const newValue = prev + 1;
        if (newValue > 100) {
          clearInterval(timer);
          return 100;
        }
        return newValue;
      });
    }, 100);
    
    return () => clearInterval(timer);
  }, []);
  
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
        <motion.h1
          className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Glassmorphic UI Components
        </motion.h1>
        <motion.p
          className="mt-4 max-w-lg text-lg text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Beautiful, responsive components with glass effects, smooth animations, and dark mode support.
        </motion.p>
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
      <ComponentSection title="Card" description="Glassmorphic cards with hover effects">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Simple Card</CardTitle>
              <CardDescription>A basic card example</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is a simple card with a glassmorphic effect. It has a subtle hover animation.</p>
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
              This is a modal with a glassmorphic effect. It has smooth animations for opening and closing.
            </ModalDescription>
          </ModalHeader>
          
          <div className="py-4">
            <p className="mb-4">This modal demonstrates the glass effect with a backdrop blur.</p>
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
      
      {/* Dropdown */}
      <ComponentSection title="Dropdown" description="Selectable dropdown menus">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Dropdown 
            options={dropdownOptions}
            value={dropdownValue}
            onChange={setDropdownValue}
            placeholder="Select an option"
          />
          
          <Dropdown 
            options={dropdownOptions}
            value={dropdownValue}
            onChange={setDropdownValue}
            placeholder="With search"
            withSearch
          />
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
      
      {/* Accordion */}
      <ComponentSection title="Accordion" description="Expandable content sections">
        <Accordion type="single" defaultValue="item-1" collapsible className="w-full max-w-md">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is this component library?</AccordionTrigger>
            <AccordionContent>
              This is a modern UI component library featuring glassmorphic designs, smooth animations, and full dark mode support.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger>How do I use these components?</AccordionTrigger>
            <AccordionContent>
              Import the components directly from their respective files and use them in your React application.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger>Is this library customizable?</AccordionTrigger>
            <AccordionContent>
              Yes! All components are built with Tailwind CSS and Framer Motion, making them highly customizable.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ComponentSection>
      
      {/* Progress */}
      <ComponentSection title="Progress" description="Progress indicators with animations">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <h4 className="mb-4 font-medium">Linear Progress</h4>
            <div className="space-y-4">
              <LinearProgress value={progress} showValue label="Default" />
              <LinearProgress value={75} variant="success" showValue label="Success" />
              <LinearProgress value={50} variant="warning" showValue label="Warning" />
              <LinearProgress value={25} variant="danger" showValue label="Danger" />
            </div>
          </div>
          
          <div>
            <h4 className="mb-4 font-medium">Circular Progress</h4>
            <div className="flex flex-wrap gap-4">
              <CircularProgress value={progress} showValue size={80} />
              <CircularProgress value={75} variant="success" showValue size={80} />
              <CircularProgress value={50} variant="warning" showValue size={80} />
              <CircularProgress value={25} variant="danger" showValue size={80} />
            </div>
          </div>
        </div>
      </ComponentSection>
      
      {/* Tabs */}
      <ComponentSection title="Tabs" description="Tab navigation with smooth transitions">
        <Tabs defaultValue="account" className="w-full max-w-lg">
          <TabList>
            <TabTrigger value="account">Account</TabTrigger>
            <TabTrigger value="password">Password</TabTrigger>
            <TabTrigger value="settings">Settings</TabTrigger>
            <TabTrigger value="disabled" disabled>Disabled</TabTrigger>
          </TabList>
          
          <TabContent value="account">
            <Card className="mt-4">
              <CardContent className="pt-4">
                This tab contains account settings and information. You can manage your profile here.
              </CardContent>
            </Card>
          </TabContent>
          
          <TabContent value="password">
            <Card className="mt-4">
              <CardContent className="pt-4">
                Change your password and security settings in this tab. Keep your account secure.
              </CardContent>
            </Card>
          </TabContent>
          
          <TabContent value="settings">
            <Card className="mt-4">
              <CardContent className="pt-4">
                Adjust application preferences and configuration settings in this section.
              </CardContent>
            </Card>
          </TabContent>
        </Tabs>
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
      
      {/* Stepper */}
      <ComponentSection title="Stepper" description="Multi-step process indicators">
        <div className="space-y-8">
          <div className="space-y-4">
            <Stepper steps={steps} activeStep={activeStep} />
            
            <div className="flex justify-between">
              <Button
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                disabled={activeStep === 0}
              >
                Previous
              </Button>
              <Button
                onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                disabled={activeStep === steps.length - 1}
              >
                Next
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="mb-4 font-medium">Vertical Stepper</h4>
            <Stepper 
              steps={steps} 
              activeStep={activeStep} 
              orientation="vertical" 
            />
          </div>
        </div>
      </ComponentSection>
      
      {/* Skeleton */}
      <ComponentSection title="Skeleton" description="Loading state placeholders">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <div className="space-y-4">
              <TextSkeleton className="w-1/3" />
              <TextSkeleton className="w-full" />
              <TextSkeleton className="w-2/3" />
              <div className="flex items-center gap-4">
                <AvatarSkeleton />
                <div className="space-y-2">
                  <TextSkeleton className="h-3 w-24" />
                  <TextSkeleton className="h-3 w-32" />
                </div>
              </div>
            </div>
          </div>
          
          <CardSkeleton />
        </div>
      </ComponentSection>
      
      <footer className="mt-16 text-center text-sm text-muted-foreground">
        <p>Modern UI Component Library with Glassmorphism Effects</p>
        <p className="mt-1">Built with React, Tailwind CSS, and Framer Motion</p>
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
      <div className="rounded-lg border p-6 glassmorphism">
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
        <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30 pb-20">
          <div className="fixed right-4 top-4 z-50">
            <ThemeToggle />
          </div>
          <ComponentShowcase />
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default Index;
