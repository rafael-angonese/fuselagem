import React, { LabelHTMLAttributes, ReactNode, useContext } from "react";
import clsx from "../../../utils/clsx";
import { FormControlContext } from "../FormControl/FormControl";

interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  required?: boolean;
}

const FormLabel: React.FC<FormLabelProps> = ({
  children,
  required = false,
  className: classes,
  ...props
}) => {
  const context = useContext(FormControlContext);

  return (
    <>
      <label
        {...(context && { htmlFor: context.id })}
        {...props}
        className={clsx(
          "text-sm font-medium text-gray-500 dark:text-gray-300",
          {
            "text-red-500 dark:text-red-400": context && context.isInvalid,
          },
          { "opacity-50 cursor-not-allowed": context && context.isDisabled },
          [classes]
        )}
      >
        {children}
        {required && <span className="text-red-500">&nbsp;*</span>}
      </label>
    </>
  );
};

export default FormLabel;
