import { cva, type VariantProps } from "class-variance-authority";
import { type InputHTMLAttributes } from "react";
import { cn } from "@/core/lib/utils";

const inputVariants = cva(
  "flex w-full rounded-md text-sm transition-colors placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border border-zinc-300 bg-white text-zinc-900 focus-visible:ring-green-500 focus-visible:border-green-500",
        search:
          "border-transparent bg-zinc-200 text-center hover:bg-amber-100 focus-visible:ring-amber-400 focus-visible:border-amber-400",
      },
      size: {
        default: "h-9 px-3 py-1",
        sm: "h-8 px-2.5 text-xs",
        lg: "h-11 px-4 text-base",
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
