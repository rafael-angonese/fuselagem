import React, { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const textareaVariants = tv({
  base: [
    "flex min-h-[80px] w-full border rounded-md p-2.5 focus:outline-4 placeholder:text-gray-400",
    "disabled:cursor-not-allowed disabled:opacity-50",
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

export interface TextareaProps
  extends Omit<ComponentProps<"textarea">, "size">,
    VariantProps<typeof textareaVariants> {
  isInvalid?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ size, isInvalid, className, ...props }, ref) => {
    return (
      <textarea
        className={textareaVariants({
          isInvalid,
          size,
        })}
        ref={ref}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea, textareaVariants };
