import React, { ReactNode } from "react";

interface HelperTextProps {
  children: ReactNode;
}

const HelperText: React.FC<HelperTextProps> = ({ children }) => {
  return (
    <>
      <span className="mt-2 ml-2 text-sm text-red-600 dark:text-red-500">
        {children}
      </span>
    </>
  );
};

export default HelperText;
