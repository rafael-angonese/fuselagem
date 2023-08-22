import React, { ComponentProps } from "react";

interface TableColumnProps extends ComponentProps<"th"> {}

const TableColumn: React.FC<TableColumnProps> = ({ ...props }) => {
  return (
    <th
      className={
        "h-12 px-4 text-left font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0"
      }
      {...props}
    />
  );
};

export default TableColumn;
