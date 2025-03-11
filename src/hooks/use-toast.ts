
import { toast as sonnerToast } from "sonner";

export const toast = ({ title, description, variant }: { 
  title?: string; 
  description?: string; 
  variant?: "default" | "destructive";
}) => {
  sonnerToast[variant === "destructive" ? "error" : "success"](`${title}${description ? `: ${description}` : ''}`);
};

export const useToast = () => {
  return {
    toast,
    dismiss: () => {}
  };
};
