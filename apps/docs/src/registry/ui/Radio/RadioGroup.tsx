"use client";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as React from "react";

import { tv, VariantProps } from "tailwind-variants";

const groupVariants = tv({
  base: "gap-4",
  variants: {
    orientation: {
      vertical: "flex flex-col",
      horizontal: "flex",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>,
    VariantProps<typeof groupVariants> {}

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ orientation, className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={groupVariants({ orientation, className })}
      {...props}
      ref={ref}
    />
  );
});

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

export { groupVariants, RadioGroup };
