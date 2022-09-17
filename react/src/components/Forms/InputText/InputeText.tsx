import { ComponentProps, forwardRef, InputHTMLAttributes } from "react";
import clsx from "../../../utils/clsx";
import HelperText from "../HelperText/HelperText";
import Label from "../Label/Label";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isInvalid?: boolean;
  helperText?: string;
  leftIcon?: React.FC<ComponentProps<"svg">>;
  rightIcon?: React.FC<ComponentProps<"svg">>;
}

const InputText = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      isInvalid,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      ...props
    },
    ref
  ) => {
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

        <div className="relative">
          {LeftIcon && (
            <div className="flex absolute inset-y-0 left-0 items-center pl-2 pointer-events-none">
              <LeftIcon />
            </div>
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
                [`pl-8`]: LeftIcon,
              }
            )}
          />
          {RightIcon && (
            <div className="flex absolute inset-y-0 right-0 items-center pr-2">
              <RightIcon />
            </div>
          )}
        </div>
        {helperText && <HelperText>{helperText}</HelperText>}
      </>
    );
  }
);

export default InputText;
