
import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { cn } from "@/lib/utils"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, type, ...props }) {
        return (
          <Toast 
            key={id} 
            {...props}
            className={cn(
              type === 'success' && "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
              type === 'error' && "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800",
              type === 'warning' && "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800",
              type === 'info' && "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
            )}
          >
            <div className="grid gap-1">
              {title && (
                <ToastTitle className={cn(
                  type === 'success' && "text-green-800 dark:text-green-200",
                  type === 'error' && "text-red-800 dark:text-red-200",
                  type === 'warning' && "text-amber-800 dark:text-amber-200",
                  type === 'info' && "text-blue-800 dark:text-blue-200"
                )}>
                  {title}
                </ToastTitle>
              )}
              {description && (
                <ToastDescription className={cn(
                  type === 'success' && "text-green-700 dark:text-green-300",
                  type === 'error' && "text-red-700 dark:text-red-300",
                  type === 'warning' && "text-amber-700 dark:text-amber-300",
                  type === 'info' && "text-blue-700 dark:text-blue-300"
                )}>
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
