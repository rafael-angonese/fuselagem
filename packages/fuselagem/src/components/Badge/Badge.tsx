import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import React, { ReactNode } from "react";

const baseVariants = cva("text-white text-xs font-semibold rounded-full", {
  variants: {
    color: {
      primary: "bg-blue-400",
      secondary: "bg-purple-400",
      success: "bg-green-400",
      warning: "bg-yellow-400",
      error: "bg-red-400",
    },
    size: {
      xs: "px-2 py-0.2",
      sm: "px-2.5 py-0.5",
      md: "px-3 py-1",
      lg: "px-3.5 py-1.5",
      xl: "px-4 py-2",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
  },
});

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">,
    VariantProps<typeof baseVariants> {
  children?: ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
  size,
  color,
  className: classes,
  children,
  ...props
}) => {
  return (
    <>
      <span
        {...props}
        className={cn(
          baseVariants({
            size,
            color,
          }),
          classes
        )}
        {...props}
      >
        {children}
      </span>
    </>
  );
};

export default Badge;
