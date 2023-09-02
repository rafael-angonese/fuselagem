import React, { ComponentProps, ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";

const badgeVariants = tv({
  base: "inline-flex items-center text-white text-xs font-semibold rounded-full max-w-fit",
  variants: {
    variant: {
      solid: "",
      outlined: "",
    },
    color: {
      primary: "",
      secondary: "",
      success: "",
      warning: "",
      error: "",
    },
    size: {
      xs: "px-2 py-0.5 text-xs",
      sm: "px-2.5 py-0.5 text-sm",
      md: "px-3 py-1 text-base",
      lg: "px-3.5 py-1.5 text-lg",
      xl: "px-4 py-2 text-xl",
    },
    shadow: {
      true: "shadow-lg",
    },
  },
  compoundVariants: [
    // SOLID
    {
      variant: "solid",
      color: "primary",
      class: "bg-blue-400",
    },
    {
      variant: "solid",
      color: "secondary",
      class: "bg-purple-400",
    },
    {
      variant: "solid",
      color: "success",
      class: "bg-green-400",
    },
    {
      variant: "solid",
      color: "warning",
      class: "bg-yellow-400",
    },
    {
      variant: "solid",
      color: "error",
      class: "bg-red-400",
    },

    // OUTLINED
    {
      variant: "outlined",
      color: "primary",
      class:
        "text-blue-400 hover:text-white border border-blue-400 hover:bg-blue-500 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800",
    },
    {
      variant: "outlined",
      color: "secondary",
      class:
        "text-purple-400 hover:text-white border border-purple-400 hover:bg-purple-500 focus:ring-purple-300 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900",
    },
    {
      variant: "outlined",
      color: "success",
      class:
        "text-green-400 hover:text-white border border-green-400 hover:bg-green-500 focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800",
    },
    {
      variant: "outlined",
      color: "warning",
      class:
        "text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900",
    },
    {
      variant: "outlined",
      color: "error",
      class:
        "text-red-400 hover:text-white border border-red-400 hover:bg-red-500 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900",
    },

    // SHADOW
    {
      shadow: true,
      color: "primary",
      class: "shadow-blue-400/50",
    },
    {
      shadow: true,
      color: "secondary",
      class: "shadow-purple-400/50",
    },
    {
      shadow: true,
      color: "success",
      class: "shadow-green-400/50",
    },
    {
      shadow: true,
      color: "warning",
      class: "shadow-yellow-400/50",
    },
    {
      shadow: true,
      color: "error",
      class: "shadow-red-400/50",
    },
  ],
  defaultVariants: {
    variant: "solid",
    color: "primary",
    size: "md",
  },
});

type ButtonVariants = VariantProps<typeof badgeVariants>;

export interface BadgeProps
  extends Omit<ComponentProps<"div">, "color">,
    ButtonVariants {
  children?: ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
  variant,
  color,
  size,
  shadow,
  children,
  ...props
}) => {
  return (
    <>
      <div
        {...props}
        className={badgeVariants({
          variant,
          color,
          size,
          shadow,
        })}
      >
        {children}
      </div>
    </>
  );
};

Badge.displayName = "Badge";

export { Badge, badgeVariants };
