import { HTMLAttributes, forwardRef } from "react";
import { tv } from "tailwind-variants";

const tableVariants = tv({
  slots: {
    wrapper: "w-full overflow-auto",
    base: "w-full caption-bottom text-sm",
  },
});

const TableRoot = forwardRef<
  HTMLTableElement,
  HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => {
  const { base, wrapper } = tableVariants();

  return (
    <div className={wrapper()}>
      <table ref={ref} className={base({ className })} {...props} />
    </div>
  );
});

TableRoot.displayName = "Table";

export { TableRoot, tableVariants };
