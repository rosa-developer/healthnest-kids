
// This file imports directly from the toast component instead of from hooks
import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast";

export type { ToastProps, ToastActionElement };

// Re-export the toast components directly
export { 
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction 
} from "@/components/ui/toast";

// Create a simplified toast function
export const toast = ({ title, description, variant }: { 
  title?: React.ReactNode; 
  description?: React.ReactNode; 
  variant?: "default" | "destructive";
}) => {
  // We'll implement a simplified version since the hook approach has circular dependencies
  console.log('Toast:', title, description);
  // This is a simplified version that logs to console
  // In a production app, you'd want to use a proper toast library
  return { id: Date.now().toString() };
};

export const useToast = () => {
  return {
    toast,
    toasts: [],
    dismiss: () => {}
  };
};
