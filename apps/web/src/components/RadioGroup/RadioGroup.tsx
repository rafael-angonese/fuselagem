import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import React, { ReactNode } from "react";

interface RadioGroupProps
  extends React.ComponentProps<typeof RadioGroupPrimitive.Root> {
  children?: ReactNode;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ children, ...props }) => {
  return (
    <>
      <RadioGroupPrimitive.Root {...props}>{children}</RadioGroupPrimitive.Root>
    </>
  );
};

export default RadioGroup;
