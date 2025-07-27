import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary-green text-white hover:bg-primary-green/90 hover:shadow-kid-lg hover:scale-105 hover:-translate-y-1 active:scale-95",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-primary-purple/30 text-primary-purple hover:bg-primary-purple/10 hover:border-primary-purple/50 hover:shadow-md hover:scale-105",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-primary-purple via-primary-blue to-primary-pink text-white hover:shadow-glow hover:scale-105 hover:-translate-y-1",
        glass: "bg-white/20 backdrop-blur-sm border border-white/30 text-gray-800 hover:bg-white/30 hover:shadow-kid hover:scale-105",
        success: "bg-success text-white hover:bg-success/90 hover:shadow-kid-lg hover:scale-105",
        warning: "bg-warning text-white hover:bg-warning/90 hover:shadow-kid-lg hover:scale-105",
        info: "bg-info text-white hover:bg-info/90 hover:shadow-kid-lg hover:scale-105",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-full px-3",
        lg: "h-14 rounded-full px-8",
        xl: "h-16 rounded-full px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
