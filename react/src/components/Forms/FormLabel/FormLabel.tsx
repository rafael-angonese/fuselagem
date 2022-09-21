import React, { LabelHTMLAttributes, ReactNode, useContext } from "react";
import clsx from "../../../utils/clsx";
import { FormControlContext } from "../FormControl/FormControl";

interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

const FormLabel: React.FC<FormLabelProps> = ({
  children,
  className: classes,
  ...props
}) => {
  const context = useContext(FormControlContext);

  return (
    <>
      <label
        {...props}
        {...(context && { htmlFor: context.id })}
        className={clsx(
          "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",
          {
            "text-red-500 dark:text-red-400": context && context.isInvalid,
          },
          [classes]
        )}
      >
        {children}
      </label>
    </>
  );
};

export default FormLabel;
