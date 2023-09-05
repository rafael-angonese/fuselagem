import { Title } from "@radix-ui/react-dialog";
import React from "react";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof Title>,
  React.ComponentPropsWithoutRef<typeof Title>
>(({ className, ...props }, ref) => (
  <Title
    ref={ref}
    className={"text-lg font-semibold leading-none tracking-tight"}
    {...props}
  />
));
DialogTitle.displayName = Title.displayName;

export { DialogTitle };
