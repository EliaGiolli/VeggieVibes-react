import { cva, type VariantProps } from "class-variance-authority";
import { type HTMLAttributes } from "react";
import { cn } from "@/core/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-green-700 text-white hover:bg-green-800 focus:ring-green-600",
        secondary:
          "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 focus:ring-zinc-400",
        destructive:
          "bg-red-100 text-red-700 hover:bg-red-200 focus:ring-red-500",
        outline:
          "border border-green-700 text-green-700 hover:bg-green-50 focus:ring-green-600",
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
