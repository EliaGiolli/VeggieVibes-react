import { cva, type VariantProps } from "class-variance-authority";
import { type ButtonHTMLAttributes } from "react";
import { cn } from "@/core/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-[0.97]",
  {
    variants: {
      variant: {
        default:
          "bg-emerald-700 text-white shadow-sm hover:bg-emerald-800 focus-visible:ring-emerald-600",
        outline:
          "border-2 border-emerald-700 text-emerald-700 bg-transparent hover:bg-emerald-50 focus-visible:ring-emerald-600",
        ghost:
          "text-emerald-700 hover:bg-emerald-50 focus-visible:ring-emerald-600",
        secondary:
          "bg-stone-100 text-stone-800 hover:bg-stone-200 focus-visible:ring-stone-400",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
        accent:
          "bg-amber-500 text-white shadow-sm hover:bg-amber-600 focus-visible:ring-amber-400",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 rounded-lg px-3.5 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { buttonVariants };
export default Button;
