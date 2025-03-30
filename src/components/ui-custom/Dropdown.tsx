
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronsUpDown, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  withSearch?: boolean;
  disabled?: boolean;
}

export function Dropdown({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className,
  withSearch = false,
  disabled = false,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const selectedOption = options.find(option => option.value === value);
  
  const filteredOptions = withSearch
    ? options.filter(option => 
        option.label.toLowerCase().includes(searchTerm.toLowerCase()))
    : options;
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      <motion.button
        type="button"
        className={cn(
          "glassmorphism relative flex h-10 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none",
          { "cursor-not-allowed opacity-50": disabled }
        )}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        whileTap={{ scale: 0.98 }}
        disabled={disabled}
      >
        <span className={selectedOption ? "" : "text-muted-foreground"}>
          {selectedOption?.label || placeholder}
        </span>
        <ChevronsUpDown className="h-4 w-4 text-muted-foreground" />
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="glassmorphism absolute z-10 mt-1 max-h-60 w-full overflow-hidden rounded-md shadow-lg"
          >
            {withSearch && (
              <div className="flex items-center border-b p-2">
                <Search className="mr-2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  className="flex-1 bg-transparent text-sm outline-none"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            )}
            <div className="overflow-y-auto p-1">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <motion.div
                    key={option.value}
                    className={cn(
                      "flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm",
                      option.value === value
                        ? "bg-primary/20 text-foreground"
                        : "text-foreground hover:bg-accent"
                    )}
                    onClick={() => {
                      onChange(option.value);
                      setIsOpen(false);
                      setSearchTerm("");
                    }}
                    whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{option.label}</span>
                    {option.value === value && (
                      <Check className="ml-auto h-4 w-4" />
                    )}
                  </motion.div>
                ))
              ) : (
                <div className="py-6 text-center text-sm text-muted-foreground">
                  No results found
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
