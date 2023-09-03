"use client";
import { Trigger } from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import React from "react";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger>
>(({ className, children, ...props }, ref) => (
  <Trigger
    ref={ref}
    className={
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180"
    }
    {...props}
  >
    {children}
    <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
  </Trigger>
));
AccordionTrigger.displayName = Trigger.displayName;

export { AccordionTrigger };
