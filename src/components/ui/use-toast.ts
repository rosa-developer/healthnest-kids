
// This file re-exports the toast functionality from the hooks folder
import { useToast as useToastHook, toast } from "@/hooks/use-toast";

export const useToast = useToastHook;
export { toast };
