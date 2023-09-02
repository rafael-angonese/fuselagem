import { HTMLAttributes, forwardRef } from "react";
import { tv } from "tailwind-variants";

const headVariants = tv({
  base: "[&_tr]:border-b",
});

const TableHead = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={headVariants({ className })} {...props} />
));

TableHead.displayName = "TableHead";

export { TableHead, headVariants };
