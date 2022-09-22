import React, { createContext, HTMLAttributes, ReactNode, useId } from "react";
import clsx from "../../../utils/clsx";

export interface IFormControlContext {
  id: string;
  isInvalid: boolean;
  isDisabled: boolean;
  isRequired: boolean;
}

export const FormControlContext = createContext<IFormControlContext | null>(
  null
);

interface FormControlProps extends HTMLAttributes<HTMLDivElement> {
  isInvalid?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  children?: ReactNode;
}

const FormControl: React.FC<FormControlProps> = ({
  isInvalid = false,
  isDisabled = false,
  isRequired = false,
  className: classes,
  children,
  ...props
}) => {
  const uuid = useId();

  return (
    <>
      <FormControlContext.Provider
        value={{
          id: uuid,
          isInvalid,
          isDisabled,
          isRequired,
        }}
      >
        <div {...props} className={clsx("", [classes])}>
          {children}
        </div>
      </FormControlContext.Provider>
    </>
  );
};

export default FormControl;
