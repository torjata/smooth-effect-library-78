
import { DocsLayout } from "@/components/docs/DocsLayout";
import { ComponentExample } from "@/components/docs/ComponentExample";
import { ComponentCode } from "@/components/docs/ComponentExample";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui-custom/Accordion";

export default function AccordionDoc() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Accordion</h1>
          <p className="text-muted-foreground mt-2">
            Vertically stacked sections that expand/collapse to reveal content.
          </p>
        </div>

        <ComponentExample title="Basic Accordion">
          <Accordion type="single" defaultValue="item-1" collapsible className="w-full max-w-md">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. The accordion component adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. The accordion component comes with default styles that match the other components.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. The accordion component animates the height of the content when it opens and closes.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <ComponentCode>
{`<Accordion type="single" defaultValue="item-1" collapsible className="w-full max-w-md">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. The accordion component adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. The accordion component comes with default styles that match the other components.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent>
      Yes. The accordion component animates the height of the content when it opens and closes.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="Multiple Sections Open">
          <Accordion type="multiple" className="w-full max-w-md">
            <AccordionItem value="item-1">
              <AccordionTrigger>First Section</AccordionTrigger>
              <AccordionContent>
                You can open multiple sections at the same time when using the multiple type.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Second Section</AccordionTrigger>
              <AccordionContent>
                This allows users to view content from multiple sections simultaneously.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Third Section</AccordionTrigger>
              <AccordionContent>
                Great for displaying related information that users might want to compare.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <ComponentCode>
{`<Accordion type="multiple" className="w-full max-w-md">
  <AccordionItem value="item-1">
    <AccordionTrigger>First Section</AccordionTrigger>
    <AccordionContent>
      You can open multiple sections at the same time when using the multiple type.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Second Section</AccordionTrigger>
    <AccordionContent>
      This allows users to view content from multiple sections simultaneously.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Third Section</AccordionTrigger>
    <AccordionContent>
      Great for displaying related information that users might want to compare.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
          </ComponentCode>
        </ComponentExample>

        <div className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">API Reference</h2>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Accordion Component</h3>
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
                    <td className="py-3 px-4 align-top font-mono text-sm">type</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">"single" | "multiple"</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">"single"</td>
                    <td className="py-3 px-4 align-top text-sm">Determines if one or multiple items can be open</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 align-top font-mono text-sm">defaultValue</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">string</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                    <td className="py-3 px-4 align-top text-sm">Default open item value(s)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 align-top font-mono text-sm">collapsible</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">boolean</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">true</td>
                    <td className="py-3 px-4 align-top text-sm">Whether all items can be closed (when type="single")</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 align-top font-mono text-sm">className</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">string</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                    <td className="py-3 px-4 align-top text-sm">Additional CSS classes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold mt-6">AccordionItem Component</h3>
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
                    <td className="py-3 px-4 align-top font-mono text-sm">value</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">string</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                    <td className="py-3 px-4 align-top text-sm">Unique identifier for the item</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 align-top font-mono text-sm">disabled</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">boolean</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">false</td>
                    <td className="py-3 px-4 align-top text-sm">Whether the item is disabled</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 align-top font-mono text-sm">className</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">string</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                    <td className="py-3 px-4 align-top text-sm">Additional CSS classes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold mt-6">AccordionTrigger & AccordionContent</h3>
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
                    <td className="py-3 px-4 align-top font-mono text-sm">className</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">string</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                    <td className="py-3 px-4 align-top text-sm">Additional CSS classes</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 align-top font-mono text-sm">children</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">ReactNode</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                    <td className="py-3 px-4 align-top text-sm">Content to display</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
