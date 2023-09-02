import { Slot } from "@radix-ui/react-slot";
import { ComponentPropsWithRef, ReactNode, forwardRef } from "react";
import { VariantProps, tv } from "tailwind-variants";

const buttonVariants = tv({
  base: "flex items-center justify-center text-white rounded-lg w-fit text-center font-medium focus:outline-none focus:ring-2",
  variants: {
    variant: {
      solid: "",
      outlined: "",
      ghost: "",
    },
    color: {
      primary: "",
      secondary: "",
      success: "",
      warning: "",
      error: "",
    },
    size: {
      xs: "py-2 px-3 text-xs",
      sm: "py-2 px-3 text-sm",
      md: "px-5 py-2.5 text-base",
      lg: "py-3 px-5 text-lg",
      xl: "py-6 px-6 text-xl",
      icon: "h-10 w-10",
    },
    fullWidth: {
      true: "w-full",
    },
    rounded: {
      true: "rounded-full",
    },
    disabled: {
      true: "opacity-50 !cursor-not-allowed",
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
      class:
        "bg-blue-400 hover:bg-blue-500 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    },
    {
      variant: "solid",
      color: "secondary",
      class:
        "bg-purple-400 hover:bg-purple-500 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800",
    },
    {
      variant: "solid",
      color: "success",
      class:
        "bg-green-400 hover:bg-green-500 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
    },
    {
      variant: "solid",
      color: "warning",
      class:
        "bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800",
    },
    {
      variant: "solid",
      color: "error",
      class:
        "bg-red-400 hover:bg-red-500 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800",
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

export interface ButtonProps
  extends Omit<ComponentPropsWithRef<"button">, "color" | "disabled" | "size">,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      color,
      size,
      disabled,
      fullWidth,
      rounded,
      shadow,
      className,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={buttonVariants({
          variant,
          color,
          rounded,
          disabled: disabled ? true : false,
          size,
          shadow,
          fullWidth,
          className,
        })}
        disabled={disabled ? true : false}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
