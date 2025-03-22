
import React from 'react';
import { toast as sonnerToast } from 'sonner';

// Create a toast implementation using sonner
export type ToastProps = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactElement;
  variant?: "default" | "destructive";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export const toast = ({ title, description, variant }: { 
  title?: React.ReactNode; 
  description?: React.ReactNode; 
  variant?: "default" | "destructive";
}) => {
  // Use sonner toast for actual toast display
  sonnerToast(title as string, {
    description,
    type: variant === 'destructive' ? 'error' : 'default'
  });
  
  return { id: Date.now().toString() };
};

export const useToast = () => {
  return {
    toast,
    toasts: [] as ToastProps[],
    dismiss: (id: string) => sonnerToast.dismiss(id)
  };
};
