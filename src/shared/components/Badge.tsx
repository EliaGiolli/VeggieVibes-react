import { cva, type VariantProps } from "class-variance-authority";
import { type HTMLAttributes } from "react";
import { cn } from "@/core/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-3 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-emerald-100 text-emerald-800 hover:bg-emerald-200 focus:ring-emerald-500",
        secondary:
          "bg-stone-100 text-stone-700 hover:bg-stone-200 focus:ring-stone-400",
        destructive:
          "bg-red-100 text-red-700 hover:bg-red-200 focus:ring-red-500",
        outline:
          "border border-emerald-600 text-emerald-700 hover:bg-emerald-50 focus:ring-emerald-500",
        warning:
          "bg-amber-100 text-amber-800 hover:bg-amber-200 focus:ring-amber-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, className }))} {...props} />
  );
}

export { badgeVariants };
export default Badge;
