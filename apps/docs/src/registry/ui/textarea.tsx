import React, { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const textareaVariants = tv({
  base: [
    "w-fit min-w-[300px] border rounded-md p-2.5 focus:outline-4 placeholder:text-gray-400",
    "bg-white border-gray-300 hover:border-gray-400 text-black focus:outline-gray-500",
    "dark:bg-black dark:text-white dark:border-gray-500 dark:hover:border-gray-400 focus:dark:border-gray-300 dark:focus:outline-0",
  ],
  variants: {
    size: {
      xs: "p-2.5 text-base",
      sm: "p-2.5 text-base",
      md: "p-2.5 text-base",
      lg: "p-2.5 text-base",
      xl: "p-2.5 text-base",
    },
    fullWidth: {
      true: "w-full",
    },
    disabled: {
      true: "opacity-80 !cursor-not-allowed",
    },
    isInvalid: {
      true: [
        "placeholder:text-red-500",
        "border-red-500 hover:border-red-500 text-red-500 focus:ring-red-500 focus:outline-red-500",
        "dark:text-red-500 dark:border-red-500 dark:hover:border-red-500  focus:dark:ring-red-500 focus:dark:border-red-500 dark:focus:outline-0",
      ],
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type TextareaVariants = VariantProps<typeof textareaVariants>;

export interface TextAreaProps
  extends Omit<ComponentProps<"textarea">, "color" | "size">,
    TextareaVariants {
  disabled?: boolean;
  isInvalid?: boolean;
}

const Textarea: React.FC<TextAreaProps> = ({
  disabled,
  isInvalid,
  size,
  fullWidth,
  rows = 3,
  className: classes,
  ...props
}) => {
  return (
    <textarea
      className={textareaVariants({
        disabled,
        isInvalid,
        fullWidth,
        size,
      })}
      rows={rows}
      disabled={disabled}
      {...props}
    />
  );
};

Textarea.displayName = "Textarea";

export { Textarea, textareaVariants };
