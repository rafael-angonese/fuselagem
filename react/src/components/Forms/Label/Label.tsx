import React, { InputHTMLAttributes, ReactNode } from "react";

interface LabelProps extends InputHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

const Label: React.FC<LabelProps> = ({ children, ...props }) => {
  return (
    <>
      <label {...props}>{children}</label>
    </>
  );
};

export default Label;
