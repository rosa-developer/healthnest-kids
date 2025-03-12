
// Import from the ui/toaster component instead of ui/toast
import { toast as sonnerToast } from "sonner";

// Create a hook that returns the toast function
export const useToast = () => {
  return {
    toast: (props: { title?: string; description?: string; variant?: "default" | "destructive" }) => {
      return sonnerToast(props.title || "", {
        description: props.description,
        className: props.variant === "destructive" ? "bg-destructive text-destructive-foreground" : ""
      });
    }
  };
};

// Re-export the toast function
export const toast = (props: { title?: string; description?: string; variant?: "default" | "destructive" }) => {
  return sonnerToast(props.title || "", {
    description: props.description,
    className: props.variant === "destructive" ? "bg-destructive text-destructive-foreground" : ""
  });
};

// Types for the toast props
export type ToastProps = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactElement;
  variant?: "default" | "destructive";
};

export type ToastActionElement = React.ReactElement;
