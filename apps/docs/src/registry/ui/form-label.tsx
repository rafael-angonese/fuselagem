import React, { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const formLabelVariants = tv({
  base: "text-sm font-medium text-slate-700 dark:text-white",
  variants: {
    size: {
      xs: "",
      sm: "",
      md: "",
      lg: "",
      xl: "",
    },
    disabled: {
      true: "opacity-80 !cursor-not-allowed",
    },
    isInvalid: {
      true: "text-red-500  dark:text-red-500",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type FormaLabelVariants = VariantProps<typeof formLabelVariants>;

export interface FormLabelProps
  extends Omit<ComponentProps<"label">, "color" | "size">,
    FormaLabelVariants {
  disabled?: boolean;
  isInvalid?: boolean;
  required?: boolean;
}

const FormLabel: React.FC<FormLabelProps> = ({
  disabled,
  isInvalid,
  size,
  className: classes,
  required,
  children,
  ...props
}) => {
  return (
    <label
      {...props}
      className={formLabelVariants({
        disabled,
        isInvalid,
        size,
      })}
    >
      {children}
      {required && <span className="text-red-500">&nbsp;*</span>}
    </label>
  );
};

FormLabel.displayName = "FormLabel";

export { FormLabel, formLabelVariants };
