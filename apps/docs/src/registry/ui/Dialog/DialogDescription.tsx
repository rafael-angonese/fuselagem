import { Description } from "@radix-ui/react-dialog";
import React from "react";

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof Description>,
  React.ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, ref) => (
  <Description
    ref={ref}
    className={"text-sm text-slate-500 dark:text-slate-400"}
    {...props}
  />
));
DialogDescription.displayName = Description.displayName;

export { DialogDescription };
