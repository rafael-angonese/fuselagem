"use client";

import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as React from "react";

import { VariantProps, tv } from "tailwind-variants";

const switchVariants = tv({
  slots: {
    root: [
      "peer inline-flex shrink-0",
      "cursor-pointer items-center rounded-full",
      "border-2 border-transparent transition-colors",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-300",
      "focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=checked]:bg-slate-900 dark:data-[state=checked]:bg-slate-50",
      "data-[state=unchecked]:bg-slate-200 dark:data-[state=unchecked]:bg-slate-800",
      "",
    ],
    thumb: [
      "pointer-events-none block rounded-full",
      "shadow-lg ring-0 transition-transform",
      "bg-white dark:bg-slate-950",
      "data-[state=checked]:translate-x-full",
      "data-[state=unchecked]:translate-x-1",
    ],
  },
  variants: {
    color: {
      primary: {
        root: [
          "border-blue-500 dark:border-blue-500",
          "data-[state=checked]:bg-blue-500 dark:data-[state=checked]:bg-blue-500",
        ],
      },
      secondary: {
        root: [
          "border-purple-500 dark:border-purple-500",
          "data-[state=checked]:bg-purple-500 dark:data-[state=checked]:bg-purple-500",
        ],
      },
      success: {
        root: [
          "border-green-500 dark:border-green-500",
          "data-[state=checked]:bg-green-500 dark:data-[state=checked]:bg-green-500",
        ],
      },
      warning: {
        root: [
          "border-yellow-500 dark:border-yellow-500",
          "data-[state=checked]:bg-yellow-500 dark:data-[state=checked]:bg-yellow-500",
        ],
      },
      error: {
        root: [
          "border-red-500 dark:border-red-500",
          "data-[state=checked]:bg-red-500 dark:data-[state=checked]:bg-red-500",
        ],
      },
    },
    size: {
      xs: {
        root: "w-10 h-6",
        thumb: "w-4 h-4",
      },
      sm: {
        root: "w-12 h-7",
        thumb: "w-5 h-5",
      },
      md: {
        root: "w-14 h-8",
        thumb: "w-6 h-6",
      },
      lg: {
        root: "w-16 h-9",
        thumb: "w-7 h-7",
      },
      xl: {
        root: "w-20 h-11",
        thumb: "w-9 h-9",
      },
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
  },
});

export interface SwitchProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
      "size" | "color"
    >,
    VariantProps<typeof switchVariants> {}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ color, size, className, ...props }, ref) => {
  const { root, thumb } = switchVariants({
    color,
    size,
    className,
  });

  return (
    <SwitchPrimitives.Root className={root({ className })} {...props} ref={ref}>
      <SwitchPrimitives.Thumb className={thumb()} />
    </SwitchPrimitives.Root>
  );
});

Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch, switchVariants };
