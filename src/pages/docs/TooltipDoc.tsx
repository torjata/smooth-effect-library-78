
import { DocsLayout } from "@/components/docs/DocsLayout";
import { ComponentExample } from "@/components/docs/ComponentExample";
import { ComponentCode } from "@/components/docs/ComponentExample";
import { Tooltip } from "@/components/ui-custom/Tooltip";
import { Button } from "@/components/ui-custom/Button";
import { Info, HelpCircle, Settings, User } from "lucide-react";
import { useState } from "react";

export default function TooltipDoc() {
  const [showTooltips, setShowTooltips] = useState(false);
  
  return (
    <DocsLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Tooltip</h1>
          <p className="text-muted-foreground mt-2">
            Contextual information shown on hover or focus.
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-300 flex flex-col">
          <p className="text-sm">Enable tooltips in the documentation view:</p>
          <div className="mt-2">
            <button 
              onClick={() => setShowTooltips(!showTooltips)} 
              className={`px-4 py-2 rounded-md text-sm transition-all duration-200 ${
                showTooltips 
                  ? "bg-green-500 text-white" 
                  : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
              }`}
            >
              {showTooltips ? "Hide Tooltips" : "Show Tooltips"}
            </button>
          </div>
        </div>

        <ComponentExample title="Basic Tooltip">
          <div className="flex justify-center py-8">
            {showTooltips ? (
              <Tooltip content="Shows more information about this feature">
                <Button variant="outline" size="icon">
                  <Info className="h-4 w-4" />
                </Button>
              </Tooltip>
            ) : (
              <Button variant="outline" size="icon">
                <Info className="h-4 w-4" />
              </Button>
            )}
          </div>
          <ComponentCode>
{`<Tooltip content="Shows more information about this feature">
  <Button variant="outline" size="icon">
    <Info className="h-4 w-4" />
  </Button>
</Tooltip>`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="Tooltip Positions">
          <div className="flex flex-wrap justify-center gap-4 py-8">
            {showTooltips ? (
              <>
                <Tooltip content="This tooltip appears on top" position="top">
                  <Button variant="outline">Top</Button>
                </Tooltip>
                <Tooltip content="This tooltip appears on the right" position="right">
                  <Button variant="outline">Right</Button>
                </Tooltip>
                <Tooltip content="This tooltip appears on the bottom" position="bottom">
                  <Button variant="outline">Bottom</Button>
                </Tooltip>
                <Tooltip content="This tooltip appears on the left" position="left">
                  <Button variant="outline">Left</Button>
                </Tooltip>
              </>
            ) : (
              <>
                <Button variant="outline">Top</Button>
                <Button variant="outline">Right</Button>
                <Button variant="outline">Bottom</Button>
                <Button variant="outline">Left</Button>
              </>
            )}
          </div>
          <ComponentCode>
{`<Tooltip content="This tooltip appears on top" position="top">
  <Button variant="outline">Top</Button>
</Tooltip>

<Tooltip content="This tooltip appears on the right" position="right">
  <Button variant="outline">Right</Button>
</Tooltip>

<Tooltip content="This tooltip appears on the bottom" position="bottom">
  <Button variant="outline">Bottom</Button>
</Tooltip>

<Tooltip content="This tooltip appears on the left" position="left">
  <Button variant="outline">Left</Button>
</Tooltip>`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="With Icons">
          <div className="flex flex-wrap justify-center gap-4 py-8">
            {showTooltips ? (
              <>
                <Tooltip content="Get help">
                  <Button variant="ghost" size="icon">
                    <HelpCircle className="h-5 w-5" />
                  </Button>
                </Tooltip>
                <Tooltip content="Account settings">
                  <Button variant="ghost" size="icon">
                    <Settings className="h-5 w-5" />
                  </Button>
                </Tooltip>
                <Tooltip content="Your profile">
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </Tooltip>
              </>
            ) : (
              <>
                <Button variant="ghost" size="icon">
                  <HelpCircle className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Settings className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </>
            )}
          </div>
          <ComponentCode>
{`<Tooltip content="Get help">
  <Button variant="ghost" size="icon">
    <HelpCircle className="h-5 w-5" />
  </Button>
</Tooltip>

<Tooltip content="Account settings">
  <Button variant="ghost" size="icon">
    <Settings className="h-5 w-5" />
  </Button>
</Tooltip>

<Tooltip content="Your profile">
  <Button variant="ghost" size="icon">
    <User className="h-5 w-5" />
  </Button>
</Tooltip>`}
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
                  <td className="py-3 px-4 align-top font-mono text-sm">content</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">ReactNode</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                  <td className="py-3 px-4 align-top text-sm">The content to display inside the tooltip</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 align-top font-mono text-sm">children</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">ReactElement</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                  <td className="py-3 px-4 align-top text-sm">The element that triggers the tooltip</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 align-top font-mono text-sm">position</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">"top" | "right" | "bottom" | "left"</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">"top"</td>
                  <td className="py-3 px-4 align-top text-sm">Position of the tooltip</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 align-top font-mono text-sm">sideOffset</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">number</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">4</td>
                  <td className="py-3 px-4 align-top text-sm">Distance between tooltip and trigger element in pixels</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 align-top font-mono text-sm">align</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">"start" | "center" | "end"</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">"center"</td>
                  <td className="py-3 px-4 align-top text-sm">Alignment along the trigger element</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 align-top font-mono text-sm">delay</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">number</td>
                  <td className="py-3 px-4 align-top font-mono text-sm">300</td>
                  <td className="py-3 px-4 align-top text-sm">Delay before the tooltip appears in milliseconds</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
