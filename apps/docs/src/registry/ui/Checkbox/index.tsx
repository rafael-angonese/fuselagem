"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import * as React from "react";

import { VariantProps, tv } from "tailwind-variants";

const checkboxVariants = tv({
  slots: {
    root: [
      "peer shrink-0 border",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      "ring-offset-white dark:ring-offset-slate-950",
      "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-300",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=checked]:text-white dark:data-[state=checked]:text-white",
      "relative before:content[''] before:rounded-full",
      "transition-all before:absolute",
      "before:top-2/4 before:left-2/4 before:block",
      "before:-translate-y-2/4 before:-translate-x-2/4",
      "before:opacity-0 before:transition-opacity",
      "hover:before:opacity-10",
    ],
    indicator: "flex items-center justify-center text-current",
    icon: "",
  },
  variants: {
    color: {
      primary: {
        root: [
          "border-blue-500 dark:border-blue-500",
          "data-[state=checked]:bg-blue-500 dark:data-[state=checked]:bg-blue-500",
          "before:bg-blue-500",
        ],
      },
      secondary: {
        root: [
          "border-purple-500 dark:border-purple-500",
          "data-[state=checked]:bg-purple-500 dark:data-[state=checked]:bg-purple-500",
          "before:bg-purple-500",
        ],
      },
      success: {
        root: [
          "border-green-500 dark:border-green-500",
          "data-[state=checked]:bg-green-500 dark:data-[state=checked]:bg-green-500",
          "before:bg-green-500",
        ],
      },
      warning: {
        root: [
          "border-yellow-500 dark:border-yellow-500",
          "data-[state=checked]:bg-yellow-500 dark:data-[state=checked]:bg-yellow-500",
          "before:bg-yellow-500",
        ],
      },
      error: {
        root: [
          "border-red-500 dark:border-red-500",
          "data-[state=checked]:bg-red-500 dark:data-[state=checked]:bg-red-500",
          "before:bg-red-500",
        ],
      },
    },
    rounded: {
      none: {
        root: "rounded-none",
      },
      sm: {
        root: "rounded-sm",
      },
      rounded: {
        root: "rounded",
      },
      md: {
        root: "rounded-md",
      },
      lg: {
        root: "rounded-lg",
      },
      xl: {
        root: "rounded-xl",
      },
      "2xl": {
        root: "rounded-2xl",
      },
      "3xl": {
        root: "rounded-3xl",
      },
      full: {
        root: "rounded-full",
      },
    },
    size: {
      xs: {
        root: "h-4 w-4 before:h-8 before:w-8",
        icon: "h-4 w-4",
      },
      sm: {
        root: "h-5 w-5 before:h-10 before:w-10",
        icon: "h-5 w-5",
      },
      md: {
        root: "h-6 w-6 before:h-12 before:w-12",
        icon: "h-6 w-6",
      },
      lg: {
        root: "h-7 w-7 before:h-14 before:w-14",
        icon: "h-7 w-7",
      },
      xl: {
        root: "h-8 w-8 before:h-16 before:w-16",
        icon: "h-8 w-8",
      },
    },
  },
  defaultVariants: {
    color: "primary",
    rounded: "md",
    size: "md",
  },
});

export interface CheckboxProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
      "size" | "color"
    >,
    VariantProps<typeof checkboxVariants> {}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ color, rounded, size, className, ...props }, ref) => {
  const { root, indicator, icon } = checkboxVariants({
    color,
    rounded,
    size,
    className,
  });

  return (
    <CheckboxPrimitive.Root ref={ref} className={root()} {...props}>
      <CheckboxPrimitive.Indicator className={indicator()}>
        <Check className={icon()} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox, checkboxVariants };
