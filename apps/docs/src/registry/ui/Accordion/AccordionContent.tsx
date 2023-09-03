"use client";
import { Content } from "@radix-ui/react-accordion";
import React from "react";

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, children, ...props }, ref) => (
  <Content
    ref={ref}
    className={
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    }
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </Content>
));
AccordionContent.displayName = Content.displayName;

export { AccordionContent };
