
import * as React from "react";
import { toast as uiToast } from "@/components/ui/use-toast";

// Re-export the simplified toast function to avoid circular dependencies
export const toast = uiToast;

export const useToast = () => {
  return {
    toast,
    toasts: [],
    dismiss: () => {}
  };
};
