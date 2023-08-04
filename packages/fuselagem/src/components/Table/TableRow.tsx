import React, { ComponentProps } from "react";

interface TableRowProps extends ComponentProps<"tr"> {}

const TableRow: React.FC<TableRowProps> = ({ ...props }) => {
  return (
    <tr
      className={
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
      }
      {...props}
    />
  );
};

export default TableRow;
