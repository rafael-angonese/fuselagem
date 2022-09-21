import React, { createContext, ReactNode, useId } from "react";

export interface IFormControlContext {
  id: string;
  isInvalid: boolean;
  isDisabled: boolean;
  isRequired: boolean;
}

export const FormControlContext = createContext<IFormControlContext | null>(
  null
);

interface FormControlProps {
  isInvalid?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  children?: ReactNode;
}

const FormControl: React.FC<FormControlProps> = ({
  isInvalid = false,
  isDisabled = false,
  isRequired = false,
  children,
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
        {children}
      </FormControlContext.Provider>
    </>
  );
};

export default FormControl;
