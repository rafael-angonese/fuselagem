import React, { ComponentProps } from "react";

import { VariantProps, tv } from "tailwind-variants";

const gridVariants = tv({
  base: "grid grid-cols-12 gap-4",
  variants: {},
});

type GridVariants = VariantProps<typeof gridVariants>;

interface GridProps extends ComponentProps<"div">, GridVariants {}

const Grid: React.FC<GridProps> = ({ className, children }) => {
  return (
    <>
      <div className={gridVariants({ className })}>{children}</div>
    </>
  );
};

export default Grid;
