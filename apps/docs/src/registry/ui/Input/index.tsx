import { ComponentProps, forwardRef } from "react";
import { VariantProps, tv } from "tailwind-variants";

const inputVariants = tv({
  base: [
    "w-full border-2 text-sm rounded-lg focus:outline-1 block p-2.5 placeholder:text-gray-400",
    "bg-white border-gray-300 hover:border-gray-400 text-black focus:outline-gray-500",
    "dark:bg-black dark:text-white dark:border-gray-500 dark:hover:border-gray-400 focus:dark:border-gray-300 dark:focus:outline-0",
    "disabled:opacity-50 disabled:cursor-not-allowed",
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
        "border-red-500 hover:border-red-500 text-red-500 focus:outline-red-500",
        "dark:text-red-500 dark:border-red-500 dark:hover:border-red-500 focus:dark:border-red-500 dark:focus:outline-0",
      ],
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface InputProps
  extends Omit<ComponentProps<"input">, "size">,
    VariantProps<typeof inputVariants> {
  isInvalid?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ isInvalid, size, className, ...props }, ref) => {
    return (
      <input
        className={inputVariants({
          isInvalid,
          size,
          className,
        })}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants };
