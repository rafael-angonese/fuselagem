"use client";
import { Item } from "@radix-ui/react-accordion";
import React from "react";

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof Item>,
  React.ComponentPropsWithoutRef<typeof Item>
>(({ className, ...props }, ref) => (
  <Item ref={ref} className={"border-b"} {...props} />
));
AccordionItem.displayName = Item.displayName;

export { AccordionItem };
