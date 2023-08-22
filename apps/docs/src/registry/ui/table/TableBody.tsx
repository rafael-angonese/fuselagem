import React, { ComponentProps } from "react";

interface TableBodyProps extends ComponentProps<"tbody"> {}

const TableBody: React.FC<TableBodyProps> = ({ ...props }) => {
  return <tbody className={"[&_tr:last-child]:border-0"} {...props} />;
};

export default TableBody;
