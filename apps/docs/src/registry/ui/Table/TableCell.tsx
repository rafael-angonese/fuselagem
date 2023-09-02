import React from "react";

import { tv } from "tailwind-variants";

const cellVariants = tv({
  base: "p-4 align-middle [&:has([role=checkbox])]:pr-0",
});

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td ref={ref} className={cellVariants({ className })} {...props} />
));

TableCell.displayName = "TableCell";

export { TableCell, cellVariants };
