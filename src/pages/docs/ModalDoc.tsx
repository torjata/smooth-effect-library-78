
import { DocsLayout } from "@/components/docs/DocsLayout";
import { ComponentExample } from "@/components/docs/ComponentExample";
import { ComponentCode } from "@/components/docs/ComponentExample";
import { Modal, ModalHeader, ModalTitle, ModalDescription, ModalFooter } from "@/components/ui-custom/Modal";
import { Button } from "@/components/ui-custom/Button";
import { Input } from "@/components/ui-custom/Input";
import { useState } from "react";

export default function ModalDoc() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  
  return (
    <DocsLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Modal</h1>
          <p className="text-muted-foreground mt-2">
            Modal dialogs for focused interactions and confirmations.
          </p>
        </div>

        <ComponentExample title="Basic Modal">
          <div>
            <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
            
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
              <ModalHeader>
                <ModalTitle>Modal Title</ModalTitle>
                <ModalDescription>
                  This is a description of the modal and what it's used for.
                </ModalDescription>
              </ModalHeader>
              
              <div className="py-4">
                <p className="mb-4">This is the main content of the modal.</p>
                <Input placeholder="Enter some information" />
              </div>
              
              <ModalFooter>
                <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                <Button onClick={() => setIsModalOpen(false)}>Continue</Button>
              </ModalFooter>
            </Modal>
          </div>
          <ComponentCode>
{`const [isModalOpen, setIsModalOpen] = useState(false);

<Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>

<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
  <ModalHeader>
    <ModalTitle>Modal Title</ModalTitle>
    <ModalDescription>
      This is a description of the modal and what it's used for.
    </ModalDescription>
  </ModalHeader>
  
  <div className="py-4">
    <p className="mb-4">This is the main content of the modal.</p>
    <Input placeholder="Enter some information" />
  </div>
  
  <ModalFooter>
    <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
    <Button onClick={() => setIsModalOpen(false)}>Continue</Button>
  </ModalFooter>
</Modal>`}
          </ComponentCode>
        </ComponentExample>

        <ComponentExample title="Confirmation Modal">
          <div>
            <Button variant="destructive" onClick={() => setIsConfirmOpen(true)}>Delete Item</Button>
            
            <Modal isOpen={isConfirmOpen} onClose={() => setIsConfirmOpen(false)}>
              <ModalHeader>
                <ModalTitle>Confirm Deletion</ModalTitle>
                <ModalDescription>
                  This action cannot be undone. This will permanently delete the item.
                </ModalDescription>
              </ModalHeader>
              
              <ModalFooter>
                <Button variant="outline" onClick={() => setIsConfirmOpen(false)}>Cancel</Button>
                <Button variant="destructive" onClick={() => setIsConfirmOpen(false)}>Delete</Button>
              </ModalFooter>
            </Modal>
          </div>
          <ComponentCode>
{`const [isConfirmOpen, setIsConfirmOpen] = useState(false);

<Button variant="destructive" onClick={() => setIsConfirmOpen(true)}>Delete Item</Button>

<Modal isOpen={isConfirmOpen} onClose={() => setIsConfirmOpen(false)}>
  <ModalHeader>
    <ModalTitle>Confirm Deletion</ModalTitle>
    <ModalDescription>
      This action cannot be undone. This will permanently delete the item.
    </ModalDescription>
  </ModalHeader>
  
  <ModalFooter>
    <Button variant="outline" onClick={() => setIsConfirmOpen(false)}>Cancel</Button>
    <Button variant="destructive" onClick={() => setIsConfirmOpen(false)}>Delete</Button>
  </ModalFooter>
</Modal>`}
          </ComponentCode>
        </ComponentExample>

        <div className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">API Reference</h2>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Modal Props</h3>
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
                    <td className="py-3 px-4 align-top font-mono text-sm">isOpen</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">boolean</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">false</td>
                    <td className="py-3 px-4 align-top text-sm">Whether the modal is visible</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 align-top font-mono text-sm">onClose</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">() => void</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                    <td className="py-3 px-4 align-top text-sm">Function called when the modal should close</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 align-top font-mono text-sm">children</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">ReactNode</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">-</td>
                    <td className="py-3 px-4 align-top text-sm">Modal content</td>
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
            
            <h3 className="text-xl font-semibold mt-6">Helper Components</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left">Component</th>
                    <th className="py-3 px-4 text-left">Props</th>
                    <th className="py-3 px-4 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 align-top font-mono text-sm">ModalHeader</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">className, children</td>
                    <td className="py-3 px-4 align-top text-sm">Container for the modal title and description</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 align-top font-mono text-sm">ModalTitle</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">className, children</td>
                    <td className="py-3 px-4 align-top text-sm">Modal title component</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 align-top font-mono text-sm">ModalDescription</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">className, children</td>
                    <td className="py-3 px-4 align-top text-sm">Modal description text</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 align-top font-mono text-sm">ModalFooter</td>
                    <td className="py-3 px-4 align-top font-mono text-sm">className, children</td>
                    <td className="py-3 px-4 align-top text-sm">Container for modal action buttons</td>
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
