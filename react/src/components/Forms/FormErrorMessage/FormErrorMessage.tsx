import React, { HTMLAttributes, ReactNode } from "react";
import clsx from "../../../utils/clsx";

interface FormErrorMessageProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

const FormErrorMessage: React.FC<FormErrorMessageProps> = ({
  className: classes,
  children,
}) => {
  return (
    <>
      <span
        className={clsx("mt-2 ml-2 text-sm text-red-500 dark:text-red-400", [
          classes,
        ])}
      >
        {children}
      </span>
    </>
  );
};

export default FormErrorMessage;
