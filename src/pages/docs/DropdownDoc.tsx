
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
import { useState } from "react";

export default function DropdownDoc() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <DocsLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dropdown</h1>
          <p className="text-muted-foreground mt-2">
            Dropdown menus for displaying lists of links and actions.
          </p>
        </div>

        <ComponentExample title="Basic Dropdown">
          <div className="flex flex-col items-center">
            <div className="relative">
              <Button onClick={() => setIsOpen1(!isOpen1)}>
                Options
                <ChevronDown className="h-4 w-4" />
              </Button>
              
              {isOpen1 && (
                <div className="absolute z-10 mt-2 min-w-[8rem] rounded-md border bg-popover p-1 shadow-md animate-in fade-in-80 slide-in-from-top-1">
                  <div className="py-1.5 px-2 text-sm cursor-pointer hover:bg-accent hover:text-accent-foreground rounded-sm">Profile</div>
                  <div className="py-1.5 px-2 text-sm cursor-pointer hover:bg-accent hover:text-accent-foreground rounded-sm">Settings</div>
                  <div className="h-px my-1 bg-muted"></div>
                  <div className="py-1.5 px-2 text-sm cursor-pointer hover:bg-accent hover:text-accent-foreground rounded-sm">Logout</div>
                </div>
              )}
            </div>
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
          <div className="flex flex-col items-center">
            <div className="relative">
              <Button onClick={() => setIsOpen2(!isOpen2)}>
                Account
                <ChevronDown className="h-4 w-4" />
              </Button>
              
              {isOpen2 && (
                <div className="absolute z-10 mt-2 min-w-[8rem] rounded-md border bg-popover p-1 shadow-md animate-in fade-in-80 slide-in-from-top-1">
                  <div className="py-1.5 px-2 text-sm cursor-pointer hover:bg-accent hover:text-accent-foreground rounded-sm flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </div>
                  <div className="py-1.5 px-2 text-sm cursor-pointer hover:bg-accent hover:text-accent-foreground rounded-sm flex items-center">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </div>
                  <div className="h-px my-1 bg-muted"></div>
                  <div className="py-1.5 px-2 text-sm cursor-pointer hover:bg-accent hover:text-accent-foreground rounded-sm flex items-center">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </div>
                </div>
              )}
            </div>
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
          <div className="flex flex-col items-center">
            <div className="relative">
              <Button variant="outline" onClick={() => setIsOpen3(!isOpen3)}>
                <Bell className="h-4 w-4 mr-2" />
                Notifications
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
              
              {isOpen3 && (
                <div className="absolute z-10 mt-2 w-56 rounded-md border bg-popover p-1 shadow-md animate-in fade-in-80 slide-in-from-top-1">
                  <div className="px-2 py-1.5 text-xs font-medium">Messages</div>
                  <div className="py-1.5 px-2 text-sm cursor-pointer hover:bg-accent hover:text-accent-foreground rounded-sm flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    <span>New Email</span>
                  </div>
                  <div className="py-1.5 px-2 text-sm cursor-pointer hover:bg-accent hover:text-accent-foreground rounded-sm flex items-center">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    <span>New Chat</span>
                  </div>
                  <div className="h-px my-1 bg-muted"></div>
                  <div className="px-2 py-1.5 text-xs font-medium">Actions</div>
                  <div className="py-1.5 px-2 text-sm cursor-pointer hover:bg-accent hover:text-accent-foreground rounded-sm flex items-center">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    <span>Add New</span>
                  </div>
                  <div className="py-1.5 px-2 text-sm cursor-pointer hover:bg-accent hover:text-accent-foreground rounded-sm flex items-center">
                    <Trash className="mr-2 h-4 w-4" />
                    <span>Clear All</span>
                  </div>
                </div>
              )}
            </div>
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
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-4 text-left">Prop</th>
                  <th className="py-3 px-4 text-left">Type</th>
                  <th className="py-3 px-4 text-left">Default</th>
                  <th className="py-3 px-4 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4 align-top font-mono text-sm">children</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">ReactNode</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                  <td className="py-3 px-4 align-top text-sm">The content of the dropdown</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 align-top font-mono text-sm">defaultOpen</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">boolean</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">false</td>
                  <td className="py-3 px-4 align-top text-sm">Whether the dropdown is open by default</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 align-top font-mono text-sm">align</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">"start" | "center" | "end"</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">"center"</td>
                  <td className="py-3 px-4 align-top text-sm">Alignment of the dropdown relative to the trigger</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
