
import { DocsLayout } from "@/components/docs/DocsLayout";
import { ComponentExample } from "@/components/docs/ComponentExample";
import { ComponentCode } from "@/components/docs/ComponentExample";
import { Button } from "@/components/ui-custom/Button";
import { 
  ChevronDown, 
  User, 
  Settings, 
  LogOut,
  Mail,
  MessageSquare,
  Bell,
  PlusCircle,
  Trash
} from "lucide-react";

export default function DropdownDoc() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dropdown</h1>
          <p className="text-muted-foreground mt-2">
            Dropdown menus for displaying lists of links and actions.
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-300">
          <p className="text-sm">The dropdown examples are visible below, but for an interactive experience, please visit the showcase page. Dropdowns rely on portals that may not function correctly within this documentation view.</p>
        </div>

        <ComponentExample title="Basic Dropdown">
          <div>
            <Button>
              Options
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
          <ComponentCode>
{`<Dropdown>
  <DropdownTrigger>
    <Button>
      Options
      <ChevronDown className="h-4 w-4" />
    </Button>
  </DropdownTrigger>
  <DropdownContent>
    <DropdownItem>Profile</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownSeparator />
    <DropdownItem>Logout</DropdownItem>
  </DropdownContent>
</Dropdown>`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="With Icons">
          <div>
            <Button>
              Account
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
          <ComponentCode>
{`<Dropdown>
  <DropdownTrigger>
    <Button>
      Account
      <ChevronDown className="h-4 w-4" />
    </Button>
  </DropdownTrigger>
  <DropdownContent>
    <DropdownItem>
      <User className="mr-2 h-4 w-4" />
      <span>Profile</span>
    </DropdownItem>
    <DropdownItem>
      <Settings className="mr-2 h-4 w-4" />
      <span>Settings</span>
    </DropdownItem>
    <DropdownSeparator />
    <DropdownItem>
      <LogOut className="mr-2 h-4 w-4" />
      <span>Logout</span>
    </DropdownItem>
  </DropdownContent>
</Dropdown>`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="With Sections">
          <div>
            <Button variant="outline">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </div>
          <ComponentCode>
{`<Dropdown>
  <DropdownTrigger>
    <Button variant="outline">
      <Bell className="h-4 w-4 mr-2" />
      Notifications
      <ChevronDown className="h-4 w-4 ml-2" />
    </Button>
  </DropdownTrigger>
  <DropdownContent className="w-56">
    <DropdownSection>
      <DropdownSectionTitle>Messages</DropdownSectionTitle>
      <DropdownItem>
        <Mail className="mr-2 h-4 w-4" />
        <span>New Email</span>
      </DropdownItem>
      <DropdownItem>
        <MessageSquare className="mr-2 h-4 w-4" />
        <span>New Chat</span>
      </DropdownItem>
    </DropdownSection>
    <DropdownSeparator />
    <DropdownSection>
      <DropdownSectionTitle>Actions</DropdownSectionTitle>
      <DropdownItem>
        <PlusCircle className="mr-2 h-4 w-4" />
        <span>Add New</span>
      </DropdownItem>
      <DropdownItem>
        <Trash className="mr-2 h-4 w-4" />
        <span>Clear All</span>
      </DropdownItem>
    </DropdownSection>
  </DropdownContent>
</Dropdown>`}
          </ComponentCode>
        </ComponentExample>

        <div className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">API Reference</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Components</h3>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><code>Dropdown</code> - The root container component</li>
                <li><code>DropdownTrigger</code> - The button that triggers the dropdown</li>
                <li><code>DropdownContent</code> - Container for the dropdown items</li>
                <li><code>DropdownItem</code> - Individual selectable item in the dropdown</li>
                <li><code>DropdownSeparator</code> - Visual separator between dropdown items</li>
                <li><code>DropdownSection</code> - Group dropdown items into sections</li>
                <li><code>DropdownSectionTitle</code> - Title for a dropdown section</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
