import { forwardRef, InputHTMLAttributes } from "react";
import clsx from "../../../utils/clsx";
import HelperText from "../HelperText/HelperText";
import Label from "../Label/Label";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isInvalid?: boolean;
  helperText?: string;
}

const InputText = forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, isInvalid, ...props }, ref) => {
    return (
      <>
        {label && (
          <Label
            className={clsx(
              `block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300`,
              {
                [`text-red-700 dark:text-red-500`]: isInvalid,
              }
            )}
          >
            {label}
          </Label>
        )}
        <input
          {...props}
          ref={ref}
          type="text"
          className={clsx(
            `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:outline-4 placeholder:text-gray-400 focus:outline-blue-500 block w-full p-2.5`,
            {
              [`border-red-500 text-red-900 placeholder:text-red-700 focus:ring-red-500 focus:outline-red-500`]:
                isInvalid,
            }
          )}
        />
        {helperText && <HelperText>{helperText}</HelperText>}
      </>
    );
  }
);

export default InputText;
