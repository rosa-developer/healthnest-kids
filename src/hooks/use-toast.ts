
import { toast } from "@/components/ui/toast";

// Create a hook that returns the toast function
export const useToast = () => {
  return {
    toast
  };
};

// Re-export the toast function
export { toast };

// Re-export types
export type { ToastActionElement, ToastProps } from "@/components/ui/toast";
