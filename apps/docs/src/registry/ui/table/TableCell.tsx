import React, { ComponentProps } from "react";

interface TableCellProps extends ComponentProps<"td"> {}

const TableCell: React.FC<TableCellProps> = ({ ...props }) => {
  return (
    <th
      className={"p-4 text-left [&:has([role=checkbox])]:pr-0"}
      {...props}
    />
  );
};

export default TableCell;
