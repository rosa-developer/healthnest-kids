
import React from 'react';
import { toast as sonnerToast } from 'sonner';

// Create a toast implementation using sonner
export type ToastProps = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactElement;
  variant?: "default" | "destructive" | "success" | "warning";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  duration?: number;
};

export const toast = ({ 
  title, 
  description, 
  variant = "default",
  action,
  duration = 4000
}: { 
  title?: React.ReactNode; 
  description?: React.ReactNode; 
  variant?: "default" | "destructive" | "success" | "warning";
  action?: React.ReactElement;
  duration?: number;
}) => {
  // Map our variant to Sonner's expected styling
  let style: React.CSSProperties = {};
  
  switch (variant) {
    case 'destructive':
      style = { 
        backgroundColor: 'rgb(239, 68, 68)', 
        color: 'white',
        borderRadius: '0.75rem',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      };
      break;
    case 'success':
      style = { 
        backgroundColor: 'rgb(34, 197, 94)', 
        color: 'white',
        borderRadius: '0.75rem',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      };
      break;
    case 'warning':
      style = { 
        backgroundColor: 'rgb(234, 179, 8)', 
        color: 'white',
        borderRadius: '0.75rem',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      };
      break;
    default:
      style = { 
        borderRadius: '0.75rem',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
      };
  }
  
  // Use sonner toast for actual toast display
  sonnerToast(title as string, {
    description,
    style,
    duration,
    action
  });
  
  return { id: Date.now().toString() };
};

export const useToast = () => {
  return {
    toast,
    toasts: [] as ToastProps[],
    dismiss: (id: string) => sonnerToast.dismiss(id),
    success: (props: Omit<Parameters<typeof toast>[0], 'variant'>) => 
      toast({ ...props, variant: 'success' }),
    error: (props: Omit<Parameters<typeof toast>[0], 'variant'>) => 
      toast({ ...props, variant: 'destructive' }),
    warning: (props: Omit<Parameters<typeof toast>[0], 'variant'>) => 
      toast({ ...props, variant: 'warning' })
  };
};
