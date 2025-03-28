
import * as React from "react";

// Define types to avoid circular dependency
export type ToastActionElement = React.ReactElement<any>;

export type ToastProps = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
  variant?: "default" | "destructive";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

// Create a simplified toast function
export const toast = ({ title, description, variant }: { 
  title?: React.ReactNode; 
  description?: React.ReactNode; 
  variant?: "default" | "destructive";
}) => {
  // This is a simplified version that logs to console
  console.log('Toast:', title, description);
  return { id: Date.now().toString() };
};

export const useToast = () => {
  return {
    toast,
    toasts: [] as ToastProps[],
    dismiss: () => {}
  };
};
