import { cva, type VariantProps } from "class-variance-authority";
import { type InputHTMLAttributes } from "react";
import { cn } from "@/core/lib/utils";

const inputVariants = cva(
  "flex w-full rounded-xl text-sm transition-all duration-150 placeholder:text-stone-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border border-stone-300 bg-white text-stone-900 focus-visible:ring-emerald-500 focus-visible:border-emerald-500",
        search:
          "border-2 border-white bg-white text-stone-900 placeholder:text-stone-500 focus-visible:ring-amber-400 focus-visible:border-amber-400",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-5 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

function Input({ className, variant, size, ...props }: InputProps) {
  return (
    <input
      className={cn(inputVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export default Input;
