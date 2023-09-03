"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import React from "react";
import { tv, VariantProps } from "tailwind-variants";

const TooltipProvider = TooltipPrimitive.Provider;
const TooltipRoot = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = TooltipPrimitive.Content;
const TooltipArrow = TooltipPrimitive.Arrow;

const tooltipVariants = tv({
  slots: {
    content: [
      "z-50 overflow-hidden rounded-md",
      "border",
      "px-4 py-2 text-sm",
      "shadow-md animate-in fade-in-0 zoom-in-95",
      "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
      "data-[state=closed]:zoom-out-95 ",
      "data-[side=top]:slide-in-from-bottom-2",
      "data-[side=bottom]:slide-in-from-top-2",
      "data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2",
      "text-slate-950 dark:text-slate-50",
      "border-slate-200 dark:border-slate-800",
      "bg-white dark:bg-slate-950",
    ],
    arrow: "fill-current text-white dark:text-gray-800",
  },
  variants: {},
  defaultVariants: {},
});

export interface TooltipProps
  extends React.ComponentPropsWithoutRef<typeof TooltipContent>,
    VariantProps<typeof tooltipVariants> {
  showArrow?: boolean;
}

const Tooltip = React.forwardRef<
  React.ElementRef<typeof TooltipContent>,
  TooltipProps
>(
  (
    {
      showArrow = true,
      className,
      sideOffset = 4,
      side,
      children,
      content: text,
      ...props
    },
    ref
  ) => {
    const { content, arrow } = tooltipVariants({ className });

    return (
      <TooltipProvider>
        <TooltipRoot>
          <TooltipTrigger asChild>{children}</TooltipTrigger>
          <TooltipContent
            ref={ref}
            side={side}
            sideOffset={sideOffset}
            className={content()}
            {...props}
          >
            {showArrow && (
              <TooltipArrow width={12} height={6} className={arrow()} />
            )}
            {text}
          </TooltipContent>
        </TooltipRoot>
      </TooltipProvider>
    );
  }
);

Tooltip.displayName = "Tooltip";

export {
  Tooltip,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  TooltipContent,
  TooltipArrow,
  tooltipVariants,
};
