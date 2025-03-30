
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
            <div>
              <h3 className="text-xl font-semibold">Modal Props</h3>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><code>isOpen</code> - Whether the modal is visible</li>
                <li><code>onClose</code> - Function called when the modal should close</li>
                <li><code>children</code> - Modal content</li>
                <li><code>className</code> - Additional CSS classes</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold">Helper Components</h3>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><code>ModalHeader</code> - Container for the modal title and description</li>
                <li><code>ModalTitle</code> - Modal title component</li>
                <li><code>ModalDescription</code> - Modal description text</li>
                <li><code>ModalFooter</code> - Container for modal action buttons</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
