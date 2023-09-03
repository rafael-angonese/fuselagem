"use client";
import { Header, Trigger } from "@radix-ui/react-accordion";
import React from "react";

const AccordionHeader = React.forwardRef<
  React.ElementRef<typeof Header>,
  React.ComponentPropsWithoutRef<typeof Header>
>(({ className, children, ...props }, ref) => (
  <Header className="flex">{children}</Header>
));
AccordionHeader.displayName = Trigger.displayName;

export { AccordionHeader };
