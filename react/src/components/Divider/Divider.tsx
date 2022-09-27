import React from "react";
import clsx from "../../utils/clsx";

interface DividerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHRElement>,
    HTMLHRElement
  > {}

const Divider: React.FC<DividerProps> = ({ className: classes, ...props }) => {
  return (
    <>
      <hr
        {...props}
        className={clsx("h-px bg-gray-200 border-0 dark:bg-gray-700", classes)}
      ></hr>
    </>
  );
};

export default Divider;
