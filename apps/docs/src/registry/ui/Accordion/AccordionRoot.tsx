"use client";

import { Root } from "@radix-ui/react-accordion";

const AccordionRoot: React.FC<React.ComponentPropsWithoutRef<typeof Root>> = ({
  ...props
}) => {
  return <Root {...props} />;
};

AccordionRoot.displayName = Root.displayName;

export { AccordionRoot };
