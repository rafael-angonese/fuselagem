import React, { ComponentProps } from "react";

interface TableProps extends ComponentProps<"table"> {}

const Table: React.FC<TableProps> = ({ ...props }) => {
  return (
    <div className="w-full overflow-auto">
      <table className={"w-full caption-bottom text-sm"} {...props} />
    </div>
  );
};

export default Table;
