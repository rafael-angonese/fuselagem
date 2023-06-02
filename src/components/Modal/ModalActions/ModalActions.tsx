import React, { ReactNode } from "react";
import clsx from "../../../utils/clsx";

interface ModalActionsProps {
  children?: ReactNode;
  align?: 'start' | 'center' | 'end'
}

const ModalActions: React.FC<ModalActionsProps> = ({ align = 'left', children }) => {
  return (
    <div className={clsx(
      "flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600",
      {   [`justify-${align}`]: align }
    )}>
      {children}
    </div>
  );
};

export default ModalActions;
