"use client";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import * as React from "react";

import { tv, VariantProps } from "tailwind-variants";

const itemVariants = tv({
  slots: {
    item: [
      "peer aspect-square rounded-full",
      "border",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-300",
      "ring-offset-white dark:ring-offset-slate-950",

      "relative before:content[''] before:rounded-full",
      "transition-all before:absolute",
      "before:top-2/4 before:left-2/4 before:block",
      "before:-translate-y-2/4 before:-translate-x-2/4",
      "before:opacity-0 before:transition-opacity",
      "hover:before:opacity-10 dark:hover:before:opacity-20",
    ],
    indicator: ["flex items-center justify-center"],
    icon: ["fill-current text-current"],
  },
  variants: {
    color: {
      primary: {
        item: [
          "border-blue-500 dark:border-blue-500",
          "text-blue-500 dark:text-blue-500",
          "before:bg-blue-500",
        ],
      },
      secondary: {
        item: [
          "border-purple-500 dark:border-purple-500",
          "text-purple-500 dark:text-purple-500",
          "before:bg-purple-500",
        ],
      },
      success: {
        item: [
          "border-green-500 dark:border-green-500",
          "text-green-500 dark:text-green-500",
          "before:bg-success-500",
        ],
      },
      warning: {
        item: [
          "border-yellow-500 dark:border-yellow-500",
          "text-yellow-500 dark:text-yellow-500",
          "before:bg-yellow-500",
        ],
      },
      error: {
        item: [
          "border-red-500 dark:border-red-500",
          "text-red-500 dark:text-red-500",
          "before:bg-red-500",
        ],
      },
    },
    size: {
      xs: {
        item: "h-4 w-4 before:h-8 before:w-8",
        icon: "h-2.5 w-2.5",
      },
      sm: {
        item: "h-5 w-5 before:h-10 before:w-10",
        icon: "h-3.5 w-3.5",
      },
      md: {
        item: "h-6 w-6 before:h-12 before:w-12",
        icon: "h-4 w-4",
      },
      lg: {
        item: "h-7 w-7 before:h-14 before:w-14",
        icon: "h-5 w-5",
      },
      xl: {
        item: "h-8 w-8 before:h-16 before:w-16",
        icon: "h-6 w-6",
      },
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
  },
});

export interface RadioItemProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
      "color"
    >,
    VariantProps<typeof itemVariants> {}

const RadioItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioItemProps
>(({ color, size, className, children, ...props }, ref) => {
  const { item, indicator, icon } = itemVariants({
    color,
    size,

    className,
  });

  return (
    <RadioGroupPrimitive.Item ref={ref} className={item()} {...props}>
      <RadioGroupPrimitive.Indicator className={indicator()}>
        <Circle className={icon()} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});

RadioItem.displayName = RadioGroupPrimitive.Item.displayName;

export { itemVariants, RadioItem };
