import React, { ComponentProps } from "react";

interface TableHeadProps extends ComponentProps<"thead"> {}

const TableHead: React.FC<TableHeadProps> = ({ ...props }) => {
  return <thead className={"[&_tr]:border-b"} {...props} />;
};

export default TableHead;
