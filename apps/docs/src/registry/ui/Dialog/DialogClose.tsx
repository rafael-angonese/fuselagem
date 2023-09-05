import { Close } from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import React from "react";

const DialogClose = React.forwardRef<
  React.ElementRef<typeof Close>,
  React.ComponentPropsWithoutRef<typeof Close>
>(({ className, children, ...props }, ref) => (
  <Close
    ref={ref}
    className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400"
  >
    <X className="h-4 w-4" />
    <span className="sr-only">Close</span>
  </Close>
));
DialogClose.displayName = Close.displayName;

export { DialogClose };
